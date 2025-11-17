import { Globe, Award, Zap } from 'lucide-react';

const partners = [
  {
    name: 'Glasfaser Deutschland AG',
    logo: '🌐',
    description: 'Führender Infrastruktur-Provider für hochwertige Glasfaser-Lösungen',
  },
  {
    name: 'TeleComm Solutions',
    logo: '📡',
    description: 'Innovativer Telekommunikations-Partner mit modernen Services',
  },
  {
    name: 'Connected Networks',
    logo: '🔗',
    description: 'Spezialist für Business-Lösungen und Enterprise-Connectivity',
  },
  {
    name: 'Speed Internet',
    logo: '⚡',
    description: 'Premium-Provider für Ultra-High-Speed Internetverbindungen',
  },
];

export default function Partners() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Unsere Produktpartner
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Wir arbeiten mit den besten und innovativsten Unternehmen der Branche zusammen. Unsere Produktpartner bieten hochwertige Glasfaser-, Internet- und Telekommunikationslösungen, die wir mit professionellem Vertrieb erfolgreich zum Kunden bringen.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Zertifizierte Partner</h3>
                  <p className="text-gray-600">Alle Partner sind nach höchsten Standards zertifiziert</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Bundesweit tätig</h3>
                  <p className="text-gray-600">Präsenz in ganz Deutschland und erweitertes Netzwerk</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Zukunftstechnologien</h3>
                  <p className="text-gray-600">Fortschrittliche Technologien und ständige Innovation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-400/20 rounded-3xl transform -rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {partner.logo}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {partner.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
