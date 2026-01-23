import { motion } from "framer-motion";
import type { Route } from "./+types/contact";
import {
    Mail,
    Phone,
    Clock,
    Globe,
    Copy,
    ArrowRight,
    MessageSquare,
    MessageCircle,
    Smartphone
} from "lucide-react";
import { useState } from "react";

export function meta({ }: Route.MetaArgs) {
    const title = "Contact QualiPRO Consult | Quality Management Consulting";
    const description = "Contact us for ISO consulting, GMP support, and quality training inquiries. Serving Ghana and Africa. Get your free consultation today.";
    const url = "https://www.qualiproconsult.com/contact";
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

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image },
    ];
}

/* --- COMPONENTS --- */

const BentoCard = ({
    children,
    className = "",
    delay = 0,
    onClick
}: {
    children: React.ReactNode,
    className?: string,
    delay?: number,
    onClick?: () => void
}) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        onClick={onClick}
        className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
        {children}
    </motion.div>
);

const WhatsAppCard = ({
    number,
    label,
    delay,
    isPrimary = false
}: {
    number: string,
    label: string,
    delay: number,
    isPrimary?: boolean
}) => {
    const cleanNumber = number.replace(/\s+/g, '').replace('+', '');
    const whatsappUrl = `https://wa.me/${cleanNumber}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay }}
            className={`
                relative flex items-center p-3 md:p-4 rounded-2xl border transition-all duration-500 group overflow-hidden
                ${isPrimary
                    ? 'bg-[#25D366] border-[#25D366] text-white shadow-lg shadow-[#25D366]/20'
                    : 'bg-white border-gray-100 hover:border-[#25D366] hover:bg-[#25D366]/5 shadow-md'
                }
            `}
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
                </svg>
            </div>

            <div className={`
                w-10 h-10 rounded-xl flex items-center justify-center text-xl mr-4 transition-transform group-hover:scale-110 duration-500
                ${isPrimary ? 'bg-white/20 text-white' : 'bg-[#25D366]/10 text-[#25D366]'}
            `}>
                <MessageCircle className="w-6 h-6" />
            </div>

            <div className="flex-1">
                <span className={`
                    text-[10px] font-bold uppercase tracking-widest mb-0.5 block
                    ${isPrimary ? 'text-white/80' : 'text-gray-400'}
                `}>
                    {label}
                </span>
                <h3 className={`
                    text-base md:text-lg font-serif font-bold mb-0
                    ${isPrimary ? 'text-white' : 'text-primary-navy'}
                `}>
                    {number}
                </h3>
                <div className={`
                    flex items-center gap-2 text-xs font-bold uppercase tracking-wider opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300
                    ${isPrimary ? 'text-white' : 'text-[#25D366]'}
                `}>
                    Chat <ArrowRight className="w-3 h-3" />
                </div>
            </div>

            <div className={`
                absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-all duration-500 transform scale-50 group-hover:scale-100
            `}>
                <MessageSquare className="w-14 h-14" />
            </div>
        </motion.a>
    );
}

/* --- MAIN PAGE --- */

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText("info@qualiproconsult.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="w-full bg-white font-sans min-h-screen selection:bg-accent-teal/20 selection:text-primary-navy">

            {/* HERO SECTION - Premium Dark */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ContactPage",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "QualiPRO Consult",
                            "telephone": "+233-24-885-7308",
                            "email": "info@qualiproconsult.com",
                            "url": "https://www.qualiproconsult.com"
                        }
                    }),
                }}
            />
            <section className="relative pt-32 pb-32 md:pt-48 md:pb-40 px-6 bg-primary-navy text-white overflow-hidden">
                {/* Abstract Background Elements */}
                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/7689745/pexels-photo-7689745.jpeg"
                        alt="Professional consultation meeting - contact QualiPRO Consult for quality management services"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-navy/90 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-navy via-primary-navy/80 to-transparent" />
                </div>

                {/* Grain Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

                <div className="container mx-auto max-w-3xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-px w-12 bg-accent-teal"></span>
                                <span className="text-accent-teal font-medium tracking-widest text-sm uppercase">Contact Us</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-[0.9] tracking-tight">
                                Let's build <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">excellence.</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-light">
                                Whether you have a question, need a consultation, or just want to connect, our team is ready to help you elevate your standards.
                            </p>
                        </motion.div>

                        {/* Scroll Down Indicator */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="hidden lg:flex justify-end pb-4"
                        >
                            <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                                <span>Scroll to explore</span>
                                <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center animate-bounce">
                                    <ArrowRight className="w-4 h-4 text-white rotate-90" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT GRID */}
            <section className="relative px-4 md:px-6 -mt-20 pb-24 z-20">
                <div className="container mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                        {/* LEFT COLUMN - CONTACT INFO (Bento Grid) */}
                        <div className="lg:col-span-5 flex flex-col gap-6">

                            {/* 1. PRIMARY CONTACT CARD */}
                            <BentoCard className="bg-white p-6 border border-gray-100 shadow-xl" delay={0.1}>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 rounded-2xl bg-primary-navy flex items-center justify-center text-white">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-bold uppercase tracking-wider border border-green-100 flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" /> Online Now
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-primary-navy mb-2">Talk to an expert</h3>
                                <p className="text-gray-500 mb-6 text-sm">Direct line for urgent inquiries.</p>

                                <div className="space-y-3">
                                    <a href="tel:+233248857308" className="group flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent-teal hover:bg-accent-teal/5 transition-all">
                                        <div className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm text-primary-navy group-hover:text-accent-teal">
                                                <Phone className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="font-bold text-primary-navy font-serif text-base">+233 24 885 7308</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-accent-teal -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
                                    </a>
                                    <a href="tel:+233207867895" className="group flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent-teal hover:bg-accent-teal/5 transition-all">
                                        <div className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm text-primary-navy group-hover:text-accent-teal">
                                                <Phone className="w-3.5 h-3.5" />
                                            </div>
                                            <span className="font-bold text-primary-navy font-serif text-base">+233 20 786 7895</span>
                                        </div>
                                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-accent-teal -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
                                    </a>
                                </div>
                            </BentoCard>

                            {/* 2. EMAIL CARD */}
                            <BentoCard className="bg-primary-navy p-6 text-white shadow-xl" delay={0.2} onClick={copyEmail}>
                                <div className="absolute top-0 right-0 p-8 opacity-5">
                                    <Mail className="w-24 h-24" />
                                </div>
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        {copied && <motion.span initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="text-xs font-bold text-accent-teal bg-white/10 px-3 py-1 rounded-full border border-white/5">COPIED</motion.span>}
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">Email Us</h3>
                                    <p className="text-gray-400 text-sm mb-6">For proposals & documents.</p>
                                    <div className="flex items-center gap-3 group-hover:text-accent-teal transition-colors">
                                        <span className="text-base font-mono border-b border-white/20 pb-1">info@qualiproconsult.com</span>
                                        <Copy className="w-4 h-4 text-gray-500 group-hover:text-accent-teal" />
                                    </div>
                                </div>
                            </BentoCard>

                            <div className="grid grid-cols-2 gap-6">
                                {/* 3. HOURS */}
                                <BentoCard className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 flex flex-col justify-between h-40" delay={0.3}>
                                    <Clock className="w-6 h-6 text-primary-navy" />
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">Mon - Fri</p>
                                        <p className="text-lg font-bold text-primary-navy">8am - 5pm</p>
                                    </div>
                                </BentoCard>

                                {/* 4. LOCATION */}
                                <BentoCard className="bg-accent-teal p-5 flex flex-col justify-between h-40 text-white relative overflow-hidden" delay={0.4}>
                                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                                    <Globe className="w-6 h-6" />
                                    <div className="relative z-10">
                                        <p className="text-xs font-bold uppercase tracking-wider text-white/70 mb-1">Serving</p>
                                        <p className="text-lg font-bold">Global</p>
                                    </div>
                                </BentoCard>
                            </div>
                        </div>

                        {/* RIGHT COLUMN - WHATSAPP OPTIONS */}
                        <div className="lg:col-span-7 flex flex-col h-full gap-6">

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-primary-navy rounded-3xl p-6 md:p-8 text-white relative overflow-hidden flex-1 flex flex-col justify-center"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
                                    <MessageCircle className="w-40 h-40" />
                                </div>

                                <div className="relative z-10 max-w-2xl mb-8">
                                    <span className="inline-block px-3 py-1 mb-4 rounded-full bg-[#25D366]/20 text-[#25D366] text-xs font-bold uppercase tracking-wider border border-[#25D366]/30">
                                        Instant Support
                                    </span>
                                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Chat on WhatsApp</h2>
                                    <p className="text-gray-400 text-base leading-relaxed">
                                        Prefer to chat? Start a conversation with one of our experts directly on WhatsApp for immediate assistance with your inquiries.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <WhatsAppCard
                                        number="+233 24 885 7308"
                                        label="Primary Support"
                                        delay={0.2}
                                        isPrimary
                                    />
                                    <WhatsAppCard
                                        number="+233 20 786 7895"
                                        label="Secondary Support"
                                        delay={0.3}
                                    />
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
