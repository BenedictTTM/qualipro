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
        This content is rendered underneath the fixed video overlay.
        When the overlay slides away, this remains visible.
      */}
            <div className="relative z-0">

                {/* Hero / Header Section of About Page */}
                <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={!showVideo ? { opacity: 1, x: 0 } : {}} // Animate in slightly when video leaves
                        transition={{ duration: 1, delay: 0.5 }}
                        className="grid md:grid-cols-2 gap-12 items-center"
                    >
                        <div>
                            <span className="text-accent-teal font-bold tracking-wider uppercase text-sm mb-2 block">
                                Who We Are
                            </span>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-navy mb-6 leading-tight">
                                Driving Excellence in <br className="hidden md:block" /> Business Consultation
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                At QualiPRO, we don't just advise; we partner with you to engineer success.
                                With over a decade of experience across 10+ industries, our experts speak
                                the language of growth, efficiency, and innovation.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-700">Strategic Implementation Plans</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                        <Users className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-700">Dedicated Expert Teams</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                        <Trophy className="w-5 h-5" />
                                    </div>
                                    <span className="font-medium text-gray-700">Award-Winning Methodology</span>
                                </div>
                            </div>

                            <div className="mt-10">
                                <button className="px-8 py-3 bg-primary-navy text-white rounded-full font-semibold hover:bg-opacity-90 transition-all flex items-center gap-2 group">
                                    Learn Our Story
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>

                        {/* Right Side Image/Visual */}
                        <div className="relative">
                            <div className="aspect-[4/5] md:aspect-square rounded-2xl bg-gray-100 overflow-hidden relative shadow-2xl">
                                <img
                                    src="/people.png"
                                    alt="Our Team"
                                    className="w-full h-full object-cover mix-blend-multiply opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/40 to-transparent" />
                            </div>

                            {/* Floating Stat */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-300 overflow-hidden`}>
                                                {/* Placeholder avatar */}
                                                <div className="w-full h-full bg-gray-400" />
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-xs font-bold text-gray-500">+500 Experts</span>
                                </div>
                                <p className="text-sm font-medium text-primary-navy">
                                    "Collaboration is the key to unlocking potential."
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

            </div>
        </div>
    );
}
