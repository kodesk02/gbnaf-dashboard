"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, LogOut, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/stores/sidebar-store";
import { navItems } from "./NavItems";

const itemBase =
  "relative flex h-11 items-center text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-white/40";

interface SidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

export function Sidebar({ mobileOpen, onMobileClose }: SidebarProps) {
  const { collapsed, toggle } = useSidebar();
  const pathname = usePathname();

  const sidebarContent = (
    <aside
      className={cn(
        "relative flex h-full flex-col rounded-[28px] bg-basket-darkgreen py-5 transition-[width] duration-300 overflow-hidden",
        mobileOpen ? "w-full px-4 rounded-none" : collapsed ? "w-16 px-2.5" : "w-50 px-3"
      )}
    >
      <div className="flex items-center justify-between mb-6 px-1">
        {!mobileOpen && (
          <button
            onClick={toggle}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="mx-auto hidden md:grid size-9 place-items-center rounded-xl bg-white/10 text-emerald-300 transition-colors hover:bg-white/15 z-10"
          >
            {collapsed ? <ChevronRight className="size-4" /> : <ChevronLeft className="size-4" />}
          </button>
        )}

        {mobileOpen && (
          <div className="flex w-full items-center justify-between px-2">
            <span className="text-xs font-semibold tracking-wider uppercase text-basket-sage/70">Menu</span>
            <button
              onClick={onMobileClose}
              aria-label="Close menu"
              className="grid size-9 place-items-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/15"
            >
              <X className="size-5" />
            </button>
          </div>
        )}
      </div>

      <nav className="flex flex-1 flex-col gap-1.5 relative">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onMobileClose}
              title={!mobileOpen && collapsed ? label : undefined}
              aria-current={active ? "page" : undefined}
              className={cn(
                itemBase,
                mobileOpen
                  ? cn("rounded-xl gap-4 px-3.5", active ? "bg-white text-basket-darkgreen" : "text-basket-sage/80 hover:bg-white/10 hover:text-white")
                  : collapsed
                  ? "justify-center rounded-xl " + (active ? "bg-white text-basket-darkgreen" : "text-basket-sage/80 hover:bg-white/10 hover:text-white")
                  : cn(
                      "gap-3 px-3.5",
                      active
                        ? "bg-white text-basket-darkgreen rounded-l-2xl rounded-r-none -mr-3 pr-3.5 shadow-sm"
                        : "rounded-xl text-basket-sage/80 hover:bg-white/10 hover:text-white"
                    )
              )}
            >
              <Icon className="size-4.5 shrink-0 z-10" strokeWidth={1.75} />
              {(!(!mobileOpen && collapsed)) && <span className="truncate z-10">{label}</span>}

              {active && !mobileOpen && !collapsed && (
                <>
                  <div className="absolute -top-4 right-0 size-4 bg-white pointer-events-none">
                    <div className="size-full bg-basket-darkgreen rounded-br-2xl" />
                  </div>
                  <div className="absolute -bottom-4 right-0 size-4 bg-white pointer-events-none">
                    <div className="size-full bg-basket-darkgreen rounded-tr-2xl" />
                  </div>
                </>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-white/10 pt-3 z-10">
        <button
          onClick={onMobileClose}
          title={!mobileOpen && collapsed ? "Log out" : undefined}
          className={cn(itemBase, "w-full rounded-xl text-basket-sage/80 hover:bg-white/10 hover:text-white", !mobileOpen && collapsed ? "justify-center" : "gap-3 px-3.5")}
        >
          <LogOut className="size-4.5 shrink-0" strokeWidth={1.75} />
          {(!(!mobileOpen && collapsed)) && <span>Log out</span>}
        </button>
      </div>
    </aside>
  );

  return (
    <>
      <div className="sticky top-17 hidden h-[calc(100vh-68px)] shrink-0 p-3 md:block">
        {sidebarContent}
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={onMobileClose}
          />
          <div className="relative flex h-full w-70 flex-col bg-basket-darkgreen shadow-xl animate-in slide-in-from-left duration-300">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}