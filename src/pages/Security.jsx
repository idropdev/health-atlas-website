import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import { Shield, Lock, EyeOff, Server, FileCheck } from 'lucide-react';

const Security = () => {
    return (
        <Layout>
            <div className="bg-surface pt-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-8">
                        <Shield className="w-8 h-8 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Security is our foundation.
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                        We exceed industry standards to protect sensitive health data. HIPAA compliant, encrypted, and audit-ready.
                    </p>
                </div>

                <Section className="bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <Lock className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">End-to-End Encryption</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Data is encrypted at rest (AES-256) and in transit (TLS 1.3). We cannot see your password or private keys.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <FileCheck className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">HIPAA Compliant</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Built from the ground up to meet and exceed HIPAA regulatory requirements for Privacy and Security Rules.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <EyeOff className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Minimum Necessary Access</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Strict role-based access controls ensure staff only see what is required for their specific duties.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                                        <Server className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Audit Logging</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Every access attempt and data modification is logged in an immutable audit trail for full accountability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-surface text-center">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-3xl mx-auto">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Responsible AI</h3>
                        <p className="text-gray-500 mb-0">
                            HealthAtlas uses AI strictly for data structuring and plain-language translation. We do not use generative AI for diagnosis or treatment recommendations. All clinical summaries cite original source documents.
                        </p>
                    </div>
                </Section>
            </div>
        </Layout>
    );
};

export default Security;
