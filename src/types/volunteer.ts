export type OpportunityStatus = "COMPLETED" | "Pending" | "Ongoing";

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