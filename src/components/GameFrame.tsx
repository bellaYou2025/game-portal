'use client';

import React, { useState, useEffect } from 'react';
import { Spinner } from './ui/Spinner';

interface GameFrameProps {
  gameUrl: string;
  title: string;
  className?: string;
}

export const GameFrame: React.FC<GameFrameProps> = ({
  gameUrl,
  title,
  className,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [gameUrl]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={`relative w-full h-full min-h-[500px] ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <Spinner size="lg" />
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100">
          <p className="text-red-500 mb-2">游戏加载失败</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            重试
          </button>
        </div>
      )}

      <iframe
        src={gameUrl}
        title={title}
        className={`w-full h-full border-0 ${
          isLoading || hasError ? 'hidden' : ''
        }`}
        sandbox="allow-scripts allow-same-origin allow-popups"
        loading="lazy"
        onLoad={handleLoad}
        onError={handleError}
      />
    </div>
  );
};
