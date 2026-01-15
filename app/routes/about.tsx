import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Users, Trophy } from "lucide-react";

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
                <section className="px-6 md:px-12 max-w-7xl mx-auto pb-24">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#6b4a52] p-8 md:p-12 rounded-lg"
                        >
                            <h2 className="text-2xl md:text-3xl font-serif text-[#ff6b4a] mb-6">Our Mission</h2>
                            <p className="text-white text-lg font-light leading-relaxed">
                                To build a culture of quality and compliance that strengthens organizations through expert, hands-on consulting and training, enabling them to design, implement, and sustain effective management systems that support certification, regulatory compliance, and long-term business performance.
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#4a3a4a] p-8 md:p-12 rounded-lg relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-32 bg-[#ff6b4a]/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                            <h2 className="text-2xl md:text-3xl font-serif text-[#ff6b4a] mb-6">Our Vision</h2>
                            <p className="text-white text-lg font-light leading-relaxed">
                                To be Africa’s most trusted consulting partner in quality, safety, and compliance systems—recognized for integrity, technical excellence, and measurable results that help organizations achieve sustainable growth and global standards.
                            </p>
                        </motion.div>
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
                                className: "md:col-span-1"
                            },
                            {
                                title: "Continuous Improvement",
                                desc: "We promote a culture of learning and ongoing improvement.",
                                icon: <CheckCircle className="w-5 h-5 text-[#ff6b4a]" />,
                                className: "md:col-span-1"
                            },
                            {
                                title: "Impact & Sustainability",
                                desc: "We aim to deliver lasting value by helping organizations reduce risk and improve efficiency.",
                                icon: <Trophy className="w-5 h-5 text-[#ff6b4a]" />,
                                className: "md:col-span-1"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className={`bg-[#2a202a] border border-white/5 p-5 rounded-xl hover:border-[#ff6b4a]/30 transition-all duration-300 group flex flex-col justify-between ${value.className || ""}`}
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

                                {/* Decorative corner for the large card */}
                                {index === 0 && (
                                    <div className="hidden md:block absolute bottom-0 right-0 p-16 bg-gradient-to-tl from-[#ff6b4a]/5 to-transparent rounded-tl-[80px] pointer-events-none"></div>
                                )}
                            </motion.div>
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
