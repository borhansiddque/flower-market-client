import React from "react";
import bannerImage from "../../assets/bannerImage.png";
import bannerFlower1 from "../../assets/banner-flower.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <div className="flex-1">
        <h1 className="text-6xl font-bold leading-tight">
          ALWAYS <span className="text-orange-500">FRESH FLOWERS</span>
        </h1>
        <p className="w-3/4 mt-4 opacity-70 text-xl">
          Indulge your senses with the beauty and fragrance of our fresh flower
          shop. From classic roses to exotic blooms, we offer a wide variety of
          fresh flowers that are perfect for any occasion.{" "}
        </p>
        <Link to={"/"}>
          <button className="px-6 py-3 mt-6 text-white bg-orange-500 rounded-lg hover:bg-orange-600 cursor-pointer">
            Shop Now
          </button>
        </Link>
      </div>
      <div className="flex-1">
        <img src={bannerImage} alt="" className="w-full rounded-3xl border-r-8 border-b-2 border-orange-100" />
      </div>
      <img src={bannerFlower1} alt="" className="absolute top-20 left-0 opacity-5 animate-spin" />
      <img src={bannerFlower1} alt="" className="absolute top-20 right-0 opacity-5 animate-spin" />
      <img src={bannerFlower1} alt="" className="absolute bottom-20 left-0 opacity-5 animate-spin" />
      <img src={bannerFlower1} alt="" className="absolute bottom-20 right-0 opacity-5 animate-spin" />
    </div>
  );
};

export default Banner;
