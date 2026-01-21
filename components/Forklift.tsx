import Image from "next/image";

export interface RoughTerrainForkliftSpec {
  model?: string;
  overallDimensionMm: string;
  vehicleMassKg: number;
  engineModel: string;
  ratedPowerKw: number;
  tireType: string;
  tireSize: string;
  minimumTurningRadiusMm: number;
  wheelbaseMm: number;
  maximumSpeedKmh: number;
  maximalLiftingMm: number;
  forkLengthCm: number;
}

export const roughTerrainForkliftBDMG: RoughTerrainForkliftSpec[] = [
  {
    model: "Rough Terrain Forklift",
    overallDimensionMm: "4000 × 1810 × 2420",
    vehicleMassKg: 4800,
    engineModel: "YUNNEI YN25GBZ",
    ratedPowerKw: 55,
    tireType: "CHAOYANG 20.5",
    tireSize: "20.5/70-16",
    minimumTurningRadiusMm: 2900,
    wheelbaseMm: 2160,
    maximumSpeedKmh: 30,
    maximalLiftingMm: 3500,
    forkLengthCm: 120,
  },
];




export default function Forklift() {
    return (
       <div>
  {/* Image */}
  <div className="relative w-full h-[400px]">
    <Image
      src="/images/Rough.png"
      alt="Rough Terrain Forklift BDMG"
      fill
      className="object-contain rounded-md"
      priority
    />
  </div>

  {/* Table */}
  <div className="overflow-x-auto mt-1">
    <table className="min-w-full border border-gray-300 text-sm text-black">
      <thead className="bg-yellow-400">
        <tr>
          <th className="border px-3 py-2">Model</th>
          <th className="border px-3 py-2">Engine Model</th>
          <th className="border px-3 py-2">Rated Power (kW)</th>
          <th className="border px-3 py-2">Vehicle Mass (KG)</th>
          <th className="border px-3 py-2">Overall Dimension (MM)</th>
          <th className="border px-3 py-2">Tire Type</th>
          <th className="border px-3 py-2">Tire Size</th>
          <th className="border px-3 py-2">Max Speed (KM/H)</th>
          <th className="border px-3 py-2">Max Lifting (MM)</th>
          <th className="border px-3 py-2">Fork Length (CM)</th>
        </tr>
      </thead>

      <tbody>
        {roughTerrainForkliftBDMG.map((item) => (
          <tr
            key={item.model}
            className="text-center hover:bg-gray-100"
          >
            <td className="border px-2 py-2 font-semibold">
              {item.model}
            </td>
            <td className="border px-3 py-2">
              {item.engineModel}
            </td>
            <td className="border px-3 py-2">
              {item.ratedPowerKw}
            </td>
            <td className="border px-3 py-2">
              {item.vehicleMassKg}
            </td>
            <td className="border px-3 py-2">
              {item.overallDimensionMm}
            </td>
            <td className="border px-3 py-2">
              {item.tireType}
            </td>
            <td className="border px-3 py-2">
              {item.tireSize}
            </td>
            <td className="border px-3 py-2">
              {item.maximumSpeedKmh}
            </td>
            <td className="border px-3 py-2">
              {item.maximalLiftingMm}
            </td>
            <td className="border px-3 py-2">
              {item.forkLengthCm}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
}
