import React from "react";
import Image from "next/image";
import getOne from "@/app/_assets/getOne.jpg";
import getTwo from "@/app/_assets/getTwo.jpg";
import getThree from "@/app/_assets/getThree.jpg";
import getFour from "@/app/_assets/getFour.jpg";
import StarRating from "../_animations/StarRating";
import Heading from "../_animations/Heading";

export default function GetInTouch() {
  return (
    <>
      <div className="flex flex-col md:flex-row m-12 bg-secondary bg-opacity-15 p-10">
        <div className="md:w-1/2 flex flex-col gap-3">
          <div className="w-full flex gap-3">
            <Image src={getOne} alt="image1" />
            <Image src={getTwo} alt="image2" />
          </div>
          <div className="w-full flex gap-3">
            <Image src={getThree} alt="image3" />
            <Image src={getFour} alt="image4" />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-6">
          <Heading
            title="GET IN TOUCH"
            line1="Work With Us. Lets Make Great"
            line2="Together."
          />

          <h1 className="text-4xl  font-marcellus text-[#1e1e1e] mb-4"></h1>
          <div className="text-lg flex gap-3 text-secondary mb-6">
            Our Best Skilled Attorneys, Trust Score 4.6
            <StarRating rating={4.6} />
          </div>
          <button>
            <a href="contactus" className="group flex items-center">
              <div className="p-2 bg-[#00192c] transform transition-transform duration-500 group-hover:bg-secondary rounded-tl-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-plus size-6 transform transition-transform duration-300 group-hover:rotate-90 stroke-white"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 5l0 14" />
                  <path d="M5 12l14 0" />
                </svg>
              </div>
              <div className="bg-secondary transform transition-transform duration-500 group-hover:bg-[#00192c] rounded-br-lg p-2 text-white font-semibold">
                (528) 456-7592
              </div>
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
