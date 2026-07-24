import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Timeline from './components/Timeline';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

export default function App() {
  return (
    <motion.main
      className="min-h-screen bg-[linear-gradient(180deg,#fffdf9_0%,#f8ead8_42%,#f3dcc6_100%)] bg-cover bg-fixed bg-center font-sans text-cocoa"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      <div className="relative mx-auto min-h-screen w-full max-w-[430px] px-3 py-4 sm:py-6">
        <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] bg-[url('https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-[0.13]" />
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,253,248,0.92),rgba(248,233,216,0.9))] shadow-[0_28px_70px_rgba(95,66,43,0.2)] backdrop-blur-sm">
          
          <Hero />
          <Countdown />
          <Timeline id="schedule" title="Mangna & Ring Ceremony" subtitle="Join us as we exchange rings and seek blessings for our sacred journey together." />
        </div>
      </div>
    </motion.main>
  );
}
