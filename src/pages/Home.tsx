import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Shield, Globe, TrendingUp, Box, Plane, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-[#0B1F3B] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Predictable, Professional, <span className="text-[#F47B20]">Efficient Logistics.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
              The reliable logistics backbone for growing online businesses. We promise a 3-business-day standard delivery with smart warehouse operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-[#F47B20] text-white font-semibold rounded-md hover:bg-[#d66a1a] transition-colors flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-md hover:bg-white/20 transition-colors flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-[#EBF2FA] rounded-full flex items-center justify-center text-[#2F5D9F]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3B]">3-Day Promise</h3>
                <p className="text-sm text-gray-600">Standard delivery timeline</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-[#EBF2FA] rounded-full flex items-center justify-center text-[#2F5D9F]">
                <Shield className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3B]">Secure Handling</h3>
                <p className="text-sm text-gray-600">Smart warehouse operations</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
              <div className="w-12 h-12 bg-[#EBF2FA] rounded-full flex items-center justify-center text-[#2F5D9F]">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#0B1F3B]">Global Reach</h3>
                <p className="text-sm text-gray-600">Integrated global shipping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-4">Structured Service Architecture</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Categorized logistics offerings grouped by business function for clarity and credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Box className="h-8 w-8" />,
                title: "Warehousing & Fulfillment",
                desc: "Hong Kong Smart Warehouse, Overseas Warehouse, Amazon FBA Prep.",
                link: "/services"
              },
              {
                icon: <Plane className="h-8 w-8" />,
                title: "International Shipping",
                desc: "International Parcel Shipping, Air Freight, Ocean Freight Service.",
                link: "/services"
              },
              {
                icon: <Truck className="h-8 w-8" />,
                title: "Express Partnerships",
                desc: "Fast global delivery through major carriers like DHL, FedEx, UPS.",
                link: "/services"
              },
              {
                icon: <TrendingUp className="h-8 w-8" />,
                title: "E-Commerce Solutions",
                desc: "Tailored solutions for Amazon FBA, Crowdfunding, and On-Demand.",
                link: "/ecommerce"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-[#0B1F3B] rounded-lg flex items-center justify-center text-white mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1F3B] mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.desc}</p>
                <Link to={service.link} className="text-[#2F5D9F] font-semibold text-sm hover:text-[#F47B20] flex items-center gap-1">
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0B1F3B] mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To provide predictable, professional, and efficient logistics. We address the common pain points of unreliable shipping timelines and poor warehouse coordination.
              </p>
              <ul className="space-y-4">
                {[
                  "3-business-day standard delivery promise",
                  "Smart warehouse operations",
                  "Integrated global shipping",
                  "Clear service structure"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-[#EBF2FA] flex items-center justify-center text-[#F47B20]">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about" className="text-[#2F5D9F] font-semibold hover:text-[#0B1F3B] flex items-center gap-2">
                  Read more about us <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#F47B20]/10 rounded-2xl transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1566576912906-2532944c95ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Logistics Warehouse" 
                className="relative rounded-2xl shadow-lg w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1F3B] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to streamline your logistics?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Join hundreds of e-commerce sellers who trust Speed Logistics Global for their fulfillment needs.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#F47B20] text-white font-semibold rounded-md hover:bg-[#d66a1a] transition-colors shadow-lg"
          >
            Start Shipping Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
