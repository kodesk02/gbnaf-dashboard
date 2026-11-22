import { AdminActivity } from "@/types/admin";
import { CheckCircle2, Clock, HelpCircle, Flag } from "lucide-react";

interface ActivitiesKpiCardsProps {
  activities: AdminActivity[];
}

export function ActivitiesKpiCards({ activities }: ActivitiesKpiCardsProps) {
  const activeCount = activities.filter((a) => a.status === "IN_PROGRESS").length;
  const upcomingCount = activities.filter((a) => a.status === "UPCOMING").length;
  const reviewCount = activities.filter((a) => a.status === "NEEDS_REVIEW").length;
  const completedCount = activities.filter((a) => a.status === "COMPLETED").length;

  const cards = [
    { label: "ACTIVE ACTIVITIES", value: activeCount, icon: CheckCircle2, tone: "bg-emerald-50 text-emerald-600" },
    { label: "UPCOMING SHIFTS", value: upcomingCount, icon: Clock, tone: "bg-amber-50 text-amber-600" },
    { label: "PENDING ATTENDANCE", value: reviewCount, icon: HelpCircle, tone: "bg-sky-50 text-sky-600" },
    { label: "COMPLETED TODAY", value: completedCount, icon: Flag, tone: "bg-emerald-50 text-emerald-600" },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map(({ label, value, icon: Icon, tone }) => (
        <div
          key={label}
          className="flex items-center justify-between rounded-2xl border border-line bg-white p-5 shadow-2xs"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-basket-darkgreen/50">
              {label}
            </p>
            <p className="mt-1.5 text-2xl font-bold text-basket-darkgreen">{value}</p>
          </div>
          <div className={`grid size-11 place-items-center rounded-full ${tone}`}>
            <Icon className="size-5" />
          </div>
        </div>
      ))}
    </div>
  );
}