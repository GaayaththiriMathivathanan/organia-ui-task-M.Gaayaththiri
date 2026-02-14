'use client';

import { Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-5">
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <h1 className="text-2xl font-bold text-gray-900">Main Title</h1>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-sm font-medium">Main</span>
          <span className="text-gray-400">></span>
          <span className="text-sm font-medium">Sub</span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Notification Bell */}
          <button className="relative hover:bg-gray-100 p-2 rounded-lg transition-all">
            <Bell size={24} className="text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
              <User size={20} />
            </div>
            <span className="font-medium text-gray-900">John Smith</span>
          </div>
        </div>
      </div>
    </div>
  );
}
