import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import PracticeAreas from './components/PracticeAreas.jsx';
import Contact from './components/Contact.jsx';

// Root component: composes the single-page layout section by section.
function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Gaikwad & Associates Law. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
