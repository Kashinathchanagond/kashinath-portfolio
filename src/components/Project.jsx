import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    name: 'E-COMMERCE CUSTOMER CHURN & ANALYTICS',
    title: (
      <>
        E-COMMERCE <span className="font-light italic text-gray-300 lowercase font-serif">churn</span><br />
        ANALYTICS & BI
      </>
    ),
    description: "Extracted and cleaned 10,000+ relational customer transaction records. Built an interactive Power BI dashboard tracking MRR, CLV, and churn drivers with custom KPI cards.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'SALES PERFORMANCE & FORECASTING',
    title: (
      <>
        SALES <span className="font-light italic text-gray-300 lowercase font-serif">performance</span><br />
        DASHBOARD
      </>
    ),
    description: "Normalized raw multi-sheet sales datasets using Power Query. Engineered automated dynamic reporting workflows leveraging advanced Excel formulas and interactive visuals for quarterly decision-making.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'KPI DICTIONARY & DATA GOVERNANCE',
    title: (
      <>
        DATA <span className="font-light italic text-gray-300 lowercase font-serif">quality</span><br />
        & GOVERNANCE
      </>
    ),
    description: "Formulated end-to-end KPI dictionaries, data quality contracts, and automated Python pipelines for anomaly resolution and schema governance during evaluated internship.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'HEALTHCARE PATIENT TELEMETRY & EDA',
    title: (
      <>
        HEALTHCARE <span className="font-light italic text-gray-300 lowercase font-serif">insights</span><br />
        & STATISTICAL EDA
      </>
    ),
    description: "Conducted statistical analysis and exploratory data analysis using Python (NumPy, Pandas, Seaborn) across patient metrics to identify clinical operational patterns.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'FINANCIAL REVENUE & EXPENSE SQL SUITE',
    title: (
      <>
        FINANCIAL <span className="font-light italic text-gray-300 lowercase font-serif">revenue</span><br />
        SQL QUERY SUITE
      </>
    ),
    description: "Designed multi-table relational schema joins, Window functions, and aggregation CTEs in PostgreSQL to evaluate department-level profit margins and budget leakages.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2000&auto=format&fit=crop"
  },
  {
    name: 'SUPPLY CHAIN & INVENTORY OPTIMIZATION',
    title: (
      <>
        SUPPLY CHAIN <span className="font-light italic text-gray-300 lowercase font-serif">tracking</span><br />
        TABLEAU DASHBOARD
      </>
    ),
    description: "Engineered an executive logistics dashboard tracking turnaround time, stockout risk ratios, and geographic fulfillment bottlenecks across multi-city distribution hubs.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
  }
];

const Project = ({ onCtaClick }) => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">

      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-20 lg:mb-32">

        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-300 to-gray-800 drop-shadow-2xl leading-[0.9] uppercase flex items-center gap-3 whitespace-nowrap">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-4 pt-2 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
            As a data analyst using statistical insights, interactive visual design and modern BI tools tailored to data-driven business decisions.
          </p>
          <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black font-medium text-xs md:text-sm hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors flex items-center gap-2">
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>
      </div>

      {/* Projects List - Alternating Layout */}
      <div className="flex flex-col gap-24 lg:gap-40 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={proj.name} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-12 lg:gap-16 w-full group`}>

              {/* Image Side */}
              <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-sm">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Text Side */}
              <div className="w-full lg:w-5/12 flex flex-col items-start">
                <span className="text-[#ccff00] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                  0{idx + 1}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-6">
                  {proj.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed mb-10">
                  {proj.description}
                </p>

                <div className="flex items-center gap-4 flex-wrap">
                  <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-[#ccff00] bg-[#ccff00] text-black text-xs md:text-sm font-medium hover:bg-[#b3e600] hover:border-[#b3e600] transition-colors inline-flex items-center gap-2">
                    Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </button>
                  <button onClick={onCtaClick} className="cursor-pointer px-6 py-2.5 rounded-full border border-white/30 text-white text-xs md:text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
