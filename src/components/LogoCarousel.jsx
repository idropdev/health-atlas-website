import React from 'react';

const logos = [
    { name: 'Allscripts', src: '/healthcare_logos/allscripts-logo.png' },
    { name: 'Athenahealth', src: '/healthcare_logos/athenahealth-logo.png' },
    { name: 'Carequality', src: '/healthcare_logos/carequality-logo.png' },
    { name: 'CommonWell', src: '/healthcare_logos/commonwell-logo.png' },
    { name: 'CRISP', src: '/healthcare_logos/crisp-logo.png' },
    { name: 'eClinicalWorks', src: '/healthcare_logos/eclinicalworks-logo.png' },
    { name: 'Epic', src: '/healthcare_logos/epic-logo.png' },
    { name: 'Greenway Health', src: '/healthcare_logos/greenwayhealth-logo.png' },
    { name: 'HCA Healthcare', src: '/healthcare_logos/hcahealthcare-logo.svg' },
    { name: 'Health Gorilla', src: '/healthcare_logos/healthgorilla-logo.png' },
    { name: 'Kaiser Permanente', src: '/healthcare_logos/kaiserpermanente-logo.png' },
    { name: 'Mayo Clinic', src: '/healthcare_logos/mayoclinic-logo.png' },
    { name: 'MEDITECH', src: '/healthcare_logos/meditech-logo.png' },
    { name: 'NextGen Healthcare', src: '/healthcare_logos/nextgenhealthcare-logo.png' },
    { name: 'Oracle', src: '/healthcare_logos/oracle-logo.png' },
    { name: 'PatientFusion', src: '/healthcare_logos/patientfusion-logo.svg' },
    { name: 'Veraid GM', src: '/healthcare_logos/veraidgm-logo.svg' },
];

const LogoCarousel = () => {
    return (
        <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-wider mb-8">
                    Compatible with leading healthcare systems
                </p>
            </div>

            <div className="relative">
                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling container */}
                <div className="flex overflow-hidden">
                    <div className="flex items-center gap-16 animate-scroll-logos">
                        {/* First set of logos */}
                        {logos.map((logo, index) => (
                            <div
                                key={`first-${index}`}
                                className="flex-shrink-0 h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-full w-auto max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {logos.map((logo, index) => (
                            <div
                                key={`second-${index}`}
                                className="flex-shrink-0 h-12 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.name}
                                    className="h-full w-auto max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LogoCarousel;
