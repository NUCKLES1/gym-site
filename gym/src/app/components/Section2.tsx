'use client'
import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Image from "next/image";
import gym from "@/assets/dum-70 (1).png"

const Section2 = () => {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to("#stag", {
          scrollTrigger: {
            trigger: ".section2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          right: 0,
          y: 0,
          stagger: 0.25,
          duration: 1,
        });

        gsap.to("#stagger", {
          scrollTrigger: {
            trigger: ".section2",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          y: 0,
          stagger: 0.25,
          duration: 1,
        });

        gsap.to("#moveout", {
          scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          left: "-30%",
        });

        gsap.to(".moveright", {
          scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          left: "40%",
        });

        gsap.to("#fly", {
          scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          top: "34.5%",
          width: "16%",
          left: "45%",
        });

        gsap.to(".moveup", {
          scrollTrigger: {
            trigger: ".section3",
            start: "top bottom",
            end: "top top",
            scrub: 2,
            immediateRender: false,
          },
          stagger: 0.25,
          y: "-40%",
          duration: 1,
        });
      });
  return (
    <div className="w-[95%] section2 justify-between h-[100vh]">
      <div className="w-full justify-between flex max-sm:block mt-16 h-[60%]">
        <div className="w-[42%] max-sm:w-full gold pl-10 pt-12 radius h-full max-sm:h-[60%]">
          <div id="stagger" className="text-4xl moveright condensed translate-y-[8rem] relative letter">
            <p className="condensed">Make your</p>
            <p className="bold py-1 condensed">body strong</p>
            <p className="condensed">and mighty</p>
          </div>
          <p id="stagger" className="text-[15px] moveup max-md:text-[15px] translate-y-[-12rem] pt-3">
            Lorem ipsum dolor, sit amet <br /> consectetur adipisicing elit.
          </p>
          <button className="bg-black moveup py-4 opening px-8 max-md:text-[15px] max-md:py-2 max-md:px-4 text-white mt-6 text-2xl radius">
            Get started
          </button>
        </div>
        <div className='w-[56%] max-sm:w-full max-sm:mt-10 bg-black pl-10 pt-16 flex max-sm:h-[75%] radius h-full'>
          <div id="stag" className="text-3xl max-md:text-xl moveright space ml-[20%] max-sm:ml-0 big-minus w-[35%]
           mt-[-1rem] text-right max-sm:text-left condensed text-gray-400">
            <p>Explore the</p>
            <p className="gold-text bold">Benefits</p>
            <p>you many</p>
            <p>be due</p>
          </div>
          <div id="moveout" className="w-[30%] max-sm:w-[50%] ml-[10%] relative mt-[-1rem] max-sm:h-[80%] h-[90%]">
           <div id="stag" className="gold w-full freeman text-center minus roundy  h-[30%]">
            <p className="text-2xl pt-4 bold">15k</p>
            <p className="">Happy Clients</p>
           </div>
           <div id="stag" className="gold freeman w-full mt-5 text-center minus roundy h-[30%]">
            <p className="text-2xl pt-4 bold">+20</p>
            <p className="">Years Experience</p>
           </div>
           <div id="stag" className="gold freeman w-full mt-5 text-center minus roundy h-[30%]">
            <p className="text-2xl pt-4 bold">+15</p>
            <p className="">Expert Trainers</p>
           </div>
          </div>
        </div>
      </div>
      <div id="fly" className="flex max-sm:hidden relative w-[40%] radius2 backy mt-[1.3rem] h-[22%]">
        <div className="w-[5rem] h-[5rem] mt-8 ml-6 rounded-full gold">
            <Image src={gym} className="w-[3rem] rotate-[30deg] ml-4 mt-4 h-[3rem]" alt=" " />
        </div>
      </div>
      <div className="flex relative w-[40%] radius2 backy max-sm:top-[28%] max-sm:h-[18%] max-sm:w-full mt-[1.3rem] h-[22%]">
        <div className="w-[5rem] h-[5rem] mt-8 ml-6 rounded-full gold">
            <Image src={gym} className="w-[3rem] rotate-[30deg] ml-4 mt-4 h-[3rem]" alt=" " />
        </div>
      </div>
    </div>
  );
};

export default Section2;