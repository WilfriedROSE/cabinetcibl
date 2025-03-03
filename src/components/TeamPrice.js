import Image from "next/image";

const TeamPrice = ({ title, description, image }) => {
    return (
        <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden">
            <Image src={image} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-customBrown mb-4">{title}</h3>
                <p className="text-customBrown text-sm text-justify">{description}</p>
                <p className="text-customBrown text-sm mt-5">Prix : 100€</p>
                <a href="#" className="mt-4 inline-block text-customBrown font-semibold hover:underline">Réservez un rendez-vous</a>
            </div>
        </div>
    );
};

export default TeamPrice;