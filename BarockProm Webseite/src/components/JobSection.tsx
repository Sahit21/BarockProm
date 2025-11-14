import { Link } from 'react-router-dom';

export default function JobSection() {
  return (
    <section id="jobs" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Karriere bei BarockProm
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Werde Teil unseres erfolgreichen Teams im Vertrieb
          </p>
        </div>

        <div className="bg-blue-400 rounded-3xl p-12 text-white text-center shadow-2xl border border-gray-300">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Starte deine Karriere im Vertrieb
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Wir suchen motivierte Vertriebsmitarbeiter für unseren Door-to-Door Vertrieb. Verdiene attraktive Provisionen und entwickle dich weiter!
            </p>
            <Link
              to="/career"
              className="inline-block px-10 py-4 bg-white text-blue-400 rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg border border-gray-300"
            >
              Jetzt bewerben
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
