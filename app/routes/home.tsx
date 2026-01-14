import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Route } from "./+types/home";
import {
  Sparkles,
  Trophy,
  BarChart,
  Lightbulb,
  PieChart,
  ThumbsUp
} from "lucide-react";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "QualiPRO Consult - Strategic Quality Partners" },
    { name: "description", content: "Smooth Business Starts With Good Service Consultation." },
  ];
}

/* --- COMPONENTS --- */

const FloatingCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={`absolute bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-5 z-20 ${className}`}
  >
    {children}
  </motion.div>
);

const RotatingBadge = () => (
  <motion.div
    className="absolute -right-8 top-12 z-0 hidden lg:flex items-center justify-center w-32 h-32"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
      {/* Removed 'hidden' from path to make text visible */}
      <path
        id="curve"
        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        fill="none"
      />
      <text className="text-[11px] font-bold uppercase tracking-[2.5px] fill-primary-navy">
        <textPath xlinkHref="#curve">
          Business Service Consultation • Business Service Consultation •
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 m-auto w-2 h-2 bg-accent-teal rounded-full" />
  </motion.div>
);

const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block z-10 px-1">
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-2 left-0 w-full h-3 bg-[#FFE55C] -z-10 opacity-90 skew-x-12" />
  </span>
);

/* --- MAIN PAGE --- */

export default function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden font-sans text-primary-navy">

      {/* HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl text-center relative z-10">

          {/* Doodle Arrow (Absolute Positioned) */}
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-10 left-[0%] md:left-[10%] lg:left-[15%] w-20 h-20 md:w-32 md:h-32 text-primary-navy -rotate-12 hidden md:block"
            viewBox="0 0 200 100" // Adjusted viewBox for better arrow scaling
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {/* Curly Arrow Path */}
            <path d="M20,80 C60,40 100,50 140,40" />
            <path d="M130,30 L150,40 L135,55" />
          </motion.svg>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-10 relative inline-block"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-navy leading-snug tracking-normal">
              Smooth <HighlightText>Business</HighlightText> Starts With <br className="hidden lg:block mb-4" />
              <HighlightText>Good Service Consultation</HighlightText>
              <span className="text-accent-teal inline-block ml-4 align-top animate-pulse">
                <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-[#2B809A]" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-8 font-light leading-relaxed">
              With QualiPRO we are prepared to guarantee your business advancement and increment business deals today.
            </p>
          </motion.div>

          {/* Main Visual Container */}
          <div className="relative max-w-6xl mx-auto mt-16 px-4 md:px-12">

            {/* Gray Background Blob / Container for Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative rounded-[2.5rem] bg-gray-100 overflow-visible"
            >
              {/* Using 'overflow-visible' so cards can hang out, but image needs to be clipped if it's not transparent */}
              <div className="rounded-[2.5rem] overflow-hidden relative">
                <img
                  src="/people.png"
                  alt="QualiPRO Team"
                  className="w-full h-auto object-cover md:min-h-[500px] object-top"
                />
                {/* Subtle lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>

              {/* LEFT FLOATING CARD: STATISTICS */}
              <FloatingCard className="top-[15%] -left-2 lg:-left-16 w-64 hidden md:block" delay={0.8}>
                <h4 className="font-serif font-bold text-lg text-primary-navy mb-5">Project Statistic 2025</h4>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                      <span>Happy Client</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "90%" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="h-full bg-[#FFE55C]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-700 mb-1">
                      <span>Project Success</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "95%" }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                        className="h-full bg-[#FFE55C]"
                      />
                    </div>
                  </div>
                </div>

                {/* Thumbs Up Badge */}
                <div className="absolute -right-5 top-1/2 -translate-y-1/2 bg-primary-navy text-white w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                  <ThumbsUp className="w-5 h-5" />
                </div>
              </FloatingCard>

              {/* RIGHT FLOATING CARD: POPULAR SERVICES */}
              <FloatingCard className="bottom-[10%] -right-2 lg:-right-16 w-72 !bg-primary-navy !text-white hidden md:block" delay={1}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#FFE55C] rounded-xl flex items-center justify-center text-primary-navy shadow-md">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">Discover</span>
                    <h4 className="font-serif font-bold text-lg leading-tight">Our Popular Service</h4>
                  </div>
                </div>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-[#2B809A]/20 flex items-center justify-center text-[#2B809A] group-hover:bg-[#2B809A] group-hover:text-white transition-colors">
                      <BarChart className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm text-gray-200 group-hover:text-white">Business Analysis</span>
                  </li>
                  <li className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-[#FFE55C]/20 flex items-center justify-center text-[#FFE55C] group-hover:bg-[#FFE55C] group-hover:text-primary-navy transition-colors">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm text-gray-200 group-hover:text-white">Experience Design</span>
                  </li>
                </ul>

                <Link to="/services" className="block text-right mt-4 text-xs font-semibold text-gray-400 hover:text-[#FFE55C] transition-colors">
                  See More &rarr;
                </Link>
              </FloatingCard>

              {/* ROTATING BADGE */}
              <div className="absolute -top-10 -right-4 lg:-right-12 z-0 hidden lg:block">
                <RotatingBadge />
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* MOBILE STACK */}
      <section className="md:hidden px-6 pb-20 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-border">
          <h4 className="font-bold text-primary-navy mb-4">Project Statistics</h4>
          <div className="space-y-4">
            <div className="flex justify-between text-xs"><span>Happy Client</span><span>90%</span></div>
            <div className="h-2 w-full bg-gray-100 rounded-full"><div className="h-full w-[90%] bg-[#FFE55C]" /></div>
            <div className="flex justify-between text-xs"><span>Project Success</span><span>95%</span></div>
            <div className="h-2 w-full bg-gray-100 rounded-full"><div className="h-full w-[95%] bg-[#FFE55C]" /></div>
          </div>
        </div>

        <div className="bg-primary-navy p-6 rounded-2xl text-white">
          <h4 className="font-bold mb-4">Popular Services</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><PieChart className="w-4 h-4 text-accent-teal" /> Business Analysis</li>
            <li className="flex items-center gap-2"><Lightbulb className="w-4 h-4 text-[#FFE55C]" /> Experience Design</li>
          </ul>
        </div>
      </section>

      {/* NEW: STATEMENT SECTION */}
      <section className="py-14 lg:py-20 px-6 bg-white flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl text-center"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif font-medium leading-tight text-primary-navy">
            QualiPRO Consult is a <span className="text-gray-300">Strategic Quality Partner</span> which spreads across <span className="text-accent-teal font-bold">10+ Industries</span> and <span className="text-[#FFE55C] font-bold" style={{ textShadow: "0px 0px 1px rgba(0,0,0,0.1)" }}>500+ Experts</span> who speak the one language that matters — <span className="italic font-bold">Excellence.</span>
          </h2>
        </motion.div>
      </section>

    </div>
  );
}
