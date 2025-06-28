import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // 添加安全响应头
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  // 添加 CSP 头
  response.headers.set(
    'Content-Security-Policy',
    `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval';
      style-src 'self' 'unsafe-inline';
      img-src 'self' data: https:;
      font-src 'self';
      frame-src 'self' https://*.trusted-games.com;
      connect-src 'self';
    `.replace(/\s+/g, ' ').trim()
  );

  // 速率限制检查（这里需要配合 Redis 或其他存储实现）
  const ip = request.ip || 'unknown';
  // TODO: 实现速率限制逻辑

  return response;
}

// 配置需要应用中间件的路径
export const config = {
  matcher: [
    /*
     * 匹配所有请求路径，除了：
     * - api 路由 (/_next/*)
     * - 静态文件 (/static/*)
     * - 图片文件
     * - public 文件
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 