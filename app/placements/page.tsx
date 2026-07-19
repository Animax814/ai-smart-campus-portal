import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Plus, Search, Building2, CalendarDays } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Microsoft",
    package: "18 LPA",
    students: 120,
    date: "25 Jul 2026",
    status: "Upcoming",
  },
  {
    id: 2,
    name: "Amazon",
    package: "16 LPA",
    students: 95,
    date: "29 Jul 2026",
    status: "Open",
  },
  {
    id: 3,
    name: "Infosys",
    package: "8 LPA",
    students: 220,
    date: "5 Aug 2026",
    status: "Completed",
  },
];

export default function PlacementPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Placement Management
          </h1>

          <p className="text-gray-400">
            Campus recruitment drives
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700">
          <Plus size={18}/>
          Add Company
        </button>

      </div>

      {/* Search */}

      <div className="mb-6 rounded-xl bg-white/10 p-4 backdrop-blur-xl">

        <div className="relative">

          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search Company..."
            className="w-full rounded-lg border border-white/10 bg-slate-900 py-3 pl-10"
          />

        </div>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {companies.map((company)=>(
          <div
            key={company.id}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:scale-105"
          >

            <div className="flex items-center gap-3">

              <Building2 className="text-blue-400"/>

              <h2 className="text-xl font-bold">
                {company.name}
              </h2>

            </div>

            <div className="mt-5 space-y-3">

              <p>
                💰 Package :
                <span className="font-semibold">
                  {" "}
                  {company.package}
                </span>
              </p>

              <p>
                👨‍🎓 Eligible :
                <span className="font-semibold">
                  {" "}
                  {company.students}
                </span>
              </p>

              <p className="flex items-center gap-2">

                <CalendarDays size={16}/>

                {company.date}

              </p>

              <span className="rounded-full bg-green-600 px-3 py-1 text-sm">
                {company.status}
              </span>

            </div>

            <div className="mt-6 flex gap-2">

              <button className="flex-1 rounded-lg bg-blue-600 py-2">
                View
              </button>

              <button className="flex-1 rounded-lg bg-green-600 py-2">
                Students
              </button>

            </div>

          </div>
        ))}

      </div>

    </DashboardLayout>
  );
}