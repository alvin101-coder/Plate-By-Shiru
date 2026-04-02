import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png'; // your logo file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'MENU', href: '#menu' },
    { name: 'RESERVATION', href: '#reservation' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
      ${scrolled ? "bg-black/40 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="flex justify-between items-center px-6 sm:px-8 py-4">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3 cursor-pointer">
          <a href="#home">
            <img src={logo} alt="Plate By Shiru" className="w-15 h-15 sm:w-15 sm:h-15 rounded" />
          </a>
          <h2 className="font-bold text-lg sm:text-2xl text-amber-500">Plate By Shiru</h2>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.name} className="font-semibold text-base sm:text-lg relative group">
              <a href={link.href} className="text-white">
                {link.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-amber-500 transition-all group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-2xl cursor-pointer text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 py-6 bg-black/80 backdrop-blur-md shadow-lg animate-slide-down text-white">
          {links.map((link) => (
            <li key={link.name} className="font-semibold text-lg">
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
