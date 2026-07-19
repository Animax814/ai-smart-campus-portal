"use client";

import { useState } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Bot,
  Send,
  Sparkles,
  User,
  BarChart3,
  GraduationCap,
  Building2,
  CalendarCheck,
} from "lucide-react";

export default function AIPage() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Welcome to AI Campus Assistant.\nAsk me anything about students, faculty, placements or attendance.",
    },
  ]);

  const [input, setInput] = useState("");

  const responses: Record<string, string> = {
    placements:
      "📊 Placement Summary\n\n✅ Total Placements : 320\n🏢 Companies : Microsoft, Amazon, Infosys, TCS\n💰 Highest Package : 18 LPA\n📈 Placement Rate : 87%",

    students:
      "👨‍🎓 Student Summary\n\nTotal Students : 1250\nCSE : 420\nISE : 300\nECE : 280\nEEE : 250",

    faculty:
      "👨‍🏫 Faculty Information\n\nTotal Faculty : 85\nProfessors : 25\nAssociate Professors : 30\nAssistant Professors : 30",

    attendance:
      "📅 Attendance Report\n\nToday's Attendance : 94.6%\nPresent : 1182\nAbsent : 68",

    companies:
      "🏢 Recruiting Companies\n\nMicrosoft\nAmazon\nGoogle\nInfosys\nAccenture\nTCS\nWipro",
  };

  function ask(topic: keyof typeof responses) {
    setMessages((prev) => [
      ...prev,
      { role: "user", text: topic },
      { role: "assistant", text: responses[topic] },
    ]);
  }

  function sendMessage() {
    if (!input.trim()) return;

    let reply =
      "🤖 I couldn't understand that. Try using the quick action buttons above.";

    const text = input.toLowerCase();

    if (text.includes("placement")) reply = responses.placements;
    else if (text.includes("student")) reply = responses.students;
    else if (text.includes("faculty")) reply = responses.faculty;
    else if (text.includes("attendance")) reply = responses.attendance;
    else if (text.includes("company")) reply = responses.companies;

    setMessages((prev) => [
      ...prev,
      { role: "user", text: input },
      { role: "assistant", text: reply },
    ]);

    setInput("");
  }

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex items-center gap-3">
          <Bot className="text-cyan-400" size={42} />
          <div>
            <h1 className="text-4xl font-bold">
              AI Campus Assistant
            </h1>
            <p className="text-gray-400">
              Your intelligent campus companion
            </p>
          </div>
        </div>

        {/* Quick Buttons */}

        <div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-5">

          <button
            onClick={() => ask("placements")}
            className="rounded-xl bg-blue-600 p-4 hover:scale-105 transition"
          >
            <BarChart3 className="mx-auto mb-2" />
            Placements
          </button>

          <button
            onClick={() => ask("students")}
            className="rounded-xl bg-green-600 p-4 hover:scale-105 transition"
          >
            <GraduationCap className="mx-auto mb-2" />
            Students
          </button>

          <button
            onClick={() => ask("faculty")}
            className="rounded-xl bg-purple-600 p-4 hover:scale-105 transition"
          >
            <User className="mx-auto mb-2" />
            Faculty
          </button>

          <button
            onClick={() => ask("companies")}
            className="rounded-xl bg-orange-600 p-4 hover:scale-105 transition"
          >
            <Building2 className="mx-auto mb-2" />
            Companies
          </button>

          <button
            onClick={() => ask("attendance")}
            className="rounded-xl bg-pink-600 p-4 hover:scale-105 transition"
          >
            <CalendarCheck className="mx-auto mb-2" />
            Attendance
          </button>

        </div>

        {/* Chat */}

        <div className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl">

          <div className="h-[520px] overflow-y-auto space-y-5 p-6">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xl rounded-2xl p-4 whitespace-pre-line ${
                    msg.role === "assistant"
                      ? "bg-blue-600"
                      : "bg-slate-700"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="flex gap-2">
                      <Sparkles size={18} />
                      <span>{msg.text}</span>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </div>

            ))}

          </div>

          <div className="flex gap-3 border-t border-white/10 p-5">

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about placements, students..."
              className="flex-1 rounded-xl border border-white/10 bg-slate-900 px-4 py-3 outline-none"
            />

            <button
              onClick={sendMessage}
              className="rounded-xl bg-cyan-500 px-6 hover:bg-cyan-600"
            >
              <Send />
            </button>

          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}