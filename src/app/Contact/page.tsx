"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 3000);
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Kontakt Os
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Vi er her for at hjælpe dig med alle dine Land Rover og 4x4 behov. Kontakt os for ekspert rådgivning, 
              booking af service eller spørgsmål om dine projekter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8">Kontaktoplysninger</h2>
              
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1a1a1a] p-3 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Adresse</h3>
                    <p className="text-[#b0b0b0] leading-relaxed">
                      Autouniqa<br />
                      Nøglegådsvej 8<br />
                      3540 Lynge<br />
                      Danmark
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1a1a1a] p-3 rounded-lg flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                    <p className="text-[#b0b0b0]">
                      <a href="tel:+4512345678" className="hover:text-white transition-colors">
                        +45 25 68 80 80
                      </a>
                    </p>
                    <p className="text-sm text-[#8b8b8b] mt-1">
                      Mandag - Fredag: 8:00 - 16:00
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1a1a1a] p-3 rounded-lg flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-[#b0b0b0]">
                      <a href="mailto:info@autouniqa.dk" className="hover:text-white transition-colors">
                        peter@autouniqa.dk
                      </a>
                    </p>
                    <p className="text-sm text-[#8b8b8b] mt-1">
                      Vi svarer inden for 24 timer
                    </p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1a1a1a] p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Åbningstider</h3>
                    <div className="text-[#b0b0b0] space-y-1">
                      <div className="flex justify-between">
                        <span>Mandag - Torsdag:</span>
                        <span>8:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fredag:</span>
                        <span>8:00 - 15:30</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Lørdag:</span>
                        <span>Lukket</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Søndag:</span>
                        <span>Lukket</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-12 p-6 bg-[#1a1a1a] rounded-lg border border-[#333333]">
                <h3 className="text-xl font-semibold mb-3 text-amber-600">Akut Hjælp</h3>
                <p className="text-[#b0b0b0] mb-4">
                  Har du brug for akut hjælp med din 4x4? Ring til vores nødnummer:
                </p>
                <a 
                  href="tel:+4512345678" 
                  className="text-2xl font-bold text-white hover:text-amber-600 transition-colors"
                >
                  +45 25 68 80 80
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send os en besked</h2>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-900/20 border border-green-600 rounded-lg p-8 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-500 mb-2">Tak for din besked!</h3>
                  <p className="text-[#b0b0b0]">
                    Vi har modtaget din henvendelse og vender tilbage inden for 24 timer.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Navn *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                        placeholder="Dit navn"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                        placeholder="din@email.dk"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                        placeholder="+45 12 34 56 78"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Emne *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-amber-600 transition-colors"
                      >
                        <option value="">Vælg emne</option>
                        <option value="service">Service & Vedligeholdelse</option>
                        <option value="repair">Reparation</option>
                        <option value="upgrade">Opgradering</option>
                        <option value="consultation">Konsultation</option>
                        <option value="parts">Dele & Reservedele</option>
                        <option value="booking">Booking</option>
                        <option value="other">Andet</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Besked *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-lg focus:outline-none focus:border-amber-600 transition-colors resize-none"
                      placeholder="Beskriv dit spørgsmål eller hvad vi kan hjælpe dig med..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-amber-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sender...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Besked</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#1a1a1a] rounded-lg p-8 border border-[#333333]"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Find Os</h2>
            <div className="aspect-video bg-[#333333] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <p className="text-[#b0b0b0]">
                  Kort kommer snart - vi arbejder på at integrere et interaktivt kort
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 