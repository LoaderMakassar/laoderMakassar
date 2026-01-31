import { MetadataRoute } from "next";

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
