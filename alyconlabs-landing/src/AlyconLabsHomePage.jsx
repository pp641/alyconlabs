import React, { useState } from 'react';
import { ArrowRight, Code2, Shield, Cpu, Database, Cloud, Layout, Server, Sun, Moon, CheckCircle2 } from 'lucide-react';

export default function AlyconLabsLanding() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={`${isDark ? 'bg-black text-white' : 'bg-white text-black'} transition-colors duration-300 min-h-screen w-full`}>
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 ${isDark ? 'bg-black/95 border-white/10' : 'bg-white/95 border-black/10'} backdrop-blur-sm border-b transition-colors duration-300`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className={`text-xl sm:text-2xl font-light tracking-tight`}>
            Alycon<span className="font-bold">Labs</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition ${isDark ? 'bg-white/10 hover:bg-white/20' : 'bg-black/10 hover:bg-black/20'}`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`px-4 sm:px-6 py-2 rounded-full font-medium text-xs sm:text-sm transition ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`w-full min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6 relative overflow-hidden`}>
        <div className="w-full max-w-5xl mx-auto text-center relative z-10">
          <div className={`inline-block mb-6 px-4 py-2 rounded-full ${isDark ? 'bg-white/5 border border-white/20' : 'bg-black/5 border border-black/20'}`}>
            <span className={`text-xs sm:text-sm font-light tracking-wide`}>Full-Stack Development Studio</span>
          </div>

          <h1 className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight tracking-tight`}>
            Build Your
            <br />
            <span className="font-bold">Dream Product</span>
          </h1>

          {/* MVP Highlight Section */}
          <div className={`my-12 p-8 rounded-2xl border ${isDark ? 'bg-white/5 border-white/20' : 'bg-black/5 border-black/20'} transition-colors duration-300`}>
            <div className={`inline-block mb-4 px-4 py-2 rounded-full text-sm ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-400/30 text-blue-700'}`}>
              ⚡ Launch Faster
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4`}>
              Build Your MVP in 2-4 Weeks
            </h2>
            <p className={`text-base sm:text-lg mb-6 font-light leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              From idea to market-ready product. Our proven MVP framework accelerates your go-to-market without compromising quality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              {['Product Strategy', 'Full-Stack Dev', 'Launch Support'].map((item) => (
                <div 
                  key={item} 
                  className={`flex items-center gap-2 px-3 py-1 rounded-full ${isDark ? 'bg-white/10' : 'bg-black/10'}`}
                >
                  <CheckCircle2 size={16} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 font-light leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Full-stack development expertise across frontend, backend, DevOps, and database architecture. Every technology layer, handled with precision.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 text-sm sm:text-base transition ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
              Build With Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light mb-6`}>
            Our <span className="font-bold">Expertise</span>
          </h2>
          <p className={`text-base sm:text-lg font-light max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            End-to-end development across every technology layer
          </p>
        </div>

        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap">
          {['frontend', 'backend', 'devops', 'database'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition text-sm sm:text-base ${
                activeTab === tab
                  ? isDark ? 'bg-white text-black' : 'bg-black text-white'
                  : isDark ? 'border border-white/20 text-gray-400 hover:border-white/40' : 'border border-black/20 text-gray-600 hover:border-black/40'
              }`}
            >
              {tab === 'frontend' && 'Frontend'}
              {tab === 'backend' && 'Backend'}
              {tab === 'devops' && 'DevOps'}
              {tab === 'database' && 'Database'}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start md:items-center">
          <div>
            {activeTab === 'frontend' && (
              <div className="space-y-6">
                <h3 className={`text-2xl sm:text-3xl font-light`}>Modern Frontend Development</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Pixel-perfect interfaces with cutting-edge frameworks. We build responsive, accessible, and performant frontends that delight users.
                </p>
                <ul className="space-y-3">
                  {['React, Vue, Next.js', 'TypeScript & Modern JS', 'Responsive Design', 'Performance Optimization', 'Accessibility', 'Animations'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle2 size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'backend' && (
              <div className="space-y-6">
                <h3 className={`text-2xl sm:text-3xl font-light`}>Robust Backend Systems</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Scalable APIs, microservices architecture, and real-time systems. We build foundations that power your application.
                </p>
                <ul className="space-y-3">
                  {['Node.js, Python, Go', 'REST & GraphQL APIs', 'Microservices', 'Real-time Communication', 'Authentication', 'Integrations'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle2 size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'devops' && (
              <div className="space-y-6">
                <h3 className={`text-2xl sm:text-3xl font-light`}>Cloud & DevOps</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Infrastructure as code, CI/CD pipelines, and cloud deployments. Reliable infrastructure at any scale.
                </p>
                <ul className="space-y-3">
                  {['AWS, GCP, Azure', 'Kubernetes & Docker', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Auto-scaling'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle2 size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'database' && (
              <div className="space-y-6">
                <h3 className={`text-2xl sm:text-3xl font-light`}>Database Architecture</h3>
                <p className={`text-base leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  SQL, NoSQL, and specialized databases optimized for your use case. Scalable and performant.
                </p>
                <ul className="space-y-3">
                  {['PostgreSQL, MySQL', 'MongoDB, DynamoDB', 'Redis Caching', 'Data Modeling', 'Optimization', 'Replication'].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base">
                      <CheckCircle2 size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className={`relative h-64 sm:h-80 md:h-96 w-full rounded-2xl border flex items-center justify-center ${isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'}`}>
            <div className="text-center px-4">
              <div className={`inline-block p-4 rounded-full mb-4 ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
                {activeTab === 'frontend' && <Layout size={40} />}
                {activeTab === 'backend' && <Server size={40} />}
                {activeTab === 'devops' && <Cloud size={40} />}
                {activeTab === 'database' && <Database size={40} />}
              </div>
              <p className={`font-light text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {activeTab === 'frontend' && 'Beautiful Interfaces'}
                {activeTab === 'backend' && 'Reliable APIs'}
                {activeTab === 'devops' && 'Smooth Deployment'}
                {activeTab === 'database' && 'Data Security'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light mb-6`}>
            About <span className="font-bold">Alycon Labs</span>
          </h2>
        </div>

        <div className={`mb-12 p-6 sm:p-8 rounded-lg ${isDark ? 'bg-white/5 border border-white/10' : 'bg-black/5 border border-black/10'}`}>
          <p className={`text-base sm:text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            Alycon Labs partners with early-stage startups to transform ideas into validated, market-ready products. We specialise in building lean, focused Minimum Viable Products (MVPs) that accelerate time-to-market, validate core business assumptions, and minimise development risk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* What We Do */}
          <div>
            <h3 className={`text-2xl sm:text-3xl font-semibold mb-6`}>What We Do</h3>
            <ul className="space-y-4">
              {[
                'Rapid MVP development with clear timelines and predictable costs',
                'Product ideation and feature prioritisation',
                'Full-stack design and development',
                'Market validation through user feedback loops',
                'Launch strategy and post-launch iteration support'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="flex-shrink-0 mt-1" />
                  <span className={`text-base ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Startups Choose Us */}
          <div>
            <h3 className={`text-2xl sm:text-3xl font-semibold mb-6`}>Why Startups Choose Us</h3>
            <p className={`text-base leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              We understand startup constraints—limited budgets, aggressive timelines, uncertain requirements. We cut through complexity by focusing exclusively on core features that drive real user value. Our approach has helped founders validate ideas, attract early adopters, and build investor confidence before scaling.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`w-full ${isDark ? 'bg-white/5 border-y border-white/10' : 'bg-black/5 border-y border-black/10'} my-12 sm:my-16`}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-light mb-6`}>
            Our <span className="font-bold">Philosophy</span>
          </h2>
          <p className={`text-xl sm:text-2xl md:text-3xl font-light ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
            <span className="font-semibold">Start small.</span> <span className="font-semibold">Learn fast.</span> <span className="font-semibold">Scale smart.</span>
          </p>
        </div>
      </section>
      <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light`}>
            Why <span className="font-bold">Alycon</span>Labs
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: Layout, title: 'Frontend Mastery', description: 'Beautiful, responsive interfaces' },
            { icon: Server, title: 'Backend Architecture', description: 'Scalable APIs and services' },
            { icon: Database, title: 'Data Engineering', description: 'Optimized database solutions' },
            { icon: Cloud, title: 'Cloud & DevOps', description: 'Automated deployments' },
            { icon: Cpu, title: 'Deep Tech', description: 'AI/ML and real-time systems' },
            { icon: Shield, title: 'Security', description: 'Enterprise-grade protection' },
          ].map((feature, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border transition ${isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 hover:border-black/20'}`}
            >
              <feature.icon size={28} className="mb-4" />
              <h3 className={`text-lg font-semibold mb-2`}>{feature.title}</h3>
              <p className={`text-sm font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: '150+', label: 'Projects' },
            { number: '98%', label: 'Satisfaction' },
            { number: '50M+', label: 'Users Served' },
            { number: '24/7', label: 'Support' },
          ].map((stat, idx) => (
            <div key={idx} className={`text-center p-6 rounded-lg border ${isDark ? 'border-white/10 hover:border-white/20' : 'border-black/10 hover:border-black/20'} transition`}>
              <div className={`text-4xl sm:text-5xl font-light mb-2`}>{stat.number}</div>
              <div className={`text-sm font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Process Section */}
      <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light`}>
            Our <span className="font-bold">Process</span>
          </h2>
        </div>

        <div className="space-y-6">
          {[
            { step: '01', title: 'Discovery', description: 'Understanding your vision, market, and technical requirements.' },
            { step: '02', title: 'Strategy', description: 'Building a roadmap that balances speed, quality, and innovation.' },
            { step: '03', title: 'Development', description: 'Agile sprints with full-stack development and testing.' },
            { step: '04', title: 'Deployment', description: 'Cloud setup, CI/CD pipelines, and production infrastructure.' },
            { step: '05', title: 'Support', description: 'Monitoring, optimization, and ongoing partnership.' },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className={`text-4xl font-light min-w-fit ${isDark ? 'text-white/30' : 'text-black/30'}`}>
                {item.step}
              </div>
              <div className={`flex-1 py-4 border-l pl-6 ${isDark ? 'border-white/10' : 'border-black/10'}`}>
                <h3 className={`text-xl font-semibold mb-1`}>{item.title}</h3>
                <p className={`text-sm font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      {/* <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24`}>
        <div className="text-center mb-16">
          <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light mb-6`}>
            Our <span className="font-bold">Projects</span>
          </h2>
          <p className={`text-base sm:text-lg font-light max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            From concept to market-leading products
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: 'FinFlow',
              description: 'Real-time financial analytics platform for SMEs',
              category: 'FinTech',
              status: 'Live'
            },
            {
              title: 'HealthSync',
              description: 'Patient management system for telemedicine',
              category: 'HealthTech',
              status: 'Live'
            },
            {
              title: 'MarketPro',
              description: 'AI-powered inventory management system',
              category: 'E-commerce',
              status: 'Live'
            },
            {
              title: 'TaskFlow',
              description: 'Collaborative project management tool',
              category: 'Productivity',
              status: 'Live'
            },
            {
              title: 'LearnHub',
              description: 'EdTech platform with interactive courses',
              category: 'Education',
              status: 'Live'
            },
            {
              title: 'TravelGo',
              description: 'Travel booking and itinerary planning app',
              category: 'Travel',
              status: 'Live'
            },
          ].map((project, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-lg border transition ${isDark ? 'bg-white/5 border-white/10 hover:border-white/20' : 'bg-black/5 border-black/10 hover:border-black/20'}`}
            >
              <div className="mb-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-400/30 text-blue-700'}`}>
                  {project.category}
                </span>
              </div>
              <h3 className={`text-xl font-semibold mb-2`}>{project.title}</h3>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
              <div className={`text-xs font-light px-2 py-1 rounded inline-block ${isDark ? 'bg-green-500/20 text-green-300' : 'bg-green-400/20 text-green-700'}`}>
                {project.status}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className={`w-full ${isDark ? 'bg-white/5 border-y border-white/10' : 'bg-black/5 border-y border-black/10'} py-16 sm:py-24`}>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-light mb-6`}>
              What Our <span className="font-bold">Clients Say</span>
            </h2>
            <p className={`text-base sm:text-lg font-light max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Hear from founders and entrepreneurs we've helped launch
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah Chen',
                company: 'FinFlow',
                role: 'Founder & CEO',
                text: 'Alycon Labs helped us build our MVP in 6 weeks. Their focus on core features and rapid iteration was exactly what we needed to validate our market.',
                avatar: '👩‍💼'
              },
              {
                name: 'Marcus Johnson',
                company: 'HealthSync',
                role: 'Co-Founder',
                text: 'The team understood our vision immediately. They delivered a production-ready product that impressed our early adopters and investors alike.',
                avatar: '👨‍💼'
              },
              {
                name: 'Priya Sharma',
                company: 'MarketPro',
                role: 'Founder',
                text: 'Professional, responsive, and genuinely invested in our success. The entire process was transparent and collaborative from start to finish.',
                avatar: '👩‍💼'
              },
              {
                name: 'David Park',
                company: 'TaskFlow',
                role: 'CEO',
                text: 'Beyond development, they provided strategic guidance on product roadmap and market positioning. Invaluable partners in our journey.',
                avatar: '👨‍💼'
              },
              {
                name: 'Emma Wilson',
                company: 'LearnHub',
                role: 'Founder',
                text: 'Their MVP approach saved us 3 months of development time and helped us test assumptions before full-scale investment. Highly recommended.',
                avatar: '👩‍💼'
              },
              {
                name: 'Rahul Verma',
                company: 'TravelGo',
                role: 'Co-Founder',
                text: 'Working with Alycon Labs felt like having an experienced technical co-founder. They made complex architecture decisions simple and scalable.',
                avatar: '👨‍💼'
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-lg border ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-black/10'}`}
              >
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className={`text-sm leading-relaxed mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className={`text-sm font-semibold`}>{testimonial.name}</h4>
                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      
      <section className={`w-full max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center`}>
        <h2 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6`}>
          Ready to Build?
        </h2>
        <p className={`text-base sm:text-lg font-light mb-12 max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Let's create something amazing together
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className={`px-6 sm:px-10 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition text-sm sm:text-base ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}>
            Start Now
            <ArrowRight size={20} />
          </button>
          <a 
            href="mailto:admin@alyconlabs.com"
            className={`px-6 sm:px-10 py-3 sm:py-4 border rounded-full font-semibold transition text-sm sm:text-base inline-flex items-center justify-center ${isDark ? 'border-white/30 hover:border-white/60' : 'border-black/30 hover:border-black/60'}`}
          >
           Mail us at admin@alyconlabs.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t ${isDark ? 'border-white/10 bg-black' : 'border-black/10 bg-white'}`}>
        {/* <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8`}>
          <div>
            <div className={`text-lg font-light mb-4`}>
              Alycon<span className="font-bold">Labs</span>
            </div>
            <p className={`text-sm font-light ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Full-stack development studio</p>
          </div>
          {[
            { title: 'Services', links: ['Frontend', 'Backend', 'DevOps'] },
            { title: 'Company', links: ['About', 'Blog', 'Careers'] },
            { title: 'Support', links: ['Docs', 'Help', 'Contact'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className={`font-semibold mb-4 text-sm`}>{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link} className={`text-sm font-light cursor-pointer ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
        <div className={`w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 border-t text-center text-xs sm:text-sm font-light ${isDark ? 'border-white/10 text-gray-400' : 'border-black/10 text-gray-600'}`}>
          © 2026 Alycon Labs. All rights reserved.
        </div>
      </footer>
    </div>
  );
}