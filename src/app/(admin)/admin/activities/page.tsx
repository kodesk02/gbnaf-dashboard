"use client";

import { useMemo, useState } from "react";
import { HeaderSection } from "@/components/layout/HeadSection";
import { ActivitiesKpiCards } from "@/components/features/admin/activitiesDashboard/ActivitiesKpiCards";
import { ActivitiesFilterBar } from "@/components/features/admin/activitiesDashboard/ActivitiesFilterBar";
import { ActivitiesTable } from "@/components/features/admin/activitiesDashboard/ActivitiesTable";
import { AdminActivity, ActivityFilterTab } from "@/types/admin";
import { initialAdminActivities } from "@/lib/data";


export default function AdminActivitiesPage() {
  const [activities, setActivities] = useState<AdminActivity[]>(initialAdminActivities);
  const [activeTab, setActiveTab] = useState<ActivityFilterTab>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredActivities = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return activities.filter((item) => {
      const matchesTab =
        activeTab === "ALL"
          ? true
          : activeTab === "ACTIVE"
            ? item.status === "IN_PROGRESS"
            : item.status === activeTab;

      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.programme.toLowerCase().includes(q) ||
        item.supervisors.some((s) => s.toLowerCase().includes(q));

      return matchesTab && matchesSearch;
    });
  }, [activities, activeTab, searchQuery]);

  const handleMarkCompleted = (id: string) => {
    setActivities((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "COMPLETED" } : item))
    );
  };

  return (
    <div className="space-y-6 pb-12">
      <HeaderSection
        title="Activities Hub"
        subtitle="Coordinate active operational activities, task pipelines, and volunteer assignments."
      />

      <ActivitiesKpiCards activities={activities} />

      <ActivitiesFilterBar
        activities={activities}
        activeTab={activeTab}
        searchQuery={searchQuery}
        onTabChange={setActiveTab}
        onSearchChange={setSearchQuery}
      />

      {filteredActivities.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center text-xs text-basket-darkgreen/60">
          No activities match the selected filter or search query.
        </div>
      ) : (
        <ActivitiesTable
          activities={filteredActivities}
          onView={(id) => console.log("View activity:", id)}
          onEdit={(id) => console.log("Edit activity:", id)}
          onMarkCompleted={handleMarkCompleted}
        />
      )}
    </div>
  );
}