import { motion } from "framer-motion";
import type { Route } from "./+types/contact";
import {
    EnvelopeIcon,
    PhoneIcon,
    MapPinIcon
} from "@heroicons/react/24/outline";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Contact Us - QualiPRO Consult" },
        { name: "description", content: "Get in touch with QualiPRO Consult." },
    ];
}

export default function Contact() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary-navy text-white overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
                    <svg className="absolute top-0 right-0 w-full h-full text-accent-teal" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="80" cy="20" r="40" />
                    </svg>
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-heading font-bold mb-6"
                    >
                        Contact <span className="text-accent-teal">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
                    >
                        Get in touch to discuss how QualiPRO Consult can support your organization.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info & Form */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid md:grid-cols-2 gap-12">

                        {/* Contact Details */}
                        <div>
                            <h2 className="text-2xl font-bold text-primary-navy mb-8">Get In Touch</h2>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent-teal-light rounded-lg flex items-center justify-center shrink-0">
                                        <EnvelopeIcon className="w-6 h-6 text-accent-teal" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-navy mb-1">Email</h3>
                                        <p className="text-gray-600">info@qualiproconsult.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent-teal-light rounded-lg flex items-center justify-center shrink-0">
                                        <PhoneIcon className="w-6 h-6 text-accent-teal" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-navy mb-1">Phone / WhatsApp</h3>
                                        <p className="text-gray-600">+233 24 885 7308</p>
                                        <p className="text-gray-600">+233 20 786 7895</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simple Form Placeholder */}
                        <div className="bg-neutral-surface p-8 rounded-2xl border border-neutral-border">
                            <h2 className="text-2xl font-bold text-primary-navy mb-6">Send us a message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal outline-none transition-all" placeholder="Your Name" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal outline-none transition-all" placeholder="your@email.com" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal outline-none transition-all" placeholder="How can we help?"></textarea>
                                </div>
                                <button type="button" className="w-full py-3 bg-accent-teal text-white font-bold rounded-lg hover:bg-accent-teal-dark transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
