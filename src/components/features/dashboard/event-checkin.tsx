"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IconTile } from "@/components/shared/icon-tile";

// 6 letters/digits, dash optional: GB-8092 or GB8092
const schema = z.object({
  code: z.string().trim().refine((v) => /^[A-Z0-9]{6}$/i.test(v.replace("-", "")), "Enter the 6-character code from your supervisor."),
});
type Values = z.infer<typeof schema>;

export function EventCheckIn() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async ({ code }: Values) => {
    // TODO: call your check-in endpoint (useMutation from react-query)
    console.log("check in", code.toUpperCase());
    reset();
  };

  return (
    <Card className="p-6">
      <div className="flex items-center gap-3">
        <IconTile icon={KeyRound} tone="green" className="size-9 rounded-lg" />
        <h2 className="text-[15px] font-semibold">Event Check-in</h2>
      </div>
      <p className="mt-2 pl-12 text-sm text-basket-darkgreen/60">
        Enter the 6-character check-in code provided on-site by your project supervisor to log your active attendance.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <Input
            {...register("code")}
            aria-invalid={!!errors.code}
            placeholder="ENTER ACTIVITY CODE (E.G. GB-8092)"
            className="font-mono text-xs uppercase tracking-[0.2em] placeholder:tracking-[0.2em]"
          />
          {errors.code && <p className="mt-1.5 text-xs text-red-600">{errors.code.message}</p>}
        </div>
        <Button type="submit" disabled={isSubmitting} className="sm:self-start">
          Check In &amp; Log Hours <ArrowRight />
        </Button>
      </form>
    </Card>
  );
}
