import React from "react";
import img2 from "../assets/img_2.jpeg";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-2 pt-[86px] max-[1100px]:grid-cols-1">
      <div className="flex flex-col justify-center py-[72px] pr-[56px] pl-[72px] bg-navy relative overflow-hidden animate-fade-up max-[1100px]:pt-[96px] max-[1100px]:px-[36px] max-[1100px]:pb-[60px] max-[640px]:pt-[88px] max-[640px]:px-[20px] max-[640px]:pb-[48px] before:content-[''] before:absolute before:-top-[140px] before:-right-[100px] before:w-[480px] before:h-[480px] before:rounded-full before:bg-[radial-gradient(circle,rgba(106,174,214,0.12)_0%,transparent_70%)] before:pointer-events-none">
        <div className="inline-flex items-center gap-[10px] text-[0.68rem] font-semibold tracking-[0.18em] uppercase text-blue mb-[24px]">
          <span className="inline-block w-[32px] h-px bg-blue"></span>
          Beverly Hills Multi-Specialty Surgical Center
        </div>
        <h1 className="font-serif text-[clamp(2.6rem,3.8vw,4rem)] font-normal leading-[1.18] text-white mb-[24px]">
          Advanced Care.
          <br />
          <em className="text-blue italic font-serif">Exceptional</em>
          <br />
          Outcomes.
        </h1>
        <p className="text-[0.97rem] font-light leading-[1.8] text-white/65 max-w-[400px] mb-[40px]">
          Top-rated surgical excellence in the heart of Beverly Hills.
          Board-certified specialists. State-of-the-art operating suites. A
          patient-first experience at every step.
        </p>
        <div className="flex gap-[14px] flex-wrap">
          <a
            href="#contact"
            className="bg-blue text-white py-[14px] px-[30px] rounded-[3px] text-[0.78rem] font-semibold tracking-[0.09em] uppercase no-underline inline-block transition-all duration-200 hover:bg-blue-dark hover:-translate-y-[2px] hover:shadow-[0_8px_22px_rgba(106,174,214,0.3)]"
          >
            Request Consultation
          </a>
          <a
            href="#specialties"
            className="border-[1.5px] border-white/25 text-white/85 py-[14px] px-[30px] rounded-[3px] text-[0.78rem] font-medium tracking-[0.09em] uppercase no-underline inline-block transition-all duration-200 hover:border-blue hover:text-white hover:bg-blue/10"
          >
            Our Specialties
          </a>
        </div>
        <div className="flex gap-[36px] mt-[52px] pt-[36px] border-t border-white/10 max-[640px]:gap-[20px] max-[640px]:flex-wrap">
          <div>
            <div className="font-serif text-[2.2rem] font-light text-white leading-none">
              15+
            </div>
            <div className="text-[0.67rem] font-medium tracking-widest uppercase text-blue mt-[5px]">
              Specialties
            </div>
          </div>
          <div>
            <div className="font-serif text-[2.2rem] font-light text-white leading-none">
              5&#9733;
            </div>
            <div className="text-[0.67rem] font-medium tracking-widest uppercase text-blue mt-[5px]">
              Patient Rating
            </div>
          </div>
          <div>
            <div className="font-serif text-[2.2rem] font-light text-white leading-none">
              10K+
            </div>
            <div className="text-[0.67rem] font-medium tracking-widest uppercase text-blue mt-[5px]">
              Procedures
            </div>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden max-[1100px]:aspect-square">
        <img
          src={img2}
          alt="436 N Bedford Drive, Beverly Hills"
          className="w-full h-full object-cover object-top animate-zoom-in mix-blend-multiply bg-transparent"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#18293f1a] to-[#18293f59]"></div>
      </div>
    </section>
  );
}
