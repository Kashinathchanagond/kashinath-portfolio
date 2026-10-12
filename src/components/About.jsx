import React, { useEffect, useRef } from 'react';
import aboutImage from '../assets/about_section/about_section.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const frontendSkills = [
  "Python", "SQL", "MySQL", "PostgreSQL", "Pandas", "NumPy", "Data Ingestion"
];

const backendSkills = [
  "Power BI", "Tableau", "Advanced Excel", "DAX Formulas", "Power Query", "Dashboards", "KPI Visuals"
];

const aiSkills = [
  "EDA", "Statistical Insights", "Data Cleaning", "Anomaly Detection", "Matplotlib", "Seaborn"
];

const toolsSkills = [
  "KPI Dictionaries", "Data Quality Contracts", "Data Modeling", "DBMS", "Jupyter", "Git & GitHub"
];
const aboutwords = [
  { text: "Hey," }, { text: "I'm" },
  { text: "Kashinath.", className: "font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" },
  { text: "A" }, { text: "results-driven" }, { text: "Data" }, { text: "Analyst" }, { text: "and" }, { text: "Business" }, { text: "Intelligence" }, { text: "specialist" }, { text: "passionate" }, { text: "about" }, { text: "transforming" }, { text: "raw" }, { text: "data" }, { text: "into" }, { text: "actionable" }, { text: "business" }, { text: "insights." },
  { text: "I" }, { text: "specialize" }, { text: "in" }, { text: "exploratory" }, { text: "data" }, { text: "analysis," }, { text: "data" }, { text: "cleaning," }, { text: "and" }, { text: "interactive" }, { text: "dashboards" }, { text: "using" }, { text: "tools" }, { text: "like" },
  { text: "Python,", className: "text-white font-medium" },
  { text: "SQL,", className: "text-white font-medium" },
  { text: "Power BI,", className: "text-white font-medium" },
  { text: "and" },
  { text: "Advanced Excel.", className: "text-white font-medium" },
  { text: "I" }, { text: "excel" }, { text: "at" }, { text: "defining" }, { text: "KPI" }, { text: "metrics," }, { text: "statistical" }, { text: "modeling," }, { text: "and" }, { text: "building" }, { text: "executive" }, { text: "decision" }, { text: "reports" }, { text: "to" }, { text: "drive" }, { text: "data-informed" }, { text: "growth." }
];
const About = () => {
  const textRef = useRef(null);
  const introMobileRef = useRef(null);
  const introDesktopRef = useRef(null);

  useEffect(() => {
    const headings = [introMobileRef.current, introDesktopRef.current];
    
    headings.forEach((heading) => {
      if (heading) {
        gsap.fromTo(
          heading,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: heading,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    if (textRef.current) {
      const words = textRef.current.querySelectorAll('.word');
      gsap.fromTo(
        words,
        { color: '#52525b', opacity: 0.2 },
        {
          color: '#ffffff',
          opacity: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            end: 'bottom 50%',
            scrub: true,
          },
        }
      );
    }
  }, []);

return (
    <section id="about" className="min-h-screen bg-[#050505] text-white pt-24 pb-0 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        {/* Mobile Intro Text */}
        <h2 ref={introMobileRef} className="lg:hidden text-center text-[18vw] md:text-[8rem] font-black tracking-tighter text-white">
          Intro
        </h2>

       {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Left Column - Anime Image */}
          <div className="flex justify-center lg:justify-start pl-0 lg:pl-28">
            <img
              src={aboutImage}
              alt="About"
              className="w-64 md:w-80 lg:w-[360px] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Column - Text Content */}
          <div className="flex flex-col justify-center space-y-8 z-10 w-full px-4 md:px-0">
            {/* Desktop Intro Text */}
            <h2 ref={introDesktopRef} className="hidden lg:block text-[11rem] font-black tracking-tighter text-white leading-none">
              Intro
            </h2>
            <div className="relative bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
              <p ref={textRef} className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed font-light">
                {aboutwords.map((wordObj, index) => (
                  <React.Fragment key={index}>
                    <span className={wordObj.className || ""}>{wordObj.text}</span>{" "}
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Skills Marquee */}
      <div className="flex flex-col border-t border-white/5 bg-[#030303] py-4 mt-auto -mx-6 md:-mx-16">
  {/* First Row */}
        <div className="flex overflow-hidden whitespace-nowrap mb-2">
          <div className="flex animate-marquee w-max">
            {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((item, i) => (
              <div key={`front-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee-reverse w-max">
            {[...backendSkills, ...backendSkills, ...backendSkills, ...backendSkills].map((item, i) => (
              <div key={`back-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        {/* Third Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee w-max">
            {[...aiSkills, ...aiSkills, ...aiSkills, ...aiSkills].map((item, i) => (
              <div key={`ai-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>

        {/* Fourth Row */}
        <div className="flex overflow-hidden whitespace-nowrap mt-2">
          <div className="flex animate-marquee-reverse w-max">
            {[...toolsSkills, ...toolsSkills, ...toolsSkills, ...toolsSkills].map((item, i) => (
              <div key={`tools-${i}`} className="flex items-center">
                <span className="text-gray-400 font-medium tracking-widest px-4 md:px-8 text-sm md:text-lg">{item}</span>
                <span className="text-gray-700 font-bold px-2 md:px-4">.</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;
