import Link from "next/link";
import { Calendar, Clock, Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LinkCard } from "@/components/shared/link-card";
import { SectionCard } from "@/components/shared/section-card";
import { cn } from "@/lib/utils";

type Shift = {
  id: string;
  title: string;
  date: string;
  time: string;
  hours: number;
  place: string;
};

export function UpcomingShifts({ shifts }: { shifts: Shift[] }) {
  const hasShifts = shifts && shifts.length > 0;

  return (
    <SectionCard
      title="Upcoming Activities"
      subtitle="Registered volunteer assignments"
      action={
        <Link
          href="/schedule"
          className="text-xs text-basket-darkgreen font-semibold hover:text-basket-olive/80"
        >
          View All
        </Link>
      }
    >
      {hasShifts ? (
        <div className="space-y-3">
          {shifts.map((s) => (
            <LinkCard
              key={s.id}
              href={`/schedule/${s.id}`}
              className="flex items-start justify-between gap-3 bg-basket-cream/20 p-4 shadow-none"
            >
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-snug">
                  {s.title}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-basket-darkgreen/55">
                  <Clock className="size-3" /> {s.date} • {s.time}
                </p>
              </div>
              <div className="shrink-0 text-right">
                <p className="font-mono text-xs font-semibold">{s.hours}h</p>
                <p className="mt-0.5 text-[10px] text-basket-darkgreen/40">
                  {s.place}
                </p>
              </div>
            </LinkCard>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-basket-cream/40 text-basket-darkgreen/60">
            <Calendar className="size-5" />
          </div>
          <p className="text-[13px] font-semibold text-basket-darkgreen">
            No upcoming events
          </p>
          <p className="mt-1 max-w-[220px] text-[11px] text-basket-darkgreen/55 leading-relaxed">
            Browse our community initiatives and register for shifts.
          </p>
        </div>
      )}

      <Link
        href="/opportunities"
        className={cn(
          buttonVariants({ variant: "outline", size: "sm" }),
          "mt-4 h-10 w-full border-1 border-basket-olive/25 text-[13px]",
        )}
      >
       Browse More Volunteer Shifts
      </Link>
    </SectionCard>
  );
}