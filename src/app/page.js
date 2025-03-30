"use client";

import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

export default function LandingPage() {
  const { data: session, status } = useSession();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Reduced padding and improved background */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-[#E6F0FF] to-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
                <span className="text-[#1456BC]">Data</span>
                <span className="text-[#FF8C42]">Sense</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-lg">
                Professional data visualization and analytics platform for your IoT devices
              </p>
              <div className="flex flex-wrap gap-4">
                {status === "authenticated" ? (
                  <Link 
                    href="/dashboard" 
                    className="px-6 py-3 bg-[#1456BC] text-white font-medium rounded-md hover:bg-blue-700 transition shadow-md"
                  >
                    Go to Dashboard
                  </Link>
                ) : (
                  <>
                    <Link 
                      href="/login" 
                      className="px-6 py-3 bg-[#1456BC] text-white font-medium rounded-md hover:bg-blue-700 transition shadow-md"
                    >
                      Sign In
                    </Link>
                    <Link 
                      href="/register" 
                      className="px-6 py-3 border border-[#1456BC] text-[#1456BC] font-medium rounded-md hover:bg-blue-50 transition"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                {/* Updated illustration with cleaner design */}
                <div className="w-full h-64 md:h-80 bg-[#E6F0FF] rounded-lg shadow-lg overflow-hidden relative">
                  {/* Logo visualization - similar to what's in the image */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                    {/* Blue node 1 */}
                    <circle cx="120" cy="80" r="30" fill="#1456BC" />
                    {/* Blue node 2 */}
                    <circle cx="200" cy="150" r="15" fill="#1456BC" />
                    {/* Blue node 3 */}
                    <circle cx="120" cy="220" r="30" fill="#1456BC" />
                    {/* Orange node 1 */}
                    <circle cx="280" cy="80" r="25" fill="#FF8C42" />
                    {/* Orange node 2 */}
                    <circle cx="280" cy="220" r="25" fill="#FF8C42" />
                    {/* Orange node 3 */}
                    <circle cx="60" cy="150" r="20" fill="#FF8C42" opacity="0.7" />
                    
                    {/* Connecting lines */}
                    <line x1="120" y1="80" x2="200" y2="150" stroke="#1456BC" strokeWidth="6" />
                    <line x1="120" y1="220" x2="200" y2="150" stroke="#1456BC" strokeWidth="6" />
                    <line x1="200" y1="150" x2="280" y2="80" stroke="#FF8C42" strokeWidth="6" />
                    <line x1="200" y1="150" x2="280" y2="220" stroke="#FF8C42" strokeWidth="6" />
                    <line x1="60" y1="150" x2="200" y2="150" stroke="#FF8C42" strokeWidth="3" strokeDasharray="5,5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Updated styling */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
          
          {/* Image and Features */}
          <div className="flex flex-col lg:flex-row gap-10 items-center mb-16">
            {/* Left Side - Image */}
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/image1.jpg" 
                  alt="IoT Device with DataSense" 
                  width={800} 
                  height={533}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Real-world Device Integration</h3>
                  <p>Connect any IoT sensor to our platform</p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Features */}
            <div className="lg:w-1/2 grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1456BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-time Analytics</h3>
                <p className="text-gray-700">Monitor your IoT devices with real-time data visualization and analytics.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1456BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Secure Access</h3>
                <p className="text-gray-700">Multiple authentication options with secure device management.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1456BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Advanced Insights</h3>
                <p className="text-gray-700">Gain valuable insights from your data with our professional analytics tools.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-[#E6F0FF] rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1456BC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Easy Configuration</h3>
                <p className="text-gray-700">Set up your devices and dashboards with our intuitive configuration tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced with more vibrant gradient */}
      <section className="py-16 bg-gradient-to-r from-[#1456BC] via-[#1e62c8] to-[#1456BC] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl mb-8 max-w-xl mx-auto">Join thousands of users who are already transforming their IoT data into actionable insights.</p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/register" 
              className="px-6 py-3 bg-[#FF8C42] text-white font-medium rounded-md hover:bg-orange-500 transition shadow-md"
            >
              Create Account
            </Link>
            <Link 
              href="/about" 
              className="px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-[#1456BC] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Footer - Updated with logo */}
      <footer className="py-8 bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="DataSense Logo"
                width={30}
                height={30}
                className="mr-2"
              />
              <h2 className="text-2xl font-bold">
                <span className="text-[#1456BC]">Data</span>
                <span className="text-[#FF8C42]">Sense</span>
              </h2>
            </div>
            <p className="mb-4">&copy; {new Date().getFullYear()} DataSense. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
