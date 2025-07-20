// src/pages/Home.tsx
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroBanner from "~/components/Herobanner";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <HeroBanner />

      {/* Services */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Meal Delivery",
                description:
                  "Nutritious, home-cooked meals delivered daily to seniors and people with disabilities.",
                image: "/assets/menu_Title.jpg",
              },
              {
                title: "Health & Wellness Checks",
                description:
                  "Our volunteers conduct basic wellness checks during deliveries to ensure recipients are safe.",
                image: "/assets/health_wellness_checks.jpg",
              },
              {
                title: "Nutritional Planning",
                description:
                  "Custom meal plans created in consultation with dietitians to suit dietary restrictions and health needs.",
                image: "/assets/nutritional_planning.jpg",
              },
              {
                title: "Weekend & Remote Area Support",
                description:
                  "Frozen meals delivered in advance for seniors living in remote areas or during weekends when hot deliveries are unavailable.",
                image: "/assets/frozen_food.jpg",
              },
              {
                title: "Senior Engagement & Wellness",
                description:
                  "Community activities and friendly visits to reduce isolation and promote mental well-being among elderly meal recipients.",
                image: "/assets/senior_wellness_check.jpg",
              },
              {
                title: "Volunteer Onboarding & Food Safety",
                description:
                  "Comprehensive training for volunteers on elderly care, food safety standards, and compassionate delivery practices.",
                image: "/assets/volunteer_training.jpg",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="mx-auto h-32 w-full object-cover rounded mb-4"
                />
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left 2/3: Main Article + Why Choose Us */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            {/* Main Article */}
            <div>
              <img
                src="/assets/impact_story_1.jpg"
                alt="Volunteer helping elderly man during meal delivery"
                className="h-50 w-full object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold">
                A Meal That Saved a Life
              </h3>
              <p className="text-sm mt-2">
                During a routine delivery, a volunteer found Mrs. Lee collapsed.
                Their quick response and our regular wellness checks saved her
                life.
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href="/ImpactArticle"
                  className="text-blue-600 hover:underline"
                >
                  Read this article
                </a>
                <a
                  href="/AllInsights"
                  className="text-blue-600 hover:underline"
                >
                  See all insights
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white p-6 rounded shadow">
              <h4 className="text-lg font-semibold mb-3">
                Why Choose MerryMeals?
              </h4>
              <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
                <li>
                  We deliver more than meals — we deliver human connection and
                  care.
                </li>
                <li>
                  Trusted by thousands of families and caregivers across the
                  region.
                </li>
                <li>
                  Highly trained volunteers who go above and beyond for the
                  vulnerable.
                </li>
                <li>
                  Customized meals aligned with dietary and cultural
                  preferences.
                </li>
                <li>
                  24/7 support and emergency response when you need it most.
                </li>
              </ul>
              <p className="text-sm mt-4 text-gray-600">
                With MerryMeals, you're not just another recipient — you're part
                of a compassionate community that cares deeply about your
                well-being. Join thousands who trust us to make their days a
                little brighter and healthier.
              </p>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold border-b pb-2">
              What Our Customers Say
            </h4>

            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm italic">
                "Merry Meals gives me something to look forward to every day.
                The volunteers are like my family now."
              </p>
              <p className="text-sm mt-2 font-medium text-gray-700">
                – Mr. Ahmad, 72
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm italic">
                "Even on rainy days, they show up. That kind of love and
                consistency changed my life."
              </p>
              <p className="text-sm mt-2 font-medium text-gray-700">
                – Mr. Ong, 80
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm italic">
                "Thanks to Merry Meals, I never feel alone. It's more than food
                — it's care and dignity."
              </p>
              <p className="text-sm mt-2 font-medium text-gray-700">
                – Mdm. Siti, 78
              </p>
            </div>

            <div className="bg-white p-4 rounded shadow">
              <p className="text-sm italic">
                "The meals are always warm and delicious. But it's the smiles
                and chats that truly warm my heart."
              </p>
              <p className="text-sm mt-2 font-medium text-gray-700">
                – Mrs. Lim, 81
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meals on Wheels Partners */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4 text-gray-800">
            Community Partners
          </h2>
          <p className="text-base text-gray-600 mb-8">
            Over 15,000 donors, sponsors, and organizations are working with
            MerryMeals to nourish our community.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Food Banks",
              "Grocery Chains",
              "Logistics Providers",
              "Health Clinics",
              "Nonprofits",
              "Local Councils",
              "Volunteering Groups",
              "Donors",
            ].map((partner, i) => (
              <div
                key={i}
                className="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-700 font-medium shadow-sm hover:shadow-md transition"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Safety & Quality Assurance */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Committed to Food Safety
            </h3>
            <p className="text-base text-gray-600 mb-6">
              Every meal we deliver is prepared following strict hygiene
              protocols, temperature control, and nutritional standards to
              ensure the safety and well-being of our members.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
              <li>Daily kitchen inspections by trained staff</li>
              <li>Temperature-controlled delivery containers</li>
              <li>Safe food handling certification for all volunteers</li>
              <li>Special protocols for dietary restrictions and allergies</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/FoodSafety"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition text-center"
              >
                Learn About Our Standards
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1">
            <img
              src="/assets/food_safety.jpg"
              alt="MerryMeals food safety checklist"
              className="h-80 md:h-80 w-full object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-8 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p>Email: info@merrymeals.org</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex gap-4 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full bg-gray-100 border border-gray-200 shadow-sm transition-colors duration-200 p-2 group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full bg-gray-100 border border-gray-200 shadow-sm transition-colors duration-200 p-2 group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.808 2.256 6.088 2.243 6.497 2.243 12c0 5.503.013 5.912.072 7.192.059 1.276.353 2.449 1.32 3.416.967.967 2.14 1.261 3.416 1.32 1.28.059 1.689.072 7.192.072s5.912-.013 7.192-.072c1.276-.059 2.449-.353 3.416-1.32.967-.967 1.261-2.14 1.32-3.416.059-1.28.072-1.689.072-7.192s-.013-5.912-.072-7.192c-.059-1.276-.353-2.449-1.32-3.416C21.551.425 20.378.131 19.102.072 17.822.013 17.413 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.2-10.406a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="rounded-full bg-gray-100 border border-gray-200 shadow-sm transition-colors duration-200 p-2 group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.13 3.5 12 3.5 12 3.5s-7.13 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.442 0 12 0 12s0 3.558.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.87 20.5 12 20.5 12 20.5s7.13 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.558 24 12 24 12s0-3.558-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="sr-only">YouTube</span>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="rounded-full bg-gray-100 border border-gray-200 shadow-sm transition-colors duration-200 p-2 group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
              >
                <svg
                  className="w-6 h-6 text-gray-700 group-hover:text-black transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.849-3.037-1.851 0-2.132 1.445-2.132 2.939v5.667H9.358V9h3.414v1.561h.049c.476-.899 1.637-1.849 3.37-1.849 3.602 0 4.267 2.368 4.267 5.455v6.285zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.549C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.271V1.723C24 .771 23.2 0 22.225 0z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get Involved</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Volunteer</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
