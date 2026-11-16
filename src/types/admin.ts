export type ActiveProgramme = {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: "Optimal" | "In Progress" | "On Schedule" | "Behind Pace";
  iconName: "Users" | "ShoppingBag" | "Globe" | "RefreshCw";
};

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