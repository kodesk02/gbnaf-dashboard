export const currentUser = {
  firstName: "Kitan",
  name: "Kitan G.",
  initials: "GK",
  status: "Verified Volunteer",
  chapter: "Lagos Chapter",
  notifications: 4,
};

export const hoursSummary = { logged: 28.5, goal: 50 };

export const weeklyHours = [
  { day: "Mon", hours: 3 },
  { day: "Tue", hours: 4.5 },
  { day: "Wed", hours: 0 },
  { day: "Thu", hours: 6 },
  { day: "Fri", hours: 4 },
  { day: "Sat", hours: 8 },
  { day: "Sun", hours: 3 },
];

export const upcomingShifts = [
  {
    id: "lagos-food-hub",
    title: "Lagos Central Food Hub Packaging",
    date: "Nov 12",
    time: "09:00 AM - 01:30 PM",
    hours: 4.5,
    place: "On-site",
  },
  {
    id: "water-sanitation",
    title: "Water Sanitation & Hygiene Outreach",
    date: "Nov 15",
    time: "10:30 AM - 02:00 PM",
    hours: 3.5,
    place: "Ikorodu",
  },
];

export type RoleMode = "on-site" | "remote" | "hybrid";

export const volunteerRoles: {
  id: string;
  title: string;
  tag: string;
  tagTone: "green" | "sage" | "blue";
  description: string;
  location: string;
  commitment: string;
  starts: string;
  mode: RoleMode;
}[] = [
  {
    id: "community-health-survey-lead",
    title: "Community Health Survey Lead",
    tag: "High Need",
    tagTone: "green",
    description:
      "Coordinate household wellness checks and compile survey indicators.",
    location: "Surulere, Lagos",
    commitment: "6 hrs / week",
    starts: "Starts Nov 18",
    mode: "on-site",
  },
  {
    id: "warehouse-inventory-dispatch",
    title: "Warehouse Inventory & Dispatch",
    tag: "Weekend",
    tagTone: "sage",
    description:
      "Package non-perishable grain shipments and review logistics manifests.",
    location: "Apapa Hub",
    commitment: "4 hrs / shift",
    starts: "Ongoing",
    mode: "on-site",
  },
  {
    id: "digital-literacy-tutor",
    title: "Digital Literacy Tutor for Youths",
    tag: "Hybrid",
    tagTone: "blue",
    description:
      "Provide basic computer coaching and introduction to web tools.",
    location: "Remote / Yaba",
    commitment: "3 hrs / week",
    starts: "Starts Nov 22",
    mode: "hybrid",
  },
];

export const applications: {
  id: string;
  title: string;
  status: "Accepted" | "Under Review";
  submitted: string;
  detail: string;
  action: string;
  actionMuted?: boolean;
}[] = [
  {
    id: "mobile-clinic-dispatch",
    title: "Mobile Clinic Dispatch Assistant",
    status: "Accepted",
    submitted: "Nov 02, 2026",
    detail: "Coordinator: Dr. Adebayo",
    action: "View Onboarding",
  },
  {
    id: "outreach-translator-yoruba",
    title: "Regional Outreach Translator (Yoruba)",
    status: "Under Review",
    submitted: "Nov 06, 2026",
    detail: "Screening Stage: Document Verification",
    action: "Est. 2 days",
    actionMuted: true,
  },
  {
    id: "food-safety-inspector",
    title: "Food Safety & Hygiene Inspector",
    status: "Accepted",
    submitted: "Oct 28, 2026",
    detail: "Assigned Area: Lagos Mainland",
    action: "Duty Sheet",
  },
];
