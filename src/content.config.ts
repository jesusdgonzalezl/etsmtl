import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string().optional(),
    summary: z.string().optional(),
    order: z.number().default(0),
  }),
});

const students = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/students' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    status: z.enum(['current', 'alumni']).default('current'),
    photo: z.string().optional(),
    research: z.string(),
    degree: z.string().optional(),
    email: z.string().email().optional(),
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['journal', 'conference', 'book', 'thesis', 'other']).default('journal'),
    doi: z.string().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    summary: z.string(),
  }),
});

export const collections = { pages, students, publications, news };
