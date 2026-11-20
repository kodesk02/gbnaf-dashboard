"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { ApplicationFilterTab, VolunteerApplicationRecord } from "@/types/volunteer";

interface ApplicationFilterBarProps {
  records: VolunteerApplicationRecord[];
  activeTab: ApplicationFilterTab;
  searchQuery: string;
  onTabChange: (tab: ApplicationFilterTab) => void;
  onSearchChange: (value: string) => void;
}

const filterTabs: { key: ApplicationFilterTab; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "ACCEPTED", label: "Accepted" },
  { key: "REJECTED", label: "Rejected" },
];

export function ApplicationFilterBar({
  // records,
  activeTab,
  searchQuery,
  onTabChange,
  onSearchChange,
}: ApplicationFilterBarProps) {
  // const getCount = (key: ApplicationFilterTab): number =>
  //   key === "ALL" ? records.length : records.filter((item) => item.status === key).length;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-2 pl-4 shadow-2xs">
        <Search className="size-4 shrink-0 text-basket-darkgreen/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter invitation records..."
          aria-label="Filter invitation records"
          className="w-full bg-transparent text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/40 focus:outline-none"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="rounded-xl border border-line bg-basket-cream/20 px-3 py-1.5 text-[11px] font-semibold text-basket-darkgreen hover:bg-basket-cream/50"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex justify-end">
        <div
          className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-line bg-white p-1 text-xs"
          role="tablist"
          aria-label="Filter applications by status"
        >
          {filterTabs.map(({ key, label }) => {
            const isSelected = activeTab === key;
            // const count = getCount(key);

            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onTabChange(key)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-semibold transition-colors",
                  isSelected
                    ? "bg-basket-cream/60 text-basket-darkgreen"
                    : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
                )}
              >
                <span>{label}</span>
                {/* {key === "PENDING" && count > 0 ? (
                  <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold leading-none text-amber-800">
                    {count}
                  </span>
                ) : (
                  <span>({count})</span>
                )} */}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}