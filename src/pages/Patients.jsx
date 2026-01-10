import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import { Heart, Lock, MessageSquare, Smartphone } from 'lucide-react';

const Patients = () => {
    return (
        <Layout>
            <div className="bg-surface pt-20">
                {/* Hero */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <span className="text-accent font-semibold uppercase tracking-wider text-sm mb-4 block">For Patients</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight">
                        Your health history. <br />Finally in your hands.
                    </h1>
                    <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
                        Secure, clear, and complete. Understand your past to protect your future.
                    </p>
                    <Button to="#patient-onboarding">Get Started</Button>
                </div>

                {/* Feature 1: Unified Timeline */}
                <Section className="bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 relative">
                            <div className="aspect-[9/16] w-64 mx-auto bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden relative">
                                <img src="/app_create_account.png" alt="App Screen" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                                <Smartphone className="w-6 h-6 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">One Unified Timeline</h2>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                See all your appointments, labs, and prescriptions in one place. No more logging into five different portals.
                            </p>
                        </div>
                    </div>
                </Section>

                {/* Feature 2: Plain Language */}
                <Section className="bg-surface">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                                <MessageSquare className="w-6 h-6 text-accent" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Plain Language Answers</h2>
                            <p className="text-lg text-gray-500 leading-relaxed mb-6">
                                Confused by medical jargon? HealthAtlas translates complex reports into simple explanations, so you actually understand your health.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="relative mx-auto max-w-sm">
                                <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                                    <div className="space-y-4">
                                        <div className="flex items-end justify-end">
                                            <div className="bg-primary text-white px-4 py-2 rounded-2xl rounded-tr-none text-sm max-w-[80%]">
                                                What does "CBC normal" mean?
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-none text-sm max-w-[90%]">
                                                It means your Complete Blood Count shows your red and white blood cells are within healthy ranges.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Background chat image faint */}
                                <div className="absolute inset-0 z-[-1] opacity-50 blur-xl bg-accent/20 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </Section>

                {/* Feature 3: Ownership */}
                <Section className="bg-white text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6 mx-auto">
                            <Lock className="w-6 h-6 text-purple-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">You own your data.</h2>
                        <p className="text-lg text-gray-500 mb-8">
                            You decide who sees your records. Revoke access at any time. Your privacy is our priority.
                        </p>
                    </div>
                </Section>
            </div>
        </Layout>
    );
};

export default Patients;
