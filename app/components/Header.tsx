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
                        ? "bg-white/90 backdrop-blur-md rounded-full shadow-sm border border-gray-200"
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

                {/* Mobile Menu - Side Drawer */}
                {isOpen && (
                    <div className="md:hidden fixed inset-0 z-40" role="dialog" aria-modal="true">
                        {/* backdrop - clicking closes */}
                        <div
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                            onClick={closeMenu}
                        />

                        {/* Side drawer panel */}
                        <div
                            className="absolute inset-y-0 left-0 w-[85%] max-w-sm bg-primary-navy shadow-2xl transform transition-transform duration-300 ease-out animate-[slideInFromLeft_0.3s_ease-out]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col h-full">
                                {/* Header with logo and close button */}
                                <div className="flex items-center justify-between p-6 pb-8">
                                    <Link to="/" onClick={closeMenu}>
                                        <img
                                            src="/logo.png"
                                            alt="QualiPRO Consult"
                                            className="h-10 w-auto object-contain"
                                        />
                                    </Link>
                                    <button
                                        onClick={closeMenu}
                                        aria-label="Close menu"
                                        className="p-2 rounded-lg hover:bg-white/5 active:bg-white/10 transition-all duration-200"
                                    >
                                        <X className="h-6 w-6 text-white/80" />
                                    </button>
                                </div>

                                {/* Navigation */}
                                <nav className="flex-1 px-6 space-y-1">
                                    {navItems.map((item, index) => (
                                        <NavLink
                                            key={item.to}
                                            to={item.to}
                                            onClick={closeMenu}
                                            style={{ animationDelay: `${index * 0.05}s` }}
                                            className={({ isActive }) => `
                                                flex items-center gap-3 text-white text-base py-3.5 px-4 rounded-lg font-medium
                                                transition-all duration-200 animate-[slideInFromLeft_0.4s_ease-out_both]
                                                ${isActive
                                                    ? 'bg-white/10'
                                                    : 'hover:bg-white/5 active:bg-white/10'
                                                }
                                            `}
                                        >
                                            {({ isActive }) => (
                                                <>
                                                    {/* Active indicator dot */}
                                                    <span className={`w-2 h-2 rounded-full transition-colors duration-200 ${isActive ? 'bg-[#FFE55C]' : 'bg-transparent'
                                                        }`} />
                                                    <span>{item.label}</span>
                                                </>
                                            )}
                                        </NavLink>
                                    ))}
                                </nav>

                                {/* CTA at bottom */}
                                <div className="p-6 pt-4">
                                    <Link
                                        to="/contact"
                                        onClick={closeMenu}
                                    >
                                        <button
                                            type="button"
                                            className="w-full bg-white text-primary-navy font-bold px-5 py-3.5 rounded-lg shadow-lg hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 cursor-pointer"
                                        >
                                            Get in Touch
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
