import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent('Richiesta preventivo dal sito');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\nEmail: ${formData.email}\nServizio: ${formData.service}\nMessaggio: ${formData.message}`
    );

    // Apri Gmail con i dati precompilati
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=cozziwebstudio@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');

    // Reset del form e messaggio di conferma
    setFormData({ name: '', email: '', service: '', message: '' });
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "cozziwebstudio@gmail.com",
      description: "Rispondo entro 24 ore"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      value: "+39 371 425 3750",
      description: "Per comunicazioni rapide"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Orari",
      value: "Lun-Ven 14:00-19:00",
      description: "Weekend su appuntamento"
    }
  ];

  const services = [
    "Sito vetrina base",
    "Landing page per eventi",
    "Miglioramento sito esistente",
    "Consulenza personalizzata",
    "Altro"
  ];

  return (
    <section id="contatti" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contattami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hai un progetto in mente? Parliamone! Ti risponderò velocemente con un 
            preventivo personalizzato e tutti i dettagli di cui hai bisogno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Informazioni di contatto</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="text-blue-600 mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-gray-900 font-medium">{info.value}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-900 mb-3">Perché scegliermi?</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Preventivo gratuito e senza impegno
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Consegna rapida (1-5 giorni)
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Prezzi trasparenti e accessibili
                  </li>
                <li className="flex items-center text-gray-700">
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Richiedi un preventivo</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Messaggio inviato!</h4>
                  <p className="text-gray-600">Ti risponderò entro 24 ore con tutte le informazioni.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="la-tua-email@esempio.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servizio di interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    >
                      <option value="">Seleziona un servizio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                      placeholder="Descrivi il tuo progetto, le tue esigenze e qualsiasi dettaglio che possa aiutarmi a fornirti un preventivo accurato..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center group"
                  >
                    Invia richiesta
                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Processo di lavoro semplice e trasparente
            </h3>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Contatto</h4>
                <p className="text-gray-600 text-sm">Mi scrivi descrivendo il tuo progetto</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Preventivo</h4>
                <p className="text-gray-600 text-sm">Ti invio un preventivo dettagliato</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Sviluppo</h4>
                <p className="text-gray-600 text-sm">Realizzo il tuo sito con aggiornamenti costanti</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Consegna</h4>
                <p className="text-gray-600 text-sm">Il tuo sito è online e funzionante</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
