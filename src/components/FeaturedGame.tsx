import { Game } from '@/types/game';
import Image from 'next/image';
import Link from 'next/link';

interface FeaturedGameProps {
  game: Game;
}

export function FeaturedGame({ game }: FeaturedGameProps) {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Game Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src={game.thumbnailUrl}
            alt={game.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Game Info */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Featured Game
          </div>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {game.title}
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            {game.description}
          </p>
          <div className="mt-6">
            <Link
              href={game.gameUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Play Now
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
