import { motion } from "framer-motion";
import type { Route } from "./+types/about";
import {
    ShieldCheckIcon,
    LightBulbIcon,
    ChartBarIcon,
    UserGroupIcon,
    GlobeAltIcon,
    BeakerIcon,
} from "@heroicons/react/24/outline";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About Us - QualiPRO Consult" },
        { name: "description", content: "QualiPRO Consult is a quality management systems, compliance, and training consultancy." },
    ];
}

const CORE_VALUES = [
    {
        icon: ShieldCheckIcon,
        title: "Integrity & Independence",
        desc: "We deliver ethical, objective, and confidential services, maintaining professional independence and earning the trust of our clients and stakeholders.",
    },
    {
        icon: GlobeAltIcon,
        title: "Technical Excellence",
        desc: "Our work is grounded in internationally recognized standards, regulatory best practices, and evidence-based methodologies that ensure accuracy, reliability, and consistency.",
    },
    {
        icon: LightBulbIcon,
        title: "Practical Implementation",
        desc: "We focus on solutions that work in practice—building functional systems that are embedded in daily operations, not just documented for audits.",
    },
    {
        icon: UserGroupIcon,
        title: "Client Partnership",
        desc: "We work collaboratively with our clients, prioritizing knowledge transfer, shared responsibility, and results-driven engagement.",
    },
    {
        icon: ChartBarIcon,
        title: "Continuous Improvement",
        desc: "We promote a culture of learning, innovation, and ongoing improvement for both our clients and our own internal systems.",
    },
    {
        icon: BeakerIcon,
        title: "Impact & Sustainability",
        desc: "We aim to deliver lasting value by helping organizations reduce risk, improve efficiency, and strengthen profitability through effective quality management.",
    },
];

export default function About() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary-navy text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <svg className="absolute top-0 right-0 w-full h-full text-accent-teal" viewBox="0 0 100 100" fill="currentColor">
                        <path d="M50 0 L100 100 L0 100 Z" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6"
                    >
                        About <span className="text-accent-teal">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        QualiPRO Consult helps organizations in regulated and quality-critical industries design, implement, and sustain effective ISO and GMP systems.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Who We Are */}
                    <div className="mb-20">
                        <h2 className="text-3xl font-heading font-bold text-primary-navy mb-8 text-center">Who We Are</h2>
                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg max-w-4xl mx-auto">
                            <p>
                                QualiPRO Consult is a quality management systems, compliance, and training consultancy dedicated to supporting organizations in the design, implementation, and sustainability of internationally recognized management systems and regulatory frameworks. The firm provides technical consulting and capacity-building services aligned with ISO standards, Good Manufacturing Practice (GMP), and related regulatory requirements across manufacturing, healthcare, laboratories, and service sectors.
                            </p>
                            <p>
                                Guided by the principle <strong>“Quality Beyond Certification,”</strong> QualiPRO Consult focuses on building practical, functional, and sustainable systems that extend beyond audit preparation. Its approach emphasizes real implementation—helping organizations embed quality into daily operations to improve compliance, operational efficiency, and decision-making.
                            </p>
                            <p>
                                By strengthening process control, reducing nonconformities, and minimizing the cost of poor quality, QualiPRO Consult enables organizations to use quality management as a strategic business tool. Clients benefit not only from successful certification or regulatory approval but also from improved productivity, reduced risk, enhanced customer confidence, and long-term business profitability.
                            </p>
                        </div>
                    </div>

                    {/* Mission & Vision */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-accent-teal-light p-10 rounded-2xl shadow-sm border border-accent-teal/20"
                        >
                            <h3 className="text-2xl font-heading font-bold text-primary-navy mb-4">Our Mission</h3>
                            <p className="text-gray-700 leading-relaxed">
                                To build a culture of quality and compliance that strengthens organizations through expert, hands-on consulting and training, enabling them to design, implement, and sustain effective management systems that support certification, regulatory compliance, and long-term business performance.
                            </p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-primary-navy p-10 rounded-2xl shadow-sm text-white"
                        >
                            <h3 className="text-2xl font-heading font-bold text-white mb-4">Our Vision</h3>
                            <p className="text-gray-300 leading-relaxed">
                                To be Africa’s most trusted consulting partner in quality, safety, and compliance systems—recognized for integrity, technical excellence, and measurable results that help organizations achieve sustainable growth and global standards.
                            </p>
                        </motion.div>
                    </div>

                    {/* Core Values */}
                    <div>
                        <h2 className="text-3xl font-heading font-bold text-primary-navy mb-12 text-center">Core Values</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {CORE_VALUES.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-white border border-neutral-border rounded-xl shadow-sm hover:shadow-md transition-all group"
                                >
                                    <div className="w-12 h-12 bg-accent-teal-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent-teal transition-colors">
                                        <value.icon className="w-6 h-6 text-accent-teal group-hover:text-white transition-colors" />
                                    </div>
                                    <h4 className="text-xl font-bold text-primary-navy mb-3">{value.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
