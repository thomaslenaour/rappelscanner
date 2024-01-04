'use server';

import { z } from 'zod';
import { kv } from '@vercel/kv';
import * as qs from 'qs';

import { ServerActionResponse } from '@/types/action';
import { Product } from '@/types/product';
import { INVALID_DATA_ERROR_MESSAGE } from '@/types/error';
import { RappelConsoApiResponse } from '@/types/rappel-conso';

import { ProductSchema } from '@/app/_schemas/form';

type ProductActionResponseData = { productFound: boolean; product?: Product };

export async function getProductAction(
  data: z.infer<typeof ProductSchema>,
): Promise<ServerActionResponse<ProductActionResponseData>> {
  const parseResult = ProductSchema.safeParse(data);

  if (!parseResult.success) {
    const errors = parseResult.error.flatten().fieldErrors;

    return {
      success: false,
      error: errors?.gtin?.at(0) || INVALID_DATA_ERROR_MESSAGE,
    };
  }

  const gtin = Math.abs(parseInt(data.gtin));
  const params = qs.stringify({
    where: `identification_des_produits like "%${gtin}%"`,
    limit: 1,
    offset: 0,
    order_by: 'date_de_publication desc',
    timezone: 'UTC',
  });

  const response = await fetch(
    `${process.env.RAPPEL_CONSO_API_URL}/records?${params}`,
  );
  if (!response.ok) {
    return {
      success: false,
      error: 'An error occured while fetching the RappelConso API',
    };
  }

  const json = (await response.json()) as RappelConsoApiResponse;
  const lastProduct = json?.records?.[0]?.record;

  await kv.incr('scans');

  return {
    success: true,
    data: {
      productFound: !!lastProduct,
      product: lastProduct
        ? {
            id: lastProduct?.id,
            imageUrl: lastProduct?.fields?.liens_vers_les_images,
            rappelConsoUrl: lastProduct?.fields?.lien_vers_la_fiche_rappel,
          }
        : undefined,
    },
  };
}
