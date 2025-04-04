import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="border-gray-50 bg-customBeige relative z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center space-x-3">
                    <Image src="/images/LogoCIBLsansarriereplan.png" width={60} height={60} alt="Logo" />
                </Link>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
                    aria-label="Ouvrir le menu">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
                    <ul className="font-bold flex flex-col p-4 md:flex-row md:space-x-8 md:p-0 md:mt-0">
                        <li>
                            <Link href="/" className="block py-2 px-3 text-customBrown">
                                Accueil
                            </Link>
                        </li>
                        <li className="relative group">
                            <div className="flex items-center">
                                <Link
                                    href="/nostherapies"
                                    className="py-2 px-3 text-customBrown w-full md:w-auto"
                                    onClick={() => setIsDropdownOpen(false)}
                                >
                                    Nos Thérapies
                                </Link>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsDropdownOpen(!isDropdownOpen);
                                    }}
                                    className="px-2"
                                >
                                    <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? "rotate-180" : "rotate-0"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>
                            <ul className={`${isDropdownOpen ? "block" : "hidden"} md:absolute left-0 mt-2 bg-customBeige shadow-lg rounded-md w-48 md:group-hover:block`}>
                                <li>
                                    <Link href="/nostherapies#couple" className="block py-2 px-4 text-customBrown hover:bg-gray-200">
                                        Thérapie de Couples
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/nostherapies#famille" className="block py-2 px-4 text-customBrown hover:bg-gray-200">
                                        Thérapie de Famille
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/nostherapies#equipe" className="block py-2 px-4 text-customBrown hover:bg-gray-200">
                                        Accompagnement d'équipes
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 px-3 text-customBrown">
                                À Propos
                            </Link>
                        </li>
                        <li>
                            <Link href="/tarifs" className="block py-2 px-3 text-customBrown">
                                Nos Tarifs
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 px-3 text-customBrown">
                                Nous Contacter
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
