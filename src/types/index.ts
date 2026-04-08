export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Agent {
  id: string;
  name: string;
  nameTh: string;
  role: string;
  description: string;
  color: string;
  icon: string;
}

export interface Feature {
  id: string;
  title: string;
  titleTh: string;
  description: string;
  icon: string;
  target: 'family' | 'worker' | 'driver';
}

export interface PricingPlan {
  id: string;
  name: string;
  nameTh: string;
  price: number;
  unit: string;
  unitTh: string;
  features: string[];
  featuresTh: string[];
  popular?: boolean;
  recommended?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  roleTh: string;
  content: string;
  contentTh: string;
  avatar: string;
  rating: number;
}

export interface NavItem {
  id: string;
  label: string;
  labelTh: string;
  href: string;
}

export interface ArchitectureNode {
  id: string;
  label: string;
  labelTh: string;
  type: 'input' | 'process' | 'ai' | 'output' | 'storage';
  connections: string[];
}