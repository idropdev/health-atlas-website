import React from 'react';

const Card = ({ children, className = '' }) => {
    return (
        <div className={`bg-white rounded-2xl shadow-soft border border-gray-100 p-6 transition-all duration-300 hover:shadow-md hover:border-primary/10 ${className}`}>
            {children}
        </div>
    );
};

export default Card;
