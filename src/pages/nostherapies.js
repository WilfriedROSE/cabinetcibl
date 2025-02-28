import Image from 'next/image';
import React from 'react';
import { MainLayout } from '@/layout/MainLayout';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';


export default function Nostherapies() {

    return (
        <MainLayout title="Nos thérapies" description="Bienvenue sur notre site" >
            <div className="bg-customBeige">
                <div className="min-h-full p-10 flex flex-col items-center justify-center text-center bg-customBeige">
                    <h1 className="text-extrabold mt-40 text-9xl font-catchy text-customBrown text-center tracking-wide">NOS THERAPIES</h1>
                    <div className="w-1/4 mb-20">
                        <h2 className="py-2 bg-white text-extrabold mt-10 text-l font-CocoGothic text-customBrown text-center tracking-wide">THERAPIE DE COUPLES</h2>
                        <h2 className="py-2 bg-white text-extrabold mt-5 text-l font-CocoGothic text-customBrown text-center tracking-wide">THERAPIE DE FAMILLES</h2>
                        <h2 className="py-2 bg-white text-extrabold mt-5 text-l font-CocoGothic text-customBrown text-center tracking-wide">ACCOMPAGNEMENT D'EQUIPES</h2>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-gray-100">
                    <p className="text-extrabold mt-20 text-6xl font-catchy text-customBrown text-center tracking-wide">Nos Modalités d’intervention</p>
                    <div>
                        <p className="mx-48 my-10 text-l text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide">Nos interventions consistent en des entretiens familiaux ou entretien de couple. Cet accompagnement à la réflexion du système en entier évite la juxtaposition de suivis individuels et un « cloisonnement » des prises en charge. Il s’agit également au travers de cette intervention de garantir une participation active de la famille.</p>
                        <p className="mx-48 mt-10 mb-3 text-l text-justify font-medium leading-relaxed font-cocoGothic text-customBrown tracking-wide">Nous proposons à nos patients :</p>
                        <ul className="list-disc ml-60 mx-48 mb-10 text-l text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                            <li>De les recevoir dans un cadre d’interventions structurées, rassurantes et favorisant l’émergence d’échanges dans lesquels chacun des membres de la famille disposera d’un espace.</li>
                            <li>De faire émerger les demandes des familles, des couples, et d’organiser avec eux les objectifs à mener.</li>
                            <li>De travailler sur les modalités de communication verbales et non verbales.</li>
                            <li>De favoriser l’expression émotionnelle des différents participants.</li>
                            <li>D’évaluer la créativité du système famille ou couple avec les intervenants professionnels (souplesse du système, ressources en présence...) afin de les rendre visibles.</li>
                            <li>Construire conjointement avec la famille ou le couple, des modalités de fonctionnement différentes pouvant répondre à leurs besoins.</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-customBeige2">
                    <p className="text-extrabold mt-20 mb-20 text-6xl font-catchy text-customBrown text-center tracking-wide">Thérapie de Famille</p>
                    <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-l text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide mb-10">Avec notre accompagnement, vous pourrez exprimer vos modes de communication, prendre conscience de votre environnement et identifier les ressources et compétences sur lesquelles vous pouvez vous appuyer. <br />
                                Nous chercherons à comprendre comment vos interactions influencent certaines difficultés, afin d’accompagner les changements dont vous avez besoin.</p>
                            <ul className="ml-5 list-disc mb-10 text-l text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                                <li>Accueillir la famille et tout membre en demande de compréhension des enjeux relationnels.</li>
                                <li>Accompagner la famille dans l’expression de son fonctionnement familial.</li>
                                <li>Explorer le contexte et l’environnement de la famille.</li>
                                <li>Repérer les ressources et les compétences.</li>
                                <li>Identifier comment les relations interindividuelles, au sein de la famille, agissent sur l’apparition ou la disparition des symptômes.</li>
                                <li>Identifier et accompagner les demandes de changement.</li>
                            </ul>
                        </div>
                        <div>
                            <Image src="/images/fille.jpg" width={600} height={500} alt="photo de thérapie de Famille" className="mt-8 ml-10 mt-58 rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-customBeige">
                    <p className="text-extrabold mt-20 mb-20 text-6xl font-catchy text-customBrown text-center tracking-wide">Thérapie de Couple</p>
                    <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-l text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide mb-10">En thérapie de couple, nous vous accueillons dans un espace bienveillant où votre parole peut s’exprimer librement. Ensemble, nous prenons le temps de comprendre votre demande et d’analyser les dynamiques qui façonnent votre relation. <br />
                                À travers nos échanges, vous pourrez explorer votre mode de communication, identifier vos interactions et mieux comprendre ce qui influence votre couple. <br />
                                Notre rôle est de vous accompagner dans vos demandes de changement, en vous aidant à ajuster votre manière d’interagir afin de retrouver un équilibre plus serein et harmonieux dans votre relation.</p>
                            <ul className="ml-5 list-disc mb-10 text-l text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                                <li>Accueillir le couple et sa demande.</li>
                                <li>Offrir un espace de parole et d’élaboration avec pour objectif de mesurer les interactions relationnelles.</li>
                                <li>Explorer le contexte et l’environnement du couple, son histoire, sa construction...</li>
                                <li>Accompagner les demandes de changement en terme d’interactions relationnelles.</li>
                            </ul>
                        </div>
                        <div>
                            <Image src="/images/cabinet.webp" width={600} height={500} alt="photo de Thérapie de groupe" className="mt-8 ml-10 mt-58 rounded-lg shadow-lg" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-customBeige2">
                    <p className="text-extrabold mt-20 mb-20 text-6xl font-catchy text-customBrown text-center tracking-wide">Accompagnement d'équipes</p>
                    <div className="max-w-6xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-l text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide mb-10">Nous vous accueillons dans un espace d’échange serein, nous prenons le temps de comprendre votre fonctionnement collectif et d’analyser les dynamiques relationnelles qui influencent votre travail au quotidien. <br />
                                À travers nos échanges, vous pourrez explorer vos modes de communication.  <br />
                                Notre rôle est de vous accompagner, en vous aidant à ajuster vos interactions, vos modes de collaboration afin de renforcer la cohésion, la motivation et l’efficacité de votre équipe.</p>
                            <ul className="ml-5 list-disc mb-10 text-l text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">
                                <li>ispenkadk kanc,addcâlc</li>
                                <li>ispenkadk kanc,addcâlc</li>
                                <li>ispenkadk kanc,addcâlc</li>
                                <li>ispenkadk kanc,addcâlc</li>
                                <li>ispenkadk kanc,addcâlc</li>
                                <li>ispenkadk kanc,addcâlc</li>
                            </ul>
                        </div>
                        <div>
                            <Image src="/images/therapiedegroupe.jpg" width={600} height={500} alt="photo de thérapie de Famille" className="mt-8 ml-10 mt-58 rounded-lg shadow-lg" />
                        </div>
                    </div>
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