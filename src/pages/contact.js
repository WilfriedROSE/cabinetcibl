import React from 'react';
import { MainLayout } from '@/layout/MainLayout';
import ContactForm from '@/components/ContactForm';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const GoogleMaps = dynamic(() => import('@/components/GoogleMap'), {
    ssr: false,
    loading: () => <p className="text-center text-customBrown">Chargement de la carte...</p>,
});

export default function Contact() {
    return (
        <MainLayout title="Nous Contacter" description="Bienvenue sur la page Nous contacter de notre site">
            <div className="bg-customBeige">
                <div className="relative w-full h-screen">
                    <div className="absolute inset-0 bg-customDarkbrown opacity-70">
                        <Image
                            src="/images/bureaubeige.jpg"
                            layout="fill"
                            objectFit="cover"
                            quality={90}
                            priority
                            alt="Bureau de thérapie chaleureux avec des fauteuils et une ambiance apaisante"
                            className="brightness-75"
                        />
                    </div>
                    <div className="min-h-full p-10 flex flex-col items-center justify-center text-center bg-customBeige">
                        <h1 className="text-extrabold mb-20 sm:mb-40 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-catchy text-customDarkBrown text-center tracking-wide">
                            Nous contacter
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="google-map-container w-full max-w-6xl mx-auto px-6 py-6 md:px-12" role="region" aria-label="Carte interactive des emplacements de notre cabinet">
                        <GoogleMaps />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-customBeige p-10 sm:p-16 lg:p-20">
                    <h2 className="text-extrabold text-5xl sm:text-6xl md:text-7xl font-catchy text-customBrown text-center tracking-wide">
                        Contactez-Nous
                    </h2>
                    <p className="text-xl sm:text-2xl mt-5 mb-8 sm:mb-10 font-coco text-center text-customBrown">
                        Vous avez des questions ou souhaitez prendre rendez-vous ?
                    </p>
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
