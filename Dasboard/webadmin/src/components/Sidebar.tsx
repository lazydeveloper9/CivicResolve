    'use client';

    import Link from 'next/link';
    import { usePathname } from 'next/navigation';
    import React from 'react';

    interface SidebarProps {
      isSidebarOpen: boolean;
      setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }

    const Icon: React.FC<{ path: string, className?: string }> = ({ path, className = "w-6 h-6" }) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d={path} clipRule="evenodd" />
      </svg>
    );

    const ICONS = {
        dashboard: "M5.625 3.75a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 100-5.25H5.625zM3.75 11.25a2.625 2.625 0 105.25 0 2.625 2.625 0 00-5.25 0zM15 11.25a2.625 2.625 0 105.25 0 2.625 2.625 0 00-5.25 0zM5.625 15a2.625 2.625 0 100 5.25h12.75a2.625 2.625 0 100-5.25H5.625z",
        issues: "M3.75 6.75h16.5v2.25H3.75V6.75zM3.75 12h16.5v2.25H3.75V12zM3.75 17.25h16.5V19.5H3.75v-2.25z",
        analytics: "M3 13.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v6a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-6zM8.25 9a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75V9zM13.5 4.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v15a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-15zM18.75 10.5a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v9a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75v-9z",
        logout: "M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m-3.375-3.375l-3-3m0 0l3-3m-3 3h12.75"
    };

    export function Sidebar({ isSidebarOpen, setSidebarOpen }: SidebarProps) {
        const pathname = usePathname();
        const navItems = [
            { href: '/', label: 'Dashboard', icon: ICONS.dashboard },
            { href: '/issues', label: 'Issues', icon: ICONS.issues },
            { href: '/analytics', label: 'Analytics', icon: ICONS.analytics },
        ];

        return (
            <aside className={`bg-gray-800 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative fixed inset-y-0 left-0 w-64 transition-transform duration-300 ease-in-out z-40 flex flex-col`}>
                <div className="flex items-center justify-center p-6 border-b border-gray-700">
                    <h1 className="text-2xl font-bold">Civic<span className="text-blue-400">Resolve</span></h1>
                </div>
                <nav className="flex-1 px-4 py-6">
                    {navItems.map(item => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => {
                                    if (window.innerWidth < 768) setSidebarOpen(false);
                                }}
                                className={`w-full flex items-center px-4 py-3 my-1 rounded-md transition-colors duration-200 ${isActive ? 'bg-blue-500' : 'hover:bg-gray-700'}`}
                            >
                                <Icon path={item.icon} className="w-5 h-5 mr-3" />
                                <span>{item.label}</span>
                            </Link>
                        );
                    })}
                </nav>
                <div className="p-4 border-t border-gray-700">
                     <button className="w-full flex items-center px-4 py-3 rounded-md hover:bg-gray-700">
                        <Icon path={ICONS.logout} className="w-5 h-5 mr-3" />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>
        );
    }
    
