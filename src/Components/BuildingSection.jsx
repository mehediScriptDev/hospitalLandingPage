import React from "react";
import img3 from "../assets/img_3.png";
import { useReveal } from "../utils/useReveal";

export default function BuildingSection() {
  const revealRef = useReveal();

  return (
    <div
      ref={revealRef}
      className="grid grid-cols-2 min-h-[520px] reveal max-[1100px]:grid-cols-1"
    >
      <div className="relative overflow-hidden h-full max-[1100px]:h-[400px] max-[640px]:h-[300px] bg-white flex items-center">
        <img
          src={img3}
          alt="The Center for Surgery — Entrance at Suite 101"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="bg-off-white flex flex-col justify-center py-[64px] px-[56px]">
        <div className="flex items-center gap-[10px] text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-blue-dark mb-[14px] before:content-[''] before:inline-block before:w-[22px] before:h-[1.5px] before:bg-blue-dark">
          Our Location
        </div>
        <h2 className="font-serif text-[clamp(2rem,2.8vw,2.8rem)] font-normal text-navy leading-tight mb-[16px]">
          Find Us at
          <br />
          436 N Bedford Dr
          <br />
          Suite 101
        </h2>
        <p className="text-[0.96rem] text-muted font-light leading-[1.75] mb-[32px] max-w-[420px]">
          Nestled in the heart of Beverly Hills, our beautiful building offers
          convenient access, comfortable surroundings, and the world-class care
          you deserve.
        </p>
        <div className="flex flex-col gap-[14px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-full bg-blue-light border border-blue/25 flex items-center justify-center shrink-0">
              <svg
                className="w-[16px] h-[16px] stroke-blue-dark fill-none stroke-[1.8px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="text-[0.88rem] text-text leading-normal">
              <strong className="block text-[0.78rem] tracking-[0.04em] uppercase mb-[2px] text-navy font-semibold">
                Address
              </strong>
              436 N Bedford Dr, Suite 101
              <br />
              Beverly Hills, CA 90210
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-full bg-blue-light border border-blue/25 flex items-center justify-center shrink-0">
              <svg
                className="w-[16px] h-[16px] stroke-blue-dark fill-none stroke-[1.8px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div className="text-[0.88rem] text-text leading-normal">
              <strong className="block text-[0.78rem] tracking-[0.04em] uppercase mb-[2px] text-navy font-semibold">
                Phone
              </strong>
              (310) 409-2300
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-full bg-blue-light border border-blue/25 flex items-center justify-center shrink-0">
              <svg
                className="w-[16px] h-[16px] stroke-blue-dark fill-none stroke-[1.8px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <div className="text-[0.88rem] text-text leading-normal">
              <strong className="block text-[0.78rem] tracking-[0.04em] uppercase mb-[2px] text-navy font-semibold">
                Hours
              </strong>
              Monday &ndash; Saturday, 6:00 AM &ndash; 5:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
