import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Card = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useScrollAnimation(0.1);

    return (
        <div
            ref={ref}
            className={`bg-white rounded-2xl shadow-soft border border-gray-100 p-6 transition-all duration-500 ease-out hover:shadow-lg hover:border-primary/20 hover:scale-[1.02] ${className}`}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default Card;
