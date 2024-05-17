import React from "react";
import headerImage from "../../assets/home/desktop-hero-img.svg";
import mobileHeader from "../../assets/home/mobile/image-header.jpg";

const HomeHeader = () => {
  return ( 
    <>
     <div className="bg-[#111010] w-full flex items-center justify-center text-white font-manrope">
      {/* Desktop View */}
      <div className="hidden lg:flex px-40 justify-between w-full">
        {/* Desktop Content */}
        <div className="flex flex-col justify-center text-left w-1/2 h-[500px]">
          <span className="[letter-spacing:0.5em] text-gray-500 font-thin">
            NEW PRODUCT
          </span>
          <h2 className="text-[56px] font-bold">XX99 MARK ll HEADPHONES</h2>
          <p className="w-[300px] text-gray-500">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="mt-10 w-[150px] h-[50px] bg-nav-hover hover:bg-home-hover tracking-wide">
            SEE PRODUCT
          </button>
        </div>

        {/* Image Div */}
        <div className="w-1/2 flex justify-center items-center">
          <img
            src={headerImage}
            alt="Header Image"
            className="max-w-full h-auto"
          />
        </div>
      </div>

      {/* Tablet View */}
      <div
        className="hidden md:flex lg:hidden w-full flex-col items-center justify-center text-center px-20 py-10"
        style={{
          backgroundImage: `url(${headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "800px",
        }}
      >
        <span className="[letter-spacing:0.5em] text-gray-500 font-thin">
          NEW PRODUCT
        </span>
        <h2 className="text-[40px] font-bold">XX99 MARK ll HEADPHONES</h2>
        <p className="w-[300px] text-gray-500">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="mt-8 w-[140px] h-[45px] bg-nav-hover hover:bg-home-hover tracking-wide">
          SEE PRODUCT
        </button>
      </div>

      {/* Mobile View */}
      <div
        className="lg:hidden md:hidden w-full flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${mobileHeader})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "600px",
        }}
      >
        <span className="[letter-spacing:0.5em] text-gray-500 font-thin">
          NEW PRODUCT
        </span>
        <h2 className="text-[30px] font-bold">XX99 MARK ll HEADPHONES</h2>
        <p className="w-[300px] text-gray-500">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="mt-10 w-[150px] h-[50px] bg-nav-hover hover:bg-home-hover tracking-wide">
          SEE PRODUCT
        </button>
      </div>

        
    </div>
    </>
   
  );
};

export default HomeHeader;
