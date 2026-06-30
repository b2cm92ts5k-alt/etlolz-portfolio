// ──────────────────────────────────────────────────────────────────────────────
// แก้เนื้อหา About และ Contact → แก้ใน siteInfo ด้านล่างนี้
// เพิ่ม Project ใหม่ → เพิ่ม object ใน projects array
// เพิ่ม YouTube Video → เพิ่ม object ใน siteInfo.youtube.videos
// ──────────────────────────────────────────────────────────────────────────────

export type ProjectCategory = 'ai' | 'game-roblox' | 'game-unity' | '3d' | 'web';
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
  coverImage?: string;  // path ใน /public/images/projects/
  videoId?: string;     // YouTube video ID → thumbnail + embed
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
      youtube: 'https://www.youtube.com/watch?v=jksr4jYUAF8',
    },
    videoId: 'jksr4jYUAF8', // ← ใส่ YouTube Video ID เช่น 'dQw4w9WgXcQ'
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
    videoId: '', // ← ใส่ DevLog/Trailer video ID
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
    videoId: '', // ← ใส่ Trailer/Gameplay video ID
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
      'Obstacle course where the world is pitch black. Press [E] to send a pulse that lights up nearby platforms for a split second. White outline = safe. Blinking = danger.',
    tags: ['Roblox', 'Obby', 'Platformer', 'Luau', 'Unique Mechanic'],
    links: {
      play: 'https://www.roblox.com/games/71963272499367/WORLD-2-UPDATE-Echo-Obby',
    },
    videoId: '', // ← ใส่ DevLog video ID
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
      '4 Worlds · 270+ Levels. Tap to spin each tile and link up the whole grid. Forest · Ocean · Desert · Space. Daily Puzzle, Global Leaderboards, Login streak rewards.',
    tags: ['Roblox', 'Puzzle', 'Casual', 'Luau', 'Leaderboard'],
    links: {
      play: 'https://www.roblox.com/games/71466433834523/Loopsmith-Pipe-Puzzle',
    },
    videoId: '',
  },
  {
    slug: 'etlolz-portfolio',
    title: 'ETLoLz Portfolio',
    subtitle: 'Web Portfolio',
    category: 'web',
    status: 'production',
    tagline: 'เว็บ Portfolio นี้เอง — Astro + Tailwind + Cloudflare Pages',
    description:
      'Web Portfolio ที่สร้างด้วย Astro + Tailwind CSS บน Cloudflare Pages ฟรี ดีไซน์ Cyberpunk สไตล์ ETLoLz รองรับการเพิ่มผลงานใหม่ได้ง่ายผ่าน data file',
    tags: ['Astro', 'Tailwind CSS', 'Cloudflare Pages', 'TypeScript'],
    links: {
      github: 'https://github.com/b2cm92ts5k-alt/etlolz-portfolio',
      demo: 'https://etlolz-portfolio.pages.dev',
    },
    featured: true,
  },
  // ── เพิ่ม Project ใหม่ที่นี่ ────────────────────────────────────────────────
];

// ── Category meta ────────────────────────────────────────────────────────────
export const CATEGORY_META: Record<
  ProjectCategory,
  { label: string; color: string; borderClass: string }
> = {
  ai:           { label: 'AI / Tool',   color: '#00d4ff', borderClass: 'neon-border-cyan'   },
  'game-unity': { label: 'Unity Game',  color: '#ff7700', borderClass: 'neon-border-orange' },
  'game-roblox':{ label: 'Roblox Game', color: '#00e577', borderClass: 'neon-border-green'  },
  '3d':         { label: '3D Art',      color: '#aa00ff', borderClass: 'neon-border-purple' },
  web:          { label: 'Web',         color: '#ff1a2e', borderClass: 'neon-border-red'     },
};

export const STATUS_META: Record<ProjectStatus, { label: string; color: string }> = {
  production: { label: 'Production', color: '#00d4ff' },
  published:  { label: 'Published',  color: '#00e577' },
  beta:       { label: 'Beta',       color: '#ffdd00' },
  'in-dev':   { label: 'In Dev',     color: '#ff7700' },
  concept:    { label: 'Concept',    color: '#888888' },
};

// ── Site info — แก้ที่นี่สำหรับ About / Contact ──────────────────────────────
export const siteInfo = {
  name: 'ETLoLz',
  role: 'Game Developer · AI Builder · Content Creator',

  // ── ABOUT — แก้ bio และ skills ที่นี่ ──
  about: {
    bio: 'ผมเป็น Game Developer และ AI Builder จากประเทศไทย ชอบสร้างสิ่งที่ซับซ้อนให้ใช้งานได้จริง ตั้งแต่ RTS ที่มี horde 100k ตัว ยัน AI system ที่รันบนเครื่องตัวเองได้',
    bio2: 'ทำเนื้อหาใน YouTube ในชื่อ ETLoLz — AI Build, DevLog, และ Live session',
    skills: [
      { label: 'Game Dev',  items: ['Unity (DOTS)', 'Roblox Studio', 'Luau', 'C#'] },
      { label: 'AI / Dev',  items: ['Claude Code', 'MCP', 'Ollama', 'Python'] },
      { label: 'Platform',  items: ['Cloudflare Pages', 'GitHub', 'Steam', 'Roblox'] },
      { label: 'Tools',     items: ['Blender', 'Aseprite', 'VS Code', 'Git'] },
    ],
  },

  // ── YOUTUBE — แก้ handle และเพิ่ม videos ที่นี่ ──
  youtube: {
    url: 'https://www.youtube.com/channel/UCWRmazK-UdS6d0H2aQvXtsg',
    handle: '@etlolz2430',
    description: 'AI Build · DevLog · ETLive',
    videos: [
      // ── เพิ่ม video ที่นี่ — หา Video ID จาก URL: youtube.com/watch?v=VIDEO_ID ──
      // { id: 'VIDEO_ID', title: 'ชื่อวิดีโอ', series: 'AI Build' },
      // { id: 'VIDEO_ID', title: 'ชื่อวิดีโอ', series: 'DevLog' },
      // { id: 'VIDEO_ID', title: 'ชื่อวิดีโอ', series: 'ETLive' },
    ] as Array<{ id: string; title: string; series: string }>,
  },

  // ── CONTACT — แก้ social links ที่นี่ ──
  social: {
    email: 'oaketlolz@gmail.com',
    github: 'https://github.com/b2cm92ts5k-alt',
    youtube: 'https://www.youtube.com/channel/UCWRmazK-UdS6d0H2aQvXtsg',
    roblox: 'https://www.roblox.com/communities/34023283',
  },
};
