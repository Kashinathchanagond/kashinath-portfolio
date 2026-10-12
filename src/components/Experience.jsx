import React from 'react';

const experiences = [
  {
    role: "Data Analytics & Business Intelligence Intern",
    company: "RabTech Academy (MSME Recognized)",
    period: "Sep 2026 - Oct 2026",
    grade: "Grade A+ (92/100)",
    points: [
      "Formulated KPI dictionaries and data quality governance contracts.",
      "Engineered automated data ingestion and cleaning pipelines using Python (Pandas).",
      "Conducted exploratory data analysis (EDA) and built dynamic Power BI dashboards with drill-through visuals."
    ]
  }
];

const certifications = [
  {
    name: "Mastering Power BI: Data Analysis & Dashboard Creation",
    org: "Skill India Digital Hub / PHN Technology",
    date: "Sep 2026"
  },
  {
    name: "Data Science for Everyone (180 Hours)",
    org: "Reliance Foundation Skilling Academy & NSDC",
    date: "Sep 2026"
  },
  {
    name: "Google Data Analytics Professional Certificate",
    org: "Coursera",
    date: "2026"
  },
  {
    name: "SQL for Data Science",
    org: "DataCamp",
    date: "2026"
  }
];

const Experience = () => {
  return (
<section id="experience" className="bg-[#050505] text-white py-20 px-6 md:px-16 border-t border-white/5">
     <div className="flex flex-col space-y-16 w-full max-w-5xl mx-auto">
        {/* Experience Column */}
        <div classname="w-full">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            EXPERIENCE <span className="text-gray-500 font-light italic font-serif">& roles</span>
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                  <span className="text-xs text-[#ccff00] font-mono px-2 py-1 rounded bg-[#ccff00]/10">{exp.grade}</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">{exp.company} • <span className="text-gray-500">{exp.period}</span></p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div clas name="w-full">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            CERTIFICATIONS <span className="text-gray-500 font-light italic font-serif">& credentials</span>
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#0a0a0a] border border-white/10 flex justify-between items-center hover:border-white/20 transition-all">
                <div>
                  <h4 className="text-sm md:text-base font-semibold text-white">{cert.name}</h4>
                  <p className="text-xs text-gray-400 mt-1">{cert.org}</p>
                </div>
                <span className="text-xs font-mono text-gray-500 ml-4 shrink-0">{cert.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;