"use client";

import { VolunteerApplication } from "@/types/volunteer";
import { X, Mail, MapPin, Clock, Calendar, Award, CheckCircle2, Share2, Copy } from "lucide-react";

interface VolunteerProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  volunteer: VolunteerApplication | null;
}

export function VolunteerProfileModal({
  isOpen,
  onClose,
  volunteer,
}: VolunteerProfileModalProps) {
  if (!isOpen || !volunteer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-xs">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-7 shadow-2xl border border-line animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        
        {/* Top Header / Actions */}
        <div className="flex items-center justify-between border-b border-line pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="size-3.5" /> Verified Volunteer
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => alert(`Copied email for ${volunteer.volunteerName}`)}
              className="inline-flex items-center gap-1.5 rounded-xl border border-line bg-white px-3 py-1.5 text-xs font-semibold text-basket-darkgreen hover:bg-basket-cream/30"
            >
              <Copy className="size-3.5" /> Copy Email
            </button>
            <button
              type="button"
              onClick={onClose}
              className="grid size-8 place-items-center rounded-xl bg-basket-cream/30 text-basket-darkgreen/60 hover:bg-basket-cream/60 hover:text-basket-darkgreen transition-colors"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Identity & Bio Card */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-line bg-basket-cream/10 p-5 mb-6">
          <div className={`grid size-16 shrink-0 place-items-center rounded-2xl text-xl font-bold ${volunteer.avatarBg}`}>
            {volunteer.avatarText}
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-basket-darkgreen">
              {volunteer.volunteerName}
            </h2>
            <div className="flex items-center gap-3 text-xs text-basket-darkgreen/60">
              <span className="inline-flex items-center gap-1"><MapPin className="size-3.5" /> {volunteer.location}</span>
              <span>•</span>
              <span>Volunteer since September 2026</span>
            </div>
            <p className="mt-2 text-xs text-basket-darkgreen/80 leading-relaxed">
              Passionate about community impact, food security, and sustainable agriculture. Dedicated to supporting local field initiatives and relief distributions across FCT.
            </p>
          </div>
        </div>

        {/* Impact Metrics Row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="rounded-2xl border border-line bg-white p-4 text-center shadow-2xs">
            <div className="mx-auto grid size-9 place-items-center rounded-xl bg-basket-cream/50 text-basket-darkgreen mb-2">
              <Clock className="size-4" />
            </div>
            <p className="text-lg font-bold text-basket-darkgreen">148.5</p>
            <p className="text-[10px] uppercase font-semibold text-basket-darkgreen/50">Hours Volunteered</p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-4 text-center shadow-2xs">
            <div className="mx-auto grid size-9 place-items-center rounded-xl bg-basket-cream/50 text-basket-darkgreen mb-2">
              <Calendar className="size-4" />
            </div>
            <p className="text-lg font-bold text-basket-darkgreen">22</p>
            <p className="text-[10px] uppercase font-semibold text-basket-darkgreen/50">Events Attended</p>
          </div>

          <div className="rounded-2xl border border-line bg-white p-4 text-center shadow-2xs">
            <div className="mx-auto grid size-9 place-items-center rounded-xl bg-basket-cream/50 text-basket-darkgreen mb-2">
              <Award className="size-4" />
            </div>
            <p className="text-lg font-bold text-basket-darkgreen">Level 3</p>
            <p className="text-[10px] uppercase font-semibold text-basket-darkgreen/50">Champion Rank</p>
          </div>
        </div>

        {/* Skills & Preferences */}
        <div className="space-y-4 text-xs mb-6">
          <div>
            <h3 className="font-bold text-basket-darkgreen mb-2">Registered Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {volunteer.skills.map((skill, i) => (
                <span key={i} className="rounded-lg bg-basket-cream/60 px-3 py-1 font-medium text-basket-darkgreen border border-basket-darkgreen/10">
                  {skill}
                </span>
              ))}
              <span className="rounded-lg bg-basket-cream/20 px-3 py-1 font-medium text-basket-darkgreen/60 border border-line">
                Community Outreach
              </span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-basket-darkgreen mb-2">Operational Area Preferences</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg bg-emerald-50 text-emerald-700 px-3 py-1 font-medium border border-emerald-200">✓ Food Relief</span>
              <span className="rounded-lg bg-emerald-50 text-emerald-700 px-3 py-1 font-medium border border-emerald-200">✓ Eco-Agriculture</span>
              <span className="rounded-lg bg-slate-100 text-slate-500 px-3 py-1 font-medium">School Nutrition</span>
            </div>
          </div>
        </div>

        {/* Profile Share Banner */}
        <div className="flex items-center justify-between rounded-2xl bg-emerald-50 border border-emerald-200 p-4">
          <div>
            <p className="text-xs font-bold text-emerald-900">Share Volunteer Impact Profile</p>
            <p className="text-[11px] text-emerald-700">Generate a public link to showcase verified volunteer hours.</p>
          </div>
          <button
            type="button"
            onClick={() => alert("Public profile link copied to clipboard!")}
            className="inline-flex items-center gap-2 rounded-xl bg-basket-darkgreen px-4 py-2 text-xs font-semibold text-white hover:bg-basket-olive transition-colors"
          >
            <Share2 className="size-3.5" /> Copy Profile Link
          </button>
        </div>

      </div>
    </div>
  );
}