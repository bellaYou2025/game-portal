'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface SecureGameFrameProps {
  gameUrl: string;
  gameName: string;
  className?: string;
}

const SecureGameFrame: React.FC<SecureGameFrameProps> = ({
  gameUrl,
  gameName,
  className,
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // 只接受来自可信域名的消息
      const trustedDomains = ['trusted-games.com']; // 添加您信任的域名
      if (!trustedDomains.some((domain) => event.origin.includes(domain))) {
        console.warn(`Received message from untrusted origin: ${event.origin}`);
        return;
      }

      // 处理来自游戏的消息
      try {
        const data = JSON.parse(event.data);
        // 根据消息类型处理不同的游戏事件
        switch (data.type) {
          case 'GAME_LOADED':
            console.log('Game loaded successfully');
            break;
          case 'GAME_ERROR':
            console.error('Game error:', data.error);
            break;
          // 添加其他消息类型处理
        }
      } catch (error) {
        console.error('Error processing game message:', error);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // 验证游戏 URL
  const isValidGameUrl = (url: string): boolean => {
    try {
      const gameUrlObj = new URL(url);
      const trustedDomains = ['trusted-games.com']; // 添加您信任的域名
      return trustedDomains.some((domain) =>
        gameUrlObj.hostname.includes(domain)
      );
    } catch {
      return false;
    }
  };

  if (!isValidGameUrl(gameUrl)) {
    console.error('Invalid game URL detected');
    return <div>Invalid game URL</div>;
  }

  return (
    <iframe
      ref={iframeRef}
      src={gameUrl}
      title={gameName}
      className={className}
      sandbox="allow-scripts allow-same-origin allow-popups"
      referrerPolicy="no-referrer"
      loading="lazy"
      style={{
        border: 'none',
        width: '100%',
        height: '100%',
        minHeight: '600px',
      }}
      onError={(e) => {
        console.error('iframe loading error:', e);
      }}
    />
  );
};

export default SecureGameFrame;
