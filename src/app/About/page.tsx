"use client";

import { motion } from "framer-motion";
import { Wrench, MapPin, Users, Award, Heart, Shield, Zap, Compass } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Om Autouniqa
            </h1>
            <p className="text-xl text-[#b0b0b0] max-w-4xl mx-auto leading-relaxed">
              Din dedikerede partner for Land Rover og 4x4 eventyr. Vi kombinerer teknisk ekspertise 
              med en uovertruffen passion for at hjælpe dig med at udforske verden på fire hjul.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Vores Historie
              </h2>
              <div className="space-y-4 text-[#b0b0b0] leading-relaxed">
                <p>
                  Autouniqa blev grundlagt med en enkelt mission: at være Danmarks førende ekspert 
                  på Land Rover og 4x4 køretøjer. Vi forstår, at at køre Land Rover ikke bare er 
                  transport - det er et eventyr der venter på at blive opdaget.
                </p>
                <p>
                  Med over 15 års erfaring i branchen har vi hjulpet hundredvis af eventyrere med 
                  at holde deres køretøjer i perfekt stand, så de kan fokusere på det der virkelig 
                  betyder noget: at udforske verden på deres egne præmisser.
                </p>
                <p>
                  Fra de mest udfordrende terræner til daglige ture, vi er her for at sikre, 
                  at din Land Rover altid er klar til næste eventyr.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-[#1a1a1a] rounded-lg p-8 border border-[#333333]">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="bg-amber-600/20 p-4 rounded-lg mb-3">
                      <Wrench className="w-8 h-8 text-amber-600 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">15+ År</h3>
                    <p className="text-sm text-[#b0b0b0]">Erfaring</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-amber-600/20 p-4 rounded-lg mb-3">
                      <Users className="w-8 h-8 text-amber-600 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">500+</h3>
                    <p className="text-sm text-[#b0b0b0]">Tilfredse kunder</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-amber-600/20 p-4 rounded-lg mb-3">
                      <Award className="w-8 h-8 text-amber-600 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">100%</h3>
                    <p className="text-sm text-[#b0b0b0]">Kvalitet</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-amber-600/20 p-4 rounded-lg mb-3">
                      <Heart className="w-8 h-8 text-amber-600 mx-auto" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">24/7</h3>
                    <p className="text-sm text-[#b0b0b0]">Support</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Vores Værdier
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Vi bygger vores forretning på fire grundlæggende principper der sikrer, 
              at dit eventyr aldrig stopper.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] mb-4">
                <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Kvalitet</h3>
                <p className="text-[#b0b0b0] text-sm leading-relaxed">
                  Vi bruger kun de bedste dele og følger strenge kvalitetsstandarder 
                  for at sikre, at din Land Rover altid er i topform.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] mb-4">
                <Zap className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Ekspertise</h3>
                <p className="text-[#b0b0b0] text-sm leading-relaxed">
                  Vores team har specialiseret sig i Land Rover og 4x4 systemer 
                  med årelang erfaring og kontinuerlig uddannelse.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] mb-4">
                <Heart className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Passion</h3>
                <p className="text-[#b0b0b0] text-sm leading-relaxed">
                  Vi deler din passion for eventyr og forstår, at din Land Rover 
                  er mere end bare et køretøj - det er din frihed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center"
            >
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#333333] mb-4">
                <Compass className="w-12 h-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Eventyr</h3>
                <p className="text-[#b0b0b0] text-sm leading-relaxed">
                  Vi hjælper dig med at forberede dig til næste eventyr, 
                  uanset hvor det måtte føre hen.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Vores Team
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Mød de dedikerede eksperter der gør dit Land Rover eventyr muligt.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#1a1a1a] rounded-lg p-6 border border-[#333333] text-center"
            >
              <div className="w-24 h-24 bg-amber-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peter</h3>
              <p className="text-amber-600 mb-3">Grundlægger & Chefmekaniker</p>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">
                Med over 15 års erfaring i Land Rover og 4x4 systemer er Peter 
                hjernen bag Autouniqa. Hans passion for eventyr og tekniske ekspertise 
                sikrer, at hver kunde får den bedste service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#1a1a1a] rounded-lg p-6 border border-[#333333] text-center"
            >
              <div className="w-24 h-24 bg-amber-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Wrench className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Vores Team</h3>
              <p className="text-amber-600 mb-3">Dedikerede Eksperter</p>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">
                Vores team af certifikerede mekanikere og teknikere deler alle 
                samme passion for Land Rover og 4x4 eventyr. Vi arbejder sammen 
                for at sikre perfekt service hver gang.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-[#1a1a1a] rounded-lg p-6 border border-[#333333] text-center"
            >
              <div className="w-24 h-24 bg-amber-600/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Kvalitetssikring</h3>
              <p className="text-amber-600 mb-3">Certificeret Service</p>
              <p className="text-[#b0b0b0] text-sm leading-relaxed">
                Alle vores medarbejdere gennemgår regelmæssig uddannelse og 
                certificering for at sikre, at vi altid leverer den højeste 
                standard af service og reparation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Hvorfor Vælge Autouniqa?
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Vi er ikke bare et værksted - vi er dine partnere i eventyret.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Specialiseret Ekspertise</h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed">
                    Vi fokuserer udelukkende på Land Rover og 4x4 køretøjer, 
                    hvilket giver os en dybdegående forståelse af disse komplekse systemer.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Kvalitetsgaranti</h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed">
                    Alle vores reparationer kommer med en omfattende garanti, 
                    så du kan være sikker på, at dit eventyr fortsætter uforstyrret.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Personlig Service</h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed">
                    Vi behandler hver kunde som familie og tager os tid til at 
                    forstå dine specifikke behov og eventyrplaner.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Hurtig Service</h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed">
                    Vi forstår, at dit eventyr ikke kan vente. Derfor prioriterer 
                    vi hurtig og effektiv service uden at ofre kvaliteten.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Lokalt Værksted</h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed">
                    Beliggende i hjertet af Danmark er vi nemme at nå, 
                    men vores ekspertise rækker til hele landet.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-amber-600 p-3 rounded-lg flex-shrink-0">
                  <Compass className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Eventyrrådgivning</h3>
                  <p className="text-[#b0b0b0] text-sm leading-relaxed">
                    Vi hjælper ikke kun med reparationer - vi rådgiver også om 
                    udstyr, forberedelse og planlægning af dine eventyr.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg p-12 border border-amber-600/30"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Klar til Dit Næste Eventyr?
            </h2>
            <p className="text-xl text-[#b0b0b0] mb-8 max-w-2xl mx-auto">
              Lad os hjælpe dig med at forberede din Land Rover til næste store eventyr. 
              Kontakt os i dag og lad os tale om dine planer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/Contact" 
                className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
              >
                Kontakt Os
              </a>
              <a 
                href="/Book" 
                className="bg-transparent border border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 hover:text-white transition-colors"
              >
                Book Service
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 