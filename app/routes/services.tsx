import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import type { Route } from "./+types/services";
import {
    ClipboardCheck,
    FlaskConical,
    ShieldCheck,
    GraduationCap,
    RefreshCw,
    Handshake,
    Building2,
    Pill,
    Utensils,
    Microscope,
    Stethoscope,
    Hospital,
    Factory,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    ChevronDown
} from "lucide-react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Our Services - QualiPRO Consult" },
        { name: "description", content: "QualiPRO Consult provides quality management, compliance, and capacity-building services." },
    ];
}

const SERVICES = [
    {
        icon: ClipboardCheck,
        title: "ISO Systems Consulting",
        subtitle: "& Implementation",
        description: "QualiPRO Consult supports organizations in the design, implementation, and improvement of management systems aligned with internationally recognized ISO standards. Our approach focuses on building systems that work in practice, not just on paper.",
        details: [
            "ISO 9001 (Quality)",
            "ISO/IEC 17025 (Labs)",
            "ISO 22000 (Food Safety)",
            "ISO 13485 (Medical Devices)",
            "ISO 15189 (Medical Labs)",
            "ISO 14001 (Environmental)",
            "ISO 45001 (OH&S)"
        ],
        benefits: [
            "Faster certification readiness",
            "Reduced rework & compliance risks",
            "Stronger process control",
            "Business efficiency & profitability"
        ]
    },
    {
        icon: FlaskConical,
        title: "GMP Consulting",
        subtitle: "Pharma & Food Safety",
        description: "QualiPRO Consult provides GMP consulting services to pharmaceutical, food, and medical device organizations to support compliance with Good Manufacturing Practice (GMP) and regulatory inspection requirements.",
        details: [
            "GMP gap assessments",
            "Mock GMP inspections",
            "CAPA planning & execution",
            "Alignment with WHO, FDA Ghana"
        ],
        benefits: [
            "Stronger GMP systems",
            "Reduced inspection findings",
            "Improved product quality",
            "Reduced operational disruptions"
        ]
    },
    {
        icon: ShieldCheck,
        title: "Audits & Assessments",
        subtitle: "Internal & External",
        description: "QualiPRO Consult conducts independent internal audits and compliance assessments to verify system effectiveness and support continual improvement.",
        details: [
            "Internal audits (ISO 19011)",
            "Second party (Supplier) audits",
            "Compliance assessments",
            "CAPA verification"
        ],
        benefits: [
            "Early gap identification",
            "Sustained certification readiness",
            "Improved supplier performance",
            "System effectiveness"
        ]
    },
    {
        icon: GraduationCap,
        title: "Training & Capacity",
        subtitle: "Building Expertise",
        description: "Through the QualiPRO Training Series, we deliver competency-based training programs that build in-house expertise and reduce long-term dependence on external consultants.",
        details: [
            "ISO awareness & auditor training",
            "Risk management & CAPA workshops",
            "GMP & quality culture programs",
            "Laboratory systems training"
        ],
        benefits: [
            "Stronger internal competence",
            "Improved staff engagement",
            "Sustainable quality performance"
        ]
    },
    {
        icon: RefreshCw,
        title: "Post-Certification Support",
        subtitle: "Continual Improvement",
        description: "Certification is not the end of the quality journey. QualiPRO Consult provides ongoing support to help organizations maintain and improve their systems over time.",
        details: [
            "Surveillance audit preparation",
            "Performance monitoring & KPI reviews",
            "Process optimization",
            "Continual improvement planning"
        ],
        benefits: [
            "Sustained compliance",
            "Reduced cost of poor quality",
            "Continuous performance improvement"
        ]
    },
    {
        icon: Handshake,
        title: "Certification Support",
        subtitle: "Body Liaison",
        description: "We support organizations throughout the certification or accreditation process by acting as a technical liaison with certification and accreditation bodies.",
        details: [
            "Stage 1 & Stage 2 audit prep",
            "Support during external audits",
            "Response to findings",
            "CAPA implementation tracking"
        ],
        benefits: [
            "Smoother audit processes",
            "Reduced delays",
            "Higher success likelihood"
        ]
    },
    {
        icon: Building2,
        title: "Quality Systems",
        subtitle: "Lab Strengthening",
        description: "Beyond organizational consulting, QualiPRO Consult supports public institutions, laboratories, and regulatory bodies in strengthening quality and regulatory systems.",
        details: [
            "ISO 17025 accreditation assistance",
            "Regulatory system strengthening",
            "Quality manuals & audit tools",
            "Capacity-building for regulators"
        ],
        benefits: [
            "Stronger institutional systems",
            "Improved regulatory confidence",
            "Alignment with international best practices"
        ]
    },
];

