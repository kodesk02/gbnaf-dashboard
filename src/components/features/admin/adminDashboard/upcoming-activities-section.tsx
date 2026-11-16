import Link from "next/link";
import { Clock, Calendar, MapPin } from "lucide-react";
import { UpcomingActivity } from "@/types/admin";

export function UpcomingActivitiesSection({ activities }: { activities: UpcomingActivity[] }) {
  const hasActivities = activities && activities.length > 0;

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-base font-bold tracking-wider text-black/80">Upcoming Activities</h2>
            <p className="text-xs text-basket-darkgreen/55">Scheduled field shifts</p>
          </div>
          {hasActivities && (
            <Link href="/admin/activities" className="text-xs font-semibold text-basket-darkgreen hover:text-basket-olive">
              View All 
            </Link>
          )}
        </div>

        {hasActivities ? (
          <div className="space-y-3">
            {activities.map((act) => (
              <div key={act.id} className="flex items-center justify-between rounded-2xl border border-line/50 bg-basket-cream/15 p-3.5 transition-colors hover:bg-basket-cream/30">
                <div>
                  <p className="text-[13px] font-semibold text-basket-darkgreen">{act.title}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-[11px] text-basket-darkgreen/55">
                    <Clock className="size-3" /> {act.date} • {act.time} &nbsp;|&nbsp; <MapPin className="size-3" /> {act.location}
                  </p>
                </div>
                <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-bold text-emerald-700">
                  {act.category}
                </span>
              </div>
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
            <p className="mt-1 max-w-55 text-[11px] text-basket-darkgreen/55 leading-relaxed">
              Browse our community initiatives and register for shifts.
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-line/40 text-xs text-basket-darkgreen/60">
        <span>{hasActivities ? `${activities.length} of 18 shifts populated` : "0 shifts populated"}</span>
        <button className="flex items-center gap-1.5 font-semibold text-basket-darkgreen hover:underline">
          <Calendar className="size-3.5" /> Open Full Calendar
        </button>
      </div>
    </div>
  );
}