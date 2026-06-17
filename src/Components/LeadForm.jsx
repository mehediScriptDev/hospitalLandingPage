import React, { useState } from "react";
import { useReveal } from "../utils/useReveal";

export default function LeadForm() {
  const revealRef = useReveal();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    inquiry: "",
    specialty: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    const required = ["fname", "lname", "phone", "email", "inquiry"];
    let valid = true;
    required.forEach((id) => {
      if (!formData[id].trim()) {
        newErrors[id] = true;
        valid = false;
      }
    });
    setErrors(newErrors);
    if (valid) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: false });
    }
  };

  const inputClass = (id) =>
    `border ${errors[id] ? "border-[#e05252]" : "border-blue/30"} rounded-[3px] py-[11px] px-[14px] text-[0.88rem] font-sans text-text bg-off-white transition-all duration-200 outline-none focus:border-blue focus:shadow-[0_0_0_3px_rgba(106,174,214,0.12)] focus:bg-white w-full`;

  return (
    <section
      ref={revealRef}
      className="bg-navy grid grid-cols-2 min-h-[580px] p-0 reveal max-[1100px]:grid-cols-1"
      id="contact"
    >
      <div className="py-[72px] px-[56px] flex flex-col justify-center relative overflow-hidden max-[1100px]:py-[56px] max-[1100px]:px-[36px] max-[640px]:py-[48px] max-[640px]:px-[20px] before:content-[''] before:absolute before:-bottom-[120px] before:-right-[80px] before:w-[360px] before:h-[360px] before:rounded-full before:bg-[radial-gradient(circle,rgba(106,174,214,0.1)_0%,transparent_70%)] before:pointer-events-none">
        <div className="flex items-center gap-[10px] text-[0.66rem] font-semibold tracking-[0.18em] uppercase text-blue mb-[14px] before:content-[''] before:inline-block before:w-[22px] before:h-[1.5px] before:bg-blue">
          Get in Touch
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,2.8vw,2.9rem)] font-normal text-white leading-tight mb-[16px]">
          Ready to Take
          <br />
          the Next Step?
        </h2>
        <p className="text-[0.96rem] text-white/55 font-light leading-[1.75] mb-[36px] max-w-[500px]">
          Our care coordinators respond within one business day. We&#39;ll
          verify your insurance and answer any questions.
        </p>
        <div className="flex flex-col gap-[16px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-full bg-blue/12 border border-blue/25 flex items-center justify-center shrink-0">
              <svg
                className="w-[16px] h-[16px] stroke-blue fill-none stroke-[1.8px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <div className="text-[0.86rem] text-white/75 leading-normal">
              <strong className="block text-[0.78rem] tracking-[0.04em] uppercase mb-[2px] text-white font-semibold">
                Phone
              </strong>
              (310) 409-2300
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-full bg-blue/12 border border-blue/25 flex items-center justify-center shrink-0">
              <svg
                className="w-[16px] h-[16px] stroke-blue fill-none stroke-[1.8px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="text-[0.86rem] text-white/75 leading-normal">
              <strong className="block text-[0.78rem] tracking-[0.04em] uppercase mb-[2px] text-white font-semibold">
                Email
              </strong>
              SC@thecenter4surgery.com
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-full bg-blue/12 border border-blue/25 flex items-center justify-center shrink-0">
              <svg
                className="w-[16px] h-[16px] stroke-blue fill-none stroke-[1.8px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div className="text-[0.86rem] text-white/75 leading-normal">
              <strong className="block text-[0.78rem] tracking-[0.04em] uppercase mb-[2px] text-white font-semibold">
                Address
              </strong>
              436 N Bedford Dr, Suite 101
              <br />
              Beverly Hills, CA 90210
            </div>
          </div>
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-full bg-blue/12 border border-blue/25 flex items-center justify-center shrink-0">
              <svg
                className="w-[16px] h-[16px] stroke-blue fill-none stroke-[1.8px]"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <div className="text-[0.86rem] text-white/75 leading-normal">
              <strong className="block text-[0.78rem] tracking-[0.04em] uppercase mb-[2px] text-white font-semibold">
                Hours
              </strong>
              Monday &ndash; Saturday, 6:00 AM &ndash; 5:00 PM
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[64px] px-[56px] flex flex-col justify-center max-[1100px]:py-[48px] max-[1100px]:px-[36px] max-[640px]:py-[48px] max-[640px]:px-[20px]">
        <h3 className="font-serif text-[1.8rem] font-medium text-navy mb-[8px]">
          Request a Consultation
        </h3>
        <p className="text-[0.85rem] text-muted mb-[32px] leading-[1.6]">
          Fill out the form below and our team will be in touch shortly.
        </p>

        {!submitted ? (
          <form id="leadForm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-[16px] max-[640px]:grid-cols-1">
              <div className="flex flex-col gap-[6px] mb-[16px]">
                <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-navy">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Jane"
                  id="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className={inputClass("fname")}
                />
              </div>
              <div className="flex flex-col gap-[6px] mb-[16px]">
                <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-navy">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  id="lname"
                  value={formData.lname}
                  onChange={handleChange}
                  className={inputClass("lname")}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[16px] max-[640px]:grid-cols-1">
              <div className="flex flex-col gap-[6px] mb-[16px]">
                <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-navy">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(310) 000-0000"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass("phone")}
                />
              </div>
              <div className="flex flex-col gap-[6px] mb-[16px]">
                <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-navy">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@email.com"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass("email")}
                />
              </div>
            </div>
            <div className="flex flex-col gap-[6px] mb-[16px]">
              <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-navy">
                Type of Inquiry
              </label>
              <select
                id="inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                className={`${inputClass("inquiry")} appearance-none pr-[36px] cursor-pointer`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237a8fa6' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                }}
              >
                <option value="">Select one&hellip;</option>
                <option>Consultation Request</option>
                <option>Insurance / Benefit Verification</option>
                <option>Medical Lien Inquiry</option>
                <option>General Question</option>
                <option>Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-[6px] mb-[16px]">
              <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-navy">
                Specialty / Procedure of Interest
              </label>
              <select
                id="specialty"
                value={formData.specialty}
                onChange={handleChange}
                className={`${inputClass("specialty")} appearance-none pr-[36px] cursor-pointer`}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%237a8fa6' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 14px center",
                }}
              >
                <option value="">Select one&hellip;</option>
                <option>Orthopedic Surgery</option>
                <option>Neurosurgery / Spine</option>
                <option>General Surgery</option>
                <option>Pain Management</option>
                <option>Ophthalmology</option>
                <option>ENT / Head &amp; Neck</option>
                <option>Gynecology</option>
                <option>Plastic Surgery</option>
                <option>Not Sure / Other</option>
              </select>
            </div>
            <div className="flex flex-col gap-[6px] mb-[16px]">
              <label className="text-[0.72rem] font-semibold tracking-widest uppercase text-navy">
                Message (Optional)
              </label>
              <textarea
                placeholder="Tell us about your situation or any questions you have&hellip;"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass("message")} resize-y min-h-[88px]`}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-dark text-white p-[14px] border-none rounded-[3px] cursor-pointer text-[0.82rem] font-bold tracking-widest uppercase font-sans transition-all duration-200 mt-[4px] hover:bg-navy hover:-translate-y-px"
            >
              Submit Request
            </button>
            <p className="text-[0.72rem] text-muted text-center mt-[10px]">
              Your information is kept strictly confidential in accordance with
              HIPAA.
            </p>
          </form>
        ) : (
          <div
            className="text-center py-[32px] px-[20px] flex flex-col items-center gap-[14px]"
            id="formSuccess"
          >
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6aaed6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12l2 2 4-4" />
            </svg>
            <h4 className="font-serif text-[1.6rem] text-navy">
              Request Received!
            </h4>
            <p className="text-[0.88rem] text-muted max-w-[300px] leading-[1.7]">
              Thank you. A member of our care team will be in touch within one
              business day.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