const INDUSTRIES = [
    {
        icon: Pill,
        title: "Pharmaceutical Industry",
        businessValue: [
            "Reduces costly regulatory findings",
            "Improves process discipline",
            "Protects market authorization",
            "Strengthens inspection readiness"
        ]
    },
    {
        icon: Utensils,
        title: "Food & Agro-Processing",
        businessValue: [
            "Prevents food safety incidents",
            "Reduces waste & rework",
            "Improves process efficiency",
            "Supports access to new markets"
        ]
    },
    {
        icon: Microscope,
        title: "Testing Laboratories",
        businessValue: [
            "Improves reliability of test results",
            "Reduces repeat testing",
            "Strengthens operational control",
            "Protects accreditation status"
        ]
    },
    {
        icon: Stethoscope,
        title: "Medical Devices",
        businessValue: [
            "Reduces compliance risk",
            "Improves design control",
            "Protects market access",
            "Reduces costly rework"
        ]
    },
    {
        icon: Hospital,
        title: "Healthcare Facilities",
        businessValue: [
            "Improves patient safety",
            "Reduces operational errors",
            "Strengthens accreditation readiness",
            "Enhances reputation"
        ]
    },
    {
        icon: Factory,
        title: "Manufacturing",
        businessValue: [
            "Reduces process inefficiencies",
            "Improves occupational safety",
            "Strengthens risk management",
            "Supports productivity"
        ]
    }
];

