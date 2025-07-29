"use client";

import { motion } from "framer-motion";
import { Search, Cpu, AlertTriangle, CheckCircle, Wrench, ArrowRight, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function DiagnosticsPage() {
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
              Diagnosticering
            </h1>
            <p className="text-xl sm:text-2xl text-[#b0b0b0] mb-8 max-w-3xl mx-auto">
              Avanceret fejlfinding og diagnosticering af alle Land Rover systemer. 
              Vi finder og løser problemer før de bliver dyre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                Book Diagnosticering
              </Link>
              <Link href="/Repairs" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Se Reparationer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Services */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vores Diagnostic Services</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Komplet diagnosticering af alle elektroniske og mekaniske systemer i din Land Rover
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Engine Diagnostics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Motor Diagnosticering</h3>
              <p className="text-[#b0b0b0] mb-4">
                Avanceret diagnosticering af motor, brændstofsystem og emissioner.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  OBD-II fejlkoder læsning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Motor parametre analyse
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Brændstofsystem kontrol
                </li>
              </ul>
            </motion.div>

            {/* Transmission Diagnostics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Gearkasse Diagnosticering</h3>
              <p className="text-[#b0b0b0] mb-4">
                Komplet diagnosticering af automatgear og manuelle gearkasser.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Gearkasse fejlkoder
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Gearskifte kvalitet
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Køling og smøring
                </li>
              </ul>
            </motion.div>

            {/* Electrical Systems */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Elektriske Systemer</h3>
              <p className="text-[#b0b0b0] mb-4">
                Diagnosticering af alle elektriske systemer og komponenter.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Batteri og ladning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Startmotor og generator
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Kabine elektronik
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diagnostic Process */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vores Diagnostic Process</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Systematisk tilgang til fejlfinding der sikrer præcise resultater
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Initial Kontrol</h3>
              <p className="text-[#b0b0b0]">
                Grundig gennemgang af køretøjets tilstand og kundens beskrivelse af problemet
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fejlkode Læsning</h3>
              <p className="text-[#b0b0b0]">
                Avanceret diagnosticering med professionelle værktøjer og software
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Analyse</h3>
              <p className="text-[#b0b0b0]">
                Detaljeret analyse af fejlkoder og system parametre for at identificere roden til problemet
              </p>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Løsning</h3>
              <p className="text-[#b0b0b0]">
                Præcis reparation eller udskiftning af defekte komponenter med kvalitetsdele
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Professionelt Udstyr</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Vi bruger kun de bedste diagnosticeringsværktøjer og software til at sikre præcise resultater
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Diagnostic Tools */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Wrench className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold">Diagnosticeringsværktøjer</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Autel MaxiSys Elite
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Snap-on Verdict
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Land Rover SDD Software
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Oscilloskop til signalanalyse
                </li>
              </ul>
            </motion.div>

            {/* Software */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold">Software & Database</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Opdaterede fejlkode databaser
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Tekniske service manualer
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Wiring diagrammer
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Live data streaming
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Har din Land Rover problemer?
            </h2>
            <p className="text-lg text-[#b0b0b0] mb-8">
              Lad vores eksperter diagnosticere problemet med avancerede værktøjer og årelang erfaring. 
              Vi finder roden til problemet og løser det permanent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium flex items-center justify-center">
                Book Diagnosticering
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/Repairs" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Se Reparationer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 