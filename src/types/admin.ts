export type ActiveProgramme = {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: ProgrammeStatus;
  iconName: "Users" | "ShoppingBag" | "Globe" | "RefreshCw";
};

export type ProgrammeStatus =
  | "ACTIVE"
  | "PENDING"
  | "STEADY"
  | "DELAYED"
  | "DRAFT"
  | "COMPLETED";

export type OperationalArea =
  | "Food Relief"
  | "Eco-Agriculture"
  | "School Nutrition";

export interface AdminOpportunity {
  id: string;
  title: string;
  status: ProgrammeStatus;
  operationalArea: OperationalArea;
  startDate: string;
  endDate: string;
  location: string;
  startTime: string;
  description: string;
  totalRegistered: number;
}

export type UpcomingActivity = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
};

export type PendingApproval = {
  id: string;
  name: string;
  initials: string;
  type: string;
  date: string;
};

export type OutstandingReport = {
  id: string;
  title: string;
  submittedDate: string;
  program: string;
};

export type UnassignedResponsibility = {
  id: string;
  role: string;
  location: string;
  urgency: "High Need" | "Normal";
  note: string;
};

export type OperationalVolunteerStat = {
  id: string;
  label: string;
  shortLabel: string;
  value: number;
};

export interface TaskStage {
  label: string;
  count: number;
  width: number;
  color: string;
}

export interface PipelineTask {
  id: string;
  title: string;
  percent: number;
  stages: TaskStage[];
}

export interface Applications {
  id: string;
  title: string;
  status: "ACCEPTED" | "PENDING";
  submitted: string;
  detail: string;
  action: string;
  actionMuted?: boolean;
}

export type RoleMode = "on-site" | "remote" | "hybrid";

export interface Volunteer {
  id: string;
  title: string;
  tag: string;
  tagTone: "green" | "sage" | "blue";
  description: string;
  location: string;
  commitment: string;
  starts: string;
  mode: RoleMode;
}

