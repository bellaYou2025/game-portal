import DOMPurify from 'dompurify';

// 验证和清理用户输入
export const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input.trim());
};

// 验证 URL 是否来自可信域名
export const isValidUrl = (url: string, trustedDomains: string[] = []): boolean => {
  try {
    const urlObj = new URL(url);
    return trustedDomains.some(domain => urlObj.hostname.includes(domain));
  } catch {
    return false;
  }
};

// 验证游戏对象
export const validateGameData = (game: any): boolean => {
  const requiredFields = ['id', 'name', 'url'];
  return requiredFields.every(field => Boolean(game[field]));
};

// 创建安全的错误消息
export const createSafeErrorMessage = (error: Error): string => {
  // 在生产环境中不暴露详细错误信息
  if (process.env.NODE_ENV === 'production') {
    return '发生错误，请稍后再试';
  }
  return error.message;
};

// 验证和清理搜索查询
export const sanitizeSearchQuery = (query: string): string => {
  // 移除所有特殊字符，只保留字母、数字和空格
  return query.replace(/[^a-zA-Z0-9\s]/g, '').trim();
};

// 验证文件类型
export const isValidFileType = (filename: string, allowedTypes: string[]): boolean => {
  const extension = filename.split('.').pop()?.toLowerCase();
  return extension ? allowedTypes.includes(extension) : false;
};

// 创建随机ID
export const generateSecureId = (): string => {
  return crypto.randomUUID();
};

// 验证和清理 HTML 内容
export const sanitizeHtml = (html: string): string => {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'title', 'target'],
  });
}; 