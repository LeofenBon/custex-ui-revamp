"use client";

import { useTheme } from "next-themes";
export default function SideBar() {
    const {resolvedTheme, setTheme} = useTheme()
    return(
        <aside className="sidebar fixed left-0 sidebar-mobile top-[72.75px] h-[715px] w-64 max-sm:fixed max-sm:-translate-x-full text-black dark:text-white 
        bg-primaryLight dark:bg-primaryDark">
            <section className="sidebar-content">
            <nav className="menu rounded-md">
                <section className="menu-section">
                    <ul className="menu-items">
                        <li className="menu-item text-black dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-lg">General</span>
                        </li>

                        <li className="menu-item text-black dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="text-lg">Teams</span>
                        </li>
                        <li className="menu-item text-black dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <span className="text-lg">Billing</span>
                        </li>
                        <li>
                            <input type="checkbox" id="menu-1" className="menu-toggle" />
                            <label className="menu-item justify-between" htmlFor="menu-1">
                                <div className="flex gap-2 text-black dark:text-white">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                    <span className="text-lg">Account</span>
                                </div>

                                <span className="menu-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </span>
                            </label>

                            <div className="menu-item-collapse">
                                <div className="min-h-0">
                                    <label className="menu-item text-black dark:text-white menu-item-disabled ml-6">Change Email</label>
                                    <label className="menu-item text-black dark:text-white ml-6">Profile</label>
                                    <label className="menu-item text-black dark:text-white ml-6">Change Password</label>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <div className="divider my-0"></div>
            </nav>
        </section>

    </aside>
    )
}