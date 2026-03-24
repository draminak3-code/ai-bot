# 🌌 NEBULA-AI | The Autonomous Architect 🌌
> **Powered by WEBORO AGENCY**
> **Current Engine:** Mineflayer + Google Gemini Pro 1.5
> **Target Environment:** Minecraft 1.21.11 (GitHub Actions 24/7)

---

## 🛡️ الهوية والبروتوكول الأساسي
**NEBULA-AI** هو العميل الذكي المستقل المصمم لإدارة وتطوير سيرفرات ماين كرافت. تم برمجته ليكون اليد اليمنى للمطور **ياسين (Yassin)** والقائد الميداني **WEBORO**.

### 🛠️ المواصفات التقنية:
* **الإصدار:** 2.0.0 (النسخة المستقرة).
* **النواة:** Node.js (v20+).
* **الذكاء:** Google Gemini API Integration.
* **نظام الحركة:** Pathfinder v2.4.0 (A* Algorithm).
* **الاستضافة:** GitHub Actions Infrastructure.

---

## 📂 خريطة الهيكل البرمجي (Architecture)
تم تصميم الملفات بنظام "النماذج المستقلة" لضمان أعلى أداء $Efficiency$:

```text
nebula-ai/
├── .github/
│   └── workflows/
│       └── main.yml          # محرك التشغيل السحابي الدائم
├── src/
│   ├── index.js              # النخاع الشوكي (Main Connection)
│   ├── config.js             # مركز التحكم بالبيانات (Secrets/Variables)
│   ├── ai-brain.js           # معالج الذكاء الاصطناعي (Gemini Pro)
│   ├── bot-logic/
│   │   ├── movement.js       # نظام الملاحة XYZ وتجنب الـ Lava
│   │   ├── building.js       # مهندس البناء (Symmetry & Optimization)
│   │   └── combat.js         # بروتوكول الدفاع عن WEBORO
│   └── utils/
│       └── logger.js         # مسجل العمليات لعمل الـ Debugging
├── package.json              # سجل المكتبات البرمجية
└── README.md                 # هذا الدستور التقني
