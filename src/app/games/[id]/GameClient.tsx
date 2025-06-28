'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SecureGameFrame from '@/components/SecureGameFrame';
import {
  sanitizeInput,
  validateGameData,
  createSafeErrorMessage,
} from '@/utils/security';
import { getGameById, GameData } from '@/lib/games';
import FullscreenButton from '@/components/FullscreenButton';

interface GameClientProps {
  id: string;
}

export default function GameClient({ id }: GameClientProps) {
  const [game, setGame] = useState<GameData | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadGame = async () => {
      try {
        const gameId = sanitizeInput(id);
        const gameData = await getGameById(gameId);

        if (!validateGameData(gameData)) {
          throw new Error('无效的游戏数据');
        }

        setGame(gameData);
      } catch (err) {
        const safeError = createSafeErrorMessage(err as Error);
        setError(safeError);
      }
    };

    loadGame();
  }, [id]);

  if (error) {
    return <div className="text-center p-4">{error}</div>;
  }

  if (!game) {
    return <div className="text-center p-4">加载中...</div>;
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-2"
          >
            ← 返回游戏列表
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="game-container aspect-video">
            <SecureGameFrame
              gameUrl={game.gameUrl}
              gameName={game.title}
              className="w-full h-full rounded-lg shadow-lg"
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
                <div>{game.playCount.toLocaleString()} 次游玩</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
