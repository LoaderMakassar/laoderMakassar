import { MetadataRoute } from "next";

export const dynamic = "force-static"; // ⬅️ TAMBAHKAN INI

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://loadermakassar.id/",
      lastModified: new Date(),
    },
    {
      url: "https://loadermakassar.id/gallery",
      lastModified: new Date(),
    },
    {
      url: "https://loadermakassar.id/produk",
      lastModified: new Date(),
    },
  ];
}
