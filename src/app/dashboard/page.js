"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useDevices } from "../context/deviceContext";
// import { Container, Main, Section } from "@/components/craft";
import Chart from "../components/charts/line";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import DeviceCard from "../components/cards/device";
import Link from "next/link";

// Import the DashboardCharts component with dynamic import to avoid SSR issues with WebSockets
// const DashboardCharts = dynamic(
//   () => import("@/components/dashboard/DashboardCharts"),
//   {
//     ssr: false,
//     loading: () => <p>Loading charts...</p>,
//   }
// );

export default function DashboardPage() {
  const { devices, isLoading } = useDevices();
  const [activeTab, setActiveTab] = useState("overview");

  const temperatureData = [
    { timestamp: "2025-02-14T21:00:32.099Z", temperature: 9.77 },
    { timestamp: "2025-02-14T21:00:32.141Z", temperature: 2.81 },
    { timestamp: "2025-02-14T21:00:32.176Z", temperature: 7.18 },
    { timestamp: "2025-02-14T21:00:32.219Z", temperature: 2.97 },
    { timestamp: "2025-02-14T21:00:32.254Z", temperature: 6.45 },
  ];

  const humidityData = [
    { timestamp: "2025-02-14T21:00:32.099Z", humidity: 31.96 },
    { timestamp: "2025-02-14T21:00:32.141Z", humidity: 87.47 },
    { timestamp: "2025-02-14T21:00:32.176Z", humidity: 94.5 },
    { timestamp: "2025-02-14T21:00:32.219Z", humidity: 75.29 },
    { timestamp: "2025-02-14T21:00:32.254Z", humidity: 83.3 },
  ];

  const moistureData = [
    { timestamp: "2025-02-14T21:00:32.099Z", moisture: 9.42 },
    { timestamp: "2025-02-14T21:00:32.141Z", moisture: 61.11 },
    { timestamp: "2025-02-14T21:00:32.176Z", moisture: 69.65 },
    { timestamp: "2025-02-14T21:00:32.219Z", moisture: 74.09 },
    { timestamp: "2025-02-14T21:00:32.254Z", moisture: 65.23 },
  ];

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  if (status === "loading" || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse">
          <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 w-56 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  const isDevicesEmpty = !devices || devices.length === 0;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome, {session?.user?.name}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Here's an overview of your IoT environment
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link 
                href="/devices" 
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                View Devices
              </Link>
              <Link 
                href="/device/register" 
                className="inline-flex items-center rounded-md bg-[#1456BC] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#124099]"
              >
                Register Device
              </Link>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === "overview" 
                  ? "border-[#1456BC] text-[#1456BC]" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab("analytics")}
              className={`
                whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === "analytics" 
                  ? "border-[#1456BC] text-[#1456BC]" 
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}
              `}
            >
              Analytics
            </button>
          </nav>
        </div>

        {activeTab === "overview" && (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
              {/* Temperature Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-red-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Average Temperature
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {temperatureData.reduce((acc, curr) => acc + curr.temperature, 0) / temperatureData.length || 0}°C
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Humidity Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Average Humidity
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {humidityData.reduce((acc, curr) => acc + curr.humidity, 0) / humidityData.length || 0}%
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>

              {/* Moisture Card */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                      <svg className="h-6 w-6 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Average Moisture
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-2xl font-semibold text-gray-900">
                          {moistureData.reduce((acc, curr) => acc + curr.moisture, 0) / moistureData.length || 0}%
                        </div>
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* User Account Section */}
            <div className="bg-white shadow rounded-lg mb-8">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Your Account Details</h3>
                <div className="mt-5 border-t border-gray-200 pt-5">
                  <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Full name</dt>
                      <dd className="mt-1 text-sm text-gray-900">{session?.user?.name}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Email address</dt>
                      <dd className="mt-1 text-sm text-gray-900">{session?.user?.email}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">User ID</dt>
                      <dd className="mt-1 text-sm text-gray-900">{session?.user?.id}</dd>
                    </div>
                    <div className="sm:col-span-1">
                      <dt className="text-sm font-medium text-gray-500">Devices Registered</dt>
                      <dd className="mt-1 text-sm text-gray-900">{devices?.length || 0}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* Chart Section */}
            <div className="bg-white shadow rounded-lg mb-8 p-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                Sensor Data Trends
              </h3>
              <div className="h-80">
                <Chart
                  temperatureData={temperatureData}
                  humidityData={humidityData}
                  moistureData={moistureData}
                />
              </div>
            </div>

            {/* Devices Section */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between items-center mb-5">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Your Devices
                  </h3>
                  <Link
                    href="/devices"
                    className="text-sm font-medium text-[#1456BC] hover:text-[#124099]"
                  >
                    View All →
                  </Link>
                </div>
                
                {isDevicesEmpty ? (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No devices found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Get started by registering a new IoT device.
                    </p>
                    <div className="mt-6">
                      <Link
                        href="/device/register"
                        className="inline-flex items-center rounded-md bg-[#1456BC] px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#124099]"
                      >
                        <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                        </svg>
                        Register Device
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {devices.slice(0, 3).map((device, index) => (
                      <DeviceCard key={index} deviceName={device.name} deviceId={device.serialId} />
                    ))}
                    {devices.length > 3 && (
                      <div className="flex items-center justify-center bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300">
                        <Link 
                          href="/devices"
                          className="text-sm font-medium text-[#1456BC] hover:text-[#124099]"
                        >
                          View {devices.length - 3} more device{devices.length - 3 > 1 ? 's' : ''}
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        
        {activeTab === "analytics" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900 mb-5">Advanced Analytics</h3>
            <p className="text-gray-500 mb-6">Detailed analysis of your IoT environment data over time.</p>
            
            <div className="h-96">
              <Chart
                temperatureData={temperatureData}
                humidityData={humidityData}
                moistureData={moistureData}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
