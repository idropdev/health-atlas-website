import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const About = () => {
    return (
        <Layout>
            <div className="bg-surface pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                        Healthcare feels broken.<br /> We're fixing the infrastructure.
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        HealthAtlas was founded on a simple belief: Patients should own their history, and doctors should be able to read it without a headache.
                    </p>
                </div>

                <Section className="bg-white">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem</h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                Every time you switch doctors, your history gets left behind. Fax machines are still the industry standard for data transfer. This fragmentation leads to duplicate tests, missed diagnoses, and physician burnout.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                We're building the trust layer for health data. A neutral, patient-controlled platform that connects the dots between clinics, labs, and specialists.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Trust First</h2>
                            <p className="text-lg text-gray-500 leading-relaxed">
                                We represent the patient, not the insurance company. Our business model is simple: we provide software that makes care better. We do not sell data.
                            </p>
                        </div>
                    </div>
                </Section>
            </div>
        </Layout>
    );
};

export default About;
