import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LinkCard } from "@/components/shared/link-card";

export function ImpactBanner({ message, tier }: { message: string; tier: string }) {
  return (
    <LinkCard href="/certificates" title="See your impact" className="flex items-center gap-3 bg-basket-sage/25 p-4 shadow-none">
      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-basket-darkgreen">
        <Heart className="size-4 fill-emerald-300 text-emerald-300" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold">Your Collective Impact</p>
        <p className="text-[11px] leading-snug text-basket-darkgreen/60">{message}</p>
      </div>
      <Badge variant="verified" className="shrink-0 border border-basket-olive/15">{tier}</Badge>
    </LinkCard>
  );
}
