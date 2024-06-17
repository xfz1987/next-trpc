import { getBaseUrl } from '@/lib/trpc';
import { appRouter } from '@/server/routers';
import { createCallerFactory } from '@/server/trpc';
import { httpBatchLink } from '@trpc/client';

const createCaller = createCallerFactory(appRouter);

export const STRPC = createCaller({
	links: [
		httpBatchLink({
			url: `${getBaseUrl()}/api/trpc`,
			async headers() {
				return {};
			},
		}),
	],
});
