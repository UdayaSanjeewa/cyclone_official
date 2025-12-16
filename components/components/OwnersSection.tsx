import React from 'react'

/* Images */
import OwnersIMGOne from "@/public/images/owners/OwnersIMGOne.jpeg";
import OwnersIMGTwo from "@/public/images/owners/OwnersIMGTwo.jpeg";
import OwnersIMGThree from "@/public/images/owners/OwnersIMGThree.jpeg";

function OwnersSection() {
  return (
        <section className="relative flex flex-col items-center justify-center py-16 md:py-24 lg:py-28 bg-gradient-to-br from-[#f5f7fa] to-[#e4ebf5] overflow-hidden">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 left-0 w-[200px] md:w-[280px] h-[200px] md:h-[280px] bg-[#00329533] rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[200px] md:w-[280px] h-[200px] md:h-[280px] bg-[#00194633] rounded-full blur-3xl"></div>

      {/* Section Title */}
      <h2 className="relative text-[30px] sm:text-[36px] md:text-[42px] lg:text-[52px] font-bold text-[#001946] mb-12 md:mb-16 tracking-wide text-center leading-tight px-4">
        Meet the <span className="text-[#003295]">Owners</span>
        <div className="w-20 md:w-24 h-[3px] bg-[#003295] mx-auto mt-4 rounded-full"></div>
      </h2>

      {/* Owners Card */}
      <div className="relative bg-white/80 backdrop-blur-md border border-[#00329522] shadow-2xl rounded-2xl px-6 sm:px-8 md:px-10 py-10 sm:py-12 flex flex-col justify-center gap-8 md:gap-10 hover:shadow-[#00329533] transition-all duration-500 xl:w-[650px] lg:w-[550px] w-[90%] max-w-[700px]">
        {/* Owner 1 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 gap-4 text-center sm:text-left hover:scale-[1.02] transition-transform duration-300">
          <img
            src={OwnersIMGThree.src}
            alt="Mr. John"
            className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] rounded-full object-cover border-4 border-[#00329522] shadow-md"
          />
          <div>
            <p className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold text-[#001946]">
              Mr. John
            </p>
            <p className="text-[#555] text-[15px] sm:text-[16px] mt-1">
              Co-Founder & Managing Director
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00329522] to-transparent"></div>

        {/* Owner 2 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-6 gap-4 text-center sm:text-left hover:scale-[1.02] transition-transform duration-300">
          <img
            src={OwnersIMGTwo.src}
            alt="Mr. Doe"
            className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] rounded-full object-cover border-4 border-[#00329522] shadow-md"
          />
          <div>
            <p className="text-[20px] sm:text-[22px] md:text-[26px] font-semibold text-[#001946]">
              Mr. Doe
            </p>
            <p className="text-[#555] text-[15px] sm:text-[16px] mt-1">
              Co-Founder & Operations Head
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Image (soft fade) */}
      <img
        src={OwnersIMGOne.src}
        alt="Owners Group"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 w-full max-w-[1100px] object-cover select-none pointer-events-none"
      />
    </section>
  )
}

export default OwnersSection