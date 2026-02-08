import React from 'react';

interface CardProps {
    title: string;
    description: string;
    price: string;
    image?: string;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    title,
    description,
    price,
    image,
    className = ''
}) => {
    return (
        <div className={`bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
            <div className="p-4">
                <div className="w-full h-56 bg-gray-100 mb-4 rounded-lg flex items-center justify-center overflow-hidden">
                    {image ? (
                        <img src={image} alt={title} className="w-full h-full object-cover" />
                    ) : (
                        <div className="flex flex-col items-center justify-center text-gray-400">
                            <svg className="w-16 h-16 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm">Product Image</span>
                        </div>
                    )}
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm mb-3">{description}</p>
                <p className="text-gray-900 font-semibold text-lg">{price}</p>
            </div>
        </div>
    );
};