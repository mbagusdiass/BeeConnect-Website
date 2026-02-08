import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

const SearchPage: React.FC = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const popularSearches = ['Hoodies', 'Smart Watch', 'Laptop', "Men's fashion", 'Sneakers', 'Accessories'];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header with Search */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center gap-3 h-16 lg:h-20">
                        <button
                            onClick={() => navigate(-1)}
                            className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex-1 flex items-center bg-gray-100 rounded-xl px-4 py-3">
                            <svg className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search products..."
                                className="bg-transparent w-full outline-none text-slate-900 placeholder-gray-400"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch('')}
                                    className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                                >
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>

                        <button
                            onClick={() => navigate(-1)}
                            className="text-gray-500 hover:text-gray-700 font-medium transition-colors"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-screen-xl mx-auto px-4 lg:px-8 py-6">
                {/* Popular Searches */}
                <div>
                    <h3 className="font-semibold text-slate-900 mb-4">Popular Searches</h3>
                    <div className="space-y-1">
                        {popularSearches.map((item, index) => (
                            <button
                                key={index}
                                className="w-full text-left p-4 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-200 flex items-center gap-3 group"
                                onClick={() => setSearch(item)}
                            >
                                <svg className="w-5 h-5 text-gray-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <span className="text-gray-700 group-hover:text-slate-900 transition-colors">{item}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </main>

            <BottomNavigation />
        </div>
    );
};

export default SearchPage;