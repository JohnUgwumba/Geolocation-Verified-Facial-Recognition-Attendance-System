'use client';

import { Trash2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function RemoveOfficePage() {
  return (
    <div className="w-full flex flex-col gap-4 animate-drop-3">
      <div className="flex items-center justify-between border-b border-red-500/30 pb-2">
        <h2 className="text-base sm:text-lg font-bold text-cyan-300 font-abrilfatface flex items-center gap-2">
          <Trash2 className="w-5 h-5 text-black" /> Remove Office Location
        </h2>
        <Link
          href="/admin/offices"
          className="text-xs text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Link>
      </div>

      <div className="flex flex-col gap-3 text-xs sm:text-sm">
        <div className="flex flex-col gap-1">
          <label className="text-gray-300 font-medium">Select Office to Remove</label>
          <select className="bg-zinc-900 border border-red-500/40 rounded-lg px-3 py-2 text-white outline-none focus:border-red-500 transition-colors">
            <option value="">Choose office location...</option>
            <option value="hq">Lagos HQ</option>
          </select>
        </div>

        <button
          type="button"
          className="mt-2 bg-cyan-300 hover:bg-cyan-200 text-black font-semibold py-2 rounded-lg transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
        >
          Confirm Removal
        </button>
      </div>
    </div>
  );
}