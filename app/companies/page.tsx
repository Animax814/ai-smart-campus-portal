import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Plus, Search, Building2, Globe, MapPin } from "lucide-react";

const companies = [
  {
    id: 1,
    name: "Microsoft",
    location: "Bangalore",
    package: "18 LPA",
    website: "microsoft.com",
  },
  {
    id: 2,
    name: "Amazon",
    location: "Hyderabad",
    package: "22 LPA",
    website: "amazon.jobs",
  },
  {
    id: 3,
    name: "Google",
    location: "Bangalore",
    package: "35 LPA",
    website: "careers.google.com",
  },
  {
    id: 4,
    name: "Infosys",
    location: "Mysore",
    package: "8 LPA",
    website: "infosys.com",
  },
];

export default function CompaniesPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Header */}

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Companies
            </h1>

            <p className="text-gray-400">
              Manage recruiting companies
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-white transition hover:scale-105">
            <Plus size={18} />
            Add Company
          </button>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">Total Companies</p>
            <h2 className="mt-2 text-4xl font-bold text-white">
              {companies.length}
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">Highest Package</p>
            <h2 className="mt-2 text-4xl font-bold text-green-400">
              35 LPA
            </h2>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">Hiring Status</p>
            <h2 className="mt-2 text-4xl font-bold text-cyan-400">
              Active
            </h2>
          </div>

        </div>

        {/* Search */}

        <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl">

          <div className="relative">

            <Search
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />

            <input
              placeholder="Search companies..."
              className="w-full rounded-lg border border-white/10 bg-slate-900 py-3 pl-10 text-white outline-none"
            />

          </div>

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">

          <table className="min-w-full">

            <thead>

              <tr className="border-b border-white/10">

                <th className="p-5 text-left text-gray-300">Company</th>
                <th className="p-5 text-left text-gray-300">Location</th>
                <th className="p-5 text-left text-gray-300">Package</th>
                <th className="p-5 text-left text-gray-300">Website</th>
                <th className="p-5 text-center text-gray-300">Actions</th>

              </tr>

            </thead>

            <tbody>

              {companies.map((company) => (

                <tr
                  key={company.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >

                  <td className="p-5">
                    <div className="flex items-center gap-3">

                      <Building2 className="text-cyan-400" />

                      <span className="font-semibold text-white">
                        {company.name}
                      </span>

                    </div>
                  </td>

                  <td className="p-5 text-gray-300">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {company.location}
                    </div>
                  </td>

                  <td className="p-5">
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-green-400">
                      {company.package}
                    </span>
                  </td>

                  <td className="p-5 text-cyan-400">
                    <div className="flex items-center gap-2">
                      <Globe size={16} />
                      {company.website}
                    </div>
                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-3">

                      <button className="rounded-lg bg-yellow-500 px-4 py-2 text-white hover:bg-yellow-600">
                        Edit
                      </button>

                      <button className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
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