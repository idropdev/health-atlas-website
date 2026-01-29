import React from 'react';

/**
 * AppShowcase Component
 * 
 * Displays app screenshots in Apple-style phone mockups.
 * TO REMOVE: Delete this file and remove the import/usage from HowItWorks.jsx
 */

const screens = [
    { src: '/screens_imgs/Splash-portrait.png', label: 'Welcome' },
    { src: '/screens_imgs/Create Account-portrait.png', label: 'Easy Sign Up' },
    { src: '/screens_imgs/Home-portrait.png', label: 'Your Dashboard' },
    { src: '/screens_imgs/Records-portrait.png', label: 'Medical Records' },
    { src: '/screens_imgs/Chat Suggestion 1-portrait.png', label: 'AI Health Chat' },
];

const AppShowcase = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-[#f8fafc] to-[#e8f4fc] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        See the App
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        A beautiful, intuitive experience for managing your health records
                    </p>
                </div>

                {/* Phone Showcase */}
                <div className="flex gap-6 md:gap-10 overflow-x-auto pb-8 px-4 snap-x snap-mandatory scrollbar-hide justify-start md:justify-center">
                    {screens.map((screen, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 snap-center group"
                        >
                            {/* Screenshot - displayed as-is */}
                            <div className="transition-transform duration-500 ease-out group-hover:scale-105 group-hover:-translate-y-2">
                                <img
                                    src={screen.src}
                                    alt={screen.label}
                                    className="w-48 md:w-56 h-auto"
                                    loading="lazy"
                                />
                            </div>

                            {/* Label */}
                            <p className="text-center mt-6 text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">
                                {screen.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Custom scrollbar hide style */}
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

export default AppShowcase;
