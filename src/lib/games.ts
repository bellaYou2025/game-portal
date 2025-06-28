import { sampleGames } from '@/data/games';

export interface GameData {
  id: string;
  title: string;
  gameUrl: string;
  description: string;
  tags: string[];
  rating?: number;
  playCount?: number;
  thumbnailUrl: string;
}

export const getGameById = async (id: string): Promise<GameData> => {
  // 在实际应用中，这里应该是从API或数据库获取数据
  const game = sampleGames.find((g) => g.id === id);

  if (!game) {
    throw new Error('游戏不存在');
  }

  return game;
};
