import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="w-full h-screen rounded-3xl bg-[url('/HeroBG.png')] bg-cover flex items-center justify-center bg-center md:w-[90%] md:h-[90%] mx-auto overflow-clip">
      <div
        className="absolute top-50 text-7xl lg:text-9xl flex flex-col items-center gap-6 lg:gap-0
        justify-center font-bold text-[#00373E] text-center"
        style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
      >
       <span >
        Support for Your
       </span>
       
      <span className="">
         Mental Well-being
      </span>
      <p className="text-lg font-normal md:text-2xl ">
        Connect with licensed therapists, counselors,
      </p>
      <p className="text-lg font-normal md:text-2xl ">
         and wellness coaches to support your journey.
      </p>
      <button className="rounded-full mt-10 text-white text-lg font-bold p-4 bg-[#00373E] w-50 h-14 hover:scale-110 cursor-pointer flex justify-center items-center">
        Get Started

      </button>
      </div>
      {/* <img src="/Button.png">
      </img> */}
      
    </section>
  );
};

export default Hero;
