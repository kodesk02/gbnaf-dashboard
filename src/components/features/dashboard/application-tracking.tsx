import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { SectionCard } from "@/components/shared/section-card";
import { LinkCard } from "@/components/shared/link-card";

type Application = {
  id: string;
  title: string;
  status: "Accepted" | "Under Review";
  submitted: string;
  detail: string;
  action: string;
  actionMuted?: boolean;
};

const getStatusTone = (status: Application["status"]) => {
  switch (status) {
    case "Accepted":
      return "verified";
    case "Under Review":
      return "pending";
    default:
      return "verified";
  }
};

export function ApplicationTracking({
  applications,
}: {
  applications: Application[];
}) {
  return (
    <SectionCard
      title="Application Tracking"
      subtitle="Status of submitted commitments"
      className="h-full"
      action={
        <span className="text-xs font-semibold">
          {applications.length} Total
        </span>
      }
    >
      <div className="space-y-3">
        {applications.map((a) => (
          <LinkCard
            key={a.id}
            href={`/applications/${a.id}`}
            className="bg-basket-cream/20 p-4 shadow-none"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[13px] font-semibold leading-snug">
                  {a.title}
                </p>
                <p className="mt-1 text-[11px] text-basket-darkgreen/50">
                  Submitted: {a.submitted}
                </p>
              </div>
              <Badge variant={getStatusTone(a.status)}>
                {a.status}
              </Badge>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-line pt-3 text-[11px]">
              <span className="text-basket-darkgreen/55">{a.detail}</span>
              <span
                className={cn(
                  "shrink-0",
                  a.actionMuted
                    ? "text-basket-darkgreen/35"
                    : "font-semibold text-basket-darkgreen group-hover:text-basket-olive",
                )}
              >
                {a.action}
              </span>
            </div>
          </LinkCard>
        ))}

        {/* <div className="flex items-center justify-between gap-3 rounded-xl border border-line px-4 py-3">
          <p className="text-[12px] leading-snug text-basket-darkgreen/70">
            <span className="block font-semibold text-basket-darkgreen">Need support with applications?</span>
            Contact your local regional supervisor anytime.
          </p>
          <Link href="/support" className="shrink-0 text-[12px] font-semibold hover:text-basket-olive">Get Help</Link>
        </div> */}
      </div>
    </SectionCard>
  );
}
