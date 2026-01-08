import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';
import { UserCheck, FileText, MessageCircle, Activity } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Secure Account Creation",
        description: "Verify your identity and secure your account. We use bank-grade encryption to ensure your data is safe from the start.",
        icon: UserCheck,
        bgImage: "/app_create_account.png",
        align: "left"
    },
    {
        id: 2,
        title: "Upload & Organize",
        description: "Upload records from any source—PDFs, images, or portals. HealthAtlas automatically structures and cleans the data.",
        icon: FileText,
        bgImage: "/app_verify.png",
        align: "right"
    },
    {
        id: 3,
        title: "Chat with your Data",
        description: "Don't just read charts—ask questions. 'When was my last tetanus shot?' 'What did Dr. Lee say about my knee?'",
        icon: MessageCircle,
        bgImage: "/bg_mobile_chat.png",
        align: "left"
    },
    {
        id: 4,
        title: "Ongoing Health Context",
        description: "Receive insights and reminders. Your timeline updates automatically as new care events happen.",
        icon: Activity,
        bgImage: "/app_create_account.png",
        align: "right"
    }
];

const HowItWorks = () => {
    return (
        <Layout>
            <div className="bg-surface pt-20 pb-20">
                <div className="text-center max-w-3xl mx-auto px-4 mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How HealthAtlas Works</h1>
                    <p className="text-xl text-gray-500">
                        From fragmented files to a clear, usable health history in four simple steps.
                    </p>
                </div>

                <div className="space-y-0">
                    {steps.map((step, index) => (
                        <section key={step.id} className="relative py-24 md:py-32 overflow-hidden border-b border-gray-100/50 last:border-0">
                            {/* Background Image Layer */}
                            <div className={`absolute top-1/2 -translate-y-1/2 w-[80%] md:w-[60%] h-[120%] z-0 pointer-events-none opacity-10 blur-sm transition-opacity duration-700
                 ${step.align === 'left' ? 'right-0 translate-x-1/4' : 'left-0 -translate-x-1/4'}
               `}>
                                <img src={step.bgImage} alt="" className="w-full h-full object-contain" />
                            </div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                                <div className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>

                                    {/* Visual Placeholder (Foreground) */}
                                    <div className="w-full md:w-1/2 flex justify-center">
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-primary/20 blur-3xl transform rotate-6 transition-all duration-500 group-hover:rotate-12 group-hover:bg-primary/30 rounded-full"></div>
                                            <div className="relative bg-white p-8 rounded-3xl shadow-soft border border-gray-100 flex items-center justify-center aspect-square w-64 md:w-80">
                                                <step.icon className="w-24 h-24 text-primary" strokeWidth={1} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="w-full md:w-1/2 text-center md:text-left">
                                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg mb-6 shadow-lg shadow-primary/20">
                                            {step.id}
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{step.title}</h2>
                                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <div className="text-center py-20 px-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Ready to take control?</h3>
                    <div className="flex justify-center gap-4">
                        <Button href="https://links.mylayerone.com/widget/bookings/dropdevdavid8r9zen">Get Started</Button>
                        <Button to="/clinics" variant="secondary">For Clinics</Button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default HowItWorks;
