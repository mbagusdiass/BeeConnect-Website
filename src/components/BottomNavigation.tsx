import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNavigation: React.FC = () => {
    const location = useLocation();
    
    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex justify-around items-center py-3 px-4">
                    <Link 
                        to="/" 
                        className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all duration-200 ${
                            isActive('/') 
                                ? 'text-slate-900' 
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive('/') ? 2.5 : 1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className={`text-xs font-medium ${isActive('/') ? 'font-semibold' : ''}`}>Home</span>
                    </Link>
                    
                    <Link 
                        to="/search" 
                        className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all duration-200 ${
                            isActive('/search') 
                                ? 'text-slate-900' 
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive('/search') ? 2.5 : 1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className={`text-xs font-medium ${isActive('/search') ? 'font-semibold' : ''}`}>Search</span>
                    </Link>
                    
                    <Link 
                        to="/profile" 
                        className={`flex flex-col items-center gap-1 px-6 py-2 rounded-xl transition-all duration-200 ${
                            isActive('/profile') 
                                ? 'text-slate-900' 
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isActive('/profile') ? 2.5 : 1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className={`text-xs font-medium ${isActive('/profile') ? 'font-semibold' : ''}`}>Profile</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default BottomNavigation;
