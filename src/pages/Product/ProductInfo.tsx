import React from 'react';

const ProductInfo: React.FC = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-1">Street Flow Tee</h1>
            <p className="text-gray-600 mb-4">Oversized clean drip</p>

            <div className="mb-6">
                <h2 className="font-semibold mb-2">Description</h2>
                <p className="text-gray-700 text-sm">
                    Break the streetwear code with the Street Flow Tee – built for movement, styled for the spotlight. Crafted from ultra-soft, breathable...
                    <span className="text-blue-600 ml-1">Read all</span>
                </p>
            </div>

            <button className="w-full border border-gray-300 rounded-lg py-3 mb-4 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Ask Seller
            </button>
        </div>
    );
};

export default ProductInfo;