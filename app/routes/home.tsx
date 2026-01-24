import { motion } from "framer-motion";
import { Link } from "react-router";
import type { Route } from "./+types/home";
import {
  Sparkles,
  Trophy,
  BarChart,
  Lightbulb,
  PieChart,
  ThumbsUp,
  Users,
  TrendingUp,
  Target
} from "lucide-react";

export function meta({ }: Route.MetaArgs) {
  const title = "ISO & GMP Consulting Services in Ghana | QualiPRO Consult";
  const description = "Get ISO 9001, GMP & ISO 17025 certification faster. Expert quality management consulting in Ghana & Africa.";
  const url = "https://www.qualiproconsult.com/";
  const image = "https://www.qualiproconsult.com/logo.png";

  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },

    // Open Graph / Facebook
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: image },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:site_name", content: "QualiPRO Consult" },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image },

    // Additional SEO
    { name: "keywords", content: "ISO 9001 Ghana, GMP consulting Africa, ISO 17025 accreditation, quality management systems, certification consulting" },
  ];
}

/* --- COMPONENTS --- */

const FloatingCard = ({ children, className = "", delay = 0, isFloating = true }: { children: React.ReactNode, className?: string, delay?: number, isFloating?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={`${isFloating ? "absolute" : "relative"} bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] p-5 z-20 ${className}`}
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
      <text className="text-[9px] font-bold uppercase tracking-[4px] fill-primary-navy">
        <textPath xlinkHref="#curve" textLength="232" lengthAdjust="spacing">
          Business Service Consultation •
        </textPath>
      </text>
    </svg>
    <div className="absolute inset-0 m-auto w-2 h-2 bg-accent-teal rounded-full" />
  </motion.div>
);

const HighlightText = ({ children }: { children: React.ReactNode }) => (
  <span
    className="relative z-10 px-1 decoration-clone leading-snug bg-[image:linear-gradient(to_top,rgba(255,229,92,0.9)_35%,transparent_35%)] lg:bg-[image:linear-gradient(to_top,rgba(255,229,92,0.9)_20%,transparent_20%)]"
    style={{
      WebkitBoxDecorationBreak: "clone",
      boxDecorationBreak: "clone",
    }}
  >
    {children}
  </span>
);

/* --- MAIN PAGE --- */

export default function Home() {
  return (
    <div className="w-full bg-white overflow-x-hidden font-sans text-primary-navy">

      {/* HERO SECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "QualiPRO Consult",
            "url": "https://www.qualiproconsult.com",
            "logo": "https://www.qualiproconsult.com/logo.png",
            "image": "https://www.qualiproconsult.com/logo.png",
            "description": "Quality management and ISO consulting firm serving Ghana and Africa. Expert consulting for ISO 9001, GMP, ISO 17025, and quality systems implementation.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "GH",
              "addressRegion": "Greater Accra",
              "addressLocality": "Accra"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "5.6037",
              "longitude": "-0.1870"
            },
            "telephone": "+233-24-885-7308",
            "email": "info@qualiproconsult.com",
            "priceRange": "$$",
            "openingHours": "Mo-Fr 08:00-17:00",
            "areaServed": [
              {
                "@type": "Country",
                "name": "Ghana"
              },
              {
                "@type": "Continent",
                "name": "Africa"
              }
            ],
            "serviceType": ["ISO Consulting", "GMP Consulting", "Quality Management", "Certification Support"],
            "knowsAbout": ["ISO 9001", "ISO 17025", "ISO 22000", "ISO 13485", "ISO 14001", "ISO 45001", "GMP", "Quality Management Systems"]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "QualiPRO Consult",
            "url": "https://www.qualiproconsult.com/",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.qualiproconsult.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": ["About", "Services", "Industries", "Tools & Methodology", "Contact"],
            "url": [
              "https://www.qualiproconsult.com/about",
              "https://www.qualiproconsult.com/services",
              "https://www.qualiproconsult.com/industries",
              "https://www.qualiproconsult.com/tools",
              "https://www.qualiproconsult.com/contact"
            ]
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.qualiproconsult.com/"
              }
            ]
          }),
        }}
      />
      <section className="relative pt-24 pb-12 lg:pt-18 lg:pb-32 px-4 md:px-6 bg-[url('/people.png')] bg-cover bg-center bg-no-repeat md:bg-none">
        {/* Mobile Overlay */}
        <div className="absolute inset-0 bg-white/90 z-0 md:hidden" />

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
            className="mb-10 relative inline-block max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-navy leading-tight tracking-tight">
              Quality systems that <HighlightText>strengthen</HighlightText> <br className="hidden lg:block mb-4" />
              <HighlightText>compliance, performance, and profitability.</HighlightText>
              <span className="text-accent-teal inline-block ml-4 align-top animate-pulse">
                <Sparkles className="w-5 h-6 md:w-6 md:h-6 text-[#2B809A]" />
              </span>
            </h1>

            <p className="text-base md:text-lg text-gray-500 max-w-xl md:max-w-2xl mx-auto mt-6 md:mt-8 font-light leading-relaxed px-4">
              With QualiPRO Consult, organizations are equipped to strengthen compliance, improve operational performance, and support sustainable business growth.
            </p>
          </motion.div>



          {/* Main Visual Container */}
          <div className="relative w-screen left-1/2 -translate-x-1/2 mt-8 md:mt-16 hidden md:block">

            {/* Gray Background Blob / Container for Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative bg-gray-100 overflow-visible"
            >
              {/* Image Container - Square edges */}
              <div className="overflow-hidden relative">
                <img
                  src="/people.png"
                  alt="QualiPRO Consult team collaborating on quality management and ISO certification systems"
                  className="w-full h-auto object-cover min-h-[500px] object-top"
                  loading="eager"
                  /* @ts-expect-error - Optimizing LCP */
                  fetchPriority="high"
                />
                {/* Subtle lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Inner container to keep floating elements content-aligned */}
              <div className="absolute inset-0 max-w-7xl mx-auto px-4 md:px-12 pointer-events-none">

                {/* LEFT FLOATING CARD: STATISTICS REMOVED */}

                {/* RIGHT FLOATING CARD: POPULAR SERVICES */}
                <FloatingCard className="bottom-[10%] right-4 lg:right-0 w-60 !p-4 !bg-primary-navy !text-white hidden md:block pointer-events-auto" delay={1}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-[#FFE55C] rounded-xl flex items-center justify-center text-primary-navy shadow-md">
                      <Trophy className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">Discover</span>
                      <h4 className="font-serif font-bold text-base leading-tight text-white">Our Core Services</h4>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 p-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                      <div className="w-7 h-7 rounded-full bg-[#2B809A]/20 flex items-center justify-center text-[#2B809A] group-hover:bg-[#2B809A] group-hover:text-white transition-colors">
                        <BarChart className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-xs text-gray-200 group-hover:text-white">Quality Management Systems</span>
                    </li>
                    <li className="flex items-center gap-2 p-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                      <div className="w-7 h-7 rounded-full bg-[#FFE55C]/20 flex items-center justify-center text-[#FFE55C] group-hover:bg-[#FFE55C] group-hover:text-primary-navy transition-colors">
                        <Lightbulb className="w-3.5 h-3.5" />
                      </div>
                      <span className="font-medium text-xs text-gray-200 group-hover:text-white">GMP & Regulatory Compliance Support</span>
                    </li>
                  </ul>

                  <Link to="/services" className="block text-right mt-4 text-xs font-semibold text-gray-400 hover:text-[#FFE55C] transition-colors">
                    See More &rarr;
                  </Link>
                </FloatingCard>

                {/* ROTATING BADGE */}
                <div className="absolute -top-10 right-8 lg:right-20 z-0 hidden lg:block pointer-events-auto">
                  <RotatingBadge />
                </div>

              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* MOBILE STACK: Reusing FloatingCard styling concepts for consistency */}
      <section className="hidden md:hidden px-6 pb-20 space-y-6">

        {/* Mobile Stat Card */}
        {/* Mobile Stat Card REMOVED */}

        {/* Mobile Services Card */}
        <FloatingCard isFloating={false} delay={0.4} className="w-full !bg-primary-navy !text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#FFE55C] rounded-xl flex items-center justify-center text-primary-navy shadow-md shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">Discover</span>
              <h4 className="font-serif font-bold text-base leading-tight text-white">Our Core Services</h4>
            </div>
          </div>

          <ul className="space-y-2">
            <li className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="w-8 h-8 rounded-full bg-[#2B809A]/20 flex items-center justify-center text-[#2B809A]">
                <BarChart className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm text-gray-200">Quality Management Systems</span>
            </li>
            <li className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
              <div className="w-8 h-8 rounded-full bg-[#FFE55C]/20 flex items-center justify-center text-[#FFE55C]">
                <Lightbulb className="w-4 h-4" />
              </div>
              <span className="font-medium text-sm text-gray-200">GMP & Regulatory Support</span>
            </li>
          </ul>

          <Link to="/services" className="block text-right mt-4 text-xs font-semibold text-gray-400 hover:text-[#FFE55C]">
            See More &rarr;
          </Link>
        </FloatingCard>

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
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium leading-tight text-primary-navy">
            QualiPRO Consult delivers strategic, practical quality consulting for organizations committed to <span className="italic font-bold">excellence</span> and <span className="text-accent-teal font-bold">sustainable performance.</span>
          </h2>
        </motion.div>
      </section>

      {/* NEW: WHY CHOOSE US SECTION */}
      <section className="py-20 px-6 bg-white text-primary-navy max-w-4xl mx-auto">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-6">
              Why choose <span className="text-accent-teal">QualiPRO?</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We deliver practical, risk-based quality solutions that go beyond certification, helping organizations strengthen compliance and improve operational efficiency.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">

            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-accent-teal" />
                <h3 className="text-lg font-bold">Client-Centric Approach</h3>
              </div>
              <div className="h-px w-full bg-gray-200" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We work closely with our clients to understand their operational realities and regulatory obligations. Every engagement is designed to be practical, collaborative, and empowering, building internal capability while delivering measurable results.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-5 h-5 text-[#FFE55C]" />
                <h3 className="text-lg font-bold">Built for Sustainable Growth</h3>
              </div>
              <div className="h-px w-full bg-gray-200" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Scalable quality systems that support compliance, efficiency, and long-term performance.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <Target className="w-5 h-5 text-accent-teal" />
                <h3 className="text-lg font-bold">Your Success, Our Focus</h3>
              </div>
              <div className="h-px w-full bg-gray-200" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We measure our success by the strength, effectiveness, and sustainability of the systems we help you build.
              </p>
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 md:mt-16 flex justify-center"
          >
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-navy text-white rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 w-[80%] md:w-auto"
            >
              More About Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
