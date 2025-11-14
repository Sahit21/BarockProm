import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 pb-24">
        <Navigation />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 -mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="text-gray-700 space-y-2">
              <p>[PLATZHALTER: Firmenname]</p>
              <p>[PLATZHALTER: Straße und Hausnummer]</p>
              <p>[PLATZHALTER: PLZ und Ort]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vertreten durch</h2>
            <div className="text-gray-700 space-y-2">
              <p>[PLATZHALTER: Geschäftsführer Name 1]</p>
              <p>[PLATZHALTER: Geschäftsführer Name 2]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <div className="text-gray-700 space-y-2">
              <p>Telefon: [PLATZHALTER: Telefonnummer]</p>
              <p>E-Mail: [PLATZHALTER: E-Mail-Adresse]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Registereintrag</h2>
            <div className="text-gray-700 space-y-2">
              <p>Eintragung im Handelsregister.</p>
              <p>Registergericht: [PLATZHALTER: Registergericht]</p>
              <p>Registernummer: [PLATZHALTER: Registernummer]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
            <div className="text-gray-700 space-y-2">
              <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: [PLATZHALTER: USt-IdNr.]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="text-gray-700 space-y-2">
              <p>[PLATZHALTER: Name]</p>
              <p>[PLATZHALTER: Straße und Hausnummer]</p>
              <p>[PLATZHALTER: PLZ und Ort]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftung für Inhalte</h2>
            <div className="text-gray-700 space-y-2">
              <p>[PLATZHALTER: Text zur Haftung für Inhalte]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Haftung für Links</h2>
            <div className="text-gray-700 space-y-2">
              <p>[PLATZHALTER: Text zur Haftung für Links]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Urheberrecht</h2>
            <div className="text-gray-700 space-y-2">
              <p>[PLATZHALTER: Text zum Urheberrecht]</p>
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

