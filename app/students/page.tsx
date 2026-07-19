import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Link from "next/link";
import { getStudents } from "@/lib/students";
import { Plus, Search } from "lucide-react";

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Students
            </h1>

            <p className="mt-1 text-gray-400">
              Manage all registered students
            </p>
          </div>

          <Link
            href="/students/add"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
          >
            <Plus size={18} />
            Add Student
          </Link>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">

          <div className="rounded-2xl border border-blue-500/30 bg-white/10 p-6 backdrop-blur-xl">
            <h3 className="text-gray-400">Total Students</h3>
            <h1 className="mt-2 text-4xl font-bold text-white">
              {students.length}
            </h1>
            <p className="mt-2 text-green-400">
              +12 this week
            </p>
          </div>

          <div className="rounded-2xl border border-purple-500/30 bg-white/10 p-6 backdrop-blur-xl">
            <h3 className="text-gray-400">Departments</h3>
            <h1 className="mt-2 text-4xl font-bold text-white">
              8
            </h1>
            <p className="mt-2 text-gray-400">
              Active Departments
            </p>
          </div>

          <div className="rounded-2xl border border-cyan-500/30 bg-white/10 p-6 backdrop-blur-xl">
            <h3 className="text-gray-400">Average Semester</h3>
            <h1 className="mt-2 text-4xl font-bold text-white">
              6
            </h1>
            <p className="mt-2 text-gray-400">
              Current Average
            </p>
          </div>

          <div className="rounded-2xl border border-orange-500/30 bg-white/10 p-6 backdrop-blur-xl">
            <h3 className="text-gray-400">Active Students</h3>
            <h1 className="mt-2 text-4xl font-bold text-white">
              {students.length}
            </h1>
            <p className="mt-2 text-green-400">
              100% Active
            </p>
          </div>

        </div>

        {/* Search */}

        <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl">

          <div className="relative">

            <Search
              className="absolute left-4 top-3 text-gray-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Search students..."
              className="w-full rounded-xl border border-white/10 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none placeholder:text-gray-400"
            />

          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl">

          <table className="min-w-full">

            <thead>

              <tr className="border-b border-white/10 text-left">

                <th className="p-5 text-gray-300">USN</th>

                <th className="p-5 text-gray-300">Name</th>

                <th className="p-5 text-gray-300">Email</th>

                <th className="p-5 text-gray-300">Department</th>

                <th className="p-5 text-gray-300">Semester</th>

                <th className="p-5 text-center text-gray-300">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {students.map((student) => (

                <tr
                  key={student.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >

                  <td className="p-5 text-gray-200">
                    {student.usn}
                  </td>

                  <td className="p-5">

                    <Link
                      href={`/students/${student.id}`}
                      className="font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      {student.name}
                    </Link>

                  </td>

                  <td className="p-5 text-gray-300">
                    {student.email}
                  </td>

                  <td className="p-5">

                    <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-cyan-300">
                      {student.department}
                    </span>

                  </td>

                  <td className="p-5">

                    <span className="rounded-lg bg-blue-600/30 px-3 py-1 text-blue-300">
                      {student.semester}
                    </span>

                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-3">

                      <button className="rounded-lg border border-yellow-500 bg-yellow-500/20 px-4 py-2 text-yellow-400 transition hover:bg-yellow-500 hover:text-white">
                        Edit
                      </button>

                      <button className="rounded-lg border border-red-500 bg-red-500/20 px-4 py-2 text-red-400 transition hover:bg-red-500 hover:text-white">
                        Delete
                      </button>

                    </div>

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