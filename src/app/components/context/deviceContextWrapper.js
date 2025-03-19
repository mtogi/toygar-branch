// app/components/DevicesContextWrapper.js
"use client"; // This ensures it's only executed on the client side

import { DevicesProvider } from "@/app/context/deviceContext"; // Import the context provider

export const DevicesContextWrapper = ({ children }) => {
  return <DevicesProvider>{children}</DevicesProvider>;
};
