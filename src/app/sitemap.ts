import { MetadataRoute } from 'next';
import { sampleGames } from '@/lib/sample-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vampire.it.com';

  const gameRoutes = sampleGames.map((game) => ({
    url: `${baseUrl}/games/${game.id}`,
    lastModified: new Date(game.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/popular`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...gameRoutes,
  ];
}
