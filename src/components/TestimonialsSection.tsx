import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion"; // 1. Import Framer Motion

type Testimonial = {
  id: number;
  name: string;
  role?: string;
  quote: string;
  rating?: number;
};

const TEST_DATA: Testimonial[] = [
  {
    id: 1,
    name: "Haldiram Foods",
    role: "Manager",
    quote:
      "We were extremely satisfied with Airtech Engineering & Solutions execution quality. Their engineering team delivered the project with precision, ensured seamless integration, and provided clear training that helped our internal staff operate the system confidently.",
    rating: 5,
  },
  {
    id: 2,
    name: "Deenanath Mangeshkar Hospital",
    role: "Engineer",
    quote:
      "Their service quality has been consistent and highly professional. Every report was submitted well within timelines, and their proactive communication helped avoid delays in our hospital operations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ruby Hall Clinic",
    role: "CEO",
    quote:
      "Airtech Engineering & Solutions has been our trusted partner since 2004. Their support across all our expansion projects has been exceptional. Their technical depth, reliability, and long-term commitment truly set them apart in the HVAC industry.",
    rating: 5,
  },
  {
    id: 4,
    name: "Siddhivinayak Foods",
    role: "Procurement Head",
    quote:
      "Professional, punctual, and dependable. Their maintenance support has been consistent and their team has deep domain expertise that reflects in every project delivered.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sunrise Industries",
    role: "Plant Manager",
    quote:
      "Highly efficient team with strong technical knowledge. They understand industry-specific cooling requirements very well and tailor their solutions accordingly.",
    rating: 5,
  },
  {
    id: 6,
    name: "Suyog Development",
    role: "Project Lead",
    quote:
      "The execution was flawless, and the project was delivered ahead of schedule. Their engineering strength and after-sales service make them our preferred HVAC partner.",
    rating: 5,
  },
  {
    id: 7,
    name: "Dadu's Sweets",
    role: "Manager",
    quote:
      "Airtech Engineering & Solutions cooling solutions perfectly meet our production environment needs. The installation was smooth, and the support team has been extremely responsive.",
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  const [index, setIndex] = useState(0);

  const [visibleCount, setVisibleCount] = useState<number>(() =>
    typeof window !== "undefined" && window.innerWidth >= 1024
      ? 3
      : typeof window !== "undefined" && window.innerWidth >= 768
      ? 2
      : 1
  );

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      const newCount = w >= 1024 ? 3 : w >= 768 ? 2 : 1;
      setVisibleCount(newCount);
      setIndex((prev) =>
        Math.min(prev, Math.max(0, TEST_DATA.length - newCount))
      );
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const maxIndex = Math.max(0, TEST_DATA.length - visibleCount);

  const goLeft = () => setIndex((i) => Math.max(0, i - 1));
  const goRight = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const goTo = (i: number) =>
    setIndex(() => Math.min(maxIndex, Math.max(0, i)));

  const visible = useMemo(
    () => TEST_DATA.slice(index, index + visibleCount),
    [index, visibleCount]
  );

  return (
    <section id="testimonials" className="relative pb-6 overflow-hidden">
      
      <div className="py-12 px-4 md:px-8 text-center rounded-b-3xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-[#4A3F35]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          What Our Clients Say
        </motion.h2>
        
        <motion.p 
          className="text-base md:text-lg text-[#1F1F1F] max-w-2xl mx-auto mt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} 
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Trusted by industry leaders across India for reliable and innovative HVAC solutions.
        </motion.p>
      </div>

      {/* --- Carousel Section --- */}
      <div className="max-w-7xl mx-auto px-4 md:px-14 mt-10 relative">

        {/* LEFT ARROW */}
        {index > 0 && (
          <button
            onClick={goLeft}
            aria-label="Previous testimonials"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.293a1 1 0 010-1.414L15.586 10l-3.293-3.879a1 1 0 011.414-1.414l4 4.707a1 1 0 010 1.414l-4 4.707a1 1 0 01-1.414 0z"
                transform="rotate(180 14 10)"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {/* RIGHT ARROW */}
        {index < maxIndex && (
          <button
            onClick={goRight}
            aria-label="Next testimonials"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md border border-gray-200 w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 15.293a1 1 0 010-1.414L15.586 10l-3.293-3.879a1 1 0 011.414-1.414l4 4.707a1 1 0 010 1.414l-4 4.707a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {/* Cards Grid */}
        <div className="flex gap-6 md:gap-8 justify-center">
          {visible.map((t) => (
            <article
              key={t.id}
              className="relative bg-white rounded-xl border border-[#F4A261] shadow-sm px-6 py-8 md:px-8 md:py-10 min-h-[260px] w-full max-w-[420px] transition-transform duration-300"
            >
              {/* Quote icon */}
              <div className="absolute -left-4 -top-4">
                <div className="bg-[#F4A261] rounded-full p-2 border border-[#F4A261]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-[#8B4513]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M7.17 6A3 3 0 114 9.83V13a1 1 0 001 1h3a1 1 0 001-1V9.83A3 3 0 017.17 6z" />
                    <path d="M16.17 6A3 3 0 1113 9.83V13a1 1 0 001 1h3a1 1 0 001-1V9.83A3 3 0 0116.17 6z" />
                  </svg>
                </div>
              </div>

              <blockquote className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
                “{t.quote}”
              </blockquote>

              <div className="text-sm text-gray-700 font-semibold">
                {t.name}
              </div>
              {t.role && (
                <div className="text-xs text-gray-400 mt-1">{t.role}</div>
              )}

              <div className="mt-4 flex items-center justify-center gap-1">
                {Array.from({ length: t.rating ?? 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#F4A261]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.287 3.973c.3.921-.755 1.688-1.538 1.118l-3.384-2.46a1 1 0 00-1.176 0l-3.384 2.46c-.783.57-1.838-.197-1.538-1.118l1.287-3.973a1 1 0 00-.364-1.118L2.047 9.4c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.973z" />
                  </svg>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#1a2c6d] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;