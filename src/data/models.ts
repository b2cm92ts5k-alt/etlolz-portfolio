// ──────────────────────────────────────────────────────────────────────────────
// เพิ่มผลงาน 3D ที่นี่
// วางรูปภาพไว้ใน public/images/models/ แล้วใส่ชื่อไฟล์ใน image field
// ──────────────────────────────────────────────────────────────────────────────

export interface Model3D {
  title: string;
  description?: string;
  tags: string[];
  image: string;       // ชื่อไฟล์ใน /public/images/models/ เช่น 'robot.jpg'
  software?: string;   // เช่น 'Blender', 'ZBrush'
  videoId?: string;    // YouTube video ID ถ้ามีคลิป turntable/showcase
}

export const models: Model3D[] = [
  // ── เพิ่มผลงาน 3D ที่นี่ ──────────────────────────────────────────────────
  // {
  //   title: 'ชื่อโมเดล',
  //   description: 'คำอธิบายสั้น ๆ',
  //   tags: ['Character', 'Low Poly'],
  //   image: 'model1.jpg',
  //   software: 'Blender',
  //   videoId: '',
  // },
];
