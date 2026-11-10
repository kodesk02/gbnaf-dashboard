import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionCard } from "@/components/shared/section-card";

type Point = { day: string; hours: number };

const W = 600, H = 300;
const PAD = { l: 44, r: 28, t: 34, b: 40 };
const Y_TICKS = [0, 2, 4, 6, 8];

// Monotone cubic path so the curve never overshoots the data (Wed stays at 0h)
function smoothPath(pts: { x: number; y: number }[]) {
  const n = pts.length;
  const dx: number[] = [], m: number[] = [], t: number[] = new Array(n);
  for (let i = 0; i < n - 1; i++) { dx[i] = pts[i + 1].x - pts[i].x; m[i] = (pts[i + 1].y - pts[i].y) / dx[i]; }
  t[0] = m[0]; t[n - 1] = m[n - 2];
  for (let i = 1; i < n - 1; i++) t[i] = m[i - 1] * m[i] <= 0 ? 0 : (m[i - 1] + m[i]) / 2;
  for (let i = 0; i < n - 1; i++) {
    if (m[i] === 0) { t[i] = 0; t[i + 1] = 0; continue; }
    const a = t[i] / m[i], b = t[i + 1] / m[i], s = a * a + b * b;
    if (s > 9) { const k = 3 / Math.sqrt(s); t[i] = k * a * m[i]; t[i + 1] = k * b * m[i]; }
  }
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 0; i < n - 1; i++) {
    const h = dx[i] / 3;
    d += ` C${pts[i].x + h},${pts[i].y + t[i] * h} ${pts[i + 1].x - h},${pts[i + 1].y - t[i + 1] * h} ${pts[i + 1].x},${pts[i + 1].y}`;
  }
  return d;
}

export function WeeklyHoursChart({ data }: { data: Point[] }) {
  const max = Math.max(...data.map((d) => d.hours));
  const yMax = Y_TICKS[Y_TICKS.length - 1];
  const x = (i: number) => PAD.l + 16 + (i / (data.length - 1)) * (W - PAD.l - PAD.r - 16);
  const y = (v: number) => PAD.t + (1 - v / yMax) * (H - PAD.t - PAD.b);
  const pts = data.map((d, i) => ({ x: x(i), y: y(d.hours) }));
  const line = smoothPath(pts);
  const baseY = y(0);
  const area = `${line} L${pts[pts.length - 1].x},${baseY} L${pts[0].x},${baseY} Z`;
  const label = (v: number) => (v === 0 ? "0h" : `${v.toFixed(1)}h`);

  return (
    <SectionCard
      title="Contribution Records"
      subtitle="Your verified volunteer hours over the last 7 days"
      className="h-full"
      action={
        <Link href="/hours" className="flex items-center gap-1 whitespace-nowrap text-xs text-basket-darkgreen font-semibold hover:text-basket-olive/80">
          View Full Log <ArrowRight className="size-3" />
        </Link>
      }
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Line chart of hours volunteered per day this week">
        <defs>
          <linearGradient id="hoursFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(52, 211, 153)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(52, 211, 153)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {Y_TICKS.map((t) => (
          <g key={t}>
            <line x1={PAD.l} x2={W - PAD.r + 10} y1={y(t)} y2={y(t)} className="stroke-basket-darkgreen/[0.06]" />
            <text x={PAD.l - 10} y={y(t) + 3} textAnchor="end" className="fill-basket-darkgreen/35 font-mono text-[10px]">{t}h</text>
          </g>
        ))}

        <path d={area} fill="url(#hoursFill)" />
        <path d={line} fill="none" strokeWidth={2} strokeLinecap="round" className="stroke-basket-darkgreen" />

        {data.map((d, i) => {
          const isMax = d.hours === max;
          return (
            <g key={d.day}>
              <circle cx={pts[i].x} cy={pts[i].y} r={4} strokeWidth={1.5} className="fill-white stroke-basket-darkgreen" />
              {isMax ? (
                <g>
                  <rect x={pts[i].x - 20} y={pts[i].y - 30} width={40} height={20} rx={5} className="fill-basket-darkgreen" />
                  <text x={pts[i].x} y={pts[i].y - 16.5} textAnchor="middle" className="fill-white font-mono text-[10px] font-semibold">{label(d.hours)}</text>
                </g>
              ) : (
                <text x={pts[i].x} y={pts[i].y - 12} textAnchor="middle" className="fill-basket-darkgreen/55 font-mono text-[10px]">{label(d.hours)}</text>
              )}
              <text x={pts[i].x} y={H - 12} textAnchor="middle" className={isMax ? "fill-basket-darkgreen text-[12px] font-bold" : "fill-basket-darkgreen/50 text-[12px]"}>{d.day}</text>
            </g>
          );
        })}
      </svg>
    </SectionCard>
  );
}
