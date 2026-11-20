"use client";

import { VolunteerOpportunity } from "@/types/volunteer";
import {
  Calendar,
  MapPin,
  ChevronRight,
  Check,
} from "lucide-react";

interface OpportunityCardProps {
  opportunity: VolunteerOpportunity;
  onRespondInvite: (id: string, decision: "accepted" | "declined") => void;
  onRegister: (id: string) => void;
}

const programBadgeStyles: Record<VolunteerOpportunity["program"], string> = {
  "Food Relief": "bg-slate-100 text-slate-600",
  "Eco-Agriculture": "bg-slate-100 text-slate-600",
  "Advocacy Walk": "bg-slate-100 text-slate-600",
  "School Nutrition": "bg-slate-100 text-slate-600",
};

const statusBadgeStyles: Record<VolunteerOpportunity["status"], string> = {
  COMPLETED: "border-emerald-200 border bg-emerald-50 text-emerald-700",
  PENDING: "border-amber-200 border bg-amber-50 text-amber-700",
  ONGOING: "border-blue-200 border bg-blue-50 text-blue-700",
};

export function OpportunityCard({
  opportunity,
  onRespondInvite,
  onRegister,
}: OpportunityCardProps) {
  const {
    id,
    title,
    description,
    status,
    program,
    date,
    time,
    location,
    isInvited,
    isRegistered,
  } = opportunity;

  return (
    <article
      className={`relative flex flex-col justify-between rounded-3xl bg-white p-6 transition-all ${
        isInvited
          ? "border border-amber-300/90 shadow-sm"
          : "border border-line shadow-sm hover:border-basket-darkgreen/30"
      }`}
    >

      <div>
        {/* Top Row: Status & Program Badges */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`rounded-lg px-2.5 py-1 text-[11px] font-bold tracking-wide ${statusBadgeStyles[status]}`}
          >
            {status}
          </span>
          <span
            className={`rounded-lg px-2.5 py-1 text-[11px] font-semibold ${programBadgeStyles[program]}`}
          >
            {program}
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-[15px] font-bold leading-snug text-basket-darkgreen mb-2">
          {title}
        </h3>
        <p className="text-xs leading-relaxed text-basket-darkgreen/60 line-clamp-4 mb-5">
          {description}
        </p>

        {/* Logistics Metadata */}
        <div className="space-y-2.5 border-t border-line/40 pt-4 text-xs text-basket-darkgreen/70">
          <div className="flex items-center gap-2">
            <Calendar className="size-3.5 shrink-0 text-basket-darkgreen/45" />
            <span className="font-medium">
              {date} • {time}
            </span>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="size-3.5 shrink-0 mt-0.5 text-basket-darkgreen/45" />
            <span className="leading-snug">{location}</span>
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="mt-5">
        {isInvited && (
          <div className="space-y-3">
            {/* {invitationNote && (
              <div className="flex items-start gap-2 rounded-xl bg-amber-50/70 px-3 py-2 text-[11px] font-medium text-amber-900">
                {invitationNote.includes("Supervisor") &&
                !invitationNote.includes("official") ? (
                  <AlertTriangle className="size-3.5 shrink-0 mt-0.5 text-amber-600" />
                ) : (
                  <Info className="size-3.5 shrink-0 mt-0.5 text-amber-600" />
                )}
                <span>{invitationNote}</span>
              </div>
            )} */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => onRespondInvite(id, "accepted")}
                className="rounded-xl bg-basket-darkgreen py-2.5 text-xs font-semibold text-white transition-colors hover:bg-basket-olive"
              >
                Accept
              </button>
              <button
                type="button"
                onClick={() => onRespondInvite(id, "declined")}
                className="rounded-xl border border-line bg-white py-2.5 text-xs font-semibold text-basket-darkgreen transition-colors hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200"
              >
                Decline
              </button>
            </div>
          </div>
        )}

        {!isInvited && status === "ONGOING" && (
          <button
            type="button"
            onClick={() => onRegister(id)}
            disabled={isRegistered}
            className={`w-full rounded-xl py-2.5 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
              isRegistered
                ? "bg-emerald-100 text-basket-darkgreen border border-emerald-300 cursor-default"
                : "bg-basket-darkgreen text-white hover:bg-basket-olive"
            }`}
          >
            {isRegistered ? (
              <>
                <Check className="size-3.5 stroke-[2.5]" />
                <span>Registered</span>
              </>
            ) : (
              "Register"
            )}
          </button>
        )}

        {status === "COMPLETED" && (
          <div className="flex items-center justify-between border-t border-line/40 pt-3.5 text-xs">
            <span className="text-basket-darkgreen/50">
              Impact report ready
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-1 font-bold text-basket-darkgreen hover:text-basket-olive"
            >
              View Certificate <ChevronRight className="size-3.5" />
            </button>
          </div>
        )}
      </div>
    </article>
  );
}
