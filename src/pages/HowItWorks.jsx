import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import Card from '../components/Card';
import { Upload, Sparkles, FileText, ClipboardCheck, ChevronRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        label: "Step 01",
        title: "Upload Medical Records",
        description: "Patients or clinics upload medical records from any source — PDFs, images, faxes, or direct EHR exports. No format limitations.",
        icon: Upload,
    },
    {
        id: 2,
        label: "Step 02",
        title: "Data Cleaning & Structuring",
        description: "HealthAtlas automatically cleans, organizes, and structures the data into a consistent, usable format. No manual data entry required.",
        icon: Sparkles,
    },
    {
        id: 3,
        label: "Step 03",
        title: "Plain-Language Explanations",
        description: "Patients receive clear, understandable explanations of their labs, medications, and medical history — without medical jargon.",
        icon: FileText,
    },
    {
        id: 4,
        label: "Step 04",
        title: "Clinic-Ready Health History",
        description: "Clinics access a complete, unified patient record that's ready to use for care decisions, reducing intake time and improving continuity.",
        icon: ClipboardCheck,
    }
];

const differentiators = [
    {
        title: "Works Alongside Your EHR",
        description: "HealthAtlas complements your existing systems — no replacement needed."
    },
    {
        title: "Patient-Owned Data",
        description: "Patients control their health history and decide who can access it."
    },
    {
        title: "No Medical Advice",
        description: "We structure and explain data — diagnosis and treatment remain with providers."
    },
    {
        title: "Any Record Format",
        description: "PDFs, images, faxes, or EHR exports — we handle all formats."
    },
    {
        title: "HIPAA Compliant",
        description: "Enterprise-grade security with full regulatory compliance."
    },
    {
        title: "Human-Readable",
        description: "Clear explanations help patients understand their own health."
    }
];

const HowItWorks = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <div className="bg-gradient-to-b from-[#f0f7ff] to-white pt-24 pb-16">
                <div className="text-center max-w-3xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How HealthAtlas Works</h1>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                        A simple, four-step process that transforms fragmented medical records into a unified, patient-owned health history.
                    </p>
                </div>
            </div>

            {/* Steps Timeline Section */}
            <Section className="bg-gradient-to-b from-white to-[#f8fafc] py-16">
                <div className="max-w-2xl mx-auto">
                    <div className="relative">
                        {/* Vertical Timeline Line */}
                        <div className="absolute left-7 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary/30 via-primary/20 to-primary/10"></div>

                        {/* Steps */}
                        <div className="space-y-12">
                            {steps.map((step, index) => (
                                <div key={step.id} className="relative flex items-start gap-8">
                                    {/* Icon */}
                                    <div className="relative z-10 flex-shrink-0">
                                        <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                            <step.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pt-1">
                                        <span className="text-sm font-semibold text-primary mb-2 block">{step.label}</span>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-500 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* What Makes HealthAtlas Different Section */}
            <Section className="bg-[#f8fafc] py-20">
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What makes HealthAtlas different</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {differentiators.map((item, index) => (
                        <Card key={index} className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-white py-20">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">See it in action</h2>
                    <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                        Schedule a demo to see how HealthAtlas can transform your patient intake process.
                    </p>
                    <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen" variant="primary" className="text-base px-8 py-3.5 shadow-xl shadow-primary/20">
                        Request a Demo
                        <ChevronRight className="w-4 h-4 ml-1 inline-block" />
                    </Button>
                </div>
            </Section>
        </Layout>
    );
};

export default HowItWorks;
