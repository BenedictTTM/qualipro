import { motion } from "framer-motion";
import type { Route } from "./+types/tools";
import {
    ClipboardCheck,
    FileText,
    ShieldAlert,
    Search,
    BarChart3,
    PenTool,
    CheckCircle2,
    RefreshCw,
    TrendingUp,
    Layout,
    Target,
    ArrowRight
} from "lucide-react";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Tools & Methodology - QualiPRO Consult" },
        { name: "description", content: "QualiPRO Consult's proprietary tools and methodology for effective quality management." },
    ];
}

/* --- DATA --- */

const METHODOLOGY_STEPS = [
    {
        step: "01",
        title: "Assess & Understand",
        icon: Search,
        desc: "We begin by understanding the organization’s context, regulatory obligations, operational risks, and business objectives. This ensures quality systems are designed to support real operational needs, not generic requirements.",
    },
    {
        step: "02",
        title: "Measure & Prioritize",
        icon: BarChart3,
        desc: "Using objective assessment tools, we identify compliance gaps, risk areas, and improvement priorities. This prevents unfocused effort and directs resources where they deliver the highest impact.",
    },
    {
        step: "03",
        title: "Design & Implement",
        icon: PenTool,
        desc: "We work closely with client teams to design and implement practical systems, procedures, and controls that fit daily operations and regulatory expectations.",
    },
    {
        step: "04",
        title: "Verify & Strengthen",
        icon: CheckCircle2,
        desc: "Through internal audits, readiness reviews, and performance checks, we verify system effectiveness and close gaps before external audits or inspections.",
    },
    {
        step: "05",
        title: "Sustain & Improve",
        icon: RefreshCw,
        desc: "Post-certification, we support ongoing monitoring, risk management, and continual improvement to ensure quality systems continue to deliver value over time.",
    }
];

const TOOLS = [
    {
        id: "acert",
        name: "ACERT",
        fullName: "Accreditation and Certification Evaluation and Readiness Tracker",
        icon: ClipboardCheck,
        description: "A structured readiness assessment and tracking tool designed to evaluate organizational compliance against ISO standards, GMP requirements, and accreditation criteria.",
        whatItDoes: [
            "Assesses compliance status against applicable standards",
            "Identifies and prioritizes gaps using measurable scoring",
            "Tracks progress toward certification or accreditation",
            "Provides management with objective readiness indicators"
        ],
        businessValue: [
            "Prevents wasted effort on low-impact actions",
            "Accelerates certification readiness",
            "Reduces audit failures and repeat corrective actions",
            "Supports informed, risk-based decision-making"
        ]
    },
    {
        id: "qdoc",
        name: "Q-DOC Master",
        fullName: "Document Control & Tracking Tool",
        icon: FileText,
        description: "A proprietary document control and tracking tool developed to support the effective management of controlled Quality Management System documentation across its full lifecycle.",
        whatItDoes: [
            "Maintains a centralized and authoritative register of all controlled documents",
            "Generates standardized document identification and numbering structures",
            "Tracks document versions and revision history through an auditable change log",
            "Monitors review cycles and overdue documents through automated alerts",
            "Supports management oversight through dashboards"
        ],
        businessValue: [
            "Reduces errors caused by outdated or uncontrolled documents",
            "Minimizes audit findings related to documentation",
            "Improves operational consistency and efficiency",
            "Saves time during audits and inspections"
        ]
    },
    {
        id: "qrisk",
        name: "Q-Risk Tracker",
        fullName: "Risk Identification and Monitoring Tool",
        icon: ShieldAlert,
        description: "A practical risk management tool used to identify, assess, and monitor operational, quality, and compliance risks.",
        whatItDoes: [
            "Supports risk-based thinking across processes",
            "Tracks risks, controls, and mitigation actions",
            "Links risks to audit findings and CAPA activities"
        ],
        businessValue: [
            "Prevents failures before they occur",
            "Reduces the cost of poor quality and operational disruptions",
            "Strengthens proactive management and accountability",
            "Protects business continuity and profitability"
        ]
    }
];

/* --- COMPONENTS --- */

const HighlightText = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
    <span className={`relative inline-block z-10 px-2 ${className}`}>
        <span className="relative z-10">{children}</span>
        <span className="absolute bottom-1 left-0 w-full h-3 bg-[#FFE55C] -z-10 opacity-90 skew-x-12" />
    </span>
);

