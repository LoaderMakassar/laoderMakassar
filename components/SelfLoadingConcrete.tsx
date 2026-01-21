import Image from "next/image";
export interface SelfLoadingConcreteMixerSpec {
    model: string;
    concreteOutputLPerBatch: number;
    totalDrumCapacityL: number;
    bucketCapacityM3: number;
    waterTankCapacityL: number;
    maxDrumSlewingAngleDeg: number;
    productivity: string;
    enginePowerKw: number;
    engineType: string;
    operatingWeightKg: number;
    driveType: string;
    transmission: string;
    tyreNumber: string;
    gradeAbilityDeg: number;
    wheelbaseMm: number;
    treadMm: number;
    minTurnRadiusMm: number;
    overallSizeMm: string;
}



export const selfLoadingConcreteMixerBDMG: SelfLoadingConcreteMixerSpec[] = [
    {
        model: "BD3500R",
        concreteOutputLPerBatch: 3500,
        totalDrumCapacityL: 5200,
        bucketCapacityM3: 0.6,
        waterTankCapacityL: 800,
        maxDrumSlewingAngleDeg: 270,
        productivity: "4 batch/hour, 14 m³/h",
        enginePowerKw: 85,
        engineType: "YUCHAI 4105, Turbo Charged",
        operatingWeightKg: 7600,
        driveType: "4 x 4",
        transmission: "Automatic, 4F + 4R Shift",
        tyreNumber: "12R22.5",
        gradeAbilityDeg: 40,
        wheelbaseMm: 2700,
        treadMm: 1700,
        minTurnRadiusMm: 5300,
        overallSizeMm: "7830 × 2680 × 3300",
    },
    {
        model: "BD4000R",
        concreteOutputLPerBatch: 4000,
        totalDrumCapacityL: 6100,
        bucketCapacityM3: 0.6,
        waterTankCapacityL: 800,
        maxDrumSlewingAngleDeg: 290,
        productivity: "4 batch/hour, 16 m³/h",
        enginePowerKw: 91,
        engineType: "YUCHAI 4105, Turbo Charged",
        operatingWeightKg: 9900,
        driveType: "4 x 4",
        transmission: "Automatic, 4F + 4R Shift",
        tyreNumber: "12R22.5",
        gradeAbilityDeg: 40,
        wheelbaseMm: 2450,
        treadMm: 1820,
        minTurnRadiusMm: 4000,
        overallSizeMm: "7640 × 2870 × 3520",
    },
    {
        model: "BD5500R",
        concreteOutputLPerBatch: 5500,
        totalDrumCapacityL: 8200,
        bucketCapacityM3: 0.8,
        waterTankCapacityL: 860,
        maxDrumSlewingAngleDeg: 270,
        productivity: "4 batch/hour, 22 m³/h",
        enginePowerKw: 92,
        engineType: "YUCHAI 6105, Turbo Charged",
        operatingWeightKg: 11750,
        driveType: "4 x 4",
        transmission: "Automatic, 4F + 4R Shift",
        tyreNumber: "12R22.5",
        gradeAbilityDeg: 40,
        wheelbaseMm: 3350,
        treadMm: 2100,
        minTurnRadiusMm: 6200,
        overallSizeMm: "8450 × 3100 × 3640",
    },
];



export default function SelfLoadingConcrete() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/loading.jpg"
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
                            <th className="border px-3 py-2">Concrete Output (L / Batch)</th>
                            <th className="border px-3 py-2">Total Drum Capacity (L)</th>
                            <th className="border px-3 py-2">Bucket Capacity (M³)</th>
                            <th className="border px-3 py-2">Water Tank (L)</th>
                            <th className="border px-3 py-2">Drum Slewing Angle (°)</th>
                            <th className="border px-3 py-2">Productivity</th>
                            <th className="border px-3 py-2">Engine Power (kW)</th>
                            <th className="border px-3 py-2">Engine Type</th>
                            <th className="border px-3 py-2">Operating Weight (KG)</th>
                            <th className="border px-3 py-2">Drive Type</th>
                            <th className="border px-3 py-2">Transmission</th>
                            <th className="border px-3 py-2">Tyre</th>
                            <th className="border px-3 py-2">Grade Ability (°)</th>
                            <th className="border px-3 py-2">Wheelbase (MM)</th>
                            <th className="border px-3 py-2">Tread (MM)</th>
                            <th className="border px-3 py-2">Min Turn Radius (MM)</th>
                            <th className="border px-3 py-2">Overall Size (MM)</th>
                        </tr>
                    </thead>


                    <tbody>
                        {selfLoadingConcreteMixerBDMG.map(
                            (item: SelfLoadingConcreteMixerSpec) => (
                                <tr
                                    key={item.model}
                                    className="text-center hover:bg-gray-100"
                                >
                                    <td className="border px-2 py-2 font-semibold">
                                        {item.model}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.concreteOutputLPerBatch}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.totalDrumCapacityL}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.bucketCapacityM3}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.waterTankCapacityL}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.maxDrumSlewingAngleDeg}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.productivity}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.enginePowerKw}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.engineType}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.operatingWeightKg}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.driveType}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.transmission}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.tyreNumber}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.gradeAbilityDeg}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.wheelbaseMm}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.treadMm}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.minTurnRadiusMm}
                                    </td>

                                    <td className="border px-3 py-2">
                                        {item.overallSizeMm}
                                    </td>
                                </tr>
                            )
                        )}
                    </tbody>

                </table>

            </div>


        </div>
    );
}
