import Image from "next/image";

export type MiniDumperSpec = {
    model: string;
    engineModel: string;
    enginePowerKw: number;
    cylinder: string;
    transmissionType: string;
    gearSpeed: string;
    dumpingHeightMm: number;
    dumpSizeCm: string;
    loadCapacityKg: number | string;
    vehicleDimensionMm: string;
    hydraulicPump: string;
    pumpHydLtMin: string;
    trackWidthMm: number;
    operatingWeightKg: number;
    drivingSpeedKmH: number;
};

export const miniDumperData: MiniDumperSpec[] = [
    {
        model: "T-30",
        engineModel: "CHANGQIAN L25M",
        enginePowerKw: 17.5,
        cylinder: "1 Cylinder",
        transmissionType: "Shifter Fork",
        gearSpeed: "3F + 1R",
        dumpingHeightMm: 1600,
        dumpSizeCm: "200 x 150 x 50",
        loadCapacityKg: 1000,
        vehicleDimensionMm: "3000 x 1500 x 2100",
        hydraulicPump: "Gear Pump (Telescopic cyl)",
        pumpHydLtMin: "368 GPM",
        trackWidthMm: 320,
        operatingWeightKg: 1950,
        drivingSpeedKmH: 15,
    },
    {
        model: "T-40",
        engineModel: "WEIFANG 4DHY4",
        enginePowerKw: 40,
        cylinder: "4 Cylinder",
        transmissionType: "Shifter Fork",
        gearSpeed: "3F + 1R",
        dumpingHeightMm: 1600,
        dumpSizeCm: "210 x 150 x 60",
        loadCapacityKg: 1500,
        vehicleDimensionMm: "3300 x 1500 x 2100",
        hydraulicPump: "Gear Pump (Telescopic cyl)",
        pumpHydLtMin: "368 GPM",
        trackWidthMm: 350,
        operatingWeightKg: 2400,
        drivingSpeedKmH: 24,
    },
    {
        model: "T-50",
        engineModel: "HJ - JH4102Y4-2",
        enginePowerKw: 65,
        cylinder: "4 Cylinder",
        transmissionType: "Shifter Fork",
        gearSpeed: "3F + 1R",
        dumpingHeightMm: 1680,
        dumpSizeCm: "205 x 150 x 60",
        loadCapacityKg: 2200,
        vehicleDimensionMm: "3400 x 1500 x 2100",
        hydraulicPump: "Gear Pump (Telescopic cyl)",
        pumpHydLtMin: "368 GPM",
        trackWidthMm: 350,
        operatingWeightKg: 2800,
        drivingSpeedKmH: 24,
    },
    {
        model: "T-60",
        engineModel: "HUAWEI ZH4BY4",
        enginePowerKw: 65,
        cylinder: "4 Cylinder",
        transmissionType: "Shifter Fork",
        gearSpeed: "3F + 1R",
        dumpingHeightMm: 2570,
        dumpSizeCm: "217 x 168 x 60",
        loadCapacityKg: "2600–3000",
        vehicleDimensionMm: "3700 x 1650 x 2200",
        hydraulicPump: "Gear Pump (Telescopic cyl)",
        pumpHydLtMin: "368 GPM",
        trackWidthMm: 350,
        operatingWeightKg: 3400,
        drivingSpeedKmH: 24,
    },
];




export default function MiniDumper() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/miniDum.png"
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
                            <th className="border px-3 py-2">Engine Model</th>
                            <th className="border px-3 py-2">Power (kW)</th>
                            <th className="border px-3 py-2">Cylinder</th>
                            <th className="border px-3 py-2">Transmission</th>
                            <th className="border px-3 py-2">Gear</th>
                            <th className="border px-3 py-2">Dump Height (mm)</th>
                            <th className="border px-3 py-2">Dump Size (cm)</th>
                            <th className="border px-3 py-2">Load (kg)</th>
                            <th className="border px-3 py-2">Dimension (mm)</th>
                            <th className="border px-3 py-2">Hydraulic Pump</th>
                            <th className="border px-3 py-2">Pump Flow</th>
                            <th className="border px-3 py-2">Track Width (mm)</th>
                            <th className="border px-3 py-2">Weight (kg)</th>
                            <th className="border px-3 py-2">Speed (km/h)</th>
                        </tr>
                    </thead>


                    <tbody >
                        {miniDumperData.map((item) => (
                            <tr key={item.model} className="text-center hover:bg-gray-100">
                                <td className="border px-2 py-2 font-semibold">
                                    {item.model}</td>
                                <td className="border px-2 py-2 font-semibold">{item.engineModel}</td>
                                <td className="border px-2 py-2 font-semibold">{item.enginePowerKw}</td>
                                <td className="border px-2 py-2 font-semibold">{item.cylinder}</td>
                                <td className="border px-2 py-2 font-semibold">{item.transmissionType}</td>
                                <td className="border px-2 py-2 font-semibold">{item.gearSpeed}</td>
                                <td className="border px-2 py-2 font-semibold">{item.dumpingHeightMm}</td>
                                <td className="border px-2 py-2 font-semibold">{item.dumpSizeCm}</td>
                                <td className="border px-2 py-2 font-semibold">{item.loadCapacityKg}</td>
                                <td className="border px-2 py-2 font-semibold">{item.vehicleDimensionMm}</td>
                                <td className="border px-2 py-2 font-semibold">{item.hydraulicPump}</td>
                                <td className="border px-2 py-2 font-semibold">{item.pumpHydLtMin}</td>
                                <td className="border px-2 py-2 font-semibold">{item.trackWidthMm}</td>
                                <td className="border px-2 py-2 font-semibold">{item.operatingWeightKg}</td>
                                <td className="border px-2 py-2 font-semibold">{item.drivingSpeedKmH}</td>
                            </tr>
                        ))}
                    </tbody>


                </table>

            </div>


        </div>
    );
}
