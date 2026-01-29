import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
    return (
        <Layout>
            <div className="bg-surface min-h-screen pt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 mb-6">Let's talk.</h1>
                            <p className="text-xl text-gray-500 mb-8">
                                Request a demo to see how HealthAtlas can streamline your practice or help you manage your family's care.
                            </p>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-gray-500">hello@healthatlas.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Office</h3>
                                    <p className="text-gray-500">801 Myrtle Ave, Suite 104<br />(entrance on N Virginia St)<br />El Paso, TX 79901</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Hours</h3>
                                    <p className="text-gray-500">
                                        Monday: 5:30–7:30 PM<br />
                                        Wednesday, Friday, Saturday: 9 AM–5 PM<br />
                                        <span className="text-gray-400">Closed Tuesday, Thursday, and Sunday</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden" style={{ minHeight: '844px' }}>
                            <iframe
                                src="https://links.mylayerone.com/widget/form/44rBofrhl1TYlf9r2zYS"
                                style={{ width: '100%', height: '844px', border: 'none', borderRadius: '3px' }}
                                id="inline-44rBofrhl1TYlf9r2zYS"
                                data-layout="{'id':'INLINE'}"
                                data-trigger-type="alwaysShow"
                                data-trigger-value=""
                                data-activation-type="alwaysActivated"
                                data-activation-value=""
                                data-deactivation-type="neverDeactivate"
                                data-deactivation-value=""
                                data-form-name="Contact us form"
                                data-height="844"
                                data-layout-iframe-id="inline-44rBofrhl1TYlf9r2zYS"
                                data-form-id="44rBofrhl1TYlf9r2zYS"
                                title="Contact us form"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
