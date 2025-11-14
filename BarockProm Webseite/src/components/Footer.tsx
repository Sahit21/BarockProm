import { TrendingUp, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">BarockProm</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Deutschlands führende Vertriebsagentur für Glasfaser und moderne Kommunikationslösungen im Door-to-Door Vertrieb.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors border border-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors border border-gray-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-400 flex items-center justify-center transition-colors border border-gray-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Leistungen</a></li>
              <li><a href="#benefits" className="hover:text-blue-400 transition-colors">Vorteile</a></li>
              <li><a href="#jobs" className="hover:text-blue-400 transition-colors">Karriere</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><a href="/impressum" className="hover:text-blue-400 transition-colors">Impressum</a></li>
              <li><a href="/datenschutz" className="hover:text-blue-400 transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BarockProm. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
