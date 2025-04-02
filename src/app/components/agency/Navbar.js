"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AgencyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white shadow-md">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Creative Studio
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="#services" className="text-sm font-medium text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="#work" className="text-sm font-medium text-gray-300 hover:text-white">
              Work
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-300 hover:text-white">
              Contact
            </Link>
            
            {/* Authenticated Links */}
            {status === "authenticated" ? (
              <>
                <Link href="/dashboard" className="text-sm font-medium text-gray-300 hover:text-white">
                  Dashboard
                </Link>
                <Link href="/devices" className="text-sm font-medium text-gray-300 hover:text-white">
                  Devices
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-sm font-medium text-gray-300 hover:text-white"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-xs font-medium text-black shadow transition-colors hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="inline-flex h-8 items-center justify-center rounded-md border border-gray-600 px-4 text-xs font-medium text-white shadow-sm transition-colors hover:bg-gray-800"
                >
                  Register
                </Link>
              </>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden rounded-md p-2 text-gray-300 hover:text-white"
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 md:px-6 py-4 space-y-3">
            <Link href="#" className="block text-sm font-medium text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="#services" className="block text-sm font-medium text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="#work" className="block text-sm font-medium text-gray-300 hover:text-white">
              Work
            </Link>
            <Link href="#contact" className="block text-sm font-medium text-gray-300 hover:text-white">
              Contact
            </Link>
            
            {/* Authenticated Links */}
            {status === "authenticated" ? (
              <>
                <Link href="/dashboard" className="block text-sm font-medium text-gray-300 hover:text-white">
                  Dashboard
                </Link>
                <Link href="/devices" className="block text-sm font-medium text-gray-300 hover:text-white">
                  Devices
                </Link>
                <button
                  onClick={handleSignOut}
                  className="block w-full text-left text-sm font-medium text-gray-300 hover:text-white"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link 
                  href="/login" 
                  className="inline-flex h-8 items-center justify-center rounded-md bg-white px-4 text-xs font-medium text-black shadow transition-colors hover:bg-gray-200"
                >
                  Login
                </Link>
                <Link 
                  href="/register" 
                  className="inline-flex h-8 items-center justify-center rounded-md border border-gray-600 px-4 text-xs font-medium text-white shadow-sm transition-colors hover:bg-gray-800"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
} 