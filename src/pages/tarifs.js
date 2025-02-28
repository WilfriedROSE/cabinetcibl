import React from 'react';
import { MainLayout } from '@/layout/MainLayout';
import Adress from '@/components/Adress';
import Horaire from '@/components/Horaire';
import CouplePrice from '@/components/CouplePrice';
import FamilyPrice from '@/components/FamilyPrices';
import TeamPrice from '@/components/TeamPrice';
import ContactForm from "@/components/ContactForm";


const coupleprices = [
    {
        title: 'Thérapie de Couple',
        description: `La thérapie de couple s’intéresse au lien qui vous unit et permet de travailler sur les difficultés rencontrées avec votre partenaire afin d’améliorer la communication, la confiance et l’intimité. Elle aide à réengager le dialogue, mieux exprimer ses besoins et être attentive aux attentes de son partenaire. La fréquence des rendez-vous est déterminée ensemble.`,
        image: '/images/cabinet.webp',
    },
];

const familyprices = [
    {
        title: 'Thérapie de Famille',
        description: `La thérapie de couple s’intéresse au lien qui vous unit et permet de travailler sur les difficultés rencontrées avec votre partenaire afin d’améliorer la communication, la confiance et l’intimité. Elle aide à réengager le dialogue, mieux exprimer ses besoins et être attentive aux attentes de son partenaire. La fréquence des rendez-vous est déterminée ensemble.`,
        image: '/images/fille.jpg',
    },
];

const teamprices = [
    {
        title: "Accompagnement d'équipes",
        description: `La thérapie de couple s’intéresse au lien qui vous unit et permet de travailler sur les difficultés rencontrées avec votre partenaire afin d’améliorer la communication, la confiance et l’intimité. Elle aide à réengager le dialogue, mieux exprimer ses besoins et être attentive aux attentes de son partenaire. La fréquence des rendez-vous est déterminée ensemble.`,
        image: '/images/therapiedegroupe.jpg',
    },
];

export default function tarifs() {
    return (
        <MainLayout title="tarifs" description="Bienvenue sur notre site" >
            <div className="bg-customBeige">
                <div className="min-h-full p-10 flex flex-col items-center justify-center text-center bg-customBeige">
                    <h1 className="text-extrabold my-40 text-9xl font-catchy text-customBrown text-center tracking-wide">NOS TARIFS</h1>
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
                <div className="flex flex-col items-center justify-center text-center bg-customBeige">
                    <h2 className="text-extrabold mt-10 text-7xl font-catchy text-customBrown text-center tracking-wide">Tarifs</h2>
                </div>
                <div className="mt-10 mb-10 max-w-6xl mx-auto px-6 py-6 md:px-12 grid md:grid-cols-3 gap-8">
                    {coupleprices.map((service, index) => (
                        <CouplePrice key={index} {...service} />
                    ))}
                    {familyprices.map((service, index) => (
                        <FamilyPrice key={index} {...service} />
                    ))}
                    {teamprices.map((service, index) => (
                        <TeamPrice key={index} {...service} />
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-gray-100">
                    <p className="text-extrabold mt-20 text-6xl font-catchy text-customBrown text-center tracking-wide">Informations pratiques</p>
                    <div className="mx-20 my-10 text-l text-justify leading-relaxed font-cocoGothic text-customBrown tracking-wide">
                        <h3 className="text-2xl font-coco text-customBrown">Modalités de paiement</h3>
                        <p className="text-customBrown mt-2">
                            Le règlement des consultations s’effectue après chaque séance, par chèque ou espèces uniquement (pas de CB). Pour les téléconsultations, le règlement se fait par virement bancaire en amont de la séance. En cas de non-réception du règlement 24h avant la date prévue. La séance est considérée comme annulée.
                        </p>
                        <h3 className="text-2xl font-coco text-customBrown mt-20">Remboursement des consultations</h3>
                        <p className="text-customBrown mt-2">
                            Ne faisant pas partie du dispositif de remboursement des psychologues « Monparcourspsy », les consultations ne sont pas remboursées par la sécurité sociale. En revanche, de nombreuses mutuelles proposent des remboursements de plusieurs séances. Dans ce cas, je vous fournirais une facture après chaque consultation, si besoin.
                            Pour en savoir plus, rapprochez-vous de votre complémentaire santé.
                        </p>
                        <h3 className="text-2xl font-coco text-customBrown mt-20">Retards et annulations</h3>
                        <p className="text-customBrown mt-2 mb-20">
                            En cas de retard la séance ne sera pas prolongée et sera imputée du temps de retard.
                            En cas d’annulation ou de demande de déplacement de rendez-vous, je vous invite à nous prévenir 48h à l’avance. En- deçà de ces 48h, le règlement de la consultation sera dû.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-customBeige p-20">
                    <h1 className="text-extrabold text-7xl font-catchy text-customBrown text-center tracking-wide">Contactez-Nous</h1>
                    <p className="text-2xl mt-5 mb-10 font-coco text-center text-customBrown">Vous avez des questions ou vous souhaitez prendre Rendez-vous ?</p>
                    <ContactForm />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-10xl p-4 bg-customBeige">
                    <Adress />
                    <Horaire />
                </div>
        </div>
        </MainLayout >
    );
};
