import React from "react";
import Logo from "../assets/spot-stack.png";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <Link
              to={"Home"}
              smooth={true}
              duration={500}
              className="inline-block rounded-full cursor-pointer bg-gray-100 p-2 text-black shadow transition hover:bg-gray-900 sm:p-3 lg:p-4"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center items-center gap-4  lg:justify-start">
                <img className="h-10" src={Logo} alt="Stack Spot Logo" />
                <h2 className="text-2xl font-bold text-center">Stack Spot</h2>
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left">
                Stay connected with us for the latest updates and news. Explore
                our blog for insightful articles and helpful tips.
              </p>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              <li>
                <Link
                  className="text-gray-700 cursor-pointer transition hover:text-gray-700/75"
                  to="Home"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  Home{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 cursor-pointer transition hover:text-gray-700/75"
                  to="AboutUs"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  About Us{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 cursor-pointer transition hover:text-gray-700/75"
                  to="team"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  Team{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-gray-700 cursor-pointer transition hover:text-gray-700/75"
                  to="contact"
                  smooth={true}
                  duration={500}
                >
                  {" "}
                  Contribute{" "}
                </Link>
              </li>
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
            Copyright &copy; 2024. All rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
