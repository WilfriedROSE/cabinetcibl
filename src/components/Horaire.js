export default function Horaire() {
    return (
        <div className="border border-customBrown p-10 m-20 rounded-lg bg-customBeige shadow-md">
            <h2 className="text-4xl font-coco text-customBrown mb-4">Horaires</h2>
            <div className="space-y-2 text-customBrown">
                <p>
                    <span className="text-xl font-coco">Vendredi</span> <br />
                    13h30 - 20h00
                </p>
                <p>
                    <span className="text-xl font-coco">Samedi</span> <br />
                    9h00 - 12h00 <br />
                    13h00 - 18h00
                </p>
            </div>
        </div>
    );
}
