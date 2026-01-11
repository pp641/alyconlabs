import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Code2,
  Shield,
  Cpu,
  Database,
  Cloud,
  Layout,
  Server,
  Sun,
  Moon,
  CheckCircle2,
} from "lucide-react";
import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaCloud,
  FaServer,
  FaSun,
  FaMoon,
  FaCheckCircle,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTelegram,
  FaLinkedin,
} from "react-icons/fa";
import Navbar from "./components/Navbar";

export default function AlcyonLabsLanding({ isDark, setIsDark }) {
  const [activeTab, setActiveTab] = useState("frontend");

  const projects = [
    {
      title: "India Hidden Gems",
      tag: "Travel / Discovery Platform",
      description:
        "Built a content-driven platform highlighting unexplored destinations across India with SEO-first architecture.",
      slug: "india-hidden-gems",
      previewImage:
        "https://api.screenshotone.com/take?url=https://www.indiahiddengems.com&viewport=1280x800&format=jpg",
    },
    {
      title: "EarlySEO",
      tag: "SEO / SaaS Tool",
      description:
        "Developed an SEO growth platform helping startups track, analyze, and improve search visibility.",
      slug: "earlyseo",
      previewImage:
        "https://api.screenshotone.com/take?url=https://www.earlyseo.com&viewport=1280x800&format=jpg",
    },
    {
      title: "BacklinkBot",
      tag: "AI / Marketing Automation",
      description:
        "Built an AI-powered backlink automation product for scalable off-page SEO.",
      slug: "backlinkbot",
      previewImage:
        "https://api.screenshotone.com/take?url=https://backlinkbot.ai&viewport=1280x800&format=jpg",
    },
    {
      title: "XAutoDM",
      tag: "Growth Automation",
      description:
        "Created a cold DM automation platform for X (Twitter) with high-volume personalization.",
      slug: "xautodm",
      previewImage:
        "https://api.screenshotone.com/take?url=https://xautodm.com&viewport=1280x800&format=jpg",
    },
    {
      title: "Emulate Inf",
      tag: "AI / SaaS Infrastructure",
      description:
        "Designed and deployed scalable AI infrastructure focused on performance and reliability.",
      slug: "emulate-inf",
      previewImage:
        "https://api.screenshotone.com/take?url=https://emulateinf.com&viewport=1280x800&format=jpg",
    },
    {
      title: "Shoto AI",
      tag: "AI / Content Creation",
      description:
        "Built an AI content generation platform optimized for speed and creator workflows.",
      slug: "shoto-ai",
      previewImage:
        "https://api.screenshotone.com/take?url=https://shotoai.com&viewport=1280x800&format=jpg",
    },
  ];

  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes border-glow {
          0%, 100% { box-shadow: 0 0 10px rgba(255, 255, 255, 0.1); }
          50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.3); }
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        .float {
          animation: float 3s ease-in-out infinite;
        }
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        .slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Navigation */}

      {/* Hero Section */}
      <section
        className={`w-full min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 relative overflow-hidden`}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-20 left-10 w-40 h-40 ${
              isDark ? "bg-blue-500" : "bg-blue-400"
            } rounded-full float opacity-20 blur-3xl`}
          ></div>
          <div
            className={`absolute bottom-20 right-10 w-60 h-60 ${
              isDark ? "bg-purple-500" : "bg-purple-400"
            } rounded-full float opacity-20 blur-3xl`}
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="w-full max-w-5xl mx-auto text-center relative z-10">
          <div
            className={`inline-block mb-6 px-4 py-2 rounded-full slide-in-left ${
              isDark
                ? "bg-white/5 border border-white/20"
                : "bg-black/5 border border-black/20"
            }`}
          >
            <span className={`text-xs sm:text-sm font-light tracking-wide`}>
              Full-Stack Development Studio
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-tight slide-in-right`}
          >
            Build Your
            <br />
            <span className="font-bold">Dream Product</span>
          </h1>

          {/* MVP Highlight Section */}
          <div
            className={`my-12 p-8 rounded-2xl border border-glow ${
              isDark
                ? "bg-white/5 border-white/20"
                : "bg-black/5 border-black/20"
            } transition-colors duration-300`}
          >
            <div
              className={`inline-block mb-4 px-4 py-2 rounded-full text-sm pulse-glow ${
                isDark
                  ? "bg-blue-500/20 text-blue-300"
                  : "bg-blue-400/30 text-blue-700"
              }`}
            >
              ⚡ Launch Faster
            </div>
            <h2
              className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}
            >
              Build Your MVP in 2-4 Weeks
            </h2>
            <p
              className={`text-base sm:text-lg mb-6 font-light leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              From idea to market-ready product. Our proven MVP framework
              accelerates your go-to-market without compromising quality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              {["Product Strategy", "Full-Stack Dev", "Launch Support"].map(
                (item, idx) => (
                  <div
                    key={item}
                    className={`flex items-center gap-2 px-3 py-1 rounded-full transform transition hover:scale-110 ${
                      isDark ? "bg-white/10" : "bg-black/10"
                    }`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <CheckCircle2 size={16} className="animate-pulse" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <p
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed slide-in-left ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Full-stack development expertise across frontend, backend, DevOps,
            and database architecture. Every technology layer, handled with
            precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-in-right">
            <button
              onClick={() => {
                const connectSection = document.getElementById("connect");
                if (connectSection) {
                  connectSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition transform hover:scale-105 ${
                isDark
                  ? "bg-white text-black hover:bg-gray-200"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              Build With Us
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section
        className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}
      >
        <div className="text-center mb-16 slide-in-left">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light mb-6`}>
            Our <span className="font-bold">Expertise</span>
          </h2>
          <p
            className={`text-base sm:text-lg font-light max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            End-to-end development across every technology layer
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {["frontend", "backend", "devops", "database"].map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition text-sm sm:text-base transform hover:scale-105 ${
                activeTab === tab
                  ? isDark
                    ? "bg-white text-black"
                    : "bg-black text-white"
                  : isDark
                  ? "border border-white/20 text-gray-400 hover:border-white/40"
                  : "border border-black/20 text-gray-600 hover:border-black/40"
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {tab === "frontend" && "Frontend"}
              {tab === "backend" && "Backend"}
              {tab === "devops" && "DevOps"}
              {tab === "database" && "Database"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start md:items-center">
          <div>
            {activeTab === "frontend" && (
              <div className="space-y-6 slide-in-left">
                <h3 className={`text-2xl sm:text-3xl font-light`}>
                  Modern Frontend Development
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Pixel-perfect interfaces with cutting-edge frameworks. We
                  build responsive, accessible, and performant frontends that
                  delight users.
                </p>
                <ul className="space-y-3">
                  {[
                    "React, Vue, Next.js",
                    "TypeScript & Modern JS",
                    "Responsive Design",
                    "Performance Optimization",
                    "Accessibility",
                    "Animations",
                  ].map((item, idx) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm sm:text-base transform transition hover:translate-x-2"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <CheckCircle2
                        size={20}
                        className="flex-shrink-0 animate-pulse"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "backend" && (
              <div className="space-y-6 slide-in-left">
                <h3 className={`text-2xl sm:text-3xl font-light`}>
                  Robust Backend Systems
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Scalable APIs, microservices architecture, and real-time
                  systems. We build foundations that power your application.
                </p>
                <ul className="space-y-3">
                  {[
                    "Node.js, Python, Go",
                    "REST & GraphQL APIs",
                    "Microservices",
                    "Real-time Communication",
                    "Authentication",
                    "Integrations",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm sm:text-base transform transition hover:translate-x-2"
                    >
                      <CheckCircle2
                        size={20}
                        className="flex-shrink-0 animate-pulse"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "devops" && (
              <div className="space-y-6 slide-in-left">
                <h3 className={`text-2xl sm:text-3xl font-light`}>
                  Cloud & DevOps
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Infrastructure as code, CI/CD pipelines, and cloud
                  deployments. Reliable infrastructure at any scale.
                </p>
                <ul className="space-y-3">
                  {[
                    "AWS, GCP, Azure",
                    "Kubernetes & Docker",
                    "CI/CD Pipelines",
                    "Infrastructure as Code",
                    "Monitoring",
                    "Auto-scaling",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm sm:text-base transform transition hover:translate-x-2"
                    >
                      <CheckCircle2
                        size={20}
                        className="flex-shrink-0 animate-pulse"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "database" && (
              <div className="space-y-6 slide-in-left">
                <h3 className={`text-2xl sm:text-3xl font-light`}>
                  Database Architecture
                </h3>
                <p
                  className={`text-base leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  SQL, NoSQL, and specialized databases optimized for your use
                  case. Scalable and performant.
                </p>
                <ul className="space-y-3">
                  {[
                    "PostgreSQL, MySQL",
                    "MongoDB, DynamoDB",
                    "Redis Caching",
                    "Data Modeling",
                    "Optimization",
                    "Replication",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm sm:text-base transform transition hover:translate-x-2"
                    >
                      <CheckCircle2
                        size={20}
                        className="flex-shrink-0 animate-pulse"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div
            className={`relative h-64 sm:h-80 md:h-96 w-full rounded-2xl border flex items-center justify-center border-glow slide-in-right ${
              isDark
                ? "bg-white/5 border-white/10"
                : "bg-black/5 border-black/10"
            }`}
          >
            <div className="text-center px-4">
              <div
                className={`inline-block p-4 rounded-full mb-4 pulse-glow ${
                  isDark
                    ? "bg-white/5 border border-white/10"
                    : "bg-black/5 border border-black/10"
                }`}
              >
                {activeTab === "frontend" && (
                  <Layout size={40} className="animate-bounce" />
                )}
                {activeTab === "backend" && (
                  <Server size={40} className="animate-bounce" />
                )}
                {activeTab === "devops" && (
                  <Cloud size={40} className="animate-bounce" />
                )}
                {activeTab === "database" && (
                  <Database size={40} className="animate-bounce" />
                )}
              </div>
              <p
                className={`font-light text-sm animate-pulse ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {activeTab === "frontend" && "Beautiful Interfaces"}
                {activeTab === "backend" && "Reliable APIs"}
                {activeTab === "devops" && "Smooth Deployment"}
                {activeTab === "database" && "Data Security"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}
      >
        <div className="text-center mb-12 sm:mb-16 slide-in-left">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light mb-6`}>
            About <span className="font-bold">Alcyon Labs</span>
          </h2>
        </div>

        <div
          className={`mb-12 p-6 sm:p-8 rounded-lg border-glow ${
            isDark
              ? "bg-white/5 border border-white/10"
              : "bg-black/5 border border-black/10"
          }`}
        >
          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Alcyon Labs partners with early-stage startups to transform ideas
            into validated, market-ready products. We specialise in building
            lean, focused Minimum Viable Products (MVPs) that accelerate
            time-to-market, validate core business assumptions, and minimise
            development risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What We Do */}
          <div className="slide-in-left">
            <h3 className={`text-2xl sm:text-3xl font-semibold mb-6`}>
              What We Do
            </h3>
            <ul className="space-y-4">
              {[
                "Rapid MVP development with clear timelines and predictable costs",
                "Product ideation and feature prioritisation",
                "Full-stack design and development",
                "Market validation through user feedback loops",
                "Launch strategy and post-launch iteration support",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 transform transition hover:translate-x-2"
                >
                  <CheckCircle2
                    size={20}
                    className="flex-shrink-0 mt-1 animate-pulse"
                  />
                  <span
                    className={`text-base ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Startups Choose Us */}
          <div className="slide-in-right">
            <h3 className={`text-2xl sm:text-3xl font-semibold mb-6`}>
              Why Startups Choose Us
            </h3>
            <p
              className={`text-base leading-relaxed mb-4 ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              We understand startup constraints—limited budgets, aggressive
              timelines, uncertain requirements. We cut through complexity by
              focusing exclusively on core features that drive real user value.
              Our approach has helped founders validate ideas, attract early
              adopters, and build investor confidence before scaling.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section
        className={`w-full ${
          isDark
            ? "bg-white/5 border-y border-white/10"
            : "bg-black/5 border-y border-black/10"
        } my-12 sm:my-16`}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center slide-in-left">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light mb-6`}>
            Our <span className="font-bold">Philosophy</span>
          </h2>
          <p
            className={`text-xl sm:text-2xl md:text-3xl font-light ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <span className="font-semibold animate-pulse">Start small.</span>{" "}
            <span
              className="font-semibold animate-pulse"
              style={{ animationDelay: "0.3s" }}
            >
              Learn fast.
            </span>{" "}
            <span
              className="font-semibold animate-pulse"
              style={{ animationDelay: "0.6s" }}
            >
              Scale smart.
            </span>
          </p>
        </div>
      </section>
      <section
        className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}
      >
        <div className="text-center mb-16 slide-in-left">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light`}>
            Why <span className="font-bold">Alcyon</span>Labs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              icon: Layout,
              title: "Frontend Mastery",
              description: "Beautiful, responsive interfaces",
            },
            {
              icon: Server,
              title: "Backend Architecture",
              description: "Scalable APIs and services",
            },
            {
              icon: Database,
              title: "Data Engineering",
              description: "Optimized database solutions",
            },
            {
              icon: Cloud,
              title: "Cloud & DevOps",
              description: "Automated deployments",
            },
            {
              icon: Cpu,
              title: "Deep Tech",
              description: "AI/ML and real-time systems",
            },
            {
              icon: Shield,
              title: "Security",
              description: "Enterprise-grade protection",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border transition transform hover:scale-105 border-glow ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-white/20"
                  : "bg-black/5 border-black/10 hover:border-black/20"
              }`}
            >
              <feature.icon size={28} className="mb-4 animate-bounce" />
              <h3 className={`text-lg font-semibold mb-2`}>{feature.title}</h3>
              <p
                className={`text-sm font-light ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}
      >
        <div className="text-center mb-16 slide-in-left">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light`}>
            Selected <span className="font-bold">Projects</span>
          </h2>
          <p
            className={`text-base sm:text-lg font-light max-w-2xl mx-auto mt-4 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Real products we’ve helped founders design, build, and launch
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden p-6 rounded-lg border transition transform hover:scale-105 border-glow group ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-white/20"
                  : "bg-black/5 border-black/10 hover:border-black/20"
              }`}
            >
              {/* Background snapshot */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${project.previewImage})`,
                }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 ${
                  isDark ? "bg-black/70" : "bg-white/70"
                }`}
              />

              {/* Content */}
              <div className="relative z-10">
                <span
                  className={`text-xs uppercase tracking-wide ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {project.tag}
                </span>

                <h3 className="text-xl font-semibold mt-2 mb-3">
                  {project.title}
                </h3>

                <p
                  className={`text-sm font-light mb-6 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <Link
                  to={`/projects/${project.slug}`}
                  className={`inline-flex items-center gap-2 text-sm font-semibold transition ${
                    isDark
                      ? "text-white hover:text-gray-300"
                      : "text-black hover:text-gray-700"
                  }`}
                >
                  View Case Study
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section
        className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}
      >
        <div className="text-center mb-16 slide-in-left">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light`}>
            Our <span className="font-bold">Process</span>
          </h2>
        </div>

        <div className="space-y-6">
          {[
            {
              step: "01",
              title: "Discovery",
              description:
                "Understanding your vision, market, and technical requirements.",
            },
            {
              step: "02",
              title: "Strategy",
              description:
                "Building a roadmap that balances speed, quality, and innovation.",
            },
            {
              step: "03",
              title: "Development",
              description:
                "Agile sprints with full-stack development and testing.",
            },
            {
              step: "04",
              title: "Deployment",
              description:
                "Cloud setup, CI/CD pipelines, and production infrastructure.",
            },
            {
              step: "05",
              title: "Support",
              description: "Monitoring, optimization, and ongoing partnership.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-6 items-start transform transition hover:translate-x-2"
            >
              <div
                className={`text-4xl font-light min-w-fit animate-pulse ${
                  isDark ? "text-white/30" : "text-black/30"
                }`}
              >
                {item.step}
              </div>
              <div
                className={`flex-1 py-4 border-l pl-6 ${
                  isDark ? "border-white/10" : "border-black/10"
                }`}
              >
                <h3 className={`text-xl font-semibold mb-1`}>{item.title}</h3>
                <p
                  className={`text-sm font-light ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        className={`w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center`}
      >
        <h2
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 slide-in-left`}
        >
          Ready to Build?
        </h2>
        <p
          className={`text-base sm:text-lg font-light max-w-2xl mx-auto slide-in-right ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Let's create something amazing together
        </p>
      </section>

      {/* Connect With Us Section */}
      <section
        id="connect"
        className={`w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center slide-in-left`}
      >
        <div
          className={`p-8 sm:p-12 rounded-2xl border-glow ${
            isDark
              ? "bg-white/5 border border-white/10"
              : "bg-black/5 border border-black/10"
          }`}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light mb-4`}>
            Connect <span className="font-bold">With Us</span>
          </h2>
          <p
            className={`text-base sm:text-lg font-light mb-10 max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Follow our journey, stay updated, and connect with our growing
            community on social media
          </p>

          {/* Social Media Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            <a
              href="https://twitter.com/alcyonlabs"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border transition transform hover:scale-110 border-glow group ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-blue-500/50 hover:bg-blue-500/10"
                  : "bg-black/5 border-black/10 hover:border-blue-400/50 hover:bg-blue-400/10"
              }`}
            >
              <FaTwitter
                size={36}
                className={`mx-auto mb-3 group-hover:animate-bounce ${
                  isDark
                    ? "text-gray-400 group-hover:text-blue-400"
                    : "text-gray-600 group-hover:text-blue-500"
                }`}
              />
              <p className="text-sm font-semibold">Twitter</p>
              <p
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                @alcyonlabs
              </p>
            </a>

            <a
              href="https://instagram.com/alcyonlabs"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border transition transform hover:scale-110 border-glow group ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-pink-500/50 hover:bg-pink-500/10"
                  : "bg-black/5 border-black/10 hover:border-pink-400/50 hover:bg-pink-400/10"
              }`}
            >
              <FaInstagram
                size={36}
                className={`mx-auto mb-3 group-hover:animate-bounce ${
                  isDark
                    ? "text-gray-400 group-hover:text-pink-400"
                    : "text-gray-600 group-hover:text-pink-500"
                }`}
              />
              <p className="text-sm font-semibold">Instagram</p>
              <p
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                @alcyonlabs
              </p>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61586095569613"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border transition transform hover:scale-110 border-glow group ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-blue-600/50 hover:bg-blue-600/10"
                  : "bg-black/5 border-black/10 hover:border-blue-500/50 hover:bg-blue-500/10"
              }`}
            >
              <FaFacebook
                size={36}
                className={`mx-auto mb-3 group-hover:animate-bounce ${
                  isDark
                    ? "text-gray-400 group-hover:text-blue-400"
                    : "text-gray-600 group-hover:text-blue-600"
                }`}
              />
              <p className="text-sm font-semibold">Facebook</p>
              <p
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Alcyon Labs
              </p>
            </a>

            <a
              href="https://t.me/alcyonlabs"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border transition transform hover:scale-110 border-glow group ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10"
                  : "bg-black/5 border-black/10 hover:border-cyan-400/50 hover:bg-cyan-400/10"
              }`}
            >
              <FaTelegram
                size={36}
                className={`mx-auto mb-3 group-hover:animate-bounce ${
                  isDark
                    ? "text-gray-400 group-hover:text-cyan-400"
                    : "text-gray-600 group-hover:text-cyan-500"
                }`}
              />
              <p className="text-sm font-semibold">Telegram</p>
              <p
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                @alcyonlabs
              </p>
            </a>

            <a
              href="https://www.linkedin.com/company/alcyon-labs/"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-lg border transition transform hover:scale-110 border-glow group ${
                isDark
                  ? "bg-white/5 border-white/10 hover:border-blue-700/50 hover:bg-blue-700/10"
                  : "bg-black/5 border-black/10 hover:border-blue-600/50 hover:bg-blue-600/10"
              }`}
            >
              <FaLinkedin
                size={36}
                className={`mx-auto mb-3 group-hover:animate-bounce ${
                  isDark
                    ? "text-gray-400 group-hover:text-blue-400"
                    : "text-gray-600 group-hover:text-blue-700"
                }`}
              />
              <p className="text-sm font-semibold">LinkedIn</p>
              <p
                className={`text-xs mt-1 ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Alcyon Labs
              </p>
            </a>
          </div>

          {/* Email Contact */}
          <div className="mt-10">
            <a
              href="mailto:admin@alcyonlabs.com"
              className={`inline-flex items-center gap-2 px-8 py-4 border rounded-full font-semibold transition transform hover:scale-105 ${
                isDark
                  ? "border-white/30 hover:border-white/60"
                  : "border-black/30 hover:border-black/60"
              }`}
            >
              Mail us at admin@alcyonlabs.com
            </a>
          </div>

          <p
            className={`text-xs sm:text-sm font-light mt-8 ${
              isDark ? "text-gray-500" : "text-gray-500"
            }`}
          >
            🚀 Follow us and be part of the Alcyon Labs community
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`border-t ${
          isDark ? "border-white/10 bg-black" : "border-black/10 bg-white"
        }`}
      >
        <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-8`}>
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div
              className={`text-xs sm:text-sm font-light ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              © 2026 Alcyon Labs. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
