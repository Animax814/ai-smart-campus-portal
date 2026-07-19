import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Plus, Search } from "lucide-react";

const attendance = [
  {
    id: 1,
    name: "Rahul",
    department: "CSE",
    attendance: "95%",
    status: "Present",
  },
  {
    id: 2,
    name: "Anjali",
    department: "CSE",
    attendance: "91%",
    status: "Present",
  },
  {
    id: 3,
    name: "Kiran",
    department: "ISE",
    attendance: "88%",
    status: "Present",
  },
  {
    id: 4,
    name: "Priya",
    department: "ECE",
    attendance: "84%",
    status: "Absent",
  },
];

export default function AttendancePage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div className="flex items-center justify-between">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Attendance
            </h1>

            <p className="text-gray-400">
              Monitor student attendance
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white hover:scale-105 transition">
            <Plus size={18} />
            Mark Attendance
          </button>

        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">Overall Attendance</p>
            <h2 className="mt-3 text-4xl font-bold text-green-400">
              92%
            </h2>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">Present Today</p>
            <h2 className="mt-3 text-4xl font-bold text-cyan-400">
              1182
            </h2>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">Absent Today</p>
            <h2 className="mt-3 text-4xl font-bold text-red-400">
              68
            </h2>
          </div>

        </div>

        <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-xl">

          <div className="relative">

            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              placeholder="Search Student..."
              className="w-full rounded-xl bg-slate-900 py-3 pl-10 text-white outline-none"
            />

          </div>

        </div>

        <div className="overflow-x-auto rounded-2xl bg-white/10 backdrop-blur-xl">

          <table className="min-w-full">

            <thead>

              <tr className="border-b border-white/10">

                <th className="p-5 text-left">Name</th>
                <th className="p-5 text-left">Department</th>
                <th className="p-5 text-left">Attendance</th>
                <th className="p-5 text-left">Status</th>

              </tr>

            </thead>

            <tbody>

              {attendance.map((student) => (

                <tr
                  key={student.id}
                  className="border-b border-white/10 hover:bg-white/5"
                >

                  <td className="p-5 text-white">
                    {student.name}
                  </td>

                  <td className="p-5 text-gray-300">
                    {student.department}
                  </td>

                  <td className="p-5">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
                      {student.attendance}
                    </span>
                  </td>

                  <td className="p-5">

                    <span
                      className={`rounded-full px-3 py-1 ${
                        student.status === "Present"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {student.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </DashboardLayout>
  );
}