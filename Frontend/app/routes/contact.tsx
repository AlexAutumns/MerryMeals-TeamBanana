import React from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="text-gray-800">


      {/* Contact Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#1B69C1] mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-700 mb-10">
            Have questions, feedback, or want to collaborate with us? We'd love to hear from you. Fill out the form below and we’ll get back to you shortly.
          </p>

          {/* Contact Form */}
          <form className="bg-white shadow-xl rounded-2xl p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-left font-medium mb-1">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#1B69C1]"
                  required
                />
              </div>
              <div>
                <label className="block text-left font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  placeholder="Doe"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#1B69C1]"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-left font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#1B69C1]"
                required
              />
            </div>
            <div>
              <label className="block text-left font-medium mb-1">Message</label>
              <textarea
                placeholder="Type your message here..."
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring focus:ring-[#1B69C1]"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#1B69C1] text-white font-semibold px-6 py-3 rounded-md hover:bg-[#2062AF] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

     {/* Support Section */}
<section id="support" className="bg-white py-16 px-6">
  <div className="max-w-3xl mx-auto">
    <div className="border border-gray-200 shadow-md rounded-2xl p-8 bg-gray-50 text-center">
      <h3 className="text-2xl font-bold text-[#1B69C1] mb-4">Need Support?</h3>
      <p className="text-lg text-gray-700 leading-relaxed">
        If you need further assistance, please reach out to our support team.
        <br />
        Email: <a href="mailto:info@merrymeals.org" className="text-[#1B69C1] font-medium">info@merrymeals.org</a>
        <br />
        Phone: <a href="tel:+1234567890" className="text-[#1B69C1] font-medium">+123 456 7890</a>
      </p>
    </div>
  </div>
</section>


        {/* Footer */}
      <footer className="bg-white border-t py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Contact + Socials */}
          <div>
            <h4 className="text-lg font-semibold text-[#1B69C1] mb-3">Contact</h4>
            <p className="mb-1">info@merrymeals.org</p>
            <p className="mb-4">+123 456 7890</p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/merrymeals" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-5 h-5 text-[#1B69C1] hover:scale-110 transition" />
              </a>
              <a href="https://www.instagram.com/merrymeals" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-[#1B69C1] hover:scale-110 transition" />
              </a>
              <a href="https://www.youtube.com/@merrymeals" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-5 h-5 text-[#1B69C1] hover:scale-110 transition" />
              </a>
              <a href="https://www.linkedin.com/company/merrymeals" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 text-[#1B69C1] hover:scale-110 transition" />
              </a>
            </div>
          </div>
      
          {/* Quick Links */}
      <div>
        <h4 className="text-lg font-semibold text-[#1B69C1] mb-3">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="/services" className="hover:underline">Services</a></li>
          <li><a href="/contact#support" className="hover:underline">Support</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
      
      
          {/* Get Involved */}
          <div>
            <h4 className="text-lg font-semibold text-[#1B69C1] mb-3">Get Involved</h4>
            <ul className="space-y-2">
              <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
              <li><a href="/donate" className="hover:underline">Donate</a></li>
              <li><a href="/register" className="hover:underline">Register</a></li>
            </ul>
          </div>
      
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-[#1B69C1] mb-3">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      
        {/* Bottom Strip */}
        <div className="border-t mt-10 pt-4 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MerryMeals. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
