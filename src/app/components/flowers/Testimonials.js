"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.span 
            className="text-sm text-gray-500 tracking-wider uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What Our Clients Say
          </motion.h2>
        </div>
        
        <div className="relative mx-auto max-w-3xl">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={`text-center px-8 ${activeIndex === index ? "block" : "hidden"}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <p className="text-lg md:text-xl text-gray-600 mb-8">{testimonial.quote}</p>
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeIndex === index ? "bg-gray-900" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote: "DataSense's IoT platform has transformed how we approach environmental monitoring in our smart buildings. The real-time analytics have resulted in a 30% reduction in energy costs across our portfolio.",
    name: "M. Toygar Baykal",
    role: "Chief Innovation Officer, TechVision Enterprises",
    avatar: "/placeholder-user.jpg"
  },
  {
    quote: "The custom sensor network designed by DataSense revolutionized our agricultural operations. Their attention to detail and innovative approach increased our yield predictions accuracy by 40%.",
    name: "Jon Pablo",
    role: "Director of Agricultural Technology, GreenHarvest Solutions",
    avatar: "/placeholder-user.jpg"
  },
  {
    quote: "Implementing DataSense's monitoring system in our manufacturing facilities provided unprecedented visibility into our operations. Their expertise in both hardware and data visualization is unmatched in the industry.",
    name: "Rutarj Mrushad Shah",
    role: "VP of Operations, Precision Manufacturing Global",
    avatar: "/placeholder-user.jpg"
  },
  {
    quote: "As a research institution, data integrity is paramount. DataSense delivered a solution that not only captures environmental metrics with exceptional accuracy but presents them in an intuitive, actionable format.",
    name: "Sujung Song",
    role: "Research Director, Advanced Environmental Institute",
    avatar: "/placeholder-user.jpg"
  },
  {
    quote: "The scalability of DataSense's platform has been crucial as we've expanded our smart city initiatives. Their system effortlessly handles thousands of IoT endpoints while maintaining responsive performance.",
    name: "Henly Su",
    role: "CTO, Urban Intelligence Systems",
    avatar: "/placeholder-user.jpg"
  }
] 