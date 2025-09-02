    'use client';

    import React, { useState } from 'react';
    import { Sidebar } from '@/components/Sidebar';
    import { Header } from '@/components/Header';
    import "./globals.css";

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

      return (
        <html lang="en">
          <body>
            <div className="h-screen flex bg-gray-100">
              <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
              {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setSidebarOpen(false)}></div>}
              <div className="flex-1 flex flex-col overflow-hidden">
                <Header setSidebarOpen={setSidebarOpen} />
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                  {children}
                </main>
              </div>
            </div>
          </body>
        </html>
      );
    }
    
