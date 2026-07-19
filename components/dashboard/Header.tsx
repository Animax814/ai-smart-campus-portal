"use client";

import { Bell, Search, UserCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-gray-500">
          Welcome back to AI Smart Campus Portal
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search..."
            className="rounded-lg border py-2 pl-10 pr-4"
          />
        </div>

        <Bell className="cursor-pointer" />

        <UserCircle size={34} className="cursor-pointer" />
      </div>
    </header>
  );
}