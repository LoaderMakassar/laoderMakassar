import Image from "next/image";

export interface ConcretePumpSpec {
    model: string;
    maxConcreteOutput: string; // m³/h (high/low)
    maxConcretePumpingPressureMpa: string; // MPa (high/low)
    outletInnerDiameterMm: number;
    engineBrand: string;
    ratedPowerKw: number;
    hydraulicTankCapacityL: number;
    dimensionMm: string;
    maxDeliveringDistance: string; // Vertical / Horizontal (m)
    deliveringPipeInnerDiameterMm: string;
    mainWeightKg: number;
    pumpingSystemPressureMpa: number;
    stirringSystemPressureMpa: number;
}



export const concretePumpBDMG: ConcretePumpSpec[] = [
    {
        model: "HBTS 30",
        maxConcreteOutput: "30 / 16 m³/h",
        maxConcretePumpingPressureMpa: "8 / 4 MPa",
        outletInnerDiameterMm: 100,
        engineBrand: "WEICHAI",
        ratedPowerKw: 48,
        hydraulicTankCapacityL: 180,
        dimensionMm: "4300 × 1670 × 1680",
        maxDeliveringDistance: "120 / 350 m",
        deliveringPipeInnerDiameterMm: "Φ100–Φ80 mm",
        mainWeightKg: 2580,
        pumpingSystemPressureMpa: 16,
        stirringSystemPressureMpa: 12,
    },
    {
        model: "HBTS 40",
        maxConcreteOutput: "42 / 23 m³/h",
        maxConcretePumpingPressureMpa: "13 / 6.3 MPa",
        outletInnerDiameterMm: 125,
        engineBrand: "WEICHAI",
        ratedPowerKw: 72,
        hydraulicTankCapacityL: 180,
        dimensionMm: "4300 × 1670 × 1680",
        maxDeliveringDistance: "180 / 550 m",
        deliveringPipeInnerDiameterMm: "Φ100–Φ125 mm",
        mainWeightKg: 3100,
        pumpingSystemPressureMpa: 32,
        stirringSystemPressureMpa: 12,
    },
];




export default function ConcratePump() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/conn.png"
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
                            <th className="border px-3 py-2">Max Concrete Output</th>
                            <th className="border px-3 py-2">Max Pumping Pressure</th>
                            <th className="border px-3 py-2">Outlet Diameter (MM)</th>
                            <th className="border px-3 py-2">Engine</th>
                            <th className="border px-3 py-2">Rated Power (KW)</th>
                            <th className="border px-3 py-2">Hydraulic Tank (L)</th>
                            <th className="border px-3 py-2">Dimension (MM)</th>
                            <th className="border px-3 py-2">Delivering Distance</th>
                            <th className="border px-3 py-2">Pipe Diameter</th>
                            <th className="border px-3 py-2">Main Weight (KG)</th>
                            <th className="border px-3 py-2">Pumping Pressure (MPa)</th>
                            <th className="border px-3 py-2">Stirring Pressure (MPa)</th>
                        </tr>
                    </thead>


                    <tbody>
                        {concretePumpBDMG.map((item) => (
                            <tr key={item.model} className="text-center hover:bg-gray-100">
                                <td className="border px-2 py-2 font-semibold">
                                    {item.model}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.maxConcreteOutput}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.maxConcretePumpingPressureMpa}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.outletInnerDiameterMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.engineBrand}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.ratedPowerKw}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.hydraulicTankCapacityL}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.dimensionMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.maxDeliveringDistance}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.deliveringPipeInnerDiameterMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.mainWeightKg}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.pumpingSystemPressureMpa}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.stirringSystemPressureMpa}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>


        </div>
    );
}
