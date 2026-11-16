import { ActiveProgrammes } from "@/components/features/admin/adminDashboard/active-programmes";
import { ContributionStats } from "@/components/features/admin/adminDashboard/contribution-stats";
import { OutstandingReportsSection } from "@/components/features/admin/adminDashboard/outstanding-reports-section";
import { PendingApprovalsSection } from "@/components/features/admin/adminDashboard/pending-approvals-section";
import { TaskProgressSection } from "@/components/features/admin/adminDashboard/task-progress-section";
import { UnassignedResponsibilitiesSection } from "@/components/features/admin/adminDashboard/unassigned-responsibilities-section";
import { UpcomingActivitiesSection } from "@/components/features/admin/adminDashboard/upcoming-activities-section";
import { HeaderSection } from "@/components/layout/HeadSection";
import {
  activeProgrammesData,
  outstandingReportsData,
  pendingApprovalsData,
  unassignedResponsibilitiesData,
  upcomingActivitiesData,
} from "@/lib/data";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <HeaderSection
          title="Organization Overview"
          subtitle="This is the organization's dashboard where you can manage programmes, and oversee various activities."
        />
      </div>

      <ActiveProgrammes programmes={activeProgrammesData} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ContributionStats />
        <UpcomingActivitiesSection activities={upcomingActivitiesData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TaskProgressSection />
        <PendingApprovalsSection approvals={pendingApprovalsData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <OutstandingReportsSection reports={outstandingReportsData} />
        <UnassignedResponsibilitiesSection
          responsibilities={unassignedResponsibilitiesData}
        />
      </div>
    </div>
  );
}
