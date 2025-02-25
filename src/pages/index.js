import ServiceCard from '@/components/ServiceCard';
import About from '@/components/About';
import Testimonials from '@/components/Avis';
import ContactForm from '@/components/ContactForm';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';
import React from 'react';
import { MainLayout } from '@/layout/MainLayout';


const services = [
  {
    title: 'Thérapie de Famille',
    description: `Avec notre accompagnement, vous pourrez exprimer vos modes de communication...`,
    image: '/images/fille.jpg',
  },
  {
    title: "Accompagnement d'équipes",
    description: `Nous vous accueillons dans un espace d’échange serein...`,
    image: '/images/therapiedegroupe.jpg',
  },
  {
    title: 'Thérapie de Couple',
    description: `En thérapie de couple, nous vous accueillons dans un espace bienveillant...`,
    image: '/images/cabinet.webp',
  },
];

export default function page() {

  return (
    <MainLayout title="Accueil" description="Bienvenue sur notre site" >
      <div className="bg-customBeige">
        <div className="min-h-full p-10 flex flex-col items-center justify-center text-center bg-customBeige">
          <h1 className="text-extrabold text-9xl font-catchy text-customBrown text-center tracking-wide">Cabinet CIBL</h1>
          <h2 className="text-extrabold mt-10 text-5xl font-catchy text-customBrown text-center tracking-wide">Thérapie de Couples</h2>
          <h2 className="text-extrabold text-5xl font-catchy text-customBrown text-center tracking-wide">Thérapie de Familles</h2>
          <h2 className="text-extrabold text-5xl font-catchy text-customBrown text-center tracking-wide">Accompagnement d'équipes</h2>
          <li>
            <a href="En Savoir Plus" className="bg-white text-bold text-xl font-coco text-customBrown text-center p-3 mt-10 mb-40 block">En savoir plus</a>
          </li>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-customBeige2">
          <p className="ml-40 mt-10 mb-10 text-xl font-catchy text-customDarkBrown text-center tracking-wide mr-40">Nous vous accompagnons avec bienveillance pour mieux comprendre vos relations familiales et de couple. Dans un espace d’écoute et d’échange, nous explorons ensemble votre histoire, vos interactions et vos besoins afin de mettre en lumière vos ressources et vous aider à avancer vers des relations plus apaisées et épanouissantes.</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-customBeige">
          <h2 className="text-extrabold mt-10 text-7xl font-catchy text-customBrown text-center tracking-wide">Nos Thérapies</h2>
        </div>
        <div className="mt-10 mb-10 max-w-6xl mx-auto px-6 py-6 md:px-12 grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="items-center justify-center text-center bg-customBeige2">
          <About />
        </div>
        <div className="items-center justify-center text-center bg-customBeige2">
          <Testimonials />
        </div>
        <div className="flex flex-col items-center justify-center text-center bg-customBeige2 p-20">
          <h1 className="text-extrabold text-7xl font-catchy text-customBrown text-center tracking-wide">Contactez-Nous</h1>
          <p className="text-2xl mt-5 mb-10 font-coco text-center text-customBrown">Vous avez des questions ou vous souhaitez prendre Rendez-vous ?</p>
          <ContactForm />
        </div>
        <div className="justify-center items-center bg-customBeige">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-10xl p-4">
            <Adress />
            <Horaire />
          </div>
        </div>
        <div className="mt-10 flex flex-col">
        </div>
      </div>
    </MainLayout>
  );
};
