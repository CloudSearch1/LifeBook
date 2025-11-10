// 用户相关类型定义

export interface User {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  timezone: string;
  language: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  timezone: string;
  language: string;
  bio?: string;
  website?: string;
  location?: string;
  birthDate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface UserSettings {
  id: string;
  userId: string;
  theme: 'light' | 'dark' | 'auto';
  language: string;
  timezone: string;
  dateFormat: string;
  timeFormat: '12h' | '24h';
  weekStartsOn: 0 | 1; // 0 = Sunday, 1 = Monday
  notifications: {
    email: boolean;
    push: boolean;
    reminder: boolean;
    reminderTime: string; // HH:MM format
  };
  privacy: {
    profileVisibility: 'public' | 'private';
    diaryVisibility: 'private' | 'friends' | 'public';
    allowSearch: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface UserRegistration {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  firstName?: string;
  lastName?: string;
  agreeToTerms: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface UserPasswordReset {
  email: string;
}

export interface UserPasswordUpdate {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface UserUpdate {
  firstName?: string;
  lastName?: string;
  bio?: string;
  website?: string;
  location?: string;
  birthDate?: string;
}