import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ children, to, href, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-lg focus:ring-primary shadow-md",
        secondary: "bg-white text-primary border border-gray-200 hover:border-primary/20 hover:bg-gray-50 hover:shadow-md focus:ring-gray-200 shadow-sm",
        white: "bg-white text-primary hover:bg-gray-50 hover:shadow-lg focus:ring-white shadow-md",
        ghost: "text-gray-600 hover:text-primary hover:bg-gray-100/50",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
        'outline-white': "border-2 border-white/20 text-white hover:bg-white/10",
    };

    const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

    // External link (opens in new tab)
    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClassName} {...props}>
                {children}
            </a>
        );
    }

    // Internal link (React Router)
    if (to) {
        return (
            <Link to={to} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

export default Button;
