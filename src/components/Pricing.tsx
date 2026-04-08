import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    nameTh: 'พื้นฐาน',
    price: 1500,
    unit: '/trip',
    unitTh: '/เที่ยว',
    description: 'เหมาะสำหรับการใช้บริการครั้งคราว',
    features: [
      'รถรับส่ง ไป-กลับ',
      'ผู้ดูแล 1 ท่าน',
      'ติดตามสถานะผ่านแอป',
      'ประกันอุบัติเหตุ',
    ],
    featuresTh: [
      'รถรับส่ง ไป-กลับ',
      'ผู้ดูแล 1 ท่าน',
      'ติดตามสถานะผ่านแอป',
      'ประกันอุบัติเหตุ',
    ],
    popular: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    nameTh: 'มาตรฐาน',
    price: 2800,
    unit: '/trip',
    unitTh: '/เที่ยว',
    description: 'เหมาะสำหรับการรักษาต่อเนื่อง',
    features: [
      'ทุกอย่างใน Basic',
      'ผู้ดูแลมืออาชีพระดับสูง',
      'บริการลงทะเบียน',
      'ส่งยาถึงบ้าน',
      'รายงานสรุปทุกครั้ง',
    ],
    featuresTh: [
      'ทุกอย่างใน Basic',
      'ผู้ดูแลมืออาชีพระดับสูง',
      'บริการลงทะเบียน',
      'ส่งยาถึงบ้าน',
      'รายงานสรุปทุกครั้ง',
    ],
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    nameTh: 'พรีเมียม',
    price: 4500,
    unit: '/trip',
    unitTh: '/เที่ยว',
    description: 'ดูแลครบวงจรแบบ VIP',
    features: [
      'ทุกอย่างใน Standard',
      'ผู้ดูแลส่วนตัวตลอดวัน',
      'Home Care Extension',
      'Priority Support 24/7',
      'AI Health Summary',
    ],
    featuresTh: [
      'ทุกอย่างใน Standard',
      'ผู้ดูแลส่วนตัวตลอดวัน',
      'Home Care Extension',
      'Priority Support 24/7',
      'AI Health Summary',
    ],
    popular: false,
  },
];

export default function Pricing() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white dark:bg-slate-900 relative">
      <div className="section-container">
        <div className="section-inner">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
              ราคา
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              เลือกแผนที่<span className="gradient-text">เหมาะกับคุณ</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              ราคาโปร่งใส ไม่มีค่าใช้จ่ายแอบแฝง
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-primary-500 to-primary-600 text-white shadow-xl shadow-primary-500/25 scale-105'
                    : 'glass-card-hover'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-amber-400 text-amber-900 text-sm font-bold">
                      <Sparkles className="w-4 h-4" />
                      แนะนำ
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.nameTh}
                  </h3>
                  <p className={`text-sm ${plan.popular ? 'text-primary-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="text-center mb-6">
                  <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    ฿{plan.price.toLocaleString()}
                  </span>
                  <span className={`text-sm ${plan.popular ? 'text-primary-100' : 'text-slate-500 dark:text-slate-400'}`}>
                    {plan.unitTh}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.featuresTh.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.popular ? 'text-primary-200' : 'text-primary-500'}`} />
                      <span className={plan.popular ? 'text-white' : 'text-slate-600 dark:text-slate-300'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.popular
                      ? 'bg-white text-primary-600 hover:bg-primary-50'
                      : 'btn-primary'
                  }`}
                >
                  เลือกแผนนี้
                </button>
              </motion.div>
            ))}
          </div>

          {/* AI Cost Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              * ราคารวมค่าใช้จ่าย AI Services แล้ว ไม่มีบวกเพิ่ม
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}