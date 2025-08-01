import React from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";


export default function About() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-[#1B69C1]">About MerryMeals</h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            MerryMeals isn't just a service — it's a movement. We're reshaping how communities care for one another through nourishing meals, dignity, and human connection.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#1B69C1] mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-loose">
              Our mission is to ensure that no one in our community is left behind when it comes to accessing wholesome, home-cooked meals. MerryMeals bridges the gap between abundance and need, connecting compassionate volunteers with individuals who deserve more than just food; they deserve care.
              <br /><br />
              We’re driven by a simple belief: everyone deserves to eat well, feel seen, and be supported. Whether it’s a senior living alone, a single parent juggling responsibilities, or someone facing a rough patch — MerryMeals is here to serve.
            </p>
          </div>
          <div>
            <img
              src="/images/mission.jpg"
              alt="Volunteers preparing meals"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/images/community-meal.jpg"
              alt="Community sharing food"
              className="rounded-2xl shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-[#1B69C1] mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-loose">
              We envision a world where food is not a privilege but a right. A world where people help people — not out of obligation, but out of love and solidarity. 
              <br /><br />
              In our future, communities are stronger because they nourish each other. Food waste becomes food security. Technology becomes a tool for empathy. And every plate served tells a story of hope.
            </p>
          </div>
        </div>
      </section>

     {/* Our Core Values Section */}
      <section className="bg-gray-100 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B69C1] mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-xl text-[#1B69C1] mb-3">Compassion</h3>
              <p className="text-gray-700">
                We lead with empathy. Every meal is delivered with genuine care and a desire to brighten someone's day.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-xl text-[#1B69C1] mb-3">Inclusivity</h3>
              <p className="text-gray-700">
                We welcome all, regardless of background or circumstance. Respect, equity, and dignity drive our work.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-xl text-[#1B69C1] mb-3">Sustainability</h3>
              <p className="text-gray-700">
                We repurpose food and reduce waste, using local resources to create long-lasting impact in every community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
              <h3 className="font-semibold text-xl text-[#1B69C1] mb-3">Volunteerism</h3>
              <p className="text-gray-700">
                Our volunteers are our strength. We empower communities to lead, serve, and care — together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1B69C1] mb-10">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-800">
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-[#1B69C1]">25,000+</h3>
              <p className="mt-2">Meals Delivered</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-[#1B69C1]">1,200+</h3>
              <p className="mt-2">Volunteers Engaged</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-[#1B69C1]">500+</h3>
              <p className="mt-2">Communities Reached</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <h3 className="text-4xl font-bold text-[#1B69C1]">100%</h3>
              <p className="mt-2">Heart & Soul</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1B69C1] text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Join the Movement</h2>
          <p className="text-lg leading-relaxed mb-8">
            MerryMeals is more than just a meal delivery platform — it's a purpose. Your support can light up someone’s day. Become a volunteer, share our mission, or reach out to someone in need.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#1B69C1] font-semibold px-8 py-3 rounded-2xl shadow hover:bg-gray-200 transition"
          >
            Contact Us Today
          </a>
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
