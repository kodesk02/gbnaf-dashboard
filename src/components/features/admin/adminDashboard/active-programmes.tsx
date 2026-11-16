import {
  Users,
  ShoppingBag,
  Globe,
  RefreshCw,
  MoreVertical,
} from "lucide-react";
import { ActiveProgramme } from "@/types/admin";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const iconMap = {
  Users,
  ShoppingBag,
  Globe,
  RefreshCw,
};

const getProgramStatusBadgeVariant = (status: ActiveProgramme["status"]) => {
  switch (status) {
    case "Completed":
      return "verified";
    case "Pending":
      return "pending";
    case "Steady":
      return "blue";
    case "Delayed":
      return "destructive";
    default:
      return "default";
  }
};

export function ActiveProgrammes({
  programmes,
}: {
  programmes: ActiveProgramme[];
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-black/80">
            ACTIVE PROGRAMMES
          </h2>
          <span className="rounded-full bg-basket-cream/60 px-2.5 py-0.5 text-[11px] font-semibold text-basket-darkgreen">
            {programmes.length} Active
          </span>
        </div>
        <button
          aria-label="More options"
          className="text-basket-darkgreen hover:text-basket-darkgreen"
        >
          <MoreVertical className="size-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {programmes.map((p) => {
          const IconComponent = iconMap[p.iconName] || Users;
          return (
            <Link
              href={"/"}
              key={p.id}
              className="relative flex flex-col justify-between rounded-2xl border border-line/60 bg-basket-cream/10 p-5 transition-all hover:-translate-y-0.5 hover:border-basket-darkgreen/30 hover:shadow-[0_8px_24px_-8px_rgba(16,47,33,0.18)]"
            >
              <div className="flex items-start justify-between">
                <div className="grid size-10 place-items-center rounded-xl bg-basket-darkgreen/5 text-basket-darkgreen">
                  <IconComponent className="size-5" strokeWidth={1.75} />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-bold text-basket-darkgreen">
                  {p.title}
                </h3>
                <p className="mt-1 text-[11px] text-basket-darkgreen/60 line-clamp-2 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-line/40 pt-4">
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-basket-darkgreen/40">
                    Progress
                  </span>
                  <Badge
                    variant={getProgramStatusBadgeVariant(p.status)}
                    className="mt-0.5 text-[10px] font-bold"
                  >
                    {p.status}
                  </Badge>
                </div>
                <div className="relative flex size-11 items-center justify-center">
                  <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-gray-100"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-basket-olive"
                      strokeDasharray={`${p.progress}, 100`}
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[11px] font-bold text-basket-darkgreen">
                    {p.progress}%
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
