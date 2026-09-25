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
  }),
});

const lokasiCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/lokasi' }),
  schema: z.object({
    title: z.string(),
    areaName: z.string(),
    hubType: z.enum(['Airport', 'Ferry Terminal', 'Industrial Area', 'City Center']),
    pickupTimeEstimate: z.string(),
    deliveryFee: z.number().default(0),
    landmarkKey: z.array(z.string()),
    description: z.string().optional(),
    image: z.string(),
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
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/blog' }),
  schema: z.object({
    title: z.string(),
    lang: z.enum(['id', 'en']).default('id'),
    pubDate: z.coerce.date(),
    author: z.string().default('Tim Operasional Lincah Rent Car'),
    summary: z.string(),
    featuredImage: z.string(),
    relatedCars: z.array(z.string()).optional(),
  }),
});

export const collections = {
  mobil: mobilCollection,
  lokasi: lokasiCollection,
  layanan: layananCollection,
  blog: blogCollection,
};
