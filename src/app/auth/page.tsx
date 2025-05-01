/**
 * AuthPage.tsx
 * Client-side authentication form with submit handling
 */
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GetAppIcon from "@mui/icons-material/GetApp";

import logoImg from "@/assets/logo.png";
import dogImg from "@/assets/dog.png";

const AuthPage: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    // TODO: Replace with actual authentication logic
    console.log("Logging in with:", { email, password });
    // On success, navigate to dashboard (or desired route)
    router.push("/home");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="md:w-1/2 w-full bg-custom_red flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <Image
              src={logoImg}
              alt="Marshee logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">Marshee</span>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-3xl font-semibold">Welcome Back</h1>
            <p className="text-gray-600 mt-1">
              Log in to access your pet service dashboard
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@gmail.com"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-200"
                />
                <MailOutlineIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-200"
                />
                <LockOutlinedIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-accent-500"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a
                href="#"
                className="text-sm font-medium text-accent-500 hover:text-accent-600"
              >
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-accent-500 text-white font-semibold hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-200 transition"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center my-6">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-4 text-gray-500 text-sm">
                Or download our apps
              </span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Download Buttons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="flex flex-1 items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                <GetAppIcon className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-gray-700">Mobile App</span>
              </a>
              <a
                href="#"
                className="flex flex-1 items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                <GetAppIcon className="w-5 h-5 mr-2 text-gray-600" />
                <span className="text-gray-700">Desktop App</span>
              </a>
            </div>
          </form>

          <p className="text-center text-gray-500 text-xs mt-8">
            © Marshee pet service. All rights reserved
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 w-full bg-primary-50 flex items-center justify-center p-8 relative">
        <div className="max-w-lg text-center z-10">
          <h2 className="text-3xl font-bold text-accent-500 mb-2">
            Grow your pet service business
          </h2>
          <p className="text-gray-700">
            Manage appointments, team members, and service all in one place
          </p>
        </div>

        {/* Dog Image */}
        <div className="absolute inset-0 flex items-end justify-end">
          <div className="w-full h-2/3 relative">
            <Image
              src={dogImg}
              alt="Happy dog"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
