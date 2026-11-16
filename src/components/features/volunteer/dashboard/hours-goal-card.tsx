import { Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IconTile } from "@/components/shared/icon-tile";
import { LinkCard } from "@/components/shared/link-card";
import { formatHM } from "@/lib/utils";

export function HoursGoalCard({ logged, goal }: { logged: number; goal: number }) {
  const pct = Math.round((logged / goal) * 100);
  return (
    <LinkCard href="/hours" title="View your hours and logs" className="flex items-center gap-4 px-6 py-5">
      <IconTile icon={Clock} tone="green" className="size-12 rounded-full" />
      <div>
        <p className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.08em] text-basket-darkgreen/45">
          Goal: {goal}h <Badge variant="verified" className="px-1.5 py-0.5 text-[10px]">{pct}%</Badge>
        </p>
        <p className="font-mono text-[28px] font-semibold leading-tight tracking-tight">{formatHM(logged)}</p>
        <p className="text-[10px] font-medium uppercase tracking-widest text-basket-darkgreen/45">Total hours logged</p>
      </div>
    </LinkCard>
  );
}
