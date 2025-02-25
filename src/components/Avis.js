import Image from "next/image";

export default function Testimonials() {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute inset-0 bg-customDarkbrown opacity-70">
                <Image
                    src="/images/bureaubeige.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={90}
                    alt="Avis patients"
                    className="brightness-75"
                />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-customDarkBrown px-8">
                <h2 className="text-7xl font-catchy text-customDarkBrown mb-12">Avis patients</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
                    <Testimonial
                        text="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
                        author="Santa Solana Post"
                    />
                    <Testimonial
                        text="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
                        author="Mariana's Luxe Travels"
                    />
                    <Testimonial
                        text="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
                        author="Fairhill Journal"
                    />
                </div>
            </div>
        </div>
    );
}

function Testimonial({ text, author }) {
    return (
        <div className="text-center max-w-xs">
            <p className="text-4xl">“</p>
            <p className="text-lg font-light">{text}</p>
            <p className="mt-4 font-bold">{author}</p>
        </div>
    );
}