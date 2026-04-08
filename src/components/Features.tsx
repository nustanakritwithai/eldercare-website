import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Smartphone, 
  MapPin, 
  Bell, 
  CreditCard,
  Users,
  FileCheck,
  Package,
  Heart
} from 'lucide-react';

const familyFeatures = [
  {
    icon: Smartphone,
    title: 'จองงานผ่านแอป',
    description: 'จองบริการง่ายๆ ผ่านมือถือ ทุกที่ทุกเวลา',
  },
  {
    icon: MapPin,
    title: 'ติดตามตำแหน่ง',
    description: 'ดูตำแหน่งผู้ดูแลแบบเรียลไทม์ รู้ว่าอยู่ไหนตลอดเวลา',
  },
  {
    icon: Bell,
    title: 'แจ้งเตือนทุกสถานะ',
    description: 'รับการแจ้งเตือนเมื่อถึงแต่ละ checkpoint',
  },
  {
    icon: CreditCard,
    title: 'ชำระเงินออนไลน์',
    description: 'จ่ายผ่าน QR, Credit Card, หรือ PromptPay',
  },
];

const workerFeatures = [
  {
    icon: Users,
    title: 'รับงานผ่านแอป',
    description: 'ดูงานที่เหมาะกับคุณและรับงานได้ทันที',
  },
  {
    icon: FileCheck,
    title: 'อัปเดต Checkpoint',
    description: 'อัปเดตสถานะงาน 13 จุด ตลอดการดูแล',
  },
  {
    icon: MapPin,
    title: 'ระบบนำทาง',
    description: 'นำทางไปยังจุดหมายอย่างแม่นยำ',
  },
  {
    icon: Heart,
    title: 'ดูแลผู้สูงอายุ',
    description: 'เข้าถึงประวัติสุขภาพและข้อมูลสำคัญ',
  },
];

const driverFeatures = [
  {
    icon: Package,
    title: 'รับงานส่งยา',
    description: 'รับงานจัดส่งยาถึงที่บ้าน',
  },
  {
    icon: MapPin,
    title: 'เส้นทางที่ดีที่สุด',
    description: 'ระบบแนะนำเส้นทางที่เร็วที่สุด',
  },
  {
    icon: FileCheck,
    title: 'ยืนยันการส่ง',
    description: 'ยืนยันการส่งด้วยรูปภาพและ OTP',
  },
  {
    icon: CreditCard,
    title: 'ดูรายได้',
    description: 'ตรวจสอบรายได้และประวัติการทำงาน',
  },
];

const tabs = [
  { id: 'family', label: 'สำหรับครอบครัว', features: familyFeatures },
  { id: 'worker', label: 'สำหรับผู้ดูแล', features: workerFeatures },
  { id: 'driver', label: 'สำหรับคนขับ', features: driverFeatures },
];

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState('family');
  
  const activeFeatures = tabs.find(t => t.id === activeTab)?.features || familyFeatures;

  return (
    <section id="features" className="py-20 lg:py-32 bg-white dark:bg-slate-900 relative">
      <div className="section-container">
        <div className="section-inner">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
              ฟีเจอร์
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              ออกแบบมาเพื่อ<span className="gradient-text">ทุกคน</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              แอปพลิเคชันที่ออกแบบให้ใช้งานง่ายสำหรับทุกบทบาท
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activeFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';