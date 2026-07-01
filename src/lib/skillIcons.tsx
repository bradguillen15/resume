import type { SkillIcon } from '@/lib/iconTypes';
import { CursorIcon } from '@/components/icons/CursorIcon';
import { GrokIcon } from '@/components/icons/GrokIcon';
import { Database } from 'lucide-react';
import { DiAws, DiJava } from 'react-icons/di';
import {
  SiClaude,
  SiCoderabbit,
  SiSharp,
  SiDatadog,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGithubactions,
  SiGithubcopilot,
  SiGit,
  SiGooglegemini,
  SiGraphql,
  SiGulp,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJest,
  SiJunit5,
  SiJenkins,
  SiModelcontextprotocol,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOllama,
  SiOpenai,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiSass,
  SiSentry,
  SiSpringboot,
  SiSpinnaker,
  SiSupabase,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiWebpack,
} from 'react-icons/si';

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

function devicon(folder: string, file = `${folder}-original`): string {
  return `${DEVICON}/${folder}/${file}.svg`;
}

const DEFAULT_ICON_COLOR = '#F1F5F9';

interface SkillDef {
  name: string;
  url?: string;
  icon?: SkillIcon;
  color?: string;
}

const SKILLS: SkillDef[] = [
  { name: 'JavaScript',              url: devicon('javascript'),                                  icon: SiJavascript,    color: '#F7DF1E' },
  { name: 'TypeScript',              url: devicon('typescript'),                                  icon: SiTypescript,    color: '#3178C6' },
  { name: 'Java',                    url: devicon('java'),                                        icon: DiJava,          color: '#E76F00' },
  { name: 'Python',                  url: devicon('python'),                                      icon: SiPython,        color: '#3776AB' },
  { name: 'PHP',                     url: devicon('php'),                                         icon: SiPhp,           color: '#777BB4' },
  { name: 'C#',                      url: devicon('csharp'),                                      icon: SiSharp,         color: '#512BD4' },
  { name: 'React',                   url: devicon('react'),                                       icon: SiReact,         color: '#61DAFB' },
  { name: 'Node.js',                 url: devicon('nodejs'),                                      icon: SiNodedotjs,     color: '#68A063' },
  { name: 'Webpack',                 url: devicon('webpack'),                                     icon: SiWebpack,       color: '#8DD6F9' },
  { name: 'Next.js',                 url: devicon('nextjs'),                                      icon: SiNextdotjs,     color: '#ffffff' },
  { name: 'Express',                 url: 'https://skillicons.dev/icons?i=express&theme=dark',   icon: SiExpress,       color: '#CBD5E1' },
  { name: 'GraphQL',                 url: `${DEVICON}/graphql/graphql-plain.svg`,                 icon: SiGraphql,       color: '#E10098' },
  { name: 'Gulp',                    url: `${DEVICON}/gulp/gulp-plain.svg`,                       icon: SiGulp },
  { name: 'Jest',                    url: `${DEVICON}/jest/jest-plain.svg`,                       icon: SiJest,          color: '#C21325' },
  { name: 'Spring Boot',             url: devicon('spring'),                                      icon: SiSpringboot,    color: '#6DB33F' },
  { name: 'Flask',                   url: 'https://skillicons.dev/icons?i=flask&theme=dark',     icon: SiFlask,         color: '#ffffff' },
  { name: 'FastAPI',                 url: devicon('fastapi'),                                     icon: SiFastapi,       color: '#009688' },
  { name: 'Vite',                    url: devicon('vite'),                                        icon: SiVite,          color: '#646CFF' },
  { name: 'MySQL',                   url: devicon('mysql'),                                       icon: SiMysql,         color: '#4479A1' },
  { name: 'PostgreSQL',              url: devicon('postgresql'),                                  icon: SiPostgresql,    color: '#336791' },
  { name: 'MongoDB',                 url: devicon('mongodb'),                                     icon: SiMongodb,       color: '#47A248' },
  { name: 'NoSQL',                   url: devicon('mongodb'),                                     icon: SiMongodb,       color: '#47A248' },
  { name: 'Supabase',                url: devicon('supabase'),                                    icon: SiSupabase,      color: '#3FCF8E' },
  { name: 'Git',                     url: devicon('git'),                                         icon: SiGit,           color: '#F05032' },
  { name: 'Docker',                  url: devicon('docker'),                                      icon: SiDocker,        color: '#2496ED' },
  { name: 'AWS',                     url: 'https://skillicons.dev/icons?i=aws&theme=dark',       icon: DiAws,           color: '#FF9900' },
  { name: 'Jenkins',                 url: devicon('jenkins'),                                     icon: SiJenkins,       color: '#D24939' },
  { name: 'MFE / Module Federation', url: devicon('webpack'),                                     icon: SiWebpack,       color: '#8DD6F9' },
  { name: 'Harness',                 url: 'https://cdn.jsdelivr.net/gh/gilbarbara/logos/logos/harness-icon.svg' },
  { name: 'Spinnaker',               url: 'https://svgl.app/library/spinnaker.svg',              icon: SiSpinnaker,     color: '#139BB4' },
  { name: 'SQL',                     icon: Database,        color: '#38BDF8' },
  { name: 'Firebase',                url: devicon('firebase'),                                    icon: SiFirebase,      color: '#FFCA28' },
  { name: 'TanStack',                url: 'https://svgl.app/library/tanstack.svg',               icon: SiReactquery,    color: '#FF4154' },
  { name: 'HTML',                    url: devicon('html5'),                                       icon: SiHtml5,         color: '#E34F26' },
  { name: 'CSS',                     url: devicon('css3'),                                        icon: SiCss,           color: '#1572B6' },
  { name: 'Tailwind',                url: devicon('tailwindcss'),                                 icon: SiTailwindcss,   color: '#06B6D4' },
  { name: 'Sass',                    url: devicon('sass'),                                        icon: SiSass,          color: '#CC6699' },
  { name: 'Claude',                  url: 'https://svgl.app/library/claude-ai-icon.svg',         icon: SiClaude,        color: '#D97757' },
  { name: 'Gemini',                  url: 'https://svgl.app/library/gemini.svg',                 icon: SiGooglegemini,  color: '#8E75B2' },
  { name: 'OpenAI',                  url: 'https://svgl.app/library/openai_dark.svg',            icon: SiOpenai,        color: '#10A37F' },
  { name: 'Ollama',                  url: 'https://svgl.app/library/ollama_dark.svg',            icon: SiOllama,        color: '#ffffff' },
  { name: 'Grok',                    url: 'https://svgl.app/library/grok-dark.svg',              icon: GrokIcon,        color: '#F1F5F9' },
  { name: 'GitHub Copilot',          url: 'https://svgl.app/library/copilot_dark.svg',           icon: SiGithubcopilot, color: '#ffffff' },
  { name: 'Cursor',                  url: 'https://svgl.app/library/cursor_dark.svg',            icon: CursorIcon,      color: '#F1F5F9' },
  { name: 'Claude Code',             url: 'https://svgl.app/library/claude-ai-icon.svg',         icon: SiClaude,        color: '#D97757' },
  { name: 'CodeRabbit',              icon: SiCoderabbit,    color: '#FF570A' },
  { name: 'React Query',             url: 'https://svgl.app/library/tanstack.svg',                icon: SiReactquery,    color: '#FF4154' },
  { name: 'Playwright',              url: `${DEVICON}/playwright/playwright-original.svg`,         color: '#2EAD33' },
  { name: 'Vitest',                  url: `${DEVICON}/vitest/vitest-original.svg`,                 icon: SiVitest,        color: '#6E9F18' },
  { name: 'React Testing Library',   icon: SiTestinglibrary, color: '#E33332' },
  { name: 'JUnit / Mockito',         url: `${DEVICON}/junit/junit-original.svg`,                   icon: SiJunit5,        color: '#25A162' },
  { name: 'Vercel',                  url: 'https://svgl.app/library/vercel_dark.svg',             icon: SiVercel,        color: '#ffffff' },
  { name: 'Datadog',                 url: 'https://svgl.app/library/datadog.svg',                 icon: SiDatadog,       color: '#632CA6' },
  { name: 'Sentry',                  icon: SiSentry,        color: '#C4A0F5' },
  { name: 'CI/CD (GitHub Actions)',  icon: SiGithubactions, color: '#2088FF' },
  { name: 'MCP (Model Context Protocol)', icon: SiModelcontextprotocol, color: '#F1F5F9' },
];

export const SKILL_ICON_URLS: Record<string, string> = Object.fromEntries(
  SKILLS.filter(s => s.url !== undefined).map(s => [s.name, s.url!]),
);

export const SKILL_ICONS: Record<string, SkillIcon> = Object.fromEntries(
  SKILLS.filter(s => s.icon !== undefined).map(s => [s.name, s.icon!]),
);

export const SKILL_ICON_COLORS: Partial<Record<string, string>> = Object.fromEntries(
  SKILLS.filter(s => s.color !== undefined).map(s => [s.name, s.color!]),
);

export function getSkillIconUrl(name: string): string | undefined {
  return Object.hasOwn(SKILL_ICON_URLS, name) ? SKILL_ICON_URLS[name] : undefined;
}

export function getSkillIcon(name: string): SkillIcon | undefined {
  return Object.hasOwn(SKILL_ICONS, name) ? SKILL_ICONS[name] : undefined;
}

export function getSkillColor(name: string): string {
  return Object.hasOwn(SKILL_ICON_COLORS, name)
    ? (SKILL_ICON_COLORS[name] ?? DEFAULT_ICON_COLOR)
    : DEFAULT_ICON_COLOR;
}
