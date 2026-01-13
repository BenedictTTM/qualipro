import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Route } from "./+types/home";
import {
  ArrowRightIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  ChartBarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  BeakerIcon,
  DocumentChartBarIcon,
  SparklesIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

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
    className={`absolute bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-6 z-20 ${className}`}
  >
    {children}
  </motion.div>
);

const RotatingBadge = () => (
  <motion.div
    className="absolute -right-12 top-20 z-10 hidden lg:flex items-center justify-center w-40 h-40"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path
        id="curve"
        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
        fill="transparent"
      />
      <text className="text-[10px] font-bold uppercase tracking-[2px] fill-primary-navy">
        <textPath xlinkHref="#curve">
          Business Service Consultation • Business Service Consultation •
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 m-auto w-2 h-2 bg-accent-teal rounded-full" />
  </motion.div>
);

const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block z-10">
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE55C] -z-0 opacity-80" />
  </span>
);

/* --- MAIN PAGE --- */

export default function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6">
        <div className="container mx-auto max-w-6xl text-center relative z-10">

          {/* Doodle Arrow (Absolute Positioned) */}
          <motion.svg
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-0 left-[10%] w-24 h-24 text-primary-navy hidden lg:block"
            viewBox="0 0 100 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M10,80 C10,80 30,20 90,20" />
            <path d="M80,15 L95,20 L85,30" />
          </motion.svg>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-navy leading-[1.1] mb-8">
              Smooth <HighlightText>Business</HighlightText> Starts With <br className="hidden md:block" />
              <HighlightText>Good Service Consultation</HighlightText>
              <span className="text-accent-teal inline-block ml-2 animate-bounce">
                <SparklesIcon className="w-8 h-8 md:w-12 md:h-12" />
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16 font-light">
              With QualiPRO we are prepared to guarantee your business advancement and increment business deals today through ISO and GMP excellence.
            </p>
          </motion.div>

          {/* Image & Floating Cards Container */}
          <div className="relative max-w-5xl mx-auto mt-12">

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative z-0 rounded-3xl overflow-hidden"
            >
              <img
                src="/people.png"
                alt="QualiPRO Team"
                className="w-full h-auto object-cover rounded-3xl"
              />
              {/* Gradient Overlay for integration */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none rounded-3xl" />
            </motion.div>

            {/* LEFT FLOATING CARD: STATISTICS */}
            <FloatingCard className="top-[10%] -left-4 lg:-left-12 w-64 hidden md:block" delay={0.8}>
              <h4 className="font-bold text-primary-navy mb-4">Project Statistic 2025</h4>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Happy Client</span>
                    <span>90%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-[#FFE55C]"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span>Project Success</span>
                    <span>95%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "95%" }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                      className="h-full bg-[#FFE55C]"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 top-1/2 bg-primary-navy text-white p-2 rounded-lg shadow-lg">
                <span className="text-base">👍</span>
              </div>
            </FloatingCard>

            {/* RIGHT FLOATING CARD: POPULAR SERVICES */}
            <FloatingCard className="bottom-[10%] -right-4 lg:-right-12 w-72 !bg-primary-navy/95 !text-white backdrop-blur-sm hidden md:block" delay={1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#FFE55C] rounded-lg flex items-center justify-center text-primary-navy">
                  <TrophyIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 uppercase tracking-widest">Discover</span>
                  <h4 className="font-bold">Our Popular Service</h4>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-accent-teal/20 flex items-center justify-center text-accent-teal">
                    <ChartBarIcon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white">Business Analysis</span>
                </li>
                <li className="flex items-center gap-3 p-2 rounded hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-[#FFE55C]/20 flex items-center justify-center text-[#FFE55C]">
                    <LightBulbIcon className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-white">Experience Design</span>
                </li>
              </ul>

              <Link to="/services" className="block text-center mt-6 text-xs text-gray-400 hover:text-white transition-colors">
                See More &rarr;
              </Link>
            </FloatingCard>

            {/* ROTATING BADGE */}
            <RotatingBadge />

          </div>
        </div>
      </section>

      {/* MOBILE CONTENT STACK (Visible only on small screens) */}
      <section className="md:hidden px-6 pb-20 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-border">
          <h4 className="font-bold text-primary-navy mb-4">Project Statistics</h4>
          <div className="space-y-4">
            <div className="h-2 w-90% bg-[#FFE55C] rounded-full" />
            <div className="h-2 w-95% bg-[#FFE55C] rounded-full" />
          </div>
        </div>

        <div className="bg-primary-navy p-6 rounded-2xl text-white">
          <h4 className="font-bold mb-4">Popular Services</h4>
          <ul className="space-y-2">
            <li>Business Analysis</li>
            <li>Experience Design</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
