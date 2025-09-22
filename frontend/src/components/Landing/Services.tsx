"use client";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="flex flex-col items-center w-full justify-center py-24 md:py-32 bg-gray-50 min-h-screen">
      <div className="flex flex-col w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <p className="text-base font-semibold text-gray-600 mb-4 tracking-wider uppercase">
            SERVICES
          </p>
          <h1
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight"
          >
            Your Path to
            <br />
            Well-being
          </h1>
          <p className="text-gray-600 text-xl md:text-2xl max-w-2xl leading-relaxed">
            Discover expert guidance for a healthier mind and balanced life through our comprehensive wellness services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
        >
          {/* Card Variants */}
          {[
            {
              title: "Mindfulness & Meditation",
              desc: "Guided meditation sessions and stress management techniques to help you find inner peace and mental clarity.",
              bg: "bg-[url('/Service1.png')] bg-cover bg-center",
              button: "Learn More",
            },
            {
              title: "One-on-One Therapy",
              desc: "Virtual and in-person therapy sessions with licensed professionals who understand your unique needs.",
              bg: "bg-white border border-gray-200",
              button: "Learn More",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.03 }}
              className={`${service.bg} rounded-4xl p-12 lg:p-16 relative overflow-hidden min-h-[400px] lg:min-h-[450px] group`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-8 text-base lg:text-lg leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <button className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-400 cursor-pointer transition-colors border border-gray-300 text-lg w-fit">
                  {service.button}
                </button>
              </div>
            </motion.div>
          ))}

          {/* Wellness Coaching - Full Width */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.97 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
            }}
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-2 bg-[url('/Service3.png')] bg-white rounded-4xl p-12 lg:p-16 border border-gray-200 relative overflow-hidden min-h-[350px] lg:min-h-[400px] group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between h-full">
              <div className="lg:w-2/3">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                  Wellness Coaching
                </h3>
                <p className="text-slate-600 mb-4 text-base lg:text-lg leading-relaxed">
                  Personalized guidance to help you build healthier habits, manage stress, and achieve balance in all areas of your life.
                </p>
                <p className="text-slate-600 mb-8 text-base lg:text-lg leading-relaxed">
                  Our wellness coaches support you in creating sustainable routines for mental, emotional, and physical well-being through evidence-based practices.
                </p>
                <button className="bg-slate-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-700 transition-colors text-lg cursor-pointer">
                  Learn More
                </button>
              </div>
              <div className="lg:w-1/3 flex justify-center lg:justify-end mt-8 lg:mt-0">
                {/* Optional image or graphic */}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Services Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-gray-500 text-lg mb-8">
            Explore our full range of mental health and wellness services
          </p>
          <button className="bg-slate-800 text-white px-10 py-4 rounded-full font-semibold hover:bg-slate-700 transition-colors text-lg cursor-pointer">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
