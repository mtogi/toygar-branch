import Link from "next/link"
import Header from "./components/flowers/Header"
import Hero from "./components/flowers/Hero"
import Services from "./components/flowers/Services"
import Testimonials from "./components/flowers/Testimonials"
import Contact from "./components/flowers/Contact"
import Footer from "./components/flowers/Footer"

export const metadata = {
  title: "DataSense | IoT Data Collection & Analysis",
  description: "Advanced IoT solution for real-time environmental monitoring using Raspberry Pi sensors and data analytics.",
}

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
