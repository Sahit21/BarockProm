import { Send, Upload } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      <div className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Karriere bei BarockProm
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Werde Teil unseres erfolgreichen Teams im Vertrieb. Verdiene attraktive Provisionen und entwickle dich weiter!
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl animate-fade-in-up">
            <h2 className="text-3xl font-bold text-white mb-8">Bewerbung einreichen</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                    Vorname *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                    placeholder="Dein Vorname"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                    Nachname *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                    placeholder="Dein Nachname"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                    placeholder="deine@email.de"
                    required
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                    placeholder="+49 123 456 789"
                    required
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                  Adresse *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all"
                  placeholder="Straße und Hausnummer, PLZ Ort"
                  required
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                  Berufserfahrung *
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all resize-none"
                  placeholder="Erzähl uns von deiner bisherigen beruflichen Erfahrung..."
                  required
                ></textarea>
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-blue-400 transition-colors">
                  Motivation *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all resize-none"
                  placeholder="Warum möchtest du bei BarockProm arbeiten?"
                  required
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Lebenslauf (PDF) *
                </label>
                <div className="relative group">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="cv-input"
                    required
                  />
                  <label 
                    htmlFor="cv-input" 
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-white/20 rounded-xl cursor-pointer bg-white/5 hover:bg-white/10 hover:border-blue-400 transition-all group-hover:scale-[1.01]"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-8 h-8 mb-3 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      <p className="mb-2 text-sm text-gray-300">
                        <span className="font-semibold">{formData.cv ? formData.cv.name : 'Klicken zum Auswählen'}</span>
                      </p>
                      <p className="text-xs text-gray-500">PDF, DOC oder DOCX (MAX. 10MB)</p>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all transform hover:scale-[1.02] font-bold text-lg shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 mt-8"
              >
                <span>Bewerbung absenden</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
