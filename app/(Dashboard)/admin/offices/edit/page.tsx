'use client';

import { Edit3, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EditOfficePage() {
  return (
    <div className="w-full flex flex-col gap-4 animate-drop-3">
      <div className="flex items-center justify-between border-b border-red-500/30 pb-2">
        <h2 className="text-base sm:text-lg font-bold text-white font-abrilfatface flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-gray-900" /> Edit Office Location
        </h2>
        <Link
          href="/admin/offices"
          className="text-xs text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
      </div>

      <form className="flex flex-col gap-3 text-xs sm:text-sm">
        <div className="flex flex-col gap-1">
          <label className="text-gray-300 font-medium">Select Office</label>
          <select className="bg-zinc-900 border border-red-500/40 rounded-lg px-3 py-2 text-white outline-none focus:border-red-500 transition-colors">
            <option value="">Choose office to edit...</option>
            <option value="hq">Lagos HQ</option>
          </select>
        </div>

        <button
          type="button"
          className="mt-2 bg-white hover:bg-gray-100 text-black font-semibold py-2 rounded-lg transition-all"
        >
          Update Office Details
        </button>
      </form>
    </div>
  );
}