import img1 from '../Components/Images/img1.jpg';
import img2 from '../Components/Images/img8.jpg';
import img3 from '../Components/Images/img6.jpg';
import img4 from '../Components/Images/img2.jpg';
import img5 from '../Components/Images/img3.jpg';
import img6 from '../Components/Images/img5.jpg';
import img7 from '../Components/Images/img7.jpg';

// Content Type Definitions
type ParagraphContent = {
  type: 'paragraph';
  text: string;
};

type HeadingContent = {
  type: 'heading';
  level: number;
  text: string;
};

type ImageContent = {
  type: 'image';
  src: string;
  alt: string;
};

type ListContent = {
  type: 'list';
  items: string[];
};

type ArticleContent =
  | ParagraphContent
  | HeadingContent
  | ImageContent
  | ListContent;

// Article Interface
interface Article {
  id: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: ArticleContent[];
}

// Blog Articles Data
export const blogArticles: Article[] = [
  {
    id: '1',
    title: 'The Importance of Water Conservation',
    author: 'Dr. Aisha Khan',
    date: 'October 26, 2023',
    image: img1,
    excerpt:
      'Water is a precious resource. Learn why conserving water is crucial for our future and how simple changes can make a big impact.',
    content: [
      {
        type: 'paragraph',
        text: 'Water scarcity is a growing global concern, affecting billions of people worldwide. As populations increase and climate change intensifies, the demand for fresh water continues to outstrip supply in many regions. This makes water conservation not just an environmental issue, but a critical matter of sustainable development and human well-being.',
      },
      {
        type: 'image',
        src: img4,
        alt: 'Water tap with water droplets',
      },
      {
        type: 'paragraph',
        text: 'Implementing efficient irrigation techniques in agriculture, reducing household water consumption, and investing in wastewater treatment and reuse are key strategies. Education and public awareness campaigns also play a vital role in fostering a culture of conservation.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Why Water Conservation Matters',
      },
      {
        type: 'list',
        items: [
          'Environmental Protection: Conserving water helps maintain aquatic ecosystems, protects biodiversity, and reduces the energy needed for water treatment and transport.',
          'Economic Stability: Efficient water use supports industries, agriculture, and communities, preventing economic losses due to water shortages.',
          'Health and Well-being: Access to clean, safe water is fundamental for public health, reducing the incidence of waterborne diseases.',
          'Climate Change Adaptation: Water conservation strategies enhance resilience to droughts and extreme weather events, which are becoming more frequent.',
        ],
      },
      {
        type: 'image',
        src: img5,
        alt: 'Water droplets on a leaf',
      },
      {
        type: 'paragraph',
        text: 'Every individual and organization has a role to play in water conservation. By adopting mindful practices and supporting sustainable water management initiatives, we can ensure a healthier planet for current and future generations.',
      },
    ],
  },
  {
    id: '2',
    title: 'Innovations in Renewable Energy',
    author: 'Prof. David Chen',
    date: 'September 15, 2023',
    image: img2,
    excerpt:
      'Explore the latest advancements in solar, wind, and geothermal energy, and how they are shaping a greener future.',
    content: [
      {
        type: 'paragraph',
        text: 'The transition to renewable energy sources is paramount in the global fight against climate change. Recent technological breakthroughs are accelerating this shift, making clean energy more accessible and efficient than ever before. From advanced solar panel designs to offshore wind farms and innovative geothermal systems, the landscape of renewable energy is rapidly evolving.',
      },
      {
        type: 'image',
        src: img6,
        alt: 'Solar panels and wind turbines',
      },
      {
        type: 'paragraph',
        text: 'One of the most exciting areas is the integration of AI and machine learning to optimize energy production and distribution, further enhancing the reliability and cost-effectiveness of renewables.',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Renewable Energy Innovations',
      },
      {
        type: 'list',
        items: [
          'Perovskite Solar Cells: Offering higher efficiency and lower manufacturing costs than traditional silicon cells.',
          'Floating Offshore Wind Turbines: Expanding wind energy potential to deeper waters where winds are stronger and more consistent.',
          'Enhanced Geothermal Systems (EGS): Utilizing advanced drilling and fluid injection techniques to access geothermal energy in a wider range of geological settings.',
          'Smart Grids with AI: Optimizing energy flow, predicting demand, and integrating diverse renewable sources seamlessly.',
        ],
      },
      {
        type: 'paragraph',
        text: 'These innovations, coupled with supportive policies and increasing public awareness, are paving the way for a truly sustainable energy future. The ongoing research and development in this field promise even more groundbreaking solutions to meet our energy needs while protecting the planet.',
      },
    ],
  },
  {
    id: '3',
    title: 'Sustainable Waste Management Practices',
    author: 'Green Yasin Team',
    date: 'August 01, 2023',
    image: img3,
    excerpt:
      'Discover effective strategies for reducing, reusing, and recycling waste to minimize environmental impact and promote a circular economy.',
    content: [
      {
        type: 'paragraph',
        text: 'Sustainable waste management is crucial for minimizing environmental pollution, conserving natural resources, and fostering a circular economy. Beyond traditional recycling, modern approaches emphasize waste reduction at the source, extensive reuse, and innovative methods for converting waste into valuable resources.',
      },
      {
        type: 'image',
        src: img7,
        alt: 'Waste bins for recycling',
      },
      {
        type: 'paragraph',
        text: "This includes implementing robust composting programs, developing waste-to-energy facilities, and promoting industrial symbiosis where one industry's waste becomes another's input. Public engagement and regulatory frameworks are also key to successful waste management initiatives.",
      },
      {
        type: 'heading',
        level: 2,
        text: 'Key Principles of Sustainable Waste Management',
      },
      {
        type: 'list',
        items: [
          'Reduce: Minimizing waste generation through conscious consumption and efficient production processes.',
          'Reuse: Extending the lifespan of products through repair, repurposing, and donation.',
          'Recycle: Processing waste materials into new products, reducing the need for virgin resources.',
          'Recover: Capturing energy or materials from waste that cannot be reduced, reused, or recycled.',
          'Dispose Responsibly: Ensuring safe and environmentally sound disposal of residual waste, typically in engineered landfills.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Adopting these practices across all sectors—from individual households to large industries—is essential for creating a healthier, more sustainable planet and mitigating the adverse effects of waste on ecosystems and human health.',
      },
    ],
  },
];
