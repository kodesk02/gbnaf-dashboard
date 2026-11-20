export type OpportunityStatus = "COMPLETED" | "PENDING" | "ONGOING";

export type ProgramTag =
  | "Food Relief"
  | "Eco-Agriculture"
  | "Advocacy Walk"
  | "School Nutrition";

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  status: OpportunityStatus;
  program: ProgramTag;
  date: string;
  time: string;
  location: string;
  isInvited?: boolean;
  invitationNote?: string;
  isRegistered?: boolean;
  championsLogged?: number;
  shiftHours?: number;
  hasCertificate?: boolean;
}

export type VolunteerApplicationStatus = "PENDING" | "ACCEPTED" | "REJECTED";
export type VolunteerApplicationChannel = "OPEN_CALL" | "DIRECT_INVITE";
export type ApplicationFilterTab = "ALL" | VolunteerApplicationStatus;

export interface VolunteerApplicationRecord {
  id: string;
  programmeTitle: string;
  status: VolunteerApplicationStatus;
  channel: VolunteerApplicationChannel;
  location: string;
  scheduleLabel: string;
  submittedAt: string;
  pathway: "Show-up Volunteer" | "Volunteer Development";
  coordinatorNote?: string;
}

export type ApplicationStatus = "PENDING" | "APPROVED" | "DECLINED";

export type ApplicationType = "OPEN" | "INVITED";

export interface VolunteerApplication {
  id: string;
  volunteerName: string;
  avatarText: string;
  avatarBg: string;
  location: string;
  targetOpportunity: string;
  applicationType: ApplicationType;
  skills: string[];
  status: ApplicationStatus;
}
