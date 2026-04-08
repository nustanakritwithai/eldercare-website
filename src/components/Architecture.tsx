import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Server, 
  Database, 
  Cpu, 
  Cloud,
  Layers
} from 'lucide-react';

const layers = [
  {
    id: 'client',
    title: 'Client Layer',
    icon: Layers,
    items: ['Family App', 'Worker App', 'Driver App', 'Admin Dashboard'],
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 'api',
    title: 'API Gateway',
    icon: Server,
    items: ['Kong/AWS API GW', 'Rate Limiting', 'JWT Auth', 'WAF'],
    color: 'from-violet-400 to-purple-500',
  },
  {
    id: 'services',
    title: 'Microservices',
    icon: Cloud,
    items: ['Trip Service', 'Medicine Delivery', 'Home Care', 'Payment'],
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 'agents',
    title: 'AI Agents',
    icon: Cpu,
    items: ['Intake Agent', 'Dispatch Agent', 'Safety Agent', 'Summary Agent'],
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 'data',
    title: 'Data Layer',
    icon: Database,
    items: ['PostgreSQL', 'Redis', 'MongoDB', 'S3 Storage'],
    color: 'from-emerald-400 to-teal-500',
  },
];

export default function Architecture() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="architecture" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-800/50 relative">
      <div className="section-container">
        <div className="section-inner">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
              สถาปัตยกรรมระบบ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              สร้างบนพื้นฐานที่<span className="gradient-text">มั่นคง</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Microservices Architecture ผสมผสาน AI-Native Approach
              รองรับการขยายตัวในอนาคต
            </p>
          </motion.div>

          {/* Architecture Stack */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {layers.map((layer, index) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${layer.color} flex items-center justify-center shadow-lg`}>
                    <layer.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {layer.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {layer.items.map((item, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-slate-500 dark:text-slate-400 mb-4">Powered by</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['React Native', 'TypeScript', 'Go', 'Node.js', 'PostgreSQL', 'Redis', 'Kafka', 'AWS', 'Kubernetes'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-lg bg-white dark:bg-slate-700 shadow-sm text-slate-700 dark:text-slate-300 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}