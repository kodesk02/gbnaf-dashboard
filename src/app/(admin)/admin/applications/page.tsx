"use client";

import { useMemo, useState } from "react";
import { Search, Clock, CheckCircle2, XCircle } from "lucide-react";
import { ApplicationsTable } from "./ApplicationsTable";
import { initialApplications } from "@/lib/data";
import { HeaderSection } from "@/components/layout/HeadSection";
import { VolunteerApplication } from "@/types/volunteer";

type FilterTab = "all" | "pending" | "approved" | "declined";

export default function AdminApplicationsPage() {
  const [applications, setApplications] =
    useState<VolunteerApplication[]>(initialApplications);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const pendingCount = applications.filter(
    (a) => a.status === "PENDING",
  ).length;
  const approvedCount = applications.filter(
    (a) => a.status === "APPROVED",
  ).length;
  const declinedCount = applications.filter(
    (a) => a.status === "DECLINED",
  ).length;

  const filteredApplications = useMemo(() => {
    return applications.filter((app) => {
      const matchesTab =
        activeTab === "all"
          ? true
          : activeTab === "pending"
            ? app.status === "PENDING"
            : activeTab === "approved"
              ? app.status === "APPROVED"
              : app.status === "DECLINED";

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        app.volunteerName.toLowerCase().includes(q) ||
        app.targetOpportunity.toLowerCase().includes(q) ||
        app.location.toLowerCase().includes(q) ||
        app.skills.some((s) => s.toLowerCase().includes(q));

      return matchesTab && matchesSearch;
    });
  }, [applications, activeTab, searchQuery]);

  const handleUpdateStatus = (
    id: string,
    status: VolunteerApplication["status"],
  ) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status } : app)),
    );
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header Row */}

      <HeaderSection
        title="Applications Queue"
        subtitle="Review volunteer expressions of interest and shift registrations with approve/deny workflows."
      />

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center justify-between rounded-2xl border border-line bg-white p-5 shadow-2xs">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-basket-darkgreen/50">
              Pending
            </p>
            <p className="mt-1 text-2xl font-bold text-basket-darkgreen">
              {pendingCount}{" "}
              <span className="text-sm font-normal text-basket-darkgreen/60">
                Applicants
              </span>
            </p>
          </div>
          <div className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-700">
            <Clock className="size-5" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-line bg-white p-5 shadow-2xs">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-basket-darkgreen/50">
              Approved Volunteers
            </p>
            <p className="mt-1 text-2xl font-bold text-basket-darkgreen">
              {approvedCount}{" "}
              <span className="text-sm font-normal text-basket-darkgreen/60">
                Approved
              </span>
            </p>
          </div>
          <div className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="size-5" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-line bg-white p-5 shadow-2xs">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-basket-darkgreen/50">
              Declined Requests
            </p>
            <p className="mt-1 text-2xl font-bold text-basket-darkgreen">
              {declinedCount}{" "}
              <span className="text-sm font-normal text-basket-darkgreen/60">
                Declined
              </span>
            </p>
          </div>
          <div className="grid size-12 place-items-center rounded-2xl bg-rose-50 text-rose-700">
            <XCircle className="size-5" />
          </div>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="inline-flex items-center gap-1 rounded-xl border border-line bg-white p-1 text-xs shadow-2xs">
          <button
            type="button"
            onClick={() => setActiveTab("all")}
            className={`rounded-lg px-3.5 py-1.5 font-semibold transition-colors ${
              activeTab === "all"
                ? "bg-basket-cream/60 text-basket-darkgreen"
                : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
            }`}
          >
            All 
            {/* ({applications.length}) */}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("pending")}
            className={`rounded-lg px-3.5 py-1.5 font-semibold transition-colors ${
              activeTab === "pending"
                ? "bg-basket-cream/60 text-basket-darkgreen"
                : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
            }`}
          >
            Pending 
            {/* ({pendingCount}) */}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("approved")}
            className={`rounded-lg px-3.5 py-1.5 font-semibold transition-colors ${
              activeTab === "approved"
                ? "bg-basket-cream/60 text-basket-darkgreen"
                : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
            }`}
          >
            Approved 
            {/* ({approvedCount}) */}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("declined")}
            className={`rounded-lg px-3.5 py-1.5 font-semibold transition-colors ${
              activeTab === "declined"
                ? "bg-basket-cream/60 text-basket-darkgreen"
                : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
            }`}
          >
            Declined ({declinedCount})
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2 shadow-2xs sm:w-72">
          <Search className="size-4 text-basket-darkgreen/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search volunteers or opportunities..."
            className="w-full bg-transparent text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/40 focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <ApplicationsTable
        applications={filteredApplications}
        onUpdateStatus={handleUpdateStatus}
      />
    </div>
  );
}
