import { GameGrid } from '@/components/GameGrid';
import { sampleGames } from '@/lib/sample-data';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            Welcome to Game Portal
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4">
            Discover and play the best online games from around the world
          </p>
        </div>

        <GameGrid games={sampleGames} />
      </section>
    </main>
  );
}
