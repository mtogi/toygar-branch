"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Services() {
  return (
    <div id="services" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2 
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            What we can do for you
          </motion.p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div 
            className="flex flex-col gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
                    <path d="M19 6a9.87 9.87 0 0 1 0 12" />
                    <path d="M5 6a9.87 9.87 0 0 0 0 12" />
                    <path d="M12 2a9.87 9.87 0 0 1 0 20" />
                    <path d="M12 2a9.87 9.87 0 0 0 0 20" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Environmental Monitoring</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Track temperature, humidity, air quality metrics with custom Raspberry Pi sensor networks for homes and businesses.
              </p>
            </div>
            
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M3 9h18" />
                    <path d="M3 15h18" />
                    <path d="M9 3v18" />
                    <path d="M15 3v18" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Data Visualization</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Custom dashboards and reporting tools that transform complex sensor data into actionable insights with interactive charts and alerts.
              </p>
            </div>
            
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50 text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M3 8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                    <path d="M7 8h10" />
                    <path d="M7 12h10" />
                    <path d="M7 16h5" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">IoT Hardware Solutions</h3>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Custom IoT sensor design and implementation using Raspberry Pi, Arduino, and other microcontrollers for your specific monitoring needs.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative rounded-xl overflow-hidden flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src="/image1.jpg"
              alt="IoT Development Environment"
              className="object-cover w-full h-full rounded-xl shadow-lg"
              style={{ maxHeight: '600px' }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

const services = [
  {
    title: "Environmental Monitoring",
    description: "Real-time tracking of temperature, humidity, and air quality metrics with custom Raspberry Pi sensor networks for homes and businesses.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M12 2a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5a1.5 1.5 0 0 0-.32-.87 1.5 1.5 0 0 1-.32-.88c0-.83.67-1.5 1.5-1.5h1.5a4.5 4.5 0 0 0 0-9h-.5a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 0-1.5-1.5H8a4.5 4.5 0 0 0-4.5 4.5c0 .91.26 1.77.71 2.48" />
        <path d="M9.5 10.5V10a2 2 0 0 1 2-2h.5" />
        <path d="M16 18a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3z" />
      </svg>
    ),
  },
  {
    title: "Data Visualization",
    description: "Custom dashboards and reporting tools that transform complex sensor data into actionable insights with interactive charts and alerts.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44" />
        <path d="M5.5 2a2.5 2.5 0 0 0-2.5 2.5v15a2.5 2.5 0 0 0 5 0v-15A2.5 2.5 0 0 0 5.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5" />
        <path d="M18.5 2a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-5 0v-15A2.5 2.5 0 0 1 18.5 2Z" />
      </svg>
    ),
  },
  {
    title: "IoT Hardware Solutions",
    description: "Custom IoT sensor device design and implementation using Raspberry Pi, Arduino, and other microcontrollers for your specific monitoring needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M8 10h.01" />
        <path d="M16 10h.01" />
        <path d="M12 14h.01" />
        <path d="M8 14h.01" />
        <path d="M16 14h.01" />
      </svg>
    ),
  },
  {
    title: "Technical Workshops",
    description: "Educational sessions on IoT implementation, sensor calibration, and data analysis techniques for teams and organizations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "Cloud Integration",
    description: "Seamless connection of your IoT sensors to cloud platforms for data storage, analysis, and remote access from anywhere in the world.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    ),
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing technical support, device maintenance, and software updates to ensure your IoT monitoring system runs reliably 24/7.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10">
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" x2="12.01" y1="17" y2="17" />
      </svg>
    ),
  },
] 