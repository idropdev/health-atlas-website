import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import { FileText, Clock, ShieldCheck, Users } from 'lucide-react';

const Clinics = () => {
    return (
        <Layout>
            <div className="bg-surface pt-20">
                {/* Hero */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <span className="text-primary font-semibold uppercase tracking-wider text-sm mb-4 block">For Clinics & Practices</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                        Reclaim your time with automated history collection.
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                        HealthAtlas gathers, cleans, and structures patient records before they walk in the door.
                    </p>
                    <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen">Request a Demo</Button>
                </div>

                {/* Feature 1: Intake */}
                <Section className="bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden relative shadow-lg border border-gray-100">
                                <img src="/app_verify.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent flex items-end p-8">
                                    <div className="bg-white p-4 rounded-xl shadow-sm w-full">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-bold text-gray-900">Patient Upload</span>
                                            <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">Completed</span>
                                        </div>
                                        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                            <div className="h-full w-full bg-primary rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Faster Intake</h2>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                Patients upload their history via our secure app. Our system parses PDFs, images, and portal data into a standardized timeline.
                            </p>
                            <ul className="space-y-3">
                                {['No more scanning faxed records', 'Automatic deduplication', 'Highlights critical history'].map(item => (
                                    <li key={item} className="flex items-center space-x-3 text-gray-700">
                                        <ShieldCheck className="w-5 h-5 text-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* Feature 2: Admin */}
                <Section className="bg-surface">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                                <Clock className="w-6 h-6 text-accent" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Reduced Admin Burden</h2>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                Stop chasing records. We handle the retrieval and organization so your staff can focus on patient coordination.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="bg-white p-8 rounded-2xl shadow-soft border border-gray-100">
                                <div className="space-y-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                                            <div className="flex-1">
                                                <div className="h-4 w-3/4 bg-gray-100 rounded mb-2"></div>
                                                <div className="h-3 w-1/2 bg-gray-50 rounded"></div>
                                            </div>
                                            <div className="text-primary"><Users className="w-5 h-5" /></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Implementation Section */}
                <Section className="bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Simple Implementation</h2>
                        <p className="text-lg text-gray-500 mb-10">
                            Getting started is straightforward. Here's what to expect:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="bg-surface p-6 rounded-xl">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-primary font-bold">1</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Guided Onboarding</h3>
                                <p className="text-gray-500 text-sm">Dedicated support during setup to configure your account and workflows.</p>
                            </div>
                            <div className="bg-surface p-6 rounded-xl">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-primary font-bold">2</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Flexible Integration</h3>
                                <p className="text-gray-500 text-sm">Connect with your existing workflow tools without disrupting current operations.</p>
                            </div>
                            <div className="bg-surface p-6 rounded-xl">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-primary font-bold">3</span>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">Go-Live Support</h3>
                                <p className="text-gray-500 text-sm">Training and hands-on assistance for your team as you go live.</p>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-primary text-white text-center">
                    <h2 className="text-3xl font-bold mb-6">Join the future of care.</h2>
                    <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="white">Partner with us</Button>
                </Section>
            </div>
        </Layout>
    );
};

export default Clinics;
