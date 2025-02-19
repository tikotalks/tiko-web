import { Icons } from 'open-icon';

import { useImages, Image } from "@tikotalks/media"

const { findImage } = useImages()

export interface AppData {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  icon: Icons;
  image: {
    original: string;
    thumbnail: string;
    medium: string;
  } | null;
  tags: string[];
  category: 'app' | 'library';
  downloads: {
    platform: string;
    url: string;
  }[];
  features: string[];
}

const getImage = (name:string | Image):{
  original: string;
  thumbnail: string;
  medium: string;
} | null =>{
  return findImage(name)?.url || null
}

export const apps: AppData[] = [
  {
    id: 'answers',
    name: 'Tiko Answers',
    description: 'Get instant answers to your questions with AI-powered assistance',
    icon: Icons.QUESTION_MARK_M,
    image: getImage(Image.AIRPLANE),
    tags: ['AI', 'Q&A', 'Assistant'],
    category: 'app',
    downloads: [
      { platform: 'Web App', url: '/apps/answers' },
      { platform: 'iOS', url: '#' },
      { platform: 'Android', url: '#' }
    ],
    features: [
      'Instant AI-powered responses',
      'Natural language processing',
      'Multi-language support',
      'Voice input capability'
    ],
    fullDescription: 'Tiko Answers revolutionizes the way you seek information. Powered by advanced AI technology, it provides instant, accurate responses to your questions across various domains. Whether you need help with research, problem-solving, or general knowledge, Tiko Answers combines natural language processing with a vast knowledge base to deliver relevant, context-aware responses. The app supports multiple languages and voice input, making it accessible to users worldwide. With continuous learning capabilities, it gets smarter with each interaction, providing increasingly personalized and accurate answers.'
  },
  {
    id: 'finds',
    name: 'Tiko Finds',
    description: 'Discover and locate anything you need with smart search technology',
    icon: Icons.SEARCH_M,
    image: getImage(Image.ALICE_IN_WONDERLAND),
    tags: ['Search', 'Discovery', 'AI'],
    category: 'app',
    downloads: [
      { platform: 'Web App', url: '/apps/finds' },
      { platform: 'iOS', url: '#' },
      { platform: 'Android', url: '#' }
    ],
    features: [
      'Advanced search algorithms',
      'Real-time results',
      'Personalized recommendations',
      'Visual search capability'
    ],
    fullDescription: 'Tiko Finds is your intelligent search companion that goes beyond traditional search engines. Using cutting-edge AI algorithms, it helps you discover and locate exactly what you\'re looking for with unprecedented accuracy. The app learns from your search patterns to provide personalized recommendations while maintaining your privacy. With visual search capabilities, you can search using images in addition to text. Real-time results ensure you get the most current information, while advanced filtering options help you narrow down results efficiently.'
  },
  {
    id: 'talks',
    name: 'Tiko Talks',
    description: 'Engage in meaningful conversations with AI-powered chat',
    icon: Icons.SPEECH_BALLOON2,
    image: getImage(Image.BANANA),
    tags: ['Chat', 'Communication', 'AI'],
    category: 'app',
    downloads: [
      { platform: 'Web App', url: '/apps/talks' },
      { platform: 'iOS', url: '#' },
      { platform: 'Android', url: '#' }
    ],
    features: [
      'Real-time chat',
      'Context awareness',
      'Multi-language support',
      'Voice messaging'
    ],
    fullDescription: 'Tiko Talks transforms digital communication by providing an AI-powered chat platform that understands context and maintains meaningful conversations. The app excels at natural dialogue, remembering conversation history to provide coherent, contextually relevant responses. With support for multiple languages and voice messaging, it breaks down language barriers and makes communication more accessible. Whether you\'re practicing a new language, seeking conversation practice, or just want an engaging chat partner, Tiko Talks provides an intelligent, responsive experience.'
  },
  {
    id: 'says',
    name: 'Tiko Says',
    description: 'Let AI help you express yourself better with smart writing assistance',
    icon: Icons.EDIT_M,
    image: getImage(Image.HOT_AIR_BALLOON),
    tags: ['Writing', 'AI', 'Assistant'],
    category: 'app',
    downloads: [
      { platform: 'Web App', url: '/apps/says' },
      { platform: 'iOS', url: '#' },
      { platform: 'Android', url: '#' }
    ],
    features: [
      'Grammar checking',
      'Style suggestions',
      'Tone analysis',
      'Real-time editing'
    ],
    fullDescription: 'Tiko Says is your personal writing assistant that helps you communicate more effectively. Using advanced AI language models, it provides real-time suggestions for grammar, style, and tone improvements. The app understands context and helps you maintain consistency in your writing voice while suggesting enhancements that make your message clearer and more impactful. Whether you\'re writing professional emails, creative content, or academic papers, Tiko Says helps you express yourself with confidence and clarity.'
  },
  {
    id: 'library',
    name: 'Tiko Library',
    description: 'A comprehensive collection of code resources powering Tiko applications',
    icon: Icons.TERMINAL,
    image: getImage(Image.RADIO),
    tags: ['Development', 'Components', 'Design System'],
    category: 'library',
    downloads: [
      { platform: 'NPM', url: '#' },
      { platform: 'GitHub', url: '#' }
    ],
    features: [
      'Shared Codebase',
      'Design System',
      'Integration Tools',
      'Component Library'
    ],
    fullDescription: 'Tiko Library provides a comprehensive collection of reusable components, utilities, and design guidelines that power all Tiko applications. It includes a consistent UI design system, shared codebase, and integration tools to ensure seamless development across the Tiko ecosystem. The library is built with modern web technologies and follows best practices for accessibility, performance, and maintainability.'
  },
  {
    id: 'media',
    name: 'Tiko Media',
    description: 'Access our comprehensive collection of media resources for Tiko applications',
    icon: Icons.IMAGE,
    image: getImage(Image.YOGURT),
    tags: ['Media', 'Resources', 'Assets'],
    category: 'library',
    downloads: [
      { platform: 'Download', url: '#' },
      { platform: 'GitHub', url: '#' }
    ],
    features: [
      'High-quality Images',
      'Educational Videos',
      'Sound Clips',
      'Licensed Content'
    ],
    fullDescription: 'Tiko Media is a curated collection of high-quality media resources designed for use across all Tiko applications. It includes images, videos, and audio files specifically created for speech therapy and educational purposes. All content is properly licensed and optimized for use in digital applications, ensuring consistent quality and appropriate usage across the platform.'
  }
];

export const getAppById = (id: string): AppData | undefined => {
  return apps.find(app => app.id === id);
};

export const getAppsByCategory = (category: 'app' | 'library'): AppData[] => {
  return apps.filter(app => app.category === category);
};
