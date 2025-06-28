import { Metadata } from 'next';
import { sampleGames } from '@/data/games';
import GameClient from './GameClient';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const game = sampleGames.find((g) => g.id === params.id);
  
  return {
    title: game ? `${game.title} - 游戏门户` : '游戏不存在',
    description: game?.description || '游戏详情页面',
  };
}

export default function GamePage({
  params,
}: {
  params: { id: string };
}) {
  return <GameClient id={params.id} />;
}
