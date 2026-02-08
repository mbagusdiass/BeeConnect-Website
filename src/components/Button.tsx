import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    fullWidth?: boolean;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    fullWidth = false,
    onClick,
    type = 'button'
}) => {
    const variants = {
        primary: 'bg-black text-white hover:bg-gray-800',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    };

    return (
        <button
            type={type}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${variants[variant]} ${fullWidth ? 'w-full' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;