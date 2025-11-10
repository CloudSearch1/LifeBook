// 应用基础配置
export const APP_CONFIG = {
  NAME: 'LifeBook',
  VERSION: '1.0.0',
  DESCRIPTION: '跨平台日记应用',
  AUTHOR: 'LifeBook Team'
};

// 应用环境
export const APP_ENVIRONMENTS = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production'
};

// 应用主题
export const APP_THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
  AUTO: 'auto'
};

// 应用语言
export const APP_LANGUAGES = {
  ZH_CN: 'zh-CN',
  ZH_TW: 'zh-TW',
  EN_US: 'en-US',
  JA_JP: 'ja-JP',
  KO_KR: 'ko-KR'
};

// 分页配置
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100
};

// 本地存储键名
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'lifebook_access_token',
  REFRESH_TOKEN: 'lifebook_refresh_token',
  USER_INFO: 'lifebook_user_info',
  APP_SETTINGS: 'lifebook_app_settings',
  THEME: 'lifebook_theme',
  LANGUAGE: 'lifebook_language'
};

// 错误代码
export const ERROR_CODES = {
  // 网络错误
  NETWORK_ERROR: 'NETWORK_ERROR',
  TIMEOUT_ERROR: 'TIMEOUT_ERROR',
  
  // 认证错误
  UNAUTHORIZED: 'UNAUTHORIZED',
  TOKEN_EXPIRED: 'TOKEN_EXPIRED',
  INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
  
  // 业务错误
  USER_NOT_FOUND: 'USER_NOT_FOUND',
  DIARY_NOT_FOUND: 'DIARY_NOT_FOUND',
  TAG_NOT_FOUND: 'TAG_NOT_FOUND',
  
  // 系统错误
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
  UNKNOWN_ERROR: 'UNKNOWN_ERROR'
};