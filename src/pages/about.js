import React from 'react'
import { MainLayout } from '@/layout/MainLayout';
import Image from 'next/image';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';

export default function about() {
    return (
        <MainLayout title="A Propos" description="Bienvenue sur notre site">
            <div className="bg-customBeige">
                <div className="min-h-full p-10 flex flex-col items-center justify-center text-center bg-customBeige">
                    <h1 className="text-extrabold my-20 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-catchy text-customBrown text-center tracking-wide">A PROPOS</h1>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-4 sm:px-8 md:px-16">
                    <p className="text-extrabold mt-20 text-4xl sm:text-5xl md:text-6xl font-catchy text-customBrown text-center tracking-wide">Nous</p>
                    <div className="max-w-4xl mx-auto mt-10 mb-20">
                        <p className="text-l sm:text-xl text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide">
                            Nous sommes depuis janvier 2021, inscrites dans un parcours de formation à l’approche systémique, à la thérapie familiale et de couple auprès de l’Institut d’Études de la Famille de Lille. Ces années de formation sont validées par une certification et l’inscription à l’EFTA-TIC (Chambre Européenne des Instituts de Formation en Thérapie Familiale).
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-customBeige2 py-20">
                    <p className="text-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-catchy text-customBrown text-center tracking-wide mb-10">Isabelle Becker Le Meteil</p>
                    <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4">
                        <div>
                            <p className="text-l sm:text-xl text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide mb-10">
                                Fort d’une formation à l’École Nationale de Protection Judiciaire de la Jeunesse (ENPJJ), [Nom du Thérapeute] accompagne les couples dans la compréhension et la résolution de leurs conflits. Grâce à une approche bienveillante et structurée, il/elle aide les partenaires à retrouver un dialogue apaisé et à renforcer leur lien affectif.<br />
                                Spécialisé(e) dans l’écoute active et la médiation conjugale, [Nom du Thérapeute] intervient sur des problématiques variées : communication, gestion des émotions, crises relationnelles, parentalité, ou encore reconstruction après une épreuve difficile. Son approche repose sur des outils issus de la psychologie systémique, de la thérapie cognitive et comportementale (TCC) ainsi que de techniques spécifiques favorisant l’expression et la compréhension mutuelle.<br />
                                Chaque accompagnement est adapté aux besoins du couple, dans un cadre neutre et sécurisant, favorisant l’épanouissement de chacun. Que vous souhaitiez prévenir les tensions, surmonter une difficulté passagère ou reconstruire une relation en crise, [Nom du Thérapeute] vous guide vers des solutions concrètes et durables.
                            </p>
                            <ul className="ml-5 list-disc mb-10 text-l sm:text-xl text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                                <li>Mon parcours :</li>
                                <li>Diplômée de l'ENPJJ en 2002 et exerçant en tant qu'éducatrice dans le champ du médico-social.</li>
                            </ul>
                        </div>
                        <div className="flex justify-center">
                            <Image src="/images/isa.jpg" width={450} height={300} alt="photo de Isabelle Becker Le Meteil" className="rounded-lg shadow-lg" />
                        </div>
                    </div>

                    <p className="text-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-catchy text-customBrown text-center tracking-wide mb-10">Caroline Leger</p>
                    <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 px-4">
                        <div className="flex justify-center">
                            <Image src="/images/caro.jpg" width={450} height={300} alt="photo de Caroline Leger" className="rounded-lg shadow-lg" />
                        </div>
                        <div>
                            <p className="text-l sm:text-xl text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide mb-10">
                                Fort d’une formation à l’École Nationale de Protection Judiciaire de la Jeunesse (ENPJJ), [Nom du Thérapeute] accompagne les couples dans la compréhension et la résolution de leurs conflits. Grâce à une approche bienveillante et structurée, il/elle aide les partenaires à retrouver un dialogue apaisé et à renforcer leur lien affectif.<br />
                                Spécialisé(e) dans l’écoute active et la médiation conjugale, [Nom du Thérapeute] intervient sur des problématiques variées : communication, gestion des émotions, crises relationnelles, parentalité, ou encore reconstruction après une épreuve difficile. Son approche repose sur des outils issus de la psychologie systémique, de la thérapie cognitive et comportementale (TCC) ainsi que de techniques spécifiques favorisant l’expression et la compréhension mutuelle.<br />
                                Chaque accompagnement est adapté aux besoins du couple, dans un cadre neutre et sécurisant, favorisant l’épanouissement de chacun. Que vous souhaitiez prévenir les tensions, surmonter une difficulté passagère ou reconstruire une relation en crise, [Nom du Thérapeute] vous guide vers des solutions concrètes et durables.
                            </p>
                            <ul className="ml-5 list-disc mb-10 text-l sm:text-xl text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                                <li>Mon parcours :</li>
                                <li>Diplômée de l'ENPJJ en 2002 et exerçant en tant qu'éducatrice dans le champ du médico-social.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center bg-customBeige2">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 max-w-10xl p-4 bg-customBeige">
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
