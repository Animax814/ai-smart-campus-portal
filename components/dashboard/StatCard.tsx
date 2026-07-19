"use client";

import CountUp from "react-countup";
import {
  Users,
  GraduationCap,
  Briefcase,
  CalendarCheck,
} from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: "users" | "faculty" | "placements" | "attendance";
  color: string;
}

export default function StatCard({
  title,
  value,
  icon,
  color,
}: Props) {
  const icons = {
    users: Users,
    faculty: GraduationCap,
    placements: Briefcase,
    attendance: CalendarCheck,
  };

  const Icon = icons[icon];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex items-center justify-between">

        <div>
          <p className="text-gray-300">{title}</p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            <CountUp
              end={Number(value.replace("%", ""))}
              duration={2}
            />
            {value.includes("%") && "%"}
          </h2>
        </div>

        <div className={`rounded-full p-4 ${color}`}>
          <Icon size={28} className="text-white" />
        </div>

      </div>
    </div>
  );
}