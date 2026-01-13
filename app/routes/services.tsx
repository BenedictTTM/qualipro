import { motion } from "framer-motion";
import type { Route } from "./+types/services";
import {
    ClipboardDocumentCheckIcon,
    BeakerIcon,
    AcademicCapIcon,
    ArrowPathIcon,
    BuildingOffice2Icon,
    UserGroupIcon,
    ShieldCheckIcon
} from "@heroicons/react/24/outline";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Our Services - QualiPRO Consult" },
        { name: "description", content: "QualiPRO Consult provides quality management, compliance, and capacity-building services." },
    ];
}

const SERVICES = [
    {
        icon: ClipboardDocumentCheckIcon,
        title: "ISO Systems Consulting & Implementation",
        description: "We support organizations in the design, implementation, and improvement of management systems aligned with internationally recognized ISO standards. Our approach focuses on building systems that work in practice, not just on paper.",
        details: [
            "ISO 9001, 14001, 45001",
            "ISO/IEC 17025, 15189",
            "ISO 22000, 13485",
        ],
        benefits: [
            "Faster certification readiness",
            "Reduced rework & compliance risks",
            "Stronger process control",
        ]
    },
    {
        icon: BeakerIcon,
        title: "GMP Consulting",
        description: "QualiPRO Consult provides GMP consulting services to pharmaceutical, food, and medical device organizations to support compliance with Good Manufacturing Practice (GMP) and regulatory inspection requirements.",
        details: [
            "GMP gap assessments",
            "Mock GMP inspections",
            "CAPA planning & execution",
            "Alignment with WHO, FDA Ghana",
        ],
        benefits: [
            "Stronger GMP systems",
            "Reduced inspection findings",
            "Improved product quality",
        ]
    },
    {
        icon: ShieldCheckIcon,
        title: "Internal and External Audits",
        description: "QualiPRO Consult conducts independent internal audits and compliance assessments to verify system effectiveness and support continual improvement.",
        details: [
            "Internal audits (ISO 19011)",
            "Second party (Supplier) audits",
            "Compliance assessments",
            "CAPA verification",
        ],
        benefits: [
            "Early gap identification",
            "Sustained certification readiness",
            "Improved supplier performance",
        ]
    },
    {
        icon: AcademicCapIcon,
        title: "Training & Capacity Building",
        description: "Through the QualiPRO Training Series, we deliver competency-based training programs that build in-house expertise and reduce long-term dependence on external consultants.",
        details: [
            "ISO awareness & auditor training",
            "Risk management & CAPA workshops",
            "GMP & quality culture programs",
            "Laboratory systems training",
        ],
        benefits: [
            "Stronger internal competence",
            "Improved staff engagement",
            "Sustainable quality performance",
        ]
    },
    {
        icon: ArrowPathIcon,
        title: "Post-Certification Support",
        description: "Certification is not the end of the quality journey. QualiPRO Consult provides ongoing support to help organizations maintain and improve their systems over time.",
        details: [
            "Surveillance audit preparation",
            "Performance monitoring & KPI reviews",
            "Process optimization",
            "Continual improvement planning",
        ],
        benefits: [
            "Sustained compliance",
            "Reduced cost of poor quality",
            "Continuous performance improvement",
        ]
    },
    {
        icon: UserGroupIcon,
        title: "Certification-Body Liaison",
        description: "We support organizations throughout the certification or accreditation process by acting as a technical liaison with certification and accreditation bodies.",
        details: [
            "Stage 1 & Stage 2 audit prep",
            "Support during external audits",
            "Response to findings",
            "CAPA implementation tracking",
        ],
        benefits: [
            "Smoother audit processes",
            "Reduced delays",
            "Higher success likelihood",
        ]
    },
    {
        icon: BuildingOffice2Icon,
        title: "Quality & Lab Systems Strengthening",
        description: "Beyond organizational consulting, QualiPRO Consult supports public institutions, laboratories, and regulatory bodies in strengthening quality and regulatory systems.",
        details: [
            "ISO 17025 accreditation assistance",
            "Regulatory system strengthening",
            "Quality manuals & audit tools",
            "Capacity-building for regulators",
        ],
        benefits: [
            "Stronger institutional systems",
            "Improved regulatory confidence",
            "Alignment with international best practices",
        ]
    },
];

export default function Services() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary-navy text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <svg className="absolute bottom-0 right-0 w-full h-full text-accent-teal" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="100" cy="100" r="50" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6"
                    >
                        Our <span className="text-accent-teal">Services</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        QualiPRO Consult provides quality management, compliance, and capacity-building services designed not only to achieve certification and regulatory compliance but to improve operational efficiency, reduce risk, and strengthen business profitability.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {SERVICES.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white border border-neutral-border rounded-xl shadow-sm hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 bg-accent-teal-light rounded-lg flex items-center justify-center shrink-0">
                                        <service.icon className="w-6 h-6 text-accent-teal" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-navy">{service.title}</h3>
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                                    <div>
                                        <h4 className="font-bold text-primary-navy mb-2">Key Areas:</h4>
                                        <ul className="space-y-1 text-gray-600">
                                            {service.details.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-accent-teal rounded-full"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary-navy mb-2">Client Benefits:</h4>
                                        <ul className="space-y-1 text-gray-600">
                                            {service.benefits.map((item, i) => (
                                                <li key={i} className="flex items-center gap-2">
                                                    <span className="w-1 h-1 bg-accent-teal rounded-full"></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
