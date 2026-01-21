
import Image from "next/image";
export interface ConcreteMixerPumpSpec {
    model: string;
    maxConcreteOutputM3PerH: number;
    maxConcretePumpingPressureMpa: number;
    outletInnerDiameterMm: number;
    engineBrand: string;
    ratedPowerKw: number;
    hydraulicTankCapacityL: number;
    dimensionMm: string;
    maxDeliveringDistance: string; // vertical / horizontal (m)
    deliveringPipeInnerDiameterMm: number;
    mainWeightKg: number;
    pumpingSystemPressureMpa: number;
    concreteValveType: string;
    concreteCylinder: string; // diameter x stroke
    hopperCapacity: string; // capacity x height
    maximumAggregate: string;
    lubricantSystem: string;
    highLowPressureConversion: string;
    remoteControl: string;
    ratedSpeedRpm: number;
    ratedFuelConsumptionLPerH: number;
    hydraulicSystem: string;
    displacementOfMainOilPumpMl: number;
    mixingSystemPressureMpa: number;
    hostWeightKg: number;
}



export const concreteMixerPumpBDMG: ConcreteMixerPumpSpec[] = [
    {
        model: "JBT40-13-450R",
        maxConcreteOutputM3PerH: 40,
        maxConcretePumpingPressureMpa: 13,
        outletInnerDiameterMm: 125,
        engineBrand: "WEICHAI",
        ratedPowerKw: 72,
        hydraulicTankCapacityL: 160,
        dimensionMm: "5200 × 2280 × 2900",
        maxDeliveringDistance: "100 / 300 m",
        deliveringPipeInnerDiameterMm: 100,
        mainWeightKg: 6000,
        pumpingSystemPressureMpa: 31,
        concreteValveType: "S Valve",
        concreteCylinder: "Φ160 × 1000 mm",
        hopperCapacity: "450 L × 1000 mm",
        maximumAggregate: "Pebble 35 mm, Gravel 40 mm",
        lubricantSystem: "Automatic Electric Lubrication",
        highLowPressureConversion: "No",
        remoteControl: "Wireless Remote Control",
        ratedSpeedRpm: 1800,
        ratedFuelConsumptionLPerH: 12.0,
        hydraulicSystem: "Open Circuit",
        displacementOfMainOilPumpMl: 112,
        mixingSystemPressureMpa: 12,
        hostWeightKg: 4500,
    },
];



export default function ConcratePumpMix() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/concrete.png"
                    alt="Wheel Loader SYZG"
                    fill
                    className="object-contain rounded-md"
                    priority
                />
            </div>

            <div className="overflow-x-auto mt-0.5">
                <table className="min-w-full border border-gray-300 text-sm text-black">
                    <thead className="bg-yellow-400 text-black">
                        <tr>
                            <th className="border px-3 py-2">Model</th>
                            <th className="border px-3 py-2">Max Output (m³/h)</th>
                            <th className="border px-3 py-2">Max Pressure (MPa)</th>
                            <th className="border px-3 py-2">Outlet Ø (mm)</th>
                            <th className="border px-3 py-2">Engine</th>
                            <th className="border px-3 py-2">Power (kW)</th>
                            <th className="border px-3 py-2">Hydraulic Tank (L)</th>
                            <th className="border px-3 py-2">Dimension (mm)</th>
                            <th className="border px-3 py-2">Deliver Distance (V/H)</th>
                            <th className="border px-3 py-2">Pipe Ø (mm)</th>
                            <th className="border px-3 py-2">Main Weight (kg)</th>
                            <th className="border px-3 py-2">Pump Pressure (MPa)</th>
                            <th className="border px-3 py-2">Valve Type</th>
                            <th className="border px-3 py-2">Concrete Cylinder</th>
                            <th className="border px-3 py-2">Hopper</th>
                            <th className="border px-3 py-2">Max Aggregate</th>
                            <th className="border px-3 py-2">Lubrication</th>
                            <th className="border px-3 py-2">Pressure Switch</th>
                            <th className="border px-3 py-2">Remote</th>
                            <th className="border px-3 py-2">Rated Speed (RPM)</th>
                            <th className="border px-3 py-2">Fuel (L/h)</th>
                            <th className="border px-3 py-2">Hydraulic System</th>
                            <th className="border px-3 py-2">Pump Displacement (ml)</th>
                            <th className="border px-3 py-2">Mix Pressure (MPa)</th>
                            <th className="border px-3 py-2">Host Weight (kg)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {concreteMixerPumpBDMG.map((item) => (
                            <tr key={item.model} className="text-center hover:bg-gray-100">
                                <td className="border px-2 py-2 font-semibold">{item.model}</td>
                                <td className="border px-3 py-2">{item.maxConcreteOutputM3PerH}</td>
                                <td className="border px-3 py-2">{item.maxConcretePumpingPressureMpa}</td>
                                <td className="border px-3 py-2">{item.outletInnerDiameterMm}</td>
                                <td className="border px-3 py-2">{item.engineBrand}</td>
                                <td className="border px-3 py-2">{item.ratedPowerKw}</td>
                                <td className="border px-3 py-2">{item.hydraulicTankCapacityL}</td>
                                <td className="border px-3 py-2">{item.dimensionMm}</td>
                                <td className="border px-3 py-2">{item.maxDeliveringDistance}</td>
                                <td className="border px-3 py-2">{item.deliveringPipeInnerDiameterMm}</td>
                                <td className="border px-3 py-2">{item.mainWeightKg}</td>
                                <td className="border px-3 py-2">{item.pumpingSystemPressureMpa}</td>
                                <td className="border px-3 py-2">{item.concreteValveType}</td>
                                <td className="border px-3 py-2">{item.concreteCylinder}</td>
                                <td className="border px-3 py-2">{item.hopperCapacity}</td>
                                <td className="border px-3 py-2">{item.maximumAggregate}</td>
                                <td className="border px-3 py-2">{item.lubricantSystem}</td>
                                <td className="border px-3 py-2">{item.highLowPressureConversion}</td>
                                <td className="border px-3 py-2">{item.remoteControl}</td>
                                <td className="border px-3 py-2">{item.ratedSpeedRpm}</td>
                                <td className="border px-3 py-2">{item.ratedFuelConsumptionLPerH}</td>
                                <td className="border px-3 py-2">{item.hydraulicSystem}</td>
                                <td className="border px-3 py-2">{item.displacementOfMainOilPumpMl}</td>
                                <td className="border px-3 py-2">{item.mixingSystemPressureMpa}</td>
                                <td className="border px-3 py-2">{item.hostWeightKg}</td>
                            </tr>
                        ))}
                    </tbody>



                </table>

            </div>


        </div>
    );
}
