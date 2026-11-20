"use client";

import { Check, ChevronDown, Clock, MailCheck, MapPin, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { VolunteerApplicationRecord } from "@/types/volunteer";

interface ApplicationRecordCardProps {
  record: VolunteerApplicationRecord;
  expanded: boolean;
  onToggle: (id: string) => void;
}

export function ApplicationRecordCard({ record, expanded, onToggle }: ApplicationRecordCardProps) {
  const isAccepted = record.status === "ACCEPTED";
  const isRejected = record.status === "REJECTED";

  return (
    <article
      className={cn(
        "rounded-2xl border bg-white transition-colors",
        isAccepted ? "border-emerald-200/90 bg-emerald-50/25" : "border-line"
      )}
    >
      <button
        type="button"
        onClick={() => onToggle(record.id)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="flex min-w-0 items-center gap-3.5">
          <span
            className={cn(
              "grid size-10 shrink-0 place-items-center rounded-xl",
              isAccepted ? "bg-emerald-100/80 text-emerald-700" : "bg-slate-100/80 text-slate-500"
            )}
          >
            {isAccepted ? <MailCheck className="size-4.5" /> : <MessageSquare className="size-4.5" />}
          </span>
          <span className="truncate text-sm font-semibold text-basket-darkgreen sm:text-[15px]">
            {record.programmeTitle}
          </span>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-md border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide uppercase",
              isAccepted && "border-emerald-200 bg-emerald-50 text-emerald-700",
              isRejected && "border-slate-200 bg-slate-100 text-slate-500",
              !isAccepted && !isRejected && "border-amber-200 bg-amber-50 text-amber-700"
            )}
          >
            {/* {isAccepted && <Check className="size-3" />} */}
            {record.status}
          </span>
          <ChevronDown
            className={cn(
              "size-4 text-basket-darkgreen/50 transition-transform duration-200",
              expanded && "rotate-180"
            )}
          />
        </div>
      </button>

      {expanded && (
        <div className="border-t border-line/70 px-5 py-3.5 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-basket-olive" />
              {record.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="size-3.5 text-basket-olive" />
              {record.scheduleLabel}
            </span>
            {/* <span className="text-basket-darkgreen/75">Pathway: {record.pathway}</span> */}
          </div>
          {/* {record.coordinatorNote && (
            <p className="mt-2.5 text-xs text-basket-darkgreen/75">{record.coordinatorNote}</p>
          )} */}
        </div>
      )}
    </article>
  );
}