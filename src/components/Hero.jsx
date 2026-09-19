import { useEffect, useState } from 'react';

// Full-screen hero: bold headline, subheadline, and dual CTAs.
// Entrance is animated purely with useEffect-driven state + CSS transitions
// (no framer-motion dependency needed here) so it fades/slides in on mount.
function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(ellipse_at_top,_#101a33_0%,_#050810_65%)]"
    >
      {/* Decorative background overlay to suggest a courthouse/legal backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1600&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/40 via-navy-950/70 to-navy-950" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12">
        <p
          className={`mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gold-500 transition-all duration-700 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          Adv Lahu Gaikwad.
        </p>

        <h1
          className={`text-5xl font-black leading-tight text-white transition-all duration-700 sm:text-6xl md:text-7xl ${
            mounted ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-8 opacity-0'
          }`}
        >
          Justice. Clarity. <span className="text-gold-500">Results.</span>
        </h1>

        <p
          className={`mx-auto mt-6 max-w-2xl text-lg text-white/70 transition-all duration-700 sm:text-xl ${
            mounted ? 'translate-y-0 opacity-100 delay-300' : 'translate-y-8 opacity-0'
          }`}
        >
          Real Estate Law &middot; Criminal Defense &middot; Notary Services — trusted
          representation for 15+ years, delivered with precision and unwavering commitment.
        </p>

        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 transition-all duration-700 sm:flex-row ${
            mounted ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-8 opacity-0'
          }`}
        >
          <a
            href="#contact"
            className="w-full rounded-md bg-gold-500 px-8 py-4 text-base font-semibold text-navy-950 shadow-lg shadow-gold-500/20 transition-transform hover:scale-105 hover:bg-gold-400 sm:w-auto"
          >
            Book a Free Consultation
          </a>
          <a
            href="#about"
            className="w-full rounded-md border border-white/30 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold-500 hover:text-gold-500 sm:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
