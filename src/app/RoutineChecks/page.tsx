"use client";

import { motion } from "framer-motion";
import { CheckCircle, Clock, Wrench, Shield, Calendar, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RoutineChecksPage() {
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
              Routine Kontrol
            </h1>
            <p className="text-xl sm:text-2xl text-[#b0b0b0] mb-8 max-w-3xl mx-auto">
              Professionel vedligeholdelse og rutinekontrol af din Land Rover. 
              Vi sikrer at din 4x4 altid er klar til eventyret.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium">
                Book Kontrol
              </Link>
              <Link href="/Diagnostics" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Læs Mere
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-8 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vores Vedligeholdelsesservices</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Komplet vedligeholdelse af alle Land Rover modeller med fokus på kvalitet og pålidelighed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Oil Change */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Wrench className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Olieskift</h3>
              <p className="text-[#b0b0b0] mb-4">
                Professionelt olieskift med kvalitetsolie specifikt til din Land Rover model.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Kvalitetsolie fra anerkendte mærker
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Oliefilter skift inkluderet
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Kontrol af olieniveau og lækager
                </li>
              </ul>
            </motion.div>

            {/* Brake Service */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Bremseservice</h3>
              <p className="text-[#b0b0b0] mb-4">
                Komplet bremseservice og kontrol af alle bremsekomponenter.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Bremseklodser og skiver kontrol
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Bremsevæske kontrol og skift
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Handbrems justering
                </li>
              </ul>
            </motion.div>

            {/* Air Filter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#0a0a0a] p-8 rounded-lg border border-[#333333] hover:border-[#8b8b8b] transition-colors"
            >
              <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Filter Service</h3>
              <p className="text-[#b0b0b0] mb-4">
                Skift af luftfilter, brændstoffilter og kabinefilter.
              </p>
              <ul className="space-y-2 text-sm text-[#b0b0b0]">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Luftfilter til motor
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Brændstoffilter
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-amber-600 mr-2" />
                  Kabinefilter til AC
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Vedligeholdelsesplan</h2>
            <p className="text-lg text-[#b0b0b0] max-w-2xl mx-auto">
              Følg vores anbefalede vedligeholdelsesplan for optimal ydeevne og levetid
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Every 10,000 km */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333333]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold">Hver 10.000 km</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Olieskift og oliefilter
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Luftfilter kontrol
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Bremsekomponenter kontrol
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Dæktryk og dækforhold
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Væsker kontrol
                </li>
              </ul>
            </motion.div>

            {/* Every 20,000 km */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333333]"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-amber-600/20 rounded-lg flex items-center justify-center mr-4">
                  <AlertTriangle className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="text-2xl font-semibold">Hver 20.000 km</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Luftfilter skift
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Brændstoffilter skift
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Bremsevæske kontrol
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Kabinefilter skift
                </li>
                <li className="flex items-center text-[#b0b0b0]">
                  <CheckCircle className="w-5 h-5 text-amber-600 mr-3" />
                  Komplet køretøjskontrol
                </li>
              </ul>
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
              Er din Land Rover klar til næste eventyr?
            </h2>
            <p className="text-lg text-[#b0b0b0] mb-8">
              Book en rutinekontrol hos AutoUniqa og få ro i sindet. 
              Vores eksperter sikrer at din 4x4 altid er i topform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/Contact" className="bg-amber-600 text-white px-8 py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium flex items-center justify-center">
                Book Kontrol Nu
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href="/Diagnostics" className="border border-[#8b8b8b] text-white px-8 py-4 rounded-lg hover:bg-[#8b8b8b] hover:text-black transition-colors">
                Se Alle Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}