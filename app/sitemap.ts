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
{
  url: `${baseUrl}/guides/where-to-travel-in-december-from-uk`,
  lastModified: new Date(),
},
    {
  url: `${baseUrl}/guides/best-countries-to-work-abroad-uk`,
  lastModified: new Date(),
},
{
  url: `${baseUrl}/guides/january-winter-sun-destinations`,
  lastModified: new Date(),
},
{
  url: "https://www.kuafu.co.uk/guides/cheapest-countries-to-live-abroad",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://www.kuafu.co.uk/guides/working-holiday-visas-explained",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://www.kuafu.co.uk/guides/best-esim-for-travel",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://www.kuafu.co.uk/guides/best-travel-insurance-for-digital-nomads",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.8,
},
{
  url: "https://www.kuafu.co.uk/destinations",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},
{
  url: "https://www.kuafu.co.uk/destinations",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.9,
},
{
  url: "https://www.kuafu.co.uk/destinations/bali",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/thailand",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/vietnam",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/cape-town",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/mexico",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/japan",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/lisbon",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/barcelona",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/sydney",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/dubai",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
{
  url: "https://www.kuafu.co.uk/destinations/seychelles",
  lastModified: new Date(),
  changeFrequency: "weekly",
  priority: 0.85,
},
  ];
}