import Image from "next/image";

export interface ExcavatorSpec {
    model: string;
    operatingWeightKg: number;
    boomLengthMm: number;
    armLengthMm: number;
    bucketCapacityM3: number;
    engineModel: string;
    ratedPower: string;
    fuelTankL: number;
    hydraulicTankOilL: number;
    trackWidthMm: number;
    gradeAbility: string;
    cylinder: string;
    engineInjectionType: string;
    hydraulicType: string;
}


export const excavatorBDMGSmall: ExcavatorSpec[] = [
    {
        model: "BD-9020",
        operatingWeightKg: 2000,
        boomLengthMm: 950,
        armLengthMm: 1800,
        bucketCapacityM3: 0.04,
        engineModel: "Yanmar 3TNV80F-SSUK",
        ratedPower: "13.4 kW / 2200 rpm",
        fuelTankL: 21,
        hydraulicTankOilL: 26,
        trackWidthMm: 230,
        gradeAbility: "30°",
        cylinder: "3 Cylinder",
        engineInjectionType: "Mechanical Direct Injection",
        hydraulicType: "Lonking",
    },
    {
        model: "BD-9035",
        operatingWeightKg: 3850,
        boomLengthMm: 1550,
        armLengthMm: 2550,
        bucketCapacityM3: 0.11,
        engineModel: "Kubota D1703-EB-SWD-1",
        ratedPower: "18.2 kW / 2200 rpm",
        fuelTankL: 40,
        hydraulicTankOilL: 41,
        trackWidthMm: 300,
        gradeAbility: "30°",
        cylinder: "3 Cylinder",
        engineInjectionType: "Mechanical Direct Injection",
        hydraulicType: "Lonking",
    },
    {
        model: "BD-9060",
        operatingWeightKg: 5850,
        boomLengthMm: 1550,
        armLengthMm: 3000,
        bucketCapacityM3: 0.25,
        engineModel: "Yanmar 4TNV94L",
        ratedPower: "36.2 kW / 2100 rpm",
        fuelTankL: 130,
        hydraulicTankOilL: 80,
        trackWidthMm: 400,
        gradeAbility: "35° (70%)",
        cylinder: "4 Cylinder / 3.054 L",
        engineInjectionType: "Mechanical Direct Injection",
        hydraulicType: "Lonking",
    },
    {
        model: "BD-9075",
        operatingWeightKg: 7680,
        boomLengthMm: 3722,
        armLengthMm: 1620,
        bucketCapacityM3: 0.28,
        engineModel: "Yanmar 4TNV98",
        ratedPower: "46.3 kW / 2200 rpm",
        fuelTankL: 132,
        hydraulicTankOilL: 120,
        trackWidthMm: 450,
        gradeAbility: "35° (70%)",
        cylinder: "4 Cylinder / 3.054 L",
        engineInjectionType: "Mechanical Direct Injection",
        hydraulicType: "Lonking",
    },
    {
        model: "BD-9080",
        operatingWeightKg: 8000,
        boomLengthMm: 3722,
        armLengthMm: 1620,
        bucketCapacityM3: 0.3,
        engineModel: "Yanmar 4TNV98T-SSUK",
        ratedPower: "56.5 kW / 2200 rpm",
        fuelTankL: 132,
        hydraulicTankOilL: 120,
        trackWidthMm: 450,
        gradeAbility: "35° (70%)",
        cylinder: "4 Cylinder / 3.319 L",
        engineInjectionType: "Electronic Distribution Pump",
        hydraulicType: "Lonking",
    },
];


