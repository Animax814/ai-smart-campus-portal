import {
  User,
  Building2,
  Bell,
  GraduationCap,
  Clock,
} from "lucide-react";

const activities = [
  {
    icon: User,
    color: "bg-blue-500",
    title: "John applied for Microsoft",
    time: "2 mins ago",
  },
  {
    icon: Building2,
    color: "bg-purple-500",
    title: "Amazon Drive Added",
    time: "15 mins ago",
  },
  {
    icon: GraduationCap,
    color: "bg-green-500",
    title: "Faculty Registered",
    time: "30 mins ago",
  },
  {
    icon: Bell,
    color: "bg-orange-500",
    title: "Attendance Updated",
    time: "1 hour ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl">

      <h2 className="mb-5 text-xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-4">

        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-4 rounded-xl bg-white/5 p-4 hover:bg-white/10"
            >
              <div className={`rounded-full p-3 ${item.color}`}>
                <Icon size={18}/>
              </div>

              <div className="flex-1">
                <p>{item.title}</p>

                <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                  <Clock size={12}/>
                  {item.time}
                </div>
              </div>
            </div>
          );
        })}

      </div>

    </div>
  );
}