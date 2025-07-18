import React from 'react';
import { Globe, Megaphone, Sparkles, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Sito vetrina base",
      subtitle: "Realizzo il tuo sito vetrina semplice e professionale",
      description: "Creo un sito web pulito, veloce e responsive per presentare la tua attività, negozio o associazione in modo chiaro ed elegante.",
      price: "A partire da 50€",
      deliveryTime: "2-4 giorni",
      features: [
        "1 pagina principale (home)",
        "Sezioni su chi sei, cosa offri, contatti e mappa",
        "Personalizzazione colori e font",
        "Versione mobile e desktop",
        "Ottimizzazione velocità"
      ],
      perfectFor: "Negozi locali, artigiani, associazioni, gruppi scout, chi vuole iniziare a farsi conoscere online",
      gradient: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      icon: <Megaphone className="h-12 w-12 text-green-600" />,
      title: "Landing page per eventi",
      subtitle: "Landing page per il tuo evento o iniziativa speciale",
      description: "Realizzo pagine di presentazione dedicate per eventi, feste, attività scout o di volontariato, con tutte le informazioni essenziali e un design accattivante.",
      price: "A partire da 30-40€",
      deliveryTime: "1-3 giorni",
      features: [
        "Pagina singola con titolo, descrizione, programma",
        "Galleria immagini integrata",
        "Form di iscrizione o link a Google Forms",
        "Design responsive per smartphone",
        "Condivisione social ottimizzata"
      ],
      perfectFor: "Eventi scout, feste parrocchiali, tornei sportivi locali, raccolte fondi e iniziative solidali",
      gradient: "from-green-500 to-emerald-500",
      popular: true
    },
    {
      icon: <Sparkles className="h-12 w-12 text-purple-600" />,
      title: "Miglioramento sito esistente",
      subtitle: "Restyling o ottimizzazione del tuo sito web attuale",
      description: "Se hai già un sito ma ti sembra vecchio, lento o poco chiaro, ti aiuto a renderlo più moderno, leggibile e funzionale anche da cellulare.",
      price: "Da 20€ a 70€",
      deliveryTime: "3-5 giorni",
      features: [
        "Analisi gratuita del tuo sito",
        "Restyling grafico e miglioramento testi",
        "Ottimizzazione per smartphone",
        "Miglioramento velocità di caricamento",
        "Aggiornamento contenuti"
      ],
      perfectFor: "Chi vuole aggiornare la propria immagine online, chi riceve pochi visitatori, chi desidera un sito più veloce",
      gradient: "from-purple-500 to-pink-500",
      popular: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contatti');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            I miei servizi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluzioni web professionali a prezzi accessibili. Ogni progetto è realizzato 
            con cura e attenzione ai dettagli per garantire il massimo risultato.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-green-500' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Più richiesto
                  </span>
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${service.gradient} p-6 rounded-t-2xl text-white`}>
                <div className="flex items-center justify-between mb-4">
                  {service.icon}
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    {service.deliveryTime}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm mb-4">{service.subtitle}</p>
                <div className="text-3xl font-bold">{service.price}</div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Cosa include:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfetto per:</h4>
                  <p className="text-gray-600 text-sm">{service.perfectFor}</p>
                </div>

              
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Hai un progetto particolare in mente?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Ogni progetto è unico! Contattami per discutere le tue esigenze specifiche 
            e ricevere un preventivo personalizzato. La consulenza iniziale è sempre gratuita.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105"
          >
            Parliamone insieme
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
