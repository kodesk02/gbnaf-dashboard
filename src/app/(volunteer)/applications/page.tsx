"use client";

import { useMemo, useState } from "react";
import { ApplicationFilterTab } from "@/types/volunteer";
import { initialVolunteerApplications } from "@/lib/data";
import { ApplicationRecordCard } from "@/components/features/volunteer/applications/ApplicationRecordCard";
import { ApplicationFilterBar } from "@/components/features/volunteer/applications/ApplicationFilterBar";
import { HeaderSection } from "@/components/layout/HeadSection";


export default function VolunteerApplicationsPage() {
  const [activeTab, setActiveTab] = useState<ApplicationFilterTab>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("app-101");

  const visibleRecords = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();
    return initialVolunteerApplications.filter((item) => {
      const matchesTab = activeTab === "ALL" || item.status === activeTab;
      const matchesQuery =
        !normalized ||
        item.programmeTitle.toLowerCase().includes(normalized) ||
        item.location.toLowerCase().includes(normalized);
      return matchesTab && matchesQuery;
    });
  }, [activeTab, searchQuery]);

  const handleToggleCard = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-w-0 flex-1 space-y-6">
      <HeaderSection
        title="My Applications"
        subtitle="Track your submitted expressions of interest, shift registrations, and invitation statuses."
      />

      <ApplicationFilterBar
        records={initialVolunteerApplications}
        activeTab={activeTab}
        searchQuery={searchQuery}
        onTabChange={setActiveTab}
        onSearchChange={setSearchQuery}
      />

      {visibleRecords.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-line bg-white p-10 text-center text-sm text-muted-foreground">
          No matching invitation or application records found.
        </div>
      ) : (
        <div className="space-y-3">
          {visibleRecords.map((record) => (
            <ApplicationRecordCard
              key={record.id}
              record={record}
              expanded={expandedId === record.id}
              onToggle={handleToggleCard}
            />
          ))}
        </div>
      )}
    </div>
  );
}