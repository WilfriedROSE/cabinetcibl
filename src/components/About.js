import Image from "next/image";

function About() {
    return (
        <div className="bg-customDarkBeige py-16 px-4 md:px-8">
            <h2 className="text-extrabold text-3xl md:text-5xl lg:text-7xl font-catchy text-customBrown text-center tracking-wide mb-10">A PROPOS</h2>
            <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="md:mt-20">
                    <h3 className="text-2xl md:text-3xl font-coco text-customBrown">Isabelle Becker Le Meteil</h3>
                    <p className="text-customBrown mt-2 text-base md:text-lg">Diplômée de l'ENPJJ en 2002 et exerçant en tant qu'éducatrice dans le champ du médico-social.</p>
                    <h3 className="text-2xl md:text-3xl font-coco text-customBrown mt-10 md:mt-20">Caroline Leger</h3>
                    <p className="text-customBrown mt-2 text-base md:text-lg">Titulaire d'un D.E. d’Assistante de service social, est une professionnelle disposant d’une expérience de 7 années en Centre Médico-Social. Elle intervient depuis 2003 au sein de la Protection Judiciaire de la Jeunesse.</p>
                </div>
                <div className="flex flex-col items-center">
                    <Image src="/images/isa.jpg" width={400} height={300} alt="photo d'isabelle et caroline" className="rounded-lg shadow-lg w-full max-w-md" />
                    <div className="mt-10 border-2 border-customBrown p-6 max-w-2xl text-center">
                        <p className="font-coco text-customBrown text-base md:text-lg">Nous sommes depuis janvier 2021, inscrites dans un parcours de formation à l’approche systémique, à la thérapie familiale et de couple auprès de l’Institut d’Études de la Famille de Lille. Ces années de formation sont validées par une certification et l’inscription à l’EFTA-TIC (Chambre Européenne des Instituts de Formation en Thérapie Familiale).</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
