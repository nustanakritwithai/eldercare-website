import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Brain,
  Heart,
  Shield,
  MessageCircle,
  MapPin,
  FileText,
  Activity,
  Sparkles,
  ChevronRight
} from 'lucide-react';

const agents = [
  {
    id: 'coordinator',
    name: 'CareCoordinator',
    nameTh: 'ผู้ประสานงานดูแล',
    role: 'หัวหน้าทีม',
    description: 'AI Agent หลักที่คอยประสานงานระหว่างครอบครัว ผู้สูงอายุ และทีมงานทั้งหมด วางแผนและจัดลำดับความสำคัญของงาน',
    features: ['วางแผนการดูแล', 'จัดลำดับงาน', 'รายงานสรุป'],
    color: 'from-violet-500 to-purple-600',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
    icon: Brain,
  },
  {
    id: 'companion',
    name: 'CompanionBot',
    nameTh: 'เพื่อนคู่ใจ',
    role: 'ดูแลอารมณ์',
    description: 'ให้การดูแลทางอารมณ์ พูดคุยเป็นเพื่อน แจ้งเตือนการกินยา และติดตามสุขภาพจิต',
    features: ['พูดคุยเป็นเพื่อน', 'แจ้งเตือนกินยา', 'ติดตามอารมณ์'],
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
    icon: Heart,
  },
  {
    id: 'guardian',
    name: 'SafetyGuardian',
    nameTh: 'ผู้ปกป้อง',
    role: 'ความปลอดภัย',
    description: 'ตรวจจับเหตุฉุกเฉิน ติดตามตำแหน่งแบบเรียลไทม์ และแจ้งเตือนเมื่อพบความผิดปกติ',
    features: ['ตรวจจับฉุกเฉิน', 'ติดตามตำแหน่ง', 'แจ้งเตือนทันที'],
    color: 'from-amber-500 to-orange-600',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
    icon: Shield,
  },
  {
    id: 'communicator',
    name: 'FamilyLink',
    nameTh: 'สะพานเชื่อมครอบครัว',
    role: 'สื่อสาร',
    description: 'เชื่อมต่อครอบครัวกับผู้สูงอายุ อัปเดตสถานะแบบเรียลไทม์ และแปลภาษาเมื่อจำเป็น',
    features: ['อัปเดตสถานะ', 'แปลภาษา', 'วิดีโอคอล'],
    color: 'from-cyan-500 to-blue-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    icon: MessageCircle,
  },
  {
    id: 'navigator',
    name: 'TripNavigator',
    nameTh: 'ผู้นำทาง',
    role: 'การเดินทาง',
    description: 'จัดการเส้นทาง ประเมินเวลาเดินทาง และประสานงานกับคนขับรถเพื่อความปลอดภัยสูงสุด',
    features: ['วางแผนเส้นทาง', 'ประเมินเวลา', 'ประสานคนขับ'],
    color: 'from-emerald-500 to-teal-600',
    bgColor: 'bg-emerald-50 dark:bg-emerald-900/20',
    icon: MapPin,
  },
  {
    id: 'admin',
    name: 'DocuManager',
    nameTh: 'ผู้จัดการเอกสาร',
    role: 'เอกสาร',
    description: 'จัดการเอกสารทางการแพทย์ นัดหมาย และประวัติการรักษาอย่างเป็นระบบ',
    features: ['จัดการเอกสาร', 'นัดหมายอัตโนมัติ', 'ประวัติการรักษา'],
    color: 'from-indigo-500 to-blue-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    icon: FileText,
  },
  {
    id: 'health',
    name: 'HealthMonitor',
    nameTh: 'เฝ้าระวังสุขภาพ',
    role: 'สุขภาพ',
    description: 'ติดตามสัญญาณชีพ วิเคราะห์แนวโน้มสุขภาพ และแจ้งเตือนเมื่อพบความผิดปกติ',
    features: ['ติดตามสัญญาณชีพ', 'วิเคราะห์แนวโน้ม', 'แจ้งเตือนความผิดปกติ'],
    color: 'from-fuchsia-500 to-purple-600',
    bgColor: 'bg-fuchsia-50 dark:bg-fuchsia-900/20',
    icon: Activity,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function AIAgents() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="ai-agents" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]"></div>
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
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 mb-6"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-sm font-medium mb-4">
              AI Agents ทีมงานดิจิทัล
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              ทีมงาน
              <span className="gradient-text">AI Agents</span>
              ของเรา
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              7 AI Agents ที่ทำงานร่วมกันเพื่อดูแลผู้สูงอายุของคุณอย่างครอบคลุม
              ตลอด 24 ชั่วโมง
            </p>
          </motion.div>

          {/* Agents Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {agents.slice(0, 4).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </motion.div>

          {/* Featured Agent - Center */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="mt-6 grid md:grid-cols-3 gap-6"
          >
            {agents.slice(4).map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </motion.div>

          {/* Agent Network Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16">
            <div className="glass-card p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    AI Agents ทำงานร่วมกันอย่างไร?
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    AI Agents ทั้ง 7 ตัวทำงานเป็นทีมผ่านระบบ Multi-Agent Framework 
                    โดย CareCoordinator ทำหน้าที่ประสานงานหลัก ส่วน Agents อื่นๆ 
                    ทำหน้าที่เฉพาะทางตามความถนัด
                  </p>

                  <ul className="space-y-3">
                    {[
                      'สื่อสารและประสานงานอัตโนมัติ',
                      'วิเคราะห์ข้อมูลแบบเรียลไทม์',
                      'ตัดสินใจร่วมกันเพื่อประโยชน์สูงสุด',
                      'เรียนรู้และปรับปรุงอย่างต่อเนื่อง',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                          <ChevronRight className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                        </div>
                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-square max-w-md mx-auto">
                    {/* Center Node */}
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-violet-500/30 z-10"
                    >
                      <Brain className="w-10 h-10 text-white" />
                    </motion.div>

                    {/* Orbiting Nodes */}
                    {agents.filter(a => a.id !== 'coordinator').map((agent, index) => {
                      const angle = (index * 60 - 90) * (Math.PI / 180);
                      const radius = 140;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;

                      return (
                        <motion.div
                          key={agent.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 + index * 0.1 }}
                          className="absolute top-1/2 left-1/2"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className={`w-14 h-14 rounded-xl bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-lg`}
                          >
                            <agent.icon className="w-7 h-7 text-white" />
                          </motion.div>
                          
                          {/* Connection Line */}
                          <svg
                            className="absolute top-1/2 left-1/2 w-full h-full pointer-events-none"
                            style={{
                              width: Math.abs(x) * 2,
                              height: Math.abs(y) * 2,
                              transform: `translate(-50%, -50%)`,
                            }}
                          >
                            <line
                              x1="50%"
                              y1="50%"
                              x2={x > 0 ? '100%' : '0%'}
                              y2={y > 0 ? '100%' : '0%'}
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeDasharray="4 4"
                              className="text-slate-300 dark:text-slate-700"
                              opacity="0.5"
                            />
                          </svg>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AgentCard({ agent }: { agent: typeof agents[0] }) {
  const [cardRef] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      className="glass-card-hover p-6 group cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <motion.div
          whileHover={{ rotate: 10 }}
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center shadow-lg shadow-current/20`}
        >
          <agent.icon className="w-7 h-7 text-white" />
        </motion.div>
        
        <span className="text-xs font-medium text-slate-400 dark:text-slate-500">
          {agent.role}
        </span>
      </div>

      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
        {agent.name}
      </h3>
      
      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
        {agent.nameTh}
      </p>
      
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
        {agent.description}
      </p>

      <div className="space-y-2">
        {agent.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${agent.color}`} />
            <span className="text-xs text-slate-500 dark:text-slate-400">{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}