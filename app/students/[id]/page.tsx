import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { getStudentById } from "@/lib/students";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  GraduationCap,
  Hash,
  User,
  BookOpen,
  Edit,
  Trash2,
  Download,
} from "lucide-react";

export default async function StudentDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const student = await getStudentById(id);

  if (!student) {
    return (
      <DashboardLayout>
        <div className="flex h-[70vh] items-center justify-center">
          <h1 className="text-3xl font-bold text-white">
            Student Not Found
          </h1>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Back */}

        <Link
          href="/students"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
        >
          <ArrowLeft size={18} />
          Back to Students
        </Link>

        {/* Profile */}

        <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl md:flex-row">

          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-5xl font-bold text-white shadow-xl">
            {student.name.charAt(0)}
          </div>

          <div className="flex-1">

            <h1 className="text-5xl font-bold text-white">
              {student.name}
            </h1>

            <p className="mt-2 text-lg text-gray-400">
              {student.department} • Semester {student.semester}
            </p>

            <span className="mt-4 inline-block rounded-full bg-green-600 px-4 py-1 text-sm font-semibold text-white">
              Active Student
            </span>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-cyan-500/20 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">
              Attendance
            </p>

            <h2 className="mt-3 text-4xl font-bold text-green-400">
              95%
            </h2>
          </div>

          <div className="rounded-2xl border border-purple-500/20 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">
              CGPA
            </p>

            <h2 className="mt-3 text-4xl font-bold text-cyan-400">
              8.9
            </h2>
          </div>

          <div className="rounded-2xl border border-yellow-500/20 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-gray-400">
              Placement
            </p>

            <h2 className="mt-3 text-4xl font-bold text-yellow-400">
              Eligible
            </h2>
          </div>

        </div>

        {/* Details */}

        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-xl bg-slate-900/50 p-5 transition hover:scale-[1.02]">
              <div className="mb-2 flex items-center gap-2 text-cyan-400">
                <Hash size={18} />
                USN
              </div>

              <p className="text-xl font-semibold text-white">
                {student.usn}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/50 p-5 transition hover:scale-[1.02]">
              <div className="mb-2 flex items-center gap-2 text-cyan-400">
                <User size={18} />
                Name
              </div>

              <p className="text-xl font-semibold text-white">
                {student.name}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/50 p-5 transition hover:scale-[1.02]">
              <div className="mb-2 flex items-center gap-2 text-cyan-400">
                <Mail size={18} />
                Email
              </div>

              <p className="text-white">
                {student.email}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/50 p-5 transition hover:scale-[1.02]">
              <div className="mb-2 flex items-center gap-2 text-cyan-400">
                <GraduationCap size={18} />
                Department
              </div>

              <p className="text-white">
                {student.department}
              </p>
            </div>

            <div className="rounded-xl bg-slate-900/50 p-5 transition hover:scale-[1.02]">
              <div className="mb-2 flex items-center gap-2 text-cyan-400">
                <BookOpen size={18} />
                Semester
              </div>

              <p className="text-white">
                {student.semester}
              </p>
            </div>

          </div>

        </div>

        {/* Action Buttons */}

        <div className="flex flex-wrap gap-4">

          <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            <Edit size={18} />
            Edit Student
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
            <Trash2 size={18} />
            Delete
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700">
            <Download size={18} />
            Download Report
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}