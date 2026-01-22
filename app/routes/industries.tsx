import { motion } from "framer-motion";
import type { Route } from "./+types/industries";
import {
    BeakerIcon,
    ShoppingBagIcon,
    CheckBadgeIcon,
    HeartIcon,
    BuildingOfficeIcon,
    CogIcon
} from "@heroicons/react/24/outline";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Industries We Serve - QualiPRO Consult" },
        { name: "description", content: "QualiPRO Consult supports organizations in regulated and quality-critical industries." },
    ];
}

const INDUSTRIES = [
    {
        icon: BeakerIcon,
        title: "Pharmaceutical Industry",
        description: "We support pharmaceutical manufacturers, importers, distributors, and laboratories to meet GMP, ISO, and regulatory requirements.",
        value: [
            "Reduces costly regulatory findings",
            "Improves process discipline & batch consistency",
            "Protects market authorization",
            "Strengthens inspection readiness"
        ]
    },
    {
        icon: ShoppingBagIcon,
        title: "Food & Agro-Processing",
        description: "QualiPRO Consult supports food manufacturers and processors implementing ISO 22000, FSSC 22000, HACCP, and GMP systems.",
        value: [
            "Prevents food safety incidents",
            "Reduces waste & customer complaints",
            "Improves process efficiency",
            "Supports access to new markets"
        ]
    },
    {
        icon: CheckBadgeIcon,
        title: "Testing & Calibration Labs",
        description: "We support laboratories pursuing or maintaining ISO/IEC 17025 and ISO 15189 accreditation.",
        value: [
            "Improves reliability of test results",
            "Reduces repeat testing & risks",
            "Strengthens operational control",
            "Protects accreditation status"
        ]
    },
    {
        icon: HeartIcon,
        title: "Medical Device Manufacturers",
        description: "We support medical device and diagnostic manufacturers implementing ISO 13485 and GMP-aligned quality systems.",
        value: [
            "Reduces compliance risk",
            "Improves design control & traceability",
            "Protects market access",
            "Reduces costly rework"
        ]
    },
    {
        icon: BuildingOfficeIcon,
        title: "Healthcare Facilities",
        description: "QualiPRO Consult supports healthcare organizations implementing ISO 9001 and ISO 15189-based quality systems.",
        value: [
            "Improves patient safety",
            "Reduces operational errors",
            "Strengthens regulatory readiness",
            "Enhances reputation"
        ]
    },
    {
        icon: CogIcon,
        title: "Manufacturing & Industrial",
        description: "We support small and medium-scale manufacturing and industrial organizations implementing ISO 9001, ISO 14001, and ISO 45001.",
        value: [
            "Reduces process inefficiencies",
            "Improves occupational safety",
            "Strengthens risk management",
            "Supports productivity & profitability"
        ]
    },
];

export default function Industries() {
    return (
        <div className="w-full bg-slate-50">
            {/* Hero Section */}
            <section className="relative py-12 md:py-24 bg-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
                    <svg className="absolute top-0 right-0 w-full h-full text-primary-navy" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-gold font-sans font-semibold tracking-widest text-sm uppercase mb-3">
                            Our Expertise
                        </h2>
                        <h1 className="text-5xl md:text-6xl font-serif text-primary-navy mb-6 leading-tight">
                            Industries We <span className="text-accent-teal italic">Serve</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl mx-auto"
                    >
                        <div className="w-24 h-1 bg-gold mx-auto mb-8 rounded-full"></div>
                        <p className="text-lg md:text-xl text-neutral-muted leading-relaxed font-light">
                            Across all sectors, we help organizations shift from reactive to proactive quality management—reducing the cost of poor quality, preventing failures, and protecting revenue.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-12 md:py-24 bg-slate-50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {INDUSTRIES.map((industry, index) => (
                            <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group relative bg-white p-8 rounded-lg  hover:shadow-xs transition-all duration-300 border border-neutral-border flex flex-col h-full overflow-hidden"
                            >


                                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-lg group-hover:bg-slate-50 text-accent-teal   transition-colors duration-300">
                                    <industry.icon className="w-8 h-8" />
                                </div>

                                <h3 className="text-2xl font-serif text-primary-navy mb-4 group-hover:text-accent-teal-dark transition-colors">
                                    {industry.title}
                                </h3>

                                <p className="text-neutral-muted mb-8 leading-relaxed flex-grow">
                                    {industry.description}
                                </p>

                                <div className="pt-6 border-t border-slate-100">
                                    <h4 className="font-sans font-semibold text-primary-navy text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-accent-teal"></span>
                                        Business Value
                                    </h4>
                                    <ul className="space-y-3">
                                        {industry.value.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-sm text-neutral-600 group-hover:text-neutral-800 transition-colors">
                                                <CheckBadgeIcon className="w-5 h-5 text-gold shrink-0 mt-px opacity-100" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
