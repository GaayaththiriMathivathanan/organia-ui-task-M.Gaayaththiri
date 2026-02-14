'use client';

import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

interface SubDetailsProps {
  data: {
    name: string;
    type: string;
    totalValue: string;
    description: string;
    quantity: string;
    number: string;
    weight: string;
    height: string;
    length: string;
    width: string;
  };
  onChange: (field: string, value: string) => void;
}

export default function SubDetails({ data, onChange }: SubDetailsProps) {
  const typeOptions = [
    { value: 'product', label: 'Product' },
    { value: 'service', label: 'Service' },
    { value: 'both', label: 'Both' },
  ];

  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
      <div className="bg-primary text-white px-6 py-4 font-bold">Sub Details</div>
      <div className="p-6 space-y-6">
        {/* Name, Type, Total Value, Description */}
        <div className="grid grid-cols-4 gap-4">
          <Input
            label="Name"
            placeholder="Enter name"
            value={data.name}
            onChange={(value) => onChange('name', value)}
            required
          />
          <Select
            label="Type"
            options={typeOptions}
            value={data.type}
            onChange={(value) => onChange('type', value)}
          />
          <Input
            label="Total Value"
            placeholder="Enter total value"
            value={data.totalValue}
            onChange={(value) => onChange('totalValue', value)}
          />
          <Input
            label="Description"
            placeholder="Enter description"
            value={data.description}
            onChange={(value) => onChange('description', value)}
          />
        </div>

        {/* Quantity, Number, Weight, Height, Length, Width - Bordered Box */}
        <div className="border border-gray-300 rounded-lg p-6">
          <div className="grid grid-cols-6 gap-4">
            <Input
              label="Quantity"
              placeholder="Enter quantity"
              value={data.quantity}
              onChange={(value) => onChange('quantity', value)}
              required
            />
            <Input
              label="Number"
              placeholder="Enter number"
              value={data.number}
              onChange={(value) => onChange('number', value)}
            />
            <Input
              label="Weight (Kg)"
              placeholder="Enter weight"
              value={data.weight}
              onChange={(value) => onChange('weight', value)}
            />
            <Input
              label="Height (m³)"
              placeholder="Enter height"
              value={data.height}
              onChange={(value) => onChange('height', value)}
            />
            <Input
              label="Length (m)"
              placeholder="Enter length"
              value={data.length}
              onChange={(value) => onChange('length', value)}
            />
            <Input
              label="Width"
              placeholder="Enter width"
              value={data.width}
              onChange={(value) => onChange('width', value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
