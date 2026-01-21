import Image from "next/image";

export interface WheelLoaderSpec {
  model: string;
  ratedLoadingKg: number;
  enginePower: string;
  maxBucketCapacityM3: number;
  dumpingHeightM: number;
  maxHeightM: number;
  tire: string;
  operatingWeightKg: number;
  overallDimensionMm: string;
  cylinder?:string;
  transmissionType?: string;
}


export const lgmaWheelLoaderData: WheelLoaderSpec[] = [
  {
    model: "LG-955H",
    ratedLoadingKg: 5000,
    enginePower: "160+SKN",
    maxBucketCapacityM3: 3.0,
    dumpingHeightM: 4.4,
    maxHeightM: 5.6,
    tire: "23.5-25 L3 16PR TT",
    operatingWeightKg: 17200 , // ±300 kg
    overallDimensionMm: "8450 × 3000 × 3400",
    cylinder: "6 / 9.726L",
    transmissionType: "Planetary Powershift",
  },
  {
    model: "LG-930",
    ratedLoadingKg: 1800,
    enginePower: "58+Turbo",
    maxBucketCapacityM3: 1.0,
    dumpingHeightM: 3.2,
    maxHeightM: 4.3,
    tire: "20.5/70-16",
    operatingWeightKg: 3650,
    overallDimensionMm: "5800 × 1980 × 2800",
    cylinder: "4",
    transmissionType: "4F/4R",
  },
  {
    model: "LG-938",
    ratedLoadingKg: 2500,
    enginePower: "76+Turbo",
    maxBucketCapacityM3: 1.2,
    dumpingHeightM: 3.8,
    maxHeightM: 4.6,
    tire: "16/70-20",
    operatingWeightKg: 5050,
    overallDimensionMm: "6300 × 2040 × 3000",
    cylinder: "4",
    transmissionType: "4F/4R",
  },
  {
    model: "LG-939",
    ratedLoadingKg: 2800,
    enginePower: "85+Turbo",
    maxBucketCapacityM3: 1.4,
    dumpingHeightM: 4.2,
    maxHeightM: 5.0,
    tire: "16/70-20",
    operatingWeightKg: 6300,
    overallDimensionMm: "6500 × 2250 × 3020",
    cylinder: "4",
    transmissionType: "4F/4R",
  },
];



export default function LGMA() {
  return (
    <div>
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/gambar_5.png"
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
              <th className="border px-3 py-2">Rated Load (KG)</th>
              <th className="border px-3 py-2">Engine Power</th>
              <th className="border px-3 py-2">Max Bucket Capacity (M3)</th>
              <th className="border px-3 py-2">Dumping Height (M)</th>
              <th className="border px-3 py-2">Max Height (M)</th>

              <th className="border px-3 py-2">No. Of Cylinders / Displacement</th>
              <th className="border px-3 py-2">Tire</th>
              <th className="border px-3 py-2">Oprating Weight (KG)</th>
              <th className="border px-3 py-2">Overall Dimension (MM)</th>
              <th className="border px-3 py-2">Transmission Type</th>
            </tr>
          </thead>

          <tbody>
            {lgmaWheelLoaderData.map((item : WheelLoaderSpec) => (
              <tr key={item.model} className="text-center hover:bg-gray-100">
                <td className="border px-1 py-2 font-semibold">
                  {item.model}
                </td>
                <td className="border px-3 py-2">
                  {item.ratedLoadingKg}
                </td>
                <td className="border px-3 py-2">
                  {item.enginePower}
                </td>
                <td className="border px-3 py-2">
                  {item.maxBucketCapacityM3}
                </td>
                <td className="border px-3 py-2">
                  {item.dumpingHeightM}
                </td>
                <td className="border px-3 py-2">
                  {item.maxHeightM}
                </td>
                <td className="border px-3 py-2">
                  {item.cylinder}
                </td>
            
                <td className="border px-3 py-2">
                  {item.tire}
                </td>
                <td className="border px-3 py-2">
                  {item.operatingWeightKg}
                </td>
                <td className="border px-3 py-2">
                  {item.overallDimensionMm}
                </td>
                <td className="border px-3 py-2">
                  {item.transmissionType}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
 
 
    </div>
  );
}
