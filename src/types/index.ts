export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  benefits: string[];
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    sugar: number;
    protein: number;
    vitaminC: number;
  };
}

export interface NavItem {
  label: string;
  href: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  ingredients: string[];
  instructions: string[];
  author: string;
  authorImage: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  image: string;
}