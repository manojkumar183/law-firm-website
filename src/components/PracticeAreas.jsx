import { useInView } from '../hooks/useInView.js';

const PRACTICE_AREAS = [
  {
    title: 'Real Estate Law',
    description: 'Clear guidance for acquisitions, sales, leasing, financing, and property disputes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    title: 'Criminal Defense',
    description: 'Strategic, discreet defense focused on your rights, reputation, and future.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 3v18M5 6h14M7 6l-4 7h8L7 6Zm10 0-4 7h8l-4-7ZM8 21h8" />
      </svg>
    ),
  },
  {
    title: 'Notary Services',
    description: 'Reliable notarization for affidavits, contracts, deeds, and other vital documents.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 3h9l4 4v14H6V3Z" />
        <path d="M14 3v5h5M9 13h7M9 17h5" />
      </svg>
    ),
  },
];

// Expertise grid: summarizes the firm's core services in responsive, interactive cards.
function PracticeAreas() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="practice-areas" ref={sectionRef} className="scroll-mt-20 bg-navy-950 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">Practice Areas</p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">Areas of Expertise</h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            Focused counsel for complex decisions, delivered with clarity and resolve.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PRACTICE_AREAS.map((area, index) => (
            <article
              key={area.title}
              className={`group border border-white/10 bg-navy-900 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold-500/70 hover:shadow-[0_18px_50px_rgba(201,168,76,0.12)] ${
                isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="h-12 w-12 text-gold-500">{area.icon}</div>
              <h3 className="mt-8 text-2xl font-bold text-white">{area.title}</h3>
              <p className="mt-4 min-h-14 leading-7 text-white/60">{area.description}</p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold-500 transition-colors hover:text-gold-400"
              >
                Learn More <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PracticeAreas;
