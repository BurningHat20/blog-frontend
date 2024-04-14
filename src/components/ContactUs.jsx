import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function ContactUs() {
  return (
    <div id="contact" name="Contact">
      <section className="bg-gradient-to-b text-white h-auto from-black to-gray-900 via-black">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-center mb-11">Contact Us</h1>
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center mb-10 gap-5">
              <div className="w-full max-w-sm">
              <div className="flex items-center shadow-2xl cursor-pointer shadow-indigo-700 justify-between bg-gradient-to-r from-pink-400 via-blue-500 to-purple-600 rounded-xl p-4  hover:shadow-lg transition duration-300 ease-in-out">
                  <div className="flex items-center gap-3">
                    <AiFillGithub size={25} />
                    <h1 className="font-bold">Stack Spot - Frontend</h1>
                  </div>
                  <a
                    href="https://github.com/itsvanshchavda/StackSpot-Frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <div className="w-full max-w-sm">
                <div className="flex items-center cursor-pointer mt-4 shadow-2xl shadow-indigo-700 justify-between bg-gradient-to-r from-pink-400 via-blue-500 to-purple-600 rounded-xl p-4  hover:shadow-lg transition duration-300 ease-in-out">
                  <div className="flex items-center gap-3">
                    <AiFillGithub size={25} />
                    <h1 className="font-bold">Stack Spot - Backend</h1>
                  </div>
                  <a
                    href="https://github.com/itsvanshchavda/StackSpot-Backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              <p className="text-center text-gray-400 mt-5">
              Your Feedback Matters You Can Also Contribute to Our Project!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
