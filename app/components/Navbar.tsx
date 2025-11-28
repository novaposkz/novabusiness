'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import AuthModal from './AuthModal';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen((prev) => !prev);
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
  const prioritizedLinks = ['О нас', 'Кредиты', 'Рассрочка', 'Франшиза'];
  const primaryLinks = navLinks.filter((link) => prioritizedLinks.includes(link.name));
  const overflowLinks = navLinks.filter((link) => !prioritizedLinks.includes(link.name));

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
          <div className="hidden md:flex md:items-center md:space-x-4 lg:space-x-6">
            {primaryLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium rounded-md hover:text-teal-300 hover:underline underline-offset-4 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Search Button */}
            <button 
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Поиск"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            
            {/* Language Switcher */}
            <div className="flex items-center text-sm text-gray-300 space-x-1">
              <button className="hover:text-white transition-colors duration-200">KZ</button>
              <span>|</span>
              <button className="text-teal-400 font-medium hover:text-teal-300 transition-colors duration-200">RU</button>
            </div>
            
            {/* Login Button */}
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="px-3 py-1.5 text-sm font-medium rounded-md text-white hover:bg-gray-700 transition-colors duration-200"
              aria-label="Вход"
            >
              Вход
            </button>
            
            {overflowLinks.length > 0 && (
              <button
                onClick={toggleDesktopMenu}
                className="flex items-center gap-2 px-3 py-2 text-sm font-semibold rounded-md border border-teal-400 text-teal-300 hover:bg-teal-500/10 transition-colors duration-200"
                aria-expanded={isDesktopMenuOpen}
                aria-label="Открыть меню"
              >
                <span className="text-lg">☰</span>
                <span>МЕНЮ</span>
              </button>
            )}
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

      {/* Desktop slide-out menu */}
      {overflowLinks.length > 0 && (
        <div
          className={`hidden md:block fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-gray-900 border-l border-gray-800 shadow-xl transform transition-transform duration-300 ${
            isDesktopMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-4 space-y-3">
            {overflowLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                onClick={() => setIsDesktopMenuOpen(false)}
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-sm font-medium">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-4">
          {/* Mobile Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Поиск..."
            />
          </div>

          {/* Mobile Language and Login */}
          <div className="flex items-center justify-between px-2 py-2">
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-300">Язык:</span>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm rounded-md bg-gray-800 text-white hover:bg-gray-700">KZ</button>
                <button className="px-3 py-1 text-sm rounded-md bg-teal-600 text-white hover:bg-teal-700">RU</button>
              </div>
            </div>
            <button 
              onClick={() => {
                setIsMenuOpen(false);
                setIsAuthModalOpen(true);
              }} 
              className="px-4 py-1.5 text-sm font-medium rounded-md bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-200"
            >
              Вход
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex flex-col items-center justify-center p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-2xl mb-1">{link.icon}</span>
                <span className="text-xs font-medium text-center">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </nav>
  );
};

export default Navbar;
