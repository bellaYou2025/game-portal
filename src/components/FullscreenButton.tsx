'use client';

import { FC } from 'react';

const FullscreenButton: FC = () => {
  const handleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.requestFullscreen();
    }
  };

  return (
    <button
      onClick={handleFullscreen}
      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    >
      Fullscreen
    </button>
  );
};

export default FullscreenButton;
