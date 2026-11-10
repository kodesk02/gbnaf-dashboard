import { Award, Bell, BookOpen } from "lucide-react";

import { ProgressCard, StatCard } from "@/components/shared/stat-card";
import { applications, currentUser, hoursSummary, upcomingShifts, volunteerRoles, weeklyHours } from "@/lib/data";
import { GreetingHeader } from "@/components/features/dashboard/greeting-header";
import { HoursGoalCard } from "@/components/features/dashboard/hours-goal-card";
import { EventCheckIn } from "@/components/features/dashboard/event-checkin";
import { WeeklyHoursChart } from "@/components/features/dashboard/weekly-hours-chart";
import { UpcomingShifts } from "@/components/features/dashboard/upcoming-shifts";
import { ImpactBanner } from "@/components/features/dashboard/impact-banner";
import { VolunteerRoles } from "@/components/features/dashboard/volunteer-roles";
import { ApplicationTracking } from "@/components/features/dashboard/application-tracking";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <GreetingHeader name={currentUser.firstName} chapter={currentUser.chapter} />
        <HoursGoalCard {...hoursSummary} />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          href="/hours?status=pending"
          title="Review timesheet submissions and logs"
          icon={Bell}
          iconTone="gold"
          badge="Action Required"
          value={2}
          unit="pending"
          caption="Timesheet submissions"
        />
        <StatCard
          href="/certificates"
          title="View your badges and certificates"
          icon={Award}
          iconTone="green"
          badge="Verified Status"
          value={4}
          unit="badges earned"
          caption="Certifications & honors"
        />
        <ProgressCard
          href="/opportunities/field-survey-module"
          title="Continue your training module"
          icon={BookOpen}
          progress={75}
          label="GBNAF Field Survey Module"
        />
      </div>

      {/* <EventCheckIn /> */}

      <div className="grid items-stretch gap-6 lg:grid-cols-[1.5fr_1fr]">
        <WeeklyHoursChart data={weeklyHours} />
        <div className="space-y-4">
          <UpcomingShifts shifts={upcomingShifts} />
        </div>
      </div>

      <div className="grid items-stretch gap-6 lg:grid-cols-[1.5fr_1fr]">
        <VolunteerRoles roles={volunteerRoles} />
        <ApplicationTracking applications={applications} />
      </div>
    </div>
  );
}
