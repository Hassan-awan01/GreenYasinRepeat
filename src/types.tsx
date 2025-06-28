// types.ts (optional)
export interface SubService {
  title: string;
  link: string;
  image: string;
  description: string;
  fullDescription: string;
  features: string[];
  subServiceBenefits: string[];
  details: string[];
}

export interface ProjectCategory {
  category: string;
  icon: string;
  link: string;
  mainImage: string;
  mainDescription: string;
  examplesHeader: string;
  examples: { text: string }[];
  benefitsHeader: string;
  benefits: { text: string }[];
  projects: SubService[];
}
