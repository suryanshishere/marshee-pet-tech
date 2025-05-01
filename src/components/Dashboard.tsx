import React from "react";
import EventIcon from "@mui/icons-material/Event";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MicIcon from "@mui/icons-material/Mic";
import PetsIcon from "@mui/icons-material/Pets";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const todayAppointments = [
  {
    id: 1,
    title: "Dog Walking",
    client: "Amit Verma",
    date: "1 May 2025",
    time: "10:00 AM",
    status: "Upcoming",
  },
  {
    id: 2,
    title: "Telvet",
    client: "Ishan Sharma",
    date: "1 May 2025",
    time: "10:00 AM",
    status: "Upcoming",
  },
];

const topServices = [
  {
    id: 1,
    name: "Custom Cakes",
    description: "Specialized cake design for pet celebrations",
    appointments: 3,
    revenue: "₹540",
    icon: <PetsIcon className="text-accent-500" fontSize="small" />,
  },
  {
    id: 2,
    name: "Groom My Pet",
    description: "Professional pet grooming services",
    appointments: 15,
    revenue: "₹1125",
    icon: <ContentCutIcon className="text-accent-500" fontSize="small" />,
  },
];

const Dashboard: React.FC = () => (
  <main className="flex-1 p-8 overflow-y-auto">
    {/* Greeting Banner */}
    <div className="bg-accent-100 p-6 rounded-lg flex justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-semibold">Hello Subhash!</h1>
        <p className="text-gray-600">
        Here&rsquo;s what’s happening with your pet services today
        </p>
      </div>
      <PetsIcon className="text-accent-500" fontSize="large" />
    </div>

    {/* KPI CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
      {[
        {
          title: "Today's Appointments",
          value: "3",
          meta: "2 completed, 3 upcoming",
          icon: <EventIcon className="text-accent-500" fontSize="medium" />,
        },
        {
          title: "Earnings",
          value: "₹2,400",
          meta: "+₹600 from yesterday",
          icon: (
            <CurrencyRupeeIcon className="text-accent-500" fontSize="medium" />
          ),
        },
        {
          title: "Pending Appointments",
          value: "8",
          meta: "2 new, 1 reschedule",
          icon: (
            <AccessTimeIcon className="text-accent-500" fontSize="medium" />
          ),
        },
        {
          title: "Completed",
          value: "24",
          meta: "+5% vs last week",
          icon: (
            <CheckCircleIcon className="text-accent-500" fontSize="medium" />
          ),
        },
      ].map((card, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow flex justify-between items-center"
        >
          <div>
            <p className="text-gray-600">{card.title}</p>
            <p className="text-2xl font-bold mt-2">{card.value}</p>
            <p className="text-sm text-gray-500 mt-1">{card.meta}</p>
          </div>
          <div className="bg-accent-100 p-2 rounded-full">{card.icon}</div>
        </div>
      ))}
    </div>

    {/* QUICK ACTION CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {[
        {
          id: "add-service",
          title: "Add Service",
          subtitle: "Create a new service offering",
        },
        {
          id: "view-appointments",
          title: "View Appointments",
          subtitle: "Manage your schedule",
        },
        {
          id: "add-team",
          title: "Add Team Member",
          subtitle: "Expand Your Team",
        },
      ].map((card) => (
        <div
          key={card.id}
          className="relative h-40 rounded-lg overflow-hidden bg-gray-200"
          style={{
            backgroundImage: `url('/images/${card.id}.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
            <div className="bg-white p-3 rounded-full mb-2">
              <MicIcon className="text-accent-500" fontSize="small" />
            </div>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm">{card.subtitle}</p>
          </div>
        </div>
      ))}
    </div>

    {/* APPOINTMENTS & TOP SERVICES */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Today's Appointments List */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Today&rsquo;s Appointments</h2>
        {todayAppointments.map((appt) => (
          <div
            key={appt.id}
            className="flex items-center justify-between py-4 border-b last:border-b-0"
          >
            <div className="flex items-center">
              <div className="bg-accent-100 p-2 rounded-full">
                <PetsIcon className="text-accent-500" fontSize="small" />
              </div>
              <div className="ml-4">
                <p className="font-semibold">{appt.title}</p>
                <p className="text-sm text-gray-500 capitalize">{appt.client}</p>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <EventIcon fontSize="small" />
                  <span className="ml-1">{appt.date}</span>
                  <AccessTimeIcon className="ml-4" fontSize="small" />
                  <span className="ml-1">{appt.time}</span>
                </div>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
              {appt.status}
            </span>
          </div>
        ))}
      </div>

      {/* Top Performing Services */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Top Performing Service</h2>
        {topServices.map((svc) => (
          <div
            key={svc.id}
            className="flex items-start justify-between mb-4 last:mb-0"
          >
            <div className="flex items-start">
              <div className="bg-accent-100 p-2 rounded-full">{svc.icon}</div>
              <div className="ml-4">
                <p className="font-semibold">{svc.name}</p>
                <p className="text-sm text-gray-500">{svc.description}</p>
                <div className="flex items-center text-sm text-gray-600 mt-1 space-x-4">
                  <span>
                    Appointments <span className="font-medium">{svc.appointments}</span>
                  </span>
                  <span>
                    Revenue <span className="font-medium">{svc.revenue}</span>
                  </span>
                </div>
              </div>
            </div>
            <ChevronRightIcon className="text-gray-400" fontSize="small" />
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default Dashboard;