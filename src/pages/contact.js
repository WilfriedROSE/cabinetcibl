import React from 'react';
import { MainLayout } from '@/layout/MainLayout';
import ContactForm from '@/components/ContactForm';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';
import Image from 'next/image';

export default function Contact() {
    return (
        <MainLayout title="Nous Contacter" description="Bienvenue sur notre site">
            <div className="bg-customBeige">

                <div className="relative w-full h-screen">
                    <div className="absolute inset-0 bg-customDarkbrown opacity-70">
                        <Image
                            src="/images/bureaubeige.jpg"
                            layout="fill"
                            objectFit="cover"
                            quality={90}
                            alt="photo de bureau de thérapie"
                            className="brightness-75"
                        />
                    </div>
                    <div className="min-h-full p-10 flex flex-col items-center justify-center text-center bg-customBeige">
                        <h1 className="text-extrabold mb-20 sm:mb-40 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-catchy text-customDarkBrown text-center tracking-wide">Nous contacter</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-customBeige p-10 sm:p-16 lg:p-20">
                    <h1 className="text-extrabold text-5xl sm:text-6xl md:text-7xl font-catchy text-customBrown text-center tracking-wide">Contactez-Nous</h1>
                    <p className="text-xl sm:text-2xl mt-5 mb-8 sm:mb-10 font-coco text-center text-customBrown">Vous avez des questions ou vous souhaitez prendre Rendez-vous ?</p>
                    <ContactForm />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-10xl p-4 bg-customBeige">
                    <Adress />
                    <Horaire />
                </div>
            </div>
        </MainLayout>
    );
};
