'use client';

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import EventIcon from "@mui/icons-material/Event";
import BarChartIcon from "@mui/icons-material/BarChart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import DescriptionIcon from "@mui/icons-material/Description";
import LogoutIcon from "@mui/icons-material/Logout";
import logoImg from "@/assets/logo.png";
import Dashboard from "@/components/Dashboard";
import TeamManagement from "@/components/TeamManagement";
import Services from "@/components/Services";
// import Appointments from "@/components/Appointments";
// import Analytics from "@/components/Analytics";
// import Billing from "@/components/Billing";
// import Documentation from "@/components/Documentation";

type PageKey =
  | "dashboard"
  | "appointments"
  | "analytics"
  | "billing"
  | "services"
  | "team"
  | "documentation";

const Home: React.FC = () => {
  const [activePage, setActivePage] = useState<PageKey>("dashboard");

  const renderComponent = () => {
    switch (activePage) {
      case "appointments":
        return <Dashboard />;
      case "analytics":
        return <Dashboard />;
      case "billing":
        return <Dashboard />;
      case "services":
        return <Services />;
      case "team":
        return <TeamManagement />;
      case "documentation":
        return <Dashboard />;
      default:
        return <Dashboard />;
    }
  };

  const navItems = [
    { key: "dashboard", label: "Dashboard", icon: <HomeIcon fontSize="small" /> },
    { key: "appointments", label: "Appointments", icon: <EventIcon fontSize="small" /> },
    { key: "analytics", label: "Analytics", icon: <BarChartIcon fontSize="small" /> },
    { key: "billing", label: "Billing", icon: <AttachMoneyIcon fontSize="small" /> },
    { key: "services", label: "Services", icon: <SettingsIcon fontSize="small" /> },
    { key: "team", label: "Team", icon: <PeopleIcon fontSize="small" /> },
    { key: "documentation", label: "Documentation", icon: <DescriptionIcon fontSize="small" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="relative w-64 bg-white border-r">
        <div className="flex items-center p-6">
          <Image
            src={logoImg}
            alt="Marshee logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="ml-2 text-xl font-bold">Marshee</span>
        </div>

        <div className="flex items-center px-6 mb-6">
          <Image
            src="/avatar.jpg"
            alt="Subhash"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="font-medium">Subhash</p>
            <p className="text-sm text-gray-500">Owner</p>
          </div>
        </div>

        <nav className="px-6 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setActivePage(item.key as PageKey)}
              className={`w-full text-left flex items-center p-3 rounded-lg ${
                activePage === item.key
                  ? "bg-accent-100 text-accent-600"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-6 w-full px-6">
          <Link href="/auth" className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100">
            <LogoutIcon fontSize="small" />
            <span className="ml-3">Logout</span>
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 overflow-y-auto">{renderComponent()}</main>
    </div>
  );
};

export default Home;
