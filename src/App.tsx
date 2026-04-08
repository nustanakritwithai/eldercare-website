import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import AIAgents from './components/AIAgents'
import Features from './components/Features'
import Architecture from './components/Architecture'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { useDarkMode } from './hooks/useTheme'

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar isDark={isDark} toggleDark={toggle} />
      <main>
        <Hero />
        <HowItWorks />
        <AIAgents />
        <Features />
        <Architecture />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;