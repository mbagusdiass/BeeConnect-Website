import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

const products: Record<string, {
    name: string;
    description: string;
    fullDescription: string;
    price: number;
    rating: number;
    reviews: number;
    images: string[];
}> = {
    '1': {
        name: 'Street Flow Tee',
        description: 'Oversized clean drip',
        fullDescription: 'Break the streetwear code with the Street Flow Tee – built for movement, styled for the spotlight. Crafted from ultra-soft, breathable...',
        price: 60000,
        rating: 5,
        reviews: 1300,
        images: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1503341733017-1901578f9f1e?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=600&fit=crop'
        ]
    },
    '2': {
        name: 'FlexMode Hoodie',
        description: 'Built for daily flex',
        fullDescription: 'The ultimate comfort hoodie designed for urban lifestyle. Premium cotton blend with modern fit.',
        price: 150000,
        rating: 4.8,
        reviews: 890,
        images: [
            'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=600&fit=crop',
            'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=600&h=600&fit=crop'
        ]
    }
};

const ProductPage: React.FC = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isWishlisted, setIsWishlisted] = useState(false);

    const product = products[id || '1'] || products['1'];

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <svg
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ));
    };

    return (
        <div className="min-h-screen bg-white pb-32">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-between h-16 lg:h-20">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <h1 className="text-lg font-semibold text-slate-900">{product.name}</h1>

                        <button className="p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-screen-xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="px-4 lg:px-8 py-6">
                        <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-square">
                            <img
                                src={product.images[currentImageIndex]}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Wishlist Button */}
                            <button
                                onClick={() => setIsWishlisted(!isWishlisted)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
                            >
                                <svg
                                    className={`w-5 h-5 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`}
                                    fill={isWishlisted ? 'currentColor' : 'none'}
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </button>
                        </div>

                        {/* Image Dots Indicator */}
                        <div className="flex justify-center gap-2 mt-4">
                            {product.images.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentImageIndex
                                            ? 'bg-slate-800 w-6'
                                            : 'bg-gray-300 hover:bg-gray-400'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="px-4 lg:px-8 py-6">
                        {/* Title and Rating Row */}
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">{product.name}</h1>
                                <p className="text-gray-500">{product.description}</p>
                            </div>
                            <div className="flex flex-col items-start lg:items-end">
                                <div className="flex items-center gap-1 mb-1">
                                    {renderStars(product.rating)}
                                    <span className="text-gray-500 text-sm ml-1">({(product.reviews / 1000).toFixed(1)}K)</span>
                                </div>
                                <p className="text-xl lg:text-2xl font-bold text-slate-900">
                                    Rp {product.price.toLocaleString('id-ID')},00
                                </p>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-8">
                            <h2 className="font-semibold text-slate-900 mb-2">Description</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {product.fullDescription}
                                <button className="text-blue-500 hover:text-blue-600 ml-1 font-medium">
                                    Read all
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Fixed Bottom Buttons */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 lg:p-6 shadow-lg z-30">
                <div className="max-w-screen-xl mx-auto flex gap-4">
                    <button
                        className="flex-1 border-2 border-gray-200 text-slate-900 py-4 rounded-2xl font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
                    >
                        Ask Seller
                    </button>
                    <button
                        onClick={() => navigate('/review-pay')}
                        className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Buy Now
                    </button>
                </div>
            </div>

            <BottomNavigation />
        </div>
    );
};

export default ProductPage;