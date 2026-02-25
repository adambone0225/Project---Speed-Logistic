import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    company: '',
    contactName: '',
    email: '',
    serviceType: 'Warehousing',
    volume: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your inquiry. We will get back to you shortly.');
    console.log(formData);
  };

  return (
    <div className="bg-[#F7F9FC]">
      {/* Header */}
      <div className="bg-[#0B1F3B] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-3xl text-white font-semibold tracking-tight max-w-3xl mx-auto leading-relaxed whitespace-pre-wrap">
            Get in touch for business inquiries and quotes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0B1F3B] mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                Our team is ready to assist you with your logistics needs. Reach out to us directly or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EBF2FA] rounded-lg flex items-center justify-center text-[#2F5D9F] flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3B]">Headquarters</h4>
                  <p className="text-gray-600 text-sm">
                    Global Logistics Center<br />
                    Hong Kong
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EBF2FA] rounded-lg flex items-center justify-center text-[#2F5D9F] flex-shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3B]">Email</h4>
                  <p className="text-gray-600 text-sm">support@speedlogistics.global</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EBF2FA] rounded-lg flex items-center justify-center text-[#2F5D9F] flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0B1F3B]">Phone</h4>
                  <p className="text-gray-600 text-sm">+852 1234 5678</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0B1F3B] mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">Contact Name</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent outline-none transition-all"
                    placeholder="Your Name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent outline-none transition-all"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent outline-none transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="Warehousing">Warehousing & Fulfillment</option>
                    <option value="International Shipping">International Shipping</option>
                    <option value="Express Courier">Express Courier</option>
                    <option value="Ecommerce">E-Commerce Solutions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-2">Monthly Volume (approx)</label>
                  <input
                    type="text"
                    id="volume"
                    name="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent outline-none transition-all"
                    placeholder="e.g. 1000 orders/month"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message / Specific Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#2F5D9F] focus:border-transparent outline-none transition-all"
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F47B20] text-white font-bold py-4 rounded-lg hover:bg-[#d66a1a] transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                Submit Inquiry <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
