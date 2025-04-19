import Image from "next/image";

const CouplePrice = ({ title, description, image }) => {
    return (
        <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden">
            <Image src={image} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-customBrown mb-4">{title}</h3>
                <p className="text-customBrown text-sm text-justify">{description}</p>
                <p className="text-customBrown text-sm mt-5">Prix : 70€</p>
                <a
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2rGIx-y_R8KQPJZPudkX-A0pUwJ6C6LDfIPlfvJ11pvi6zANpsJ3JFY7_nrdMPlfqyzDS0XVWp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-customBrown text-white font-semibold px-4 py-2 rounded-lg hover:bg-opacity-80 transition"
                >
                    Réservez un rendez-vous
                </a>
            </div>
        </div>
    );
};

export default CouplePrice;
