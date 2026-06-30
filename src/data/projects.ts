export type ProjectCategory = 'ai' | 'game-roblox' | 'game-unity' | '3d';

export type ProjectStatus = 'production' | 'published' | 'beta' | 'in-dev' | 'concept';

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  category: ProjectCategory;
  platform?: string;
  engine?: string;
  status: ProjectStatus;
  tagline: string;
  description: string;
  tags: string[];
  links: {
    play?: string;
    github?: string;
    youtube?: string;
    steam?: string;
    demo?: string;
  };
  coverImage?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: 'et-office',
    title: 'ET Office',
    subtitle: 'Multi-Agent Local First',
    category: 'ai',
    status: 'production',
    tagline: 'AI ทำงานบนเครื่องตัวเอง — ไม่ต้องพึ่ง Cloud',
    description:
      'ระบบ Multi-Agent สำหรับงาน AI ที่รันได้บนเครื่องตัวเอง Architecture: Claude Code → Architect Agent → Planner → Coder → Unity MCP รองรับ Ollama, Claude, OpenRouter และ MCP Protocol',
    tags: ['Multi-Agent', 'Local AI', 'MCP', 'Claude', 'Ollama', 'OpenRouter'],
    links: {
      github: 'https://github.com/b2cm92ts5k-alt/et-office-desktop',
    },
    featured: true,
  },
  {
    slug: 'firewall-rts',
    title: 'FIREWALL',
    subtitle: 'Last Process Standing',
    category: 'game-unity',
    platform: 'PC / Steam',
    engine: 'Unity (DOTS)',
    status: 'in-dev',
    tagline: 'Survival RTS in a cyber neon world',
    description:
      'Build, defend, and command your AI swarm against a hundred thousand viruses every night. One breach ends everything. Solo or 2–4 player co-op. Cyber neon pixel art 2.5D · Unity DOTS · Horde sim · Flow-field pathfinding',
    tags: ['Unity DOTS', 'RTS', 'Pixel Art 2.5D', 'Co-op 1-4', 'Cyberpunk', 'Horde'],
    links: {
      github: 'https://github.com/b2cm92ts5k-alt/firewall-rts',
    },
    featured: true,
  },
  {
    slug: 'arachnotech',
    title: 'ARACHNOTECH',
    subtitle: 'Project Arachnis',
    category: 'game-roblox',
    platform: 'Roblox',
    engine: 'Roblox Studio',
    status: 'beta',
    tagline: 'A million legs are climbing toward you',
    description:
      'Survival wave game on Roblox. Play Solo or Team Up, Upgrade Weapons, use Unique Class Abilities, battle Elite & Giant Spider Variants, and Compete for the Highest Wave Record.',
    tags: ['Roblox', 'Survival', 'Wave Defense', 'Luau', 'Co-op'],
    links: {
      play: 'https://www.roblox.com/games/90970727333935/ARACHNOTECH-Project-Arachnis',
    },
  },
  {
    slug: 'echo-obby',
    title: 'Echo Obby',
    subtitle: 'World 2 Update',
    category: 'game-roblox',
    platform: 'Roblox',
    engine: 'Roblox Studio',
    status: 'published',
    tagline: 'Darkness is the challenge — listen to survive',
    description:
      'Obstacle course where the world is pitch black. Press [E] to send a pulse that lights up nearby platforms for a split second. White outline = safe. Blinking = danger. Hit a checkpoint (green glow) to save your run.',
    tags: ['Roblox', 'Obby', 'Platformer', 'Luau', 'Unique Mechanic'],
    links: {
      play: 'https://www.roblox.com/games/71963272499367/WORLD-2-UPDATE-Echo-Obby',
    },
  },
  {
    slug: 'loopsmith',
    title: 'Loopsmith',
    subtitle: 'Pipe Puzzle',
    category: 'game-roblox',
    platform: 'Roblox',
    engine: 'Roblox Studio',
    status: 'published',
    tagline: 'Connect & Rotate every pipe — NO loose ends',
    description:
      '4 Worlds · 270+ Levels. Tap to spin each tile and link up the whole grid. Forest · Ocean · Desert · Space. Features Daily Puzzle, Global Leaderboards, Login streak rewards, and Infinite Pass.',
    tags: ['Roblox', 'Puzzle', 'Casual', 'Luau', 'Leaderboard'],
    links: {
      play: 'https://www.roblox.com/games/71466433834523/Loopsmith-Pipe-Puzzle',
    },
  },
  // เพิ่ม project ใหม่ได้ที่นี่ — card จะขึ้นเองอัตโนมัติ
];

export const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; color: string; tailwindColor: string }
> = {
  ai: { label: 'AI / Tool', color: '#00f5ff', tailwindColor: 'neon-cyan' },
  'game-unity': { label: 'Unity Game', color: '#ff6b00', tailwindColor: 'neon-orange' },
  'game-roblox': { label: 'Roblox Game', color: '#00ff88', tailwindColor: 'neon-green' },
  '3d': { label: '3D Art', color: '#bf00ff', tailwindColor: 'neon-purple' },
};

export const STATUS_META: Record<ProjectStatus, { label: string; color: string }> = {
  production: { label: 'Production', color: '#00f5ff' },
  published: { label: 'Published', color: '#00ff88' },
  beta: { label: 'Beta', color: '#ffff00' },
  'in-dev': { label: 'In Dev', color: '#ff6b00' },
  concept: { label: 'Concept', color: '#888888' },
};

export const siteInfo = {
  name: 'ETLoLz',
  role: 'Game Developer · AI Builder · Content Creator',
  description: 'Building games, AI systems, and content out of Thailand.',
  youtube: {
    url: 'https://www.youtube.com/channel/UCWRmazK-UdS6d0H2aQvXtsg',
    handle: '@etlolz2430',
    description: 'AI Build · DevLog · ETLive',
  },
  social: {
    github: 'https://github.com/b2cm92ts5k-alt',
    youtube: 'https://www.youtube.com/channel/UCWRmazK-UdS6d0H2aQvXtsg',
    roblox: 'https://www.roblox.com/communities/34023283',
  },
};
