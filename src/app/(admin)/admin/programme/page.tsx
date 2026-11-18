"use client";

import { useMemo, useState } from "react";
import { Search, Plus, FolderKanban, Users, CheckCircle2 } from "lucide-react";

import { AdminOpportunity } from "@/types/admin";
import { initialProgrammes } from "@/lib/data";
import { ProgrammesTable } from "./ProgrammesTable";
import { OpportunityModal } from "./ProgrammeModal";
import { HeaderSection } from "@/components/layout/HeadSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { OpportunityDetails } from "./[id]/OpportunityDetails";

type FilterTab = "all" | "active" | "pending" | "delayed";

type OpportunityFormData = {
  title: string;
  operationalArea: AdminOpportunity["operationalArea"];
  startDate: string;
  endDate: string;
  startTime: string;
  location: string;
  description: string;
  status: "Draft" | "Active";
};

export default function AdminProgrammesPage() {
  const [programmes, setProgrammes] =
    useState<AdminOpportunity[]>(initialProgrammes);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedOpportunity, setSelectedOpportunity] =
    useState<AdminOpportunity | null>(null);

  const [editingProgramme, setEditingProgramme] =
    useState<AdminOpportunity | null>(null);

  // Filter and search programmes
  const filteredProgrammes = useMemo(() => {
    return programmes.filter((prog) => {
      const matchesTab =
        activeTab === "all"
          ? true
          : activeTab === "active"
            ? prog.status === "Active" || prog.status === "Steady"
            : activeTab === "pending"
              ? prog.status === "Pending" || prog.status === "Completed"
              : prog.status === "Delayed";

      const q = searchQuery.trim().toLowerCase();

      const matchesSearch =
        !q ||
        prog.title.toLowerCase().includes(q) ||
        prog.operationalArea.toLowerCase().includes(q) ||
        prog.status.toLowerCase().includes(q);

      return matchesTab && matchesSearch;
    });
  }, [programmes, activeTab, searchQuery]);

  // Open create modal
  const handleOpenCreateModal = () => {
    setEditingProgramme(null);
    setIsModalOpen(true);
  };

  // Open edit modal
  const handleOpenEditModal = (id: string) => {
    const target = programmes.find((p) => p.id === id);

    if (target) {
      setEditingProgramme(target);
      setIsModalOpen(true);
    }
  };

  // Save new or edited programme
  const handleSaveProgramme = (formData: OpportunityFormData) => {
    if (editingProgramme) {
      setProgrammes((prev) =>
        prev.map((p) =>
          p.id === editingProgramme.id
            ? {
                ...p,
                ...formData,
              }
            : p,
        ),
      );
    } else {
      const newProgramme: AdminOpportunity = {
        id: `opp-${Date.now()}`,
        title: formData.title,
        operationalArea: formData.operationalArea,
        startDate: formData.startDate,
        endDate: formData.endDate,
        location: formData.location,
        description: formData.description,
        status: formData.status,
        totalRegistered: 0,
        startTime: formData.startTime,
      };

      setProgrammes((prev) => [newProgramme, ...prev]);
    }

    setEditingProgramme(null);
    setIsModalOpen(false);
  };

  // Delete programme
  const handleDelete = (id: string) => {
    setProgrammes((prev) => prev.filter((p) => p.id !== id));

    // Close details modal if its opportunity is deleted
    setSelectedOpportunity((prev) => (prev?.id === id ? null : prev));
  };

  // Open View Details modal
  const handleView = (id: string) => {
    const opportunity = programmes.find((programme) => programme.id === id);

    if (opportunity) {
      setSelectedOpportunity(opportunity);
    }
  };

  // Get the latest version of the selected opportunity
  const currentSelectedOpportunity = selectedOpportunity
    ? (programmes.find((p) => p.id === selectedOpportunity.id) ?? null)
    : null;

  return (
    <div className="space-y-6 pb-12">
      {/* Header Row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <HeaderSection
          title="Organisational Programmes"
          subtitle="Manage active operational initiatives, track core development milestones, and oversee programme supervisors."
        />

        <button
          type="button"
          onClick={handleOpenCreateModal}
          className="inline-flex items-center gap-2 self-start rounded-xl bg-basket-darkgreen px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-basket-olive"
        >
          <Plus className="size-4" />
          Add Programme
        </button>
      </div>

      {/* KPI Overview Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex items-center justify-between rounded-2xl border border-line bg-white p-5 shadow-2xs">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-basket-darkgreen/50">
              Total Programmes
            </p>
            <p className="mt-1 text-2xl font-bold text-basket-darkgreen">
              {programmes.length}{" "}
              <span className="text-sm font-normal text-basket-darkgreen/60">
                Programmes
              </span>
            </p>
          </div>
          <div className="grid size-12 place-items-center rounded-2xl bg-basket-cream/50 text-basket-darkgreen">
            <FolderKanban className="size-5" />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-2xl border border-line bg-white p-5 shadow-2xs">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-basket-darkgreen/50">
              Steady / Active
            </p>
            <p className="mt-1 text-2xl font-bold text-basket-darkgreen">
              {
                programmes.filter(
                  (p) => p.status === "Active" || p.status === "Steady",
                ).length
              }{" "}
              <span className="text-sm font-normal text-basket-darkgreen/60">
                Active
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
              Pending Events
            </p>
            <p className="mt-1 text-2xl font-bold text-basket-darkgreen">
              {programmes.reduce((acc, curr) => acc + curr.totalRegistered, 0)}{" "}
              <span className="text-sm font-normal text-basket-darkgreen/60">
                Events
              </span>
            </p>
          </div>
          <div className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-700">
            <Users className="size-5" />
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
            All Programmes ({programmes.length})
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("active")}
            className={`rounded-lg px-3.5 py-1.5 font-semibold transition-colors ${
              activeTab === "active"
                ? "bg-basket-cream/60 text-basket-darkgreen"
                : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
            }`}
          >
            Active
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
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("delayed")}
            className={`rounded-lg px-3.5 py-1.5 font-semibold transition-colors ${
              activeTab === "delayed"
                ? "bg-basket-cream/60 text-basket-darkgreen"
                : "text-basket-darkgreen/60 hover:text-basket-darkgreen"
            }`}
          >
            Delayed
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-3 py-2 shadow-2xs sm:w-72">
          <Search className="size-4 text-basket-darkgreen/40" />

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search programmes or leads..."
            className="w-full bg-transparent text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/40 focus:outline-none"
          />
        </div>
      </div>

      {/* Programmes Table */}
      <ProgrammesTable
        programmes={filteredProgrammes}
        onEdit={handleOpenEditModal}
        onDelete={handleDelete}
        onView={handleView}
      />

      {/* Create / Edit Modal */}
      <OpportunityModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingProgramme(null);
        }}
        onSave={handleSaveProgramme}
        initialData={editingProgramme}
      />

      {/* View Details Modal */}
      <Dialog
        open={!!currentSelectedOpportunity}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedOpportunity(null);
          }
        }}
      >
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          {currentSelectedOpportunity && (
            <OpportunityDetails opportunity={currentSelectedOpportunity} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
