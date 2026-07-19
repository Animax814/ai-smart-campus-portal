import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import PlacementChart from "@/components/dashboard/PlacementChart";
import RecentActivity from "@/components/dashboard/RecentActivity";
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Students"
          value={studentCount.toString()}
          icon={Users}
          color="bg-blue-500"
        />

        <StatCard
          title="Faculty"
          value="85"
          icon={GraduationCap}
          color="bg-green-500"
        />

        <StatCard
          title="Placements"
          value="320"
          icon={Briefcase}
          color="bg-purple-500"
        />

        <StatCard
          title="Attendance"
          value="92%"
          icon={CalendarCheck}
          color="bg-orange-500"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PlacementChart />
        </div>

        <div>
          <RecentActivity />
        </div>
      </div>
    </DashboardLayout>
  );
}