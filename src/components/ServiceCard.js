import Image from "next/image";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden">
      <Image src={image} alt={title} width={600} height={400} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-customBrown mb-4">{title}</h3>
        <p className="text-customBrown text-sm">{description}</p>
        <a href="#" className="mt-4 inline-block text-customBrown font-semibold hover:underline">en savoir plus</a>
      </div>
    </div>
  );
};

export default ServiceCard;
