import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import LogoCarousel from '../components/LogoCarousel';
import ImageCompareSlider from '../components/ImageCompareSlider';
import { Shield, Clock, FileText, Users, Building2, Heart, Lock, UserCheck, HeartHandshake, CheckCircle2, ChevronRight } from 'lucide-react';

const Home = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-24 pb-32 overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* HIPAA Badge */}
                        <div className="inline-flex items-center space-x-2 bg-white border border-primary/20 px-4 py-2 rounded-full mb-8 shadow-sm">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">HIPAA-Compliant Platform</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                            One complete health history — <span className="text-primary">secure, patient-owned, and clinic-ready</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
                            HealthAtlas turns fragmented medical records into a unified, understandable health history that patients own and clinics can actually use.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="primary" className="text-base px-8 py-3.5 shadow-xl shadow-primary/20">
                                Request a Demo
                                <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                            </Button>
                            <Button to="/how-it-works" variant="secondary" className="text-base px-8 py-3.5">
                                Learn How It Works
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Logo Carousel Section */}
            <LogoCarousel />

            {/* Problem Section */}
            <Section className="bg-[#f8fafc] py-20">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Medical records shouldn't be this hard</h2>
                    <p className="text-lg text-gray-500">
                        Healthcare data is fragmented, manual processes waste time, and patients are left confused about their own history.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="text-center hover:-translate-y-1 bg-white">
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                            <FileText className="w-7 h-7 text-red-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Fragmented Records</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Medical records scattered across multiple providers, formats, and systems.
                        </p>
                    </Card>

                    <Card className="text-center hover:-translate-y-1 bg-white">
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                            <Clock className="w-7 h-7 text-red-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Time-Consuming Intake</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Staff spend hours collecting, organizing, and entering patient history manually.
                        </p>
                    </Card>

                    <Card className="text-center hover:-translate-y-1 bg-white">
                        <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mx-auto mb-5">
                            <Users className="w-7 h-7 text-red-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Patient Confusion</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Patients struggle to understand their own medical history and share it accurately.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Before/After Comparison Section */}
            <Section className="bg-white py-20">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Same data. Completely different understanding.</h2>
                    <p className="text-lg text-gray-500">
                        See how HealthAtlas transforms confusing medical jargon into clear, actionable health insights.
                    </p>
                </div>

                <div className="flex justify-center">
                    <ImageCompareSlider
                        beforeImage="/lab_results.jpg"
                        afterImage="/labs-enhanced.png"
                        beforeLabel="Medical Record"
                        afterLabel="What it means"
                        initialPosition={40}
                    />
                </div>

                <p className="text-center text-sm text-gray-400 mt-6">
                    Drag the slider to compare • Works on mobile too
                </p>
            </Section>

            {/* Built for Everyone Section */}
            <Section className="bg-[#f8fafc] py-20">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Built for everyone in the care journey</h2>
                    <p className="text-lg text-gray-500">
                        HealthAtlas creates value for both healthcare providers and the patients they serve.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* For Clinics Card */}
                    <Card className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">For Clinics</h3>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                'Faster patient intake process',
                                'Cleaner, structured charts',
                                'Reduced administrative burden',
                                'Improved care continuity',
                                'Fewer duplicate tests'
                            ].map(item => (
                                <li key={item} className="flex items-center space-x-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button to="/product" variant="outline" className="text-sm">
                            Learn More
                            <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                        </Button>
                    </Card>

                    {/* For Patients Card */}
                    <Card className="p-8 bg-white hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Heart className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">For Patients</h3>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {[
                                'One unified health timeline',
                                'Ownership and consent control',
                                'Plain-language explanations',
                                'Easy sharing with providers',
                                'Complete medical history'
                            ].map(item => (
                                <li key={item} className="flex items-center space-x-3 text-gray-600">
                                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button to="/product?view=patients" variant="outline" className="text-sm text-primary border-primary hover:bg-primary hover:text-white">
                            Learn More
                            <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                        </Button>
                    </Card>
                </div>
            </Section>

            {/* Trust Banner */}
            <div className="bg-primary py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4">
                        <div className="flex items-center space-x-2 text-white">
                            <Shield className="w-4 h-4" />
                            <span className="text-sm font-medium">HIPAA Compliant</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                            <Lock className="w-4 h-4" />
                            <span className="text-sm font-medium">Security-First</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white">
                            <UserCheck className="w-4 h-4" />
                            <span className="text-sm font-medium">Patient-Owned Data</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <Section className="bg-white text-center py-20">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Ready to simplify your patient records?</h2>
                    <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                        See how HealthAtlas can reduce administrative burden and give your patients control of their health history. No pressure, no spam — just a conversation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="primary" className="text-base px-8 py-3.5 shadow-xl shadow-primary/20">
                            Request a Demo
                            <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                        </Button>
                        <Button to="/security" variant="secondary" className="text-base px-8 py-3.5 flex items-center justify-center">
                            <Shield className="w-4 h-4 mr-2" />
                            Learn About Security
                        </Button>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default Home;
