import React from "react";
import { useReveal } from "../utils/useReveal";

export default function About() {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      className="grid grid-cols-2 gap-[72px] items-center bg-white py-[96px] px-[72px] reveal max-[1100px]:grid-cols-1 max-[1100px]:py-[72px] max-[1100px]:px-[36px] max-[640px]:py-[56px] max-[640px]:px-[20px]"
      id="about"
    >
      <div className="relative h-[520px] max-[640px]:h-[300px]">
        <img
          className="absolute top-0 left-0 w-[76%] h-[80%] object-cover rounded-[4px] shadow-[0_18px_52px_rgba(24,41,63,0.13)]"
          src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=700&q=80"
          alt="Surgical team"
        />
        <img
          className="absolute bottom-0 right-0 w-[52%] h-[52%] object-cover rounded-[4px] shadow-[0_10px_32px_rgba(24,41,63,0.1)] border-[5px] border-white"
          src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80"
          alt="Medical facility"
        />
        <div className="absolute top-[48px] -right-[10px] w-[3px] h-[100px] bg-blue rounded-[2px]"></div>
      </div>
      <div>
        <div className="flex items-center gap-[10px] text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-blue-dark mb-[14px] before:content-[''] before:inline-block before:w-[22px] before:h-[1.5px] before:bg-blue-dark">
          About Us
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.9rem)] font-normal text-navy leading-tight mb-[16px]">
          Beverly Hills&#39;
          <br />
          Surgical Center
        </h2>
        <p className="text-[0.96rem] text-muted font-light leading-[1.75] mb-[30px] max-w-full">
          The Center for Surgery is a state-of-the-art, physician-owned
          multi-specialty surgical facility dedicated to delivering outstanding
          outcomes with a patient-first philosophy in a comfortable boutique
          environment.
        </p>
        <ul className="list-none flex flex-col gap-[14px]">
          <li className="flex items-start gap-[12px] text-[0.9rem] text-text leading-[1.65]">
            <div className="min-w-[7px] h-[7px] rounded-full bg-blue mt-[7px]"></div>
            <span>
              Board-certified surgeons across 15+ specialties, all carefully
              credentialed
            </span>
          </li>
          <li className="flex items-start gap-[12px] text-[0.9rem] text-text leading-[1.65]">
            <div className="min-w-[7px] h-[7px] rounded-full bg-blue mt-[7px]"></div>
            <span>
              AAAHC-accredited facility meeting the gold standard in outpatient
              surgical care
            </span>
          </li>
          <li className="flex items-start gap-[12px] text-[0.9rem] text-text leading-[1.65]">
            <div className="min-w-[7px] h-[7px] rounded-full bg-blue mt-[7px]"></div>
            <span>
              Personalized concierge-level services from consultation through
              recovery
            </span>
          </li>
          <li className="flex items-start gap-[12px] text-[0.9rem] text-text leading-[1.65]">
            <div className="min-w-[7px] h-[7px] rounded-full bg-blue mt-[7px]"></div>
            <span>
              Latest minimally invasive and robotic surgical technologies for
              faster healing
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
