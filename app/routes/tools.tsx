import { motion } from "framer-motion";
import type { Route } from "./+types/tools";
import {
    ClipboardDocumentCheckIcon,
    DocumentDuplicateIcon,
    ExclamationTriangleIcon
} from "@heroicons/react/24/outline";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Tools & Methodology - QualiPRO Consult" },
        { name: "description", content: "QualiPRO Consult's proprietary tools and methodology for effective quality management." },
    ];
}

const METHODOLOGY_STEPS = [
    {
        step: "01",
        title: "Assess & Understand",
        desc: "We begin by understanding the organization's context, regulatory obligations, operational risks, and business objectives.",
    },
    {
        step: "02",
        title: "Measure & Prioritize",
        desc: "Using objective assessment tools, we identify compliance gaps, risk areas, and improvement priorities.",
    },
    {
        step: "03",
        title: "Design & Implement",
        desc: "We work closely with client teams to design and implement practical systems, procedures, and controls.",
    },
    {
        step: "04",
        title: "Verify & Strengthen",
        desc: "Through internal audits, readiness reviews, and performance checks, we verify system effectiveness.",
    },
    {
        step: "05",
        title: "Sustain & Improve",
        desc: "Post-certification, we support ongoing monitoring, risk management, and continual improvement.",
    },
];

const TOOLS = [
    {
        icon: ClipboardDocumentCheckIcon,
        name: "ACERT",
        fullName: "Accreditation and Certification Evaluation and Readiness Tracker",
        description: "ACERT is a structured readiness assessment and tracking tool designed to evaluate organizational compliance against ISO standards, GMP requirements, and accreditation criteria.",
        features: [
            "Assesses compliance status",
            "Identifies & prioritizes gaps",
            "Tracks progress toward certification",
            "Provides readiness indicators",
        ],
    },
    {
        icon: DocumentDuplicateIcon,
        name: "Q-DOC Master",
        fullName: "Document Control System",
        description: "Q-DOC Master is a proprietary document control and tracking tool developed to support the effective management of controlled Quality Management System documentation.",
        features: [
            "Centralized document register",
            "Standardized numbering structures",
            "Tracks versions & history",
            "Monitors review cycles",
        ],
    },
    {
        icon: ExclamationTriangleIcon,
        name: "Q-Risk Tracker",
        fullName: "Risk Identification and Monitoring Tool",
        description: "Q-Risk Tracker is a practical risk management tool used to identify, assess, and monitor operational, quality, and compliance risks.",
        features: [
            "Supports risk-based thinking",
            "Tracks risks, controls & mitigation",
            "Links risks to audit findings",
            "Prevents failures before they occur",
        ],
    },
];

export default function Tools() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary-navy text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <svg className="absolute bottom-0 left-0 w-full h-full text-accent-teal" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M0 100 L50 0 L100 100 Z" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6"
                    >
                        Tools & <span className="text-accent-teal">Methodology</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        At QualiPRO Consult, we combine hands-on consulting with proprietary, data-driven tools to help organizations move beyond checklist compliance and build quality systems that deliver measurable operational and business value.
                    </motion.p>
                </div>
            </section>

            {/* Methodology Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-primary-navy mb-4">Our Implementation Methodology</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every engagement follows a structured five-stage approach ensuring quality systems are effective and sustainable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {METHODOLOGY_STEPS.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative p-6 bg-neutral-surface rounded-xl border border-neutral-border hover:border-accent-teal transition-colors group"
                            >
                                <div className="text-4xl font-bold text-accent-teal/20 mb-4 group-hover:text-accent-teal transition-colors">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold text-primary-navy mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Section */}
            <section className="py-20 bg-primary-navy text-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-white mb-4">Our Proprietary Tools</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            To ensure consistency, transparency, and measurable results, we integrate three proprietary tools into our consulting services.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {TOOLS.map((tool, index) => (
                            <motion.div
                                key={tool.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-primary-dark p-8 rounded-2xl border border-gray-700 hover:border-accent-teal transition-all"
                            >
                                <div className="w-14 h-14 bg-accent-teal/20 rounded-xl flex items-center justify-center mb-6">
                                    <tool.icon className="w-8 h-8 text-accent-teal" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{tool.name}</h3>
                                <p className="text-accent-teal text-sm font-semibold mb-4">{tool.fullName}</p>
                                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                                    {tool.description}
                                </p>
                                <ul className="space-y-2">
                                    {tool.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <span className="w-1.5 h-1.5 bg-accent-teal rounded-full"></span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
