export const dynamic = "force-dynamic";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import PlacementChart from "@/components/dashboard/PlacementChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
import WelcomeBanner from "@/components/dashboard/WelcomeBanner";
import QuickActions from "@/components/dashboard/QuickActions";
import UpcomingDrives from "@/components/dashboard/UpcomingDrives";
import PerformanceCard from "@/components/dashboard/PerformanceCard";
import TopRecruiters from "@/components/dashboard/TopRecruiters";
import CampusNews from "@/components/dashboard/CampusNews";
import { getStudentCount } from "@/lib/studentCount";

import {
  Users,
  GraduationCap,
  Briefcase,
  CalendarCheck,
} from "lucide-react";

export default async function DashboardPage() {
  const studentCount = await getStudentCount();

  return (
    <DashboardLayout>
      {/* Welcome Banner */}
      <WelcomeBanner />

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Students"
          value={studentCount.toString()}
          icon="users"
          color="bg-blue-500"
        />

        <StatCard
          title="Faculty"
          value="85"
          icon="faculty"
          color="bg-green-500"
        />

        <StatCard
          title="Placements"
          value="320"
          icon="placements"
          color="bg-purple-500"
        />

        <StatCard
          title="Attendance"
          value="92%"
          icon="attendance"
          color="bg-orange-500"
        />
      </div>

      {/* Chart + Recent Activity */}
      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PlacementChart />
        </div>

        <RecentActivity />
      </div>

      {/* Bottom Cards */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <QuickActions />

        <UpcomingDrives />

        <PerformanceCard />
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <TopRecruiters />
        <CampusNews />
      </div>
    </DashboardLayout>
  );
}