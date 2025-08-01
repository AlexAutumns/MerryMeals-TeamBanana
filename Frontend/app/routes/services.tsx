import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const services = [
  {
    title: "Meal Delivery",
    description:
      "We provide daily home-cooked meals designed to meet nutritional needs while offering the comfort of a warm, familiar dish. Each meal is delivered with punctuality and care by trained volunteers, often the only face many recipients see that day — making it more than just a meal, but a meaningful connection.",
    image: "/assets/menu_Title.jpg",
  },
  {
    title: "Health & Wellness Checks",
    description:
      "Our service extends beyond nutrition. During each delivery, our volunteers conduct informal wellness checks to ensure our clients are healthy and safe. They are trained to identify warning signs of physical or mental distress and escalate concerns if needed — providing peace of mind to families.",
    image: "/assets/health_wellness_checks.jpg",
  },
  {
    title: "Nutritional Planning",
    description:
      "We work closely with certified dietitians to develop personalized meal plans that align with individual medical needs. Whether managing chronic conditions like diabetes or navigating allergies and dietary restrictions, we ensure each client receives balanced, nourishing meals tailored to them.",
    image: "/assets/nutritional_planning.jpg",
  },
  {
    title: "Weekend & Remote Area Support",
    description:
      "For clients in hard-to-reach areas or during weekends when live deliveries may not be feasible, we provide frozen meals delivered in advance. These meals are just as nutritious and easy to reheat — ensuring that no one is left hungry, regardless of time or location.",
    image: "/assets/frozen_food.jpg",
  },
  {
    title: "Senior Engagement & Wellness",
    description:
      "We recognize that emotional and social well-being are just as important as physical health. Our programs include friendly visits, community events, and wellness initiatives aimed at reducing loneliness, boosting mental health, and creating joyful moments in the lives of seniors.",
    image: "/assets/senior_wellness_check.jpg",
  },
  {
    title: "Volunteer Onboarding & Food Safety",
    description:
      "Each of our volunteers undergoes thorough training in elderly care, hygiene protocols, and food safety standards. We equip them not just with knowledge, but with empathy and understanding — ensuring every interaction is respectful, compassionate, and safe.",
    image: "/assets/volunteer_training.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Hero */}
<section className="bg-[#1B69C1] text-white py-20 px-6 text-center">
  <div className="max-w-3xl mx-auto">
    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
    <p className="text-lg">
      At MerryMeals, we go beyond simply delivering meals; we deliver compassion, connection, and peace of mind.  
      Our wide range of services is thoughtfully designed to support the health, independence, and emotional well-being 
      of seniors and individuals living with disabilities. From nutritious, home-cooked meals and wellness checks to personalized 
      nutrition planning and community engagement, every service is a reflection of our commitment to care with dignity and purpose.  
      Whether it's a hot lunch on a weekday or a frozen meal in a remote area, we ensure that no one feels forgotten or alone.
    </p>
  </div>
</section>


      {/* Services Section */}
<section className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-2xl font-bold text-center text-[#1B69C1] mb-10">What We Offer</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-[#1B69C1]">
              {service.title}
            </h3>
            <p className="text-gray-700 text-sm">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#f5faff] px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#1B69C1] mb-6">Why Choose MerryMeals?</h2>
          <p className="text-gray-700 text-lg mb-6">
            We understand that food is more than nutrition — it’s care, connection, and comfort. With MerryMeals, you’re not just receiving a meal, you’re part of a compassionate community.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left mt-10">
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-lg font-semibold text-[#1B69C1] mb-2">Trusted by Families</h4>
              <p className="text-sm text-gray-700">Thousands of families rely on us for consistent, quality meal delivery and well-being checks for their loved ones.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-lg font-semibold text-[#1B69C1] mb-2">Community-Driven</h4>
              <p className="text-sm text-gray-700">We’re powered by passionate volunteers and local partners who believe in making a real difference.</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h4 className="text-lg font-semibold text-[#1B69C1] mb-2">Personalized Care</h4>
              <p className="text-sm text-gray-700">From tailored meal plans to friendly chats, we offer care that’s customized to the individual needs of each recipient.</p>
            </div>
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

        <div className="border-t mt-10 pt-4 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} MerryMeals. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
