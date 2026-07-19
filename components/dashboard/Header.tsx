"use client";

import {
  Bell,
  Search,
  UserCircle,
  CalendarDays,
  Sun,
} from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">

      <div className="flex items-center justify-between px-8 py-5">

        {/* Left */}

        <div>
          <h1 className="text-3xl font-bold text-white">
            Dashboard
          </h1>

          <div className="mt-2 flex items-center gap-2 text-gray-400">
            <CalendarDays size={16} />
            <span>{today}</span>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="relative hidden lg:block">

            <Search
              size={18}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              placeholder="Search..."
              className="w-72 rounded-xl border border-white/10 bg-white/10 py-3 pl-10 pr-4 text-white placeholder:text-gray-400 outline-none"
            />

          </div>

          {/* Theme */}

          <button className="rounded-xl bg-white/10 p-3 transition hover:bg-white/20">
            <Sun size={20} className="text-yellow-400" />
          </button>

          {/* Notification */}

          <button className="relative rounded-xl bg-white/10 p-3 transition hover:bg-white/20">

            <Bell size={20} className="text-white" />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>

          </button>

          {/* User */}

          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-2">

            <UserCircle size={38} className="text-cyan-400" />

            <div className="hidden md:block">

              <h3 className="text-sm font-semibold text-white">
                Admin
              </h3>

              <p className="text-xs text-gray-400">
                AI Smart Campus
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}