import { workflowsRouter } from "@/features/workflows/servers/routers";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  workflows: workflowsRouter,
});

export type AppRouter = typeof appRouter;
