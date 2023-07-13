import { z, defineCollection, reference } from 'astro:content';

const publicationsCollectionSchema = z.object({
	publications: z.array(
		z.object({
			title: z.string(),
			authors: z.string(),
			year: z.number(),
			selected: z.boolean().default(false),
			doi: z.string().optional(),
			arxiv: z.string().url().optional(),
			abstract: z.string().optional(),
		})
	),
});

export type PublicationsListDataType = z.infer<typeof publicationsCollectionSchema>['publications'];
export type PublicationsDataType = PublicationsListDataType[0];

const postsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		pubDate: z.date(),
		description: z.string(),
		author: reference('people'),
		image: z.object({
			url: z.string(),
			alt: z.string(),
		}),
		// category: z.enum(['Announcement', 'Teaching', 'Review', 'Other']),
		// tags: z.array(z.string()).optional(),
		extra: z.array(z.enum(['math', 'markmap', 'mermaid', 'gallery'])).optional(),
		minutesRead: z.string().optional(),
	}),
});

const peopleCollection = defineCollection({
	type: 'data',
	schema: z.object({
		name: z.string(),
		email: z.string().email().optional(),
		active: z.boolean().default(true),
		academic_position: z.enum(['PhD', 'Post Doc', 'Other']).optional(),
		role: z.enum(['Researcher', 'Other']).optional(),
		itid: z.number().optional(),
	}),
});

const publicationsCollection = defineCollection({
	type: 'data',
	schema: publicationsCollectionSchema,
});

export const collections = {
	posts: postsCollection,
	people: peopleCollection,
	publications: publicationsCollection,
};
