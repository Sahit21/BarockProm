import { Send } from 'lucide-react';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

export default function Career() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    motivation: '',
    cv: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Bewerbung erfolgreich eingereicht! Wir melden uns bald bei dir.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      experience: '',
      motivation: '',
      cv: null,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, cv: e.target.files[0] });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-900 pb-24">
        <Navigation />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 -mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Karriere bei BarockProm
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Werde Teil unseres erfolgreichen Teams im Vertrieb. Verdiene attraktive Provisionen und entwickle dich weiter!
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Bewerbung einreichen</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Vorname *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                  placeholder="Dein Vorname"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nachname *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                  placeholder="Dein Nachname"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                  placeholder="deine@email.de"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                  placeholder="+49 123 456 789"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Adresse *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                placeholder="Straße und Hausnummer, PLZ Ort"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Berufserfahrung *
              </label>
              <textarea
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all resize-none"
                placeholder="Erzähl uns von deiner bisherigen beruflichen Erfahrung..."
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Motivation *
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all resize-none"
                placeholder="Warum möchtest du bei BarockProm arbeiten?"
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Lebenslauf (PDF) *
              </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  id="cv-input"
                  required
                />
                <label htmlFor="cv-input" className="cursor-pointer">
                  <div className="text-gray-600">
                    <p className="font-semibold">{formData.cv ? formData.cv.name : 'Datei auswählen'}</p>
                    <p className="text-sm text-gray-500 mt-1">PDF, DOC oder DOCX</p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg border border-gray-300 flex items-center justify-center space-x-2"
            >
              <span>Bewerbung absenden</span>
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
