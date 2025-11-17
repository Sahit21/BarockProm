import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 pb-24">
        <Navigation />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 -mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Allgemeine Hinweise</h3>
                <p>[PLATZHALTER: Text zu allgemeinen Hinweisen zum Datenschutz]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Datenerfassung auf dieser Website</h3>
                <p>[PLATZHALTER: Text zur Datenerfassung]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hosting</h2>
            <div className="text-gray-700 space-y-2">
              <p>[PLATZHALTER: Text zum Hosting]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Datenschutz</h3>
                <p>[PLATZHALTER: Text zum Datenschutz]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="mt-2 space-y-1">
                  <p>[PLATZHALTER: Firmenname]</p>
                  <p>[PLATZHALTER: Straße und Hausnummer]</p>
                  <p>[PLATZHALTER: PLZ und Ort]</p>
                  <p>Telefon: [PLATZHALTER: Telefonnummer]</p>
                  <p>E-Mail: [PLATZHALTER: E-Mail-Adresse]</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Speicherdauer</h3>
                <p>[PLATZHALTER: Text zur Speicherdauer]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
                <p>[PLATZHALTER: Text zum Widerruf]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen</h3>
                <p>[PLATZHALTER: Text zum Widerspruchsrecht]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
                <p>[PLATZHALTER: Text zum Beschwerderecht]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Datenerfassung auf dieser Website</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Kontaktformular</h3>
                <p>[PLATZHALTER: Text zum Kontaktformular]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Anfrage per E-Mail, Telefon oder Telefax</h3>
                <p>[PLATZHALTER: Text zu Anfragen]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Plugins und Tools</h2>
            <div className="text-gray-700 space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Fonts</h3>
                <p>[PLATZHALTER: Text zu Google Fonts, falls verwendet]</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Google Maps</h3>
                <p>[PLATZHALTER: Text zu Google Maps, falls verwendet]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Ihre Rechte</h2>
            <div className="text-gray-700 space-y-2">
              <p>[PLATZHALTER: Text zu den Rechten der betroffenen Person]</p>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all transform hover:scale-105 font-semibold border border-gray-300"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

