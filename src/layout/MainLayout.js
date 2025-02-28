import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { DynamicHead } from '@/components/DynamicHead';
import React from 'react';

export const MainLayout = ({children, title, description}) => {
    return (
        <>
        <DynamicHead title={title} description={description} />
        <Navbar />
            <main>{children}</main>
        <Footer />
        </>
    )
}
