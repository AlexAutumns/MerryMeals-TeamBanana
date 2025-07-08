// src/pages/AllInsights.tsx
import React from 'react';

const insights = [
  {
    title: "A Meal That Saved a Life",
    excerpt: "Volunteer’s quick action saves a senior in need.",
    link: "/ImpactArticle",
    image: "/assets/impact_story_1.jpg",
  },
 {
    title: "Meals Through the Storm",
    excerpt: "After the neighborhood flood, MerryMeals ensured uninterrupted meal delivery to over 120 elderly residents stranded at home.",
    link: "#",
    image: "/assets/impact_story_2.png",
  },

  {
    title: "From Isolation to Connection",
    excerpt: "Our weekly deliveries gave Ms. Tan a reason to smile again.",
    link: "#",
    image: "/assets/impact_story_3.jpg",
  },
];

const AllInsights = () => {
  return (
    <div className="font-sans text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Impact Stories & Insights</h1>

        <div className="grid md:grid-cols-2 gap-6">
          {insights.map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{item.excerpt}</p>
                <a 
                  href= {item.link}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t py-8 px-4 mt-12">
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

export default AllInsights;
