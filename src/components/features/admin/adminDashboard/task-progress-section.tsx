import { pipelineTasks } from "@/lib/data";
import { SlidersHorizontal } from "lucide-react";

export function TaskProgressSection() {
  return (
    <div className="rounded-3xl border border-line bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-base font-bold tracking-wider text-black/80">Task Progress</h2>
          <p className="text-xs text-basket-darkgreen/55">Multi-stage pipeline completions</p>
        </div>
        <button aria-label="Filter tasks" className="text-basket-darkgreen/50 hover:text-basket-darkgreen">
          <SlidersHorizontal className="size-4" />
        </button>
      </div>

      <div className="space-y-6">
        {pipelineTasks.map((task) => (
          <div key={task.id}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-[13px] font-bold text-basket-darkgreen">{task.title}</span>
              <span className="text-xs font-bold font-mono text-basket-darkgreen">{task.percent}%</span>
            </div>

            <div className="h-3 w-full rounded-full bg-basket-cream/50 overflow-hidden flex">
              {task.stages.map((stage) => (
                <div
                  key={stage.label}
                  className={`h-full ${stage.color}`}
                  style={{ width: `${stage.width}%` }}
                />
              ))}
            </div>

            <div className="mt-1.5 flex gap-4 text-[10px] font-medium text-basket-darkgreen/60">
              {task.stages.map((stage) => (
                <span key={stage.label} className="flex items-center gap-1">
                  <span className={`size-2 rounded-full ${stage.color}`} /> {stage.label} ({stage.count})
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-line/40 text-right">
        <button className="text-xs font-bold text-basket-darkgreen hover:underline">
          Manage All Tasks
        </button>
      </div>
    </div>
  );
}