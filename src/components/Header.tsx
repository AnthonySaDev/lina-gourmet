import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-6 lg:px-[110px] py-6">
      <div className="bg-[#FFFAF0] rounded-full">
        <img src="/images/logo.png" alt="logo" className="w-20 h-20 object-cover" />
      </div>

      {/* Menu Desktop */}
      <nav className="hidden lg:flex space-x-[60px]">
        <NavLink to="/" className={({ isActive }) => `relative pb-1 ${isActive ? 'active-link' : ''}`}>
          Início
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `relative pb-1 ${isActive ? 'active-link' : ''}`}>
          Sobre
        </NavLink>
        <NavLink to="/buy" className={({ isActive }) => `relative pb-1 ${isActive ? 'active-link' : ''}`}>
          Comprar
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `relative pb-1 ${isActive ? 'active-link' : ''}`}>
          Contato
        </NavLink>
      </nav>

      {/* Botão Hambúrguer para Tablets e Celulares */}
      <button className="lg:hidden flex items-center justify-center w-8 h-8" onClick={toggleMenu}>
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </button>

      {/* Menu Lateral para Tablets e Celulares */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#482A5D] bg-opacity-50 z-40" onClick={toggleMenu}></div>
      )}
      <div
        className={`fixed top-0 right-0 h-full bg-[#FFFAF0] w-64 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50 shadow-lg`}
      >
        <button className="absolute top-4 right-4 text-[#482A5D]" onClick={toggleMenu}>
          ✕
        </button>
        <nav className="flex flex-col space-y-6 mt-20 ml-6">
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => `${isActive ? 'text-[#482A5D] font-bold' : 'text-gray-800'} pb-2`}>
            Início
          </NavLink>
          <NavLink to="/about" onClick={toggleMenu} className={({ isActive }) => `${isActive ? 'text-[#482A5D] font-bold' : 'text-gray-800'} pb-2`}>
            Sobre
          </NavLink>
          <NavLink to="/buy" onClick={toggleMenu} className={({ isActive }) => `${isActive ? 'text-[#482A5D] font-bold' : 'text-gray-800'} pb-2`}>
            Comprar
          </NavLink>
          <NavLink to="/contact" onClick={toggleMenu} className={({ isActive }) => `${isActive ? 'text-[#482A5D] font-bold' : 'text-gray-800'} pb-2`}>
            Contato
          </NavLink>
        </nav>
      </div>
    </div>
  );
}
