/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect } from "react";

import {
  X,
  MapPin,
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  ChevronDown,
  CalendarIcon,
  Clock,
} from "lucide-react";

import { AdminOpportunity } from "@/types/admin";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format } from "date-fns";

interface OpportunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (opportunityData: {
    title: string;
    operationalArea: AdminOpportunity["operationalArea"];
    startDate: string;
    startTime: string;
    endDate: string;
    location: string;
    totalRegistered: number;
    description: string;
    status: "Draft" | "Active";
  }) => void;
  initialData?: AdminOpportunity | null;
}

export function OpportunityModal({
  isOpen,
  onClose,
  onSave,
  initialData,
}: OpportunityModalProps) {
  const [title, setTitle] = useState("");

  const [operationalArea, setOperationalArea] =
    useState<AdminOpportunity["operationalArea"]>("Food Relief");

  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const [startTime, setStartTime] = useState("09:00");

  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  // Custom time picker states
  const [timePickerOpen, setTimePickerOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState("09");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">("AM");
  const [totalRegistered, setTotalRegistered] = useState(0);

  const isEditing = Boolean(initialData);

  useEffect(() => {
    setStartDate(new Date());
  }, []);

  // Load existing opportunity data
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");

      setOperationalArea(initialData.operationalArea || "Food Relief");

      setStartDate(
        initialData.startDate ? new Date(initialData.startDate) : new Date(),
      );

      setEndDate(
        initialData.endDate ? new Date(initialData.endDate) : new Date(),
      );

      setStartTime("09:00");

      setLocation(initialData.location || "");
      setDescription(initialData.description || "");
      setTotalRegistered(initialData.totalRegistered || 0);
    } else {
      setTitle("");
      setOperationalArea("Food Relief");
      setStartDate(new Date());
      setEndDate(new Date());
      setStartTime("09:00");
      setLocation("");
      setDescription("");
      setTotalRegistered(0);
    }

    setTimePickerOpen(false);
  }, [initialData, isOpen]);

  // Keep custom picker values in sync with startTime
  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title || "");

      setOperationalArea(initialData.operationalArea || "Food Relief");

      setStartDate(
        initialData.startDate ? new Date(initialData.startDate) : new Date(),
      );

      setEndDate(
        initialData.endDate ? new Date(initialData.endDate) : new Date(),
      );

      setStartTime("09:00");

      setLocation(initialData.location || "");
      setDescription(initialData.description || "");
      setTotalRegistered(initialData.totalRegistered || 0);
    } else {
      setTitle("");
      setOperationalArea("Food Relief");
      setStartDate(new Date());
      setEndDate(new Date());
      setStartTime("09:00");
      setLocation("");
      setDescription("");
      setTotalRegistered(0);
    }

    setTimePickerOpen(false);
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  // Convert selected 12-hour time to 24-hour format
  const confirmTime = () => {
    let hour = Number(selectedHour);

    if (selectedPeriod === "PM" && hour !== 12) {
      hour += 12;
    }

    if (selectedPeriod === "AM" && hour === 12) {
      hour = 0;
    }

    const formattedHour = String(hour).padStart(2, "0");

    setStartTime(`${formattedHour}:${selectedMinute}`);

    setTimePickerOpen(false);
  };

  // Display time in 12-hour format
  const displayTime = () => {
    const [hours, minutes] = startTime.split(":");

    const hour = Number(hours);
    const displayHour = hour % 12 || 12;
    const period = hour >= 12 ? "PM" : "AM";

    return `${String(displayHour).padStart(2, "0")}:${minutes} ${period}`;
  };

  const handleAction = (status: "Draft" | "Active") => {
    if (!title.trim()) return;

    onSave({
      title: title.trim(),
      operationalArea,
      startDate: startDate ? format(startDate, "MMM dd, yyyy") : "",
      endDate: endDate ? format(endDate, "MMM dd, yyyy") : "",
      location:
        location ||
        "LEA Model Primary School Central Compound, Keffi Corridor Hub",
      description:
        description ||
        "Join our team in assisting local farmers with sustainable vertical backyard farming techniques.",
      status,
      totalRegistered,
      startTime,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
      <div className="max-h-[90vh] w-full max-w-xl animate-in zoom-in-95 overflow-y-auto scrollbar-none [&::-webkit-scrollbar]:hidden rounded-3xl border border-line bg-white p-7 shadow-2xl fade-in duration-200">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between border-b border-line pb-4">
          <div>
            <h2 className="text-lg font-bold text-black">
              {isEditing ? "Edit Opportunity" : "Create New Opportunity"}
            </h2>

            <p className="mt-0.5 text-xs text-basket-darkgreen/60">
              Fill in the details below to define a new volunteer initiative or
              field mission.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="grid size-8 place-items-center rounded-xl bg-basket-cream/30 text-basket-darkgreen/60 transition-colors hover:bg-basket-cream/60 hover:text-basket-darkgreen"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 text-xs">
          {/* Title */}
          <div>
            <label className="mb-1.5 block font-medium text-black">Title</label>

            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., TFAP Community Support and Local Outreach"
              className="w-full rounded-xl border border-line px-3.5 py-2.5 text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/30 focus:outline-none focus:ring-2 focus:ring-basket-darkgreen/20"
            />
          </div>

          {/* Operational Area */}
          <div>
            <label className="mb-1.5 block font-medium text-black">
              Operational Area
            </label>

            <div className="relative">
              <select
                value={operationalArea}
                onChange={(e) =>
                  setOperationalArea(
                    e.target.value as AdminOpportunity["operationalArea"],
                  )
                }
                className="w-full appearance-none rounded-xl border border-line bg-white px-3.5 py-2.5 text-xs text-basket-darkgreen focus:outline-none"
              >
                <option value="Food Relief">Food Relief</option>
                <option value="Eco-Agriculture">Eco-Agriculture</option>
                <option value="School Nutrition">School Nutrition</option>
              </select>

              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-basket-darkgreen/50">
                <ChevronDown className="size-3.5" />
              </div>
            </div>
          </div>

          {/* Date & Time Row */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Start Date */}
            <div>
              <label className="mb-1.5 block font-bold text-basket-darkgreen">
                Start Date
              </label>

              <Popover>
                <PopoverTrigger className="flex h-10 w-full items-center gap-2 rounded-xl border border-line bg-white px-3 py-2 text-left text-xs text-basket-darkgreen hover:bg-basket-cream/20">
                  <CalendarIcon className="size-3.5 shrink-0 text-basket-darkgreen/40" />

                  <span>{startDate ? format(startDate, "MMM dd, yyyy") : "Start Date"}</span>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={startDate}
                    onSelect={(date) => {
                      if (date) {
                        setStartDate(date);

                        if (!endDate ||date > endDate) {
                          setEndDate(date);
                        }
                      }
                    }}
                    disabled={{
                      before: new Date(new Date().setHours(0, 0, 0, 0)),
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* End Date */}
            <div>
              <label className="mb-1.5 block font-bold text-basket-darkgreen">
                End Date
              </label>

              <Popover>
                <PopoverTrigger className="flex w-full items-center gap-2 rounded-xl border border-line h-10 bg-white px-3 py-2 text-left text-xs text-basket-darkgreen hover:bg-basket-cream/20">
                  <CalendarIcon className="size-3.5 shrink-0 text-basket-darkgreen/40" />

                  <span>{endDate ? format(endDate, "MMM dd, yyyy") : "End Date"}</span>
                </PopoverTrigger>

                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={endDate}
                    onSelect={(date) => {
                      if (date) setEndDate(date);
                    }}
                    disabled={{
                      before: startDate ?? new Date(),
                    }}
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Start Time - Custom Picker */}
            <div>
              <label className="mb-1.5 block font-bold text-basket-darkgreen">
                Start Time
              </label>

              <Popover open={timePickerOpen} onOpenChange={setTimePickerOpen}>
                <PopoverTrigger className="flex h-10 w-full items-center gap-2 rounded-xl border border-line bg-white px-3 text-left text-xs text-basket-darkgreen shadow-none transition-colors hover:border-basket-darkgreen/40 hover:bg-basket-cream/20">
                  <Clock className="size-3.5 shrink-0 text-basket-darkgreen/50" />

                  <span className="flex-1">{displayTime()}</span>
                </PopoverTrigger>

                <PopoverContent
                  align="start"
                  className="w-80 rounded-2xl border border-line bg-white p-4 shadow-xl"
                >
                  {/* Selected Time Preview */}
                  <div className="mb-5 rounded-xl bg-[#F2F8F4] px-4 py-4 text-center">
                    <p className="text-xs font-medium text-basket-darkgreen/50">
                      Selected time
                    </p>

                    <div className="mt-1 flex items-center justify-center gap-1 text-3xl font-bold tracking-wide text-basket-darkgreen">
                      <span>{selectedHour}</span>

                      <span className="text-basket-darkgreen/30">:</span>

                      <span>{selectedMinute}</span>

                      <span className="ml-1 text-sm font-semibold">
                        {selectedPeriod}
                      </span>
                    </div>
                  </div>

                  {/* Selection Columns */}
                  <div className="grid grid-cols-3 gap-3">
                    {/* Hour */}
                    <div>
                      <p className="mb-2 text-center text-xs font-semibold text-basket-darkgreen/50">
                        Hour
                      </p>

                      <div className="flex max-h-48 flex-col gap-1 overflow-y-auto pr-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
                        {Array.from({ length: 12 }, (_, index) =>
                          String(index + 1).padStart(2, "0"),
                        ).map((hour) => (
                          <button
                            key={hour}
                            type="button"
                            onClick={() => setSelectedHour(hour)}
                            className={`rounded-lg py-2 text-xs font-semibold transition-all ${
                              selectedHour === hour
                                ? "bg-basket-darkgreen text-white shadow-sm"
                                : "text-basket-darkgreen hover:bg-[#F2F8F4]"
                            }`}
                          >
                            {hour}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Minute */}
                    <div>
                      <p className="mb-2 text-center text-xs font-semibold text-basket-darkgreen/50">
                        Minute
                      </p>

                      <div className="flex max-h-48 flex-col gap-1 overflow-y-auto pr-1 scrollbar-none [&::-webkit-scrollbar]:hidden">
                        {Array.from({ length: 12 }, (_, index) =>
                          String(index * 5).padStart(2, "0"),
                        ).map((minute) => (
                          <button
                            key={minute}
                            type="button"
                            onClick={() => setSelectedMinute(minute)}
                            className={`rounded-lg py-2 text-xs font-semibold transition-all ${
                              selectedMinute === minute
                                ? "bg-basket-darkgreen text-white shadow-sm"
                                : "text-basket-darkgreen hover:bg-[#F2F8F4]"
                            }`}
                          >
                            {minute}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* AM / PM */}
                    <div>
                      <p className="mb-2 text-center text-xs font-semibold text-basket-darkgreen/50">
                        Period
                      </p>

                      <div className="flex flex-col gap-2">
                        {(["AM", "PM"] as const).map((period) => (
                          <button
                            key={period}
                            type="button"
                            onClick={() => setSelectedPeriod(period)}
                            className={`rounded-lg py-3 text-xs font-semibold transition-all ${
                              selectedPeriod === period
                                ? "bg-basket-darkgreen text-white shadow-sm"
                                : "bg-[#F2F8F4] text-basket-darkgreen hover:bg-[#E5F0E9]"
                            }`}
                          >
                            {period}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Picker Footer */}
                  <div className="mt-5 flex items-center justify-end gap-3 border-t border-line pt-4">
                    <button
                      type="button"
                      onClick={() => setTimePickerOpen(false)}
                      className="rounded-lg px-4 py-2 text-xs font-semibold text-basket-darkgreen/60 transition-colors hover:bg-gray-100"
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      onClick={confirmTime}
                      className="rounded-lg bg-basket-darkgreen px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-basket-darkgreen/90"
                    >
                      Confirm time
                    </button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Specific Location */}
          <div>
            <label className="mb-1.5 block font-medium text-black">
              Specific Location
            </label>

            <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-3.5 py-2.5">
              <MapPin className="size-3.5 shrink-0 text-basket-darkgreen/40" />

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., LEA Model Primary School Central Compound, Keffi Corridor Hub"
                className="w-full bg-transparent text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/30 focus:outline-none"
              />
            </div>
          </div>

          {/* Number of Volunteers */}
          <div>
            <label className="mb-1.5 block font-medium text-black">
              Number of Volunteers
            </label>

            <input
              type="number"
              min="1"
              value={totalRegistered || ""}
              onChange={(e) =>
                setTotalRegistered(Math.max(0, Number(e.target.value)))
              }
              placeholder="e.g., 50"
              className="w-full rounded-xl border border-line px-3.5 py-2.5 text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/30 focus:outline-none focus:ring-2 focus:ring-basket-darkgreen/20"
            />
          </div>

          {/* Detailed Description */}
          <div>
            <label className="mb-1.5 block font-medium text-black">
              Detailed Description
            </label>

            <div className="overflow-hidden rounded-xl border border-line bg-white">
              {/* Rich Text Toolbar */}
              <div className="flex items-center gap-3 border-b border-line bg-basket-cream/20 px-3 py-2 text-basket-darkgreen/70">
                <button
                  type="button"
                  aria-label="Bold text"
                  className="hover:text-basket-darkgreen"
                >
                  <Bold className="size-3.5" />
                </button>

                <button
                  type="button"
                  aria-label="Italic text"
                  className="hover:text-basket-darkgreen"
                >
                  <Italic className="size-3.5" />
                </button>

                <button
                  type="button"
                  aria-label="Bullet list"
                  className="hover:text-basket-darkgreen"
                >
                  <List className="size-3.5" />
                </button>

                <button
                  type="button"
                  aria-label="Insert link"
                  className="hover:text-basket-darkgreen"
                >
                  <LinkIcon className="size-3.5" />
                </button>
              </div>

              <textarea
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Join our team in assisting local farmers with sustainable vertical backyard farming techniques..."
                className="w-full p-3 text-xs text-basket-darkgreen placeholder:text-basket-darkgreen/40 focus:outline-none"
              />
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex items-center justify-end gap-3 border-t border-line pt-4">
            <button
              type="button"
              onClick={() => handleAction("Draft")}
              className="rounded-xl border border-line bg-white px-5 py-2.5 font-semibold text-basket-darkgreen shadow-2xs transition-colors hover:bg-basket-cream/40"
            >
              Save as Draft
            </button>

            <button
              type="button"
              onClick={() => handleAction("Active")}
              className="rounded-xl bg-basket-darkgreen px-5 py-2.5 font-semibold text-white shadow-2xs transition-colors hover:bg-basket-olive"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
