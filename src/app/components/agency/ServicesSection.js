export default function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Services</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">What We Do</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We specialize in creating digital experiences that resonate with your audience. From branding and design to development and marketing, we&apos;ve got you covered.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:shadow-lg">
            <div className="rounded-full bg-gray-100 p-2">
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
                className="h-6 w-6"
              >
                <path d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5"></path>
                <path d="M18 12h-2"></path>
                <path d="M11 12H9"></path>
                <path d="M20 22l-5-5"></path>
                <path d="M15 22l5-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Web Design</h3>
            <p className="text-sm text-gray-500 text-center">
              We create beautiful, responsive websites that engage users and drive conversions.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:shadow-lg">
            <div className="rounded-full bg-gray-100 p-2">
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
                className="h-6 w-6"
              >
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Brand Strategy</h3>
            <p className="text-sm text-gray-500 text-center">
              We help you define your brand identity and develop strategies for growth.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:shadow-lg">
            <div className="rounded-full bg-gray-100 p-2">
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
                className="h-6 w-6"
              >
                <polyline points="16 3 21 3 21 8"></polyline>
                <line x1="4" y1="20" x2="21" y2="3"></line>
                <polyline points="21 16 21 21 16 21"></polyline>
                <line x1="15" y1="15" x2="21" y2="21"></line>
                <line x1="4" y1="4" x2="9" y2="9"></line>
              </svg>
            </div>
            <h3 className="text-xl font-bold">UI/UX Design</h3>
            <p className="text-sm text-gray-500 text-center">
              We craft intuitive interfaces and streamlined user experiences for digital products.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:shadow-lg">
            <div className="rounded-full bg-gray-100 p-2">
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
                className="h-6 w-6"
              >
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Digital Marketing</h3>
            <p className="text-sm text-gray-500 text-center">
              We drive growth through strategic digital marketing campaigns and SEO optimization.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:shadow-lg">
            <div className="rounded-full bg-gray-100 p-2">
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
                className="h-6 w-6"
              >
                <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
                <path d="M7 21h10"></path>
                <path d="M12 3v18"></path>
                <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Content Creation</h3>
            <p className="text-sm text-gray-500 text-center">
              We develop engaging content that tells your story and connects with your audience.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:shadow-lg">
            <div className="rounded-full bg-gray-100 p-2">
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
                className="h-6 w-6"
              >
                <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                <rect width="10" height="10" x="7" y="7" rx="2"></rect>
              </svg>
            </div>
            <h3 className="text-xl font-bold">Web Development</h3>
            <p className="text-sm text-gray-500 text-center">
              We build robust, scalable applications using the latest technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 