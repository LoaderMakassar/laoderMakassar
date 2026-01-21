import Image from "next/image";

export type SugarcaneLoaderSpec = {
    item: string;
    value: string | number;
};

export const sugarcaneLoaderQZ7600: SugarcaneLoaderSpec[] = [
    { item: "Total Weight", value: "8500 KG" },
    { item: "Snatch Weight", value: "1000 KG" },
    { item: "Engine Model", value: "Cummins 4BTA3.9-C125" },
    { item: "Engine Power", value: "92 KW" },
    { item: "Walking Speed", value: "≤30 KM/H" },
    { item: "Boom Angle", value: "110°" },
    { item: "Hydraulic System Pressure", value: "20 MPA" },
    { item: "Hydraulic System Displacement", value: "63 ML/R" },
    { item: "Maximum Catch Height", value: "5400 MM" },
    { item: "Maximum Unloading Height", value: "5300 MM" },
    { item: "Maximum Snatch Radius", value: "5300 MM" },
    { item: "Total Length", value: "4900 MM" },
    { item: "Total Width", value: "2600 MM" },
    { item: "Cab Height", value: "3100 MM" },
    { item: "Wheelbase", value: "2000 MM" },
    { item: "Ground Clearance", value: "580 MM" },
    { item: "Grips Mouth Width", value: "1500 MM" },
    { item: "Tire Specifications", value: "23.1-26 Agricultural Tire" },
];


export default function Sugarcane() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/sugar.jpg"
                    alt="Wheel Loader SYZG"
                    fill
                    className="object-contain rounded-md"
                    priority
                />
            </div>

            <div className="overflow-x-auto mt-0.5">
                <table className="min-w-full border border-gray-300 text-sm text-black">
                    <thead className="bg-yellow-600 text-white text-sm">
                        <tr>
                            <th className="px-4 py-2 text-left">Item</th>
                            <th className="px-4 py-2 text-left">Technical Specification</th>
                        </tr>
                    </thead>

                        <tbody className="text-sm">
                            {sugarcaneLoaderQZ7600.map((spec, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-4 py-2 font-medium">{spec.item}</td>
                                    <td className="px-4 py-2">{spec.value}</td>
                                </tr>
                            ))}
                    

                    </tbody>


                </table>

            </div>


        </div>
    );
}
