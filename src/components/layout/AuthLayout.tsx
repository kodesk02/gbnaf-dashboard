"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, LogIn, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Left Green Hero Section (Card Wrapper with Padding & Rounded Corners) */}
      <div className="sticky top-0 hidden h-screen w-1/2 p-2 lg:flex ">
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl bg-basket-darkgreen px-8 py-10 text-white shadow-xl xl:px-12">
          {/* Top Spacer */}
          <div className="relative z-10" />

          {/* Hero Content Updated from Image Profile */}
          <div className="relative z-10 mt-auto max-w-2xl space-y-4 pb-6 text-left">
            <h1 className="font-serif text-2xl font-normal leading-[1.12] tracking-tight text-white md:text-[32px] xl:text-[40px]">
              The Greener Basket For Nutrition and Agriculture Foundation
            </h1>
            <p className="text-xs leading-relaxed text-basket-sage/90 md:text-sm">
              A systems-driven nonprofit advancing nutrition security, resilient
              food systems, & environmental sustainability. Join our network of
              community champions making a lasting impact.
            </p>
          </div>

          {/* Bottom Website Link Footer */}
          <div className="relative z-10 flex items-center justify-between border-t border-basket-olive/40 pt-4">
            <span className="text-xs text-basket-sage/70">
              Systems-Driven Nutrition & Agriculture
            </span>
            <Link
              className="inline-flex items-center gap-1.5 rounded-full border border-basket-olive/60 bg-basket-darkgreen/40 px-3.5 py-1.5 text-xs font-medium text-background transition-colors hover:bg-basket-olive/60"
              href="https://greenerbasketfoundation.org/"
              target="_blank"
              rel="noreferrer"
            >
              greenerbasket.org
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Floating Toggle Buttons (Pinned to Right Edge of the Green Card) */}
          <div className="absolute right-0 top-1/4 z-20 -translate-y-1/2 space-y-2">
            <Link
              href="/register"
              className={cn(
                "flex items-center gap-2 rounded-l-2xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md",
                !isLogin
                  ? "bg-background text-[rgb(28,73,46)] shadow-xl border-l-4 border-gray-400"
                  : "bg-basket-darkgreen text-emerald-100 hover:bg-[#102d1c]"
              )}
            >
              <User className="h-4 w-4" />
              Sign Up
            </Link>
            <Link
              href="/login"
              className={cn(
                "flex items-center gap-2 rounded-l-2xl px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all shadow-md",
                isLogin
                  ? "bg-background text-[rgb(28,73,46)] shadow-xl border-l-4 border-gray-400"
                  : "bg-basket-darkgreen text-emerald-100 hover:bg-[#102d1c]"
              )}
            >
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="flex h-screen w-full flex-1 flex-col overflow-y-auto p-4 sm:p-6 md:p-10 lg:w-1/2 lg:p-12">
        {/* Mobile View Navigation Toggle */}
        <div className="mb-6 rounded-2xl bg-gray-100 p-1.5 lg:hidden">
          <div className="grid grid-cols-2 gap-1">
            <Link
              href="/register"
              className={cn(
                "flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider transition-all",
                isLogin   
                  ? "bg-[rgb(28,73,46)] text-white shadow-sm"
                  : "text-gray-600"
              )}
            >
              <User className="h-3.5 w-3.5" />
              Sign Up
            </Link>
            <Link
              href="/login"
              className={cn(
                "flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold uppercase tracking-wider transition-all",
                !isLogin
                  ? "bg-[rgb(28,73,46)] text-white shadow-sm"
                  : "text-gray-600"
              )}
            >
              <LogIn className="h-3.5 w-3.5" />
              Login
            </Link>
          </div>
        </div>

        <div className="my-auto w-full">{children}</div>
      </div>
    </div>
  );
}