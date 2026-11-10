import Link from "next/link";
import { cn } from "@/lib/utils";

type LinkCardProps = {
  href: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
};

/** A card that is a real link: lift + olive border + soft shadow on hover. */
export function LinkCard({ href, title, className, children }: LinkCardProps) {
  return (
    <Link
      href={href}
      title={title}
      className={cn(
        "group block rounded-2xl border border-line bg-white shadow-[0_1px_3px_rgba(16,47,33,0.05)] outline-none transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-basket-darkgreen/30 hover:shadow-[0_8px_24px_-8px_rgba(16,47,33,0.18)]",
        "focus-visible:ring-2 focus-visible:ring-basket-olive/40",
        className
      )}
    >
      {children}
    </Link>
  );
}
