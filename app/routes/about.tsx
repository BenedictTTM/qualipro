import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Trophy, ChevronDown, ChevronUp, Crosshair, Eye } from "lucide-react";

const SERVICES_DATA = [
    {
        title: "1. ISO Systems Consulting & Implementation",
        content: "QualiPRO Consult supports organizations in the design, implementation, and improvement of management systems aligned with internationally recognized ISO standards. Our approach focuses on building systems that work in practice, not just on paper.",
        sections: [
            {
                title: "Standards supported include:",
                items: [
                    "ISO 9001 – Quality Management Systems",
                    "ISO/IEC 17025 – Testing and Calibration Laboratories",
                    "ISO 22000 – Food Safety Management Systems",
                    "ISO 13485 – Medical Devices – Quality Management Systems",
                    "ISO 15189 – Medical Laboratories– Requirements for quality and competence",
                    "ISO 14001 – Environmental Management Systems",
                    "ISO 45001 – Occupational Health & Safety Management Systems"
                ]
            },
            {
                title: "What we deliver:",
                items: [
                    "Gap assessment and baseline analysis using the ACERT Tool",
                    "System design and documentation tailored to your operations",
                    "Hands-on implementation coaching and staff engagement",
                    "Risk-based thinking, process mapping, and performance monitoring",
                    "Internal audits and certification readiness reviews"
                ]
            },
            {
                title: "Client benefits:",
                items: [
                    "Faster and more efficient certification readiness",
                    "Reduced rework, nonconformities, and compliance risks",
                    "Stronger process control and operational consistency",
                    "Quality systems that support business efficiency and profitability"
                ]
            }
        ]
    },
    {
        title: "2. GMP Consulting",
        content: "QualiPRO Consult provides GMP consulting services to pharmaceutical, food, and medical device organizations to support compliance with Good Manufacturing Practice (GMP) and regulatory inspection requirements. Our approach combines practical training, implementation support, and inspection readiness activities to strengthen GMP systems and day-to-day operations.",
        sections: [
            {
                title: "Scope of GMP consulting includes:",
                items: [
                    "GMP gap assessments and system reviews",
                    "GMP training for management and operational staff",
                    "On-site coaching and mentoring on GMP implementation",
                    "Mock GMP inspections and inspection readiness assessments",
                    "CAPA planning, execution, and follow-up verification",
                    "Alignment with WHO, FDA Ghana, and other applicable regulatory frameworks"
                ]
            },
            {
                title: "Client benefits:",
                items: [
                    "Stronger GMP systems and compliance culture",
                    "Reduced inspection findings and regulatory risk",
                    "Improved product quality, consistency, and process control",
                    "Reduced operational disruptions and compliance-related costs"
                ]
            }
        ]
    },
    {
        title: "3. Internal and External Audits & Compliance Assessments",
        content: "QualiPRO Consult conducts independent internal audits and compliance assessments to verify system effectiveness and support continual improvement.",
        sections: [
            {
                title: "Audit services include:",
                items: [
                    "Internal audits aligned with ISO 19011 guidelines",
                    "Second party (Supplier) audits",
                    "Compliance assessments and gap reviews",
                    "CAPA verification and management review facilitation"
                ]
            },
            {
                title: "Client benefits:",
                items: [
                    "Early identification of gaps before external audits",
                    "Sustained certification readiness",
                    "Improved Supplier Performance and Selection",
                    "Improved system effectiveness and management oversight"
                ]
            }
        ]
    },
    {
        title: "4. Training & Capacity Building (QualiPRO Training Series)",
        content: "Through the QualiPRO Training Series, we deliver competency-based training programs that build in-house expertise and reduce long-term dependence on external consultants. Training is delivered through in-person, virtual, or hybrid formats and supported by post-training evaluations and follow-up coaching.",
        sections: [
            {
                title: "Training areas include:",
                items: [
                    "ISO awareness, implementer, and internal auditor training",
                    "Risk management, CAPA, and root cause analysis workshops",
                    "GMP and quality culture development programs",
                    "Laboratory systems training"
                ]
            },
            {
                title: "Client benefits:",
                items: [
                    "Stronger internal competence and ownership of quality systems",
                    "Improved staff engagement and accountability",
                    "Sustainable quality and compliance performance"
                ]
            }
        ]
    },
    {
        title: "5. Post-Certification & Continual Improvement Support",
        content: "Certification is not the end of the quality journey. QualiPRO Consult provides ongoing support to help organizations maintain and improve their systems over time.",
        sections: [
            {
                title: "Support includes:",
                items: [
                    "Surveillance and follow-up audit preparation",
                    "Performance monitoring and KPI reviews",
                    "Process optimization and risk updates",
                    "Continual improvement planning and coaching"
                ]
            },
            {
                title: "Client benefits:",
                items: [
                    "Sustained compliance and audit readiness",
                    "Reduced cost of poor quality",
                    "Continuous performance improvement"
                ]
            }
        ]
    },
    {
        title: "6. Certification-Body Liaison & Advisory Services",
        content: "We support organizations throughout the certification or accreditation process by acting as a technical liaison with certification and accreditation bodies.",
        sections: [
            {
                title: "Services include:",
                items: [
                    "Preparation for Stage 1 and Stage 2 audits",
                    "Support during external audits",
                    "Response to findings and nonconformities",
                    "CAPA implementation tracking"
                ]
            },
            {
                title: "Client benefits:",
                items: [
                    "Smoother audit processes",
                    "Reduced delays and audit-related stress",
                    "Higher likelihood of successful certification outcomes"
                ]
            }
        ]
    },
    {
        title: "7. Quality & Laboratory Systems Strengthening",
        content: "Beyond organizational consulting, QualiPRO Consult supports public institutions, laboratories, and regulatory bodies in strengthening quality and regulatory systems.",
        sections: [
            {
                title: "Areas of support include:",
                items: [
                    "ISO 17025 and laboratory accreditation assistance",
                    "Regulatory and inspection system strengthening",
                    "Development of quality manuals, audit tools, and guidelines",
                    "Capacity-building programs for regulators and laboratories"
                ]
            },
            {
                title: "Client benefits:",
                items: [
                    "Stronger institutional systems",
                    "Improved regulatory confidence and oversight",
                    "Alignment with international best practices"
                ]
            }
        ]
    }
];

