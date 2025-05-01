'use client';

import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';

type Role =
  | 'Owner'
  | 'Admin'
  | 'Reception'
  | 'First Aid'
  | 'Attendent';

type TeamMember = {
  id: number;
  name: string;
  email: string;
  services: number;
  role: Role;
  image: string;
};

const roleColors: Record<Role, string> = {
  Owner: 'bg-blue-100 text-blue-700',
  Admin: 'bg-purple-100 text-purple-700',
  Reception: 'bg-pink-100 text-pink-700',
  'First Aid': 'bg-red-100 text-red-700',
  Attendent: 'bg-yellow-100 text-yellow-700',
};

const initialTeam: TeamMember[] = [
  {
    id: 1,
    name: 'Subhash',
    email: 'subhash@gmail.com',
    services: 8,
    role: 'Owner',
    image: '/avatars/subhash.png',
  },
  {
    id: 2,
    name: 'Neha Mehta',
    email: 'nehamehta@gmail.com',
    services: 2,
    role: 'Admin',
    image: '/avatars/neha.png',
  },
  {
    id: 3,
    name: 'Priya sharna',
    email: 'priyasharma@gmail.com',
    services: 3,
    role: 'Reception',
    image: '/avatars/priya.png',
  },
  {
    id: 4,
    name: 'Ravi Kapoor',
    email: 'ravikapoor@gmail.com',
    services: 8,
    role: 'First Aid',
    image: '/avatars/ravi.png',
  },
  {
    id: 5,
    name: 'Amit Verma',
    email: 'amitverma@gmail.com',
    services: 3,
    role: 'Attendent',
    image: '/avatars/amit.png',
  },
];

export default function TeamManagement() {
  // const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [search, setSearch] = useState('');

  const filteredTeam = initialTeam.filter((member) =>
    member.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Team Management</h1>
          <p className="text-sm text-gray-500">
            Manage your team members and roles
          </p>
        </div>
        <button className="flex items-center bg-accent-400 hover:bg-accent-500 text-white rounded-full px-4 py-2">
          <AddIcon className="mr-1" fontSize="small" />
          Add Team Members
        </button>
      </div>

      <input
        type="text"
        placeholder="Search team members..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 px-4 py-2 border rounded-md"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTeam.map((member) => (
          <div
            key={member.id}
            className="flex items-center justify-between border rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <Image
                src={member.image}
                alt={member.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold">{member.name}</h2>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${roleColors[member.role]}`}
                  >
                    {member.role}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{member.email}</p>
                <p className="text-xs text-gray-400">
                  {member.services} services assigned
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <button className="hover:text-blue-600">
                <EditIcon fontSize="small" />
              </button>
              <button className="hover:text-red-600">
                <DeleteIcon fontSize="small" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
