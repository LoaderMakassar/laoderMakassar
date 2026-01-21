import Image from "next/image";

export interface WheelDumperSpec {
    model: string;

    overallDimensionsMm: string;
    cargoBodyDimensionsMm: string;

    wheelBaseMm: number;
    wheelTrackMm: number;
    minGroundClearanceMm: number;

    curbWeightKg: number;
    ratedPayloadKg: number;
    personsInCab: number;
    grossVehicleWeightKg: number;

    maxSpeedKmH: number;
    maxSlopeClimbPercent: number;
    minTurningRadiusM: number;

    engineType: string;
    displacementL: number;
    ratedHorsepower: number;

    ratedVoltage: string;
    battery: string;
}

export const wheelDumperBD15: WheelDumperSpec = {
    model: "BD15",

    overallDimensionsMm: "3650 × 1850 × 1780",
    cargoBodyDimensionsMm: "1900 × 1600 × 450",

    wheelBaseMm: 2525,
    wheelTrackMm: 1340,
    minGroundClearanceMm: 260,

    curbWeightKg: 1260,
    ratedPayloadKg: 1500,
    personsInCab: 2,
    grossVehicleWeightKg: 2890,

    maxSpeedKmH: 50,
    maxSlopeClimbPercent: 15,
    minTurningRadiusM: 3.57,

    engineType: "CCZS1115B-CK",
    displacementL: 1.194,
    ratedHorsepower: 22,

    ratedVoltage: "12V",
    battery: "CK6-QW-120MF",
};





export default function WheelDump() {
    return (
        <div>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/images/wheelDump.png"
                    alt="Wheel Loader SYZG"
                    fill
                    className="object-contain rounded-md"
                    priority
                />
            </div>

            <div className="overflow-x-auto mt-0.5">
                <table className="min-w-full border border-gray-300 text-sm text-black">
                    <thead className="bg-teal-600 text-white">
                        <tr>
                            <th className="border px-3 py-2">Item</th>
                            <th className="border px-3 py-2">Specification</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm">
                        <tr>
                            <td className="border px-3 py-2 font-medium">Overall Dimensions (L×W×H) mm</td>
                            <td className="border px-3 py-2">3650 × 1850 × 1780</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Cargo Body Dimensions (L×W×H) mm</td>
                            <td className="border px-3 py-2">1900 × 1600 × 450</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Wheel Base (mm)</td>
                            <td className="border px-3 py-2">2525</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Wheel Track (Front / Rear) mm</td>
                            <td className="border px-3 py-2">1340</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Min. Ground Clearance (mm)</td>
                            <td className="border px-3 py-2">260</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Curb Weight (kg)</td>
                            <td className="border px-3 py-2">1260</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Rated Payload (kg)</td>
                            <td className="border px-3 py-2">1500</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Persons in Cab</td>
                            <td className="border px-3 py-2">2</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Gross Vehicle Weight (kg)</td>
                            <td className="border px-3 py-2">2890</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Max Speed (km/h)</td>
                            <td className="border px-3 py-2">50</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Max Slope of Climb (%)</td>
                            <td className="border px-3 py-2">15</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Min. Turning Radius (m)</td>
                            <td className="border px-3 py-2">3.57</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Engine Type</td>
                            <td className="border px-3 py-2">CCZS1115B-CK</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Displacement (L)</td>
                            <td className="border px-3 py-2">1.194</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Rated Horsepower</td>
                            <td className="border px-3 py-2">22</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Rated Voltage</td>
                            <td className="border px-3 py-2">12V</td>
                        </tr>

                        <tr>
                            <td className="border px-3 py-2 font-medium">Battery</td>
                            <td className="border px-3 py-2">CK6-QW-120MF</td>
                        </tr>
                    </tbody>


                </table>

            </div>


        </div>
    );
}
