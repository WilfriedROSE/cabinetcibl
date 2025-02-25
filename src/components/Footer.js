import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="bg-customBeige text-customBrown font-coco py-6">
            <div className="flex justify-center space-x-6">
                <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-500 transition-colors">
                    <FaFacebookF />
                </Link>
                <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-pink-500 transition-colors">
                    <FaInstagram />
                </Link>
                <Link
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl hover:text-blue-400 transition-colors">
                    <FaTwitter />
                </Link>
            </div>
            <div className="mt-4 text-center text-L">
                <p>&copy; 2025 Cabinet CIBL Thérapie. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

