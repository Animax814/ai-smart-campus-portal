import { supabase } from "./supabase";

export async function getFaculty() {
  const { data, error } = await supabase
    .from("faculty")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;

  return data;
}

export async function addFaculty(faculty: {
  name: string;
  email: string;
  department: string;
  designation: string;
  phone: string;
}) {
  const { error } = await supabase
    .from("faculty")
    .insert([faculty]);

  if (error) throw error;
}

export async function deleteFaculty(id: string) {
  const { error } = await supabase
    .from("faculty")
    .delete()
    .eq("id", id);

  if (error) throw error;
}