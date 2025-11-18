import { DollarSign, TrendingUp, Users, Award, Calendar, Briefcase, Zap, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Top-Provisionen',
    description: 'Verdiene bis zu 3.500€ pro Monat durch attraktive Provisionsmodelle (kein Fixlohn)',
    highlight: 'bis zu 3.500€',
    color: 'from-emerald-400 to-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    icon: TrendingUp,
    title: 'Karrierechancen',
    description: 'Schneller Aufstieg zum Teamleiter oder Gebietsmanager möglich',
    highlight: 'Aufstieg garantiert',
    color: 'from-orange-400 to-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: Users,
    title: 'Junges Team',
    description: 'Arbeite mit motivierten Kollegen und erfahrenen Mentoren',
    highlight: '50+ Mitarbeiter',
    color: 'from-blue-400 to-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Award,
    title: 'Schulungen',
    description: 'Professionelle Einarbeitung und kontinuierliche Weiterbildung',
    highlight: 'Kostenlos',
    color: 'from-purple-400 to-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Calendar,
    title: 'Flexible Zeiten',
    description: 'Gestalte deine Arbeitszeiten selbst und arbeite wann du willst',
    highlight: 'Vollzeit/Teilzeit',
    color: 'from-pink-400 to-pink-500',
    bgColor: 'bg-pink-50',
  },
  {
    icon: Briefcase,
    title: 'Equipment',
    description: 'Tablet, Verkaufsmaterialien und professionelle Ausstattung inklusive',
    highlight: 'Alles inklusive',
    color: 'from-cyan-400 to-cyan-500',
    bgColor: 'bg-cyan-50',
  },
];

export default function Benefits() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.benefit-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="benefits"
      ref={containerRef}
      className="py-32 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-10 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full border border-emerald-500/50 backdrop-blur-sm">
              <Rocket className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-sm">Deine Vorteile</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Warum BarockProm?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bei uns erwarten dich echte Perspektiven, hervorragende Verdienstmöglichkeiten und ein Team, das dich fördert
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-index={index}
              className={`benefit-card relative group overflow-hidden rounded-2xl transition-all duration-700 transform ${
                visibleCards.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`absolute inset-0 ${benefit.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-gray-600/80 rounded-2xl p-8 transition-all duration-500 h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-all duration-700 blur-2xl" style={{ backgroundImage: `linear-gradient(to bottom right, rgb(from-color), rgb(to-color))` }}></div>

                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-xl group-hover:shadow-2xl border border-white/20 group-hover:border-white/40`}>
                    <benefit.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className={`inline-block px-3 py-1 bg-gradient-to-r ${benefit.color} text-white text-xs font-bold rounded-full mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 opacity-80 group-hover:opacity-100`}>
                    {benefit.highlight}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-gray-400 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-emerald-400 group-hover:to-blue-400 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <Zap className="w-4 h-4" />
                    <span>Mehr erfahren</span>
                  </div>
                </div>

                <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${benefit.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-r-full`}></div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
          <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 rounded-3xl"></div>

            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 group-hover:via-emerald-500/100 transition-all duration-700"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Zap className="w-6 h-6 text-emerald-400" />
                <h3 className="text-4xl font-bold text-white">
                  Bereit durchzustarten?
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Starte noch heute deine Karriere als Vertriebsprofi bei BarockProm
              </p>
              <Link
                to="/career"
                className="inline-block px-12 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-bold text-lg shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-110 hover:-translate-y-1 border border-emerald-400/50 hover:border-emerald-300 relative overflow-hidden group/button"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Rocket className="w-5 h-5" />
                  Jetzt bewerben
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-blue-600 transform scale-x-0 group-hover/button:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