const StickyServiceCard = ({ service, index, total }: { service: any, index: number, total: number }) => {
    return (
        <div className="sticky top-28 mb-8 last:mb-0">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative bg-white border border-neutral-border rounded-xl p-6 md:p-8 shadow-xl overflow-hidden group"
                style={{
                    // Subtle stacking effect: cards get slightly higher z-index
                    zIndex: index + 1,
                    // Optional: slight rotation for a "hand-stacked" feel could be cool, but keeping clean for now
                }}
            >
                {/* Decorative Number */}
                <span className="absolute top-4 right-8 text-7xl font-bold text-gray-50 opacity-10 select-none -z-10 group-hover:text-accent-teal/10 transition-colors duration-500">
                    {String(index + 1).padStart(2, '0')}
                </span>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                    {/* Left: Icon & Description */}
                    <div className="space-y-4">
                        <div className="inline-flex items-center justify-center w-12 h-12  text-accent-teal  transition-colors duration-500">
                            <service.icon className="w-8 h-8" />
                        </div>

                        <div>
                            <h3 className="text-2xl font-serif font-bold text-primary-navy mb-2">
                                {service.title}
                            </h3>
                            <div className="inline-block bg-[#FFE55C] px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-navy mb-3">
                                {service.subtitle}
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>

                    {/* Right: Details & Benefits */}
                    <div className="space-y-6 bg-gray-50 p-5 rounded-xl border border-gray-100/50">
                        {/* Key Areas */}
                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-primary-navy mb-3 text-xs uppercase tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-teal"></span>
                                Key Areas
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {service.details.map((item: string, i: number) => (
                                    <span key={i} className="px-2 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 font-medium">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Benefits */}
                        <div>
                            <h4 className="flex items-center gap-2 font-bold text-primary-navy mb-3 text-xs uppercase tracking-wide">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FFE55C]"></span>
                                Client Benefits
                            </h4>
                            <ul className="grid sm:grid-cols-2 gap-2">
                                {service.benefits.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFE55C] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

const ServiceProgress = ({ count, scrollProgress }: { count: number, scrollProgress: any }) => {
    return (
        <div className="hidden lg:flex flex-col items-center gap-2 sticky top-40 h-fit">
            {Array.from({ length: count }).map((_, i) => {
                const start = i / count;
                const end = (i + 1) / count;

                // Using useTransform to create a driver for style changes
                const isActive = useTransform(scrollProgress, [start, end], [1, 0]);

                return (
                    <ProgressDot key={i} isActive={isActive} start={start} end={end} scrollProgress={scrollProgress} />
                );
            })}
        </div>
    );
};

// Extracted component to handle individual dot animations cleanly
const ProgressDot = ({ isActive, start, end, scrollProgress }: any) => {
    const color = useTransform(scrollProgress, (v: number) => (v >= start && v < end ? "#2B809A" : "#e5e7eb"));
    const scale = useTransform(scrollProgress, (v: number) => (v >= start && v < end ? 1.5 : 1));

    return (
        <motion.div
            className="w-2 h-2 rounded-full transition-colors duration-300"
            style={{ backgroundColor: color, scale }}
        />
    );
}

const IndustryAccordionItem = ({ industry, index, isOpen, toggle }: { industry: any, index: number, isOpen: boolean, toggle: () => void }) => {
    return (
        <div className="mb-2 last:mb-0">
            <button
                onClick={toggle}
                className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 transition-colors rounded-lg text-left group"
            >
                <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-white/50 group-hover:text-[#FFE55C] transition-colors">
                        {String(index + 1).padStart(2, '0')}.
                    </span>
                    <h3 className="text-base font-bold text-white group-hover:text-[#FFE55C] transition-colors">
                        {industry.title}
                    </h3>
                </div>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#FFE55C] border-[#FFE55C] rotate-180" : "group-hover:border-[#FFE55C]"}`}>
                    <ChevronDown className={`w-4 h-4 ${isOpen ? "text-primary-navy" : "text-white group-hover:text-[#FFE55C]"}`} />
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 pt-2 pl-14 bg-black/20 border-x border-b border-white/5 rounded-b-lg">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-2 bg-white/10 rounded-lg shrink-0">
                                    <industry.icon className="w-6 h-6 text-[#FFE55C]" />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-4 w-full">
                                    {industry.businessValue.map((item: string, i: number) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <span className="w-1.5 h-1.5 mt-2 bg-accent-teal rounded-full shrink-0"></span>
                                            <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function Services() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const servicesRef = useRef(null);
    const { scrollYProgress: servicesScrollProgress } = useScroll({
        target: servicesRef,
        offset: ["start center", "end center"]
    });

    const [openIndustry, setOpenIndustry] = useState<number | null>(0);

    return (
        <div className="w-full bg-slate-50 relative">
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-accent-teal origin-left z-50"
                style={{ scaleX }}
            />

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-primary-navy text-white min-h-[70vh] flex items-center">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/7689745/pexels-photo-7689745.jpeg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 via-primary-navy/70 to-transparent" />
                </div>

                <div className="container mx-auto max-w-7xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >


                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-[1.1] mb-8 text-white">
                            We build quality into your <span className="text-[#FFE55C] italic pr-2">systems,</span> <br />
                            processes, and <span className="relative inline-block text-accent-teal">
                                decisions.
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent-teal opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-md md:text-lg text-gray-300 max-w-2xl leading-relaxed font-light">
                            Beyond certification. We design systems that improve efficiency, reduce risk, and drive profitability.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SERVICES STACK */}
            <section className="py-24 px-6" ref={servicesRef}>
                <div className="container mx-auto max-w-5xl">
                    <div className="mb-20 text-center lg:text-left">
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-4">Our Expertise</h2>
                        <p className="text-3xl md:text-4xl font-serif text-primary-navy">
                            A holistic approach to <span className="text-accent-teal underline decoration-wavy decoration-[#FFE55C]">excellence.</span>
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[50px_1fr] gap-8 relative">
                        <ServiceProgress count={SERVICES.length} scrollProgress={servicesScrollProgress} />

                        <div className="space-y-12 md:space-y-24 w-full max-w-3xl">
                            {SERVICES.map((service, index) => (
                                <StickyServiceCard key={index} service={service} index={index} total={SERVICES.length} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* INDUSTRIES ACCORDION (Updated) */}
            <section className="py-32 bg-primary-navy px-6 text-white">
                <div className="container mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
                        >
                            Tailored for <span className="text-accent-teal">Every Sector</span>
                        </motion.h2>
                        <p className="text-md text-white/60">
                            We speak the language of your industry, ensuring compliance and efficiency in every process.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {INDUSTRIES.map((industry, index) => (
                            <IndustryAccordionItem
                                key={industry.title}
                                industry={industry}
                                index={index}
                                isOpen={openIndustry === index}
                                toggle={() => setOpenIndustry(openIndustry === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 px-6 bg-primary-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>


            </section>
        </div>
    );
}
