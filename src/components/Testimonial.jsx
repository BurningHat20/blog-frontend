import React from 'react'
import vansh from '../assets/me.jpg'
import yash from '../assets/yash.jpg'

function Testimonial() {
  return (
    <div name="team" id='Team'>
      <section class="bg-gradient-to-b from-black to-indigo-900 via-black">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-40 lg:py-16">
          <h2 class="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl">

            My Team

          </h2>

          <div class="mt-8 [column-fill:_balance] sm:columns-2 sm:gap-6 lg:columns-2 lg:gap-10">
            <div class="mb-8 sm:break-inside-avoid">
              <blockquote class="rounded-lg bg-gray-900 p-6 shadow-sm sm:p-8">
                <div class="flex flex-col  items-center gap-4">
                  <img
                    alt=""
                    src={vansh}
                    class="size-40 rounded-full object-cover"
                  />

                  <div>


                    <p class="mt-0.5 text-lg font-medium text-white">
                      Vansh Chavda
                    </p>
                  </div>
                </div>

                <p class="mt-4 text-center text-gray-700">
                  Full Stack Developer
                </p>
              </blockquote>
            </div>

            <div class="mb-8 sm:break-inside-avoid">
              <blockquote class="rounded-lg bg-gray-900  p-6 shadow-sm sm:p-8">
                <div class="flex flex-col items-center gap-4">
                  <img
                    alt=""
                    src={yash}
                    class="size-40 rounded-full object-cover"
                  />

                  <div>


                    <p class="mt-0.5 text-lg font-medium text-white">
                      Yash Gohel
                    </p>
                  </div>
                </div>

                <p class="mt-4 text-center text-gray-700">
                  Full Stack Developer
                </p>
              </blockquote>
            </div>




          </div>


          

          
        </div>
      </section>
    </div>
  );
}

export default Testimonial