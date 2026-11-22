"use client";

import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { ActivityFilterTab, AdminActivity } from "@/types/admin";

interface ActivitiesFilterBarProps {
  activities: AdminActivity[];
  activeTab: ActivityFilterTab;
  searchQuery: string;
  onTabChange: (tab: ActivityFilterTab) => void;
  onSearchChange: (value: string) => void;
}

const tabs: { key: ActivityFilterTab; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "ACTIVE", label: "Active" },
  { key: "UPCOMING", label: "Upcoming" },
  { key: "COMPLETED", label: "Completed" },
  { key: "NEEDS_REVIEW", label: "Needs Review" },
];

export function ActivitiesFilterBar({
  activities,
  activeTab,
  searchQuery,
  onTabChange,
  onSearchChange,
}: ActivitiesFilterBarProps) {
  const getCount = (key: ActivityFilterTab): number => {
    if (key === "ALL") return activities.length;
    if (key === "ACTIVE") return activities.filter((a) => a.status === "IN_PROGRESS").length;
    return activities.filter((a) => a.status === key).length;
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div
        className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-line bg-white p-1 text-xs shadow-2xs"
        role="tablist"
        aria-label="Filter activities"
      >
        {tabs.map(({ key, label }) => {
          const isSelected = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => onTabChange(key)}
              className={cn(
                "rounded-lg px-3.5 py-1.5 font-semibold transition-colors",
                isSelected
                  ? "bg-basket-cream/60 text-basket-darkgreen"
                  : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
              )}
            >
              {label} 
              {/* ({getCount(key)}) */}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2 shadow-2xs sm:w-72">
        <Search className="size-4 shrink-0 text-basket-darkgreen/40" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search activities, locations, or supervisors..."
          aria-label="Search activities, locations, or supervisors"
          className="w-full bg-transparent text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/40 focus:outline-none"
        />
      </div>
    </div>
  );
}