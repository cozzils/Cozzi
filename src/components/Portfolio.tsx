import React from 'react';
import { ExternalLink, Code, Calendar, Users } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sito Vetrina Negozio Locale",
      description: "Sito web moderno per un negozio di abbigliamento con sezioni prodotti, chi siamo e contatti. Design responsive e ottimizzato per mobile.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Sito Vetrina",
      tech: ["HTML", "CSS", "JavaScript"],
      features: ["Design Responsive", "Mappa Integrata", "Form Contatti"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Landing Page Evento Scout",
      description: "Pagina dedicata per un campo estivo scout con programma, iscrizioni e galleria foto. Design colorato e coinvolgente per i giovani.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Landing Page",
      tech: ["React", "Tailwind CSS"],
      features: ["Form Iscrizione", "Galleria Foto", "Countdown Timer"],
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Sito Web Associazione",
      description: "Sito web completo per un'associazione di volontariato con sezioni dedicate, eventi e sistema di donazioni online.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Restyling",
      tech: ["WordPress", "CSS Custom"],
      features: ["SEO Ottimizzato", "Velocità Migliorata", "Mobile First"],
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Portfolio Fotografo",
      description: "Sito portfolio elegante per un fotografo locale con galleria interattiva e sistema di prenotazioni online.",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Portfolio",
      tech: ["Next.js", "Framer Motion"],
      features: ["Galleria Interattiva", "Prenotazioni Online", "Blog Integrato"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { icon: <Code className="h-6 w-6" />, label: "Progetti Completati", value: "15+" },
    { icon: <Users className="h-6 w-6" />, label: "Clienti Soddisfatti", value: "12+" },
    { icon: <Calendar className="h-6 w-6" />, label: "Tempo Medio Consegna", value: "3 giorni" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            I miei lavori
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ecco alcuni esempi dei siti web che ho realizzato. Ogni progetto è stato 
            creato con attenzione ai dettagli e alle esigenze specifiche del cliente.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="flex justify-center mb-4 text-blue-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {project.category}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-bold text-lg mb-2">{project.title}</h4>
                    <p className="text-white/90 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Caratteristiche:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Tecnologie:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-sm`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vuoi vedere il tuo progetto qui?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Ogni sito che realizzo è unico e personalizzato. Contattami per discutere 
              il tuo progetto e vedere come posso aiutarti a raggiungere i tuoi obiettivi online.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('contatti');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Iniziamo il tuo progetto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;