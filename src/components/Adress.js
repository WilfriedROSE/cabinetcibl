export default function Adress() {
    return (
        <div className="border border-customBrown p-6 md:p-10 m-4 md:m-20 rounded-lg bg-customBeige shadow-md">
            <h2 className="text-3xl md:text-4xl font-coco text-customBrown mb-6">Accueil cabinet</h2>
            <div className="space-y-4 text-customBrown">
                <p className="flex text-lg md:text-xl items-center gap-2">📍 8 bis rue Madame LAFAYETTE <br />
                    76600, Le Havre
                </p>
                <p className="flex text-lg md:text-xl items-center gap-2">📱 07 66 94 34 49</p>
                <p className="flex text-lg md:text-xl items-center gap-2">📧 cibl.therapie@gmail.com</p>
            </div>
        </div>
    );
}
