'use client';

import { Game } from '@/types/game';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const [imageError, setImageError] = useState(false);

  const fallbackImage = `https://via.placeholder.com/800x600/2563eb/ffffff/png?text=${encodeURIComponent(
    game.title
  )}`;

  return (
    <Link
      href={game.gameUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 group-hover:transform group-hover:scale-105">
        <div className="relative h-48 w-full">
          <Image
            src={imageError ? fallbackImage : game.thumbnailUrl}
            alt={game.title}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
            unoptimized={imageError}
          />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {game.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
            {game.description}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {game.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-4">
            <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
              {game.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
