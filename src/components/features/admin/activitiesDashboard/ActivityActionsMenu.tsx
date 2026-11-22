"use client";

import { useState } from "react";
import { Eye, MoreHorizontal, SquarePen, Users } from "lucide-react";

interface ActivityActionsMenuProps {
  activityId: string;
  isCompleted: boolean;
  onView: (id: string) => void;
  onEdit: (id: string) => void;
  onMarkCompleted: (id: string) => void;
}

export function ActivityActionsMenu({
  activityId,
  isCompleted,
  onView,
  onEdit,
  onMarkCompleted,
}: ActivityActionsMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open activity actions"
        aria-expanded={open}
        className="grid size-8 place-items-center rounded-full border border-line bg-white text-basket-darkgreen/70 hover:bg-basket-cream/30"
      >
        <MoreHorizontal className="size-4" />
      </button>

      {open && (
        <div className="absolute right-0 z-20 mt-1.5 w-44 rounded-2xl border border-line bg-white p-1.5 shadow-lg">
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onView(activityId);
            }}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-basket-darkgreen hover:bg-basket-cream/40"
          >
            <Eye className="size-3.5 text-basket-darkgreen/60" />
            View Details
          </button>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              onEdit(activityId);
            }}
            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-basket-darkgreen hover:bg-basket-cream/40"
          >
            <SquarePen className="size-3.5 text-basket-darkgreen/60" />
            Edit Activity
          </button>
          {!isCompleted && (
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                onMarkCompleted(activityId);
              }}
              className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-medium text-basket-darkgreen hover:bg-basket-cream/40"
            >
              <Users className="size-3.5 text-basket-darkgreen/60" />
              Mark as completed
            </button>
          )}
        </div>
      )}
    </div>
  );
}