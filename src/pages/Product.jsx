import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import {
    Building2, Heart, FileText, Clock, ShieldCheck, Users,
    Smartphone, MessageSquare, Lock, CheckCircle2, ChevronRight
} from 'lucide-react';

const Product = () => {
    const [searchParams] = useSearchParams();
    const [activeView, setActiveView] = useState('clinics');

    useEffect(() => {
        const view = searchParams.get('view');
        if (view === 'patients' || view === 'clinics') {
            setActiveView(view);
        }
    }, [searchParams]);

    return (
        <Layout>
            {/* Hero Section with Toggle */}
            <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                            One platform for <span className="text-primary">clinics and patients</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                            HealthAtlas bridges the gap between healthcare providers and patients with a unified, secure health history platform.
                        </p>

                        {/* Toggle Button */}
                        <div className="inline-flex items-center bg-gray-100 rounded-full p-1.5 mb-10">
                            <button
                                onClick={() => setActiveView('clinics')}
                                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeView === 'clinics'
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                For Clinics
                            </button>
                            <button
                                onClick={() => setActiveView('patients')}
                                className={`px-8 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${activeView === 'patients'
                                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                                    : 'text-gray-600 hover:text-gray-900'
                                    }`}
                            >
                                For Patients
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Conditional Content based on Toggle */}
            {activeView === 'clinics' ? (
                <>
                    {/* Clinics Hero Content */}
                    <Section className="bg-white py-20">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center space-x-2 bg-primary/5 px-3 py-1 rounded-full mb-6">
                                <Building2 className="w-4 h-4 text-primary" />
                                <span className="text-sm font-semibold text-primary">For Clinics & Practices</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                Reclaim your time with automated history collection.
                            </h2>
                            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                HealthAtlas gathers, cleans, and structures patient records before they walk in the door. Stop chasing records and focus on patient care.
                            </p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    'Faster patient intake process',
                                    'Cleaner, structured charts',
                                    'Reduced administrative burden',
                                    'Improved care continuity',
                                    'Fewer duplicate tests'
                                ].map(item => (
                                    <li key={item} className="flex items-center space-x-3 text-gray-700">
                                        <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="primary" className="shadow-lg shadow-primary/20">
                                Request a Demo
                                <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                            </Button>
                        </div>
                    </Section>

                    {/* Clinic Features */}
                    <Section className="bg-[#f8fafc] py-20">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Built for your workflow</h2>
                            <p className="text-lg text-gray-500">
                                HealthAtlas works alongside your existing EHR to collect, clean, and structure patient records from external sources — saving your staff time and improving the quality of care.
                            </p>
                        </div>

                        {/* All 5 feature cards in unified grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Faster Intake Process</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Reduce patient intake time by up to 60% with pre-organized health histories that are ready to review.
                                </p>
                            </Card>

                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <FileText className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Cleaner, Structured Charts</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Get well-organized patient records instead of messy PDFs and handwritten notes.
                                </p>
                            </Card>

                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Reduced Administrative Burden</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Free up staff time currently spent on manual data entry and record organization.
                                </p>
                            </Card>

                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <Building2 className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Improved Care Continuity</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    See the complete patient picture across all providers and care settings.
                                </p>
                            </Card>

                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <ShieldCheck className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Fewer Errors & Duplicates</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Avoid redundant tests and catch potential issues with complete historical data.
                                </p>
                            </Card>
                        </div>

                        {/* Ideal For Section */}
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-6">Ideal for</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {[
                                    'Primary Care Practices',
                                    'Specialty Clinics',
                                    'Community Health Centers',
                                    'Chronic Care Providers'
                                ].map(item => (
                                    <div key={item} className="flex items-center space-x-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Section>

                    {/* Implementation Section */}
                    <Section className="bg-white py-20">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Simple Implementation</h2>
                            <p className="text-lg text-gray-500 mb-10">
                                Getting started is straightforward. Here's what to expect:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                <div className="bg-[#f8fafc] p-6 rounded-xl">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Guided Onboarding</h3>
                                    <p className="text-gray-500 text-sm">Dedicated support during setup to configure your account and workflows.</p>
                                </div>
                                <div className="bg-[#f8fafc] p-6 rounded-xl">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Flexible Integration</h3>
                                    <p className="text-gray-500 text-sm">Connect with your existing workflow tools without disrupting current operations.</p>
                                </div>
                                <div className="bg-[#f8fafc] p-6 rounded-xl">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Go-Live Support</h3>
                                    <p className="text-gray-500 text-sm">Training and hands-on assistance for your team as you go live.</p>
                                </div>
                            </div>
                        </div>
                    </Section>
                </>
            ) : (
                <>
                    {/* Patients Hero Content */}
                    <Section className="bg-white py-20">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="order-2 lg:order-1 relative">
                                <div className="aspect-[9/16] w-64 mx-auto bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden relative">
                                    <img src="/app_patient_files.png" alt="App Screen" className="w-full h-full object-cover" />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="inline-flex items-center space-x-2 bg-primary/5 px-3 py-1 rounded-full mb-6">
                                    <Heart className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-semibold text-primary">For Patients</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    Your health history. Finally in your hands.
                                </h2>
                                <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                                    Secure, clear, and complete. Understand your past to protect your future with a unified health timeline you own.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    {[
                                        'One unified health timeline',
                                        'Ownership and consent control',
                                        'Plain-language explanations',
                                        'Easy sharing with providers',
                                        'Complete medical history'
                                    ].map(item => (
                                        <li key={item} className="flex items-center space-x-3 text-gray-700">
                                            <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Section>

                    {/* Patient Features */}
                    <Section className="bg-[#f8fafc] py-20">
                        <div className="text-center max-w-3xl mx-auto mb-14">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Take control of your health data</h2>
                            <p className="text-lg text-gray-500">
                                Your health data belongs to you. HealthAtlas gives you a complete, understandable view of your medical history — and full control over who can access it.
                            </p>
                        </div>

                        {/* All 5 feature cards in unified grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <Smartphone className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Unified Health Timeline</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    All your medical records, visits, and results in one chronological, easy-to-navigate view.
                                </p>
                            </Card>

                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <Lock className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Ownership & Consent Control</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    You decide who sees your data. Grant or revoke access anytime. Your privacy is our priority.
                                </p>
                            </Card>

                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <MessageSquare className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Plain-Language Explanations</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Understand your labs, medications, and diagnoses without medical jargon.
                                </p>
                            </Card>

                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Easy Provider Sharing</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Share your complete health history with any new provider instantly.
                                </p>
                            </Card>

                            <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                                    <Heart className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-3">Better Health Awareness</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Stay informed about your health journey with clear, accessible information.
                                </p>
                            </Card>
                        </div>

                        {/* Important Note */}
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Important Note</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        HealthAtlas provides informational explanations of your medical records only. It does not provide medical advice, diagnosis, or treatment recommendations. Always consult with your healthcare provider for medical decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Section>

                    {/* How It Works for Patients */}
                    <Section className="bg-white py-20">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Getting Started is Easy</h2>
                            <p className="text-lg text-gray-500 mb-10">
                                Take control of your health history in three simple steps.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                <div className="bg-[#f8fafc] p-6 rounded-xl">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-primary font-bold">1</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Create Your Account</h3>
                                    <p className="text-gray-500 text-sm">Sign up securely and verify your identity to get started.</p>
                                </div>
                                <div className="bg-[#f8fafc] p-6 rounded-xl">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-primary font-bold">2</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Upload Your Records</h3>
                                    <p className="text-gray-500 text-sm">Add records from any source — we'll organize and structure them for you.</p>
                                </div>
                                <div className="bg-[#f8fafc] p-6 rounded-xl">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-primary font-bold">3</span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Own Your History</h3>
                                    <p className="text-gray-500 text-sm">Access, understand, and share your complete medical history anytime.</p>
                                </div>
                            </div>
                        </div>
                    </Section>
                </>
            )}

            {/* Final CTA - Same for both views */}
            <Section className="bg-primary text-white text-center py-20">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {activeView === 'clinics'
                            ? 'Ready to transform your practice?'
                            : 'Ready to take control of your health?'}
                    </h2>
                    <p className="text-lg text-white/80 mb-10">
                        {activeView === 'clinics'
                            ? 'Join the network of clinics managing care with clarity and confidence.'
                            : 'Join thousands of patients who own and understand their health history.'}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="white">
                            {activeView === 'clinics' ? 'Request a Demo' : 'Get Started'}
                            <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                        </Button>
                        <Button to="/security" variant="outline-white">
                            Learn About Security
                        </Button>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default Product;
