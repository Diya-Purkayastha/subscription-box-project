import React from 'react';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';

const benefitsList = [
  "100% Satisfaction Guarantee on All Boxes",
  "Curated Gadgets from Top Brands Like Apple, Google & Meta",
  "Exclusive Tech Accessories Delivered Monthly or Yearly",
  "Stay Ahead with Tech Tips & Reviews via Our Newsletter",
  "Join a Community of Tech Enthusiasts and Early Adopters",
  "Early Access to Beta Features, Product Trials & Launch Events"
];

const Benefits = () => {
  return (
    <section className="min-h-screen px-4 py-12 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    
        <div className="w-full">
          <img
            src="https://i.ibb.co/35TFRQpC/undraw-gifts-4gy3.png"
            alt="Subscription Box"
            className="w-full h-auto max-h-[700px] object-contain shadow-xl rounded-2xl"
          />
        </div>

   
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold leading-snug">
              <span className="text-primary">SubS.<span className="text-secondary">boX</span></span> <br />
              <span className="text-gray-800">Member Benefits</span>
            </h2>
            <p className="text-lg text-gray-600">
              Explore a world of cutting-edge tech with curated subscription boxes designed for modern lifestyles.
              Each box delivers value, convenience, and innovation—guaranteed.
            </p>
          </div>

          
          <ul className="space-y-3">
            {benefitsList.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-lg text-gray-700">
                <IoCheckmarkDoneCircleSharp className="text-secondary text-xl mt-1" />
                {benefit}
              </li>
            ))}
          </ul>

          <button className="btn btn-primary text-white mt-4">Join Us Now</button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
