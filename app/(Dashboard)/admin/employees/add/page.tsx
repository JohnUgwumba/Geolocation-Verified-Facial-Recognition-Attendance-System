'use client';

import { UserPlus, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AddEmployeePage() {
  return (
    <div className="w-full flex flex-col gap-4 animate-drop-3">
      <div className="flex items-center justify-between border-b border-red-500/30 pb-2">
        <h2 className="text-base sm:text-lg font-bold text-red-400 font-abrilfatface flex items-center gap-2">
          <UserPlus className="w-5 h-5 text-white" /> Add New Employee
        </h2>
        <Link
          href="/admin/employees"
          className="text-xs text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
      </div>

      <form className="flex flex-col gap-3 text-xs sm:text-sm">
        <div className="flex flex-col gap-1">
          <label className="text-gray-300 font-medium">Full Name</label>
          <input
            type="text"
            placeholder="e.g. Jane Doe"
            className="bg-zinc-900 border border-red-500/40 rounded-lg px-3 py-2 text-white outline-none focus:border-red-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-300 font-medium">Email Address</label>
          <input
            type="email"
            placeholder="e.g. jane@company.com"
            className="bg-zinc-900 border border-red-500/40 rounded-lg px-3 py-2 text-white outline-none focus:border-red-500 transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-gray-300 font-medium">Assign Office</label>
          <select className="bg-zinc-900 border border-red-500/40 rounded-lg px-3 py-2 text-white outline-none focus:border-red-500 transition-colors">
            <option value="">Select Office Location</option>
            <option value="hq">HQ - Main Campus</option>
            <option value="branch-a">Branch Office A</option>
          </select>
        </div>

        <button
          type="button"
          className="mt-2 bg-red-600 hover:bg-red-500 text-white font-semibold py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(255,0,0,0.4)]"
        >
          Save Employee
        </button>
      </form>
    </div>
  );
}