"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { data: session, status } = useSession()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut({ redirect: false })
    router.push("/login")
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">DataSense</span>
            <Image
              className="h-8 w-auto"
              src="/logo.png"
              alt="DataSense Logo"
              width={32}
              height={32}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setIsMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Home
          </Link>
          <Link href="#services" className="text-sm font-semibold leading-6 text-gray-900">
            Services
          </Link>
          {status === "authenticated" && (
            <>
              <Link href="/dashboard" className="text-sm font-semibold leading-6 text-gray-900">
                Dashboard
              </Link>
              <Link href="/devices" className="text-sm font-semibold leading-6 text-gray-900">
                Devices
              </Link>
            </>
          )}
          <Link href="/faq" className="text-sm font-semibold leading-6 text-gray-900">
            FAQ
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {status === "authenticated" ? (
            <div className="flex items-center gap-4">
              <button
                onClick={handleSignOut}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Sign out <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          ) : (
            <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">DataSense</span>
                <Image
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="DataSense Logo"
                  width={32}
                  height={32}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#services"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  {status === "authenticated" && (
                    <>
                      <Link
                        href="/dashboard"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <Link
                        href="/devices"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Devices
                      </Link>
                    </>
                  )}
                  <Link
                    href="/faq"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQ
                  </Link>
                </div>
                <div className="py-6">
                  {status === "authenticated" ? (
                    <>
                      <button
                        onClick={() => {
                          handleSignOut();
                          setIsMenuOpen(false);
                        }}
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 w-full text-left"
                      >
                        Sign out
                      </button>
                    </>
                  ) : (
                    <Link
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log in
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
} 