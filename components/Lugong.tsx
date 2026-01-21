import Image from "next/image";

export interface WheelLoaderSpec {
  model: string;
  ratedLoadingKg: number;
  enginePowerKw: string;
  maxBucketCapacityM3: number;
  dumpingHeightM: number;
  maxHeightM: number;
  cylinder: number;
  automaticGear: string;
  tire: string;
  operatingWeightKg: number;
  overallDimensionMm: string;
  airConditioning: "X" | "INCLUDE AC";
}


export const lugongWheelLoaderSmall: WheelLoaderSpec[] = [
  {
    model: "T-930",
    ratedLoadingKg: 1600,
    enginePowerKw: "42",
    maxBucketCapacityM3: 0.9,
    dumpingHeightM: 3.2,
    maxHeightM: 4.3,
    cylinder: 4,
    automaticGear: "2F/4R",
    tire: "20.5/70-16",
    operatingWeightKg: 3200,
    overallDimensionMm: "5800 × 1830 × 2800",
    airConditioning: "X",
  },
  {
    model: "T-932",
    ratedLoadingKg: 1800,
    enginePowerKw: "58+Turbo",
    maxBucketCapacityM3: 1.0,
    dumpingHeightM: 3.2,
    maxHeightM: 4.3,
    cylinder: 4,
    automaticGear: "4F/4R",
    tire: "20.5/70-16",
    operatingWeightKg: 3650,
    overallDimensionMm: "5800 × 1980 × 2800",
    airConditioning: "X",
  },
  {
    model: "T-932L",
    ratedLoadingKg: 1500,
    enginePowerKw: "58+Turbo",
    maxBucketCapacityM3: 1.5,
    dumpingHeightM: 4.1,
    maxHeightM: 5.8,
    cylinder: 4,
    automaticGear: "4F/4R",
    tire: "20.5/70-16",
    operatingWeightKg: 3650,
    overallDimensionMm: "5800 × 1980 × 2800",
    airConditioning: "X",
  },
  {
    model: "T-936",
    ratedLoadingKg: 2000,
    enginePowerKw: "76+Turbo",
    maxBucketCapacityM3: 1.1,
    dumpingHeightM: 3.8,
    maxHeightM: 4.6,
    cylinder: 4,
    automaticGear: "4F/4R",
    tire: "16/60-20",
    operatingWeightKg: 4400,
    overallDimensionMm: "6000 × 2030 × 2090",
    airConditioning: "X",
  },
  {
    model: "T-936L",
    ratedLoadingKg: 1800,
    enginePowerKw: "76+Turbo",
    maxBucketCapacityM3: 1.7,
    dumpingHeightM: 4.1,
    maxHeightM: 5.8,
    cylinder: 4,
    automaticGear: "4F/4R",
    tire: "16/60-20",
    operatingWeightKg: 4400,
    overallDimensionMm: "6000 × 2030 × 2090",
    airConditioning: "X",
  },
  {
    model: "LG-940",
    ratedLoadingKg: 2500,
    enginePowerKw: "76+Turbo",
    maxBucketCapacityM3: 1.7,
    dumpingHeightM: 3.8,
    maxHeightM: 4.6,
    cylinder: 4,
    automaticGear: "4F/4R",
    tire: "16/70-20",
    operatingWeightKg: 5050,
    overallDimensionMm: "6300 × 2040 × 3000",
    airConditioning: "INCLUDE AC",
  },
];

