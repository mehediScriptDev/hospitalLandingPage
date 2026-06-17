import React from "react";
import { useReveal } from "../utils/useReveal";

export default function Testimonials() {
  const revealRef = useReveal();

  return (
    <section
      ref={revealRef}
      className="bg-off-white py-[96px] px-[72px] reveal max-[1100px]:py-[72px] max-[1100px]:px-[36px] max-[640px]:py-[56px] max-[640px]:px-[20px]"
      id="testimonials"
    >
      <div className="text-center mb-[52px]">
        <div className="flex items-center justify-center gap-[10px] text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-blue-dark mb-[14px]">
          Patient Stories
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.9rem)] font-normal text-navy leading-tight mb-[16px]">
          What Our Patients Say
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-[24px] max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1">
        <div className="bg-white p-[32px] rounded-[4px] border-l-[3px] border-blue shadow-[0_3px_18px_rgba(24,41,63,0.05)]">
          <div className="text-[#c9a96e] text-[0.85rem] mb-[14px] tracking-[2px]">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>
          <p className="text-[0.9rem] text-text leading-[1.8] italic mb-[18px]">
            "Absolutely the best surgical experience I've ever had. The staff
            was warm and professional, the facility was immaculate, and my
            surgeon was brilliant. I felt completely at ease the entire time."
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-light flex items-center justify-center text-[1rem] text-blue-dark font-serif font-semibold">
              M
            </div>
            <div>
              <div className="text-[0.82rem] font-semibold text-navy">
                Michelle T.
              </div>
              <div className="text-[0.72rem] text-muted mt-[2px]">
                Knee Arthroscopy Patient
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-[32px] rounded-[4px] border-l-[3px] border-blue shadow-[0_3px_18px_rgba(24,41,63,0.05)]">
          <div className="text-[#c9a96e] text-[0.85rem] mb-[14px] tracking-[2px]">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>
          <p className="text-[0.9rem] text-text leading-[1.8] italic mb-[18px]">
            "After my accident, I was referred here and couldn't be more
            grateful. They handled all the lien paperwork seamlessly and my
            surgery outcome was incredible. Highly recommend."
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-light flex items-center justify-center text-[1rem] text-blue-dark font-serif font-semibold">
              C
            </div>
            <div>
              <div className="text-[0.82rem] font-semibold text-navy">
                Carlos M.
              </div>
              <div className="text-[0.72rem] text-muted mt-[2px]">
                Spine Surgery Patient
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-[32px] rounded-[4px] border-l-[3px] border-blue shadow-[0_3px_18px_rgba(24,41,63,0.05)]">
          <div className="text-[#c9a96e] text-[0.85rem] mb-[14px] tracking-[2px]">
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </div>
          <p className="text-[0.9rem] text-text leading-[1.8] italic mb-[18px]">
            "From my first call to post-op follow-up the experience was 5-star
            all the way. The pre-op team was thorough and my recovery was faster
            than expected. Truly world-class."
          </p>
          <div className="flex items-center gap-[10px]">
            <div className="w-[40px] h-[40px] rounded-full bg-blue-light flex items-center justify-center text-[1rem] text-blue-dark font-serif font-semibold">
              S
            </div>
            <div>
              <div className="text-[0.82rem] font-semibold text-navy">
                Sandra L.
              </div>
              <div className="text-[0.72rem] text-muted mt-[2px]">
                Outpatient Surgery Patient
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
