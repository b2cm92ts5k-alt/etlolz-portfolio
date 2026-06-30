# CLAUDE.md — Web Portfolio Workspace

## Guardrails (ห้ามละเมิด)

### NO MAGIC
ไม่รู้ห้ามเดา ไม่รู้ path อยู่ไหนให้ถาม ไม่ใช่แต่งขึ้นมา

### VERIFY BEFORE DONE
ห้ามบอก "เสร็จ" ถ้ายังไม่รัน ไม่มีหลักฐาน ห้ามพูด done (กฎสำคัญสุดในไฟล์นี้)

### DISSENT
ก่อนทำของใหญ่ ให้เถียงก่อน พังแล้วกระทบแค่ไหน ถอยกลับได้มั้ย — พังฟังแล้วค่อยกระทบ

### SCOPE DRIFT
สั่งแก้ bug 1 ตัว แต่ดันไป refactor ทั้ง module — ให้มันเตือนก่อนทำ

### R0 / R1 / R2 — Decision Framework
- **R0** ถอยไม่ได้ → หยุด ถามก่อน (เช่น delete, deploy, DNS change)
- **R1** ถอยยาก → ทำแล้วบอก ให้ approve
- **R2** ถอยง่าย → ทำเลย แจ้งผลลัพธ์

---

## Memory

@MEMORY.md

---

## Project Context

Web Portfolio บน Cloudflare Pages
- ต้องรองรับการเพิ่มผลงานใหม่ในอนาคตได้ง่าย
- ข้อมูลผลงานอยู่ใน `docs/` (ภาพ screenshot)
- Deploy target: Cloudflare Pages
