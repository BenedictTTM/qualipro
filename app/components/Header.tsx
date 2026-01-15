import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/services", label: "Services" },
        { to: "/tools", label: "Tools & Methodology" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        // lock body scroll when mobile menu is open
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "pt-1" : "pt-3"}`}
        >
            <div
                className={`container mx-auto transition-all duration-300 ${isScrolled ? "max-w-4xl" : "max-w-7xl"}`}
            >
                <nav
                    className={`flex items-center justify-between px-4 md:px-6 py-2 md:py-3 transition-all duration-300 ${isScrolled
                        ? "bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200"
                        : "bg-transparent"
                        }`}
                >
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/logo.png"
                            alt="QualiPRO Consult"
                            className="h-8 md:h-12 w-auto object-contain"
                        />
                    </Link>


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `transition-colors duration-300 font-medium ${isActive ? "text-primary-teal font-semibold" : "text-gray-700 hover:text-primary-teal"
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link to="/contact" className="inline-block">
                            <button
                                type="button"
                                className=" border border-gray-700 px-3 py-1 rounded hover:bg-gray-700 hover:text-white transition-colors cursor-pointer font-semibold"
                            >
                                Get in Touch
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {isOpen ? (
                            <X className="h-6 w-6 text-gray-800" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-800" />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden fixed inset-0 z-40" role="dialog" aria-modal="true">
                        {/* backdrop - clicking closes */}
                        <div
                            className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
                            onClick={closeMenu}
                        />

                        {/* panel */}
                        <div className="absolute top-[68px] left-4 right-4 mx-auto max-w-md">
                            <div
                                className="bg-gradient-to-b from-[#07172b] to-[#0b2540] rounded-xl shadow-2xl p-5 ring-1 ring-white/5 transform transition duration-250"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex justify-end">
                                    <button onClick={closeMenu} aria-label="Close menu" className="p-2">
                                        <X className="h-5 w-5 text-white/90" />
                                    </button>
                                </div>

                                <nav className="mt-1 flex flex-col">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.to}
                                            to={item.to}
                                            onClick={closeMenu}
                                            className="block text-white text-lg py-3 px-3 rounded-md text-center font-medium hover:bg-white/5 transition"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}

                                    <Link to="/contact" onClick={closeMenu} className="mt-4">
                                        <button
                                            type="button"
                                            className="w-full bg-white text-blue-900 font-semibold px-4 py-3 rounded-lg shadow cursor-pointer"
                                        >
                                            Get in Touch
                                        </button>
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
