import { Award, CalendarDays, Clock, FileText, LayoutGrid, Settings, Users, type LucideIcon } from "lucide-react";

export const navItems: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Hours & Logs", href: "/hours", icon: Clock },
  { label: "Opportunities", href: "/opportunities", icon: Users },
  { label: "Certificates", href: "/certificates", icon: Award },
  { label: "Schedule", href: "/schedule", icon: CalendarDays },
  { label: "Applications", href: "/applications", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings },
];
