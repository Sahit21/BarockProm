import { DollarSign, TrendingUp, Users, Award, Calendar, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: DollarSign,
    title: 'Top-Provisionen',
    description: 'Verdiene bis zu 3.500€ pro Monat durch attraktive Provisionsmodelle (kein Fixlohn)',
    highlight: 'bis zu 3.500€',
  },
  {
    icon: TrendingUp,
    title: 'Karrierechancen',
    description: 'Schneller Aufstieg zum Teamleiter oder Gebietsmanager möglich',
    highlight: 'Aufstieg garantiert',
  },
  {
    icon: Users,
    title: 'Junges Team',
    description: 'Arbeite mit motivierten Kollegen und erfahrenen Mentoren',
    highlight: '50+ Mitarbeiter',
  },
  {
    icon: Award,
    title: 'Schulungen',
    description: 'Professionelle Einarbeitung und kontinuierliche Weiterbildung',
    highlight: 'Kostenlos',
  },
  {
    icon: Calendar,
    title: 'Flexible Zeiten',
    description: 'Gestalte deine Arbeitszeiten selbst und arbeite wann du willst',
    highlight: 'Vollzeit/Teilzeit',
  },
  {
    icon: Briefcase,
    title: 'Equipment',
    description: 'Tablet, Verkaufsmaterialien und professionelle Ausstattung inklusive',
    highlight: 'Alles inklusive',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Warum BarockProm?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bei uns erwarten dich echte Perspektiven und hervorragende Verdienstmöglichkeiten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-blue-500/10 rounded-bl-full transform translate-x-8 -translate-y-8 border-l border-gray-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-gray-300">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>

                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-400 text-sm font-semibold rounded-full mb-3 border border-gray-300">
                  {benefit.highlight}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-400 rounded-3xl p-12 text-center text-white shadow-2xl border border-gray-300">
          <h3 className="text-3xl font-bold mb-4">
            Bereit durchzustarten?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Starte noch heute deine Karriere als Vertriebsprofi bei BarockProm
          </p>
          <Link
            to="/career"
            className="inline-block px-10 py-4 bg-white text-blue-400 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-bold text-lg shadow-lg border border-gray-300"
          >
            Jetzt bewerben
          </Link>
        </div>
      </div>
    </section>
  );
}
