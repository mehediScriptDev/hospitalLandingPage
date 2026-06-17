import React, { useState, useEffect } from "react";
import img1 from "../assets/img_1.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup to ensure scrolling is restored if the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-200 flex items-center justify-between py-[14px] px-[56px] bg-white/97 backdrop-blur-lg border-b border-border shadow-[0_1px_20px_rgba(24,41,63,0.07)] animate-fade-down max-[1100px]:px-[28px] max-[640px]:px-[20px]">
        <a className="flex items-center gap-[12px] no-underline z-201" href="#">
          <img
            src={img1}
            alt="The Center for Surgery"
            className="w-[58px] h-[58px] object-contain max-[640px]:w-[48px] max-[640px]:h-[48px]"
          />
          <div>
            <div className="font-serif text-[1.1rem] font-semibold text-navy tracking-[0.02em] leading-[1.2] max-[640px]:text-[1rem]">
              The Center for Surgery
            </div>
            <div className="text-[0.64rem] font-medium text-blue-dark tracking-[0.14em] uppercase max-[640px]:text-[0.55rem]">
              Beverly Hills, CA
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-[34px] max-[1100px]:gap-[16px] list-none items-center">
          <li>
            <a
              href="#about"
              className="relative pb-[3px] text-[0.78rem] max-[1100px]:text-[0.7rem] font-medium text-navy tracking-[0.07em] uppercase transition-colors duration-200 hover:text-blue-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue after:transition-[width] after:duration-250 hover:after:w-full"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#specialties"
              className="relative pb-[3px] text-[0.78rem] max-[1100px]:text-[0.7rem] font-medium text-navy tracking-[0.07em] uppercase transition-colors duration-200 hover:text-blue-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue after:transition-[width] after:duration-250 hover:after:w-full"
            >
              Specialties
            </a>
          </li>
          <li>
            <a
              href="#insurance"
              className="relative pb-[3px] text-[0.78rem] max-[1100px]:text-[0.7rem] font-medium text-navy tracking-[0.07em] uppercase transition-colors duration-200 hover:text-blue-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue after:transition-[width] after:duration-250 hover:after:w-full"
            >
              Insurance
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className="relative pb-[3px] text-[0.78rem] max-[1100px]:text-[0.7rem] font-medium text-navy tracking-[0.07em] uppercase transition-colors duration-200 hover:text-blue-dark after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-blue after:transition-[width] after:duration-250 hover:after:w-full"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-cta text-[0.78rem] max-[1100px]:text-[0.7rem] font-medium text-navy tracking-[0.07em] uppercase relative pb-[3px] whitespace-nowrap text-center"
            >
              Request Consultation
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="flex lg:hidden flex-col justify-center items-center w-[30px] h-[30px] z-201 gap-[6px] bg-transparent border-none cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-full h-[2px] bg-navy transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""}`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-navy transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-full h-[2px] bg-navy transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-199 flex flex-col items-center justify-center transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <ul className="flex flex-col gap-[30px] list-none items-center text-center p-0 m-0">
          <li>
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[1.2rem] font-medium text-navy tracking-[0.07em] uppercase no-underline"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#specialties"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[1.2rem] font-medium text-navy tracking-[0.07em] uppercase no-underline"
            >
              Specialties
            </a>
          </li>
          <li>
            <a
              href="#insurance"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[1.2rem] font-medium text-navy tracking-[0.07em] uppercase no-underline"
            >
              Insurance
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[1.2rem] font-medium text-navy tracking-[0.07em] uppercase no-underline"
            >
              Reviews
            </a>
          </li>
          <li className="mt-[20px]">
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-blue-dark text-white py-[14px] px-[32px] rounded-[3px] text-[0.9rem] font-medium tracking-[0.07em] uppercase no-underline shadow-md"
            >
              Request Consultation
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
