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
  Bell,
  Building2,
  FileBarChart,
  Settings,
  LogOut,
  ChevronRight,
  UserCircle,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Students",
    href: "/students",
    icon: Users,
  },
  {
    name: "Faculty",
    href: "/faculty",
    icon: GraduationCap,
  },
  {
    name: "Placements",
    href: "/placements",
    icon: Briefcase,
    badge: "3",
  },
  {
  name: "Companies",
  href: "/companies",
  icon: Building2,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: CalendarCheck,
  },
   {
  name: "Announcements",
  href: "/announcements",
  icon: Bell,
  },
  {
  name: "Reports",
  href: "/reports",
  icon: FileBarChart,
  },
  {
    name: "AI Assistant",
    href: "/ai",
    icon: Bot,
    badge: "NEW",
  },
 
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex min-h-screen w-72 flex-col border-r border-white/10 bg-slate-950/90 backdrop-blur-xl">

      {/* Logo */}
      <div className="border-b border-white/10 p-6">
        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 shadow-lg">
            🎓
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              AI Campus
            </h1>

            <p className="text-xs text-gray-400">
              Smart Portal v1.0
            </p>
          </div>

        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-gray-500">
          Main Menu
        </p>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <span>{item.name}</span>
                </div>

                <div className="flex items-center gap-2">

                  {item.badge && (
                    <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold text-white">
                      {item.badge}
                    </span>
                  )}

                  {active && <ChevronRight size={18} />}

                </div>
              </Link>
            );
          })}
        </nav>

        {/* AI Card */}

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4 text-white shadow-lg">

          <div className="mb-3 flex items-center gap-2">
            <Sparkles size={20} />
            <h3 className="font-semibold">
              AI Powered
            </h3>
          </div>

          <p className="text-sm text-blue-100">
            Ask the AI Assistant about placements, students,
            attendance, and more.
          </p>

          <Link
            href="/ai"
            className="mt-4 inline-block rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Open AI Assistant
          </Link>

        </div>

      </div>

      {/* User */}

      <div className="border-t border-white/10 p-5">

        <div className="flex items-center gap-3">

          <div className="relative">

            <UserCircle size={46} className="text-white" />

            <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-slate-900 bg-green-500"></span>

          </div>

          <div>
            <h3 className="font-semibold text-white">
              Admin
            </h3>

            <p className="text-sm text-gray-400">
              Campus Administrator
            </p>
          </div>

        </div>

        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 py-3 font-medium transition hover:bg-red-700">
          <LogOut size={18} />
          Logout
        </button>

        <p className="mt-4 text-center text-xs text-gray-500">
          © 2026 AI Smart Campus Portal
        </p>

      </div>

    </aside>
  );
}