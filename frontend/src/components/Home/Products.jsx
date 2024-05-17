import React from "react";
import ShopIcon from "../../assets/shop-icon.svg";
import Headphones from "../../assets/home/home-preview-headphones.svg";
import Speakers from "../../assets/home/home-preview-speakers.svg";
import Earphones from "../../assets/home/home-preview-earphones.svg";

const Products = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-center mt-[10em] min-h-screen px-5">
      <div className="bg-[#F1F1F1] h-[200px] w-full md:w-[45%] lg:w-[22%] rounded-lg flex flex-col items-center justify-center relative mb-[6em] md:mb-0">
        <img src={Headphones} alt="Headphones" className="absolute mb-[15em]" />
        <h2 className="font-manrope font-bold text-lg tracking-wide mt-8">
          HEADPHONES
        </h2>
        <button className="flex items-center mt-2 text-gray-500 hover:text-nav-hover">
          SHOP
          <img src={ShopIcon} alt="Shop Icon" className="ml-2" />
        </button>
      </div>
      <div className="bg-[#F1F1F1] h-[200px] w-full md:w-[45%] lg:w-[22%] rounded-lg flex flex-col items-center justify-center relative mb-[6em] md:mb-0">
        <img src={Speakers} alt="Speakers" className="absolute mb-[15em]" />
        <h2 className="font-manrope font-bold text-lg tracking-wide mt-8">
          SPEAKERS
        </h2>
        <button className="flex items-center mt-2 text-gray-500 hover:text-nav-hover">
          SHOP
          <img src={ShopIcon} alt="Shop Icon" className="ml-2" />
        </button>
      </div>
      <div className="bg-[#F1F1F1] h-[200px] w-full md:w-[45%] lg:w-[22%] rounded-lg flex flex-col items-center justify-center relative mb-10 md:mb-0">
        <img src={Earphones} alt="Earphones" className="absolute mb-[15em]" />
        <h2 className="font-manrope font-bold text-lg tracking-wide mt-8">
          EARPHONES
        </h2>
        <button className="flex items-center mt-2 text-gray-500 hover:text-nav-hover">
          SHOP
          <img src={ShopIcon} alt="Shop Icon" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Products;