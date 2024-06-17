import { router } from '../trpc';
import { User } from './user';

export const appRouter = router({
	User,
	// other router
});

export type AppRouter = typeof appRouter;
