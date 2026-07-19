import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function StudentDetails({ params }: Props) {
  const { id } = await params;

  const { data: student, error } = await supabase
    .from("students")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !student) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Student Details</h1>

      <div className="space-y-4 rounded-xl border bg-white p-6 shadow">
        <p><strong>USN:</strong> {student.usn}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Department:</strong> {student.department}</p>
        <p><strong>Semester:</strong> {student.semester}</p>
      </div>
    </div>
  );
}