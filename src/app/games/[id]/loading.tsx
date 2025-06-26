export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="w-24 h-6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="aspect-video relative w-full bg-gray-200 dark:bg-gray-700 animate-pulse" />

          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-48 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-24 h-8 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            <div className="space-y-3 mb-6">
              <div className="w-full h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-2/3 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-16 h-6 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"
                />
              ))}
            </div>

            <div className="flex items-center gap-6">
              <div className="w-12 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
              <div className="w-20 h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
