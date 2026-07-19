import Link from "next/link";
import { Users, GraduationCap, Briefcase, Bot } from "lucide-react";

const actions = [
  {
    title: "Add Student",
    href: "/students",
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Faculty",
    href: "/faculty",
    icon: GraduationCap,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Placements",
    href: "/placements",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Assistant",
    href: "/ai",
    icon: Bot,
    color: "from-orange-500 to-red-500",
  },
];

export default function QuickActions() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">
      <h2 className="text-xl font-bold mb-5">Quick Actions</h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`rounded-xl bg-gradient-to-r ${item.color} p-5 transition hover:scale-105`}
            >
              <Icon size={30} className="mb-3" />
              <p className="font-semibold">{item.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}