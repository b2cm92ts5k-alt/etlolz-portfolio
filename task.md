# Web Portfolio — Task Tracker

## Stack: Astro + Tailwind CSS → Cloudflare Pages

---

## Phase 1: Scaffold ✅

- [x] ตรวจสอบ Node.js พร้อม (v24.16.0)
- [x] สร้าง package.json + astro.config.mjs + tailwind.config.mjs + tsconfig.json
- [x] npm install สำเร็จ (378 packages)
- [x] สร้าง folder structure

## Phase 2: Data Layer ✅

- [x] สร้าง `src/data/projects.ts` — ข้อมูลทุกโปรเจกต์
  - ET Office Multi-Agent (AI)
  - Firewall RTS (Unity, in-dev)
  - ARACHNOTECH (Roblox, Beta)
  - Echo Obby (Roblox, Published)
  - Loopsmith (Roblox, Published)
- [x] CATEGORY_META + STATUS_META สำหรับ color/label
- [x] siteInfo (YouTube, social links)

## Phase 3: Layout & Theme ✅

- [x] Layout.astro (base, dark/cyberpunk)
- [x] global.css (Cyberpunk/Glitch theme, neon colors, scanlines)
- [x] NavBar.astro (sticky, scroll effect, mobile menu)

## Phase 4: Pages & Components ✅

- [x] index.astro — Hero section (glitch title, stats)
- [x] ProjectCard.astro — reusable card พร้อม neon border ตาม category
- [x] Projects section + Category filter (All / AI / Unity / Roblox)
- [x] YouTubeSection.astro (series card + CTA)
- [x] About section (bio + skills grid)
- [x] Contact section (Email, GitHub, YouTube, Roblox cards)
- [x] Footer

## Phase 5: Verify ✅

- [x] `npm run dev` — site ขึ้นที่ localhost:4321
- [x] Hero section ✓
- [x] Projects cards + filter ✓
- [x] About + Contact + Footer ✓

## Phase 6: Deploy (next)

- [ ] Push to GitHub (repo ใหม่หรือ repo ที่มีอยู่)
- [ ] Connect Cloudflare Pages
- [ ] ตั้งค่า build: `npm run build` / output: `dist`
- [ ] Test live URL

---

## How to add a new project later

เปิด `src/data/projects.ts` แล้วเพิ่ม object ใหม่เข้าไปใน array `projects` — card จะขึ้นเองอัตโนมัติ

```ts
{
  slug: 'new-project',
  title: 'ชื่อโปรเจกต์',
  category: 'game-roblox', // ai | game-roblox | game-unity | 3d
  status: 'published',     // production | published | beta | in-dev | concept
  tagline: '...',
  description: '...',
  tags: ['Tag1', 'Tag2'],
  links: { play: 'https://...' },
}
```

---

## Projects Reference

| # | Name | Type | Status | Link |
|---|------|------|--------|------|
| 1 | ET Office Desktop | AI / Multi-Agent | Production | https://github.com/b2cm92ts5k-alt/et-office-desktop |
| 2 | Firewall RTS | Unity Game | In-Dev | https://github.com/b2cm92ts5k-alt/firewall-rts (Private) |
| 3 | ARACHNOTECH | Roblox | Beta | https://www.roblox.com/games/90970727333935/ |
| 4 | Echo Obby | Roblox | Published | https://www.roblox.com/games/71963272499367/ |
| 5 | Loopsmith | Roblox | Published | https://www.roblox.com/games/71466433834523/ |
| 6 | 3D Models | Art | TBD | — |
| 7 | YouTube (ETLoLz) | Channel | Active | https://www.youtube.com/channel/UCWRmazK-UdS6d0H2aQvXtsg |
