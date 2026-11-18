"use client";

import { useMemo, useState } from "react";
import {
  Calendar,
  Mail,
  CheckCircle2,
  Users,
  Search,
  Download,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { VolunteerOpportunity } from "@/types/volunteer";
import { initialOpportunities } from "@/lib/data";
import { OpportunityCard } from "@/components/features/volunteer/opportunities/OpportunityCard";
import { HeaderSection } from "@/components/layout/HeadSection";

type FilterTab = "all" | "invited" | "completed";

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] =
    useState<VolunteerOpportunity[]>(initialOpportunities);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const invitesCount = useMemo(
    () => opportunities.filter((item) => item.isInvited).length,
    [opportunities],
  );

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((item) => {
      const matchesTab =
        activeTab === "all"
          ? true
          : activeTab === "invited"
            ? Boolean(item.isInvited)
            : item.status === "COMPLETED";

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.program.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

      return matchesTab && matchesSearch;
    });
  }, [opportunities, activeTab, searchQuery]);

  const handleRespondInvite = (
    id: string,
    decision: "accepted" | "declined",
  ) => {
    setOpportunities((prev) =>
      prev.flatMap((item) => {
        if (item.id !== id) return [item];
        if (decision === "declined") return [];
        return [
          {
            ...item,
            isInvited: false,
            status: "Ongoing",
            isRegistered: true,
          },
        ];
      }),
    );
  };

  const handleRegister = (id: string) => {
    setOpportunities((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isRegistered: true } : item,
      ),
    );
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Header Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <HeaderSection
          title="Browse Events & Field Missions"
          subtitle="See upcoming events and relief operations and manage invitation responses."
        />

        <button
          type="button"
          className="inline-flex items-center gap-2 self-start rounded-xl border border-line bg-white px-3.5 py-2 text-xs font-semibold text-basket-darkgreen shadow-2xs transition-colors hover:bg-basket-cream/30"
        >
          <Download className="size-3.5 text-basket-darkgreen/60" />
          Export Schedule
        </button>
      </div>

      {/* KPI Stat Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-3.5 rounded-2xl border border-line bg-white p-4 shadow-2xs">
          <div className="grid size-10 place-items-center rounded-xl bg-basket-cream/40 text-basket-darkgreen">
            <Calendar className="size-4" />
          </div>
          <div>
            <p className="text-lg font-bold text-basket-darkgreen leading-none">
              12
            </p>
            <p className="mt-1 text-[11px] font-medium text-basket-darkgreen/55">
              Upcoming Shifts
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 rounded-2xl border-1 border-amber-300/90 bg-amber-50/20 p-4 shadow-2xs">
          <div className="grid size-10 place-items-center rounded-xl bg-amber-100/70 text-amber-700">
            <Mail className="size-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-lg font-bold text-basket-darkgreen leading-none">
                {invitesCount}
              </p>
              {invitesCount > 0 && (
                <span className="size-2 rounded-full" />
              )}
            </div>
            <p className="mt-1 text-[11px] font-medium text-basket-darkgreen/65">
              Invites Awaiting RSVP
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 rounded-2xl border border-line bg-white p-4 shadow-2xs">
          <div className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="size-4" />
          </div>
          <div>
            <p className="text-lg font-bold text-basket-darkgreen leading-none">
              6
            </p>
            <p className="mt-1 text-[11px] font-medium text-basket-darkgreen/55">
              Completed Missions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3.5 rounded-2xl border border-line bg-white p-4 shadow-2xs">
          <div className="grid size-10 place-items-center rounded-xl bg-sky-50 text-sky-700">
            <Users className="size-4" />
          </div>
          <div>
            <p className="text-lg font-bold text-basket-darkgreen leading-none">
              200+
            </p>
            <p className="mt-1 text-[11px] font-medium text-basket-darkgreen/55">
              Active Champions
            </p>
          </div>
        </div>
      </div>

      {/* Search Bar & Filter Tabs */}
      <div className="space-y-3">
        <div className="flex items-center gap-3 rounded-2xl border border-line bg-white p-2 pl-4 shadow-2xs">
          <Search className="size-4 shrink-0 text-basket-darkgreen/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search events by title, location, program, or description..."
            className="w-full bg-transparent text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/40 focus:outline-none"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="rounded-xl border border-line bg-basket-cream/20 px-3 py-1.5 text-[11px] font-semibold text-basket-darkgreen hover:bg-basket-cream/50"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex justify-end">
          <div className="inline-flex items-center gap-1 rounded-xl border border-line bg-white p-1 text-xs">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-lg px-3 py-1.5 font-semibold transition-colors ${
                activeTab === "all"
                  ? "bg-basket-cream/60 text-basket-darkgreen"
                  : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
              }`}
            >
              All ({opportunities.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("invited")}
              className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-semibold transition-colors ${
                activeTab === "invited"
                  ? "bg-basket-cream/60 text-basket-darkgreen"
                  : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
              }`}
            >
              <span>Invited</span>
              {invitesCount > 0 && (
                <span className="rounded-full bg-amber-100 px-1.5 py-0.2 text-[10px] font-bold text-amber-800">
                  {invitesCount}
                </span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("completed")}
              className={`rounded-lg px-3 py-1.5 font-semibold transition-colors ${
                activeTab === "completed"
                  ? "bg-basket-cream/60 text-basket-darkgreen"
                  : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
              }`}
            >
              Completed
            </button>
          </div>
        </div>
      </div>

      {/* 3-Column Opportunity Grid */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredOpportunities.map((opportunity) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              onRespondInvite={handleRespondInvite}
              onRegister={handleRegister}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-white py-16 text-center">
          <p className="text-sm font-bold text-basket-darkgreen">
            No matching missions found
          </p>
          <p className="mt-1 text-xs text-basket-darkgreen/55">
            Try clearing your search filter or switching tabs.
          </p>
        </div>
      )}

      {/* Footer Bar */}
      <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-line bg-white px-5 py-3.5 text-xs sm:flex-row">
        <p className="text-basket-darkgreen/60">
          Need custom group scheduling or special accommodations?{" "}
          <button
            type="button"
            className="font-bold text-basket-darkgreen hover:underline"
          >
            Contact Hub Dispatcher
          </button>
        </p>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            aria-label="Previous page"
            className="grid size-7 place-items-center rounded-lg border border-line text-basket-darkgreen/50 hover:bg-basket-cream/30"
          >
            <ChevronLeft className="size-3.5" />
          </button>
          <span className="grid size-7 place-items-center rounded-lg border border-line bg-basket-cream/40 font-bold text-basket-darkgreen">
            1
          </span>
          <button
            type="button"
            aria-label="Next page"
            className="grid size-7 place-items-center rounded-lg border border-line text-basket-darkgreen/50 hover:bg-basket-cream/30"
          >
            <ChevronRight className="size-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
