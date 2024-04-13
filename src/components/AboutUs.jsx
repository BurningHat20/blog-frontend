import React from "react";
import { Button } from "@material-tailwind/react";
import {
  Blocks,
  Lightbulb,
  LineChart,
  MonitorSmartphone,
  Palette,
  Wrench,
} from "lucide-react";
function AboutUs() {

  const handleRedirect = () => {
    window.location.href = "https://stack-spot.vercel.app/";
  }
  return (
    <section
      id="AboutUs"
      className="flex pt-10 justify-center bg-gradient-to-b from-black to-gray-900 via-black items-center h-screen"
    >
      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
          <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
            <h2 className="text-3xl text-white font-bold  sm:text-4xl">
              What makes us special
            </h2>
            <p className="mt-4 text-gray-600">
              Discover Stack Spot: where seamless design meets powerful
              customization. With unparalleled responsiveness, integration with
              your favorite platforms, and robust analytics, we're here to
              elevate your blogging experience.
            </p>


            <div onClick={handleRedirect} >
              <Button

                color="white"
                className="w-full mt-8 font-bold px-4 text-sm md:w-[12rem]"
              >
                Get start today
              </Button>
            </div>

          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <Lightbulb className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold text-white">Simplicity</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Streamlined design for effortless navigation.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <MonitorSmartphone className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold  text-white">Responsiveness</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Optimal viewing on any device, anywhere.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <Wrench className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold  text-white">Flexibility</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Tailor your blog to your unique style.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <Blocks className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold  text-white">Integration</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Seamlessly connect with your favorite platforms.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <Palette className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold  text-white">Customization</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Craft your blog to reflect your personality.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
              href="#"
            >
              <span className="inline-block rounded-lg bg-gray-50 p-3">
                <LineChart className="h-6 w-6" />
              </span>

              <h2 className="mt-2 font-bold  text-white">Analytics</h2>

              <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                Gain insights to refine your content strategy.
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
