"use client";

import { useState } from "react";
import { MoreHorizontal, Check, X, User } from "lucide-react";
import { VolunteerProfileModal } from "./VolunteerProfileModal";
import { VolunteerApplication } from "@/types/volunteer";

interface ApplicationsTableProps {
  applications: VolunteerApplication[];
  onUpdateStatus: (id: string, status: VolunteerApplication["status"]) => void;
}

const statusBadgeStyles: Record<VolunteerApplication["status"], string> = {
  PENDING: "bg-amber-50 text-amber-700 border border-amber-200",
  APPROVED: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  DECLINED: "bg-rose-50 text-rose-700 border border-rose-200",
};

const typeBadgeStyles: Record<VolunteerApplication["applicationType"], string> =
  {
    OPEN: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    INVITED: "bg-amber-50 text-amber-700 border border-amber-200",
  };

export function ApplicationsTable({
  applications,
  onUpdateStatus,
}: ApplicationsTableProps) {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [selectedProfile, setSelectedProfile] =
    useState<VolunteerApplication | null>(null);

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-2xs">
      <table className="w-full text-left text-xs text-basket-darkgreen">
        <thead className="border-b border-line bg-basket-cream/30 text-[11px] font-bold uppercase tracking-wider text-basket-darkgreen/60">
          <tr>
            <th className="py-3.5 pl-5 pr-3 w-10">
              <input
                type="checkbox"
                aria-label="Select all applications"
                className="rounded border-line accent-basket-darkgreen"
              />
            </th>
            <th className="py-3.5 px-3">Volunteer Info</th>
            <th className="py-3.5 px-3">Location</th>
            <th className="py-3.5 px-3">Target Opportunity</th>
            <th className="py-3.5 px-3">Application Type</th>
            <th className="py-3.5 px-3">Skills</th>
            <th className="py-3.5 px-3">Status</th>
            <th className="py-3.5 pl-3 pr-5 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line/60">
          {applications.map((app) => (
            <tr
              key={app.id}
              className="transition-colors hover:bg-basket-cream/10"
            >
              <td className="py-4 pl-5 pr-3">
                <input
                  type="checkbox"
                  aria-label={`Select application for ${app.volunteerName}`}
                  className="rounded border-line accent-basket-darkgreen"
                />
              </td>
              <td className="py-4 px-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`grid size-9 shrink-0 place-items-center rounded-xl font-bold ${app.avatarBg}`}
                  >
                    {app.avatarText}
                  </div>
                  <div>
                    <div className="font-semibold text-basket-darkgreen">
                      {app.volunteerName}
                    </div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-3 text-basket-darkgreen/70">
                {app.location}
              </td>
              <td className="py-4 px-3 font-medium text-basket-darkgreen">
                {app.targetOpportunity}
              </td>
              <td className="py-4 px-3">
                <span
                  className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold ${typeBadgeStyles[app.applicationType]}`}
                >
                  {app.applicationType}
                </span>
              </td>
              <td className="py-4 px-3">
                <div className="flex flex-wrap gap-1">
                  {app.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-basket-cream/60 px-2 py-0.5 text-[10px] font-medium text-basket-darkgreen"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </td>
              <td className="py-4 px-3">
                <span
                  className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-semibold ${statusBadgeStyles[app.status]}`}
                >
                  {app.status}
                </span>
              </td>
              <td className="py-4 pl-3 pr-5 text-right relative">
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenuId(activeMenuId === app.id ? null : app.id)
                  }
                  className="inline-grid size-8 place-items-center rounded-lg border border-line bg-white text-basket-darkgreen/60 hover:bg-basket-cream/40 hover:text-basket-darkgreen"
                >
                  <MoreHorizontal className="size-4" />
                </button>

                {activeMenuId === app.id && (
                  <div className="absolute right-12 top-10 z-20 w-48 rounded-xl border border-line bg-white p-1 shadow-xl">
                    <button
                      type="button"
                      onClick={() => {
                        onUpdateStatus(app.id, "APPROVED");
                        setActiveMenuId(null);
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-emerald-700 hover:bg-emerald-50"
                    >
                      <Check className="size-3.5 text-emerald-600" /> Approve
                      Application
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onUpdateStatus(app.id, "DECLINED");
                        setActiveMenuId(null);
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50"
                    >
                      <X className="size-3.5 text-rose-500" /> Deny Application
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProfile(app);
                        setActiveMenuId(null);
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-basket-darkgreen hover:bg-basket-cream/40"
                    >
                      <User className="size-3.5 text-basket-darkgreen/60" />{" "}
                      View Profile
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <VolunteerProfileModal
        isOpen={Boolean(selectedProfile)}
        onClose={() => setSelectedProfile(null)}
        volunteer={selectedProfile}
      />
    </div>
  );
}
