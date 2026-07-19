export default function RecentActivity() {
  const activities = [
    "John applied for TCS",
    "Microsoft placement drive added",
    "Attendance updated",
    "New faculty registered",
    "Resume uploaded",
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Recent Activities</h2>

      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="rounded-lg border p-3 hover:bg-gray-50"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
}