'use client';

import { Users, UserCheck, UserX, CalendarSearch } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const DashboardMenu = [
  {
    name: 'Total employees',
    href: '/admin/dashboard/total-employees', 
    color: 'bg-white',
    text: 'text-black',
    icon: Users,
  },
  {
    name: 'Present today',
    href: '/admin/dashboard/present-today',
    color: 'bg-cyan-300',
    text: 'text-black font-medium',
    icon: UserCheck,
  },
  {
    name: 'Absent today',
    href: '/admin/dashboard/absent-today',
    color: 'bg-white',
    text: 'text-gray-900 font-medium',
    icon: UserX,
  },
  {
    name: 'View individual attendance history', 
    href: '/admin/dashboard/attendance-history',
    color: 'bg-cyan-300',
    text: 'text-black font-medium',
    icon: CalendarSearch,
  },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Total employees');
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-start -mt-3">
      {/* Menu Container shifted upwards */}
      <div className="flex flex-col items-end gap-1.5 p-1 w-full max-w-[200px]">
        {DashboardMenu.map((item) => {
          const IconComponent = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                router.push(item.href);
              }}
              className={`animate-drop-3 w-full flex flex-row items-center justify-center gap-1.5 border rounded-lg px-2.5 py-1.5 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden ${
                item.color
              } ${item.text} hover:brightness-110`}
            >
              <IconComponent className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate text-[10px] sm:text-xs font-medium">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}