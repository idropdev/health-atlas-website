import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import { Heart, Shield, Users, Lightbulb, ChevronRight } from 'lucide-react';

const About = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                            Our Vision for Healthcare
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
                            We believe patients should own their health data, clinicians should have complete information, and medical records shouldn't require a decoder ring to understand.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why HealthAtlas Exists */}
            <Section className="bg-white py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Why HealthAtlas Exists</h2>

                    <div className="space-y-6 text-gray-600 leading-relaxed">
                        <p>
                            Healthcare data is broken. Medical records are scattered across dozens of providers, buried in incompatible systems, and often impossible for patients to access or understand. Clinicians waste hours collecting incomplete information, and patients are left in the dark about their own health.
                        </p>
                        <p>
                            We started HealthAtlas to fix this fundamental problem. Our platform collects medical records from any source, structures them into a clean and usable format, and translates complex medical information into plain language that everyone can understand.
                        </p>
                        <p>
                            But this isn't just about technology. It's about a core belief: <strong className="text-gray-900">patients should own their health data.</strong> They should be able to access it, understand it, and share it with providers of their choosing. And clinicians should have complete, accurate information to make the best possible care decisions.
                        </p>
                        <p>
                            HealthAtlas doesn't replace your EHR or provide medical advice. We work alongside existing systems to fill the gaps — collecting external records, organizing the chaos, and making health information accessible to those who need it most.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Our Values */}
            <Section className="bg-[#f8fafc] py-20">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Values</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-8 bg-white hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Heart className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Patient-Centered</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Every decision we make starts with one question: does this serve the patient? Health data belongs to patients, and our platform reflects that belief.
                        </p>
                    </Card>

                    <Card className="p-8 bg-white hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Trust Through Transparency</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Healthcare requires trust. We earn it through transparent practices, clear communication, and unwavering commitment to security and privacy.
                        </p>
                    </Card>

                    <Card className="p-8 bg-white hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Supporting Clinicians</h3>
                        <p className="text-gray-500 leading-relaxed">
                            We believe in reducing the administrative burden on healthcare workers so they can focus on what matters most — patient care.
                        </p>
                    </Card>

                    <Card className="p-8 bg-white hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Lightbulb className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Clarity Over Complexity</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Medical information should be understandable. We translate complex health data into clear, actionable insights for everyone.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* What HealthAtlas Is Not */}
            <Section className="bg-white py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">What HealthAtlas Is Not</h2>

                    <div className="space-y-6">
                        <div className="bg-[#f8fafc] rounded-xl p-6">
                            <p className="text-gray-700">
                                <strong className="text-gray-900">We are not an EHR.</strong> We don't replace your existing electronic health record system. Instead, we complement it by organizing external records and patient-provided information.
                            </p>
                        </div>

                        <div className="bg-[#f8fafc] rounded-xl p-6">
                            <p className="text-gray-700">
                                <strong className="text-gray-900">We do not provide medical advice.</strong> HealthAtlas explains medical information in plain language, but diagnosis and treatment decisions belong to qualified healthcare professionals.
                            </p>
                        </div>

                        <div className="bg-[#f8fafc] rounded-xl p-6">
                            <p className="text-gray-700">
                                <strong className="text-gray-900">We are not a patient portal.</strong> While patients can access and understand their data through HealthAtlas, we focus on data aggregation and organization — not clinical communication or appointment scheduling.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Blue CTA Banner */}
            <section className="bg-primary py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Let's build better healthcare together
                    </h2>
                    <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
                        Whether you're a clinic looking to streamline patient intake or a healthcare partner interested in patient-owned data models, we'd love to hear from you.
                    </p>
                    <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="outline" className="bg-white text-gray-900 border-white hover:bg-gray-100">
                        Get in Touch
                        <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                </div>
            </section>
        </Layout>
    );
};

export default About;
