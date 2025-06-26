export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  gameUrl: string;
  category: string;
  tags: string[];
  rating?: number;
  playCount?: number;
  createdAt: string;
  updatedAt: string;
}

export type GameCategory =
  | 'action'
  | 'puzzle'
  | 'strategy'
  | 'sports'
  | 'racing'
  | 'adventure'
  | 'all';
