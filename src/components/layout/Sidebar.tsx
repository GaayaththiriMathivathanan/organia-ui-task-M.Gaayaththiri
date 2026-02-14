'use client';

import { Home, Menu, Users, UserCheck, Users2, BarChart3, Settings, FileText } from 'lucide-react';

export default function Sidebar() {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Menu, label: 'Menu 2' },
    { icon: Users, label: 'Menu 3' },
    { icon: UserCheck, label: 'Menu 4' },
    { icon: Users2, label: 'Menu 5' },
    { icon: BarChart3, label: 'Menu 6' },
    { icon: Settings, label: 'Menu 7' },
    { icon: FileText, label: 'Menu 8' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200 flex flex-col items-center py-6 gap-8 shadow-sm">
      {/* Logo / Brand */}
      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
        SP
      </div>

      {/* Menu Items */}
      <nav className="flex flex-col gap-6">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer transition-all ${
                item.active
                  ? 'bg-primary text-white shadow-lg'
                  : 'text-gray-400 hover:text-primary hover:bg-gray-200'
              }`}
              title={item.label}
            >
              <Icon size={24} />
            </div>
          );
        })}
      </nav>

      {/* Bottom Spacer */}
      <div className="flex-1"></div>

      {/* Additional Menu Item */}
      <div className="flex items-center justify-center w-12 h-12 rounded-lg cursor-pointer transition-all text-gray-400 hover:text-primary hover:bg-gray-200">
        <FileText size={24} />
      </div>
    </div>
  );
}
