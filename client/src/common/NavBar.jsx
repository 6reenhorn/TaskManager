import { useState } from 'react';

export const NavBar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="relative w-full">
            <div className="navbar w-full py-5 px-4 pr-7 flex justify-between items-center">
                <div className="cursor-pointer flex justify-between items-center space-x-2 w-[23%]">
                    <svg onClick={toggleSidebar} width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <path d="M4 9C3.58579 9 3.25 9.33579 3.25 9.75C3.25 10.1642 3.58579 10.5 4 10.5L20 10.5C20.4142 10.5 20.75 10.1642 20.75 9.75C20.75 9.33579 20.4142 9 20 9L4 9Z" fill="#343C54"/>
                        <path d="M4 18C3.58579 18 3.25 18.3358 3.25 18.75C3.25 19.1642 3.58579 19.5 4 19.5L20 19.5C20.4142 19.5 20.75 19.1642 20.75 18.75C20.75 18.3358 20.4142 18 20 18L4 18Z" fill="#343C54"/>
                        <g opacity="0.4">
                            <path d="M4 4.5C3.58579 4.5 3.25 4.83579 3.25 5.25C3.25 5.66421 3.58579 6 4 6L15 6C15.4142 6 15.75 5.66421 15.75 5.25C15.75 4.83579 15.4142 4.5 15 4.5H4Z" fill="#343C54"/>
                            <path d="M3.25 14.25C3.25 13.8358 3.58579 13.5 4 13.5L15 13.5C15.4142 13.5 15.75 13.8358 15.75 14.25C15.75 14.6642 15.4142 15 15 15L4 15C3.58579 15 3.25 14.6642 3.25 14.25Z" fill="#343C54"/>
                        </g>
                    </svg>
                    <div className='text-[13px] font-[550] text-[#343C54] flex items-center border-l-[2px] border-r-[2px] rounded-tl-[3px] rounded-br-[3px] px-2'>
                        <svg width="20px" height="20px" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path>
                        </svg>
                        <button className='navbar-add-task-btn py-[2px] pr-1'>Add task</button>
                    </div>
                </div>
                <div>
                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>
                        <path d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
                    </svg>
                </div>
            </div>

            {/* SideBar */}
            <div className={`fixed top-18 left-0 h-full w-80 bg-transparent shadow-lg transform transition-transform duration-300 z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="user-section p-5 font-semibold text-[15px] flex items-center space-x-3">
                    <div className='user-pfp'></div>
                    <p>John Cyril Espina</p>
                </div>
                <div className='flex flex-col justify-between h-[85%]'>
                    <ul className="p-5 space-y-4 text-[14px]">
                        <li>Dashboard</li>
                        <li>Tasks</li>
                    </ul>
                    <div className="p-5 space-y-4 text-[15px] flex justify-end">
                        <button className='border-1 px-2 rounded-sm bg-transparent text-red-600'>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
