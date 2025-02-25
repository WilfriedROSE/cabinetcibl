import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { DynamicHead } from '@/components/DynamicHead';
import React from 'react';

export const MainLayout = ({children, title, description}) => {
    return (
        <>
        {/* 🏷️ Gestion dynamique du titre et de la description */}
        <DynamicHead title={title} description={description} />
        {/* 🏗️ Layout global */}
        <Navbar />
            <main>{children}</main>
        <Footer />
        </>
    )
}
