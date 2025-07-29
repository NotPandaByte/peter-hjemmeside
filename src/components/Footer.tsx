"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Wrench, Shield, Heart, Compass, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#333333] py-16 sm:py-20 px-4">
      <div className="max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo/autouniqa-logo-256.png" 
                alt="AutoUniqa Logo" 
                className="w-12 h-12"
              />
              <h3 className="text-2xl font-bold text-white">AutoUniqa</h3>
            </div>
            <p className="text-[#b0b0b0] mb-6 leading-relaxed">
              Din dedikerede partner for Land Rover og 4x4 eventyr. Vi kombinerer teknisk ekspertise 
              med passion for at hjælpe dig udforske verden på fire hjul.
            </p>
            
            {/* Trust Indicators */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-[#b0b0b0]">15+ års erfaring</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-[#b0b0b0]">500+ tilfredse kunder</span>
              </div>
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-[#b0b0b0]">Certificeret service</span>
              </div>
            </div>
          </motion.div>

          {/* Services Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Vores Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/RoutineChecks" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Routine kontrold
                </Link>
              </li>
              <li>
                <Link href="/Diagnostics" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Diagnosticering
                </Link>
              </li>
              <li>
                <Link href="/Repairs" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Reparation
                </Link>
              </li>
              <li>
                <Link href="/Retrofitting" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Retrofitting
                </Link>
              </li>
              <li>
                <Link href="/CustomBuilds" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Custom builds
                </Link>
              </li>
              <li>
                <Link href="/Parts" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Dele & Reservedele
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Support & Info</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/Consultation" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Konsultation
                </Link>
              </li>
              <li>
                <Link href="/TechnicalHelp" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Teknisk hjælp
                </Link>
              </li>
              <li>
                <Link href="/About" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Om os
                </Link>
              </li>
              <li>
                <Link href="/Shop" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/Book" className="text-[#b0b0b0] hover:text-amber-600 transition-colors flex items-center group">
                  <ArrowRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform" />
                  Book service
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Kontakt</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Telefon</p>
                  <a href="tel:+4525688080" className="text-[#b0b0b0] hover:text-amber-600 transition-colors">
                    +45 25 68 80 80
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:peter@autouniqa.dk" className="text-[#b0b0b0] hover:text-amber-600 transition-colors">
                    peter@autouniqa.dk
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Adresse</p>
                  <p className="text-[#b0b0b0]">
                    Nøglegådsvej 8<br />
                    3540 Lynge<br />
                    Danmark
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Åbningstider</p>
                  <div className="text-[#b0b0b0] text-sm space-y-1">
                    <div>Mandag - Torsdag: 8:00 - 16:00</div>
                    <div>Fredag: 8:00 - 15:30</div>
                    <div>Lørdag - Søndag: Lukket</div>
                  </div>
                </div>
              </div>

              {/* Social Media in Contact Section */}
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-medium">Sociale Medier</p>
                  <div className="flex space-x-3 mt-2">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61551927893795" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#b0b0b0] hover:text-blue-500 transition-colors duration-300"
                      aria-label="Besøg vores Facebook side"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.youtube.com/@AutoUniqa" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#b0b0b0] hover:text-red-500 transition-colors duration-300"
                      aria-label="Besøg vores YouTube kanal"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-[#333333] pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-[#666666] text-sm">
              © 2024 SEWEN. Alle rettigheder forbeholdes.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/Contact" className="text-[#b0b0b0] hover:text-amber-600 transition-colors text-sm">
                Kontakt
              </Link>
              <Link href="/About" className="text-[#b0b0b0] hover:text-amber-600 transition-colors text-sm">
                Om os
              </Link>
              <Link href="/Book" className="text-[#b0b0b0] hover:text-amber-600 transition-colors text-sm">
                Book service
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61551927893795" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#b0b0b0] hover:text-blue-500 transition-colors duration-300"
                aria-label="Besøg vores Facebook side"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@AutoUniqa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#b0b0b0] hover:text-red-500 transition-colors duration-300"
                aria-label="Besøg vores YouTube kanal"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
