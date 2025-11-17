import Hero from './components/Hero';
import Services from './components/Services';
import Benefits from './components/Benefits';
import JobSection from './components/JobSection';
import Partners from './components/Partners';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Benefits />
      <JobSection />
      <Partners />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
