    'use client';

    import { usePathname } from "next/navigation";
    import React from 'react';

    interface HeaderProps {
        setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }

    const Icon: React.FC<{ path: string, className?: string }> = ({ path, className = "w-6 h-6" }) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path fillRule="evenodd" d={path} clipRule="evenodd" />
        </svg>
    );

    export function Header({ setSidebarOpen }: HeaderProps) {
        const pathname = usePathname();
        const title = pathname === '/' ? 'Dashboard' : pathname.charAt(1).toUpperCase() + pathname.slice(2);

        return (
            <header className="bg-white shadow-sm p-4 flex justify-between items-center">
                <button onClick={() => setSidebarOpen(true)} className="md:hidden text-gray-500">
                    <Icon path="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </button>
                <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
                <div>
                    <img src={`https://placehold.co/40x40/E2E8F0/4A5568?text=A`} alt="Admin" className="w-10 h-10 rounded-full" />
                </div>
            </header>
        );
    }
    
