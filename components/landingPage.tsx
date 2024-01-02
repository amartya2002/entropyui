import React from "react";
import Link from "next/link";

export default function landingPage() {
  return (
    <section className="relative overflow-hidden before:absolute before:top-0 dark:before:-top-4 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]">
      <div className="mx-auto max-w-7xl pt-24  ">
        <div className="px-8  md:px-12 lg:px-32 ">
          {/* banner */}
          {/* <div className="flex justify-center mb-6">
            <a
              className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-xs text-gray-600 p-2 px-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400"
              href="#"
            >
              Explore the Capital Product
              <span className="flex items-center gap-x-1">
                <span className="border-s border-gray-200 text-blue-600 ps-2 dark:text-blue-500">
                  Explore
                </span>
                <svg
                  className="flex-shrink-0 w-4 h-4 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div> */}

          <div className="mb-10 text-center">
            <h1 className="text-4xl leading-tight tracking-tighter text-gray-800 dark:text-zinc-200 sm:text-5xl md:text-6xl lg:text-7xl">
              Craft stunning pages in a snap, <br className="hidden sm:block" />
              <span className="from-zinc-700  to-zinc-200 text-blue-500 dark:bg-gradient-to-t dark:bg-clip-text dark:text-transparent lg:block">
                {" "}
                with Entropy UI.
              </span>
            </h1>

            <h2 className="mt-4 text-zinc-500 dark:text-zinc-400 md:text-lg">
              Elevate your web designs with our
              <span className="sm:block">
                {" "}
                 minimal and responsive Tailwind CSS components.{" "}
              </span>
            </h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
              <Link
                className="flex h-10 w-full items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-600 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-200 md:w-auto"
                href="/Docs/introduction"
              >
                Get Started
              </Link>
              <Link href="/Docs/avatars" className="flex h-10 w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-blue-500 transition-all hover:text-blue-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700 md:w-auto md:font-semibold">
                {" "}
                Explore Components
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
