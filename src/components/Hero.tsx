import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BsChevronDown } from 'react-icons/bs';
import { brideName, groomName, heroQuote, weddingDate } from '../data/invitation';
import { pageStagger, riseIn } from '../animations';

export default function Hero() {
  const [isIntroOpen, setIsIntroOpen] = useState(true);

  useEffect(() => {
    if (!isIntroOpen) {
      document.body.style.overflow = '';
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isIntroOpen]);

  const openInvitation = () => {
    setIsIntroOpen(false);
    window.setTimeout(() => {
      document.getElementById('invite-card')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  };

  const formattedDate = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(weddingDate)),
    [],
  );

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f4f1ea] bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] bg-cover bg-center text-cocoa"
    >
      <motion.div
        className="absolute left-8 top-24 h-36 w-36 rounded-full bg-ivory-300/40 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, 8, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-10 top-10 h-48 w-48 rounded-full bg-rosegold/20 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <AnimatePresence>
        {isIntroOpen ? (
          <motion.div
            className="absolute inset-0 z-40 flex items-center justify-center overflow-hidden bg-[#f4f1ea] bg-[url('https://www.transparenttextures.com/patterns/old-wall.png')] bg-cover bg-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,248,199,0.92),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(245,191,40,0.3),transparent_28%),url('/hd-aesthetic-sunflower-field-iphone.jpg')] bg-cover bg-center opacity-55 brightness-110 saturate-125 mix-blend-screen" />
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-100">
              <img
                src="/red-flower-bloom-golden-glitter-flower-frame-border.png"
                alt="Floral border frame"
                className="h-full w-full object-fill"
              />
            </div>
            <motion.div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4" variants={pageStagger} initial="hidden" animate="show">
              <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.2),transparent_35%),radial-gradient(circle_at_bottom,rgba(120,92,63,0.14),transparent_28%)]" />
              <div className="relative z-10 flex w-full max-w-[24rem] flex-col items-center">
                <motion.div
                  className="relative z-10 mb-8 w-full max-w-sm"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <button
                    type="button"
                    aria-label="Open envelope seal"
                    onClick={openInvitation}
                    className="relative z-10 w-full max-w-sm cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
                  >
                    <img
                      src="/envelope-seal.png"
                      alt="Sealed Wedding Envelope"
                      className="h-auto w-full drop-shadow-[0_25px_25px_rgba(40,30,20,0.3)] drop-shadow-2xl"
                    />
                  </button>
                </motion.div>

                <motion.div className="relative z-10 mt-12 w-full max-w-[19rem] text-center mix-blend-multiply text-[#3e3427]" variants={riseIn}>
                  <div className="relative z-10 px-6 py-7">
                    <p className="mb-4 font-serif text-xs font-semibold uppercase tracking-[0.3em] text-[#3e3427]">A HEARTFELT INVITATION</p>
                    <h2 className="mb-6 font-script text-5xl font-semibold text-[#3e3427]">Tap the seal</h2>
                    <p className="mb-2 font-serif text-sm font-semibold uppercase tracking-widest text-[#3e3427]">
                      OPEN THE ENVELOPE TO REVEAL
                      <br />
                      THE CELEBRATION
                    </p>
                    <p className="mt-6 font-serif text-xs font-semibold uppercase tracking-widest text-[#3e3427]">DRESS CODE: FULL INDIAN ETHNIC</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {!isIntroOpen ? (
        <>
          <div id="invite-card" className="relative z-10 mx-auto flex min-h-screen items-center px-4 pb-16 pt-16">
            <motion.div
              className="w-full"
              variants={pageStagger}
              initial="hidden"
              animate="show"
            >
              <motion.div variants={riseIn} className="relative mx-auto max-w-sm overflow-hidden rounded-[1.9rem] border border-white/75 bg-white/50 p-6 text-center shadow-soft backdrop-blur-md">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.38),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(255,236,191,0.22),transparent_34%)]" />
                <div className="relative z-10">
                  <img
                    src="/—Pngtree—lord ganesha face with orange_17414785.png"
                    alt="Lord Ganesha face"
                    className="mx-auto mb-4 h-20 w-20 object-contain sm:h-24 sm:w-24"
                  />
                  <h1 className="font-script text-5xl leading-none text-cocoa sm:text-6xl">
                    {groomName} &amp; {brideName}
                  </h1>
                  <p className="font-serif text-xs uppercase tracking-[0.42em] text-ivory-500">A romantic celebration</p>
                  <h2 className="mt-4 font-script text-5xl leading-none text-cocoa">A heartfelt invitation</h2>
                  <p className="mt-4 font-serif text-xl leading-relaxed text-cocoa/80">
                    {formattedDate}
                    <span className="mx-3 text-ivory-400">•</span>
                    {heroQuote}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-cocoa/70">
                    We are delighted to invite you into a noon of blessings and celebrations, lush florals, and the kind of joy that lingers long after the last dance.
                  </p>
                  <p className="mt-2 text-sm font-semibold uppercase tracking-[0.28em] text-cocoa/70">
                    Dress Code: Full Indian Ethnic
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.a
            href="#countdown"
            className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 rounded-full border border-cocoa/10 bg-white/60 px-4 py-3 text-cocoa shadow-soft backdrop-blur-sm"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BsChevronDown className="h-5 w-5" />
          </motion.a>
        </>
      ) : null}
    </section>
  );
}
