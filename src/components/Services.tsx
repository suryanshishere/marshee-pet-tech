'use client';

import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import PetsIcon from '@mui/icons-material/Pets';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CakeIcon from '@mui/icons-material/Cake';
import BiotechIcon from '@mui/icons-material/Biotech';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import ArrowRightIcon from '@mui/icons-material/ArrowForwardIos';

interface Service {
  id: number;
  name: string;
  description: string;
  appointments: number;
  revenue: number;
  icon: React.ReactNode;
}

const initialServices: Service[] = [
  {
    id: 1,
    name: 'Dog Walking',
    description: 'Professional dog walking services with scheduled visits',
    appointments: 12,
    revenue: 700,
    icon: <PetsIcon />,  
  },
  {
    id: 2,
    name: 'Dog Caretakers',
    description: 'Full-service pet sitting and care in your home',
    appointments: 8,
    revenue: 868,
    icon: <PetsIcon />,  
  },
  {
    id: 3,
    name: 'Telvet',
    description: 'Online veterinary appointments and consultations',
    appointments: 5,
    revenue: 507,
    icon: <LocalHospitalIcon />,  
  },
  {
    id: 4,
    name: 'Custom Cakes',
    description: 'Specialized cake design for pet celebrations',
    appointments: 3,
    revenue: 540,
    icon: <CakeIcon />,  
  },
  {
    id: 5,
    name: 'DNA Testing',
    description: 'Pet DNA testing and breed identification services',
    appointments: 2,
    revenue: 600,
    icon: <BiotechIcon />,  
  },
  {
    id: 6,
    name: 'Animal Communicator',
    description: 'Understand your pet through communication',
    appointments: 4,
    revenue: 870,
    icon: <ChatBubbleOutlineIcon />,  
  },
  {
    id: 7,
    name: 'Pet Hospitals',
    description: 'Partnered pet hospital services and referrals',
    appointments: 6,
    revenue: 1200,
    icon: <LocalHospitalIcon />,  
  },
  {
    id: 8,
    name: 'Groom My Pet',
    description: 'Professional pet grooming services',
    appointments: 15,
    revenue: 1125,
    icon: <ContentCutIcon />,  
  },
];

export default function Services() {
//   const [services, setServices] = useState<Service[]>(initialServices);
  const [search, setSearch] = useState('');

  const filtered = initialServices.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Services</h1>
          <p className="text-sm text-gray-500">Manage your pet service offerings</p>
        </div>
        <button className="flex items-center bg-accent-400 hover:bg-accent-500 text-white rounded-full px-4 py-2">
          <AddIcon className="mr-1" fontSize="small" />
          Add Services
        </button>
      </div>

      <input
        type="text"
        placeholder="Search services..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 border rounded-xl shadow-sm"
          >
            <div className="flex items-center gap-4">
              <span className="bg-yellow-100 text-yellow-700 p-2 rounded-full">
                {item.icon}
              </span>
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
                <div className="mt-2 text-xs text-gray-600 flex gap-4">
                  <span>
                    <strong>Appointments</strong> {item.appointments}
                  </span>
                  <span>
                    <strong>Revenue</strong> ₹{item.revenue}
                  </span>
                </div>
              </div>
            </div>
            <ArrowRightIcon className="text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
