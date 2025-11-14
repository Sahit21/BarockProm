import { Wifi, Tv, Phone, Zap } from 'lucide-react';

const services = [
  {
    icon: Wifi,
    title: 'Glasfaser Internet',
    description: 'Blitzschnelle Internetverbindungen bis zu 1000 Mbit/s für Privat- und Geschäftskunden',
    color: 'from-blue-400 to-blue-400',
  },
  {
    icon: Tv,
    title: 'TV & Streaming',
    description: 'Moderne TV-Pakete und Streaming-Lösungen in bester Qualität',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Phone,
    title: 'Telefonie',
    description: 'Kristallklare Festnetz- und VoIP-Telefonie für jeden Bedarf',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Zap,
    title: 'Business Solutions',
    description: 'Maßgeschneiderte Lösungen für Unternehmen und Geschäftskunden',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Unsere Produkte
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hochwertige Glasfaser-Lösungen, die deine Kunden begeistern werden
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
