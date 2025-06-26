import Image from 'next/image';
import Link from 'next/link';
import { Game } from '@/types/game';

interface GameCardProps {
  game: Game;
}

export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Link
      href={`/games/${game.id}`}
      className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="aspect-video relative">
        <Image
          src={game.thumbnailUrl}
          alt={game.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
        {game.rating && (
          <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-sm">
            ⭐ {game.rating.toFixed(1)}
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-1">
          {game.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {game.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            {game.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          {game.playCount !== undefined && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {game.playCount.toLocaleString()} plays
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};
