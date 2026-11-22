"use client";

import { AdminActivity } from "@/types/admin";
import { ActivityActionsMenu } from "./ActivityActionsMenu";
import { cn } from "@/lib/utils";

interface ActivitiesTableProps {
  activities: AdminActivity[];
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onMarkCompleted: (id: string) => void;
}

const statusConfig: Record<AdminActivity["status"], { label: string; style: string }> = {
  IN_PROGRESS: { label: "In Progress", style: "bg-emerald-50 text-emerald-700" },
  UPCOMING: { label: "Upcoming", style: "bg-amber-50 text-amber-700" },
  COMPLETED: { label: "Completed", style: "bg-slate-100 text-slate-700" },
  NEEDS_REVIEW: { label: "Needs Review", style: "bg-amber-50 text-amber-700" },
};

export function ActivitiesTable({
  activities,
  onView,
  onEdit,
  onMarkCompleted,
}: ActivitiesTableProps) {
  return (
    <div className="overflow-visible rounded-2xl border border-line bg-white shadow-2xs">
      <div className="overflow-x-auto">
        <table className="w-full min-w-205 border-collapse text-left text-xs">
          <thead>
            <tr className="border-b border-line text-[11px] font-semibold uppercase tracking-wider text-basket-darkgreen/45">
              <th className="px-5 py-3.5">Activity Name</th>
              <th className="px-4 py-3.5">Programme</th>
              <th className="px-4 py-3.5">Date &amp; Time</th>
              <th className="px-4 py-3.5">Location</th>
              <th className="px-4 py-3.5">Supervisor</th>
              <th className="px-4 py-3.5">Volunteers</th>
              <th className="px-4 py-3.5">Status</th>
              <th className="px-5 py-3.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {activities.map((item) => {
              const badge =
                item.status === "NEEDS_REVIEW" && item.reviewPriority === "urgent"
                  ? { label: "Needs Review", style: "bg-rose-50 text-rose-700" }
                  : statusConfig[item.status];

              return (
                <tr key={item.id} className="hover:bg-basket-cream/15">
                  <td className="px-5 py-4 font-semibold text-basket-darkgreen">{item.name}</td>
                  <td className="px-4 py-4 text-basket-darkgreen/80">{item.programme}</td>
                  <td className="px-4 py-4 text-basket-darkgreen/80">{item.dateTime}</td>
                  <td className="px-4 py-4 text-basket-darkgreen/80">{item.location}</td>
                  <td className="px-4 py-4 text-basket-darkgreen/80">
                    {item.supervisors.map((sup) => (
                      <div key={sup}>{sup}</div>
                    ))}
                  </td>
                  <td className="px-4 py-4 font-semibold text-basket-darkgreen">
                    {item.volunteersCount}
                  </td>
                  <td className="px-4 py-4">
                    <span className={cn("inline-flex rounded-full px-3 py-1 text-[11px] font-semibold", badge.style)}>
                      {badge.label}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <ActivityActionsMenu
                      activityId={item.id}
                      isCompleted={item.status === "COMPLETED"}
                      onView={onView}
                      onEdit={onEdit}
                      onMarkCompleted={onMarkCompleted}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}