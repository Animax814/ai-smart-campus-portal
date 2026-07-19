import { Building2, Trophy } from "lucide-react";

const recruiters = [
  { name: "Microsoft", hired: 52, package: "18 LPA" },
  { name: "Amazon", hired: 41, package: "16 LPA" },
  { name: "Infosys", hired: 95, package: "8 LPA" },
  { name: "TCS", hired: 110, package: "7 LPA" },
];

export default function TopRecruiters() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="text-yellow-400" />
        <h2 className="text-xl font-bold">Top Recruiters</h2>
      </div>

      <div className="space-y-4">
        {recruiters.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-xl bg-white/5 p-4"
          >
            <div className="flex items-center gap-3">
              <Building2 className="text-cyan-400" />
              <div>
                <h3>{r.name}</h3>
                <p className="text-sm text-gray-400">
                  {r.hired} Students
                </p>
              </div>
            </div>

            <span className="rounded-full bg-green-600 px-3 py-1 text-sm">
              {r.package}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}