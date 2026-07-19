export default function WelcomeBanner() {
  return (
    <div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 p-8 text-white shadow-2xl">

      <h1 className="text-4xl font-bold">
        Welcome Back 👋
      </h1>

      <p className="mt-2 text-lg opacity-90">
        AI Smart Campus Portal Dashboard
      </p>

      <div className="mt-6 flex gap-4">
        <div className="rounded-xl bg-white/20 px-4 py-2">
          🎓 12 New Students
        </div>

        <div className="rounded-xl bg-white/20 px-4 py-2">
          💼 Microsoft Drive Tomorrow
        </div>

        <div className="rounded-xl bg-white/20 px-4 py-2">
          📈 Placement Rate 92%
        </div>
      </div>

    </div>
  );
}