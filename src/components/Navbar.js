import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="border-gray-50 bg-customBeige">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="nostherapies.js" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src="/images/LogoCIBLsansarriereplan.png" width={60} height={60} alt="Logo" />
                </Link>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg width="100" height="100">
                        <line x1="10" y1="10" x2="90" y2="90" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
                <div id="navbar-default" className="hidden w-full md:block md:w-auto bg-dark">
                    <ul className="font-bold flex flex-col p-4 md:p-0 mt-4 rounded-sm md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-customBrown rounded-sm md:bg-transparent md:text-customBrown md:p-0 dark:text-gray md:dark:text-customBrown-700" aria-current="page">Accueil</Link>
                        </li>
                        <li className="relative group">
                            <Link href="/nostherapies" className="block py-2 px-3 text-customBrown rounded-sm hover:bg-gray-100 md:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent">
                                Nos Thérapies
                            </Link>
                            <ul className="absolute left-0 hidden mt-2 space-y-2 bg-customBeige text-customBrown group-hover:flex">
                                <li>
                                    <Link href="/Thérapie de Couples" className="block py-2 px-4 font-thin hover:bg-gray-200">Thérapie de Couples</Link>
                                </li>
                                <li>
                                    <Link href="/Thérapie de Familles" className="block py-2 px-4 font-thin hover:bg-gray-200">Thérapie de Familles</Link>
                                </li>
                                <li>
                                    <Link href="/Accompagnement d'équipes" className="block py-2 px-4 font-thin hover:bg-gray-200">Accompagnement d'équipes</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 px-3 text-customBrown rounded-sm hover:bg-gray-100 md:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent">A Propos </Link>
                        </li>
                        <li>
                            <Link href="/tarifs" className="block py-2 px-3 text-customBrown rounded-sm hover:bg-gray-100 md:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent">Nos Tarifs</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 px-3 text-customBrown rounded-sm hover:bg-gray-100 md:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent">Nous Contacter</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
