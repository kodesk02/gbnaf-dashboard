import {
  ActiveProgramme,
  UpcomingActivity,
  PendingApproval,
  OutstandingReport,
  UnassignedResponsibility,
  OperationalVolunteerStat,
  PipelineTask,
  AdminOpportunity,
  Applications,
  Volunteer,
} from "@/types/admin";
import { VolunteerApplication, VolunteerApplicationRecord, VolunteerOpportunity } from "@/types/volunteer";

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


export const volunteerRoles: Volunteer[] = [
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
    starts: "ONGOING",
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

export const applications: Applications[] = [
  {
    id: "mobile-clinic-dispatch",
    title: "Mobile Clinic Dispatch Assistant",
    status: "ACCEPTED",
    submitted: "Nov 02, 2026",
    detail: "Coordinator: Dr. Adebayo",
    action: "View Onboarding",
  },
  {
    id: "outreach-translator-yoruba",
    title: "Regional Outreach Translator (Yoruba)",
    status: "PENDING",
    submitted: "Nov 06, 2026",
    detail: "Screening Stage: Document Verification",
    action: "Est. 2 days",
    actionMuted: true,
  },
  {
    id: "food-safety-inspector",
    title: "Food Safety & Hygiene Inspector",
    status: "ACCEPTED",
    submitted: "Oct 28, 2026",
    detail: "Assigned Area: Lagos Mainland",
    action: "Duty Sheet",
  },
];

export const initialProgrammes: AdminOpportunity[] = [
  {
    id: "opp-1",
    title: "Opportunity Title",
    status: "ACTIVE",
    operationalArea: "Food Relief",
    startDate: "Nov 15, 2026",
    endDate: "Nov 15, 2026",
    location: "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description: "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",
    totalRegistered: 8,
    startTime: '6'
  },
  {
    id: "opp-2",
    title: "Opportunity Title",
    status: "PENDING",
    operationalArea: "Eco-Agriculture",
    startDate: "Nov 15, 2026",
    endDate: "Nov 15, 2026",
    startTime: '6',
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",
    totalRegistered: 2,
  },
  {
    id: "opp-3",
    title: "Opportunity Title",
    status: "PENDING",
    operationalArea: "School Nutrition",
    startTime: '6',
    startDate: "Nov 15, 2026",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",

    endDate: "Nov 15, 2026",
    totalRegistered: 3,
  },
  {
    id: "opp-4",
    title: "Opportunity Title",
    status: "COMPLETED",
    operationalArea: "Food Relief",
    startTime: '6',
    startDate: "Nov 15, 2026",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",

    endDate: "Nov 15, 2026",
    totalRegistered: 22,
  },
  {
    id: "opp-5",
    title: "Opportunity Title",
    status: "DRAFT",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",

    operationalArea: "Food Relief",
    startTime: '6',
    startDate: "Nov 15, 2026",
    endDate: "End 1, 2026",
    totalRegistered: 10,
  },
  {
    id: "opp-6",
    title: "Opportunity Title",
    status: "DRAFT",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",

    operationalArea: "Food Relief",
    startTime: '6',
    startDate: "Nov 15, 2026",
    endDate: "End 1, 2026",
    totalRegistered: 8,
  },
  {
    id: "opp-7",
    title: "Opportunity Title",
    status: "DRAFT",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",

    operationalArea: "Eco-Agriculture",
    startTime: '6',
    startDate: "Nov 15, 2026",
    endDate: "End 1, 2026",
    totalRegistered: 8,
  },
  {
    id: "opp-8",
    title: "Opportunity Title",
    status: "PENDING",
    operationalArea: "School Nutrition",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",

    startTime: '6',
      startDate: "Nov 1, 2026",
    endDate: "End 1, 2026",
    totalRegistered: 8,
  },
  {
    id: "opp-9",
    title: "Opportunity Title",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",

    status: "COMPLETED",
    operationalArea: "Food Relief",
    startTime: '6',
    startDate: "Nov 15, 2026",
    endDate: "End 1, 2026",
    totalRegistered: 8,
  },
  {
    id: "opp-10",
    title: "Opportunity Title",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
    description:
      "This is a sample description for the opportunity. It provides an overview of the opportunity's purpose, goals, and activities.",
    status: "COMPLETED",
    operationalArea: "Eco-Agriculture",
    startTime: '6',
    startDate: "Nov 15, 2026",
    endDate: "Nov 11, 2026",
    totalRegistered: 12,
  },
];

export const activeProgrammesData: ActiveProgramme[] = [
  {
    id: "prog-1",
    title: "Youth Mentoring",
    description: "Cohort guidance, developmental community...",
    progress: 75,
    status: "COMPLETED",
    iconName: "Users",
  },
  {
    id: "prog-2",
    title: "Food Distribution",
    description:
      "Emergency food supplies, parcel delivery and nutritional ai...",
    progress: 45,
    status: "PENDING",
    iconName: "ShoppingBag",
  },
  {
    id: "prog-3",
    title: "Eco-Cleanups",
    description: "Environmental remediation, plastic reclamation and drain...",
    progress: 68,
    status: "STEADY",
    iconName: "Globe",
  },
  {
    id: "prog-4",
    title: "Resource Mobilization",
    description: "Material sorting, urban warehouse sorting, and...",
    progress: 32,
    status: "DELAYED",
    iconName: "RefreshCw",
  },
];

export const upcomingActivitiesData: UpcomingActivity[] = [
  {
    id: "act-1",
    title: "Event Support",
    date: "Jun 25",
    time: "5:00 PM",
    location: "Westhampton Hub",
    category: "Youth Mentoring",
  },
  {
    id: "act-2",
    title: "Food Distribution",
    date: "Aug 25",
    time: "8:00 PM",
    location: "Luxton Central",
    category: "Eco-Cleanups",
  },
  {
    id: "act-3",
    title: "Event Logistics",
    date: "Aug 25",
    time: "8:00 PM",
    location: "Luxton Central Gate B",
    category: "Field Outreach",
  },
  {
    id: "act-4",
    title: "Shift Coordination",
    date: "Aug 28",
    time: "9:00 AM",
    location: "Victoria Island Hub",
    category: "Eco-Cleanups",
  },
];

export const pendingApprovalsData: PendingApproval[] = [
  {
    id: "app-1",
    name: "Amara Okafor",
    initials: "AO",
    type: "Volunteer Application",
    date: "07/23/2026",
  },
  {
    id: "app-2",
    name: "Tunde Balogun",
    initials: "TB",
    type: "Shift Transfer Request",
    date: "07/25/2026",
  },
  {
    id: "app-3",
    name: "Zainab Aliyu",
    initials: "ZA",
    type: "Expense Log Verification",
    date: "07/26/2026",
  },
];

export const outstandingReportsData: OutstandingReport[] = [
  {
    id: "rep-1",
    title: "Q2 Field Impact Assessment",
    submittedDate: "07/13/2026",
    program: "Youth Mentoring",
  },
  {
    id: "rep-2",
    title: "Logistics Spoilage Incident",
    submittedDate: "07/15/2026",
    program: "Food Distribution",
  },
  {
    id: "rep-3",
    title: "Volunteer Attendance Audit",
    submittedDate: "07/18/2026",
    program: "Eco-Cleanups",
  },
];

export const unassignedResponsibilitiesData: UnassignedResponsibility[] = [
  {
    id: "resp-1",
    role: "Lead Field Coordinator",
    location: "Ramtoning • Alvan Outreach Hub",
    urgency: "High Need",
    note: "Immediate gap for Aug 25 session",
  },
  {
    id: "resp-2",
    role: "Supply Truck Driver / Logistics",
    location: "Luxton Distribution Point 4",
    urgency: "Normal",
    note: "Requires Heavy License Class B",
  },
];

export const volunteerCategoryStats: OperationalVolunteerStat[] = [
  { id: "1", label: "Supply & Logistics", shortLabel: "Supply", value: 42 },
  { id: "2", label: "Field Support", shortLabel: "Field", value: 65 },
  { id: "3", label: "Finance & Admin", shortLabel: "Finance", value: 18 },
  { id: "4", label: "Impact & Media", shortLabel: "Impact", value: 12 },
  { id: "5", label: "Training & Leadership", shortLabel: "Training", value: 8 },
];

export const pipelineTasks: PipelineTask[] = [
  {
    id: "recruit-youth-mentors",
    title: "Recruit 20 youth mentors",
    percent: 75,
    stages: [
      { label: "Screened", count: 8, width: 45, color: "bg-basket-darkgreen" },
      { label: "Vetted", count: 5, width: 20, color: "bg-basket-olive" },
      { label: "Active", count: 2, width: 10, color: "bg-emerald-400" },
    ],
  },
  {
    id: "food-bank-inventory-audit",
    title: "Food bank inventory audit",
    percent: 88,
    stages: [
      { label: "Recorded", count: 80, width: 50, color: "bg-basket-darkgreen" },
      { label: "Reconciled", count: 40, width: 25, color: "bg-basket-olive" },
      { label: "Audited", count: 20, width: 13, color: "bg-emerald-400" },
    ],
  },
  {
    id: "q3-volunteer-safety-compliance",
    title: "Q3 Volunteer Safety Compliance",
    percent: 68,
    stages: [
      { label: "Forms", count: 42, width: 40, color: "bg-basket-darkgreen" },
      { label: "Verified", count: 30, width: 28, color: "bg-basket-olive" },
    ],
  },
];

export const initialOpportunities: VolunteerOpportunity[] = [
  {
    id: "opp-1",
    title: "TFAP FOOD SORTING AND PACKING EXERCISE",
    description:
      "Join us for a volunteer food sorting and packing session for the TFAP Program. Your support will help ensure food reaches vulnerable families across our community.",
    status: "COMPLETED",
    program: "Food Relief",
    date: "Thu, Aug 6, 2026",
    time: "09:00 AM",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja (NHFB Office)",
  },
  {
    id: "opp-2",
    title:
      "Post-Implementation Beneficiary Assessment Survey Vertical Backyard Farming (TFAP)",
    description:
      "Join us on Friday, August 21st, 2026, as we conduct a Post-Implementation Beneficiary Assessment Survey for our Vertical Backyard Farming cohort.",
    status: "PENDING",
    program: "Eco-Agriculture",
    date: "Fri, Aug 21, 2026",
    time: "10:00 AM",
    location: "J.s.s Karon-Majigi Assessment Center, Federal Capital Territory",
    isInvited: true,
    invitationNote: "You have an official invitation",
  },
  {
    id: "opp-3",
    title: "TFAP FOOD SORTING AND PACKING EXERCISE (CYCLE 2)",
    description:
      "Join us for a volunteer food sorting and packing session for the TFAP Program. Support logistics, dry rations categorization, and parcel seals.",
    status: "ONGOING",
    program: "Food Relief",
    date: "Thu, Sep 17, 2026",
    time: "08:30 AM",
    location:
      "Corporate 14, Dubai International Market, behind Kaura Market, Games Village, Abuja",
  },
  {
    id: "opp-4",
    title: "GreenerBasket 2026 Annual Awareness Walk & Rally",
    description:
      "Join us on October 2026 in the vibrant Federal Capital Territory, Abuja, Nigeria as we celebrate our community impact and raise food sovereignty awareness.",
    status: "ONGOING",
    program: "Advocacy Walk",
    date: "Sat, Oct 17, 2026",
    time: "07:00 AM",
    location:
      "Eagle Square Parade Pavilion to Millennium Park Concourse, Central Area, Abuja",
  },
  {
    id: "opp-5",
    title:
      "BRAIN (Balanced Resources for Academic Instruction & Nourishing School Meals)",
    description:
      "We are inviting you to join us for our community kitchen & breakfast logistics setup across primary educational clusters in Nasarawa / FCT boundary.",
    status: "PENDING",
    program: "School Nutrition",
    date: "Mon, Nov 02, 2026",
    time: "06:45 AM",
    location: "LEA Model Primary School Central Compound, Keffi Corridor Hub",
    isInvited: true,
    invitationNote: "You have an official invitation",
  },
  {
    id: "opp-6",
    title: "Brain Program Feeding Phase at Sharing Prosperity Center",
    description:
      "Dear Greener basket Champions, thank you for supporting our scheduled School Feeding Programme at Sharing Prosperity Center. Over 1,200 student meals dispatched.",
    status: "COMPLETED",
    program: "School Nutrition",
    date: "Thu, Nov 12, 2026",
    time: "Complete",
    location: "Sharing Prosperity Community Pavilion, Gwagwalada, FCT",
    hasCertificate: true,
  },
];

export const initialApplications: VolunteerApplication[] = [
  {
    id: "app-1",
    volunteerName: "M.B. Adamu",
    avatarText: "M",
    avatarBg: "bg-sky-100 text-sky-800",
    location: "Area 8, FCT, Abuja",
    targetOpportunity: "TFAP Vertical Backyard Farming",
    applicationType: "OPEN",
    skills: ["Eco-Agriculture", "Data Collection"],
    status: "PENDING",
  },
  {
    id: "app-2",
    volunteerName: "Chioma Godfrey",
    avatarText: "C",
    avatarBg: "bg-amber-100 text-amber-800",
    location: "Abuja, FCT, Nigeria",
    targetOpportunity: "GreenerBasket Walk & Rally",
    applicationType: "INVITED",
    skills: ["Community Outreach", "Advocacy"],
    status: "PENDING",
  },
  {
    id: "app-3",
    volunteerName: "Lucky Sunday",
    avatarText: "L",
    avatarBg: "bg-rose-100 text-rose-800",
    location: "Abuja Central",
    targetOpportunity: "TFAP Food Sorting & Packing",
    applicationType: "OPEN",
    skills: ["Food Packing", "Team Lead"],
    status: "APPROVED",
  },
  {
    id: "app-4",
    volunteerName: "Godfrey Chioma",
    avatarText: "G",
    avatarBg: "bg-emerald-100 text-emerald-800",
    location: "FCT, Abuja, Nigeria",
    targetOpportunity: "BRAIN School Meals Program",
    applicationType: "OPEN",
    skills: ["School Nutrition", "Project Management"],
    status: "PENDING",
  },
  {
    id: "app-5",
    volunteerName: "M.B. Adamu",
    avatarText: "M",
    avatarBg: "bg-sky-100 text-sky-800",
    location: "Abuja, FCT, Nigeria",
    targetOpportunity: "GreenerBasket Walk & Rally",
    applicationType: "INVITED",
    skills: ["Community Outreach", "Advocacy"],
    status: "PENDING",
  },
  {
    id: "app-6",
    volunteerName: "Chioma Godfrey",
    avatarText: "C",
    avatarBg: "bg-amber-100 text-amber-800",
    location: "FCT, Abuja, Nigeria",
    targetOpportunity: "GreenerBasket Walk & Farming",
    applicationType: "OPEN",
    skills: ["School Nutrition", "Project Management"],
    status: "PENDING",
  },
];

export const initialVolunteerApplications: VolunteerApplicationRecord[] = [
  {
    id: "app-101",
    programmeTitle: "GreenerBasket 2026",
    status: "REJECTED",
    channel: "OPEN_CALL",
    location: "Lagos Central Civic Grounds",
    scheduleLabel: "Oct 14, 2025 • 08:00 – 16:00",
    submittedAt: "Oct 02, 2025",
    pathway: "Show-up Volunteer",
    coordinatorNote: "Shift slots for this venue reached full capacity prior to review.",
  },
  {
    id: "app-102",
    programmeTitle: "BRAIN School Meals Programme",
    status: "REJECTED",
    channel: "OPEN_CALL",
    location: "Garki Area 8 Hub, FCT Abuja",
    scheduleLabel: "Oct 21, 2025 • 07:30 – 13:00",
    submittedAt: "Oct 10, 2025",
    pathway: "Show-up Volunteer",
    coordinatorNote: "All morning kitchen shifts were filled for that date.",
  },
  {
    id: "app-103",
    programmeTitle: "Brain Programme – Supplementary",
    status: "REJECTED",
    channel: "OPEN_CALL",
    location: "Wuse II Community Centre, FCT Abuja",
    scheduleLabel: "Oct 28, 2025 • 09:00 – 15:00",
    submittedAt: "Oct 15, 2025",
    pathway: "Volunteer Development",
    coordinatorNote: "Cohort placement was closed before scheduling.",
  },
  {
    id: "app-104",
    programmeTitle: "BRAIN School Meals Programme",
    status: "ACCEPTED",
    channel: "DIRECT_INVITE",
    location: "Abuja Central Distribution Point",
    scheduleLabel: "Nov 04, 2025 • 08:00 – 14:00",
    submittedAt: "Oct 22, 2025",
    pathway: "Show-up Volunteer",
  },
];
