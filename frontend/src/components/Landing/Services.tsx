"use client";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="flex flex-col items-center w-full justify-center py-24 md:py-32 bg-[#F7F6F4] min-h-screen">
      <div className="flex flex-col w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20"
        >
          <p className="text-base font-semibold text-[#00373E] mb-4 tracking-wider uppercase">
            COMPREHENSIVE SERVICES
          </p>
          <h1
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#00373E] mb-6 leading-tight"
          >
            Complete Mental Health
            <br />
            Support System
          </h1>
          <p className="text-slate-600 text-xl md:text-2xl max-w-3xl leading-relaxed">
            24/7 AI-powered support, professional counseling, and comprehensive
            wellness services designed specifically for students.
          </p>
        </motion.div>

        {/* AI-Powered Mental Health Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#00373E] rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <h2
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                className="text-3xl lg:text-4xl font-bold text-[#00373E]"
              >
                AI-Powered Mental Health Support
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "24/7 intelligent chatbot for immediate crisis intervention",
                "Personalized coping strategies based on individual assessment",
                "Real-time mood tracking and pattern analysis",
                "Automated escalation to human counselors when needed",
              ].map((feature, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-2 h-2 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm lg:text-base">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {/* Anonymous Counseling Services */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              className="text-2xl lg:text-3xl font-bold text-[#00373E] mb-4"
            >
              Anonymous Counseling Services
            </h3>
            <div className="space-y-3 mb-6">
              {[
                "Confidential booking system with complete privacy protection",
                "Video, audio, chat, and in-person session options",
                "Specialized counselors for student-specific issues",
                "Same-day crisis appointments available",
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#00373E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#004a52] transition-colors">
              Book Session
            </button>
          </motion.div>

          {/* Comprehensive Assessment Tools */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="bg-white rounded-3xl p-8 lg:p-10 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              className="text-2xl lg:text-3xl font-bold text-[#00373E] mb-4"
            >
              Comprehensive Assessment Tools
            </h3>
            <div className="space-y-3 mb-6">
              {[
                "Standardized screening (PHQ-9, GAD-7, GHQ-12) in regional languages",
                "Early detection algorithms for mental health risks",
                "Regular progress monitoring and outcome tracking",
                "Academic performance correlation analysis",
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-slate-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
            <button className="bg-[#00373E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#004a52] transition-colors">
              Take Assessment
            </button>
          </motion.div>
        </motion.div>

        {/* Specialized Support Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            className="text-3xl lg:text-4xl font-bold text-[#00373E] mb-8 text-center"
          >
            Specialized Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Academic Stress Management */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-[#00373E] mb-4">
                Academic Stress Management
              </h4>
              <div className="space-y-2">
                {[
                  "Exam anxiety intervention programs",
                  "Study-life balance coaching",
                  "Performance pressure counseling",
                  "Career guidance and placement support",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Integration Support */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-[#00373E] mb-4">
                Social Integration Support
              </h4>
              <div className="space-y-2">
                {[
                  "Peer connection facilitation programs",
                  "Social anxiety management",
                  "Relationship counseling services",
                  "Campus adjustment assistance",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Crisis Intervention Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-r from-[#00373E] to-[#004a52] rounded-3xl p-8 lg:p-12 text-white">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                <span className="text-[#00373E] font-bold text-xl">🚨</span>
              </div>
              <h2
                style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
                className="text-3xl lg:text-4xl font-bold"
              >
                Crisis Intervention Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "24/7 emergency mental health hotline",
                "Immediate professional referral system",
                "Safety planning and risk assessment",
                "Family notification protocols (when consented)",
              ].map((feature, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-white text-sm lg:text-base">{feature}</p>
                </div>
              ))}
            </div>
            <button className="bg-white text-[#00373E] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors mt-6">
              Emergency Support
            </button>
          </div>
        </motion.div>

        {/* Educational & Preventive Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            className="text-3xl lg:text-4xl font-bold text-[#00373E] mb-8 text-center"
          >
            Educational & Preventive Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mental Health Literacy Programs */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-[#00373E] mb-4">
                Mental Health Literacy Programs
              </h4>
              <div className="space-y-2 mb-4">
                {[
                  "Interactive workshops on stress management",
                  "Psychoeducational content in multiple regional languages",
                  "Mental wellness webinar series",
                  "Stigma reduction awareness campaigns",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resource Library Access */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-[#00373E] mb-4">
                Resource Library Access
              </h4>
              <div className="space-y-2 mb-4">
                {[
                  "Guided meditation and relaxation audio",
                  "Self-help video content library",
                  "Downloadable mental health guides",
                  "Evidence-based wellness exercises",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Peer Support Network */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-200 shadow-sm">
            <h2
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              className="text-3xl lg:text-4xl font-bold text-[#00373E] mb-8 text-center"
            >
              Peer Support Network
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Moderated peer support forums",
                "Trained student volunteer mentor matching",
                "Anonymous group therapy sessions",
                "Recovery story sharing platform",
              ].map((feature, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-[#00373E] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-2xl">👥</span>
                  </div>
                  <p className="text-slate-600 text-sm font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <button className="bg-[#00373E] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#004a52] transition-colors">
                Join Community
              </button>
            </div>
          </div>
        </motion.div>

        {/* Administrative & Analytics Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gray-50 rounded-3xl p-8 lg:p-12">
            <h2
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              className="text-3xl lg:text-4xl font-bold text-[#00373E] mb-8 text-center"
            >
              Administrative & Analytics Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Institutional Dashboard */}
              <div className="bg-white rounded-2xl p-6">
                <h4 className="text-lg font-bold text-[#00373E] mb-3">
                  Institutional Dashboard
                </h4>
                <div className="space-y-2">
                  {[
                    "Real-time mental health trend monitoring",
                    "Anonymous usage analytics and reporting",
                    "Risk pattern identification system",
                    "Policy recommendation generator",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-600 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration Services */}
              <div className="bg-white rounded-2xl p-6">
                <h4 className="text-lg font-bold text-[#00373E] mb-3">
                  Integration Services
                </h4>
                <div className="space-y-2">
                  {[
                    "Seamless integration with existing college systems",
                    "Academic calendar stress prediction",
                    "Hostel and campus life support coordination",
                    "Faculty and staff training programs",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <p className="text-slate-600 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cultural & Accessibility Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2
            style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
            className="text-3xl lg:text-4xl font-bold text-[#00373E] mb-8 text-center"
          >
            Cultural & Accessibility Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Regional Language Support */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-[#00373E] mb-4">
                Regional Language Support
              </h4>
              <div className="space-y-2">
                {[
                  "Counseling services in 8+ Indian languages",
                  "Culturally appropriate therapy approaches",
                  "Traditional wellness practice integration",
                  "Community-specific mental health resources",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessibility Features */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-[#00373E] mb-4">
                Accessibility Features
              </h4>
              <div className="space-y-2">
                {[
                  "Screen reader compatible interface",
                  "Visual and hearing impairment accommodations",
                  "Multiple communication format options",
                  "Low-bandwidth mobile optimization",
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[#00373E] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Value Proposition & Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-[#00373E] to-[#004a52] rounded-3xl p-8 lg:p-12 text-white">
            <h2
              style={{ fontFamily: '"Bricolage Grotesque", sans-serif' }}
              className="text-3xl lg:text-4xl font-bold mb-8 text-center"
            >
              Our Commitment to Excellence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Complete Confidentiality */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00373E] font-bold text-2xl">🔒</span>
                </div>
                <h4 className="text-xl font-bold mb-3">
                  Complete Confidentiality
                </h4>
                <div className="space-y-2 text-sm">
                  <p>Anonymous ID system protecting student identity</p>
                  <p>Encrypted data storage and transmission</p>
                  <p>HIPAA-compliant privacy standards</p>
                </div>
              </div>

              {/* Evidence-Based Approach */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00373E] font-bold text-2xl">📊</span>
                </div>
                <h4 className="text-xl font-bold mb-3">
                  Evidence-Based Approach
                </h4>
                <div className="space-y-2 text-sm">
                  <p>Clinically validated assessment tools</p>
                  <p>Research-backed intervention strategies</p>
                  <p>Regular outcome measurement</p>
                </div>
              </div>

              {/* Platform Reliability */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00373E] font-bold text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold mb-3">Platform Reliability</h4>
                <div className="space-y-2 text-sm">
                  <p>99.9% uptime guarantee</p>
                  <p>Secure cloud infrastructure</p>
                  <p>Regular security audits</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-600 text-lg mb-8">
            Ready to start your mental wellness journey?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#00373E] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#004a52] transition-colors text-lg">
              Get Started Today
            </button>
            <button className="bg-white text-[#00373E] px-10 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors text-lg border-2 border-[#00373E]">
              Schedule Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
