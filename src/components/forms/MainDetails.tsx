'use client';

import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import MapComponent from '@/components/map/MapComponent';

interface MainDetailsProps {
  data: {
    firstName: string;
    lastName: string;
    contactPersonName: string;
    contactNumber: string;
    latitude: string;
    longitude: string;
    province: string;
    district: string;
    city: string;
    street: string;
    addressNote: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function MainDetails({ data, onChange }: MainDetailsProps) {
  const provinceOptions = [
    { value: 'central', label: 'Central' },
    { value: 'eastern', label: 'Eastern' },
    { value: 'western', label: 'Western' },
    { value: 'northern', label: 'Northern' },
    { value: 'southern', label: 'Southern' },
  ];

  return (
    <div className="space-y-4">
      {/* First Name & Last Name */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="First Name"
          placeholder="First Name"
          value={data.firstName}
          onChange={(value) => onChange('firstName', value)}
          required
        />
        <Input
          label="Last Name"
          placeholder="Last Name"
          value={data.lastName}
          onChange={(value) => onChange('lastName', value)}
        />
      </div>

      {/* Contact Person Name & Contact Number */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Contact Person Name"
          placeholder="Enter contact person name"
          value={data.contactPersonName}
          onChange={(value) => onChange('contactPersonName', value)}
          required
        />
        <Input
          label="Contact Number"
          placeholder="+94"
          value={data.contactNumber}
          onChange={(value) => onChange('contactNumber', value)}
          required
        />
      </div>

      {/* Map */}
      <div>
        <MapComponent
          latitude={data.latitude}
          longitude={data.longitude}
          onLocationChange={(lat, lng) => {
            onChange('latitude', lat);
            onChange('longitude', lng);
          }}
        />
      </div>

      {/* Latitude & Longitude */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Latitude"
          placeholder="Latitude"
          value={data.latitude}
          onChange={(value) => onChange('latitude', value)}
        />
        <Input
          label="Longitude"
          placeholder="Longitude"
          value={data.longitude}
          onChange={(value) => onChange('longitude', value)}
        />
      </div>

      {/* Province & District */}
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Province"
          options={provinceOptions}
          value={data.province}
          onChange={(value) => onChange('province', value)}
          required
        />
        <Input
          label="District"
          placeholder="Enter district"
          value={data.district}
          onChange={(value) => onChange('district', value)}
          required
        />
      </div>

      {/* City & Street/Lane */}
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="City"
          placeholder="Enter city"
          value={data.city}
          onChange={(value) => onChange('city', value)}
          required
        />
        <Input
          label="Street / Lane"
          placeholder="Enter street name"
          value={data.street}
          onChange={(value) => onChange('street', value)}
          required
        />
      </div>

      {/* Address Note */}
      <Input
        label="Address Note"
        placeholder="Enter address note"
        value={data.addressNote}
        onChange={(value) => onChange('addressNote', value)}
        required
      />
    </div>
  );
}
