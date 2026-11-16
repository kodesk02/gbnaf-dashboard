"use client";

import { useState } from "react";
import { CalendarDays, ChevronRight, Clock, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { LinkCard } from "@/components/shared/link-card";
import { SectionCard } from "@/components/shared/section-card";
import type { RoleMode } from "@/lib/data";
import { cn } from "@/lib/utils";

type Role = {
  id: string;
  title: string;
  tag: string;
  tagTone: "green" | "sage" | "blue";
  description: string;
  location: string;
  commitment: string;
  starts: string;
  mode: RoleMode;
};

const getBadgeTone = (tone: Role["tagTone"]) => {
  switch (tone) {
    case "green":
      return "verified";
    case "sage":
      return "gray";
    case "blue":
      return "blue";
    default:
      return "default";
  }
};

const filters = [
  { key: "all", label: "All" },
  { key: "on-site", label: "On-site" },
  { key: "remote", label: "Remote" },
] as const;
type Filter = (typeof filters)[number]["key"];

export function VolunteerRoles({ roles }: { roles: Role[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = roles.filter(
    (r) => filter === "all" || r.mode === filter || r.mode === "hybrid",
  );

  return (
    <SectionCard
      title="Current Volunteer Roles"
      subtitle="Pick up new community initiatives and skill projects"
      className="h-full"
      action={
        <div
          className="flex rounded-lg border border-line bg-basket-cream/30 p-0.5"
          role="tablist"
        >
          {filters.map((f) => (
            <button
              key={f.key}
              role="tab"
              aria-selected={filter === f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "rounded-md px-3 py-1 text-[11px] font-semibold transition-colors",
                filter === f.key
                  ? "bg-basket-darkgreen text-white"
                  : "text-basket-darkgreen/60 hover:text-basket-darkgreen",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      }
    >
      <div className="space-y-3">
        {visible.map((r) => (
          <LinkCard
            key={r.id}
            href={`/opportunities/${r.id}`}
            className="flex items-center gap-4 bg-basket-cream/20 p-4 shadow-none"
          >
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-center gap-2 text-[13px] font-semibold">
                {r.title} <Badge variant={getBadgeTone(r.tagTone)}>{r.tag}</Badge>
              </p>
              <p className="mt-1.5 text-xs text-basket-darkgreen/60">
                {r.description}
              </p>
              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-basket-darkgreen/50">
                <span className="flex items-center gap-1">
                  <MapPin className="size-3 text-basket-gold" />
                  {r.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-3" />
                  {r.commitment}
                </span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="size-3" />
                  {r.starts}
                </span>
              </p>
            </div>
            <ChevronRight className="size-4 shrink-0 text-basket-darkgreen/30 transition-all group-hover:translate-x-0.5 group-hover:text-basket-olive" />
          </LinkCard>
        ))}
        {visible.length === 0 && (
          <p className="py-6 text-center text-sm text-basket-darkgreen/50">
            No roles match this filter yet.
          </p>
        )}
      </div>
    </SectionCard>
  );
}
