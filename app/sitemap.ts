import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.kuafu.co.uk";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/route-generator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/jobs`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
    },
    {
  url: `${baseUrl}/guides/best-countries-for-digital-nomads`,
  lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
  url: `${baseUrl}/guides/cheap-summer-destinations-europe`,
  lastModified: new Date(),
},
{
  url: `${baseUrl}/guides/where-is-summer-now`,
  lastModified: new Date(),
},
    
  ];
}