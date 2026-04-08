# ElderCare Website

เว็บไซต์ Landing Page สำหรับบริการ ElderCare - ระบบดูแลผู้สูงอายุครบวงจร ไปส่ง–พาไปลงทะเบียน–ดูแลจนจบ–พากลับบ้าน

## 🚀 Live Demo

[https://your-username.github.io/eldercare-website/](https://your-username.github.io/eldercare-website/)

## ✨ Features

- **Hero Section** - แนะนำบริการที่โดดเด่น
- **How It Works** - 4 ขั้นตอนการใช้บริการ
- **AI Agents Showcase** - แสดง AI Agents 7 ตัวที่ดูแลระบบ
- **Features** - คุณสมบัติสำหรับ Family/Worker/Driver
- **Architecture** - แสดงสถาปัตยกรรมระบบ Microservices
- **Pricing** - แผนราคา 3 ระดับ
- **Dark/Light Mode** - รองรับธีมมืด/สว่าง
- **Responsive Design** - รองรับทุกขนาดหน้าจอ
- **Thai Language Support** - ใช้ฟอนต์ Prompt และ Sarabun

## 🛠 Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/your-username/eldercare-website.git
cd eldercare-website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deploy to GitHub Pages

### 1. สร้าง Repository บน GitHub

```bash
# Init git
git init
git add .
git commit -m "Initial commit"

# Add remote (แทนที่ your-username ด้วยชื่อผู้ใช้ของคุณ)
git remote add origin https://github.com/your-username/eldercare-website.git
git branch -M main
git push -u origin main
```

### 2. ตั้งค่า GitHub Pages

1. ไปที่ Settings > Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `root`

### 3. รอ CI/CD ทำงาน

GitHub Actions จะ build และ deploy อัตโนมัติเมื่อ push ไป branch `main`

### 4. ตั้งค่า Custom Domain (Optional)

เพิ่มไฟล์ `public/CNAME` ที่มีโดเมนของคุณ:
```
your-domain.com
```

## 📁 Project Structure

```
eldercare-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD
├── public/                      # Static assets
├── src/
│   ├── components/              # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── AIAgents.tsx
│   │   ├── Features.tsx
│   │   ├── Architecture.tsx
│   │   ├── Pricing.tsx
│   │   ├── CTA.tsx
│   │   └── Footer.tsx
│   ├── hooks/                   # Custom hooks
│   │   └── useTheme.ts
│   ├── types/                   # TypeScript types
│   │   └── index.ts
│   ├── utils/                   # Utilities
│   │   └── index.ts
│   ├── App.tsx                  # Main app
│   ├── index.css                # Global styles
│   └── main.tsx                 # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

### แก้ไขข้อมูลบริษัท

แก้ไขข้อมูลในไฟล์ต่างๆ:
- `src/components/Navbar.tsx` - ชื่อบริษัทและเมนู
- `src/components/Hero.tsx` - ข้อมูล Hero section
- `src/components/Footer.tsx` - ข้อมูลติดต่อและลิงก์

### แก้ไขราคา

แก้ไขใน `src/components/Pricing.tsx`:
```typescript
const plans = [
  {
    id: 'basic',
    nameTh: 'พื้นฐาน',
    price: 1500,  // แก้ราคาตรงนี้
    // ...
  },
];
```

### แก้ไขสี

แก้ไขใน `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#14b8a6',  // แก้สีหลัก
    // ...
  },
}
```

## 📄 License

MIT License - สามารถใช้และแก้ไขได้ตามต้องการ

---

สร้างด้วย ❤️ สำหรับผู้สูงอายุในประเทศไทย