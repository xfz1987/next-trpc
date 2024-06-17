import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

type Opts = Partial<FetchCreateContextFnOptions>;

/**
 * 创建上下文 服务端组件中没有req resHeaders
 * @see https://trpc.io/docs/server/adapters/fetch#create-the-context
 */
export function createContext(opts?: Opts): Opts & {
	user?: { id: string };
} {
	// const user = { name: req.headers.get('user') ?? 'anonymous' };
	const user = { id: 'test123' };
	console.log('-----', { ...(opts || {}), user });
	return { ...(opts || {}), user };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
