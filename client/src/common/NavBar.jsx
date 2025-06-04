import { useState } from 'react';

export const NavBar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="relative w-full">
            <div className="navbar w-full py-5 px-4 flex justify-between items-center">
                <div onClick={toggleSidebar} className="cursor-pointer">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                        <path d="M4 9C3.58579 9 3.25 9.33579 3.25 9.75C3.25 10.1642 3.58579 10.5 4 10.5L20 10.5C20.4142 10.5 20.75 10.1642 20.75 9.75C20.75 9.33579 20.4142 9 20 9L4 9Z" fill="#343C54"/>
                        <path d="M4 18C3.58579 18 3.25 18.3358 3.25 18.75C3.25 19.1642 3.58579 19.5 4 19.5L20 19.5C20.4142 19.5 20.75 19.1642 20.75 18.75C20.75 18.3358 20.4142 18 20 18L4 18Z" fill="#343C54"/>
                        <g opacity="0.4">
                            <path d="M4 4.5C3.58579 4.5 3.25 4.83579 3.25 5.25C3.25 5.66421 3.58579 6 4 6L15 6C15.4142 6 15.75 5.66421 15.75 5.25C15.75 4.83579 15.4142 4.5 15 4.5H4Z" fill="#343C54"/>
                            <path d="M3.25 14.25C3.25 13.8358 3.58579 13.5 4 13.5L15 13.5C15.4142 13.5 15.75 13.8358 15.75 14.25C15.75 14.6642 15.4142 15 15 15L4 15C3.58579 15 3.25 14.6642 3.25 14.25Z" fill="#343C54"/>
                        </g>
                    </svg>
                </div>
            </div>
            {/* Sidebar */}
            <div className={`fixed top-20 left-0 h-full w-64 bg-transparent shadow-lg transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-5 font-bold text-lg border-b">Sidebar Menu</div>
                <ul className="p-5 space-y-4">
                    <li>Dashboard</li>
                    <li>Tasks</li>
                    <li>Preference</li>
                </ul>
            </div>
        </div>
    );
};
