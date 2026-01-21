import Image from "next/image";

export interface WheelExcavatorSpec {
    model: string;
    operatingWeightKg: number;
    boomLengthMm: number;
    armLengthMm: number;
    bucketCapacityM3: number;
    engineModel: string;
    ratedPower: string;
    fuelTankL: number;
    hydraulicTankOilL: number;
    tireType: string;
    gradeAbility: string;
    cylinder: string;
}
export const wheelExcavatorBDMG: WheelExcavatorSpec[] = [
    {
        model: "BD-9075W",
        operatingWeightKg: 10000,
        boomLengthMm: 4000,
        armLengthMm: 2000,
        bucketCapacityM3: 0.4,
        engineModel: "YC4DK100",
        ratedPower: "73.5 kW / 2200 rpm",
        fuelTankL: 150,
        hydraulicTankOilL: 150,
        tireType: "8.25-20",
        gradeAbility: "30° (58%)",
        cylinder: "4 Cylinder",
    },
];


export default function WheelExa() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/gambar_6.png"
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
                            <th className="border px-3 py-2">Operating Weight (KG)</th>
                            <th className="border px-3 py-2">Boom Length (MM)</th>
                            <th className="border px-3 py-2">Arm Length (MM)</th>
                            <th className="border px-3 py-2">Bucket Capacity (M³)</th>
                            <th className="border px-3 py-2">Engine Model</th>
                            <th className="border px-3 py-2">Rated Power</th>
                            <th className="border px-3 py-2">Fuel Tank (L)</th>
                            <th className="border px-3 py-2">Hydraulic Tank Oil (L)</th>
                            <th className="border px-3 py-2">Tire Type</th>
                            <th className="border px-3 py-2">Grade Ability</th>
                            <th className="border px-3 py-2">Cylinder</th>
                        </tr>

                    </thead>
                    <tbody>

                        {wheelExcavatorBDMG.map((item) => (
                            <tr key={item.model} className="text-center hover:bg-gray-100">
                                <td className="border px-2 py-2 font-semibold">{item.model}</td>
                                <td className="border px-3 py-2">{item.operatingWeightKg}</td>
                                <td className="border px-3 py-2">{item.boomLengthMm}</td>
                                <td className="border px-3 py-2">{item.armLengthMm}</td>
                                <td className="border px-3 py-2">{item.bucketCapacityM3}</td>
                                <td className="border px-3 py-2">{item.engineModel}</td>
                                <td className="border px-3 py-2">{item.ratedPower}</td>
                                <td className="border px-3 py-2">{item.fuelTankL}</td>
                                <td className="border px-3 py-2">{item.hydraulicTankOilL}</td>
                                <td className="border px-3 py-2">{item.tireType}</td>
                                <td className="border px-3 py-2">{item.gradeAbility}</td>
                                <td className="border px-3 py-2">{item.cylinder}</td>
                            </tr>
                        ))}
                    </tbody>


                </table>

            </div>


        </div>
    );
}
