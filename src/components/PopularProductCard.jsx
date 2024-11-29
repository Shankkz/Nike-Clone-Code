

import { star } from "../assets/icons";


const PopularProductCard = ({ imgURL, name, price, rating }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-w-[280px] mx-auto ">
      {/* Wrapper with fixed height, responsive width, and hover effect */}
      <div className="rounded-[20px] overflow-hidden w-full h-[280px] transition-transform transform hover:scale-105 hover:shadow-[0_4px_30px_rgba(0,0,0,0.2)] duration-300">
        <img
          src={imgURL}
          alt={name}
          className="w-full h-full object-cover cursor-pointer active:opacity-80"
        />
      </div>

      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          ({4.7})
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;

