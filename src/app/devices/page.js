"use client";

import { useDevices } from "@/app/context/deviceContext";
import DeviceCard from "@/app/components/cards/device";

export default function Devices() {
  // Access the devices and loading state from the context
  const { devices, isLoading } = useDevices();

  // Show a loading message while the devices are being fetched
  if (isLoading) {
    return <div>Loading devices...</div>;
  }

  if (!devices) {
    return <div>No devices found.</div>;
  }

  return (
    <div className="flex flex-wrap justify-left gap-6 p-10 bg-gray-100 min-h-screen">
      <div className="w-full max-w-4xl">
        {devices.map((device, index) => (
          <div key={index} className="flex-none">
            <DeviceCard deviceName={device.name} deviceId={device.serialId} />
          </div>
        ))}
      </div>
    </div>
  );
}
