import { AlertCircle, RefreshCw, Users } from "lucide-react";
import { UnassignedResponsibility } from "@/types/admin";

export function UnassignedResponsibilitiesSection({ responsibilities }: { responsibilities: UnassignedResponsibility[] }) {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-bold text-basket-darkgreen">Unassigned Responsibilities</h2>
          <AlertCircle className="size-4 text-rose-500" />
        </div>
        <p className="text-xs text-basket-darkgreen/55 mb-4">Critical vacant event positions</p>

        <div className="space-y-3">
          {responsibilities.map((item) => (
            <div key={item.id} className="rounded-2xl border border-line/50 bg-basket-cream/15 p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[13px] font-bold text-basket-darkgreen">{item.role}</p>
                  <p className="mt-1 text-[11px] text-basket-darkgreen/60">📍 {item.location}</p>
                </div>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${item.urgency === "High Need" ? "bg-rose-50 text-rose-700" : "bg-blue-50 text-blue-700"}`}>
                  {item.urgency}
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between pt-2 border-t border-line/30 text-[11px] text-basket-darkgreen/70">
                <span className="flex items-center gap-1 text-rose-600 font-medium">
                  <AlertCircle className="size-3.5" /> {item.note}
                </span>
                {item.urgency !== "High Need" && <RefreshCw className="size-3 text-basket-darkgreen/40" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-line/40 flex items-center justify-between">
        <span className="text-xs text-basket-darkgreen/60">2 unassigned roles</span>
        <button className="flex items-center gap-2 rounded-xl bg-basket-darkgreen px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-basket-olive">
          <Users className="size-3.5" /> Find Volunteers
        </button>
      </div>
    </div>
  );
}