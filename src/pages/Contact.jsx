import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
    return (
        <Layout>
            <div className="bg-surface min-h-screen pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">Let's talk.</h1>
                            <p className="text-xl text-gray-500 mb-8">
                                Request a demo to see how HealthAtlas can streamline your practice or help you manage your family's care.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-500">hello@healthatlas.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Office</h3>
                                    <p className="text-gray-500">801 Myrtle Ave, Suite 104<br />(entrance on N Virginia St)<br />El Paso, TX 79901</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Hours</h3>
                                    <p className="text-gray-500">
                                        Monday: 5:30–7:30 PM<br />
                                        Wednesday, Friday, Saturday: 9 AM–5 PM<br />
                                        <span className="text-gray-400">Closed Tuesday, Thursday, and Sunday</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Dr. Sarah Smith" />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="sarah@clinic.com" />
                                </div>

                                <div>
                                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">I am a...</label>
                                    <select id="type" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                                        <option>Clinic Administrator</option>
                                        <option>Provider / Physician</option>
                                        <option>Patient</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" rows={4} className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tell us about your needs..."></textarea>
                                </div>

                                <Button className="w-full justify-center">Send Request</Button>

                                <p className="text-xs text-center text-gray-400 mt-4">
                                    Your information is secure. We never sell your data.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
