// 日记相关类型定义

export interface Diary {
  id: string;
  userId: string;
  title?: string;
  content: string;
  mood?: number; // 1-5 心情评分
  weather?: string;
  location?: {
    name: string;
    latitude: number;
    longitude: number;
  };
  tags: Tag[];
  media: Media[];
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
  date: string; // YYYY-MM-DD格式
}

export interface DiaryCreate {
  title?: string;
  content: string;
  mood?: number;
  weather?: string;
  location?: {
    name: string;
    latitude: number;
    longitude: number;
  };
  tagIds?: string[];
  isPrivate?: boolean;
  date?: string; // YYYY-MM-DD格式，默认为今天
}

export interface DiaryUpdate {
  title?: string;
  content?: string;
  mood?: number;
  weather?: string;
  location?: {
    name: string;
    latitude: number;
    longitude: number;
  };
  tagIds?: string[];
  isPrivate?: boolean;
}

export interface DiarySearch {
  query?: string;
  tags?: string[];
  mood?: number[];
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
  sortBy?: 'date' | 'createdAt' | 'updatedAt' | 'mood';
  sortOrder?: 'asc' | 'desc';
}

export interface DiaryListResponse {
  diaries: Diary[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface Tag {
  id: string;
  userId: string;
  name: string;
  color: string;
  createdAt: string;
}

export interface TagCreate {
  name: string;
  color?: string;
}

export interface TagUpdate {
  name?: string;
  color?: string;
}

export interface Media {
  id: string;
  userId: string;
  diaryId?: string;
  filename: string;
  originalName: string;
  mimeType: string;
  sizeBytes: number;
  url: string;
  thumbnailUrl?: string;
  metadata?: {
    width?: number;
    height?: number;
    duration?: number; // 视频时长（秒）
  };
  createdAt: string;
}

export interface MediaUpload {
  file: File;
  diaryId?: string;
}

// 心情选项
export const MOOD_OPTIONS = [
  { value: 1, label: '很差', icon: '😢', color: '#e74c3c' },
  { value: 2, label: '较差', icon: '😕', color: '#e67e22' },
  { value: 3, label: '一般', icon: '😐', color: '#f1c40f' },
  { value: 4, label: '较好', icon: '😊', color: '#2ecc71' },
  { value: 5, label: '很好', icon: '😄', color: '#3498db' }
];

// 天气选项
export const WEATHER_OPTIONS = [
  { value: 'sunny', label: '晴天', icon: '☀️' },
  { value: 'cloudy', label: '多云', icon: '☁️' },
  { value: 'rainy', label: '下雨', icon: '🌧️' },
  { value: 'snowy', label: '下雪', icon: '❄️' },
  { value: 'stormy', label: '暴风雨', icon: '⛈️' },
  { value: 'foggy', label: '雾天', icon: '🌫️' },
  { value: 'windy', label: '大风', icon: '💨' }
];