"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function Home() {
  const trpc = useTRPC();
  const testAi = useMutation(
    trpc.testAi.mutationOptions({
      onSuccess: () => {
        toast.success("Ai Job queued");
      },
    })
  );

  return (
    <div>
      protected server component <br />
      <Button onClick={() => authClient.signOut()}>Log out</Button>
      <Button
        disabled={testAi.isPending}
        onClick={() => testAi.mutate()}
      >
        Test AI
      </Button>
    </div>
  );
}
