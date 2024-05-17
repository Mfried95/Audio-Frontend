import React from "react";
import ShopIcon from "../../assets/shop-icon.svg";
import Headphones from "../../assets/home/home-preview-headphones.svg"
import Speakers from "../../assets/home/home-preview-speakers.svg"
import Earphones from "../../assets/home/home-preview-earphones.svg"

const Products = () => {
  return (
    <div className="flex gap-5 justify-center mt-[10em] h-screen">
      <div className="bg-[#F1F1F1] h-[200px] w-[22%] rounded-lg flex flex-col items-center justify-center ">
        <img src={Headphones} alt="" className="absolute mb-[15em]" />
        <h2 className="font-manrope font-bold text-lg tracking-wide mt-8">HEADPHONES</h2>
        <button className="flex items-center mt-2 text-gray-500">
          SHOP
          <img src={ShopIcon} alt="Shop Icon" className="ml-2" />
        </button>
      </div>
      <div className="bg-[#F1F1F1] h-[200px] w-[22%] rounded-lg flex flex-col items-center justify-center ">
        <img src={Speakers} alt="" className="absolute mb-[15em]" />
        <h2 className="font-manrope font-bold text-lg tracking-wide mt-8">SPEAKERS</h2>
        <button className="flex items-center mt-2 text-gray-500">
          SHOP
          <img src={ShopIcon} alt="Shop Icon" className="ml-2" />
        </button>
      </div>
      <div className="bg-[#F1F1F1] h-[200px] w-[22%] rounded-lg flex flex-col items-center justify-center ">
        <img src={Earphones} alt="" className="absolute mb-[15em]" />
        <h2 className="font-manrope font-bold text-lg tracking-wide mt-8">EARPHONES</h2>
        <button className="flex items-center mt-2 text-gray-500">
          SHOP
          <img src={ShopIcon} alt="Shop Icon" className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Products;