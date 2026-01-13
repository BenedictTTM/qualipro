import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../assets/logo.svg";

const NAV_LINKS = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Tools & Methodology", href: "/tools" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                    <img src={Logo} alt="QualiPRO Consult" className="h-10 w-auto" />
                    {/* Fallback text if SVG fails to load or for SEO */}
                    <span className="sr-only">QualiPRO Consult</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.href}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-accent-teal ${isActive ? "text-accent-teal font-bold" : "text-primary-navy"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <Link
                        to="/contact"
                        className="px-5 py-2.5 bg-primary-navy text-white text-sm font-semibold rounded-full hover:bg-accent-teal transition-colors"
                    >
                        Get in Touch
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 text-primary-navy hover:text-accent-teal"
                >
                    {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white shadow-xl z-50 p-8 flex flex-col md:hidden"
                    >
                        <div className="flex justify-end mb-8">
                            <button onClick={() => setIsOpen(false)}>
                                <XMarkIcon className="w-6 h-6 text-gray-500" />
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-lg font-medium ${isActive ? "text-accent-teal" : "text-primary-navy"
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-6 py-3 bg-primary-navy text-white text-center rounded-full"
                            >
                                Get in Touch
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
