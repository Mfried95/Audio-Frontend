import React from 'react';
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import CartIcon from '../assets/shared/desktop/icon-cart.svg';

const Navigation = () => {
  return (
    <div className='bg-black h-[97px] flex items-center px-40 font-manrope'>
      <nav className='w-full'>

        {/* nav item container using grid */}
        <div className="grid grid-cols-3 items-center w-full border-b border-[#979797] p-10 h-[97px]">
          {/* Logo section */}
          <div className='justify-self-start'>
            <img src={Logo} width={150} alt="Logo" />
          </div>

          {/* Navigation links section */}
          <div className='flex justify-center gap-10'>
            <Link to="/" className='text-white hover:text-gray-300'>HOME</Link>
            <Link to="/headphones" className='text-white hover:text-gray-300'>HEADPHONES</Link>
            <Link to="/speakers" className='text-white hover:text-gray-300'>SPEAKERS</Link>
            <Link to="/earphones" className='text-white hover:text-gray-300'>EARPHONES</Link>
          </div>

          {/* Cart icon section */}
          <div className='justify-self-end'>
            <img src={CartIcon} alt="Cart Icon" />
          </div>
        </div>

      </nav>
    </div>
  );
}

export default Navigation;