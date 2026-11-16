"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { PendingApproval } from "@/types/admin";

interface PendingApprovalsSectionProps {
  approvals: PendingApproval[];
}

export function PendingApprovalsSection({ approvals: initialApprovals }: PendingApprovalsSectionProps) {
  const [approvalsList, setApprovalsList] = useState<PendingApproval[]>(initialApprovals);
  const [actionStates, setActionStates] = useState<Record<string, "approved" | "denied">>({});

  const handleAction = (id: string, action: "approved" | "denied") => {
    setActionStates((prev) => ({ ...prev, [id]: action }));

    setTimeout(() => {
      setApprovalsList((prev) => prev.filter((item) => item.id !== id));
    }, 800);
  };

  const hasApprovals = approvalsList.length > 0;

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <h2 className="text-base font-bold tracking-wider text-black/80">Pending Approvals</h2>
            <span className="rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-700">
              {approvalsList.length} Pending
            </span>
          </div>
          <button className="text-xs font-semibold text-basket-darkgreen hover:text-basket-darkgreen/80 ">
            Audit Log
          </button>
        </div>

        {hasApprovals ? (
          <div className="space-y-3">
            {approvalsList.map((item) => {
              const status = actionStates[item.id];

              return (
                <div 
                  key={item.id} 
                  className={`flex items-center justify-between rounded-2xl border border-line/50 bg-basket-cream/15 p-3.5 transition-all duration-300 ${
                    status ? "opacity-60 scale-[0.99]" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-9 shrink-0 place-items-center rounded-full bg-emerald-50 text-xs font-bold text-basket-olive">
                      {item.initials}
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-basket-darkgreen">{item.name}</p>
                      <p className="text-[11px] text-basket-darkgreen/55">{item.type} • {item.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {(!status || status === "approved") && (
                      <button
                        onClick={() => handleAction(item.id, "approved")}
                        disabled={!!status}
                        className={`flex items-center justify-center gap-1.5 rounded-xl px-4 py-1.5 text-xs font-semibold transition-all w-24 ${
                          status === "approved"
                            ? "bg-emerald-100 text-basket-darkgreen border border-emerald-300"
                            : "bg-basket-darkgreen text-white hover:bg-basket-olive"
                        }`}
                      >
                        {status === "approved" ? (
                          <>
                            <Check className="size-3.5 text-basket-darkgreen stroke-[2.5]" />
                            <span>Done</span>
                          </>
                        ) : (
                          "Approve"
                        )}
                      </button>
                    )}

                    {(!status || status === "denied") && (
                      <button
                        onClick={() => handleAction(item.id, "denied")}
                        disabled={!!status}
                        className={`flex items-center justify-center gap-1.5 rounded-xl border px-4 py-1.5 text-xs font-semibold transition-all w-24 ${
                          status === "denied"
                            ? "bg-rose-100 text-rose-800 border-rose-300"
                            : "border-line bg-white text-rose-600 hover:bg-rose-50"
                        }`}
                      >
                        {status === "denied" ? (
                          <>
                            <X className="size-3.5 text-rose-800 stroke-[2.5]" />
                            <span>Denied</span>
                          </>
                        ) : (
                          "Deny"
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full min-h-55 py-12 text-center">
            <p className="text-[13px] font-semibold text-basket-darkgreen">No pending approvals</p>
            <p className="mt-1 text-[11px] text-basket-darkgreen/55">All requests have been successfully reviewed.</p>
          </div>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-line/40 text-[11px] text-basket-darkgreen/50">
        <span>Auto-escalates after 48h</span>
        <button className="font-semibold text-basket-darkgreen hover:underline">Batch Process All</button>
      </div>
    </div>
  );
}