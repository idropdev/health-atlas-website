import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Section = ({ children, className = '', id = '' }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <section
            ref={ref}
            id={id}
            className={`py-20 md:py-24 relative overflow-hidden ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {children}
            </div>
        </section>
    );
};

export default Section;
