'use client';

import { useState } from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import Tabs from '@/components/tabs/Tabs';
import MainDetails from '@/components/forms/MainDetails';
import SubDetails from '@/components/forms/SubDetails';

export default function Home() {
  const [activeTab, setActiveTab] = useState('main');
  const [formData, setFormData] = useState({
    details1: {
      firstName: '',
      lastName: '',
      contactPersonName: '',
      contactNumber: '',
      latitude: '51.5074',
      longitude: '-0.1278',
      province: '',
      district: '',
      city: '',
      street: '',
      addressNote: '',
    },
    details2: {
      firstName: '',
      lastName: '',
      contactPersonName: '',
      contactNumber: '',
      latitude: '51.5074',
      longitude: '-0.1278',
      province: '',
      district: '',
      city: '',
      street: '',
      addressNote: '',
    },
    subDetails: {
      name: '',
      type: '',
      totalValue: '',
      description: '',
      quantity: '',
      number: '',
      weight: '',
      height: '',
      length: '',
      width: '',
    },
  });

  const handleDetails1Change = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      details1: {
        ...prev.details1,
        [field]: value,
      },
    }));
  };

  const handleDetails2Change = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      details2: {
        ...prev.details2,
        [field]: value,
      },
    }));
  };

  const handleSubDetailsChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      subDetails: {
        ...prev.subDetails,
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
    alert('Data saved! Check console for details.');
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 ml-20">
        {/* Header */}
        <Header />

        {/* Content Area */}
        <div className="p-6">
          {/* Breadcrumb Navigation */}
          <div className="mb-4 text-gray-600">
            <span className="font-medium">Main</span>
            <span className="mx-2">›</span>
            <span className="font-medium">Sub</span>
          </div>

          {/* Navigation Badges */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full">
              <div className="w-5 h-5 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="font-medium">S - 01</span>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">S</span>
            </div>
            <span className="text-2xl text-gray-300">»</span>
            <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
              <span className="text-amber-500">📍</span>
              <span className="font-medium text-gray-700">S - 02</span>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">S</span>
            </div>
          </div>

          {/* Main Details Section */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
              <span className="text-xl">▶</span> Main Details
            </h2>

            {/* Tabs */}
            <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Details Cards - Side by Side */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {/* Details 1 Card */}
              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-primary text-white px-6 py-4 font-bold">Details 1</div>
                <div className="p-6">
                  <MainDetails
                    data={formData.details1}
                    onChange={handleDetails1Change}
                  />
                </div>
              </div>

              {/* Details 2 Card */}
              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-primary text-white px-6 py-4 font-bold">Details 2</div>
                <div className="p-6">
                  <MainDetails
                    data={formData.details2}
                    onChange={handleDetails2Change}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sub Details Section */}
          <div className="mb-8">
            <SubDetails
              data={formData.subDetails}
              onChange={handleSubDetailsChange}
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-8 pb-6">
            <button
              onClick={handleSave}
              className="bg-secondary hover:bg-opacity-90 text-white px-12 py-3 rounded-full font-semibold transition-all"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
