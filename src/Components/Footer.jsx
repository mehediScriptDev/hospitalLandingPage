import React from "react";
import img4 from "../assets/img_4.png";

export default function Footer() {
  return (
    <footer className="bg-navy text-white/55 pt-[56px] pb-[28px] px-[72px] max-[640px]:pt-[44px] max-[640px]:px-[20px] max-[640px]:pb-[24px]">
      <div className="flex flex-col items-center text-center gap-[24px] pb-[44px] border-b border-white/10 mb-[28px]">
        <div className="flex items-center gap-[12px]">
          <img
            src={img4}
            alt="The Center for Surgery"
            className="w-[48px] h-[48px] object-contain"
          />
          <div>
            <div className="font-serif text-[1rem] text-white font-semibold">
              The Center for Surgery
            </div>
            <div className="text-[0.62rem] text-blue tracking-widest uppercase">
              Beverly Hills, CA
            </div>
          </div>
        </div>
        <p className="text-[0.84rem] text-white/50 leading-[1.75]">
          Beverly Hills&#39; premier multi-specialty surgical center.
          <br />
          World-class surgical care delivered with compassion and precision.
        </p>
        <div className="flex items-center flex-wrap justify-center gap-[6px] text-[0.82rem] text-white/50">
          <span>
            436 N Bedford Dr, Suite 101 &nbsp;&middot;&nbsp; Beverly Hills, CA
            90210
          </span>
          <span className="text-white/20">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a
            href="tel:+13104092300"
            className="text-white/65 no-underline transition-colors duration-200 hover:text-blue-light"
          >
            (310) 409-2300
          </a>
          <span className="text-white/20">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a
            href="mailto:SC@thecenter4surgery.com"
            className="text-white/65 no-underline transition-colors duration-200 hover:text-blue-light"
          >
            SC@thecenter4surgery.com
          </a>
          <span className="text-white/20">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>Mon&ndash;Sat: 6am &ndash; 5pm</span>
        </div>
      </div>
      <div className="flex justify-between items-center text-[0.73rem] flex-wrap gap-[10px]">
        <span>&copy; 2025 The Center for Surgery. All rights reserved.</span>
        <div className="flex gap-[22px]">
          <a
            href="#"
            className="text-white/35 no-underline transition-colors duration-200 hover:text-white"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-white/35 no-underline transition-colors duration-200 hover:text-white"
          >
            HIPAA Notice
          </a>
        </div>
      </div>
    </footer>
  );
}
