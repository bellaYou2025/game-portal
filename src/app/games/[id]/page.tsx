import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sampleGames } from '@/lib/sample-data';
import FullscreenButton from '@/components/FullscreenButton';

type Props = {
  params: { id: string };
};

type GenerateMetadataProps = {
  params: { id: string };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  // 确保在使用params.id之前等待它
  const id = await params.id;
  const game = sampleGames.find((g) => g.id === id);

  if (!game) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.',
    };
  }

  return {
    title: `${game.title} - Game Portal`,
    description: game.description,
    openGraph: {
      title: `${game.title} - Game Portal`,
      description: game.description,
      images: [game.thumbnailUrl],
    },
  };
}

export default async function GamePage({ params }: Props) {
  // 确保在使用params.id之前等待它
  const id = await params.id;
  const game = sampleGames.find((g) => g.id === id);

  if (!game) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
          >
            ← Back to Games
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="aspect-video relative w-full">
            <iframe
              src={game.gameUrl}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen; payment"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-popups-to-escape-sandbox allow-downloads allow-modals"
              loading="lazy"
              referrerPolicy="origin"
            />
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                {game.title}
              </h1>
              <FullscreenButton />
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {game.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {game.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              {game.rating && (
                <div className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>{game.rating.toFixed(1)}</span>
                </div>
              )}
              {game.playCount && (
                <div>{game.playCount.toLocaleString()} plays</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
