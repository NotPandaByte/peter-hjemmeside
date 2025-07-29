"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone, Mail, MapPin, Wrench, Shield, Heart, Compass, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const { scrollY } = useScroll();
  
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1]);
  const textY = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/Images/Landrover.avif')` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/70 via-[#1a1a1a]/50 to-[#0a0a0a]/70">
              {/* Subtle animated elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-amber-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight tracking-tight"
          >
            LAND ROVER
            <br />
            <span className="text-amber-600">EVENTYR</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl text-[#b0b0b0] mb-12 max-w-4xl mx-auto font-light tracking-wide leading-relaxed"
          >
            Din dedikerede partner for Land Rover og 4x4 eventyr. 
            Vi kombinerer teknisk ekspertise med passion for at hjælpe dig 
            udforske verden på fire hjul.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="/Book" className="bg-amber-600 text-white px-12 py-4 text-lg font-semibold tracking-wider hover:bg-amber-700 transition-colors rounded-lg">
              BOOK SERVICE
            </Link>
            <Link href="/Contact" className="bg-transparent border-2 border-white text-white px-12 py-4 text-lg font-semibold tracking-wider hover:bg-white hover:text-[#0a0a0a] transition-colors rounded-lg">
              KONTAKT OS
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.0 }}
            className="mt-16 flex flex-wrap justify-center items-center gap-8 text-[#b0b0b0]"
          >
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-amber-600 fill-current" />
              <span className="text-sm font-medium">15+ års erfaring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium">Certificeret service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-amber-600" />
              <span className="text-sm font-medium">500+ tilfredse kunder</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-amber-600"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Vores <span className="text-amber-600">Services</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed">
              Fra rutineservice til custom builds - vi er din komplette partner 
              for alle dine Land Rover og 4x4 behov.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-amber-600/50 transition-colors group"
            >
              <div className="bg-amber-600/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <Wrench className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Service & Vedligeholdelse</h3>
              <p className="text-[#b0b0b0] mb-6 leading-relaxed">
                Komplet service og vedligeholdelse af din Land Rover. Fra olieskift 
                til større reparationer - vi holder din eventyrmaskine i topform.
              </p>
              <Link href="/RoutineChecks" className="text-amber-600 hover:text-amber-500 font-semibold flex items-center group">
                Læs mere <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-amber-600/50 transition-colors group"
            >
              <div className="bg-amber-600/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <Shield className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Reparation & Diagnosticering</h3>
              <p className="text-[#b0b0b0] mb-6 leading-relaxed">
                Avanceret fejlfinding og reparation af alle Land Rover modeller. 
                Vores ekspertise sikrer hurtig og præcis løsning af alle problemer.
              </p>
              <Link href="/Diagnostics" className="text-amber-600 hover:text-amber-500 font-semibold flex items-center group">
                Læs mere <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-amber-600/50 transition-colors group"
            >
              <div className="bg-amber-600/20 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <Compass className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Custom Builds & Opgraderinger</h3>
              <p className="text-[#b0b0b0] mb-6 leading-relaxed">
                Skædersyede løsninger til dit eventyr. Fra lift kits til komplette 
                overland builds - vi realiserer din vision.
              </p>
              <Link href="/CustomBuilds" className="text-amber-600 hover:text-amber-500 font-semibold flex items-center group">
                Læs mere <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                Din Partner i <span className="text-amber-600">Eventyret</span>
              </h2>
              <p className="text-xl text-[#b0b0b0] mb-8 leading-relaxed">
                Autouniqa blev grundlagt med en enkelt mission: at være Danmarks 
                førende ekspert på Land Rover og 4x4 køretøjer. Vi forstår, at at 
                køre Land Rover ikke bare er transport - det er et eventyr der 
                venter på at blive opdaget.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-2 h-8 bg-amber-600 mr-6"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">15+ års erfaring</h3>
                    <p className="text-[#b0b0b0]">Specialiseret i Land Rover og 4x4 systemer</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-8 bg-amber-600 mr-6"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Certificeret service</h3>
                    <p className="text-[#b0b0b0]">Alle vores teknikere er fuldt certificerede</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-8 bg-amber-600 mr-6"></div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Passion for eventyr</h3>
                    <p className="text-[#b0b0b0]">Vi deler din kærlighed til Land Rover eventyr</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/About" className="bg-amber-600 text-white px-8 py-3 font-semibold rounded-lg hover:bg-amber-700 transition-colors">
                  Læs mere om os
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg border border-[#333333] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-6">🚙</div>
                    <h3 className="text-2xl font-bold mb-4">Land Rover Ekspertise</h3>
                    <p className="text-[#b0b0b0] leading-relaxed">
                      Fra Defender til Discovery, Range Rover til Evoque - 
                      vi kender hver model ind og ud.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Hvorfor Vælge <span className="text-amber-600">Autouniqa?</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed">
              Vi er ikke bare et værksted - vi er dine partnere i eventyret.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
              className="text-center"
            >
              <div className="bg-amber-600/20 p-6 rounded-lg mb-6">
                <Shield className="w-12 h-12 text-amber-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Kvalitet</h3>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">
                Vi bruger kun de bedste dele og følger strenge kvalitetsstandarder 
                for at sikre, at din Land Rover altid er i topform.
              </p>
            </motion.div>

            <motion.div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              className="text-center"
            >
              <div className="bg-amber-600/20 p-6 rounded-lg mb-6">
                <Wrench className="w-12 h-12 text-amber-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ekspertise</h3>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">
                Vores team har specialiseret sig i Land Rover og 4x4 systemer 
                med årelang erfaring og kontinuerlig uddannelse.
              </p>
            </motion.div>

            <motion.div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
              className="text-center"
            >
              <div className="bg-amber-600/20 p-6 rounded-lg mb-6">
                <Heart className="w-12 h-12 text-amber-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Passion</h3>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">
                Vi deler din passion for eventyr og forstår, at din Land Rover 
                er mere end bare et køretøj - det er din frihed.
              </p>
            </motion.div>

            <motion.div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="800"
              className="text-center"
            >
              <div className="bg-amber-600/20 p-6 rounded-lg mb-6">
                <Compass className="w-12 h-12 text-amber-600 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-4">Eventyr</h3>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">
                Vi hjælper dig med at forberede dig til næste eventyr, 
                uanset hvor det måtte føre hen.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-center mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Start Dit <span className="text-amber-600">Eventyr</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed">
              Klar til at forberede din Land Rover til næste store eventyr? 
              Kontakt os i dag og lad os tale om dine planer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              <h3 className="text-3xl font-bold mb-8 text-white">
                Kontaktoplysninger
              </h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <Phone className="text-amber-600 mr-6" size={24} />
                  <div>
                    <p className="font-semibold text-white mb-1">Telefon</p>
                    <p className="text-[#b0b0b0]">+45 25 68 80 80</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-amber-600 mr-6" size={24} />
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <p className="text-[#b0b0b0]">peter@autouniqa.dk</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-amber-600 mr-6" size={24} />
                  <div>
                    <p className="font-semibold text-white mb-1">Værksted</p>
                    <p className="text-[#b0b0b0]">Nøglegådsvej 8, 3540 Lynge</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#1a1a1a] rounded-lg border border-[#333333]">
                <h4 className="text-xl font-semibold mb-4 text-amber-600">Åbningstider</h4>
                <div className="space-y-2 text-[#b0b0b0]">
                  <div className="flex justify-between">
                    <span>Mandag - Torsdag:</span>
                    <span>8:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fredag:</span>
                    <span>8:00 - 15:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lørdag - Søndag:</span>
                    <span>Lukket</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              data-aos="fade-left"
              data-aos-duration="1200"
              className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333333]"
            >
              <h3 className="text-2xl font-bold mb-6">Send os en besked</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Dit navn"
                    className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#444444] rounded-lg focus:border-amber-600 focus:outline-none transition-colors text-white placeholder-[#666666]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Din email"
                    className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#444444] rounded-lg focus:border-amber-600 focus:outline-none transition-colors text-white placeholder-[#666666]"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Fortæl os om dit eventyr..."
                    rows={4}
                    className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#444444] rounded-lg focus:border-amber-600 focus:outline-none transition-colors resize-none text-white placeholder-[#666666]"
                  ></textarea>
                </div>
                <button className="w-full bg-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-amber-700 transition-colors">
                  SEND BESKED
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
