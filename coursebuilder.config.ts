import { type CourseBuilderConfig } from '@coursebuilder/core'
import { COURSEBUILDER_URL } from 'astro:env/server';

export default {
	basePath: '/api/coursebuilder',
	providers: [],
	authConfig: {
		providers: [],
	},
	baseUrl: COURSEBUILDER_URL,
} satisfies CourseBuilderConfig
