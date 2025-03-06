export default function Horaire() {
    return (
        <div className="border border-customBrown p-6 md:p-10 m-4 md:m-20 rounded-lg bg-customBeige shadow-md">
            <h2 className="text-3xl md:text-4xl font-coco text-customBrown mb-4">Horaires</h2>
            <div className="space-y-4 text-customBrown">
                <p>
                    <span className="text-xl md:text-2xl font-coco">Vendredi</span> <br />
                    <span className="text-lg md:text-xl">13h30 - 20h00</span>
                </p>
                <p>
                    <span className="text-xl md:text-2xl font-coco">Samedi</span> <br />
                    <span className="text-lg md:text-xl">9h00 - 12h00</span> <br />
                    <span className="text-lg md:text-xl">13h00 - 18h00</span>
                </p>
            </div>
        </div>
    );
}
