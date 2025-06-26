export function GameCardSkeleton() {
  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700 animate-pulse" />

      <div className="p-4">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2 animate-pulse" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full animate-pulse" />
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6 animate-pulse" />
        </div>

        <div className="mt-3 flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-6 w-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
            />
          ))}
        </div>

        <div className="mt-4">
          <div className="h-6 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}
