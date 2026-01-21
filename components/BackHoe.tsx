import Image from "next/image";

export interface BackhoeLoaderSpec {
    model: string;
    engineModel: string;
    enginePowerKw: number;
    operatingWeightKg: number;
    bucketLoaderCapacityM3: number;
    bucketExcavatorCapacityM3: number;
    overallDimensionsMm: string;
    tire: string;
    automaticGear: string;
}

export const backhoeLoaderBDMG: BackhoeLoaderSpec[] = [
    {
        model: "388",
        engineModel: "YUDONG 4105 BOOSTER",
        enginePowerKw: 85,
        operatingWeightKg: 8300,
        bucketLoaderCapacityM3: 1.0,
        bucketExcavatorCapacityM3: 0.3,
        overallDimensionsMm: "6150 × 2350 × 3763",
        tire: "14-17.5 / 19.5L-24",
        automaticGear: "2F/2R",
    },
    {
        model: "4CX",
        engineModel: "YUCHAI 4108 SUPERCHARGER",
        enginePowerKw: 85,
        operatingWeightKg: 9600,
        bucketLoaderCapacityM3: 1.2,
        bucketExcavatorCapacityM3: 0.3,
        overallDimensionsMm: "6500 × 2500 × 3800",
        tire: "16.9-28 / 14",
        automaticGear: "4 in front and 4 in back",
    },
];



export default function Backhoe() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/backho.png"
                    alt="Wheel Loader SYZG"
                    fill
                    className="object-contain rounded-md"
                    priority
                />
            </div>

            <div className="overflow-x-auto mt-0.5">
                <table className="min-w-full border border-gray-300 text-sm text-black">
                    <thead className="bg-yellow-400">
                        <tr>
                            <th className="border px-3 py-2">Model</th>
                            <th className="border px-3 py-2">Engine Power</th>
                            <th className="border px-3 py-2">Oprating Weight (KG)</th>
                            <th className="border px-3 py-2">Bucket Loader Capacity M3</th>
                            <th className="border px-3 py-2">Bucket Excavator Capacity M3</th>
                            <th className="border px-3 py-2">Overall Dimension (MM)</th>
                            <th className="border px-3 py-2">Tire</th>
                            <th className="border px-3 py-2">Automatic Gear</th>
                 
                        </tr>
                    </thead>

                    <tbody>
                        {backhoeLoaderBDMG.map((item: BackhoeLoaderSpec) => (
                            <tr key={item.model} className="text-center hover:bg-gray-100">
                                <td className="border px-1 py-2 font-semibold">
                                    {item.model}
                                </td>
                                <td className="border px-3 py-2">
                                    {item.engineModel}
                                </td>
                                <td className="border px-3 py-2">
                                    {item.enginePowerKw}
                                </td>
                                <td className="border px-3 py-2">
                                    {item.operatingWeightKg}
                                </td>
                                <td className="border px-3 py-2">
                                    {item.bucketLoaderCapacityM3}
                                </td>
                                <td className="border px-3 py-2">
                                    {item.overallDimensionsMm}
                                </td>
                                <td className="border px-3 py-2">
                                    {item.tire}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.automaticGear}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>
    );
}
