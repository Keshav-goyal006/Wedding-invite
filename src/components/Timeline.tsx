import { motion } from 'framer-motion';
import { scheduleEvents } from '../data/invitation';
import { riseIn } from '../animations';

type TimelineProps = {
  id: string;
  title: string;
  subtitle: string;
};

export default function Timeline({ id, title, subtitle }: TimelineProps) {
  const events = scheduleEvents;
  const shellClass = 'bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),rgba(250,243,233,0.95)_42%,rgba(243,228,210,0.96)_100%)]';
  const accentClass = 'from-ivory-400 via-rosegold/60 to-transparent';
  const floralBg = "bg-[url('https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80')]";

  return (
    <section id={id} className="relative mx-auto max-w-md px-4 py-10">
      <div className={`pointer-events-none absolute inset-0 rounded-[2rem] bg-cover bg-center opacity-[0.26] ${floralBg}`} />
      <motion.div variants={riseIn} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-120px' }}>
        <div className={`relative overflow-hidden rounded-[1.9rem] border border-white/70 p-6 shadow-soft backdrop-blur-md ${shellClass}`}>
          <div className={`pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.2] mix-blend-multiply ${floralBg}`} />
          <div className="relative z-10">
          <div>
            <p className="font-serif text-xs uppercase tracking-[0.5em] text-ivory-500">Schedule</p>
            <h2 className="mt-3 font-serif text-3xl text-cocoa">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-cocoa/70">
              {subtitle}
            </p>
          </div>

          <div className="relative mt-8 pl-3">
            <div className={`absolute left-3 top-0 h-full w-px bg-gradient-to-b ${accentClass}`} />
            <div className="space-y-6">
              {events.map((event) => (
                <motion.article
                  key={event.title}
                  className="relative pl-7"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25 }}
                >
                  <span className="absolute left-0 top-4 h-3.5 w-3.5 rounded-full border-2 border-white bg-ivory-500 shadow-[0_0_0_8px_rgba(212,166,103,0.16)]" />
                  <div className="rounded-[1.25rem] border border-ivory-100 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(250,239,228,0.95))] p-4 shadow-[0_14px_32px_rgba(84,58,39,0.08)]">
                    <div className="flex flex-col gap-3">
                      <div>
                        <p className="font-serif text-xl text-cocoa">{event.title}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-ivory-500">{event.date}</p>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.32em] text-ivory-500">
                          {event.time}
                        </p>
                      </div>
                      <a
                        href={event.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-fit items-center rounded-full border border-cocoa/10 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-cocoa transition hover:bg-cocoa hover:text-ivory-50"
                      >
                        View on Map
                      </a>
                    </div>
                    <p className="mt-3 text-base text-cocoa/85">{event.location}</p>
                    <p className="mt-2 text-sm leading-7 text-cocoa/70">{event.address}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-7 text-cocoa/70">{event.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
