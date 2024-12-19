
import React, { useContext } from 'react';
import { plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify'; 
import { assets } from '../assets/assets';
const BuyCredit = () => {
  const { user, purchaseCredits } = useContext(AppContext); 

  const handlePurchase = (planId) => {
    if (user) {
      purchaseCredits(planId); 
    } else {
      toast.error('Please log in to make a purchase.'); 
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="min-h-[80vh] text-center pt-14 mb-10"
    >
      <button className="text-white text-sm border border-gray-100 px-10 py-2 rounded-full mb-6 sm:mb-10 sm:text-3xl">Our Plans</button>
    

      <div className="flex flex-wrap justify-center text-left gap-6 ">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
          >
            <img width={30} src={assets.circle_star || ''} alt={item.id} /> 
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium"> ${item.price}</span> / {item.credits} credits
            </p>
            <button
              onClick={() => handlePurchase(item.id)} 
              className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52"
            >
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
