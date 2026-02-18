
export type Page = 'home' | 'codetest' | 'about' | 'packet' | 'faq' | 'product-detail';

export interface Product {
  id: string;
  name: string;
  category: 'Front-end' | 'Back-end' | 'Software';
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  // Added properties to match the usage in pages/ProductDetail.tsx
  techStack: string[];
  features: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}