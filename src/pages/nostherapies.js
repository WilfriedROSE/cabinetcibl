import Image from 'next/image';
import React from 'react';
import { MainLayout } from '@/layout/MainLayout';


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
                    <p className="text-extrabold mt-10 text-5xl font-Catchy text-customBrown text-center tracking-wide">Nos Modalités d’intervention</p>
                    <p className="ml-40 mt-10 text-xl font-CocoGothic text-customBrown text-center tracking-wide mr-40">Nos interventions consistent en des entretiens familiaux ou entretien de couple. Cet accompagnement à la réflexion du système en entier évite la juxtaposition de suivis individuels et un « cloisonnement » des prises en charge. Il s’agit également au travers de cette intervention de garantir une participation active de la famille.</p>
                    <p className="mr-96 mt-10 mb-10 text-xl text-justify leading-relaxed font-CocoGothic text-customBrown tracking-wide">Nous proposons à nos patients :</p>
                </div>
            </div>
        </MainLayout>
    );
};