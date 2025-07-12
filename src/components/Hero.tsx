import React from 'react';  
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10 mt-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Ciao, sono <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Luca Cozzi</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in-delay">
            Sviluppatore Web di 16 anni con la passione per creare siti moderni e funzionali
          </p>
          <p className="text-lg text-blue-200 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
            Trasformo le tue idee in siti web professionali, responsive e ottimizzati. 
            Dalla vetrina aziendale alla landing page per eventi, creo soluzioni digitali su misura.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('servizi')}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-green-600 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              Scopri i miei servizi
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105"
            >
              Vedi i miei lavori
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-4">
            <a href="https://github.com" className="text-white hover:text-green-400 transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-blue-400 transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:cozziwebstudio@gmail.com" className="text-white hover:text-orange-400 transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll Down Indicator */}
          <button
            onClick={() => scrollToSection('about')}
            className="text-white hover:text-green-400 transition-colors animate-bounce"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;