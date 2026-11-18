"use client";

import { useState } from "react";
import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import { AdminOpportunity } from "@/types/admin";

interface ProgrammesTableProps {
  programmes: AdminOpportunity[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (id: string) => void;
}

const statusBadgeStyles: Record<AdminOpportunity["status"], string> = {
  Active: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Pending: "bg-amber-50 text-amber-700 border border-amber-200",
  Completed: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Steady: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  Draft: "bg-slate-100 text-slate-600 border border-slate-200",
  Delayed: "bg-rose-50 text-rose-700 border border-rose-200",
};

const areaBadgeStyles: Record<AdminOpportunity["operationalArea"], string> = {
  "Food Relief": "bg-slate-100 text-slate-700",
  "Eco-Agriculture": "bg-slate-100 text-slate-700",
  "School Nutrition": "bg-slate-100 text-slate-700",
};

export function ProgrammesTable({
  programmes,
  onEdit,
  onDelete,
  onView,
}: ProgrammesTableProps) {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-2xs">
      <table className="w-full text-left text-xs text-basket-darkgreen">
        <thead className="border-b border-line bg-basket-cream/30 text-[11px] font-bold uppercase tracking-wider text-basket-darkgreen/60">
          <tr>
            {/* <th className="py-3.5 pl-5 pr-3 w-10">
              <input
                type="checkbox"
                aria-label="Select all applications"
                className="rounded border-line accent-basket-darkgreen"
              />
            </th> */}
            <th className="py-3.5 px-3 text-center">Opportunity Title</th>
            <th className="py-3.5 px-3 text-center">Status</th>
            <th className="py-3.5 px-3 text-center">Operational Area</th>
            <th className="py-3.5 px-3 text-center">Start Date</th>
            <th className="py-3.5 px-3 text-center">End Date</th>
            <th className="py-3.5 px-3 text-center">Total Registered</th>
            <th className="py-3.5 pl-3 pr-5 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-line/60 ">
          {programmes.map((opp) => (
            <tr
              key={opp.id}
              className="transition-colors hover:bg-basket-cream/10"
            >
              {/* <td className="py-4 pl-5 pr-3">
                <input type="checkbox" aria-label={`Select ${opp.title}`} className="rounded border-line accent-basket-darkgreen" />
              </td> */}
              <td className="py-4 pl-5 pr-3 text-center font-medium text-basket-darkgreen">
                {opp.title}
              </td>
              <td className="py-4 px-3 text-center ">
                <span
                  className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-medium ${statusBadgeStyles[opp.status]}`}
                >
                  {opp.status}
                </span>
              </td>
              <td className="py-4 px-3 text-center ">
                <span
                  className={`inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-medium ${areaBadgeStyles[opp.operationalArea]}`}
                >
                  {opp.operationalArea}
                </span>
              </td>
              <td className="py-4 pl-5 pr-3  text-basket-darkgreen/80">
                {opp.startDate}
              </td>
              <td className="py-4 pl-5 pr-3  text-basket-darkgreen/80">
                {opp.endDate}
              </td>
              <td className="py-4 pl-5 pr-3 text-center  font-medium text-basket-darkgreen">
                {opp.totalRegistered}
              </td>
              <td className="py-4 pl-3 pr-5 text-right relative">
                <button
                  type="button"
                  onClick={() =>
                    setActiveMenuId(activeMenuId === opp.id ? null : opp.id)
                  }
                  className="inline-grid size-8 place-items-center rounded-lg border border-line bg-white text-basket-darkgreen/60 hover:bg-basket-cream/40 hover:text-basket-darkgreen"
                >
                  <MoreHorizontal className="size-4" />
                </button>

                {activeMenuId === opp.id && (
                  <div className="absolute right-12 top-10 z-20 w-32 rounded-xl border border-line bg-white p-1 shadow-md">
                    <button
                      type="button"
                      onClick={() => {
                        onView(opp.id);
                        setActiveMenuId(null);
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-basket-darkgreen hover:bg-basket-cream/40"
                    >
                      <Eye className="size-3.5 text-basket-darkgreen/60" />
                      View details
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onEdit(opp.id);
                        setActiveMenuId(null);
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-basket-darkgreen hover:bg-basket-cream/40"
                    >
                      <Edit className="size-3.5 text-basket-darkgreen/60" />{" "}
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onDelete(opp.id);
                        setActiveMenuId(null);
                      }}
                      className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50"
                    >
                      <Trash2 className="size-3.5 text-rose-500" /> Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
