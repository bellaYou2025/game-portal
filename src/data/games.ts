export interface Game {
  id: string;
  title: string;
  description: string;
  url: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
}

export const sampleGames: Game[] = [
  {
    id: '1',
    title: 'Minecraft Classic',
    description:
      'Experience the original Minecraft game that started it all, right in your browser.',
    url: 'https://classic.minecraft.net',
    thumbnailUrl: '/games/minecraft.jpg',
    category: 'sandbox',
    tags: ['sandbox', 'multiplayer', 'classic'],
  },
  {
    id: '2',
    title: '2048',
    description:
      'Join the numbers and get to the 2048 tile! A simple yet addictive puzzle game.',
    url: 'https://play2048.co',
    thumbnailUrl: '/games/2048.jpg',
    category: 'puzzle',
    tags: ['puzzle', 'numbers', 'strategy'],
  },
  {
    id: '3',
    title: 'Tetris',
    description:
      'The classic tile-matching puzzle game. Arrange the falling blocks to create complete lines.',
    url: 'https://tetris.com/play-tetris',
    thumbnailUrl: '/games/tetris.jpg',
    category: 'puzzle',
    tags: ['puzzle', 'classic', 'arcade'],
  },
];
