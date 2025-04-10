import Link from 'next/link';
import Image from 'next/image';

export default function ServiceCard({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between">
      <Image src={image} alt={title} width={400} height={250} className="object-cover w-full h-60" />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-bold text-customBrown mb-2">{title}</h3>
        <p className="text-customDarkBrown flex-grow">{description}</p>
        {link && (
          <Link href={link}>
            <span className="inline-block mt-4 text-customBrown font-bold hover:underline cursor-pointer">
              En savoir plus →
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
