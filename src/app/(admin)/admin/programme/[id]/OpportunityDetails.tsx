
"use client";

import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Leaf,
  ClipboardList,
} from "lucide-react";

import { AdminOpportunity } from "@/types/admin";

interface OpportunityDetailsProps {
  opportunity: AdminOpportunity;
}

const statusStyles: Record<string, string> = {
  Active: "bg-emerald-50 text-emerald-700",
  Pending: "bg-amber-50 text-amber-700",
  Steady: "bg-blue-50 text-blue-700",
  Delayed: "bg-rose-50 text-rose-700",
  Draft: "bg-gray-100 text-gray-600",
  Completed: "bg-purple-50 text-purple-700",
};

export function OpportunityDetails({
  opportunity,
}: OpportunityDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-semibold ${
              statusStyles[opportunity.status] ??
              "bg-gray-100 text-gray-600"
            }`}
          >
            {opportunity.status}
          </span>

          <span className="text-xs text-basket-darkgreen/40">
            ID: {opportunity.id}
          </span>
        </div>

        <div>
          <h2 className="text-xl font-bold text-basket-darkgreen">
            {opportunity.title}
          </h2>

          <p className="mt-1 text-xs text-basket-darkgreen/50">
            Opportunity details and information
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-line bg-white p-4">
          <div className="mb-3 grid size-9 place-items-center rounded-lg bg-purple-50 text-purple-700">
            <Users className="size-4" />
          </div>

          <p className="text-lg font-bold text-basket-darkgreen">
            {opportunity.totalRegistered ?? 0}
          </p>

          <p className="mt-1 text-[11px] text-basket-darkgreen/50">
            Total Registered
          </p>
        </div>

        <div className="rounded-xl border border-line bg-white p-4">
          <div className="mb-3 grid size-9 place-items-center rounded-lg bg-emerald-50 text-emerald-700">
            <Leaf className="size-4" />
          </div>

          <p className="text-sm font-bold text-basket-darkgreen">
            {opportunity.operationalArea}
          </p>

          <p className="mt-1 text-[11px] text-basket-darkgreen/50">
            Operational Area
          </p>
        </div>

        <div className="rounded-xl border border-line bg-white p-4">
          <div className="mb-3 grid size-9 place-items-center rounded-lg bg-amber-50 text-amber-700">
            <ClipboardList className="size-4" />
          </div>

          <p className="text-lg font-bold text-basket-darkgreen">
            {opportunity.totalRegistered ?? "—"}
          </p>

          <p className="mt-1 text-[11px] text-basket-darkgreen/50">
            Volunteers Needed
          </p>
        </div>
      </div>

      {/* Opportunity Information */}
      <div className="space-y-4 rounded-xl border border-line bg-white p-4">
        <h3 className="text-sm font-bold text-basket-darkgreen">
          Opportunity Information
        </h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 size-4 text-basket-darkgreen/50" />

            <div>
              <p className="text-[11px] text-basket-darkgreen/50">
                Start Date
              </p>

              <p className="mt-1 text-xs font-semibold text-basket-darkgreen">
                {opportunity.startDate}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 size-4 text-basket-darkgreen/50" />

            <div>
              <p className="text-[11px] text-basket-darkgreen/50">
                End Date
              </p>

              <p className="mt-1 text-xs font-semibold text-basket-darkgreen">
                {opportunity.endDate}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 size-4 text-basket-darkgreen/50" />

            <div>
              <p className="text-[11px] text-basket-darkgreen/50">
                Start Time
              </p>

              <p className="mt-1 text-xs font-semibold text-basket-darkgreen">
                {opportunity.startTime || "Not specified"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Users className="mt-0.5 size-4 text-basket-darkgreen/50" />

            <div>
              <p className="text-[11px] text-basket-darkgreen/50">
                Total Registered
              </p>

              <p className="mt-1 text-xs font-semibold text-basket-darkgreen">
                {opportunity.totalRegistered ?? 0}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-basket-darkgreen">
          Description
        </h3>

        <p className="whitespace-pre-wrap text-xs leading-6 text-basket-darkgreen/65">
          {opportunity.description || "No description provided."}
        </p>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-basket-darkgreen">
          Location
        </h3>

        <div className="flex items-start gap-3 rounded-xl border border-line bg-white p-4">
          <MapPin className="mt-0.5 size-4 shrink-0 text-basket-darkgreen/50" />

          <p className="text-xs leading-5 text-basket-darkgreen/70">
            {opportunity.location || "Location not specified"}
          </p>
        </div>
      </div>
    </div>
  );
}
