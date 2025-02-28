import Image from "next/image";

export default function About() {
    return (
        <div className="bg-customDarkBeige py-16 px-8">
            <h2 className="text-extrabold mt-10 mb-10 text-7xl font-catchy text-customBrown text-center tracking-wide">A PROPOS</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="mt-40">
                    <h3 className="text-4xl font-coco text-customBrown">Isabelle Becker Le Meteil</h3>
                    <p className="text-customBrown mt-2">
                        Diplômée de l'ENPJJ en 2002 et exerçant en tant qu'éducatrice dans le champ du médico-social.
                    </p>
                    <h3 className="text-4xl font-coco text-customBrown mt-20">Caroline Leger</h3>
                    <p className="text-customBrown mt-2">
                        Titulaire d'un D.E. d’Assistante de service social, est une professionnelle disposant d’une expérience de 7 années en Centre Médico-Social. Elle intervient depuis 2003 au sein de la Protection Judiciaire de la Jeunesse.
                    </p>
                </div>
                <div>
                    <Image src="/images/isa.jpg" width={400} height={300} alt="photo d'isabelle et caroline" className=" ml-20 rounded-lg shadow-lg" />
                    <div className="mt-10 border-2 border-customBrown p-6 max-w-2xl ml-auto">
                        <p className="font-coco text-center text-customBrown">
                            Nous sommes depuis janvier 2021, inscrites dans un parcours de formation à l’approche systémique, à la thérapie familiale et de couple auprès de l’Institut d’Études de la Famille de Lille. Ces années de formation sont validées par une certification et l’inscription à l’EFTA-TIC (Chambre Européenne des Instituts de Formation en Thérapie Familiale)
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
