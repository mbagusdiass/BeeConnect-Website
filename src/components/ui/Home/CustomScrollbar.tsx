import React from 'react';

interface CustomScrollbarProps {
    children: React.ReactNode;
    className?: string;
}

export const CustomScrollbar: React.FC<CustomScrollbarProps> = ({
    children,
    className = ''
}) => {
    return (
        <div className={`overflow-auto ${className}`}>
            <style>
                {`
          ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
          }
          ::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 3px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
            </style>
            {children}
        </div>
    );
};