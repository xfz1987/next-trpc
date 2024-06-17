import { initTRPC } from '@trpc/server';
import { Context } from './context';

const t = initTRPC.context<Context>().create();

export const router = t.router; // using to create router
export const procedure = t.procedure; // using to create function
// createCaller 在 trpc v11 中已经废弃
// @see https://trpc.io/docs/server/server-side-calls#create-caller
export const createCallerFactory = t.createCallerFactory;
