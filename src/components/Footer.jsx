import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center mb-4">
                            <img src="/logo-full.png" alt="HealthAtlas" className="h-20 w-auto" />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            The secure, patient-owned health history platform that clinics trust. HIPAA Compliant.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Github className="h-5 w-5" /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/clinics" className="hover:text-primary transition-colors">For Clinics</Link></li>
                            <li><Link to="/patients" className="hover:text-primary transition-colors">For Patients</Link></li>
                            <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
                            <li><Link to="/security" className="hover:text-primary transition-colors">Security</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link to="/press" className="hover:text-primary transition-colors">Press</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                            <li><Link to="/baa" className="hover:text-primary transition-colors">BAA</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} HealthAtlas Inc. All rights reserved.
                    </p>
                    <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        <span>All systems operational</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
