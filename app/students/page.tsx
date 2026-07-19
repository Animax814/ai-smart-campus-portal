import Link from "next/link";
import { getStudents } from "@/lib/students";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default async function StudentsPage() {
  const students = await getStudents();

  return (
    <div className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Students</h1>

        <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
          + Add Student
        </button>
      </div>

      <div className="rounded-xl border bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>USN</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Semester</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.usn}</TableCell>

                <TableCell className="font-medium">
                  <Link
                    href={`/students/${student.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    {student.name}
                  </Link>
                </TableCell>

                <TableCell>{student.email}</TableCell>
                <TableCell>{student.department}</TableCell>
                <TableCell>{student.semester}</TableCell>

                <TableCell>
                  <div className="flex gap-2">
                    <button className="rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-600">
                      Edit
                    </button>

                    <button className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600">
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}