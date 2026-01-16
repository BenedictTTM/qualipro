import { Link } from "react-router";
import Logo from "../assets/logo.png";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-navy text-white py-16">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="inline-block mb-6">
                            <img src={Logo} alt="QualiPRO Consult" className="h-10 w-auto brightness-0 invert" />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Helping organizations design, implement, and sustain effective ISO and GMP systems.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-heading font-bold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/services" className="hover:text-accent-teal transition-colors">Services</Link></li>
                            <li><Link to="/industries" className="hover:text-accent-teal transition-colors">Industries</Link></li>
                            <li><Link to="/tools" className="hover:text-accent-teal transition-colors">Tools & Methodology</Link></li>
                            <li><Link to="/contact" className="hover:text-accent-teal transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-heading font-bold mb-6 text-white">Contact Us</h3>
                        <div className="space-y-4 text-sm text-gray-400">
                            <p property="address" className="not-italic">
                                Medina Estates, Ghana
                            </p>
                            <p>
                                <a href="mailto:info@qualiproconsult.com" className="hover:text-accent-teal transition-colors">
                                    info@qualiproconsult.com
                                </a>
                            </p>
                            <div className="flex flex-col gap-1">
                                <a href="tel:+233248857308" className="hover:text-white transition-colors">+233 24 885 7308</a>
                                <a href="tel:+233207867895" className="hover:text-white transition-colors">+233 20 786 7895</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {currentYear} QualiPRO Consult. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <span>Confidential & Secure</span>
                        <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
