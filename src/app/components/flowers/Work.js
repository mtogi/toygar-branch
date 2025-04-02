"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("all")
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            className="text-sm text-gray-500 tracking-wider uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Work
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Recent Projects
          </motion.h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["all", "installations", "dashboards", "hardware"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeFilter === filter
                  ? "bg-black text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <Link 
                  href={project.link} 
                  className="text-white font-medium inline-flex items-center"
                >
                  View Project
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-4 w-4 ml-2" 
                    fill="none" 
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-md font-medium text-base text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            View All Work
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

const projects = [
  {
    title: "Smart Home System",
    description: "Complete environmental monitoring system with temperature, humidity, and air quality sensors",
    image: "/image1.jpg",
    category: "installations",
    link: "/portfolio/smart-home-system"
  },
  {
    title: "Greenhouse Monitoring",
    description: "Automated IoT solution for commercial greenhouse climate control and monitoring",
    image: "/placeholder.jpg",
    category: "installations",
    link: "/portfolio/greenhouse-monitoring"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Custom data visualization platform for enterprise sensor network management",
    image: "/placeholder.jpg",
    category: "dashboards",
    link: "/portfolio/analytics-dashboard"
  },
  {
    title: "Industrial Sensor Network",
    description: "Large-scale deployment of interconnected sensors for manufacturing facility monitoring",
    image: "/placeholder.jpg",
    category: "hardware",
    link: "/portfolio/industrial-sensors"
  },
  {
    title: "Wearable Health Monitor",
    description: "IoT-connected device for tracking vital health metrics with cloud integration",
    image: "/placeholder.jpg",
    category: "hardware",
    link: "/portfolio/health-monitor"
  },
  {
    title: "Smart City Pilot Project",
    description: "Urban environment monitoring system with air quality and traffic sensors",
    image: "/placeholder.jpg",
    category: "installations",
    link: "/portfolio/smart-city"
  }
] 