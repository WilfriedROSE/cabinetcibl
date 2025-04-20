import ServiceCard from '@/components/ServiceCard';
import About from '@/components/About';
import Testimonials from '@/components/Avis';
import ContactForm from '@/components/ContactForm';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';
import React from 'react';
import { MainLayout } from '@/layout/MainLayout';
import Link from 'next/link';


const services = [
  {
    title: 'Thérapie de Famille',
    description: `Avec notre accompagnement, vous pourrez exprimer vos modes de communication...`,
    image: '/images/fille.jpg',
    link: '/nostherapies#famille',
  },
  {
    title: "Accompagnement d'équipes",
    description: `Nous vous accueillons dans un espace d’échange serein...`,
    image: '/images/therapiedegroupe.jpg',
    link: '/nostherapies#equipe',
  },
  {
    title: 'Thérapie de Couple',
    description: `En thérapie de couple, nous vous accueillons dans un espace bienveillant...`,
    image: '/images/cabinet.webp',
    link: '/nostherapies#couple',
  },
];


export default function HomePage() {
  return (
    <MainLayout title="Accueil" description="Bienvenue sur la page principale de notre site">
      <div className="bg-customBeige">
        <div className="min-h-full p-4 md:p-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-9xl font-catchy font-extrabold text-customBrown tracking-wide">
            Cabinet CIBL
          </h1>
          <h2 className="mt-6 text-2xl md:text-4xl lg:text-5xl font-catchy text-customBrown">
            Thérapie de Couples
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-catchy text-customBrown">
            Thérapie de Familles
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-catchy text-customBrown">
            Accompagnement d'équipes
          </h2>
          <Link href="/nostherapies" className="mt-10 mb-10">
            <span className="bg-white text-xl font-coco text-customBrown px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition cursor-pointer">
              En savoir plus
            </span>
          </Link>
        </div>
        <div className="flex flex-col items-center text-center p-4 md:p-10 bg-customBeige2">
          <p className="mt-10 mb-10 text-lg md:text-xl lg:text-2xl font-catchy text-customDarkBrown max-w-4xl">
            Nous vous accompagnons avec bienveillance pour mieux comprendre vos relations familiales et de couple.
            Dans un espace d’écoute et d’échange, nous explorons ensemble votre histoire, vos interactions et vos besoins
            afin de mettre en lumière vos ressources et vous aider à avancer vers des relations plus apaisées et épanouissantes.
          </p>
        </div>
        <div className="flex flex-col items-center text-center p-4 md:p-10">
          <h2 className="mt-10 text-4xl md:text-6xl font-catchy font-extrabold text-customBrown tracking-wide">
            Nos Thérapies
          </h2>
        </div>
        <div className="mt-10 mb-10 max-w-6xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="bg-customBeige2 p-4 md:p-10">
          <About />
        </div>
        <div className="bg-customBeige2 p-4 md:p-10">
          <Testimonials />
        </div>
        <div className="flex flex-col items-center text-center bg-customBeige2 p-10">
          <h1 className="text-4xl md:text-6xl font-catchy font-extrabold text-customBrown">
            Contactez-Nous
          </h1>
          <p className="text-lg md:text-2xl mt-5 mb-10 font-coco text-customBrown">
            Vous avez des questions ou vous souhaitez prendre Rendez-vous ?
          </p>
          <ContactForm />
        </div>
        <div className="bg-customBeige p-4 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <Adress />
            <Horaire />
          </div>
        </div>

      </div>
    </MainLayout>
  );
};
