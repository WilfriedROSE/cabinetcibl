import Image from 'next/image';
import React from 'react';
import { MainLayout } from '@/layout/MainLayout';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';

export default function Nostherapies() {
    return (
        <MainLayout title="Nos Thérapies" description="Bienvenue sur la page Nos Thérapies de notre site">
            <div className="bg-customBeige">
                <div className="min-h-full p-10 flex flex-col items-center justify-center text-center bg-customBeige">
                    <h1 className="text-extrabold mt-20 sm:mt-40 text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-catchy text-customBrown text-center tracking-wide">
                        NOS THERAPIES
                    </h1>
                    <div className="w-full sm:w-1/2 md:w-1/4 mb-20">
                        <h2 className="py-2 bg-white text-extrabold mt-10 text-l font-CocoGothic text-customBrown text-center tracking-wide">
                            THERAPIE DE COUPLES
                        </h2>
                        <h2 className="py-2 bg-white text-extrabold mt-5 text-l font-CocoGothic text-customBrown text-center tracking-wide">
                            THERAPIE DE FAMILLES
                        </h2>
                        <h2 className="py-2 bg-white text-extrabold mt-5 text-l font-CocoGothic text-customBrown text-center tracking-wide">
                            ACCOMPAGNEMENT D'EQUIPES
                        </h2>
                    </div>
                </div>
                <section className="flex flex-col items-center justify-center text-center bg-gray-100 py-16 sm:py-20">
                    <p className="text-extrabold text-3xl sm:text-4xl md:text-5xl font-catchy text-customBrown tracking-wide">
                        Nos Modalités d’intervention
                    </p>
                    <div className="mx-auto px-6">
                        <p className="my-6 sm:my-8 text-base sm:text-lg text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide">
                            Nos interventions consistent en des entretiens familiaux ou entretien de couple. Cet accompagnement à la réflexion du système en entier évite la juxtaposition de suivis individuels et un « cloisonnement » des prises en charge. Il s’agit également au travers de cette intervention de garantir une participation active de la famille.
                        </p>
                        <p className="mt-8 sm:mt-10 mb-4 text-base sm:text-lg text-justify font-medium leading-relaxed font-cocoGothic text-customBrown tracking-wide">
                            Nous proposons à nos patients :
                        </p>
                        <ul className="list-disc mx-6 sm:mx-12 md:mx-48 text-base sm:text-lg text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                            <li>De les recevoir dans un cadre d’interventions structurées, rassurantes et favorisant l’émergence d’échanges dans lesquels chacun des membres de la famille disposera d’un espace.</li>
                            <li>De faire émerger les demandes des familles, des couples, et d’organiser avec eux les objectifs à mener.</li>
                            <li>De travailler sur les modalités de communication verbales et non verbales.</li>
                            <li>De favoriser l’expression émotionnelle des différents participants.</li>
                            <li>D’évaluer la créativité du système famille ou couple avec les intervenants professionnels (souplesse du système, ressources en présence...) afin de les rendre visibles.</li>
                            <li>Construire conjointement avec la famille ou le couple, des modalités de fonctionnement différentes pouvant répondre à leurs besoins.</li>
                        </ul>
                    </div>
                </section>
                <section id="famille" className="flex flex-col items-center justify-center text-center bg-customBeige2 py-16 sm:py-20">
                    <p className="text-extrabold text-3xl sm:text-4xl md:text-5xl font-catchy text-customBrown tracking-wide">
                        Thérapie de Famille
                    </p>
                    <div className="mx-auto px-6">
                            <p className="my-6 sm:my-8 text-base sm:text-lg text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide">
                                Avec notre accompagnement, vous pourrez exprimer vos modes de communication, prendre conscience de votre environnement et identifier les ressources et compétences sur lesquelles vous pouvez vous appuyer. Nous chercherons à comprendre comment vos interactions influencent certaines difficultés, afin d’accompagner les changements dont vous avez besoin.
                            </p>
                            <ul className="list-disc mx-6 sm:mx-12 md:mx-48 mb-10 text-base sm:text-lg text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                                <li>Votre famille rencontre des problèmes relationnels et des difficultés dans la communication.</li>
                                <li>Votre famille traverse une période de "crise de vie" ou de "transitions familiale" ( divorce, remariage, recomposition familiale, arrivée d'un enfant ou d'un nouveau membre dans la famille, départ d'un ou des enfants...).</li>
                                <li>Votre famille vit un évènement traumatique ( perte et deuil d'un membre de la famille, maladie, handicap, troubles psychiques affectant un ou plusieurs membres de la famille).</li>
                                <li>Votre famille est confrontée à des difficultés de  santé mentale et/ou de dépendance ( trouble alimentaire, addiction, anxiété, troubles dépressifs...).</li>
                                <li>Vous souhaitez mener une réflexion sur votre parentalité et vos modalités d'éducation ( conflits liés aux choix éducatifs, sentiment d'incompréhension générationnelle...).</li>
                            </ul>
                        <div>
                            <Image src="/images/fille.jpg" width={600} height={500} alt="photo de thérapie de Famille" className="rounded-lg shadow-lg w-full" priority />
                        </div>
                    </div>
                </section>
                <section id="couple" className="flex flex-col items-center justify-center text-center bg-customBeige2 py-16 sm:py-20">
                    <p className="text-extrabold text-3xl sm:text-4xl md:text-5xl font-catchy text-customBrown tracking-wide">
                        Thérapie de Couple
                    </p>
                    <div className="mx-auto px-6">
                            <p className="my-6 sm:my-8 text-base sm:text-lg text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide">
                                En thérapie de couple, nous vous accueillons dans un espace bienveillant où votre parole peut s’exprimer librement. Ensemble, nous prenons le temps de comprendre votre demande et d’analyser les dynamiques qui façonnent votre relation. À travers nos échanges, vous pourrez explorer votre mode de communication, identifier vos interactions et mieux comprendre ce qui influence votre couple. Notre rôle est de vous accompagner dans vos demandes de changement, en vous aidant à ajuster votre manière d’interagir afin de retrouver un équilibre plus serein et harmonieux dans votre relation.
                            </p>
                            <ul className="list-disc mx-6 sm:mx-12 md:mx-48 mb-10 text-base sm:text-lg text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                                <li>Accueillir le couple et sa demande.</li>
                                <li>Offrir un espace de parole et d’élaboration avec pour objectif de mesurer les interactions relationnelles.</li>
                                <li>Explorer le contexte et l’environnement du couple, son histoire, sa construction...</li>
                                <li>Accompagner les demandes de changement en terme d’interactions relationnelles.</li>
                            </ul>
                        <div>
                            <Image src="/images/cabinet.webp" width={600} height={500} alt="photo de Thérapie de couple" className="rounded-lg shadow-lg w-full" priority />
                        </div>
                    </div>
                </section>
                <section id="equipe" className="flex flex-col items-center justify-center text-center bg-customBeige2 py-16 sm:py-20">
                    <p className="text-extrabold text-3xl sm:text-4xl md:text-5xl font-catchy text-customBrown tracking-wide">
                        Accompagnement d'équipes
                    </p>
                    <div className="mx-auto px-6">
                            <p className="my-6 sm:my-8 text-base sm:text-lg text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide">
                                Nous vous accueillons dans un espace d’échange serein, nous prenons le temps de comprendre votre fonctionnement collectif et d’analyser les dynamiques relationnelles qui influencent votre travail au quotidien. À travers nos échanges, vous pourrez explorer vos modes de communication. Notre rôle est de vous accompagner, en vous aidant à ajuster vos interactions, vos modes de collaboration afin de renforcer la cohésion, la motivation et l’efficacité de votre équipe.
                            </p>
                            <ul className="list-disc mx-6 sm:mx-12 md:mx-48 mb-10 text-base sm:text-lg text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                                <li>Analyse des dynamiques relationnelles au sein de l’équipe.</li>
                                <li>Renforcer la cohésion et la communication au sein du groupe.</li>
                                <li>Évaluation des ressources internes de l’équipe.</li>
                                <li>Accompagnement dans la gestion de conflits.</li>
                            </ul>
                        <div>
                            <Image src="/images/therapiedegroupe.jpg" width={600} height={500} alt="photo de thérapie de groupe" className="rounded-lg shadow-lg w-full" priority />
                        </div>
                    </div>
                </section>
                <section className="justify-center items-center bg-customBeige py-16 sm:py-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 max-w-10xl p-4">
                        <Adress />
                        <Horaire />
                    </div>
                </section>
            </div>
        </MainLayout>
    );
};
