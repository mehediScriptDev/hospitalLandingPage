import React from "react";
import { useReveal } from "../utils/useReveal";

export default function Specialties() {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      className="bg-off-white py-[96px] px-[72px] reveal max-[1100px]:py-[72px] max-[1100px]:px-[36px] max-[640px]:py-[56px] max-[640px]:px-[20px]"
      id="specialties"
    >
      <div className="max-w-[540px] mb-[52px]">
        <div className="flex items-center gap-[10px] text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-blue-dark mb-[14px] before:content-[''] before:inline-block before:w-[22px] before:h-[1.5px] before:bg-blue-dark">
          Our Specialties
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.9rem)] font-normal text-navy leading-tight mb-[16px]">
          Comprehensive Surgical Expertise
        </h2>
        <p className="text-[0.96rem] text-muted font-light leading-[1.75] max-w-[500px]">
          Fellowship-trained specialists covering the full spectrum of surgical
          care in a convenient outpatient setting.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-[20px] max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
        <div
          className="bg-white py-[32px] px-[24px] rounded-[4px] border border-border transition-all duration-250 cursor-default hover:-translate-y-[5px] hover:shadow-[0_16px_44px_rgba(24,41,63,0.09)] hover:border-blue"
          style={{ transitionDelay: "0s" }}
        >
          <div className="w-[44px] h-[44px] rounded-full bg-blue-light flex items-center justify-center mb-[16px]">
            <svg
              className="w-[22px] h-[22px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M18 20V10M12 20V4M6 20v-6" />
            </svg>
          </div>
          <div className="font-serif text-[1.2rem] font-semibold text-navy mb-[8px]">
            Orthopedic Surgery
          </div>
          <p className="text-[0.82rem] text-muted leading-[1.65]">
            Joint reconstruction, arthroscopy, sports medicine, and spine
            procedures by fellowship-trained specialists.
          </p>
        </div>
        <div
          className="bg-white py-[32px] px-[24px] rounded-[4px] border border-border transition-all duration-250 cursor-default hover:-translate-y-[5px] hover:shadow-[0_16px_44px_rgba(24,41,63,0.09)] hover:border-blue"
          style={{ transitionDelay: "0.05s" }}
        >
          <div className="w-[44px] h-[44px] rounded-full bg-blue-light flex items-center justify-center mb-[16px]">
            <svg
              className="w-[22px] h-[22px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="font-serif text-[1.2rem] font-semibold text-navy mb-[8px]">
            General Surgery
          </div>
          <p className="text-[0.82rem] text-muted leading-[1.65]">
            Laparoscopic and robotic general surgery including hernia repair,
            gallbladder, and complex procedures.
          </p>
        </div>
        <div
          className="bg-white py-[32px] px-[24px] rounded-[4px] border border-border transition-all duration-250 cursor-default hover:-translate-y-[5px] hover:shadow-[0_16px_44px_rgba(24,41,63,0.09)] hover:border-blue"
          style={{ transitionDelay: "0.1s" }}
        >
          <div className="w-[44px] h-[44px] rounded-full bg-blue-light flex items-center justify-center mb-[16px]">
            <svg
              className="w-[22px] h-[22px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </div>
          <div className="font-serif text-[1.2rem] font-semibold text-navy mb-[8px]">
            Pain Management
          </div>
          <p className="text-[0.82rem] text-muted leading-[1.65]">
            Interventional pain procedures, nerve blocks, spinal injections, and
            neurostimulation therapies.
          </p>
        </div>
        <div
          className="bg-white py-[32px] px-[24px] rounded-[4px] border border-border transition-all duration-250 cursor-default hover:-translate-y-[5px] hover:shadow-[0_16px_44px_rgba(24,41,63,0.09)] hover:border-blue"
          style={{ transitionDelay: "0.15s" }}
        >
          <div className="w-[44px] h-[44px] rounded-full bg-blue-light flex items-center justify-center mb-[16px]">
            <svg
              className="w-[22px] h-[22px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <div className="font-serif text-[1.2rem] font-semibold text-navy mb-[8px]">
            Ophthalmology
          </div>
          <p className="text-[0.82rem] text-muted leading-[1.65]">
            Cataract surgery, LASIK, retinal procedures, and oculoplastic
            surgery by elite eye specialists.
          </p>
        </div>
        <div
          className="bg-white py-[32px] px-[24px] rounded-[4px] border border-border transition-all duration-250 cursor-default hover:-translate-y-[5px] hover:shadow-[0_16px_44px_rgba(24,41,63,0.09)] hover:border-blue"
          style={{ transitionDelay: "0.2s" }}
        >
          <div className="w-[44px] h-[44px] rounded-full bg-blue-light flex items-center justify-center mb-[16px]">
            <svg
              className="w-[22px] h-[22px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              <polyline points="9,22 9,12 15,12 15,22" />
            </svg>
          </div>
          <div className="font-serif text-[1.2rem] font-semibold text-navy mb-[8px]">
            ENT / Head &amp; Neck
          </div>
          <p className="text-[0.82rem] text-muted leading-[1.65]">
            Sinus surgery, thyroid procedures, ear surgery, and reconstructive
            head and neck procedures.
          </p>
        </div>
        <div
          className="bg-white py-[32px] px-[24px] rounded-[4px] border border-border transition-all duration-250 cursor-default hover:-translate-y-[5px] hover:shadow-[0_16px_44px_rgba(24,41,63,0.09)] hover:border-blue"
          style={{ transitionDelay: "0.25s" }}
        >
          <div className="w-[44px] h-[44px] rounded-full bg-blue-light flex items-center justify-center mb-[16px]">
            <svg
              className="w-[22px] h-[22px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10C8.45 2.04 4.86 7.66 4.5 12c-.37 4.43 1.27 9.95 7.5 10z" />
            </svg>
          </div>
          <div className="font-serif text-[1.2rem] font-semibold text-navy mb-[8px]">
            Gynecology
          </div>
          <p className="text-[0.82rem] text-muted leading-[1.65]">
            Minimally invasive gynecologic surgery including hysterectomy,
            fibroid removal, and endometriosis treatment.
          </p>
        </div>
        <div
          className="bg-white py-[32px] px-[24px] rounded-[4px] border border-border transition-all duration-250 cursor-default hover:-translate-y-[5px] hover:shadow-[0_16px_44px_rgba(24,41,63,0.09)] hover:border-blue"
          style={{ transitionDelay: "0.3s" }}
        >
          <div className="w-[44px] h-[44px] rounded-full bg-blue-light flex items-center justify-center mb-[16px]">
            <svg
              className="w-[22px] h-[22px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z" />
            </svg>
          </div>
          <div className="font-serif text-[1.2rem] font-semibold text-navy mb-[8px]">
            Plastic Surgery
          </div>
          <p className="text-[0.82rem] text-muted leading-[1.65]">
            Reconstructive and aesthetic procedures by board-certified plastic
            surgeons with artistic precision.
          </p>
        </div>
      </div>
    </section>
  );
}
