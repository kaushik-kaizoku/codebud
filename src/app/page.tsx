"use client";

import { toast } from "sonner";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

import { Button } from "@/components/ui/button";

const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Background job started.")
    }
  }))
 
  return (
    <div className="p-4 mx-auto max-w-7xl">
      <Button  onClick={() => invoke.mutate({ text: "Kon" })}>
        Invode background job
      </Button>
    </div>
  )
}

export default Page;