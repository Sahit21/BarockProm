import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-300'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 lg:px-12">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <img
              src="https://storage.googleapis.com/msgsndr/Dw9K5NnNvU9TB4HWyITi/media/69171aac7aa33010e17deec6.png"
              alt="Logo"
              className="w-16 h-16 md:w-20 md:h-20 object-contain transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a
                  href="#services"
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  Leistungen
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 border-b border-gray-300 transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#benefits"
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  Vorteile
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 border-b border-gray-300 transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#jobs"
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  Karriere
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 border-b border-gray-300 transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  Kontakt
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 border-b border-gray-300 transition-all group-hover:w-full"></span>
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#services"
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  Leistungen
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 border-b border-gray-300 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  to="/#benefits"
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  Vorteile
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 border-b border-gray-300 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  to="/#jobs"
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  Karriere
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 border-b border-gray-300 transition-all group-hover:w-full"></span>
                </Link>
                <Link
                  to="/#contact"
                  className="text-white hover:text-blue-400 transition-colors font-medium relative group"
                >
                  Kontakt
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 border-b border-gray-300 transition-all group-hover:w-full"></span>
                </Link>
              </>
            )}
            <Link
              to="/career"
              className="px-6 py-2.5 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all transform hover:scale-105 font-semibold shadow-lg hover:shadow-xl border border-gray-300"
            >
              Jetzt bewerben
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {isHomePage ? (
              <>
                <a
                  href="#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors font-medium py-2 border-b border-gray-300/20"
                >
                  Leistungen
                </a>
                <a
                  href="#benefits"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors font-medium py-2 border-b border-gray-300/20"
                >
                  Vorteile
                </a>
                <a
                  href="#jobs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors font-medium py-2 border-b border-gray-300/20"
                >
                  Karriere
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors font-medium py-2 border-b border-gray-300/20"
                >
                  Kontakt
                </a>
              </>
            ) : (
              <>
                <Link
                  to="/#services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors font-medium py-2 border-b border-gray-300/20"
                >
                  Leistungen
                </Link>
                <Link
                  to="/#benefits"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors font-medium py-2 border-b border-gray-300/20"
                >
                  Vorteile
                </Link>
                <Link
                  to="/#jobs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors font-medium py-2 border-b border-gray-300/20"
                >
                  Karriere
                </Link>
                <Link
                  to="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white hover:text-blue-400 transition-colors font-medium py-2 border-b border-gray-300/20"
                >
                  Kontakt
                </Link>
              </>
            )}
            <Link
              to="/career"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-all font-semibold text-center border border-gray-300"
            >
              Jetzt bewerben
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

