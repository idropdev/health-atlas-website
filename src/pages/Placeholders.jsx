import React from 'react';
import Layout from '../components/Layout';

const PlaceholderPage = ({ title }) => (
    <Layout>
        <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
                <h1 className="text-4xl font-bold text-primary mb-4">{title}</h1>
                <p className="text-gray-500">Under Construction. Coming soon.</p>
            </div>
        </div>
    </Layout>
);

export const HowItWorks = () => <PlaceholderPage title="How It Works" />;
export const Product = () => <PlaceholderPage title="Our Product" />; // Will split later
export const Security = () => <PlaceholderPage title="Security & Compliance" />;
export const About = () => <PlaceholderPage title="About HealthAtlas" />;
export const Contact = () => <PlaceholderPage title="Contact Us" />;
export const Clinics = () => <PlaceholderPage title="For Clinics" />;
export const Patients = () => <PlaceholderPage title="For Patients" />;
