import { useCountUp } from '../hooks/useCountUp.js';
import { useInView } from '../hooks/useInView.js';

const STATS = [
  { value: 200, suffix: '+', label: 'Cases Won' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 3, suffix: '', label: 'Practice Areas' },
];

const ATTORNEYS = [
  {
    name: 'Lahu Gaikwad',
    role: 'Founding Partner',
    specialties: 'Criminal Defense & Real Estate Law',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85',
    bio: 'A Columbia Law School graduate with more than 15 years of experience, Marcus brings meticulous preparation and decisive advocacy to every matter.',
  },
  {
    name: 'Sonali Gaikwad',
    role: 'Partner',
    specialties: 'Real Estate Law & Notary Services',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85',
    bio: 'A graduate of NYU School of Law, Elena is known for practical counsel, careful negotiation, and protecting clients through complex transactions.',
  },
];

function Stat({ value, suffix, label, animate }) {
  const count = useCountUp(value, animate);

  return (
    <div className="border-l-2 border-gold-500 pl-4">
      <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
        {count}{suffix}
      </p>
      <p className="mt-1 text-sm text-white/55">{label}</p>
    </div>
  );
}

// Attorney profiles: introduces the legal team and animates proof-point counters on entry.
function About() {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section id="about" ref={sectionRef} className="scroll-mt-20 bg-navy-900 py-24 sm:py-32">
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-700 lg:px-12 ${
          isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-500">Our Attorneys</p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl">
            Experience shaped by principle.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Two accomplished attorneys, one shared commitment: make the law clear, protect what
            matters, and pursue the strongest possible outcome for every client.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {ATTORNEYS.map((attorney) => (
            <article
              key={attorney.name}
              className="group grid overflow-hidden border border-white/10 bg-navy-950 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/60 sm:grid-cols-[0.8fr_1.2fr]"
            >
              <img
                src={attorney.image}
                alt={`${attorney.name}, ${attorney.role}`}
                className="aspect-[4/3] h-full w-full object-cover object-top grayscale transition duration-500 group-hover:grayscale-0 sm:aspect-auto"
              />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">
                  {attorney.role}
                </p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-white">{attorney.name}</h3>
                <p className="mt-2 text-sm font-medium text-white/70">{attorney.specialties}</p>
                <p className="mt-4 text-sm leading-6 text-white/55">{attorney.bio}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 border-t border-white/10 pt-10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} animate={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
