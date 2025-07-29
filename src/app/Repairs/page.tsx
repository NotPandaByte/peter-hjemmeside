"use client";

import { motion } from "framer-motion";
import { Wrench, Settings, Shield, CheckCircle, ArrowRight, Clock, Zap, Car } from "lucide-react";
import Link from "next/link";

export default function RepairsPage() {
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
              Reparation
            </h1>
            <p className="text-xl sm:text-2xl text-[#b0b0b0] mb-8 max-w-3xl mx-auto">
              Professionel reparation af alle Land Rover modeller. 
              Vi reparerer alt fra små fejl til større overhalinger.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                Book Reparation
              </Link>
              <Link href="/Diagnostics" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Diagnosticering Først
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vores Reparationsservices</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Komplet reparation af mekaniske og elektriske systemer med fokus på kvalitet og holdbarhed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Engine Repairs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Car className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Motor Reparationer</h3>
              <p className="text-[#b0b0b0] mb-4">
                Komplet motorreparation og overhaling af alle Land Rover motorer.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Topstykke reparation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Ventilstyring justering
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Tænding og brændstof
                </li>
              </ul>
            </motion.div>

            {/* Transmission Repairs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Gearkasse Reparationer</h3>
              <p className="text-[#b0b0b0] mb-4">
                Reparation og overhaling af automatgear og manuelle gearkasser.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Automatgear service
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Kobling reparation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Gearkasse overhaling
                </li>
              </ul>
            </motion.div>

            {/* Electrical Repairs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Elektriske Reparationer</h3>
              <p className="text-[#b0b0b0] mb-4">
                Reparation af alle elektriske systemer og komponenter.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Kabine elektronik
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Startmotor og generator
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Ledningsnettet
                </li>
              </ul>
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
              Vi kombinerer ekspertise, kvalitet og ærlighed i alle vores reparationer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">15+ Års Erfaring</h3>
              <p className="text-[#b0b0b0]">
                Specialister i Land Rover reparationer med årelang erfaring
              </p>
            </motion.div>

            {/* Quality Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Kvalitetsdele</h3>
              <p className="text-[#b0b0b0]">
                Kun originale og kvalitetsdele fra anerkendte leverandører
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
                Alle reparationer kommer med fuld garanti på arbejde og dele
              </p>
            </motion.div>

            {/* Fast Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hurtig Service</h3>
              <p className="text-[#b0b0b0]">
                De fleste reparationer kan udføres samme dag eller inden for 24 timer
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Repairs */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Almindelige Reparationer</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Vi reparerer alle typer af problemer på Land Rover køretøjer
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mechanical Repairs */}
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
                <h3 className="text-2xl font-semibold">Mekaniske Reparationer</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Bremse system reparationer
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Ophæng og styring
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Kølesystem reparationer
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Brændstofsystem
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Udstødningssystem
                </li>
              </ul>
            </motion.div>

            {/* Electrical Repairs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold">Elektriske Reparationer</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Batteri og ladning
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Startmotor og generator
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Kabine elektronik
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Ledningsnettet
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Sensorer og aktuatore
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
              Har din Land Rover brug for reparation?
            </h2>
            <p className="text-lg text-[#b0b0b0] mb-8">
              Lad vores eksperter tage sig af det. Vi reparerer alt fra små fejl til større overhalinger 
              med fokus på kvalitet og holdbarhed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium flex items-center justify-center">
                Book Reparation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/Diagnostics" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Diagnosticering Først
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 