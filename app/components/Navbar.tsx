'use client';

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [
    { name: 'О нас', href: '/about', icon: '👥' },
    { name: 'Магазин', href: '/shop', icon: '🛒' },
    { name: 'NovaPos', href: '/novapos', icon: '📦' },
    { name: 'Кредиты', href: '/credits', icon: '💳' },
    { name: 'Акции', href: '/promotions', icon: '🏷️' },
    { name: 'Рассрочка', href: '/installment', icon: '📅' },
    { name: 'NovaBonus', href: '/novabonus', icon: '⭐' },
    { name: 'Бизнес услуги', href: '/business', icon: '💼' },
    { name: 'Франшиза', href: '/franchise', icon: '🏢' },
    { name: 'Вакансии', href: '/careers', icon: '📋' },
    { name: 'Maps', href: '/maps', icon: '📍' },
    { name: 'Клиенты', href: '/clients', icon: '🤝' },
  ];

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex flex-col leading-tight font-bold text-xl">
              <span className="text-teal-400">NOVA</span>
              <span className="text-white">BUSINESS</span>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:text-teal-300 hover:underline underline-offset-4 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3">
          <div className="grid grid-cols-3 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
              >
                <span className="text-2xl mb-1">{link.icon}</span>
                <span className="text-xs font-medium text-center">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
