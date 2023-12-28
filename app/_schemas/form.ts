import { z } from 'zod';

const requiredErrorMessage = 'Ce champs est obligatoire.';

export const ProductSchema = z.object({
  gtin: z
    .string({ required_error: requiredErrorMessage })
    .min(8, { message: 'Le code GTIN doit faire au moins 8 caractères' })
    .max(14, { message: 'Le code GTIN doit faire au maximum 14 caractères' })
    .regex(/^[\d\s]+$/, {
      message: 'Le numéro GTIN doit uniquement contenir des chiffres.',
    })
    .trim()
    .transform((value) => value.replaceAll(' ', '')),
});
