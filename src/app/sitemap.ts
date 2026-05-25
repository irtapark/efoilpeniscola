import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://efoilpeniscola.com';
  const languages = ['es', 'en', 'fr'];
  const services = [
    'paddle-surf',
    'kayak',
    'vela-ligera',
    'windsurf',
    'excursiones',
    'kitesurf',
    'wingsup',
    'surf',
    'sup-pilates',
    'colegios-y-grupos'
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // Localized homepages
  languages.forEach((lang) => {
    sitemapEntries.push({
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });

    // Localized service pages
    services.forEach((service) => {
      sitemapEntries.push({
        url: `${baseUrl}/${lang}/${service}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  return sitemapEntries;
}
