import React from 'react';  
import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Cozzi</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Sviluppatore web di 16 anni specializzato nella creazione di siti moderni, 
              veloci e responsive. Trasformo le tue idee in realtà digitali.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:cozziwebstudio@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Chi sono
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servizi')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Servizi
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Siti vetrina</li>
              <li>Landing page eventi</li>
              <li>Restyling siti</li>
              <li>Consulenza web</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Luca Cozzi. Tutti i diritti riservati.
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              Fatto con <Heart className="h-4 w-4 text-red-500 mx-1" /> da Luca Cozzi
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;