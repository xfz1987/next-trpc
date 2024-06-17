import { z } from 'zod';
import { procedure, router } from '../trpc';
import { TRPCError } from '@trpc/server';

export const User = router({
	getUserList: procedure.query(() => {
		// Get data from Database
		const users = [
			{ id: 1, name: 'Xfz', age: 15 },
			{ id: 2, name: 'Xwb', age: 18 },
			{ id: 3, name: 'Zc', age: 20 },
			{ id: 4, name: 'Xbz', age: 25 },
		];
		return users;
	}),
	createUser: procedure
		.input(
			z.object({
				id: z.number(),
				name: z.string(),
				age: z.number(),
			})
		)
		.mutation(async opt => {
			console.log(opt.input);
			console.log(opt.ctx.user);
			try {
				// Insert data into Database
				return {
					status: 200,
					data: {},
					message: 'Created Success',
				};
			} catch (error: any) {
				console.log(error.message);
				throw new TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: error.message,
				});
			}
		}),
});
