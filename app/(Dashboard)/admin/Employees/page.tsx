'use client';

import { UserPlus, UserMinus, UserPen } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const EmployeeMenu = [
  {
    name: 'Add new employee',
    href: '/admin/employees/add', 
    color: 'bg-white',
    text: 'text-black',
    icon: UserPlus,
  },
  {
    name: 'Remove employee',
    href: '/admin/employees/remove',
    color: 'bg-cyan-300',
    text: 'text-black font-medium',
    icon: UserMinus,
  },
  {
    name: 'Edit employee',
    href: '/admin/employees/edit',
    color: 'bg-white',
    text: 'text-gray-900 font-medium',
    icon: UserPen,
  },
];

export default function Employees() {
  const [activeTab, setActiveTab] = useState('Add new employee');
  const router = useRouter();

  return (
    /* mx-auto ensures full horizontal centering inside the parent layout card */
    <div className="w-full flex flex-col items-end justify-center mx-auto -mt-3">
      {/* Menu Container */}
      <div className="flex flex-col items-center justify-center gap-1.5 p-1 w-full max-w-[200px] mx-auto">
        {EmployeeMenu.map((item) => {
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