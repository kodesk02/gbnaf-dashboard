import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { IconTile } from "./icon-tile";
import { LinkCard } from "./link-card";

type Base = {
  href: string;
  title?: string;
  icon: LucideIcon;
  iconTone?: "gold" | "green" | "neutral";
  badge: string
};

export function StatCard({
  value,
  unit,
  caption,
  ...base
}: Base & { value: number | string; unit: string; caption: string }) {
  return (
    <LinkCard href={base.href} title={base.title} className="p-5">
      <div className="flex items-start justify-between">
        <IconTile icon={base.icon} tone={base.iconTone} />
        <Badge
          variant={
            base.badge === "Action Required" ? "pending" : "verified"
          }
          className="border border-current/10"
        >
          {base.badge}
        </Badge>
      </div>
      <p className="mt-4 flex items-baseline gap-2">
        <span className="text-[28px] font-bold leading-none">{value}</span>
        <span className="text-sm text-basket-darkgreen/60">{unit}</span>
      </p>
      <p className="mt-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-basket-darkgreen/45">
        {caption}
      </p>
      <div className="mt-4 h-px bg-line" />
    </LinkCard>
  );
}

/** Title + progress bar (course / module progress) */
export function ProgressCard({
  progress,
  label,
  ...base
}: Omit<Base, "badge"> & { progress: number; label: string }) {
  return (
    <LinkCard href={base.href} title={base.title} className="p-5">
      <div className="flex items-start justify-between">
        <IconTile icon={base.icon} tone={base.iconTone} />
        <span className="text-xs font-semibold">{progress}% Complete</span>
      </div>
      <p className="mt-5 text-[15px] font-semibold leading-snug">{label}</p>
      <Progress value={progress} className="mt-3" />
      <div className="mt-4 h-px bg-line" />
    </LinkCard>
  );
}
