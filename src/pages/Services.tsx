import React from 'react';
import { motion } from 'motion/react';
import { Warehouse, Plane, Truck, Package, Anchor, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Accordion03 } from '@/components/ui/accordion-03';

const Services = () => {
  const categories = [
    {
      id: 1,
      title: "Warehousing & Fulfillment",
      purpose: "Storage and preparation before shipping.",
      icon: <Warehouse className="h-10 w-10" />,
      items: [
        "Hong Kong Smart Warehouse",
        "Overseas Warehouse",
        "Amazon FBA Preparation"
      ]
    },
    {
      id: 2,
      title: "International Shipping Solutions",
      purpose: "Core cross-border transportation.",
      icon: <Plane className="h-10 w-10" />,
      items: [
        "International Parcel Shipping",
        "Air Freight Services",
        "Ocean Freight Service"
      ]
    },
    {
      id: 3,
      title: "Express & Courier Partnerships",
      purpose: "Fast global delivery through major carriers.",
      icon: <Truck className="h-10 w-10" />,
      items: [
        "DHL Courier",
        "FedEx Courier",
        "UPS Courier"
      ]
    }
  ];

  return (
    <div className="bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-[#0B1F3B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-3xl text-white font-semibold tracking-tight max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap">
            Categorized logistics offerings grouped by business function for clarity and credibility.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        

        {/* Designer Spotlight (Accordion Demo) */}
        <div className="py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0B1F3B] mb-4">Our Services</h2>
          </div>
          <Accordion03 />
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0B1F3B] mb-6">Need a specialized solution?</h2>
          <p className="text-gray-600 mb-8">
            Check out our E-Commerce specific solutions tailored for online sellers.
          </p>
          <Link 
            to="/ecommerce" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#2F5D9F] text-white font-medium rounded-md hover:bg-[#1e4072] transition-colors"
          >
            View E-Commerce Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
