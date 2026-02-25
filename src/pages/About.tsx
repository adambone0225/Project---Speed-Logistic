import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Users, Target, ShieldCheck } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#F7F9FC]">
      {/* Header */}
      <div 
        className="relative bg-cover bg-center py-32 md:py-48 flex flex-col items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 31, 59, 0.75), rgba(11, 31, 59, 0.85)), url('https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2000&auto=format&fit=crop')` 
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full flex flex-col items-center">
          
          {/* Heading with flanking lines */}
          <div className="flex items-center justify-center w-full mb-10">
            <div className="h-[2px] bg-white flex-grow max-w-[80px] md:max-w-[150px] opacity-80"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white px-6 md:px-10 tracking-wider uppercase">About Us</h1>
            <div className="h-[2px] bg-white flex-grow max-w-[80px] md:max-w-[150px] opacity-80"></div>
          </div>

          {/* Body Text */}
          <div className="text-lg md:text-xl text-white font-light max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap">
Speed Logistics offers high-standard domestic delivery services, with cutting-edge route planning technology and real-time tracking data. We guarantee a high efficiency, low cost and reliable delivery services.

Our Standard Service guarantee parcels arrive within 3 business days.
          </div>
        </div>

        {/* Footer Anchor */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer">
          <span className="text-white text-xs font-medium tracking-[0.2em] uppercase mb-3 opacity-80 hover:opacity-100 transition-opacity">Details</span>
          <div className="w-[1px] h-10 bg-white opacity-50"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
      
        {/* Mission & Problem */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#F47B20]"
          >
            <div className="flex items-center gap-3 mb-6">
              <Target className="h-8 w-8 text-[#F47B20]" />
              <h3 className="text-2xl font-bold text-[#0B1F3B]">The Problem</h3>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                Unreliable shipping timelines
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                Poor warehouse coordination
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                Lack of real-time tracking
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 flex-shrink-0"></span>
                Unclear international logistics processes
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-[#2F5D9F]"
          >
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-8 w-8 text-[#2F5D9F]" />
              <h3 className="text-2xl font-bold text-[#0B1F3B]">The Mission</h3>
            </div>
            <p className="text-gray-600 mb-4">Provide predictable, professional, and efficient logistics with:</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#2F5D9F] mt-0.5 flex-shrink-0" />
                3-business-day standard delivery promise
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#2F5D9F] mt-0.5 flex-shrink-0" />
                Smart warehouse operations
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#2F5D9F] mt-0.5 flex-shrink-0" />
                Integrated global shipping
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-[#2F5D9F] mt-0.5 flex-shrink-0" />
                Clear service structure
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Target Audience */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0B1F3B] mb-10 text-center">Who We Serve</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Amazon FBA Sellers",
              "Shopify / DTC Brands",
              "Cross-border Traders",
              "SME Import/Export Merchants"
            ].map((persona, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center shadow-sm border border-gray-100 hover:border-[#2F5D9F] transition-colors">
                <div className="w-12 h-12 bg-[#EBF2FA] rounded-full flex items-center justify-center mx-auto mb-4 text-[#0B1F3B]">
                  <Users className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-[#0B1F3B]">{persona}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
