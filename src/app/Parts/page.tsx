"use client";

import { motion } from "framer-motion";
import { Package, CheckCircle, ArrowRight, Shield, Star, Truck, Zap } from "lucide-react";
import Link from "next/link";

export default function PartsPage() {
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
              Kvalitetsdele
            </h1>
            <p className="text-xl sm:text-2xl text-[#b0b0b0] mb-8 max-w-3xl mx-auto">
              Originale og kvalitetsdele til alle Land Rover modeller. 
              Vi sikrer at din 4x4 får de bedste komponenter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                Kontakt os
              </Link>
              <Link href="/Contact" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Bestil Dele
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parts Categories */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vores Dele Kategorier</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Komplet sortiment af dele til alle Land Rover modeller
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Original Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Originale Dele</h3>
              <p className="text-[#b0b0b0] mb-4">
                Ægte Land Rover dele med fuld garanti og perfekt pasform.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Fuldt garanterede
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Perfekt pasform
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Land Rover kvalitet
                </li>
              </ul>
            </motion.div>

            {/* Quality Aftermarket */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Kvalitets Aftermarket</h3>
              <p className="text-[#b0b0b0] mb-4">
                Anerkendte mærker der leverer samme kvalitet som originale dele.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Testede og verificerede
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Konkurrencedygtige priser
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Høj kvalitet
                </li>
              </ul>
            </motion.div>

            {/* Performance Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Performance Dele</h3>
              <p className="text-[#b0b0b0] mb-4">
                Performance dele til forbedret ydeevne og kørselsoplevelse.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Testede performance dele
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Professionel installation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Garanti på ydeevne
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parts Categories */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vores Dele Sortiment</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Vi har dele til alle systemer i din Land Rover
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Engine Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Motor Dele</h3>
              <p className="text-[#b0b0b0]">
                Alle dele til motor, brændstofsystem og køling
              </p>
            </motion.div>

            {/* Brake Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bremse Dele</h3>
              <p className="text-[#b0b0b0]">
                Komplet bremse systemer og komponenter
              </p>
            </motion.div>

            {/* Suspension Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ophæng Dele</h3>
              <p className="text-[#b0b0b0]">
                Ophæng, styring og dæk/fælge
              </p>
            </motion.div>

            {/* Electrical Parts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Elektriske Dele</h3>
              <p className="text-[#b0b0b0]">
                Batterier, lygter og kabine elektronik
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Parts Quality */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Kvalitetsgaranti</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Vi sikrer at alle dele leverer den forventede kvalitet og holdbarhed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quality Control */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <CheckCircle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold">Kvalitetskontrol</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Alle dele testes før salg
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Verificering af originalitet
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Kvalitetskontrol af leverandører
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Test af performance dele
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Dokumentation af kvalitet
                </li>
              </ul>
            </motion.div>

            {/* Warranty */}
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
                <h3 className="text-2xl font-semibold">Garanti & Service</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Fuld garanti på alle dele
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Gratis returnering ved fejl
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Professionel rådgivning
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Installation service
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Efterfølgende support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery & Service */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Levering & Service</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Hurtig levering og professionel service på alle dele
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Fast Delivery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Hurtig Levering</h3>
              <p className="text-[#b0b0b0]">
                De fleste dele leveres samme dag eller inden for 24 timer
              </p>
            </motion.div>

            {/* Expert Advice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Ekspert Rådgivning</h3>
              <p className="text-[#b0b0b0]">
                Professionel rådgivning om hvilke dele der passer til din Land Rover
              </p>
            </motion.div>

            {/* Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Installation</h3>
              <p className="text-[#b0b0b0]">
                Professionel installation af alle dele med garanti
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Hvorfor Vælge AutoUniqa?</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Vi sikrer at din Land Rover får de bedste dele til den bedste pris
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Specialister i Land Rover dele med årelang erfaring
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
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fuld Garanti</h3>
              <p className="text-[#b0b0b0]">
                Komplet garanti på alle dele og installationer
              </p>
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
              Har du brug for dele til din Land Rover?
            </h2>
            <p className="text-lg text-[#b0b0b0] mb-8">
              Lad vores eksperter hjælpe dig med at finde de rigtige dele. 
              Vi har kvalitetsdele til alle Land Rover modeller.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium flex items-center justify-center">
                Kontakt os
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/Contact" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Kontakt Os
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 