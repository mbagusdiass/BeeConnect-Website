import React from 'react';
import { useHome } from '../../../hooks/useHome';

export const HomeFilters: React.FC = () => {
    const { categories, selectedCategory, setSelectedCategory } = useHome();

    return (
        <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === category
                                ? 'bg-gray-900 text-white shadow-md'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};