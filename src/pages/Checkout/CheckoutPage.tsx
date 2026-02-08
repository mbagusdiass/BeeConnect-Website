import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();
    const [deliveryMethod, setDeliveryMethod] = useState('standard');
    const [paymentMethod, setPaymentMethod] = useState('bank');

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
                        <h1 className="text-lg lg:text-xl font-semibold text-slate-900 ml-4">Checkout</h1>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-screen-xl mx-auto px-4 lg:px-8 py-6">
                <div className="grid lg:grid-cols-2 gap-6">
                    {/* Delivery Info */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6">
                        <h2 className="font-semibold text-lg text-slate-900 mb-5">Delivery Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                                    placeholder="Enter your full name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Address</label>
                                <textarea
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all resize-none"
                                    rows={3}
                                    placeholder="Enter your delivery address"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Delivery Method */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6">
                            <h2 className="font-semibold text-lg text-slate-900 mb-5">Delivery Method</h2>
                            <div className="space-y-3">
                                <label
                                    className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${deliveryMethod === 'standard'
                                            ? 'border-slate-900 bg-slate-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="delivery"
                                        checked={deliveryMethod === 'standard'}
                                        onChange={() => setDeliveryMethod('standard')}
                                        className="mt-1 mr-4 accent-slate-900"
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-900">Standard Delivery</div>
                                        <div className="text-sm text-gray-500">Arrives in 2-3 days</div>
                                    </div>
                                    <span className="text-green-600 font-medium">Free</span>
                                </label>

                                <label
                                    className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${deliveryMethod === 'express'
                                            ? 'border-slate-900 bg-slate-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="delivery"
                                        checked={deliveryMethod === 'express'}
                                        onChange={() => setDeliveryMethod('express')}
                                        className="mt-1 mr-4 accent-slate-900"
                                    />
                                    <div className="flex-1">
                                        <div className="font-medium text-slate-900">Express Delivery</div>
                                        <div className="text-sm text-gray-500">Arrives in 1 day</div>
                                    </div>
                                    <span className="font-medium text-slate-900">Rp 15.000</span>
                                </label>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6">
                            <h2 className="font-semibold text-lg text-slate-900 mb-5">Payment Method</h2>
                            <div className="space-y-3">
                                <label
                                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'bank'
                                            ? 'border-slate-900 bg-slate-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === 'bank'}
                                        onChange={() => setPaymentMethod('bank')}
                                        className="mr-4 accent-slate-900"
                                    />
                                    <span className="flex-1 font-medium text-slate-900">Bank Transfer</span>
                                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-lg font-medium">BCA</span>
                                </label>

                                <label
                                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'ewallet'
                                            ? 'border-slate-900 bg-slate-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === 'ewallet'}
                                        onChange={() => setPaymentMethod('ewallet')}
                                        className="mr-4 accent-slate-900"
                                    />
                                    <span className="flex-1 font-medium text-slate-900">E-Wallet</span>
                                    <div className="flex gap-2">
                                        <span className="text-sm bg-gray-100 px-3 py-1 rounded-lg font-medium">GoPay</span>
                                        <span className="text-sm bg-gray-100 px-3 py-1 rounded-lg font-medium">OVO</span>
                                    </div>
                                </label>

                                <label
                                    className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${paymentMethod === 'cod'
                                            ? 'border-slate-900 bg-slate-50'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={paymentMethod === 'cod'}
                                        onChange={() => setPaymentMethod('cod')}
                                        className="mr-4 accent-slate-900"
                                    />
                                    <span className="flex-1 font-medium text-slate-900">Cash on Delivery</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Fixed Bottom Button */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 lg:p-6 shadow-lg">
                <div className="max-w-screen-xl mx-auto">
                    <button
                        onClick={() => navigate('/review-pay')}
                        className="w-full bg-slate-900 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                        Continue to Review
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;