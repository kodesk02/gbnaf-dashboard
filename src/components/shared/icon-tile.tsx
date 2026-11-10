import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const tones = {
  gold: "bg-amber-100 text-amber-800 ",
  green: "bg-emerald-50 text-emerald-800",
  neutral: "bg-basket-sage/30 text-basket-darkgreen",
};

export function IconTile({ icon: Icon, tone = "neutral", className }: { icon: LucideIcon; tone?: keyof typeof tones; className?: string }) {
  return (
    <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl", tones[tone], className)}>
      <Icon className="size-4.5" strokeWidth={1.75} />
    </span>
  );
}
