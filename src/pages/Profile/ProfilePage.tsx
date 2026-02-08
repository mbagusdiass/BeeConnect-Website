import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../components/BottomNavigation';

const ProfilePage: React.FC = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const orderStatuses = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            ),
            label: 'Not paid yet'
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
            ),
            label: 'Packed'
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
            ),
            label: 'Delivered'
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            label: 'History'
        }
    ];

    const menuItems = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            ),
            label: 'Wishlist',
            onClick: () => { }
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            label: 'Shipping Address',
            onClick: () => { }
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            label: 'Help',
            onClick: () => { }
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-24">
            {/* Header with Settings */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
                <div className="max-w-screen-xl mx-auto px-4 lg:px-8">
                    <div className="flex items-center justify-end h-16 lg:h-20">
                        <button className="p-3 hover:bg-gray-100 rounded-full transition-colors duration-200">
                            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-screen-xl mx-auto px-4 lg:px-8 py-6">
                {/* Profile Info */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 bg-slate-800 rounded-full flex items-center justify-center text-white text-2xl lg:text-3xl font-bold shadow-lg">
                        {user?.name?.charAt(0).toUpperCase() || 'S'}
                    </div>
                    <div>
                        <h1 className="text-xl lg:text-2xl font-bold text-slate-900">{user?.name || 'Nama user'}</h1>
                        <p className="text-gray-500">Seller/Buyer</p>
                    </div>
                </div>

                {/* My Orders Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 lg:p-6 mb-6">
                    <h2 className="font-semibold text-slate-900 mb-5">My Orders</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {orderStatuses.map((status, index) => (
                            <button
                                key={index}
                                className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                            >
                                <div className="text-gray-600 group-hover:text-slate-900 transition-colors">
                                    {status.icon}
                                </div>
                                <span className="text-xs text-gray-600 text-center leading-tight group-hover:text-slate-900 transition-colors">
                                    {status.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Items */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
                    {menuItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={item.onClick}
                            className="w-full flex items-center justify-between p-4 lg:p-5 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-50 last:border-b-0"
                        >
                            <div className="flex items-center gap-4">
                                <div className="text-gray-600">
                                    {item.icon}
                                </div>
                                <span className="font-medium text-slate-900">{item.label}</span>
                            </div>
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    ))}
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center py-4 text-red-500 font-semibold hover:text-red-600 transition-colors duration-200"
                >
                    Log Out
                </button>
            </main>

            <BottomNavigation />
        </div>
    );
};

export default ProfilePage;