import React from 'react'
import headerImage from "../assets/home/desktop-hero-img.svg";

const Home = () => {
  return (
    <div className='bg-[#111010] w-full flex items-center justify-center text-white font-manrope'>
      {/* Container for both divs */}
      <div className="flex w-full h-full">
        {/* Text Div */}
        <div className="flex flex-col justify-center text-left w-1/2 px-40">
          <span style={{color: 'grey', letterSpacing: '0.5em', fontWeight: '100'}}>NEW PRODUCT</span>
          <h2 className='text-[56px] font-bold'>XX99 MARK ll HEADPHONES</h2>
          <p style={{color: 'grey'}}>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='mt-10 w-[150px] h-[50px] bg-nav-hover hover:bg-home-hover tracking-wide' >SEE PRODUCT</button>
        </div>

        {/* Image Div */}
        <div className="w-1/2 flex justify-center items-center">
          <img src={headerImage} alt="Header Image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Home
