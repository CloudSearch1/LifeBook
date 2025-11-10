// API基础配置
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/v1';

// API端点
export const API_ENDPOINTS = {
  // 认证相关
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    VERIFY_EMAIL: '/auth/verify-email',
    RESET_PASSWORD: '/auth/reset-password',
    FORGOT_PASSWORD: '/auth/forgot-password'
  },
  
  // 用户相关
  USERS: {
    PROFILE: '/users/profile',
    SETTINGS: '/users/settings',
    AVATAR: '/users/avatar'
  },
  
  // 日记相关
  DIARIES: {
    LIST: '/diaries',
    DETAIL: (id: string) => `/diaries/${id}`,
    CREATE: '/diaries',
    UPDATE: (id: string) => `/diaries/${id}`,
    DELETE: (id: string) => `/diaries/${id}`,
    SEARCH: '/diaries/search'
  },
  
  // 标签相关
  TAGS: {
    LIST: '/tags',
    DETAIL: (id: string) => `/tags/${id}`,
    CREATE: '/tags',
    UPDATE: (id: string) => `/tags/${id}`,
    DELETE: (id: string) => `/tags/${id}`
  },
  
  // 媒体文件相关
  MEDIA: {
    UPLOAD: '/media/upload',
    DETAIL: (id: string) => `/media/${id}`,
    DELETE: (id: string) => `/media/${id}`
  }
};

// HTTP状态码
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500
};

// 请求头
export const HEADERS = {
  CONTENT_TYPE: 'Content-Type',
  AUTHORIZATION: 'Authorization',
  ACCEPT: 'Accept'
};

// 内容类型
export const CONTENT_TYPES = {
  JSON: 'application/json',
  MULTIPART_FORM_DATA: 'multipart/form-data',
  URL_ENCODED: 'application/x-www-form-urlencoded'
};