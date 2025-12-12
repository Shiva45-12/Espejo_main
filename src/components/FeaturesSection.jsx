import React from "react";
import { FaCarAlt } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { SiAdguard } from "react-icons/si";

const features = [
  {
    icon: <FaCarAlt className="text-[#f6c343] w-12 h-12" />,
    title: "100% CUSTOMIZATION",
    desc: "All products we offer are tailored made for you",
  },
  {
    icon: <MdSupportAgent className="text-[#f6c343] w-12 h-12" />,
    title: "SUPPORT 24/7",
    desc: "Contact us 24 hours a day, 7 days a week",
  },
  {
    icon: <TbTruckDelivery className="text-[#f6c343] w-12 h-12" />,
    title: "100% SAFE DELIVERY",
    desc: "All products comes with free transportation insurance",
  },
  {
    icon: <SiAdguard className="text-[#f6c343] w-12 h-12" />,
    title: "5 YEAR WARRANTY",
    desc: "We are the only brand to provide 5 years of warranty",
  },
];

const FeaturesSection = () => {
  return (
    <div className="w-full bg-black py-16 border-y border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            {item.icon}
            <h3 className="text-white font-semibold text-[18px] tracking-wide">
              {item.title}
            </h3>
            <p className="text-gray-300 text-[16px] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
