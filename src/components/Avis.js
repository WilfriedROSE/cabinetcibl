import Image from "next/image";

export default function Testimonials() {
    return (
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-16">
            <div className="absolute inset-0">
                <Image src="/images/bureaubeige.jpg" fill className="object-cover brightness-75" alt="Avis patients" />
            </div>
            <div className="relative z-10 flex flex-col items-center text-center text-customBrown">
                <h2 className="text-3xl md:text-5xl lg:text-7xl font-catchy mb-12">Avis patients</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                    <Testimonial text="Excellent accompagnement, bienveillance et écoute sont au rendez-vous !" author="Emma D." />
                    <Testimonial text="Un soutien précieux dans un cadre apaisant et professionnel." author="Lucas M." />
                    <Testimonial text="Une approche humaine et efficace pour avancer sereinement." author="Sophie L." />
                </div>
            </div>
        </div>
    );
}

function Testimonial({ text, author }) {
    return (
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <p className="text-4xl">“</p>
            <p className="text-lg font-light italic">{text}</p>
            <p className="mt-4 font-bold">{author}</p>
        </div>
    );
}
