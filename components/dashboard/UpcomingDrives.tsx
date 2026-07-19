import { CalendarDays, Building2 } from "lucide-react";

const drives = [
  {
    company: "Microsoft",
    date: "25 Jul",
    package: "18 LPA",
  },
  {
    company: "Amazon",
    date: "29 Jul",
    package: "16 LPA",
  },
  {
    company: "Infosys",
    date: "2 Aug",
    package: "8 LPA",
  },
];

export default function UpcomingDrives() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">
      <h2 className="text-xl font-bold mb-5">
        Upcoming Drives
      </h2>

      <div className="space-y-4">
        {drives.map((drive) => (
          <div
            key={drive.company}
            className="rounded-xl bg-white/5 p-4 flex justify-between items-center"
          >
            <div>
              <div className="flex items-center gap-2">
                <Building2 size={18} />
                <h3 className="font-semibold">{drive.company}</h3>
              </div>

              <div className="text-sm text-gray-300 mt-2 flex items-center gap-2">
                <CalendarDays size={14} />
                {drive.date}
              </div>
            </div>

            <span className="rounded-full bg-blue-500 px-3 py-1 text-sm">
              {drive.package}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}