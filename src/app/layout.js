import SessionProvider from "./components/SessionProvider";
import connectToDatabase from "@/lib/mongodb";
import Navbar from "./components/navbar/navbar";
import { DevicesContextWrapper } from "./components/context/deviceContextWrapper";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({ children }) {
  await connectToDatabase();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <DevicesContextWrapper>
            <Navbar />
            {children}
          </DevicesContextWrapper>
        </SessionProvider>
      </body>
    </html>
  );
}
