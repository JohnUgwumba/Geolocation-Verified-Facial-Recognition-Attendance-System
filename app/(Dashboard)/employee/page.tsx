'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const detail = { date: "2nd Mar", time: "5:30 AM", result: "Successful" };

const EmployeeDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-4 sm:py-8 px-2 sm:px-4 text-white">

      {/* Main Dashboard Card */}
      <div className="flex flex-col bg-gradient-to-b from-black via-red-400/10 to-red-400/50 border-2 border-red-500 p-3 sm:p-6 md:p-7 w-full max-w-[340px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-2xl shadow-xl mb-2 sm:mb-6 space-y-3 sm:space-y-4 md:space-y-5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)]">

        {/* Top Header Section: Unified Responsive Layout */}
        <div className="border-b border-red-500/30 pb-3 sm:pb-4 space-y-3 animate-drop-1">
          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-3 md:gap-4">
            
            {/* User Info (Order 2 on mobile, Order 1 on desktop) */}
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-0.5">
              <h1 className="text-sm sm:text-base md:text-xl font-bold font-fugazone">Ugwumba John</h1>
              <p className="text-[10px] sm:text-xs md:text-sm text-gray-200">johnugwumba@gmail.com</p>
              <p className="text-[10px] sm:text-xs md:text-sm text-red-400 font-semibold">Product Manager</p>
            </div>

            {/* Dashboard Title (Order 1 on mobile, Order 2 on desktop) */}
            <h1 className="order-1 md:order-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 tracking-wide font-abrilfatface text-center">
              Dashboard
            </h1>

            {/* Logged In Status Badge (Order 3) */}
            <div className="order-3 md:order-3 flex flex-row items-center space-x-2 bg-zinc-900 px-3 py-1.5 rounded-full border border-red-500/40">
              <span className="text-[10px] sm:text-xs text-gray-300">Logged In</span>
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
            </div>

          </div>
        </div>

        {/* Attendance Section */}
        <div className="space-y-1.5 sm:space-y-2 animate-drop-2">
          <h2 className="text-[10px] sm:text-xs md:text-sm font-semibold text-red-400">Attendance History</h2>

          <div className="flex flex-col border border-red-500/50 rounded-xl p-2 sm:p-3 md:p-4 bg-zinc-950 space-y-1.5 sm:space-y-2">

            {/* Table Headers */}
            <div className="flex justify-between text-[9px] sm:text-xs md:text-sm text-gray-400 border-b border-zinc-800 pb-1 px-1 sm:px-2">
              <span>Date</span>
              <span>Time</span>
              <span>Result</span>
            </div>

            {/* Attendance Detail Row */}
            <div className="flex justify-between items-center bg-red-500/40 border border-red-500/40 rounded-lg p-1.5 sm:p-2.5 md:p-3 text-[9px] sm:text-xs md:text-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_15px_rgba(255,0,0,0.6)]">
              <span className="font-medium">{detail.date}</span>
              <span className="text-gray-300">{detail.time}</span>
              <span className="text-green-400 font-semibold">{detail.result}</span>
            </div>

          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-0.5 sm:pt-1 animate-drop-3">
          {/* Check-In Button */}
          <Link href="/capture" className="w-full">
            <button className="w-full py-1.5 sm:py-2.5 px-3 sm:px-4 bg-red-600 text-white font-semibold rounded-xl text-[10px] sm:text-xs md:text-sm transition-all duration-300 hover:bg-red-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,0,1)] cursor-pointer">
              Check-In
            </button>
          </Link>

          {/* Sign Out Button */}
          <Link href="/check-in" className="w-full">
            <button className="group w-full flex items-center justify-center space-x-1.5 sm:space-x-2 py-1.5 sm:py-2.5 px-3 sm:px-4 bg-cyan-300/90 text-gray-800 font-semibold rounded-xl text-[10px] sm:text-xs md:text-sm transition-all duration-300 hover:bg-cyan-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] cursor-pointer">
              <span>Sign Out</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-gray-800 group-hover:text-white transition-colors duration-300" />
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default EmployeeDashboard;