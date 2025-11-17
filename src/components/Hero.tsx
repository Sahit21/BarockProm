import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.5) 0%, transparent 50%)',
        }}
      />

      <Navigation />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-24">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Deine Karriere im
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400 border-b border-gray-300">
              Vertrieb
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Werde Teil unseres erfolgreichen Teams und verdiene überdurchschnittlich im Door-to-Door Vertrieb
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/career"
              className="group px-8 py-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center space-x-2 border border-gray-300"
            >
              <span>Karriere starten</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="#services"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all transform hover:scale-105 font-semibold text-lg border border-white/20"
            >
              Mehr erfahren
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
}
