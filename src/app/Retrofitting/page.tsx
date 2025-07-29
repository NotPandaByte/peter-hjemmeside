"use client";

import { motion } from "framer-motion";
import { Settings, Wrench, CheckCircle, ArrowRight, Zap, Shield, Car, Cog } from "lucide-react";
import Link from "next/link";

export default function RetrofittingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Retrofitting
            </h1>
            <p className="text-xl sm:text-2xl text-[#b0b0b0] mb-8 max-w-3xl mx-auto">
              Professionel installation af DPF og custom dele til din Land Rover. 
              Vi tilpasser din 4x4 til dine specifikke behov.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                Book Retrofitting
              </Link>
              <Link href="/CustomBuilds" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Se Custom Builds
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Retrofitting Services */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vores Retrofitting Services</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Professionel installation og tilpasning af dele til alle Land Rover modeller
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DPF Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Cog className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">DPF Installation</h3>
              <p className="text-[#b0b0b0] mb-4">
                Professionel installation og service af partikelfiltre til alle diesel modeller.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  DPF installation og montering
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  DPF rensning og service
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Software opdatering
                </li>
              </ul>
            </motion.div>

            {/* Custom Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Custom Dele</h3>
              <p className="text-[#b0b0b0] mb-4">
                Installation af custom dele og tilbehør til din Land Rover.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Bull bars og rock sliders
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Lift kits og ophæng
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  LED lygter og tilbehør
                </li>
              </ul>
            </motion.div>

            {/* Performance Upgrades */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Opgraderinger</h3>
              <p className="text-[#b0b0b0] mb-4">
                Performance opgraderinger til forbedret ydeevne og kørselsoplevelse.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Chip tuning og remapping
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Luftindtag og udstødning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Intercooler opgraderinger
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DPF Services */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">DPF Services</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Komplet DPF service og installation til alle diesel Land Rover modeller
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* DPF Installation */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333333]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Settings className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold">DPF Installation</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Professionel DPF montering
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Sensor installation og kalibrering
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Software opdatering og programmering
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Test og kvalitetskontrol
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Garanti på installation og dele
                </li>
              </ul>
            </motion.div>

            {/* DPF Service */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333333]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Wrench className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold">DPF Service</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  DPF rensning og vedligeholdelse
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Fejldiagnosticering og reparation
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Regenerering og reset procedurer
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Preventiv vedligeholdelse
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Rådgivning om DPF pleje
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Parts Installation */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Custom Dele Installation</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Professionel installation af custom dele og tilbehør til din Land Rover
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Bull Bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bull Bars</h3>
              <p className="text-[#b0b0b0]">
                Professionel installation af bull bars til beskyttelse og stil
              </p>
            </motion.div>

            {/* Rock Sliders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rock Sliders</h3>
              <p className="text-[#b0b0b0]">
                Installation af rock sliders til beskyttelse af sideskørter
              </p>
            </motion.div>

            {/* Lift Kits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Lift Kits</h3>
              <p className="text-[#b0b0b0]">
                Professionel installation af lift kits til forbedret terrængående
              </p>
            </motion.div>

            {/* LED Lighting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">LED Belysning</h3>
              <p className="text-[#b0b0b0]">
                Installation af LED lygter og arbejdslygter
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Hvorfor Vælge AutoUniqa?</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Vi kombinerer ekspertise, kvalitet og præcision i alle vores retrofitting opgaver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ekspertise</h3>
              <p className="text-[#b0b0b0]">
                15+ års erfaring med Land Rover retrofitting og custom installationer
              </p>
            </motion.div>

            {/* Quality */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Kvalitet</h3>
              <p className="text-[#b0b0b0]">
                Kun de bedste dele og professionelle værktøjer til alle installationer
              </p>
            </motion.div>

            {/* Warranty */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wrench className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Garanti</h3>
              <p className="text-[#b0b0b0]">
                Fuld garanti på alle installationer og dele
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Klar til at tilpasse din Land Rover?
            </h2>
            <p className="text-lg text-[#b0b0b0] mb-8">
              Lad vores eksperter hjælpe dig med at installere DPF, custom dele eller performance opgraderinger. 
              Vi sikrer professionel installation og optimal funktion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium flex items-center justify-center">
                Book Retrofitting
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/CustomBuilds" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Se Custom Builds
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 