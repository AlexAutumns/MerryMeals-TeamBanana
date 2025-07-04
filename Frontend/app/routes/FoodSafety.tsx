import React from 'react';

const safetyPoints = [
  'All kitchen staff and volunteers undergo regular hygiene and safe food handling training.',
  'Meals are prepared in certified kitchens that follow strict health regulations.',
  'We maintain strict temperature controls during meal prep, storage, and delivery.',
  'Insulated containers keep meals at safe temperatures throughout transport.',
  'Regular audits and inspections ensure all food providers and delivery partners meet our standards.',
];

const FoodSafety = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
          Our Commitment to Food Safety
        </h1>

        <img
          src="/assets/food_safety.jpg"
          alt="Food safety procedures"
          className="w-full h-64 object-cover rounded-lg shadow-md mb-8"
        />

        <p className="mb-6 text-gray-700 text-lg leading-relaxed">
          At MerryMeals, your health and safety are at the heart of everything we do. We carefully follow industry best practices to ensure every meal we prepare and deliver is safe, fresh, and nutritious.
        </p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">How We Keep Your Meals Safe</h2>
        <ul className="space-y-6 mb-8">
          {safetyPoints.map((point, idx) => (
            <li key={idx} className="text-gray-900 font-bold text-lg">
              {point}
            </li>
          ))}
        </ul>

        <p className="mb-6 text-gray-700 text-lg leading-relaxed">
          We know how important it is for our elderly community members to receive meals they can trust. That’s why we never compromise on safety, so you can enjoy your meals with peace of mind.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-6 py-3 rounded-lg shadow transition">
            Back to Home
          </a>

          <a href="/login" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition">
            Join Us as a Volunteer
          </a>
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
    </>
  );
};

export default FoodSafety;
