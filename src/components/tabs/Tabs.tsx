'use client';

import { Plus } from 'lucide-react';

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Tabs({ activeTab, onTabChange }: TabsProps) {
  const tabs = [
    { id: 'main', label: 'T 01', name: 'Main Details' },
    { id: 'tab2', label: 'T 02' },
    { id: 'tab3', label: 'T 03' },
    { id: 'tab4', label: 'T 04' },
    { id: 'tab5', label: 'T 05' },
    { id: 'tab6', label: 'T 06' },
  ];

  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
      {/* Tab Buttons */}
      <div className="flex items-center gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1"></div>

      {/* Add Tab Button */}
      <button className="flex items-center gap-2 bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all whitespace-nowrap">
        <Plus size={18} />
        <span>Add T</span>
      </button>
    </div>
  );
}
