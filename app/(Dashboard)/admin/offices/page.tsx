'use client';

import { PlusCircle, Trash2, Edit3 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const OfficceMenu = [
  {
    name: 'Add office',
    href: '/admin/offices/add', 
    color: 'bg-white',
    text: 'text-black',
    icon: PlusCircle,
  },
  {
    name: 'Remove Office',
    href: '/admin/offices/remove',
    color: 'bg-cyan-300',
    text: 'text-black',
    icon: Trash2,
  },
  {
    name: 'Edit Office',
    href: '/admin/offices/edit',
    color: 'bg-white',
    text: 'text-gray-900 font-medium',
    icon: Edit3,
  },
];

export default function Office() {
  const [activeTab, setActiveTab] = useState('Add office');
  const router = useRouter();

  return (
    <div className="w-full flex flex-col items-end -mt-3">
      {/* Menu Container shifted upwards */}
      <div className="flex flex-col items-end gap-1.5 p-1 w-full max-w-[200px]">
        {OfficceMenu.map((item) => {
          const IconComponent = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                router.push(item.href);
              }}
              className={`animate-drop-3 w-full flex flex-row items-center justify-start gap-1.5 border rounded-lg px-2.5 py-1.5 transition-all duration-300 hover:scale-[1.02] cursor-pointer overflow-hidden ${
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