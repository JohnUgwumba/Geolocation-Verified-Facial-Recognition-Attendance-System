'use client';

import { UserX, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AbsentTodayPage() {
  return (
    <div className="w-full flex flex-col gap-4 animate-drop-3">
      <div className="flex items-center justify-between border-b border-red-500/30 pb-2">
        <h2 className="text-base sm:text-lg font-bold text-white font-abrilfatface flex items-center gap-2">
          <UserX className="w-5 h-5 text-red-500" /> Absent Today
        </h2>
        <Link
          href="/admin"
          className="text-xs text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
        </Link>
      </div>

      <div className="bg-zinc-900 border border-red-500/40 rounded-xl p-4 text-xs sm:text-sm text-gray-300">
        <p>List of employees marked absent or pending check-in for the day will appear here.</p>
      </div>
    </div>
  );
}