const StepCard = ({ step, index }: { step: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl   transition-all duration-300 hover:shadow-xs"
        >
            {/* Number & Icon */}
            <div className="shrink-0 relative">
                <div className="text-8xl font-bold text-gray-100 group-hover:text-accent-teal/10 transition-colors pointer-events-none select-none">
                    {step.step}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full border border-gray-100 flex items-center justify-center text-accent-teal group-hover:scale-110 transition-transform shadow-sm">
                    <step.icon className="w-6 h-6" />
                </div>
            </div>

            {/* Content */}
            <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary-navy font-serif">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-sm">
                    {step.desc}
                </p>
            </div>

            {/* Connector Line for Desktop (Visual only, not functional) */}
            {index !== METHODOLOGY_STEPS.length - 1 && (
                <div className="hidden md:block absolute left-20 bottom-0 w-px h-8 bg-gray-200 -mb-8 z-0" />
            )}
        </motion.div>
    );
};

const ToolCard = ({ tool, index }: { tool: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="flex flex-col lg:flex-row  overflow-hidden  hover:border-gray-600 transition-colors group"
        >
            {/* Left: Identity */}
            <div className="lg:w-2/5 p-8 md:p-12 bg-gradient-to-br from-white/5 to-transparent flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10 pointer-events-none">
                    <div className="w-16 h-16  flex items-center justify-center mb-8   text-accent-teal transition-colors duration-300">
                        <tool.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{tool.name}</h3>
                    <p className="text-accent-teal font-medium mb-6 text-sm uppercase tracking-wider">{tool.fullName}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {tool.description}
                    </p>
                </div>

                {/* Decoration */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-teal/5 rounded-full blur-3xl group-hover:bg-accent-teal/10 transition-colors" />
            </div>

            {/* Right: Details */}
            <div className="lg:w-3/5 p-8 md:p-12 bg-primary-navy/50 border-t lg:border-t-0 lg:border-l border-gray-700 flex flex-col gap-8">

                {/* What it does */}
                <div>
                    <h4 className="flex items-center gap-2 text-[#FFE55C] font-bold text-sm uppercase tracking-wider mb-4">
                        <Layout className="w-4 h-4" />
                        What {tool.name} does
                    </h4>
                    <ul className="space-y-3">
                        {tool.whatItDoes.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                <span className="w-1.5 h-1.5 mt-2 rounded-full bg-white/20 shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Business Value */}
                <div>
                    <h4 className="flex items-center gap-2 text-accent-teal font-bold text-sm uppercase tracking-wider mb-4">
                        <TrendingUp className="w-4 h-4" />
                        Business Value
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-4">
                        {tool.businessValue.map((item: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                <CheckCircle2 className="w-4 h-4 text-accent-teal shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
};

/* --- MAIN PAGE --- */

export default function Tools() {
    return (
        <div className="w-full bg-white font-sans text-primary-navy">

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 px-6 bg-primary-navy text-white overflow-hidden">
                {/* Background Pattern */}
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/4427497/pexels-photo-4427497.jpeg"
                        alt="Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/90 via-primary-navy/80 to-primary-navy/60" />
                </div>

                <div className="container mx-auto max-w-6xl relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
                            Tools & <span className="text-accent-teal italic">Methodology</span>
                        </h1>
                        <p className="text-md md:text-md text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
                            At QualiPRO Consult, we combine hands-on consulting with proprietary, data-driven tools to help organizations move beyond checklist compliance and build quality systems that deliver measurable operational and business value.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* METHODOLOGY SECTION */}
            <section className="py-24 px-6 bg-slate-50">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Our Process</h2>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-primary-navy mb-6">
                                Implementation <HighlightText>Methodology</HighlightText>
                            </h3>
                            <p className="text-gray-600 max-w-2xl mx-auto text-md md:text-md">
                                Our methodology is structured, practical, and results-oriented—ensuring that quality management systems are not only compliant, but effective, sustainable, and aligned with business objectives.
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-4 md:space-y-6 relative">
                        {/* Connecting Line (Absolute centered for visuals?) - No, easier to do visual line in cards or just vertical layout */}
                        {METHODOLOGY_STEPS.map((step, index) => (
                            <StepCard key={step.step} step={step} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* PROPRIETARY TOOLS SECTION */}
            <section className="py-24 px-6 bg-primary-navy text-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent-teal mb-3">Technology</h2>
                            <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                                Proprietary <span className="text-[#FFE55C] italic">Tools</span>
                            </h3>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                To ensure consistency, transparency, and measurable results, QualiPRO Consult integrates three proprietary tools into its consulting and training services.
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-12">
                        {TOOLS.map((tool, index) => (
                            <ToolCard key={tool.id} tool={tool} index={index} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
