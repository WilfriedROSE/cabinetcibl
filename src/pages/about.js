import React from 'react';
import { MainLayout } from '@/layout/MainLayout';
import Image from 'next/image';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';

export default function About() {
    return (
        <MainLayout title="Cabinet CIBL Thérapie" description="Découvrez notre parcours et nos spécialisations">
            <div className="bg-customBeige">
                <div className="flex flex-col items-center justify-center text-center bg-customBeige py-16">
                    <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center">
                        <Image src="/images/LogoCIBLsansarriereplan.png" width={300} height={300} priority alt="Logo du Cabinet CIBL Thérapie" className="rounded-full shadow-xl" />
                    </div>
                    <h1 className="text-extrabold mt-8 text-6xl sm:text-7xl md:text-8xl font-catchy text-customBrown text-center tracking-wide">
                        Cabinet CIBL Thérapie
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-gray-100 px-4 sm:px-8 md:px-16 py-10">
                    <h2 className="text-extrabold mt-10 text-3xl sm:text-4xl md:text-5xl font-catchy text-customBrown">
                        Notre Histoire
                    </h2>
                    <div className="max-w-4xl mx-auto mt-6 mb-14">
                        <p className="text-lg sm:text-xl text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide">
                            Nous sommes deux professionnelles intervenant auprès des familles depuis plus de 20 ans que nous accompagnons dans la compréhension et la résolution de leurs difficultés. Sensibles à une approche systémique, nous nous sommes formées durant quatre années auprès de l'Institut d'Etudes de la Famille de Lille et nous exerçons en co-intervention en qualité de  thérapeutes de famille et de couple.
                            Notre approche et notre formation nous permet de proposer des interventions sur tous les systèmes humains, la famille, le couple et les équipes professionnelles.                        </p>
                    </div>
                </div>
                <div className="bg-customBeige2 py-20">
                    <section className="text-center">
                        <h2 className="text-extrabold text-3xl sm:text-4xl md:text-5xl font-catchy text-customBrown mb-10">
                            Isabelle Becker Le Meteil
                        </h2>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                            <div>
                                <p className="text-lg sm:text-xl text-justify leading-relaxed font-cocoGothic text-customBrown mb-10">
                                    Diplômée de l'ENPJJ en 2002, j'exerce en tant qu'éducatrice spécialisée dans le champ du médico-social. Mon approche repose sur la psychologie systémique, la thérapie cognitive et comportementale (TCC) ainsi que des outils favorisant l’expression et la compréhension mutuelle.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Image src="/images/isa.jpg" width={450} height={300} alt="Photo de Isabelle Becker Le Meteil" className="rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </section>
                    <section className="mt-20 text-center">
                        <h2 className="text-extrabold text-3xl sm:text-4xl md:text-5xl font-catchy text-customBrown mb-10">
                            Caroline Leger
                        </h2>
                        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                            <div className="flex justify-center">
                                <Image src="/images/caro.jpg" width={450} height={300} alt="Photo de Caroline Leger" className="rounded-lg shadow-lg" />
                            </div>
                            <div>
                                <p className="text-lg sm:text-xl text-justify leading-relaxed font-cocoGothic text-customBrown mb-10">
                                    Également diplômée de l'ENPJJ, j’accompagne les couples et les familles dans la compréhension de leurs difficultés relationnelles. Ma méthode repose sur l’écoute active, la médiation conjugale et des outils thérapeutiques adaptés à chaque situation.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="bg-customBeige2 py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto p-4">
                        <Adress />
                        <Horaire />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};
