// src/pages/ImpactArticle.tsx
import React from 'react';

const ImpactArticle = () => {
  return (
    <div className="font-sans text-gray-800">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header image */}
        <img
          src="/assets/impact_story_1.jpg"
          alt="MerryMeals volunteer saving a life"
          className="w-full h-64 object-cover rounded mb-6"
        />
        <h1 className="text-3xl font-bold mb-4">A Meal That Saved a Life</h1>
        <p className="text-sm text-gray-500 mb-6">Published: June 10, 2025</p>
        <p className="mb-4">
          When 83-year-old Mrs. Lee didn’t answer her door for his usual meal delivery, volunteer Anna became concerned.
          After knocking several times and hearing faint sounds inside, she called emergency services. Paramedics arrived and found Mrs. Lee had collapsed due to low blood sugar.
        </p>
        <p className="mb-4">
          "If it hadn’t been for the routine check-in, Mrs. Lee might not have survived the night," said the EMT.
        </p>
        <p className="mb-4">
          This is why Merry Meals does more than just deliver food — we deliver care, companionship, and safety.
        </p>
        <a href="/" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow transition"> 
        Back to Home 
        </a>
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

export default ImpactArticle;
