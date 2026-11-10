"use client";

import { useEffect, useState } from "react";

export function GreetingHeader({ name, chapter }: { name: string; chapter: string }) {
  const [info, setInfo] = useState<{ greeting: string; date: string } | null>(null);

  useEffect(() => {
    const now = new Date();
    const h = now.getHours();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setInfo({
      greeting: h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening",
      date: now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" }),
    });
  }, []);

  return (
    <div>
      <h1 className="flex items-center gap-2 text-[32px] font-semibold leading-tight tracking-tight">
        {info?.greeting ?? "Welcome"}, {name}
      </h1>
      <p className="mt-1 flex items-center gap-2 text-sm text-basket-darkgreen/60">
        <span className="min-h-5">{info?.date}</span>
        <span className="size-1 rounded-full bg-basket-darkgreen/25" />
        <span className="font-medium text-basket-darkgreen/80">{chapter}</span>
      </p>
    </div>
  );
}
