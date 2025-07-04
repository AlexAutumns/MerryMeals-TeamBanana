// src/pages/Home.tsx
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HeroBanner from '~/components/Herobanner';

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
            title: 'Meal Delivery',
            description:
              'Nutritious, home-cooked meals delivered daily to seniors and people with disabilities.',
            image: '/assets/menu_Title.jpg',
          },
          {
            title: 'Health & Wellness Checks',
            description:
              'Our volunteers conduct basic wellness checks during deliveries to ensure recipients are safe.',
            image: '/assets/health_wellness_checks.jpg',
          },
          {
            title: 'Nutritional Planning',
            description:
              'Custom meal plans created in consultation with dietitians to suit dietary restrictions and health needs.',
            image: '/assets/nutritional_planning.jpg',
          },
          {
            title: 'Weekend & Remote Area Support',
            description:
              'Frozen meals delivered in advance for seniors living in remote areas or during weekends when hot deliveries are unavailable.',
            image: '/assets/frozen_food.jpg',
          },
          {
            title: 'Senior Engagement & Wellness',
            description:
              'Community activities and friendly visits to reduce isolation and promote mental well-being among elderly meal recipients.',
            image: '/assets/senior_wellness_check.jpg',
          },
          {
            title: 'Volunteer Onboarding & Food Safety',
            description:
              'Comprehensive training for volunteers on elderly care, food safety standards, and compassionate delivery practices.',
            image: '/assets/volunteer_training.jpg',
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
        <h3 className="text-xl font-semibold">A Meal That Saved a Life</h3>
        <p className="text-sm mt-2">
          During a routine delivery, a volunteer found Mrs. Lee collapsed. Their quick response and our regular wellness checks saved her life.
        </p>
        <div className="mt-4 flex gap-4">
          
          <a href="/ImpactArticle" className="text-blue-600 hover:underline">Read this article</a>
          <a href="/AllInsights" className="text-blue-600 hover:underline">See all insights</a>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white p-6 rounded shadow">
        <h4 className="text-lg font-semibold mb-3">Why Choose MerryMeals?</h4>
        <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
          <li>We deliver more than meals — we deliver human connection and care.</li>
          <li>Trusted by thousands of families and caregivers across the region.</li>
          <li>Highly trained volunteers who go above and beyond for the vulnerable.</li>
          <li>Customized meals aligned with dietary and cultural preferences.</li>
          <li>24/7 support and emergency response when you need it most.</li>
        </ul>
        <p className="text-sm mt-4 text-gray-600">
          With MerryMeals, you're not just another recipient — you're part of a compassionate community that cares deeply about your well-being. 
          Join thousands who trust us to make their days a little brighter and healthier.
        </p>
      </div>
    </div>

    {/* Customer Reviews */}
    <div className="space-y-6">
      <h4 className="text-lg font-semibold border-b pb-2">What Our Customers Say</h4>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm italic">
          "Merry Meals gives me something to look forward to every day. The volunteers are like my family now."
        </p>
        <p className="text-sm mt-2 font-medium text-gray-700">– Mr. Ahmad, 72</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm italic">
          "Even on rainy days, they show up. That kind of love and consistency changed my life."
        </p>
        <p className="text-sm mt-2 font-medium text-gray-700">– Mr. Ong, 80</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm italic">
          "Thanks to Merry Meals, I never feel alone. It's more than food — it's care and dignity."
        </p>
        <p className="text-sm mt-2 font-medium text-gray-700">– Mdm. Siti, 78</p>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <p className="text-sm italic">
          "The meals are always warm and delicious. But it's the smiles and chats that truly warm my heart."
        </p>
        <p className="text-sm mt-2 font-medium text-gray-700">– Mrs. Lim, 81</p>
      </div>

    </div>
  </div>
</section>



  {/* Meals on Wheels Partners */}
<section className="py-16 px-4 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold mb-4 text-gray-800">Community Partners</h2>
    <p className="text-base text-gray-600 mb-8">
      Over 15,000 donors, sponsors, and organizations are working with MerryMeals to nourish our community.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        'Food Banks',
        'Grocery Chains',
        'Logistics Providers',
        'Health Clinics',
        'Nonprofits',
        'Local Councils',
        'Volunteering Groups',
        'Donors'
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
      <h3 className="text-2xl font-bold mb-3 text-gray-800">Committed to Food Safety</h3>
      <p className="text-base text-gray-600 mb-6">
        Every meal we deliver is prepared following strict hygiene protocols, temperature control, and nutritional standards to ensure the safety and well-being of our members.
      </p>
      <ul className="list-disc list-inside text-sm text-gray-700 mb-6">
        <li>Daily kitchen inspections by trained staff</li>
        <li>Temperature-controlled delivery containers</li>
        <li>Safe food handling certification for all volunteers</li>
        <li>Special protocols for dietary restrictions and allergies</li>
      </ul>
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/FoodSafety" className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition text-center">
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
              <a href="#"><i className="fab fa-facebook text-xl"></i></a>
              <a href="#"><i className="fab fa-instagram text-xl"></i></a>
              <a href="#"><i className="fab fa-youtube text-xl"></i></a>
              <a href="#"><i className="fab fa-linkedin text-xl"></i></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Links</h4>
            <ul className="space-y-1">
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Get Involved</h4>
            <ul className="space-y-1">
              <li><a href="#">Volunteer</a></li>
              <li><a href="#">Donate</a></li>
              <li><a href="#">Register</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
