import Image from "next/image";

export interface WheelLoaderSpec {
  model: string;
  ratedLoadingKg: number;
  enginePower: string;
  bucketCapacityM3: number;
  dumpingHeightM: number;
  maxHeightM: number;
  cylinder: number;
  gear: string;
  tire: string;
  operatingWeightKg: number;
  overallDimension: string
  AirConditioning: string
}

export const wheelLoaderData: WheelLoaderSpec[] = [
  {
    model: "ZL-926",
    ratedLoadingKg: 1000,
    enginePower: "42",
    bucketCapacityM3: 0.5,
    dumpingHeightM: 3.2,
    maxHeightM: 3.7,
    cylinder: 4,
    gear: "2F/2R",
    tire: "7.50-16",
    operatingWeightKg: 2800,
    overallDimension: "4970 X 1350 X 2550",
    AirConditioning: "X"
  },
  {
    model: "ZL-930",
    ratedLoadingKg: 1600,
    enginePower: "42",
    bucketCapacityM3: 0.8,
    dumpingHeightM: 3.3,
    maxHeightM: 4.3,
    cylinder: 4,
    gear: "2F/2R",
    tire: "20.5-16",
    operatingWeightKg: 3500,
    overallDimension: "5840 X 1900 X 2800",
    AirConditioning: "X"
  },
  {
    model: "ZL-932",
    ratedLoadingKg: 1800,
    enginePower: "60 + Turbo",
    bucketCapacityM3: 0.9,
    dumpingHeightM: 3.3,
    maxHeightM: 4.3,
    cylinder: 4,
    gear: "4F/4R",
    tire: "20.5-16",
    operatingWeightKg: 3900,
    overallDimension: "5840 X 1900 X 2800",
    AirConditioning: "X",
  },
  {
    model: "ZL-932L",
    ratedLoadingKg: 1500,
    enginePower: "60 + Turbo",
    bucketCapacityM3: 1.5,
    dumpingHeightM: 4.2,
    maxHeightM: 5.5,
    cylinder: 4,
    gear: "4F/4R",
    tire: "20.5-16",
    operatingWeightKg: 5300,
    overallDimension: "6900 X 2000 X 2820",
    AirConditioning: "X",
  },
  {
    model: "ZL-936",
    ratedLoadingKg: 2000,
    enginePower: "81 + Turbo",
    bucketCapacityM3: 1.0,
    dumpingHeightM: 3.5,
    maxHeightM: 4.6,
    cylinder: 4,
    gear: "4F/4R",
    tire: "20/5-16",
    operatingWeightKg: 4800,
    overallDimension: "5940 X 2050 X 2950",
    AirConditioning: "X"
  },
  {
    model: "ZL-936L",
    ratedLoadingKg: 1800,
    enginePower: "81 + Turbo",
    bucketCapacityM3: 1.7,
    dumpingHeightM: 4.2,
    maxHeightM: 5.5,
    cylinder: 4,
    gear: "4F/4R",
    tire: "20.5-16",
    operatingWeightKg: 5000,
    overallDimension: "6900 X 2200 X 2950",
    AirConditioning: "X"
  },
];
export const wheelLoaderData2: WheelLoaderSpec[] = [
  {
    model: "ZL-940",
    ratedLoadingKg: 2500,
    enginePower: "81+Turbo",
    bucketCapacityM3: 1.2,
    dumpingHeightM: 3.5,
    maxHeightM: 4.6,
    cylinder: 4,
    gear: "4F/4R",
    tire: "16.7-20",
    operatingWeightKg: 5500,
    overallDimension: "6900 × 2200 × 2950",
    AirConditioning: "X",
  },
  {
    model: "ZL-940L",
    ratedLoadingKg: 2000,
    enginePower: "81+Turbo",
    bucketCapacityM3: 1.8,
    dumpingHeightM: 4.5,
    maxHeightM: 5.8,
    cylinder: 4,
    gear: "4F/4R",
    tire: "16.7-20",
    operatingWeightKg: 5900,
    overallDimension: "7000 × 2400 × 2950",
    AirConditioning: "X",
  },
  {
    model: "ZL-946",
    ratedLoadingKg: 2800,
    enginePower: "85+Turbo",
    bucketCapacityM3: 1.4,
    dumpingHeightM: 4.2,
    maxHeightM: 5.0,
    cylinder: 4,
    gear: "4F/4R",
    tire: "16/70-20",
    operatingWeightKg: 6565,
    overallDimension: "6600 × 2000 × 3000",
    AirConditioning: "INCLUDE",
  },
  {
    model: "ZL-946L",
    ratedLoadingKg: 2200,
    enginePower: "82+Turbo",
    bucketCapacityM3: 2.0,
    dumpingHeightM: 4.8,
    maxHeightM: 5.9,
    cylinder: 4,
    gear: "4F/4R",
    tire: "16/70-24",
    operatingWeightKg: 7000,
    overallDimension: "7600 × 2250 × 3000",
    AirConditioning: "INCLUDE",
  },
  {
    model: "ZL-948",
    ratedLoadingKg: 3000,
    enginePower: "92+Turbo",
    bucketCapacityM3: 1.8,
    dumpingHeightM: 4.2,
    maxHeightM: 5.2,
    cylinder: 6,
    gear: "4F/4R",
    tire: "17.5-25",
    operatingWeightKg: 7200,
    overallDimension: "7000 × 2440 × 3030",
    AirConditioning: "INCLUDE",
  },
  {
    model: "ZL-948L",
    ratedLoadingKg: 2500,
    enginePower: "92+Turbo",
    bucketCapacityM3: 2.2,
    dumpingHeightM: 4.5,
    maxHeightM: 5.9,
    cylinder: 6,
    gear: "4F/4R",
    tire: "18.9-25",
    operatingWeightKg: 8385,
    overallDimension: "7130 × 2490 × 3050",
    AirConditioning: "INCLUDE",
  },
];



export default function WheelLoaderTable() {
  return (
    <div>
      <div className="relative w-full h-[400px]">
        <Image
          src="/images/gambar_2.png"
          alt="Wheel Loader SYZG"
          fill
          className="object-cover rounded-md"
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
            {wheelLoaderData.map((item) => (
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
                  {item.bucketCapacityM3}
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
                  {item.gear}
                </td>
                <td className="border px-3 py-2">
                  {item.tire}
                </td>
                <td className="border px-3 py-2">
                  {item.operatingWeightKg}
                </td>
                <td className="border px-3 py-2">
                  {item.overallDimension}
                </td>
                <td className="border px-3 py-2">
                  {item.AirConditioning}
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
            {wheelLoaderData2.map((item) => (
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
                  {item.bucketCapacityM3}
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
                  {item.gear}
                </td>
                <td className="border px-3 py-2">
                  {item.tire}
                </td>
                <td className="border px-3 py-2">
                  {item.operatingWeightKg}
                </td>
                <td className="border px-3 py-2">
                  {item.overallDimension}
                </td>
                <td className="border px-3 py-2">
                  {item.AirConditioning}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>


    </div>
  );
}
