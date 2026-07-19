export default function PerformanceCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white shadow-xl">
      <h2 className="text-xl font-bold">
        Placement Performance
      </h2>

      <div className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-5xl font-bold">
            92%
          </p>

          <p className="mt-2">
            Overall Placement Rate
          </p>
        </div>

        <div className="text-right">
          <p>▲ 8%</p>
          <p className="text-sm opacity-80">
            Better than last year
          </p>
        </div>
      </div>
    </div>
  );
}