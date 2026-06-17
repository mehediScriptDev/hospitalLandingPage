import React from "react";

export default function Ribbon() {
  return (
    <div className="bg-blue-light py-[18px] px-[72px] flex items-center justify-center gap-[48px] flex-wrap border-b border-blue/20 max-[1100px]:py-[16px] max-[1100px]:px-[28px] max-[1100px]:gap-[24px]">
      <div className="flex items-center gap-[9px] text-[0.8rem] font-semibold text-navy tracking-[0.03em]">
        <span className="text-blue-dark flex">
          <svg
            className="w-[16px] h-[16px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </span>
        PPO Insurance Accepted
      </div>
      <div className="w-px h-[22px] bg-blue/35"></div>
      <div className="flex items-center gap-[9px] text-[0.8rem] font-semibold text-navy tracking-[0.03em]">
        <span className="text-blue-dark flex">
          <svg
            className="w-[16px] h-[16px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
        </span>
        Medical Liens Welcome
      </div>
      <div className="w-px h-[22px] bg-blue/35"></div>
      <div className="flex items-center gap-[9px] text-[0.8rem] font-semibold text-navy tracking-[0.03em]">
        <span className="text-blue-dark flex">
          <svg
            className="w-[16px] h-[16px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
          </svg>
        </span>
        (310) 409-2300
      </div>
      <div className="w-px h-[22px] bg-blue/35"></div>
      <div className="flex items-center gap-[9px] text-[0.8rem] font-semibold text-navy tracking-[0.03em]">
        <span className="text-blue-dark flex">
          <svg
            className="w-[16px] h-[16px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </span>
        436 N Bedford Dr, Beverly Hills
      </div>
    </div>
  );
}
