"use client";
import { useState } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Text */}
        <div className="text-2xl font-extrabold text-white hover:text-yellow-300 transition-colors duration-300 cursor-pointer">
          <Link href="/">
            <span>FurnitureCo</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Contact'].map((link) => (
            <Link key={link} href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
              <span className="relative text-white hover:text-yellow-300 transition-colors duration-300">
                {link}
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-gradient-to-b from-indigo-600 to-blue-500 shadow-inner">
          <ul className="flex flex-col space-y-2 px-6 py-4">
            {['Home', 'About', 'Contact'].map((link) => (
              <li key={link}>
                <Link href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}>
                  <span className="block text-white py-2 hover:text-yellow-300 transition-colors duration-300">
                    {link}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
