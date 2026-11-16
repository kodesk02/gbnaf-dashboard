import { 
  Award, 
  CalendarDays, 
  FileText, 
  LayoutGrid, 
  Settings, 
  Users, 
  Flag, 
  CheckSquare, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  type LucideIcon 
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: number | string;
};

export const volunteerNavItems: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Opportunities", href: "/opportunities", icon: Users },
  { label: "Certificates", href: "/certificates", icon: Award },
  { label: "Schedule", href: "/schedule", icon: CalendarDays },
  { label: "Applications", href: "/applications", icon: FileText },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const adminNavItems: NavItem[] = [
  { label: "Overview", href: "/admin/dashboard", icon: LayoutGrid },
  { label: "Programmes", href: "/admin/programme", icon: Flag },
  { label: "Activities", href: "/admin/activities", icon: CalendarDays },
  { label: "Tasks", href: "/admin/tasks", icon: CheckSquare },
  { label: "Approvals", href: "/admin/approvals", icon: ShieldCheck, badge: 3 },
  { label: "Reports", href: "/admin/reports", icon: BarChart3 },
  { label: "Responsibilities", href: "/admin/responsibilities", icon: Layers },
  { label: "Volunteers", href: "/admin/volunteers", icon: Users },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];