"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Briefcase,
  CalendarCheck,
  Bot,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Students", href: "/students", icon: Users },
  { name: "Faculty", href: "/faculty", icon: GraduationCap },
  { name: "Placements", href: "/placements", icon: Briefcase },
  { name: "Attendance", href: "/attendance", icon: CalendarCheck },
  { name: "AI Assistant", href: "/ai", icon: Bot },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">
        🎓 AI Campus
      </h1>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-blue-600"
                  : "hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <button className="mt-10 flex w-full items-center gap-3 rounded-lg bg-red-600 px-4 py-3 hover:bg-red-700">
        <LogOut size={20} />
        Logout
      </button>
    </aside>
  );
}