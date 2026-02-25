import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, TrendingUp, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ecommerce = () => {
  const solutions = [
    {
      title: "Amazon FBA",
      desc: "Comprehensive preparation and shipping services specifically designed for Amazon FBA sellers. We handle labeling, packaging, and direct shipping to Amazon fulfillment centers.",
      icon: <ShoppingBag className="h-8 w-8" />
    },
    {
      title: "CrowdFunding Logistics",
      desc: "Specialized logistics for Kickstarter and Indiegogo campaigns. We manage bulk fulfillment to backers globally, ensuring your campaign ends on a high note.",
      icon: <TrendingUp className="h-8 w-8" />
    },
    {
      title: "On Demand Logistics",
      desc: "Flexible, scalable logistics solutions that grow with your business. Pay only for what you use, with no long-term contracts required.",
      icon: <Zap className="h-8 w-8" />
    }
  ];

  return (
    <div className="bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-[#0B1F3B] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">E-Commerce Solutions</h1>
          <p className="text-xl md:text-3xl text-white font-semibold tracking-tight max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap">
            Tailored solutions for modern online businesses.
          </p>
        </div>
      </div>

      {/* Solutions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((sol, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="w-16 h-16 bg-[#EBF2FA] rounded-xl flex items-center justify-center text-[#2F5D9F] mb-6">
                {sol.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#0B1F3B] mb-4">{sol.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                {sol.desc}
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-[#F47B20] font-semibold hover:text-[#d66a1a] transition-colors mt-auto"
              >
                Get Started <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Highlight */}
      <div className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img 
                src="/public/img/warehouse.jpg" 
                alt="E-commerce Fulfillment" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#0B1F3B] mb-6">Why Choose Our E-Commerce Solutions?</h2>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#EBF2FA] flex items-center justify-center text-[#2F5D9F] flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B]">Speed to Market</h4>
                    <p className="text-gray-600 text-sm">Rapid processing times to ensure your customers get their orders fast.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#EBF2FA] flex items-center justify-center text-[#2F5D9F] flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B]">Integration Ready</h4>
                    <p className="text-gray-600 text-sm">Seamlessly connects with major platforms like Shopify, Amazon, and WooCommerce.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#EBF2FA] flex items-center justify-center text-[#2F5D9F] flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-bold text-[#0B1F3B]">Cost Effective</h4>
                    <p className="text-gray-600 text-sm">Volume-based discounts and optimized shipping routes to save you money.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
