
'use client';

import {
  ArrowRight,
  LayoutDashboard,
  Users,
  MapPin,
} from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const adminLinks = [
  {
    name: 'Dashboard',
    href: '/admin/dashboard',
    color: 'bg-cyan-300',
    text: 'text-black',
    icon: LayoutDashboard,
  },
  {
    name: 'Employees',
    href: '/admin/employees',
    color: 'bg-white/90',
    text: 'text-black',
    icon: Users,
  },
  {
    name: 'Offices',
    href: '/admin/offices',
    color: 'bg-cyan-300',
    text: 'text-gray-900 font-medium',
    icon: MapPin,
  },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="w-full min-h-screen bg-black flex flex-col items-center py-4 sm:py-8 px-2 sm:px-4 text-white">

      {/* Main Dashboard Card */}
      <div className="flex flex-col bg-gradient-to-b from-black via-red-400/10 to-red-400/50 border-2 border-red-500 p-3 sm:p-6 md:p-7 w-full max-w-[340px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-2xl shadow-xl mb-2 sm:mb-6 space-y-3 sm:space-y-4 md:space-y-5 transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,0,0,0.8)]">

        {/* Top Header Section */}
        <div className="border-b border-red-500/30 pb-3 sm:pb-4 space-y-3 animate-drop-1">

          <div className="flex flex-col md:flex-row justify-between items-center w-full gap-3 md:gap-4">

            {/* User Info */}
            <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left space-y-0.5">
              <h1 className="text-sm sm:text-base md:text-xl font-bold font-fugazone">
                Ugwumba John
              </h1>

              <p className="text-[10px] sm:text-xs md:text-sm text-gray-200">
                johnugwumba@gmail.com
              </p>

              <p className="text-[10px] sm:text-xs md:text-sm text-red-400 font-semibold">
                Product Manager
              </p>
            </div>

            {/* Portal Title */}
            <h1 className="order-1 md:order-2 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-200 tracking-wide font-abrilfatface text-center">
              Admin Portal
            </h1>

            {/* Logged In Status Badge */}
            <div className="order-3 md:order-3 flex flex-row items-center space-x-2 bg-zinc-900 px-3 py-1.5 rounded-full border border-red-500/40">
              <span className="text-[10px] sm:text-xs text-gray-300">
                Logged In
              </span>

              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
            </div>

          </div>
        </div>

        {/* Navigation Section */}
        <div className="grid grid-cols-3 justify-center gap-1.5 sm:gap-2 border border-red-500/50 rounded-xl p-2 sm:p-3 md:p-4 bg-zinc-950">

          {adminLinks.map((item) => {
            const IconComponent = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
              suppressHydrationWarning
                key={item.name}
                href={item.href}
                className={`animate-drop-3 flex items-center justify-center sm:justify-start space-x-1.5 sm:space-x-2 border rounded-lg px-1.5 sm:px-3 py-2 text-[10px] sm:text-xs md:text-sm transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden ${
                  isActive
                    ? 'bg-red-600 border-red-400 font-bold text-white shadow-[0_0_15px_rgba(255,0,0,0.6)]'
                    : `${item.color} ${item.text} border-red-500/40 hover:brightness-110 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)]`
                }`}
              >
                <IconComponent
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${
                    isActive ? 'text-white' : 'text-zinc-900'
                  }`}
                />

                <span className="truncate">{item.name}</span>
              </Link>
            );
          })}

        </div>

        {/* Animated Dynamic Page Content */}
        <motion.div
          key={pathname}
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="p-4 text-white"
        >
          {children}
        </motion.div>

        {/* Action Buttons */}
        <div className="w-full flex justify-center pt-0.5 sm:pt-1 animate-drop-5">

          <Link
            href="/check-in"
            className="w-full max-w-[200px] sm:max-w-[220px] mx-auto block"
          >
            <button className="group w-full flex items-center justify-center space-x-1.5 sm:space-x-2 py-1.5 sm:py-2 px-3 sm:px-4 bg-red-600 border border-red-500 text-white font-semibold rounded-xl text-[10px] sm:text-xs md:text-sm transition-all duration-300 hover:bg-red-500 hover:border-red-400 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,0,0,1)] cursor-pointer">

              <span>Sign Out</span>

              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-red-500 group-hover:text-white transition-colors duration-300" />

            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}