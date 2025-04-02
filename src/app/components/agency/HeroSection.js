import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              We Create Digital Experiences
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
              A creative agency that focuses on design, development, and strategy for brands that want to stand out.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href="#work"
              className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              Our Work
            </Link>
            <Link
              href="#contact"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 