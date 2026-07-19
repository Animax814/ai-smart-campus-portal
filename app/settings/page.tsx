import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Save,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Settings
          </h1>

          <p className="text-gray-400">
            Manage your AI Smart Campus Portal
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <User className="text-cyan-400" />
              <h2 className="text-xl font-semibold text-white">
                Profile
              </h2>
            </div>

            <input
              defaultValue="Admin"
              className="mb-3 w-full rounded-lg bg-slate-900 p-3 text-white"
            />

            <input
              defaultValue="admin@campus.com"
              className="w-full rounded-lg bg-slate-900 p-3 text-white"
            />
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <Bell className="text-yellow-400" />
              <h2 className="text-xl font-semibold text-white">
                Notifications
              </h2>
            </div>

            <p className="text-gray-400">
              Email Notifications
            </p>

            <p className="mt-2 text-gray-400">
              Push Notifications
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <Shield className="text-green-400" />
              <h2 className="text-xl font-semibold text-white">
                Security
              </h2>
            </div>

            <p className="text-gray-400">
              Two-Factor Authentication
            </p>

            <p className="mt-2 text-gray-400">
              Change Password
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-3">
              <Database className="text-purple-400" />
              <h2 className="text-xl font-semibold text-white">
                Database
              </h2>
            </div>

            <p className="text-gray-400">
              Connected to Supabase
            </p>
          </div>

        </div>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-xl">

          <div className="mb-4 flex items-center gap-3">
            <Palette className="text-pink-400" />
            <h2 className="text-xl font-semibold text-white">
              Appearance
            </h2>
          </div>

          <div className="flex gap-4">

            <button className="rounded-lg bg-blue-600 px-5 py-3 text-white">
              Dark Theme
            </button>

            <button className="rounded-lg bg-slate-700 px-5 py-3 text-white">
              Light Theme
            </button>

          </div>

        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-white hover:scale-105 transition">
          <Save size={18} />
          Save Settings
        </button>

      </div>
    </DashboardLayout>
  );
}