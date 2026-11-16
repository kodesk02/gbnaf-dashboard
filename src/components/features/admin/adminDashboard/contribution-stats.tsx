"use client";

import { useMemo } from "react";
import { Calendar } from "lucide-react";
import { volunteerCategoryStats } from "@/lib/data";

export function ContributionStats() {
  const { maxValue, yAxisTicks } = useMemo(() => {
    const rawMax = Math.max(...volunteerCategoryStats.map((item) => item.value), 10);
    const ceiling = Math.ceil(rawMax / 10) * 10;
    
    const step = ceiling / 4;
    const ticks = Array.from({ length: 5 }, (_, i) => Math.round(ceiling - i * step));

    return { maxValue: ceiling, yAxisTicks: ticks };
  }, []);

  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-bold tracking-wider text-black/80">Active Volunteers by Operational Area</h2>
          <p className="text-xs text-basket-darkgreen/55">Headcount distribution across core hubs</p>
        </div>
        <button className="flex items-center gap-2 rounded-xl border border-line bg-basket-cream/20 px-3 py-1.5 text-xs font-semibold text-basket-darkgreen hover:bg-basket-cream/50">
          Last 6 months <Calendar className="size-3.5 text-basket-darkgreen/50" />
        </button>
      </div>

      <div className="relative flex-1 min-h-55 flex items-end gap-3 pt-6 pb-2 pl-8 pr-2 border-b border-line/50">
        <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between pointer-events-none pb-8 pt-6">
          {yAxisTicks.map((tick) => (
            <div key={tick} className="flex items-center w-full">
              <span className="w-6 text-[10px] font-mono text-basket-darkgreen/40 text-right pr-2">
                {tick}
              </span>
              <div className="flex-1 border-b border-dashed border-line/40" />
            </div>
          ))}
        </div>

        <div className="relative z-10 flex h-full w-full items-end justify-between gap-3 pt-6">
          {volunteerCategoryStats.map((item) => {
            const heightPercentage = (item.value / maxValue) * 100;

            return (
              <div
                key={item.id}
                className="flex flex-1 flex-col items-center h-full justify-end"
              >
                <div className="w-full max-w-12 flex items-end h-full">
                  <div
                    className="group/bar relative w-full bg-basket-darkgreen rounded-t-xl transition-all duration-500 ease-out hover:bg-basket-olive"
                    style={{ height: `${heightPercentage}%` }}
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity duration-200 pointer-events-none z-20">
                      <span className="rounded-md bg-basket-darkgreen px-2 py-0.5 text-[10px] font-bold text-white shadow-md font-mono whitespace-nowrap">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="mt-3 text-[11px] font-semibold text-basket-darkgreen/70 truncate max-w-full text-center">
                  {item.shortLabel}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-3 flex items-center justify-between text-[11px] text-basket-darkgreen/50">
        <span>Total active personnel tracked</span>
        <span className="font-bold text-basket-darkgreen font-mono">
          {volunteerCategoryStats.reduce((sum, item) => sum + item.value, 0)} Volunteers
        </span>
      </div>
    </div>
  );
}