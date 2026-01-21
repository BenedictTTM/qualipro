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
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary-navy text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <svg className="absolute top-0 left-0 w-full h-full text-accent-teal" viewBox="0 0 100 100" fill="currentColor">
                        <rect x="0" y="0" width="50" height="50" transform="rotate(45 25 25)" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6"
                    >
                        Industries We <span className="text-[#FFE55C]">Serve</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Across all sectors, we help organizations shift from reactive to proactive quality management—reducing the cost of poor quality, preventing failures, and protecting revenue.
                    </motion.p>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {INDUSTRIES.map((industry, index) => (
                            <motion.div
                                key={industry.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white border border-neutral-border rounded-xl shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
                            >
                                <div className="w-14 h-14 bg-accent-teal-light rounded-2xl flex items-center justify-center mb-6 shrink-0">
                                    <industry.icon className="w-8 h-8 text-accent-teal" />
                                </div>
                                <h3 className="text-xl font-bold text-primary-navy mb-3">{industry.title}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                                    {industry.description}
                                </p>

                                <div className="bg-neutral-surface p-4 rounded-lg">
                                    <h4 className="font-bold text-primary-navy text-sm mb-2">Business Value:</h4>
                                    <ul className="space-y-1">
                                        {industry.value.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <span className="text-accent-teal mt-1">✓</span>
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
