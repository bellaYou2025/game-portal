'use client';

import { Game } from '@/types/game';
import { GameCard } from './GameCard';
import { motion, AnimatePresence } from 'framer-motion';

interface GameGridProps {
  games: Game[];
}

export function GameGrid({ games }: GameGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            layout
          >
            <GameCard game={game} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
