import { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  label: string;
  path: string;
}

export interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatData {
  name: string;
  value: number;
}
