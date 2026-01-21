import Image from "next/image";

export interface WheelTractorSpec {
    model: string;            // 40 HP, 50 HP, 90 HP, 130 HP
    engineBrand: string;
    enginePowerHp: number;
    gearbox: string;
    tyre: string;
    maxSpeedKmH: number;
    fuelTankCapacityL: number;
    dimensionMm: string;
    operatingWeightKg: number;
    numberOfCylinders: number;
}


export const wheelTractorBDMG: WheelTractorSpec[] = [
    {
        model: "40 HP",
        engineBrand: "XINCHAI",
        enginePowerHp: 40,
        gearbox: "8F + 8R",
        tyre: "7.5-16 / 11.2-28",
        maxSpeedKmH: 40,
        fuelTankCapacityL: 60,
        dimensionMm: "3650 × 1500 × 2330",
        operatingWeightKg: 1800,
        numberOfCylinders: 4,
    },
    {
        model: "50 HP",
        engineBrand: "XINCHAI",
        enginePowerHp: 50,
        gearbox: "8F + 8R",
        tyre: "7.5-16 / 11.2-28",
        maxSpeedKmH: 40,
        fuelTankCapacityL: 60,
        dimensionMm: "3650 × 1500 × 2330",
        operatingWeightKg: 1800,
        numberOfCylinders: 4,
    },
    {
        model: "90 HP",
        engineBrand: "XINCHAI",
        enginePowerHp: 90,
        gearbox: "12F + 12R",
        tyre: "8.3-20 / 12.4-28",
        maxSpeedKmH: 30.25,
        fuelTankCapacityL: 120,
        dimensionMm: "4190 × 1790 × 2680",
        operatingWeightKg: 3200,
        numberOfCylinders: 4,
    },
    {
        model: "130 HP",
        engineBrand: "DONGFENGHONG",
        enginePowerHp: 130,
        gearbox: "16F + 8R",
        tyre: "11.2-24 / 16.9-38",
        maxSpeedKmH: 34.5,
        fuelTankCapacityL: 100,
        dimensionMm: "4900 × 1800 × 2750",
        operatingWeightKg: 4620,
        numberOfCylinders: 4,
    },
];




export default function WheelTracktor() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/TraktorRoda.png"
                    alt="Wheel Loader SYZG"
                    fill
                    className="object-contain rounded-md"
                    priority
                />
            </div>

            <div className="overflow-x-auto mt-0.5">
                <table className="min-w-full border border-gray-300 text-sm text-black">
                    <thead className="bg-yellow-500 text-white">
                        <tr>
                            <th className="border px-3 py-2">Model</th>
                            <th className="border px-3 py-2">Engine Brand</th>
                            <th className="border px-3 py-2">Power (HP)</th>
                            <th className="border px-3 py-2">Gearbox</th>
                            <th className="border px-3 py-2">Tyre</th>
                            <th className="border px-3 py-2">Max Speed (KM/H)</th>
                            <th className="border px-3 py-2">Fuel Tank (L)</th>
                            <th className="border px-3 py-2">Dimension (MM)</th>
                            <th className="border px-3 py-2">Operating Weight (KG)</th>
                            <th className="border px-3 py-2">Cylinders</th>
                        </tr>
                    </thead>

                    <tbody>
                        {wheelTractorBDMG.map((item) => (
                            <tr key={item.model} className="text-center hover:bg-gray-100">
                                <td className="border px-2 py-2 font-semibold">
                                    {item.model}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.engineBrand}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.enginePowerHp} HP
                                </td>

                                <td className="border px-3 py-2">
                                    {item.gearbox}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.tyre}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.maxSpeedKmH}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.fuelTankCapacityL} L
                                </td>

                                <td className="border px-3 py-2">
                                    {item.dimensionMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.operatingWeightKg} KG
                                </td>

                                <td className="border px-3 py-2">
                                    {item.numberOfCylinders}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>


        </div>
    );
}
