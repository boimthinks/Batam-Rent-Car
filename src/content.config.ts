import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const mobilCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/mobil' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['id', 'en']).default('id'),
    carModel: z.string(),
    category: z.enum(['MPV', 'SUV', 'Van', 'Luxury', 'Niaga']).default('MPV'),
    transmission: z.enum(['Matic', 'Manual', 'Both']),
    seats: z.number(),
    luggageCapacity: z.number(),
    priceDailySelfDrive: z.number().optional(),
    priceDailyWithDriver: z.number(),
    currency: z.literal('IDR').default('IDR'),
    features: z.array(z.string()),
    popularFor: z.string(),
    pickupLocations: z.array(z.string()),
    image: z.string(),
    featured: z.boolean().default(false),
    // English (optional) — used on /en pages, falls back to Indonesian
    titleEn: z.string().optional(),
    popularForEn: z.string().optional(),
    featuresEn: z.array(z.string()).optional(),
    categoryEn: z.string().optional(),
    bodyEn: z.string().optional(),
  }),
});

const lokasiCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/lokasi' }),
  schema: z.object({
    title: z.string(),
    city: z.enum(['Batam', 'Palembang']).default('Batam'),
    areaName: z.string(),
    hubType: z.enum(['Airport', 'Ferry Terminal', 'Industrial Area', 'City Center', 'Train Station', 'Port']),
    pickupTimeEstimate: z.string(),
    deliveryFee: z.number().default(0),
    landmarkKey: z.array(z.string()),
    description: z.string().optional(),
    image: z.string(),
    // English (optional)
    areaNameEn: z.string().optional(),
    hubTypeEn: z.string().optional(),
    descriptionEn: z.string().optional(),
    landmarkKeyEn: z.array(z.string()).optional(),
    pickupTimeEstimateEn: z.string().optional(),
    bodyEn: z.string().optional(),
  }),
});

const layananCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/layanan' }),
  schema: z.object({
    title: z.string(),
    slugCustom: z.string().optional(),
    shortDesc: z.string(),
    badge: z.string().optional(),
    features: z.array(z.string()),
    image: z.string(),
    // English (optional)
    shortDescEn: z.string().optional(),
    badgeEn: z.string().optional(),
    featuresEn: z.array(z.string()).optional(),
    bodyEn: z.string().optional(),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['id', 'en']).default('id'),
    city: z.enum(['Batam', 'Palembang']).default('Batam'),
    pubDate: z.coerce.date(),
    author: z.string().default('Tim Operasional Lincah Rent Car'),
    summary: z.string(),
    featuredImage: z.string(),
    relatedCars: z.array(z.string()).optional(),
    alternateSlug: z.string().optional(),
  }),
});

export const collections = {
  mobil: mobilCollection,
  lokasi: lokasiCollection,
  layanan: layananCollection,
  blog: blogCollection,
};
