import { LucideIcon } from 'lucide-react';

export enum ServiceCategory {
  WEB_APPS = 'WEB_APPS',
  BUSINESS_TOOLS = 'BUSINESS_TOOLS',
  VIDEO_CONTENT = 'VIDEO_CONTENT'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  category: ServiceCategory;
  features: string[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  tag: string;
  link?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}