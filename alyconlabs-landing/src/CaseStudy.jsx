import { useParams, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "./caseStudies";
import Navbar from "./components/Navbar";

export default function CaseStudy({ isDark, setIsDark }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const study = caseStudies[slug];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Case study not found.</p>
      </div>
    );
  }

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <div className={`min-h-screen px-6 ${isDark ? "bg-black text-white" : "bg-white text-black"}`}>
        {/* HERO */}
        <section className="max-w-5xl mx-auto pt-28 pb-20">
          <span className={`text-xs uppercase tracking-wide ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {study.category}
          </span>

          <h1 className="text-4xl sm:text-6xl font-light mt-4">{study.title}</h1>

          <p className={`text-lg mt-6 max-w-3xl ${isDark ? "text-gray-400" : "text-gray-600"}`}>{study.tagline}</p>

          <div className={`flex gap-6 mt-8 text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <span>⏱ {study.duration}</span>
            <a
              href={study.website}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Visit Website
            </a>
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-5xl mx-auto space-y-20">
          {/* Problem */}
          <Block title="The Problem" isDark={isDark}>{study.problem}</Block>

          {/* Goal */}
          <Block title="The Goal" isDark={isDark}>{study.goal}</Block>

          {/* Approach */}
          <Block title="Our Approach" isDark={isDark}>
            <ul className={`list-disc pl-6 space-y-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {study.approach.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Block>

          {/* Solution */}
          <Block title="The Solution" isDark={isDark}>{study.solution}</Block>

          {/* Results */}
          <Block title="Results" isDark={isDark}>
            <ul className={`list-disc pl-6 space-y-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
              {study.results.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Block>

          {/* Tech Stack */}
          <Block title="Tech Stack" isDark={isDark}>
            <div className="flex flex-wrap gap-3">
              {study.techStack.map((tech, i) => (
                <span
                  key={i}
                  className={`px-4 py-2 rounded-full border text-sm ${isDark ? "border-white/20" : "border-black/20"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </Block>
        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto py-24 text-center">
          <h2 className="text-4xl font-light mb-6">Have a similar idea?</h2>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => {
                const connectSection = document.getElementById("connect");
                if (connectSection) {
                  connectSection.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition transform hover:scale-105 ${isDark ? "bg-white text-black hover:bg-gray-200" : "bg-black text-white hover:bg-gray-800"}`}
          >
            Build Your MVP
            <ArrowRight size={18} />
          </button>
        </section>
      </div>
    </>
  );
}

/* ---------- Reusable Block ---------- */

function Block({ title, children, isDark }) {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{title}</h2>
      <div className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-700"}`}>{children}</div>
    </div>
  );
}
