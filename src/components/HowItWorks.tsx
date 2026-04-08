import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Car, 
  ClipboardCheck, 
  HeartHandshake, 
  Home,
  ArrowRight
} from 'lucide-react';

const steps = [
  {
    id: 1,
    icon: Car,
    title: 'ไปส่ง',
    titleEn: 'Transport',
    description: 'รถรับส่งพร้อมผู้ดูแลมืออาชีพ เดินทางอย่างปลอดภัย สะดวกสบาย ถึงหน้าบ้าน',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    id: 2,
    icon: ClipboardCheck,
    title: 'พาไปลงทะเบียน',
    titleEn: 'Registration',
    description: 'ดำเนินการลงทะเบียนและติดต่อเจ้าหน้าที่ จัดการเอกสารครบถ้วน ไม่ต้องกังวล',
    color: 'from-violet-400 to-purple-500',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    iconColor: 'text-violet-600 dark:text-violet-400',
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: 'ดูแลจนจบ',
    titleEn: 'Full Care',
    description: 'ดูแลตลอดกระบวนการ พร้อมอัปเดตสถานะแบบเรียลไทม์ ติดต่อได้ตลอด 24 ชั่วโมง',
    color: 'from-rose-400 to-pink-500',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    iconColor: 'text-rose-600 dark:text-rose-400',
  },
  {
    id: 4,
    icon: Home,
    title: 'พากลับบ้าน',
    titleEn: 'Return Home',
    description: 'ส่งถึงหน้าบ้านอย่างปลอดภัย พร้อมรายงานสรุปผลการดูแลครบถ้วน',
    color: 'from-emerald-400 to-teal-500',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="how-it-works" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-200/30 dark:bg-primary-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-900/10 rounded-full blur-3xl"></div>
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
              ขั้นตอนการใช้บริการ
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              บริการของเรา
              <span className="gradient-text">ทำงานอย่างไร?</span>
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              4 ขั้นตอนง่ายๆ ที่จะช่วยให้คุณและครอบครัวมั่นใจได้ว่า
              ผู้สูงอายุจะได้รับการดูแลอย่างดีที่สุด
            </p>
          </motion.div>

          {/* Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector Line - Desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5">
                    <div className="relative w-full h-full">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: '100%' } : {}}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                        className={`h-full bg-gradient-to-r ${step.color}`}
                      />
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.2 }}
                        className="absolute right-0 top-1/2 -translate-y-1/2"
                      >
                        <ArrowRight className="w-5 h-5 text-slate-400" />
                      </motion.div>
                    </div>
                  </div>
                )}

                {/* Step Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card-hover p-6 h-full"
                >
                  {/* Step Number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center mb-5`}>
                    <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{step.titleEn}</p>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Process Flow - Mobile/Tablet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-12 lg:hidden"
          >
            <div className="glass-card p-6">
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    {index < steps.length - 1 && (
                      <div className="w-8 h-0.5 bg-slate-200 dark:bg-slate-700 mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary inline-flex items-center gap-2"
              onClick={() => {
                const el = document.getElementById('features');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              ดูคุณสมบัติเพิ่มเติม
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}