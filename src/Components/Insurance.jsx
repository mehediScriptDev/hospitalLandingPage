import React from "react";
import { useReveal } from "../utils/useReveal";

export default function Insurance() {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      className="bg-white text-center py-[96px] px-[72px] reveal max-[1100px]:py-[72px] max-[1100px]:px-[36px] max-[640px]:py-[56px] max-[640px]:px-[20px]"
      id="insurance"
    >
      <div className="flex items-center justify-center gap-[10px] text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-blue-dark mb-[14px]">
        Flexible Payment Options
      </div>
      <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.9rem)] font-normal text-navy leading-tight mb-[16px] text-center">
        We Work With
        <br />
        Your Coverage
      </h2>
      <p className="text-[0.96rem] text-muted font-light leading-[1.75] max-w-[500px] mx-auto text-center">
        Everyone deserves access to exceptional surgical care. We&#39;ve made it
        as easy as possible to use your benefits.
      </p>
      <div className="grid grid-cols-1 gap-[28px] mx-auto mt-[52px] sm:grid-cols-2 xl:grid-cols-3">
        <div className="py-[40px] px-[28px] border border-border rounded-[4px] transition-transform duration-200 hover:-translate-y-[4px] hover:shadow-[0_14px_40px_rgba(24,41,63,0.07)]">
          <div className="w-[52px] h-[52px] rounded-full bg-blue-light flex items-center justify-center mx-auto mb-[18px]">
            <svg
              className="w-[26px] h-[26px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <h3 className="font-serif text-[1.3rem] text-navy mb-[10px]">
            PPO Insurance
          </h3>
          <p className="text-[0.84rem] text-muted leading-[1.7]">
            In-network with most major PPO plans. Our billing team verifies your
            benefits and explains your coverage before any procedure.
          </p>
        </div>
        <div className="py-[40px] px-[28px] border border-border rounded-[4px] transition-transform duration-200 hover:-translate-y-[4px] hover:shadow-[0_14px_40px_rgba(24,41,63,0.07)]">
          <div className="w-[52px] h-[52px] rounded-full bg-blue-light flex items-center justify-center mx-auto mb-[18px]">
            <svg
              className="w-[26px] h-[26px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
            </svg>
          </div>
          <h3 className="font-serif text-[1.3rem] text-navy mb-[10px]">
            Medical Liens
          </h3>
          <p className="text-[0.84rem] text-muted leading-[1.7]">
            For personal injury and workers&#39; comp cases we accept medical
            liens &mdash; receive care now, settle after your legal case
            resolves.
          </p>
        </div>
        <div className="py-[40px] px-[28px] border border-border rounded-[4px] transition-transform duration-200 hover:-translate-y-[4px] hover:shadow-[0_14px_40px_rgba(24,41,63,0.07)]">
          <div className="w-[52px] h-[52px] rounded-full bg-blue-light flex items-center justify-center mx-auto mb-[18px]">
            <svg
              className="w-[26px] h-[26px] stroke-blue-dark fill-none stroke-[1.5px]"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </div>
          <h3 className="font-serif text-[1.3rem] text-navy mb-[10px]">
            Free Benefit Verification
          </h3>
          <p className="text-[0.84rem] text-muted leading-[1.7]">
            Not sure about your coverage? Call (310) 409-2300 &mdash; our
            specialists verify your benefits at no charge with a clear cost
            estimate.
          </p>
        </div>
      </div>
    </section>
  );
}
