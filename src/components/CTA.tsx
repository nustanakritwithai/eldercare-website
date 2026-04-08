import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
      />

      <div className="section-container relative z-10">
        <div className="section-inner">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              พร้อมดูแลคนที่คุณรัก?
            </h2>
            <p className="text-lg sm:text-xl text-primary-100 mb-10">
              เริ่มต้นใช้บริการ ElderCare วันนี้ 
              ให้ AI Agents ของเราช่วยดูแลผู้สูงอายุของคุณ
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-primary-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                เริ่มใช้บริการฟรี
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary-700 text-white font-bold rounded-xl border border-primary-400 hover:bg-primary-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                ติดต่อฝ่ายขาย
              </motion.button>
            </div>

            <p className="mt-8 text-primary-100 text-sm">
              หรือโทร <a href="tel:02-xxx-xxxx" className="underline font-medium">02-XXX-XXXX</a> (จันทร์-ศุกร์ 9:00-18:00)
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}