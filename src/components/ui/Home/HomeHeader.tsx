import React from 'react';

export const HomeHeader: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-white border-b">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <h1 className="text-2xl font-bold">Brand</h1>
                        <div className="relative flex-grow max-w-md">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="flex items-center space-x-6">
                        <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">Cart</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">Profile</a>
                        <a href="#" className="text-gray-700 hover:text-blue-600">Contact us</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};