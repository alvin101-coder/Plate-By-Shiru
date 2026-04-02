import React from 'react'
import img1 from '../assets/serv1.jpg'
import img2 from '../assets/serv2.jpg'
import img3 from '../assets/serv3.jpg'
import line from '../assets/line.png'

const Service = () => {
  return (
    <section id="services" className="bg3 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section heading */}
        <div className="text-center mb-12">
          <img src={line} alt="divider line" className="mx-auto mb-4 w-40" />
          <h2 className="text-amber-400 text-4xl font-bold">Our Services</h2>
          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Explore the flavors we proudly serve — from hearty breakfasts to refreshing drinks and savory appetizers.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Breakfast */}
          <div className="flex flex-col items-center text-center bg-white/5 rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition">
            <div className="p-8">
              <h3 className="text-amber-400 text-2xl font-semibold">Breakfast</h3>
              <p className="mt-3 text-gray-200">
                Start your day with a hearty breakfast featuring golden waffles, buttery croissants, farm‑fresh eggs, and seasonal fruits. Each plate is crafted to give you energy and delight from the very first bite.
              </p>
            </div>
            <img src={img1} alt="Breakfast" className="h-64 w-full object-cover hover:scale-105 transition" />
          </div>

          {/* Drinks */}
          <div className="flex flex-col items-center text-center bg-white/5 rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition">
            <img src={img3} alt="Drinks" className="h-64 w-full object-cover hover:scale-105 transition" />
            <div className="p-8">
              <h3 className="text-amber-400 text-2xl font-semibold">Drinks</h3>
              <p className="mt-3 text-gray-200">
                Sip on refreshing juices, signature cocktails, and artisanal coffees. From tropical blends bursting with flavor to carefully crafted classics, our drinks menu is designed to complement every meal and mood.
              </p>
            </div>
          </div>

          {/* Appetizers */}
          <div className="flex flex-col items-center text-center bg-white/5 rounded-lg shadow-lg overflow-hidden hover:scale-[1.02] transition">
            <div className="p-8">
              <h3 className="text-amber-400 text-2xl font-semibold">Appetizers</h3>
              <p className="mt-3 text-gray-200">
                Begin your dining experience with savory starters — from crispy skewers and spiced bites to fresh seafood creations. Our appetizers are designed to awaken your palate and set the stage for the main course.
              </p>
            </div>
            <img src={img2} alt="Appetizers" className="h-64 w-full object-cover hover:scale-105 transition" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Service
