import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Altin Ramadani',
    role: 'Geschäftsführer',
    bio: '15+ Jahre Erfahrung im Telekommunikations-Vertrieb',
    image: 'https://storage.googleapis.com/msgsndr/Dw9K5NnNvU9TB4HWyITi/media/69171aac7aa33010e17deec6.png',
  },
  {
    name: 'Daniel Teliga',
    role: 'Geschäftsführer',
    bio: 'Experte für Kundenbindung und Sales-Strategien',
    image: 'https://storage.googleapis.com/msgsndr/Dw9K5NnNvU9TB4HWyITi/media/69171aac7aa33010e17deec6.png',
  },

 
];

export default function Team() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-9xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-94 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-white text-lg">
                      {member.name}
                    </h3>
                    <p className="text-blue-300 text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-200 text-sm mb-4">
                      {member.bio}
                    </p>
                    <div className="flex space-x-3">
                      <a href="#" className="w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center transition-colors border border-gray-300">
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center transition-colors border border-gray-300">
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-blue-400 hover:bg-blue-500 flex items-center justify-center transition-colors border border-gray-300">
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unternehmensleitung
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Hinter BarockProm steckt ein erfahrenes Team von Profis, die leidenschaftlich für erfolgreichen Vertrieb und Kundenzufriedenheit stehen. Mit über 50 engagierten Mitarbeitern begleiten wir dich auf deinem Weg zum Sales-Profi.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Erfahrene Mentoren
                </h3>
                <p className="text-gray-600">
                  Lerne von den besten Vertriebsprofis der Branche mit jahrzehntelanger Erfahrung
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Starke Unternehmenskultur
                </h3>
                <p className="text-gray-600">
                  Wertschätzung, Teamgeist und gegenseitige Unterstützung prägen unsere Arbeitsweise
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Kontinuierliche Entwicklung
                </h3>
                <p className="text-gray-600">
                  Regelmäßige Schulungen und Trainings für deine persönliche und berufliche Weiterentwicklung
                </p>
              </div>
            </div>

            <Link
              to="/career"
              className="inline-block px-8 py-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg border border-gray-300"
            >
              Teil unseres Teams werden
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