export const lugongWheelLoaderLarge: WheelLoaderSpec[] = [
  {
    model: "LG-940L",
    ratedLoadingKg: 2000,
    enginePowerKw: "76+Turbo",
    maxBucketCapacityM3: 1.8,
    dumpingHeightM: 4.5,
    maxHeightM: 5.9,
    cylinder: 4,
    automaticGear: "4F/4R",
    tire: "16/70-20",
    operatingWeightKg: 5050,
    overallDimensionMm: "6300 × 2040 × 3000",
    airConditioning: "INCLUDE AC",
  },
  {
    model: "LG-946",
    ratedLoadingKg: 2800,
    enginePowerKw: "85+Turbo",
    maxBucketCapacityM3: 1.4,
    dumpingHeightM: 4.2,
    maxHeightM: 5.0,
    cylinder: 4,
    automaticGear: "4F/4R",
    tire: "16/70-20",
    operatingWeightKg: 6300,
    overallDimensionMm: "6500 × 2250 × 3020",
    airConditioning: "INCLUDE AC",
  },
  {
    model: "LG-946L",
    ratedLoadingKg: 2200,
    enginePowerKw: "85+Turbo",
    maxBucketCapacityM3: 2.0,
    dumpingHeightM: 4.5,
    maxHeightM: 5.9,
    cylinder: 4,
    automaticGear: "4F/4R",
    tire: "16/70-24",
    operatingWeightKg: 6300,
    overallDimensionMm: "6500 × 2250 × 3020",
    airConditioning: "INCLUDE AC",
  },
  {
    model: "LG-948",
    ratedLoadingKg: 3000,
    enginePowerKw: "92+Turbo",
    maxBucketCapacityM3: 1.8,
    dumpingHeightM: 4.2,
    maxHeightM: 5.2,
    cylinder: 6,
    automaticGear: "4F/4R",
    tire: "17.5-25",
    operatingWeightKg: 7200,
    overallDimensionMm: "7000 × 2440 × 3030",
    airConditioning: "INCLUDE AC",
  },
  {
    model: "LG-948L",
    ratedLoadingKg: 2500,
    enginePowerKw: "92+Turbo",
    maxBucketCapacityM3: 2.2,
    dumpingHeightM: 4.5,
    maxHeightM: 5.9,
    cylinder: 6,
    automaticGear: "4F/4R",
    tire: "18.90-25",
    operatingWeightKg: 8385,
    overallDimensionMm: "7130 × 2490 × 3050",
    airConditioning: "INCLUDE AC",
  },
];


export default function Lugong() {
  return (
    <div>
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/wheel.jpg"
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
              <th className="border px-3 py-2">Cylinder</th>
              <th className="border px-3 py-2">Automatic Gear</th>
              <th className="border px-3 py-2">Tire</th>
              <th className="border px-3 py-2">Oprating Weight (KG)</th>
              <th className="border px-3 py-2">Overall Dimension (MM)</th>
              <th className="border px-3 py-2">Air Coditioning (AC)</th>
            </tr>
          </thead>

          <tbody>
            {lugongWheelLoaderSmall.map((item) => (
              <tr key={item.model} className="text-center hover:bg-gray-100">
                <td className="border px-1 py-2 font-semibold">
                  {item.model}
                </td>
                <td className="border px-3 py-2">
                  {item.ratedLoadingKg}
                </td>
                <td className="border px-3 py-2">
                  {item.enginePowerKw}
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
                  {item.automaticGear}
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
                  {item.airConditioning}
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
              <th className="border px-3 py-2">Rated Load (KG)</th>
              <th className="border px-3 py-2">Engine Power</th>
              <th className="border px-3 py-2">Max Bucket Capacity (M3)</th>
              <th className="border px-3 py-2">Dumping Height (M)</th>
              <th className="border px-3 py-2">Max Height (M)</th>
              <th className="border px-3 py-2">Cylinder</th>
              <th className="border px-3 py-2">Automatic Gear</th>
              <th className="border px-3 py-2">Tire</th>
              <th className="border px-3 py-2">Oprating Weight (KG)</th>
              <th className="border px-3 py-2">Overall Dimension (MM)</th>
              <th className="border px-3 py-2">Air Coditioning (AC)</th>
            </tr>
          </thead>

          <tbody>
            {lugongWheelLoaderLarge.map(( item : WheelLoaderSpec) => (
              <tr key={item.model} className="text-center hover:bg-gray-100">
                <td className="border px-1 py-2 font-semibold">
                  {item.model}
                </td>
                <td className="border px-3 py-2">
                  {item.ratedLoadingKg}
                </td>
                <td className="border px-3 py-2">
                  {item.enginePowerKw}
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
                  {item.automaticGear}
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
                  {item.airConditioning}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
 

    </div>
  );
}
