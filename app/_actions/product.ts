'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { redis } from '@/lib/redis';
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

  const params = qs.stringify({
    where: `identification_produits like '%${data.gtin}%'`,
    limit: 1,
    offset: 0,
    order_by: 'date_publication desc',
    timezone: 'UTC',
  });

  const response = await fetch(
    `${process.env.RAPPEL_CONSO_API_URL}/records?${params}`,
  );
  if (!response.ok) {
    console.error(response);
    const json = await response.json();

    console.error(json);
    return {
      success: false,
      error: 'An error occured while fetching the RappelConso API',
    };
  }

  const json = (await response.json()) as RappelConsoApiResponse;
  const lastProduct = json?.records?.[0]?.record;

  await redis.incr('scans');

  revalidatePath('/');

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
