import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between px-6 lg:px-[110px] py-6">
      {/* Logotipo com Animação */}
      <motion.div
        className="bg-[#FFFAF0] rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="/images/logo.png" alt="logo" className="w-20 h-20 object-cover" />
      </motion.div>

      {/* Menu Desktop com Animação */}
      <motion.nav
        className="hidden lg:flex space-x-[60px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
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
      </motion.nav>

      {/* Botão Hambúrguer para Tablets e Celulares */}
      <motion.button
        className="lg:hidden flex items-center justify-center w-8 h-8"
        onClick={toggleMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </div>
      </motion.button>

      {/* Menu Lateral para Tablets e Celulares */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-[#482A5D] bg-opacity-50 z-40"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>
            <motion.div
              className="fixed top-0 right-0 h-full bg-[#FFFAF0] w-64 z-50 shadow-lg"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
            >
              <button className="absolute top-4 right-4 text-[#482A5D]" onClick={toggleMenu}>
                ✕
              </button>
              <nav className="flex flex-col space-y-6 mt-20 ml-6">
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className={({ isActive }) => `${isActive ? 'text-[#482A5D] font-bold' : 'text-gray-800'} pb-2`}
                >
                  Início
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={toggleMenu}
                  className={({ isActive }) => `${isActive ? 'text-[#482A5D] font-bold' : 'text-gray-800'} pb-2`}
                >
                  Sobre
                </NavLink>
                <NavLink
                  to="/buy"
                  onClick={toggleMenu}
                  className={({ isActive }) => `${isActive ? 'text-[#482A5D] font-bold' : 'text-gray-800'} pb-2`}
                >
                  Comprar
                </NavLink>
                <NavLink
                  to="/contact"
                  onClick={toggleMenu}
                  className={({ isActive }) => `${isActive ? 'text-[#482A5D] font-bold' : 'text-gray-800'} pb-2`}
                >
                  Contato
                </NavLink>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
