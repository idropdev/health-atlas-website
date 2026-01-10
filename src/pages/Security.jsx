import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';
import {
    Shield, Lock, Key, Eye, Users, Server, CheckCircle2,
    FileText, AlertTriangle, ChevronRight
} from 'lucide-react';

const Security = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-8">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-gray-700">Enterprise-Grade Security</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                            Security & Compliance
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                            HealthAtlas is built from the ground up with security, privacy, and regulatory compliance as core principles — not afterthoughts.
                        </p>
                    </div>
                </div>
            </section>

            {/* How We Protect Your Data */}
            <Section className="bg-white py-20">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How We Protect Your Data</h2>
                </div>

                {/* All 6 cards in unified grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="p-6 bg-[#f8fafc] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">HIPAA Compliance</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            HealthAtlas is fully compliant with HIPAA regulations, ensuring your protected health information (PHI) is handled according to federal standards.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#f8fafc] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Encryption at Rest & In Transit</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            All data is encrypted using AES-256 encryption at rest and TLS 1.3 for data in transit. Your health information is never exposed.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#f8fafc] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Key className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Role-Based Access Control</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Granular access controls ensure that only authorized personnel can access specific data, following the principle of least privilege.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#f8fafc] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Eye className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Comprehensive Audit Logging</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Every access to patient data is logged and auditable. Know exactly who accessed what data and when.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#f8fafc] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Users className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Patient Consent Management</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Patients maintain control over their data with explicit consent requirements for all data sharing and access.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#f8fafc] hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                            <Server className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Secure Infrastructure</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Hosted on SOC 2 Type II certified infrastructure with continuous monitoring, intrusion detection, and regular security assessments.
                        </p>
                    </Card>
                </div>
            </Section>

            {/* Regulatory Compliance */}
            <Section className="bg-[#f8fafc] py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Regulatory Compliance</h2>
                        <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                            We understand the critical importance of regulatory compliance in healthcare. HealthAtlas maintains rigorous compliance standards to ensure your organization meets all requirements.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'HIPAA Privacy Rule compliant',
                                'HIPAA Security Rule compliant',
                                'Business Associate Agreements (BAA) available',
                                'Regular third-party security audits',
                                'Incident response procedures in place',
                                'Employee security training programs'
                            ].map(item => (
                                <li key={item} className="flex items-center space-x-3 text-gray-700">
                                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-sm">
                            <div className="w-full h-32 bg-gray-50 rounded-xl mb-6"></div>
                            <Button variant="outline" className="text-sm">
                                Request BAA
                                <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                            </Button>
                        </div>
                    </div>
                </div>
            </Section>

            {/* AI Safety Guardrails */}
            <Section className="bg-white py-20">
                <div className="mb-14">
                    <div className="flex items-center space-x-3 mb-6">
                        <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                            <AlertTriangle className="w-5 h-5 text-teal-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">AI Safety Guardrails</h2>
                    </div>
                    <p className="text-lg text-gray-500 max-w-3xl leading-relaxed">
                        HealthAtlas uses AI to help explain medical information in plain language. We've implemented strict guardrails to ensure AI is used safely and responsibly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card className="p-6 bg-[#f8fafc]">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Informational Only</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            AI-generated explanations are informational and never constitute medical advice, diagnosis, or treatment recommendations.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#f8fafc]">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Human Oversight</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            All AI outputs are designed to support, not replace, clinical judgment by qualified healthcare professionals.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#f8fafc]">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Transparency</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            AI-generated content is clearly labeled so users always know the source of information.
                        </p>
                    </Card>

                    <Card className="p-6 bg-[#f8fafc]">
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Minimum Necessary Access</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            AI systems only access the data required for the specific task, following data minimization principles.
                        </p>
                    </Card>
                </div>

                {/* Medical Disclaimer */}
                <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-4 h-4 text-teal-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-900 mb-1">Medical Disclaimer</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                HealthAtlas provides informational content only and is not intended to provide medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Questions CTA */}
            <Section className="bg-[#f8fafc] py-20 text-center">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Questions about security?
                    </h2>
                    <p className="text-lg text-gray-500 mb-10">
                        Our team is happy to discuss our security practices, compliance documentation, and answer any questions you may have.
                    </p>
                    <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="primary" className="shadow-lg shadow-primary/20">
                        Contact Our Team
                        <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                </div>
            </Section>
        </Layout>
    );
};

export default Security;
