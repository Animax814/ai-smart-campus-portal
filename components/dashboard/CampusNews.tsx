import { Newspaper } from "lucide-react";

const news = [
  "Microsoft Drive scheduled on 25 July",
  "Hackathon registrations open",
  "Semester results published",
  "Campus recruitment reaches 92%",
];

export default function CampusNews() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6">
      <div className="flex items-center gap-2 mb-5">
        <Newspaper className="text-blue-400" />
        <h2 className="text-xl font-bold">Campus News</h2>
      </div>

      <div className="space-y-3">
        {news.map((item, i) => (
          <div
            key={i}
            className="rounded-lg bg-white/5 p-3 hover:bg-white/10"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}