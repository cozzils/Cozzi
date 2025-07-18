import React from 'react';
import { Code, Zap, Heart, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Codice Moderno",
      description: "Utilizzo le tecnologie più aggiornate per creare siti veloci e sicuri"
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Tempi Rapidi",
      description: "Consegne in 1-5 giorni per farti andare online velocemente"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Passione Autentica",
      description: "Amo quello che faccio e si vede nel risultato finale"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Risultati Concreti",
      description: "Siti che funzionano davvero e portano risultati alla tua attività"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Chi sono
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La mia passione per il web development è iniziata quando avevo 14 anni. 
            Oggi, a 16 anni, ho già aiutato diverse realtà locali a crescere online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">La mia storia</h3>
            <p className="text-gray-600 mb-6">
              Ho iniziato a programmare per curiosità e ben presto ho scoperto che potevo 
              aiutare le persone a far crescere le loro attività online. Da allora, ho 
              studiato continuamente per migliorare le mie competenze.
            </p>
            <p className="text-gray-600 mb-6">
              Nonostante la mia giovane età, ho già acquisito esperienza con progetti reali, 
              aiutando negozi locali, associazioni e gruppi scout a creare la loro presenza digitale.
            </p>
            <p className="text-gray-600">
              Ogni progetto è per me un'opportunità di crescita e di mettere la mia creatività 
              al servizio di chi ha bisogno di una soluzione web professionale e accessibile.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Perché scegliermi?</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Prezzi onesti e trasparenti
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Comunicazione diretta e veloce
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Passione genuina per il web
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  Supporto anche dopo la consegna
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;