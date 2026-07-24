import { motion } from 'framer-motion';

export default function FloatingNav() {
  return (
    <motion.div
      className="fixed inset-x-0 bottom-4 z-20 mx-auto flex w-[calc(100%-1.5rem)] max-w-lg items-center justify-between rounded-full border border-white/70 bg-[rgba(255,250,244,0.86)] px-4 py-3 shadow-soft backdrop-blur-md sm:bottom-6"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.7, ease: 'easeOut' }}
    >
      <a href="#home" className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cocoa/75 transition hover:text-cocoa">
        Home
      </a>
      <a href="#countdown" className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cocoa/75 transition hover:text-cocoa">
        Countdown
      </a>
      <a href="#morning" className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cocoa/75 transition hover:text-cocoa">
        Morning
      </a>
      <a href="#evening" className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cocoa/75 transition hover:text-cocoa">
        Evening
      </a>
      <a href="#gallery" className="rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cocoa/75 transition hover:text-cocoa">
        Gallery
      </a>
    </motion.div>
  );
}
