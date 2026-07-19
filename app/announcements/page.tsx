import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Bell, Plus, Calendar } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Microsoft Placement Drive",
    description: "Registration closes tomorrow.",
    date: "20 Jul 2026",
    category: "Placement",
  },
  {
    id: 2,
    title: "Internal Examination",
    description: "Exam starts from 28 July.",
    date: "25 Jul 2026",
    category: "Exam",
  },
  {
    id: 3,
    title: "AI Workshop",
    description: "Free workshop on Generative AI.",
    date: "30 Jul 2026",
    category: "Workshop",
  },
];

export default function AnnouncementPage() {
  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-3xl font-bold">
            Announcements
          </h1>

          <p className="text-gray-400">
            Campus notifications and events
          </p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700">
          <Plus size={18} />
          New Announcement
        </button>

      </div>

      <div className="space-y-6">

        {announcements.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Bell className="text-blue-500" />

                <div>
                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>

              </div>

              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm">
                {item.category}
              </span>

            </div>

            <div className="mt-5 flex items-center gap-2 text-gray-400">
              <Calendar size={16} />
              {item.date}
            </div>

          </div>
        ))}

      </div>
    </DashboardLayout>
  );
}