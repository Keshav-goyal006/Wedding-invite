import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { riseIn } from '../animations';
import { weddingDate } from '../data/invitation';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const getTimeLeft = (): TimeLeft => {
  const target = new Date(weddingDate).getTime();
  const now = Date.now();
  const gap = Math.max(target - now, 0);

  return {
    days: Math.floor(gap / (1000 * 60 * 60 * 24)),
    hours: Math.floor((gap / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((gap / (1000 * 60)) % 60),
    seconds: Math.floor((gap / 1000) % 60),
  };
};

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const items = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="relative mx-auto max-w-md px-4 py-10">
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1470509037663-253afd7f0f51?auto=format&fit=crop&w=900&q=80')] bg-cover bg-center opacity-[0.11]" />
      <motion.div variants={riseIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-120px' }}>
        <div className="relative rounded-[1.9rem] border border-white/70 bg-white/65 p-6 shadow-soft backdrop-blur-md">
          <div className="flex flex-col gap-4">
            <div>
              <p className="font-serif text-xs uppercase tracking-[0.5em] text-ivory-500">Countdown</p>
              <h2 className="mt-3 font-serif text-3xl text-cocoa">The day is coming</h2>
            </div>
            <p className="text-sm leading-7 text-cocoa/70">
              Every passing second brings us closer to a celebration of devotion, family, and the beginning of forever.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {items.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-[1.25rem] border border-ivory-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(250,240,229,0.95))] p-4 text-center shadow-[0_12px_30px_rgba(84,58,39,0.08)]"
                whileHover={{ y: -5, scale: 1.01 }}
              >
                <p className="font-serif text-4xl text-cocoa">{String(item.value).padStart(2, '0')}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.45em] text-ivory-500">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
