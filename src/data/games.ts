import { Game } from '@/types/game';

export const sampleGames: Game[] = [
  {
    id: '1',
    title: 'Heroes Assemble',
    description:
      'Join the epic battle in Heroes Assemble! Team up with legendary heroes in this action-packed fighting game. Master unique abilities, execute powerful combos, and compete in thrilling multiplayer battles. Perfect for fans of superhero action and strategic combat.',
    gameUrl: 'https://www.crazygames.com/embed/heroes-assemble',
    thumbnailUrl: '/games/heroes-assemble.jpg',
    category: 'action',
    tags: ['action', 'fighting', 'multiplayer', 'superhero'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Tower Fall',
    description:
      'Test your precision and timing in Tower Fall! In this challenging arcade game, navigate through increasingly difficult levels as you master the art of perfect timing. Drop blocks to create the tallest tower possible, but be careful - one wrong move and it all comes tumbling down!',
    gameUrl: 'https://play.famobi.com/tower-fall',
    thumbnailUrl: '/games/tower-fall.jpg',
    category: 'arcade',
    tags: ['arcade', 'skill', 'precision', 'casual'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Speed Master',
    description:
      'Speed Master is an exhilarating arcade-style game that puts your reflexes and hand-eye coordination to the ultimate test. Race against time through increasingly challenging levels where split-second decisions make the difference between victory and defeat.',
    gameUrl: 'https://play.famobi.com/speed-master',
    thumbnailUrl: '/games/speed-master.jpg',
    category: 'arcade',
    tags: ['arcade', 'reaction', 'skill', 'fast-paced', 'html5'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
