export const dynamic = "force-dynamic";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Link from "next/link";
import { Plus, Search } from "lucide-react";
import { getFaculty } from "@/lib/faculty";

export default async function FacultyPage() {
  const faculty = await getFaculty();

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Faculty</h1>
          <p className="text-gray-300">
            Manage faculty members
          </p>
        </div>

        <Link
          href="/faculty/add"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Faculty
        </Link>
      </div>

      {/* Search */}
      <div className="mb-6 rounded-xl bg-white/10 p-4 backdrop-blur-xl">
        <div className="relative">
          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Search Faculty..."
            className="w-full rounded-lg border border-white/10 bg-slate-900 py-3 pl-10 pr-4"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-xl">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Designation</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {faculty.map((item) => (
              <tr
                key={item.id}
                className="border-t border-white/10 hover:bg-white/5"
              >
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.department}</td>
                <td className="p-4">{item.designation}</td>
                <td className="p-4">{item.email}</td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button className="rounded bg-green-600 px-3 py-1 hover:bg-green-700">
                      Edit
                    </button>

                    <button className="rounded bg-red-600 px-3 py-1 hover:bg-red-700">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}