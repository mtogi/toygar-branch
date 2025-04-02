import SessionProvider from "./components/SessionProvider";
import connectToDatabase from "@/lib/mongodb";
import { DevicesContextWrapper } from "./components/context/deviceContextWrapper";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "DataSense | IoT Data Collection & Analysis",
  description: "Real-time environmental monitoring with Raspberry Pi sensors",
  generator: "Next.js"
};

export default async function RootLayout({ children }) {
  await connectToDatabase();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <SessionProvider>
            <DevicesContextWrapper>
              {children}
            </DevicesContextWrapper>
          </SessionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
