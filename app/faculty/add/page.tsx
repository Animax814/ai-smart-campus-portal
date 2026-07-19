"use client";

import { useState } from "react";
import { addFaculty } from "@/lib/faculty";
import { useRouter } from "next/navigation";

export default function AddFaculty() {

  const router = useRouter();

  const [form,setForm]=useState({
    name:"",
    email:"",
    department:"",
    designation:"",
    phone:"",
  });

  async function handleSubmit(e:any){

    e.preventDefault();

    await addFaculty(form);

    router.push("/faculty");

    router.refresh();

  }

  return (

<div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">

<form
onSubmit={handleSubmit}
className="w-full max-w-xl rounded-xl bg-white/10 p-8 backdrop-blur-xl space-y-4"
>

<h1 className="text-3xl font-bold mb-4">
Add Faculty
</h1>

<input
placeholder="Name"
className="w-full rounded-lg p-3 bg-slate-900"
onChange={(e)=>setForm({...form,name:e.target.value})}
/>

<input
placeholder="Email"
className="w-full rounded-lg p-3 bg-slate-900"
onChange={(e)=>setForm({...form,email:e.target.value})}
/>

<input
placeholder="Department"
className="w-full rounded-lg p-3 bg-slate-900"
onChange={(e)=>setForm({...form,department:e.target.value})}
/>

<input
placeholder="Designation"
className="w-full rounded-lg p-3 bg-slate-900"
onChange={(e)=>setForm({...form,designation:e.target.value})}
/>

<input
placeholder="Phone"
className="w-full rounded-lg p-3 bg-slate-900"
onChange={(e)=>setForm({...form,phone:e.target.value})}
/>

<button
className="w-full rounded-lg bg-blue-600 p-3"
>
Save Faculty
</button>

</form>

</div>

  );
}