"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Poster02() {
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);
  return (
    <div
      className={`w-4/5 bg-primary text-white h-96 flex justify-between items-center mx-auto overflow-hidden transform transition-transform duration-1000 ease-out ${
        isInView ? "translate-y-0" : "translate-y-32 opacity-0"
      }`}
      ref={elementRef}
    >
      <div
        className="relative block w-1/6 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[100%] h-full bg-center bg-cover bg-gradient-to-t from-secondary"
          style={{
            transformOrigin: "inherit",
            transform: "skewX(-30deg)",
          }}
        ></div>
      </div>
      <div
        className="relative block w-1/5 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[190%] h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('http://i.imgur.com/kreZqnx.jpg')",
            transformOrigin: "inherit",
            transform: "skewX(30deg)",
          }}
        ></div>
      </div>
      <div
        className="relative block w-1/6 pb-[25%] overflow-hidden"
        style={{
          transformOrigin: "0 100%",
          transform: "skewX(30deg) translateZ(1px)",
        }}
      >
        <div
          className="absolute w-[190%] h-full bg-center bg-cover bg-gradient-to-b from-secondary"
          style={{
            transformOrigin: "inherit",
            transform: "skewX(30deg)",
          }}
        ></div>
      </div>
      <div className="flex flex-col gap-5 p-5">
        <h3 className="flex items-center gap-2 text-2xl text-secondary">
          <div className="h-3 w-5 bg-gradient-to-r from-secondary rounded-tl-md rounded-br-md"></div>
          Contact
          <div className="h-3 w-5 bg-gradient-to-l from-secondary rounded-tl-md rounded-br-md"></div>
        </h3>
        <p className="flex flex-col text-4xl font-bold">
          <span>Are You Looking for Help</span>
          <span>From a Lawyer?</span>
        </p>
        <a href="contactus">
          <button className="flex justify-center items-center">
            <div className="p-2 bg-white rounded-tl-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-plus size-6"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="#b9967e"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </div>
            <div className="bg-secondary rounded-br-lg p-2 text-white font-semibold">
              Contact Us
            </div>
          </button>
        </a>
      </div>
    </div>
  );
}
