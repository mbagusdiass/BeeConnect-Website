import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';

const ReviewPayPage: React.FC = () => {
    const navigate = useNavigate();
    const { cart, total } = useCart();
    const [quantity, setQuantity] = useState(1);

    const sampleProduct = {
        id: '1',
        name: 'Street Flow Tee',
        description: 'Oversized clean drip',
        color: 'White and Black',
        size: 'S (Medium)',
        price: 60000,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop'
    };

    const subtotal = sampleProduct.price * quantity;

    return (
        <div className="min-h-screen bg-gray-50 pb-32">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center h-16 lg:h-20">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h1 className="text-lg lg:text-xl font-semibold text-slate-900 ml-4">Review & Pay</h1>
                    </div>
                </div>
            </header>

            <main className="max-w-screen-xl mx-auto px-4 lg:px-8 py-6">
                <div className="grid lg:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6">
                            <h2 className="font-semibold text-lg text-slate-900 mb-5">Delivery Details</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between items-start py-2 border-b border-gray-50">
                                    <span className="text-gray-600">Name</span>
                                </div>
                                <div className="flex justify-between items-start py-2 border-b border-gray-50">
                                    <span className="text-gray-600">Adress</span>
                                </div>
                                <div className="flex justify-between items-start py-2 border-b border-gray-50">
                                    <span className="text-gray-600">Standard Delivery (2-3 days)</span>
                                </div>
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-600">Payment method</span>
                                    <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6">
                            <h2 className="font-semibold text-lg text-slate-900 mb-5">Order Summary</h2>

                            <div className="flex gap-4 pb-6 border-b border-gray-100">
                                <div className="w-28 h-28 lg:w-32 lg:h-32 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                                    <img
                                        src={sampleProduct.image}
                                        alt={sampleProduct.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-slate-900 mb-1">{sampleProduct.name}</h3>
                                    <p className="text-gray-500 text-sm mb-1">{sampleProduct.description}</p>
                                    <p className="text-gray-500 text-sm mb-2">{sampleProduct.color}</p>
                                    <p className="text-gray-500 text-sm mb-3">{sampleProduct.size}</p>
                                    <p className="font-bold text-slate-900">Rp {sampleProduct.price.toLocaleString('id-ID')},00</p>
                                </div>

                                <div className="flex items-end">
                                    <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-2 py-1">
                                        <button
                                            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            –
                                        </button>
                                        <span className="w-6 text-center font-medium">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6 space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="font-medium text-slate-900">Rp {subtotal.toLocaleString('id-ID')},00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="text-gray-600">Standard - Free</span>
                                </div>
                                <div className="flex justify-between items-center pt-3 border-t border-gray-100">
                                    <span className="font-semibold text-slate-900">Total</span>
                                    <span className="font-bold text-lg text-slate-900">Rp {subtotal.toLocaleString('id-ID')},00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 lg:p-6 shadow-lg">
                <div className="max-w-screen-xl mx-auto">
                    <button
                        onClick={() => navigate('/checkout')}
                        className="w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewPayPage;