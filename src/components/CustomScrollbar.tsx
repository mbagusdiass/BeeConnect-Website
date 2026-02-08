import React from 'react';

interface CustomScrollbarProps {
    children: React.ReactNode;
    className?: string;
}

const CustomScrollbar: React.FC<CustomScrollbarProps> = ({ children, className = '' }) => {
    return (
        <div className={`overflow-y-auto ${className}`}>
            <style>
                {`
          .overflow-y-auto::-webkit-scrollbar {
            width: 4px;
          }
          .overflow-y-auto::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 4px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          .overflow-y-auto::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
            </style>
            {children}
        </div>
    );
};

export default CustomScrollbar;