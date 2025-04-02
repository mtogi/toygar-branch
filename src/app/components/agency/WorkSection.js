import Image from "next/image";
import Link from "next/link";

export default function WorkSection() {
  return (
    <section id="work" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">Portfolio</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Work</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We&apos;ve had the pleasure of working with some amazing clients. Here&apos;s a selection of our recent projects.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-12">
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-[4/3] w-full bg-gray-200">
              <Image
                src="/images/work/project1.jpg"
                alt="Modern Minimalist Website"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="#"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
              >
                View Project
              </Link>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Modern Minimalist Website</h3>
              <p className="text-sm text-gray-500">Brand Identity, Web Design</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-[4/3] w-full bg-gray-200">
              <Image
                src="/images/work/project2.jpg"
                alt="E-commerce Platform"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="#"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
              >
                View Project
              </Link>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">E-commerce Platform</h3>
              <p className="text-sm text-gray-500">Web Development, UI/UX Design</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-[4/3] w-full bg-gray-200">
              <Image
                src="/images/work/project3.jpg"
                alt="Corporate Rebrand"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="#"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
              >
                View Project
              </Link>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Corporate Rebrand</h3>
              <p className="text-sm text-gray-500">Brand Strategy, Identity Design</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-[4/3] w-full bg-gray-200">
              <Image
                src="/images/work/project4.jpg"
                alt="Mobile App Design"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="#"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
              >
                View Project
              </Link>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Mobile App Design</h3>
              <p className="text-sm text-gray-500">UI/UX Design, Mobile Development</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-[4/3] w-full bg-gray-200">
              <Image
                src="/images/work/project5.jpg"
                alt="Digital Marketing Campaign"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="#"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
              >
                View Project
              </Link>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Digital Marketing Campaign</h3>
              <p className="text-sm text-gray-500">Marketing Strategy, Content Creation</p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
            <div className="aspect-[4/3] w-full bg-gray-200">
              <Image
                src="/images/work/project6.jpg"
                alt="Social Media Management"
                width={400}
                height={300}
                className="aspect-[4/3] w-full object-cover transition-all group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Link
                href="#"
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-sm opacity-0 transition-opacity group-hover:opacity-100"
              >
                View Project
              </Link>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">Social Media Management</h3>
              <p className="text-sm text-gray-500">Content Strategy, Community Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 