import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  FileBarChart,
  Download,
  Users,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const reports = [
  {
    title: "Student Report",
    description: "Registered students by department",
    icon: Users,
  },
  {
    title: "Faculty Report",
    description: "Faculty department statistics",
    icon: GraduationCap,
  },
  {
    title: "Placement Report",
    description: "Placement summary and company statistics",
    icon: Briefcase,
  },
];

export default function ReportsPage() {
  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center gap-3">
        <FileBarChart className="text-blue-500" size={36} />
        <div>
          <h1 className="text-3xl font-bold">
            Reports & Analytics
          </h1>
          <p className="text-gray-400">
            Generate and download reports
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((report) => {
          const Icon = report.icon;

          return (
            <div
              key={report.title}
              className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
            >
              <Icon
                size={42}
                className="mb-4 text-blue-500"
              />

              <h2 className="text-xl font-bold">
                {report.title}
              </h2>

              <p className="mt-2 text-gray-400">
                {report.description}
              </p>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 hover:bg-blue-700">
                <Download size={18} />
                Download Report
              </button>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
}