export const excavatorBDMGLarge: ExcavatorSpec[] = [
    {
        model: "BD-9135",
        operatingWeightKg: 13600,
        boomLengthMm: 4600,
        armLengthMm: 2500,
        bucketCapacityM3: 0.56,
        engineModel: "Cummins QSF3.8",
        ratedPower: "74 kW / 2200 rpm",
        fuelTankL: 290,
        hydraulicTankOilL: 140,
        trackWidthMm: 500,
        gradeAbility: "35° (70%)",
        cylinder: "4 Cylinder / 3.8 L",
        engineInjectionType: "Common Rail Injection",
        hydraulicType: "Lonking",
    },
    {
        model: "BD-9225",
        operatingWeightKg: 21800,
        boomLengthMm: 5675,
        armLengthMm: 2920,
        bucketCapacityM3: 1.0,
        engineModel: "Cummins 6BTAA5.9-C150-II",
        ratedPower: "112 kW / 2000 rpm",
        fuelTankL: 400,
        hydraulicTankOilL: 165,
        trackWidthMm: 600,
        gradeAbility: "35° (70%)",
        cylinder: "6 Cylinder / 5.9 L",
        engineInjectionType: "Mechanical Direct Injection",
        hydraulicType: "Lonking",
    },
    {
        model: "BD-9306",
        operatingWeightKg: 32800,
        boomLengthMm: 6150,
        armLengthMm: 3200,
        bucketCapacityM3: 1.6,
        engineModel: "Cummins QSL9",
        ratedPower: "209 kW / 2100 rpm",
        fuelTankL: 600,
        hydraulicTankOilL: 300,
        trackWidthMm: 600,
        gradeAbility: "35° (70%)",
        cylinder: "6 Cylinder",
        engineInjectionType: "Mechanical Direct Injection",
        hydraulicType: "Lonking",
    },
    {
        model: "BD-9376",
        operatingWeightKg: 39300,
        boomLengthMm: 6500,
        armLengthMm: 2800,
        bucketCapacityM3: 1.9,
        engineModel: "Cummins 6LTAA8.9-C325",
        ratedPower: "241 kW / 2100 rpm",
        fuelTankL: 610,
        hydraulicTankOilL: 300,
        trackWidthMm: 600,
        gradeAbility: "35° (70%)",
        cylinder: "6 Cylinder",
        engineInjectionType: "Mechanical Direct Injection",
        hydraulicType: "Lonking",
    },
];



export default function Excavator() {
    return (
        <div>
            <div className="relative w-full h-[400px] mb-4">
                <Image
                    src="/images/excavator.png"
                    alt="BDMG Excavator"
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
                            <th className="border px-3 py-2">Operating Weight (KG)</th>
                            <th className="border px-3 py-2">Boom Length (MM)</th>
                            <th className="border px-3 py-2">Arm Length (MM)</th>
                            <th className="border px-3 py-2">Bucket Capacity (M³)</th>
                            <th className="border px-3 py-2">Engine Model</th>
                            <th className="border px-3 py-2">Rated Power</th>
                            <th className="border px-3 py-2">Track Width (MM)</th>
                            <th className="border px-3 py-2">Grade Ability</th>
                            <th className="border px-3 py-2">Cylinder</th>
                            <th className="border px-3 py-2">Injection Type</th>
                            <th className="border px-3 py-2">Hydraulic Type</th>
                        </tr>
                    </thead>



                    <tbody>
                        {excavatorBDMGSmall.map((item) => (
                            <tr key={item.model} className="text-center hover:bg-gray-100">
                                <td className="border px-2 py-2 font-semibold">
                                    {item.model}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.operatingWeightKg}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.boomLengthMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.armLengthMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.bucketCapacityM3}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.engineModel}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.ratedPower}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.trackWidthMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.gradeAbility}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.cylinder}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.engineInjectionType}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.hydraulicType}
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-sm text-black">
                    <thead className="bg-yellow-400">
                        <tr>
                            <th className="border px-3 py-2">Model</th>
                            <th className="border px-3 py-2">Operating Weight (KG)</th>
                            <th className="border px-3 py-2">Boom Length (MM)</th>
                            <th className="border px-3 py-2">Arm Length (MM)</th>
                            <th className="border px-3 py-2">Bucket Capacity (M³)</th>
                            <th className="border px-3 py-2">Engine Model</th>
                            <th className="border px-3 py-2">Rated Power</th>
                            <th className="border px-3 py-2">Fuel Tank (L)</th>
                            <th className="border px-3 py-2">Hydraulic Oil (L)</th>
                            <th className="border px-3 py-2">Track Width (MM)</th>
                            <th className="border px-3 py-2">Grade Ability</th>
                            <th className="border px-3 py-2">Cylinder</th>
                            <th className="border px-3 py-2">Injection Type</th>
                            <th className="border px-3 py-2">Hydraulic Type</th>
                        </tr>
                    </thead>


                    <tbody>
                        {excavatorBDMGLarge.map((item: ExcavatorSpec) => (
                            <tr key={item.model} className="text-center hover:bg-gray-100">
                                <td className="border px-2 py-2 font-semibold">
                                    {item.model}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.operatingWeightKg}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.boomLengthMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.armLengthMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.bucketCapacityM3}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.engineModel}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.ratedPower}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.fuelTankL}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.hydraulicTankOilL}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.trackWidthMm}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.gradeAbility}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.cylinder}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.engineInjectionType}
                                </td>

                                <td className="border px-3 py-2">
                                    {item.hydraulicType}
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>

            </div>


        </div>
    );
}
