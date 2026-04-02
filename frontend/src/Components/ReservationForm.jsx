import axios from 'axios';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    requests: ""
  });

  const [confirmed, setConfirmed] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(backendUrl + "/api/reservations/create", formData);
      toast.success("Reservation successful");

      // show confirmation card
      setConfirmed(formData);

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "1",
        requests: ""
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const timeSlot = () => {
    const slots = [];
    for (let hour = 9; hour < 21; hour++) {
      const startHour = hour % 12 === 0 ? 12 : hour % 12;
      const startPeriod = hour < 12 ? "AM" : "PM";
      const endHour = (hour + 1) % 12 === 0 ? 12 : (hour + 1) % 12;
      const endPeriod = hour + 1 < 12 ? "AM" : "PM";
      slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod}`);
    }
    return slots;
  };

  return (
    <section id="reservation" className="min-h-screen bg-gray-900 p-6 md:p-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Reservation Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 bg-black/50 p-8 shadow-md rounded-lg">
          <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-wider">Online Reservation</h2>
          <h1 className="text-3xl font-bold mb-4">Dine With Us — <span className="text-amber-500">Reserve Now</span></h1>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="font-bold">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange}
                placeholder="Full Name" required
                className="w-full p-3 rounded-md border focus:ring focus:ring-amber-300"/>
            </div>
            <div>
              <label className="font-bold">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange}
                placeholder="Email" required
                className="w-full p-3 rounded-md border focus:ring focus:ring-amber-300"/>
            </div>
            <div>
              <label className="font-bold">Phone Number</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
                placeholder="Phone Number" required
                className="w-full p-3 rounded-md border focus:ring focus:ring-amber-300"/>
            </div>
            <div>
              <label className="font-bold">Reservation Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange}
                min={new Date().toISOString().split("T")[0]} required
                className="w-full p-3 rounded-md border focus:ring focus:ring-gray-300"/>
            </div>
            <div>
              <label className="font-bold">Time of Reservation</label>
              <select name="time" value={formData.time} onChange={handleChange} required
                className="w-full p-3 rounded-md border focus:ring focus:ring-gray-300">
                <option value="">Select Time</option>
                {timeSlot().map((slot, index) => (
                  <option key={index} value={slot}>{slot}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="font-bold">Number of Guests</label>
              <select name="guests" value={formData.guests} onChange={handleChange} required
                className="w-full p-3 rounded-md border focus:ring focus:ring-gray-300">
                {[...Array(10).keys()].map(i => (
                  <option key={i+1} value={i+1}>{i+1} Guest(s)</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="font-bold">Special Requests</label>
              <textarea name="requests" value={formData.requests} onChange={handleChange}
                placeholder="Dietary needs, seating preferences, etc."
                className="w-full p-3 rounded-md border focus:ring focus:ring-amber-300"/>
            </div>
          </div>
          
          <button type="submit"
            className="w-full mt-6 bg-amber-500 text-black py-3 rounded-md hover:bg-amber-600 transition font-bold cursor-pointer">
            Book A Table
          </button>

          {/* Confirmation Card */}
          {confirmed && (
            <div className="mt-6 bg-green-100 text-green-800 p-4 rounded-md shadow-md">
              <h3 className="font-bold">Reservation Confirmed!</h3>
              <p>Name: {confirmed.name}</p>
              <p>Date: {confirmed.date}</p>
              <p>Time: {confirmed.time}</p>
              <p>Guests: {confirmed.guests}</p>
              {confirmed.requests && <p>Requests: {confirmed.requests}</p>}
            </div>
          )}
        </form>

        {/* Contact Info */}
        <div className="bg-black/40 text-gray-300 p-8 shadow-md space-y-10 text-center rounded-lg">
          <div>
            <h3 className="text-3xl font-bold">Address</h3>
            <p>123, Abc Street, N-axis, Sample City, Country</p>
          </div>
          <div>
            <p>Call Us</p>
            <h3 className="text-3xl font-bold">+0123-456-789</h3>
          </div>
          <div>
            <h3 className="text-3xl font-bold">Open Time</h3>
            <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
            <p>Sat - Sun: 9:00 AM - 11:00 PM</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Stay Connected</h3>
            <div className="flex gap-4 justify-center">
              <FaFacebook className="text-4xl text-white"/>
              <FaTwitter className="text-4xl text-white"/>
              <FaInstagram className="text-4xl text-white"/>
              <FaTiktok className="text-4xl text-white"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
