import type { StackCategoryConfig } from './types';

export const STACK_CATEGORIES: StackCategoryConfig[] = [
  {
    id: 'Frontend',
    items: [
      'React',
      'JavaScript',
      'TypeScript',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind',
      'Sass',
      'TanStack',
    ],
  },
  {
    id: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Next.js',
      'GraphQL',
      'Spring Boot',
      'Flask',
      'FastAPI',
      'Java',
      'Python',
    ],
  },
  {
    id: 'Database',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase'],
  },
  {
    id: 'AI',
    items: ['Claude', 'Gemini', 'OpenAI', 'Ollama', 'Grok'],
  },
];

export const STACK_CATEGORY_BY_ID = Object.fromEntries(
  STACK_CATEGORIES.map((c) => [c.id, c]),
) as Record<StackCategoryConfig['id'], StackCategoryConfig>;