const AccordionItem = ({ item, isOpen, onClick }: { item: any, isOpen: boolean, onClick: () => void }) => {
    return (
        <div className="border border-white/10 rounded-lg overflow-hidden mb-2 bg-[#2a202a]">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                aria-expanded={isOpen}
            >
                <span className="text-sm md:text-base font-bold text-white pr-4">{item.title}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#ff6b4a] shrink-0" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-[#ff6b4a] shrink-0" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="p-4 pt-0 border-t border-white/10 text-white/80">
                            <p className="mb-4 leading-relaxed text-xs md:text-sm text-white/90">{item.content}</p>
                            {item.sections.map((section: any, idx: number) => (
                                <div key={idx} className="mb-4 last:mb-0">
                                    <h4 className="font-bold text-[#ff6b4a] mb-2 text-xs md:text-sm">{section.title}</h4>
                                    <ul className="space-y-1">
                                        {section.items.map((subItem: string, sIdx: number) => (
                                            <li key={sIdx} className="flex items-start gap-2 text-xs text-white/70">
                                                <span className="w-1 h-1 rounded-full bg-[#ff6b4a] mt-1.5 shrink-0" />
                                                <span className="flex-1">{subItem}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
export function meta() {
    return [
        { title: "About Us - QualiPRO Consult" },
        { name: "description", content: "Learn more about our team, our mission, and our commitment to excellence." },
    ];
}

export default function About() {
    // State to control the existence of the video overlay
    const [showVideo, setShowVideo] = useState(true);
    const [videoLoading, setVideoLoading] = useState(true);
    const [videoError, setVideoError] = useState(false);
    const [openService, setOpenService] = useState<number | null>(null);

    useEffect(() => {
        // Safety fallback: if video doesn't load or play within 8 seconds, hide the overlay
        const safetyTimer = setTimeout(() => {
            console.log("Safety timer triggered - hiding video overlay");
            setShowVideo(false);
        }, 8000);

        return () => clearTimeout(safetyTimer);
    }, []);

    const handleVideoLoaded = (videoElement: HTMLVideoElement) => {
        setVideoLoading(false);

        // Attempt to play the video once it's loaded
        videoElement.play().catch(error => {
            console.error("Video autoplay failed:", error);
            setVideoError(true);
            // If autoplay fails, hide the video after a short delay
            setTimeout(() => setShowVideo(false), 1000);
        });
    };

    const handleVideoPlay = () => {
        console.log("Video started playing");
        // Hide the video overlay after 2 seconds of playback
        setTimeout(() => {
            setShowVideo(false);
        }, 1500);
    };

    const handleVideoError = (error: any) => {
        console.error("Video loading error:", error);
        setVideoError(true);
        setVideoLoading(false);
        // Hide the overlay if video fails to load
        setTimeout(() => setShowVideo(false), 1000);
    };

    return (
        <div className="relative min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">

            {/* 
        VIDEO INTRO OVERLAY 
        Uses AnimatePresence to handle the exit animation.
      */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        key="intro-video"
                        // The video sits on top of content but below the nav
                        className="fixed top-20 left-0 right-0 bottom-0 z-40 flex items-center justify-center bg-black overflow-hidden"

                        // Initial state (visible)
                        initial={{ x: 0 }}

                        // Exit animation: This creates the "horizontal scroll" effect.
                        // We slide the entire overlay to the left (-100%) or right.
                        // Let's slide to the left to reveal content "underneath" or "next to it".
                        exit={{ x: "-100%" }}

                        // Transition configuration
                        transition={{
                            duration: 1.5,
                            ease: [0.22, 1, 0.36, 1] // Custom bezier for a premium "ease-out" feel
                        }}
                    >
                        {/* Loading Spinner */}
                        {videoLoading && !videoError && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black z-20">
                                <div className="flex flex-col items-center gap-4">
                                    <div className="w-12 h-12 border-4 border-accent-teal border-t-transparent rounded-full animate-spin" />
                                    <p className="text-white text-sm tracking-wider">Loading...</p>
                                </div>
                            </div>
                        )}

                        {/* Video Element */}
                        <div className="absolute inset-0 w-full h-full">
                            {/* 
                 Using a high-quality placeholder video from Pexels (Business/Tech vibe).
                 In production, this should be replaced with a local asset.
               */}
                            <video
                                ref={(el) => {
                                    if (el) {
                                        el.muted = true; // Force muted property for autoplay
                                    }
                                }}
                                onLoadedData={(e) => handleVideoLoaded(e.currentTarget)}
                                onPlay={handleVideoPlay}
                                onError={handleVideoError}
                                muted
                                playsInline
                                preload="auto"
                                className="w-full h-full object-cover opacity-60"
                                src="https://res.cloudinary.com/dsriwu6yn/video/upload/v1768470161/573279_Business_Stock_3840x2160_4_i2zvqd.mp4"
                            />
                            {/* Overlay Gradient for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-navy/80 to-transparent" />
                        </div>

                        {/* Intro Text Overlay */}
                        <motion.div
                            className="relative z-10 text-center text-white px-4"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide mb-2 text-white">
                                QualiPRO
                            </h1>
                            <p className="text-sm md:text-lg uppercase tracking-[0.3em] text-accent-teal">
                                Consultancy Redefined
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* 
        MAIN PAGE CONTENT
      */}
            <div className="relative z-0 bg-[#3d2f3f] min-h-screen">

                {/* Header */}
                <section className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-light text-white mb-8">About QualiPRO</h1>
                </section>

                {/* About Us Content */}
                <section className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={!showVideo ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid md:grid-cols-2 gap-12 items-start"
                    >
                        <div className="space-y-6 text-white/90 text-lg font-light leading-relaxed">
                            <p>
                                <strong className="text-[#ff6b4a] font-normal">QualiPRO Consult</strong> is a quality management systems, compliance, and training consultancy dedicated to supporting organizations in the design, implementation, and sustainability of internationally recognized management systems and regulatory frameworks. The firm provides technical consulting and capacity-building services aligned with ISO standards, Good Manufacturing Practice (GMP), and related regulatory requirements across manufacturing, healthcare, laboratories, and service sectors.
                            </p>
                            <p>
                                Guided by the principle <em className="text-white">“Quality Beyond Certification,”</em> QualiPRO Consult focuses on building practical, functional, and sustainable systems that extend beyond audit preparation. Its approach emphasizes real implementation—helping organizations embed quality into daily operations to improve compliance, operational efficiency, and decision-making.
                            </p>
                            <p>
                                By strengthening process control, reducing nonconformities, and minimizing the cost of poor quality, QualiPRO Consult enables organizations to use quality management as a strategic business tool. Clients benefit not only from successful certification or regulatory approval but also from improved productivity, reduced risk, enhanced customer confidence, and long-term business profitability.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden relative">
                                <img
                                    src="/people.png"
                                    alt="QualiPRO Consulting Team"
                                    className="w-full h-full object-cover opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#3d2f3f] via-transparent to-transparent opacity-60"></div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Mission & Vision */}
                {/* Mission & Vision */}
                <section className="px-6 md:px-12 max-w-5xl mx-auto pb-24">
                    <div className="flex flex-col lg:flex-row gap-12 items-center relative overflow-hidden">
                        {/* Left Image */}
                        <div className="w-full lg:w-1/2 relative z-10">
                            <div className="rounded-2xl overflow-hidden h-[500px] shadow-lg border border-white/10">
                                <img
                                    src="https://res.cloudinary.com/dsriwu6yn/image/upload/v1768484595/industrial-designers-working-3d-model_1_1_ale0hg.jpg"
                                    alt="Team working"
                                    className="w-full h-full object-cover opacity-90"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-1/2 space-y-12 relative z-10">

                            {/* Mission */}
                            <div>
                                <div className="flex items-center justify-end gap-6 mb-6">
                                    <Crosshair className="w-16 h-16 text-[#ff6b4a]" strokeWidth={1.5} />
                                    <div className="text-right">
                                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-none">
                                            Our<br />Mission
                                        </h2>
                                    </div>
                                </div>
                                <p className="text-gray-300 text-right text-sm md:text-sm leading-relaxed pl-10">
                                    To provide compassionate, high-quality home health care that enhances well-being, independence, and quality of life, with personalized care, professionalism, respect, and excellence.
                                </p>
                            </div>

                            {/* Divider */}
                            <div className="w-full h-px bg-white/10" />

                            {/* Vision */}
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-none text-left">
                                            Our<br />Vision
                                        </h2>
                                    </div>
                                    <Eye className="w-16 h-16 text-[#ff6b4a]" strokeWidth={1.5} />
                                </div>
                                <p className="text-gray-300 text-left text-sm md:text-sm leading-relaxed pr-10">
                                    To be a leader in home health care, providing compassionate care, innovative solutions, and client-focused support for dignified, comfortable, and independent living.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Core Values */}
                <section className="px-6 md:px-12  pb-32 ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-light text-white mb-2">Core Values</h2>
                        <div className="h-1 w-24 bg-[#ff6b4a] mt-4"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-2 relative z-10 auto-rows-[minmax(110px,auto)] max-w-4xl mx-auto">
                        {[
                            {
                                title: "Integrity & Independence",
                                desc: (
                                    <>
                                        We deliver ethical, objective, and confidential services, maintaining professional independence and earning the trust of our clients and stakeholders.
                                        <ul className="mt-4 space-y-2 list-none">
                                            <li className="flex items-center gap-2">
                                                <div className="min-w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" />
                                                <span><strong>Ethical Delivery:</strong> Unwavering commitment to honesty.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="min-w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" />
                                                <span><strong>Objective Advice:</strong> Unbiased, fact-based solutions.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <div className="min-w-1.5 h-1.5 rounded-full bg-[#ff6b4a]" />
                                                <span><strong>Total Confidentiality:</strong> Strict protection of your data.</span>
                                            </li>
                                        </ul>
                                    </>
                                ),
                                icon: <CheckCircle className="w-6 h-6 text-[#ff6b4a]" />,
                                className: "md:col-span-2 md:row-span-2"
                            },
                            {
                                title: "Technical Excellence",
                                desc: "Our work is grounded in internationally recognized standards.",
                                icon: <Trophy className="w-5 h-5 text-[#ff6b4a]" />,
                                className: "md:col-span-1"
                            },
                            {
                                title: "Practical Implementation",
                                desc: "We focus on solutions that work in practice—building functional systems that are embedded in daily operations.",
                                icon: <Users className="w-5 h-5 text-[#ff6b4a]" />,
                                className: "md:col-span-1"
                            },
                            {
                                title: "Client Partnership",
                                desc: "We work collaboratively with our clients, prioritizing knowledge transfer.",
                                icon: <Users className="w-5 h-5 text-[#ff6b4a]" />,
                                className: "md:col-span-1",
                                visual: (
                                    <div className="flex items-center -space-x-2 mt-4">
                                        <div className="w-6 h-6 rounded-full bg-[#ff6b4a]/20 border border-[#2a202a]" />
                                        <div className="w-6 h-6 rounded-full bg-white/20 border border-[#2a202a]" />
                                        <div className="w-6 h-6 rounded-full bg-white/10 border border-[#2a202a]" />
                                    </div>
                                )
                            },
                            {
                                title: "Continuous Improvement",
                                desc: "We promote a culture of learning and ongoing improvement.",
                                icon: <CheckCircle className="w-5 h-5 text-[#ff6b4a]" />,
                                className: "md:col-span-1",
                                visual: (
                                    <div className="mt-4 flex items-center gap-3">
                                        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                            <div className="h-full w-2/3 bg-[#ff6b4a] rounded-full" />
                                        </div>
                                    </div>
                                )
                            },
                            {
                                title: "Impact & Sustainability",
                                desc: "We aim to deliver lasting value by helping organizations reduce risk and improve efficiency.",
                                icon: <Trophy className="w-5 h-5 text-[#ff6b4a]" />,
                                className: "md:col-span-1",
                                visual: (
                                    <div className="flex items-end gap-1 mt-4 h-6">
                                        <div className="w-1/4 h-1/3 bg-white/10 rounded-sm" />
                                        <div className="w-1/4 h-2/3 bg-white/10 rounded-sm" />
                                        <div className="w-1/4 h-1/2 bg-white/10 rounded-sm" />
                                        <div className="w-1/4 h-full bg-[#ff6b4a] rounded-sm" />
                                    </div>
                                )
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`bg-[#2a202a] border border-white/5 p-5 rounded-lg hover:border-[#ff6b4a]/30 transition-all duration-300 group flex flex-col justify-between ${value.className || ""}`}
                            >
                                <div>
                                    <div className="w-10 h-10 flex items-center justify-center mb-3  transition-colors duration-300">
                                        <div className="text-[#ff6b4a] group-hover:text-white transition-colors duration-300">
                                            {value.icon}
                                        </div>
                                    </div>
                                    <h3 className={`font-bold text-white mb-2 group-hover:text-[#ff6b4a] transition-colors ${index === 0 ? "text-2xl" : "text-lg"}`}>
                                        {value.title}
                                    </h3>
                                    <div className={`text-white/60 leading-relaxed group-hover:text-white/80 transition-colors ${index === 0 ? "text-sm" : "text-[10px] leading-tight"}`}>
                                        {value.desc}
                                    </div>
                                </div>

                                {value.visual && (
                                    <div className="mt-2 text-white/20">
                                        {value.visual}
                                    </div>
                                )}

                                {/* Decorative corner for the large card */}
                                {index === 0 && (
                                    <div className="hidden md:block absolute bottom-0 right-0 p-16 bg-gradient-to-tl from-[#ff6b4a]/5 to-transparent rounded-tl-[80px] pointer-events-none"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Services Accordion Section */}
                <section className="px-6 md:px-12 pb-20 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-8 text-center"
                    >
                        <h2 className="text-2xl md:text-4xl font-light text-white mb-2">
                            Our <span className="font-bold text-[#ff6b4a]">Services</span>
                        </h2>
                        <p className="text-white/60 max-w-xl mx-auto text-sm font-light">
                            QualiPRO Consult provides quality management, compliance, and capacity-building services designed to improve operational efficiency and strengthen business profitability.
                        </p>
                    </motion.div>

                    <div className="space-y-2">
                        {SERVICES_DATA.map((service, index) => (
                            <AccordionItem
                                key={index}
                                item={service}
                                isOpen={openService === index}
                                onClick={() => setOpenService(openService === index ? null : index)}
                            />
                        ))}
                    </div>
                </section>

                {/* Final Call to Action Section */}
                <section className="bg-[#f9f5f6] py-32 px-6 md:px-12">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#3d2f3f] leading-tight mb-8 max-w-4xl mx-auto">
                                Ready to transform your quality management?
                            </h2>
                            <p className="text-lg text-[#3d2f3f]/70 mb-12 max-w-2xl mx-auto">
                                Partner with QualiPRO Consult for expert guidance in compliance, training, and sustainable system implementation.
                            </p>

                            <button className="group inline-flex items-center shadow-xl hover:shadow-2xl transition-shadow">
                                <span className="bg-[#ff6b4a] text-white px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-[#ff8a6a] transition-colors">
                                    Contact Us Today
                                </span>
                                <span className="bg-white text-[#ff6b4a] px-5 py-4 border border-l-0 border-[#ff6b4a]/20 group-hover:bg-[#fff5f2] transition-colors">
                                    <ArrowRight className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </motion.div>
                    </div>
                </section>

            </div>
        </div>
    );
}
