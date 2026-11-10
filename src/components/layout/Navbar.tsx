"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, ChevronDown, Menu, Sun } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { currentUser } from "@/lib/data";
import { Sidebar } from "./Sidebar";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 flex h-17 items-center justify-between border-b border-line bg-page/85 px-5 backdrop-blur">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="grid size-10 place-items-center rounded-xl border border-line bg-white text-basket-darkgreen transition-colors hover:bg-basket-cream/50 md:hidden"
          >
            <Menu className="size-5" strokeWidth={1.75} />
          </button>

          <Link href="/" className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-basket-darkgreen">
              <Sun className="size-5 text-emerald-300" strokeWidth={1.75} />
            </span>
            <span>
              <span className="flex items-center gap-2 text-lg font-bold leading-none tracking-tight">
                GBNAF
                <Badge variant="blue" className="rounded-md hidden md:block  px-1.5 py-0.5 text-[9px] text-basket-darkgreen/50">NGO</Badge>
              </span>
              <span className="mt-1 hidden md:block text-[10px] font-medium uppercase tracking-[0.14em] text-basket-darkgreen/55">
                Volunteer Platform
              </span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button aria-label="Notifications" className="relative grid size-10 place-items-center rounded-full border border-line bg-white transition-colors hover:bg-basket-cream/50">
            <Bell className="size-4.5" strokeWidth={1.75} />
            <span className="absolute -right-0.5 -top-0.5 grid size-4.5 place-items-center rounded-full bg-basket-olive text-[10px] font-semibold text-white">
              {currentUser.notifications}
            </span>
          </button>

          <button className="flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pl-1.5 pr-3 text-left transition-colors hover:bg-basket-cream/50">
            <span className="grid size-8 place-items-center rounded-full bg-emerald-50 text-[11px] font-bold text-basket-olive">
              {currentUser.initials}
            </span>
            <span className="hidden sm:block">
              <span className="block text-xs font-semibold leading-tight">{currentUser.name}</span>
              <span className="block text-[10px] font-medium leading-tight text-basket-olive">{currentUser.status}</span>
            </span>
            <ChevronDown className="size-3.5 text-basket-darkgreen/40" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Drawer */}
      {mobileMenuOpen && (
        <Sidebar mobileOpen={mobileMenuOpen} onMobileClose={() => setMobileMenuOpen(false)} />
      )}
    </>
  );
}