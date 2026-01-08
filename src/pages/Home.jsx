import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import { Shield, Clock, FileText, Activity } from 'lucide-react';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 overflow-hidden bg-surface">
                {/* Ambient Background */}
                <div className="absolute top-10 right-0 w-1/2 h-full opacity-10 pointer-events-none transform translate-x-1/4">
                    <img src="/app_create_account.png" alt="App interface" className="w-[800px] h-auto blur-sm" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-primary/5 px-3 py-1 rounded-full mb-6">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">HIPAA Compliant & Patient-Owned</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight text-balance">
                            One complete health history — secure, patient-owned, and clinic-ready.
                        </h1>

                        <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl text-balance">
                            HealthAtlas turns fragmented records into a unified timeline. We structure and clean medical data so clinics focus on care, not paperwork.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="primary" className="text-lg px-8 py-4 shadow-xl shadow-primary/20">
                                Request a Demo
                            </Button>
                            <Button to="/how-it-works" variant="secondary" className="text-lg px-8 py-4">
                                See How It Works
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Strip */}
            <div className="py-10 border-y border-gray-100 bg-white/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Trusted by forward-thinking practices</p>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">
                        {/* Simple logo placeholders using text/icons for now */}
                        <div className="flex items-center space-x-2"><Activity className="w-6 h-6" /><span className="font-bold text-lg">MediCare Plus</span></div>
                        <div className="flex items-center space-x-2"><Shield className="w-6 h-6" /><span className="font-bold text-lg">SecureClinic</span></div>
                        <div className="flex items-center space-x-2"><FileText className="w-6 h-6" /><span className="font-bold text-lg">DocFlow</span></div>
                        <div className="flex items-center space-x-2"><Clock className="w-6 h-6" /><span className="font-bold text-lg">FamilyHealth</span></div>
                    </div>
                </div>
            </div>

            {/* Problem / Solution Section */}
            <Section className="bg-white">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Medical records are broken.</h2>
                    <p className="text-xl text-gray-500">
                        Faxes, PDFs, and missing pages create admin burdens and gaps in care. There's a better way.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="hover:-translate-y-1">
                        <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-6">
                            <FileText className="w-6 h-6 text-red-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Fragmented Data</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Records are scattered across different providers, portals, and paper files.
                        </p>
                    </Card>

                    <Card className="hover:-translate-y-1">
                        <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                            <Clock className="w-6 h-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Time Consuming</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Clinics spend hours chasing records and manually entering data into the EHR.
                        </p>
                    </Card>

                    <Card className="hover:-translate-y-1 border-primary/20 bg-primary/5 shadow-soft">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                            <Activity className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">The HealthAtlas Way</h3>
                        <p className="text-gray-600 leading-relaxed">
                            A single, secure, patient-owned timeline that integrates directly with your workflow.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Benefits Split */}
            <Section className="bg-surface">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-primary font-semibold tracking-wide uppercase text-sm">For Clinics</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">Faster intake, reduced burnout.</h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            Stop acting as data entry clerks. HealthAtlas retrieves, cleans, and organizes patient history before the appointment begins.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {['Direct EHR Integration', 'Automated Record Retrieval', 'Clear Clinical Summaries'].map(item => (
                                <li key={item} className="flex items-center space-x-3 text-gray-700">
                                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button to="/clinics" variant="outline">Learn more for Clinics</Button>
                    </div>
                    <div className="relative">
                        {/* Use the record screen background */}
                        <div className="relative bg-white p-2 rounded-3xl shadow-2xl border-4 border-white/50 rotate-1 transition-transform hover:rotate-0 duration-500">
                            <img src="/app_files.png" alt="Clinic Interface" className="rounded-2xl shadow-inner bg-gray-50 opacity-90" />
                        </div>

                        {/* Decorative floating card */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 max-w-xs animate-[float_4s_ease-in-out_infinite]">
                            <div className="flex items-center space-x-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <Shield className="w-4 h-4 text-green-600" />
                                </div>
                                <span className="font-semibold text-gray-900 text-sm">HIPAA Verified</span>
                            </div>
                            <p className="text-xs text-gray-500">Data encryption and access logs active.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="bg-white text-center">
                <div className="max-w-4xl mx-auto bg-primary rounded-3xl p-12 relative overflow-hidden text-white shadow-2xl shadow-primary/20">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent opacity-10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to modernize your practice?</h2>
                        <p className="text-lg text-primary-light/80 mb-10 max-w-2xl mx-auto">
                            Join the network of clinics managing care with clarity and confidence.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="white">
                                Request a Demo
                            </Button>
                            <Button to="/about" variant="outline-white">
                                Read Our Vision
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default Home;
