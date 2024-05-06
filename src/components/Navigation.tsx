import React, { useState } from 'react';
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import CartIcon from '../assets/shared/desktop/icon-cart.svg';
import Hamburger from 'hamburger-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Mobile and Tablet Navigation */}
      <div className="lg:hidden bg-black h-[97px] flex items-center px-4 justify-between">
        <Hamburger toggled={isOpen} toggle={setIsOpen} color="#ffffff" />
        <img src={Logo} alt="Logo" width="150" />
        <img src={CartIcon} alt="Cart Icon" />
      </div>

      {/* Dropdown Menu for Mobile and Tablet */}
      {isOpen && (
        <div className="absolute top-[97px] left-0 w-full bg-white p-5 shadow-md z-10">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-black">HOME</Link>
          <Link to="/headphones" onClick={() => setIsOpen(false)} className="block py-2 text-black">HEADPHONES</Link>
          <Link to="/speakers" onClick={() => setIsOpen(false)} className="block py-2 text-black">SPEAKERS</Link>
          <Link to="/earphones" onClick={() => setIsOpen(false)} className="block py-2 text-black">EARPHONES</Link>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className='hidden lg:flex bg-black h-[97px] items-center px-40 font-manrope'>
        <nav className='w-full'>
          <div className="grid grid-cols-3 items-center w-full border-b border-[#979797] p-10 h-[97px]">
            <div className='justify-self-start'>
              <img src={Logo} width={150} alt="Logo" />
            </div>

            <div className='flex justify-center gap-10'>
              <Link to="/" className='text-white hover:text-nav-hover'>HOME</Link>
              <Link to="/headphones" className='text-white hover:text-nav-hover'>HEADPHONES</Link>
              <Link to="/speakers" className='text-white hover:text-nav-hover'>SPEAKERS</Link>
              <Link to="/earphones" className='text-white hover:text-nav-hover'>EARPHONES</Link>
            </div>

            <div className='justify-self-end'>
              <img src={CartIcon} alt="Cart Icon" />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;