"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const DevicesContext = createContext();

export const useDevices = () => useContext(DevicesContext);

export const DevicesProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();

  // Fetch devices only when the user is logged in and session is available
  const fetchDevices = async () => {
    setIsLoading(true); // Set loading state

    try {
      const response = await fetch("/api/devices");
      if (!response.ok) {
        throw new Error("Failed to fetch devices");
      }

      const data = await response.json();
      setDevices(data.userDevices); // Set the devices from the response
    } catch (error) {
      console.error("Error fetching devices:", error);
    } finally {
      setIsLoading(false); // Set loading to false once the fetch is complete
    }
  };

  // Only fetch devices when session is available (and session is not loading)
  useEffect(() => {
    if (status === "authenticated") {
      fetchDevices();
    }
  }, [status]); // Dependency array makes sure it runs when `status` changes

  return (
    <DevicesContext.Provider value={{ devices, setDevices, isLoading }}>
      {children}
    </DevicesContext.Provider>
  );
};
