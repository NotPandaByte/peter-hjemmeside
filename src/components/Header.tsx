"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowRight, ShoppingCart } from "lucide-react";
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#333333] transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md' 
          : 'bg-[#0a0a0a]/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="/logo/autouniqa-logo.svg" 
                  alt="AutoUniqa Logo" 
                  className="w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-xl md:text-2xl font-bold text-white tracking-wider group-hover:text-amber-600 transition-colors duration-300">
                AutoUniqa
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {/* Services Dropdown */}
            <HeadlessMenu as="div" className="relative">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <HeadlessMenu.Button className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light tracking-wide flex items-center">
                  Services
                  <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                </HeadlessMenu.Button>
              </motion.div>
              
              <Transition
                enter="transition ease-out duration-300"
                enterFrom="opacity-0 -translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
              >
                <HeadlessMenu.Items className="fixed top-full left-0 right-0 mt-2 w-full bg-[#1a1a1a] border-b border-[#333333] shadow-2xl z-50 focus:outline-none">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-0 w-full"
                  >
                    {/* Left Section - Services Grid */}
                    <div className="col-span-2 p-6 lg:p-12">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* MAINTENANCE Column */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-4 lg:mb-6">VEDLIGEHOLDELSE</h3>
                          <div className="space-y-3 lg:space-y-4">
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/RoutineChecks" className="block">
                                <motion.div 
                                  whileHover={{ x: 5 }}
                                  className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                  <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Routine kontrol</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Planlagt kontrol og olieservice</p>
                                  </div>
                                </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/Diagnostics" className="block">
                                <motion.div 
                                  whileHover={{ x: 5 }}
                                  className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                  <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Diagnosticering</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Avanceret fejlfinding af din 4X4</p>
                                  </div>
                                </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/Repairs" className="block">
                                <motion.div 
                                  whileHover={{ x: 5 }}
                                  className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                  <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Reparation</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Mekanisk og elektrisk reparation af din 4X4</p>
                                  </div>
                                </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                          </div>
                        </motion.div>

                        {/* UPGRADES Column */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-4 lg:mb-6">OPGRADER</h3>
                          <div className="space-y-3 lg:space-y-4">
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/Retrofitting" className="block">
                                  <motion.div 
                                    whileHover={{ x: 5 }}
                                    className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                  >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Retrofitting</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Partiklefilter og andre dele til din 4X4</p>
                                    </div>
                                  </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/CustomBuilds" className="block">
                                  <motion.div 
                                    whileHover={{ x: 5 }}
                                    className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                  >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Custom builds</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Skædersyede løsninger til din 4X4</p>
                                    </div>
                                  </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/Parts" className="block">
                                  <motion.div 
                                    whileHover={{ x: 5 }}
                                    className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                  >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Dele</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Kvalitets dele til din 4x4.</p>
                                    </div>
                                  </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                          </div>
                        </motion.div>

                        {/* SUPPORT Column */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-4 lg:mb-6">EKSPERT RÅDGIVNING</h3>
                          <div className="space-y-3 lg:space-y-4">
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/Consultation" className="block">
                                <motion.div 
                                  whileHover={{ x: 5 }}
                                  className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                  <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Konsultation</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Ekspert rådgivning til din 4X4</p>
                                  </div>
                                </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/TechnicalHelp" className="block">
                                <motion.div 
                                  whileHover={{ x: 5 }}
                                  className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                  <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Teknisk hjælp</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Løsninger til komplekse opgaver</p>
                                  </div>
                                </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/Contact" className="block">
                                <motion.div 
                                  whileHover={{ x: 5 }}
                                  className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 lg:mr-4 flex-shrink-0"></div>
                                  <div>
                                      <h4 className="text-white font-medium mb-1 text-sm lg:text-base">Kontakt os</h4>
                                      <p className="text-[#b0b0b0] text-xs lg:text-sm font-light">Kontakt vores dedikerede support.</p>
                                  </div>
                                </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Right Section - Call to Action */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="col-span-1 bg-[#f5f5f5] p-6 lg:p-12"
                    >
                      <h3 className="text-[#1a1a1a] text-lg lg:text-xl font-medium mb-3">Ekspertise til ethvret eventyr</h3>
                      <p className="text-[#666666] text-sm mb-6 font-light">Service, reparation og opgradering af Land Rover og 4X4</p>
                      <Link href="/Contact">
                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="text-[#1a1a1a] font-medium hover:text-[#8b8b8b] transition-colors duration-300 flex items-center"
                      >
                        Kontakt os <ArrowRight size={16} className="ml-2" />
                      </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </HeadlessMenu.Items>
              </Transition>
            </HeadlessMenu>

            {/* Other Menu Items */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link href="/About" className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light tracking-wide">
                Om os
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="/Shop" className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light tracking-wide">
                Shop
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link href="/Contact" className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light tracking-wide">
                Kontakt
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link href="/Cart" className="bg-blue-600 text-white px-3 lg:px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700 transition-colors">
                <ShoppingCart size={16} />
                <span className="hidden xl:inline">Cart</span>
                <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/Book" className="bg-amber-600 text-white px-4 lg:px-6 py-2 rounded hover:bg-amber-700 transition-colors">
                Book
              </Link>
            </motion.div>

            {/* Social Media Links */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex items-center space-x-3"
            >
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
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 -translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-4"
      >
        <motion.div
          className="lg:hidden fixed top-16 md:top-20 left-0 right-0 bg-[#1a1a1a] border-b border-[#333333] shadow-2xl z-50"
        >
          <div className="max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
              {/* Services Grid */}
              <div className="col-span-1 md:col-span-2 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* MAINTENANCE Column */}
                  <div>
                    <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-4">MAINTENANCE</h3>
                    <div className="space-y-3">
                      <Link href="/RoutineChecks" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Routine checks</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">Scheduled inspections and oil changes.</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/Diagnostics" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Diagnostics</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">Advanced fault finding for 4x4 systems.</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/Repairs" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Repairs</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">Mechanical and electrical fixes for all models.</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* UPGRADES Column */}
                  <div>
                    <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-4">UPGRADES</h3>
                    <div className="space-y-3">
                      <Link href="/Retrofitting" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Retrofitting</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">DPF and custom part installs.</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/CustomBuilds" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Custom builds</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">Tailored solutions for unique needs.</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/Parts" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Parts</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">Quality components for 4x4 vehicles.</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* SUPPORT Column */}
                  <div>
                    <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-4">SUPPORT</h3>
                    <div className="space-y-3">
                      <Link href="/Consultation" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Consultation</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">Expert advice for your 4x4.</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/TechnicalHelp" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Technical help</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">Solutions for complex issues.</p>
                          </div>
                        </div>
                      </Link>
                      <Link href="/Contact" onClick={() => setIsMenuOpen(false)} className="block">
                        <div className="flex items-start p-2 rounded hover:bg-[#2a2a2a] transition-colors duration-200">
                          <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div>
                            <h4 className="text-white font-medium mb-1 text-sm">Contact</h4>
                            <p className="text-[#b0b0b0] text-xs font-light">Reach out for dedicated support.</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Navigation Links for Mobile */}
                <div className="mt-6 pt-6 border-t border-[#333333] flex flex-wrap gap-4">
                  <Link href="/About" onClick={() => setIsMenuOpen(false)} className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light text-sm">
                    Om os
                  </Link>
                  <Link href="/Contact" onClick={() => setIsMenuOpen(false)} className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light text-sm">
                    Kontakt
                  </Link>
                </div>

                {/* Social Media Links for Mobile */}
                <div className="mt-4 pt-4 border-t border-[#333333] flex items-center justify-center space-x-6">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61551927893795" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#b0b0b0] hover:text-blue-500 transition-colors duration-300"
                    aria-label="Besøg vores Facebook side"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Call to Action Section */}
              <div className="col-span-1 bg-[#f5f5f5] p-6">
                <h3 className="text-[#1a1a1a] text-lg font-medium mb-3">Expertise for every adventure</h3>
                <p className="text-[#666666] text-sm mb-6 font-light">Service, repairs, and upgrades for Land Rover and 4x4 vehicles.</p>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link href="/Contact" onClick={() => setIsMenuOpen(false)} className="text-[#1a1a1a] font-medium hover:text-[#8b8b8b] transition-colors duration-300 flex items-center mb-4">
                    Contact <ArrowRight size={16} className="ml-2" />
                  </Link>
                  <Link href="/Cart" onClick={() => setIsMenuOpen(false)} className="bg-blue-600 text-white w-full px-4 py-3 rounded flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors">
                    <ShoppingCart size={16} />
                    <span>Cart (0)</span>
                  </Link>
                  <Link href="/Book" onClick={() => setIsMenuOpen(false)} className="bg-amber-600 text-white w-full px-6 py-3 rounded hover:bg-amber-700 transition-colors text-center block">
                    Book
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Transition>
    </motion.nav>
  );
} 