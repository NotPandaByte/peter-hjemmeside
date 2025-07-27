"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ArrowRight, ShoppingCart } from "lucide-react";
import { Menu as HeadlessMenu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.9, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [8, 12]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      style={{ 
        backgroundColor: `rgba(10, 10, 10, ${headerOpacity.get()})`,
        backdropFilter: `blur(${headerBlur.get()}px)`
      }}
      className="absolute top-0 left-0 right-0 z-50 border-b border-[#333333] sticky"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <Link href="/" className="text-3xl font-bold text-white tracking-wider">Autouniqa</Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
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
                <HeadlessMenu.Items className="fixed top-20 left-0 w-full bg-[#1a1a1a] border-b border-[#333333] shadow-2xl z-50 focus:outline-none">
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="grid grid-cols-3 gap-0 w-full"
                  >
                    {/* Left Section - 3 Columns (2/3 width) */}
                    <div className="col-span-2 p-12">
                      <div className="grid grid-cols-3 gap-8">
                        {/* MAINTENANCE Column */}
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-6">MAINTENANCE</h3>
                          <div className="space-y-4">
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/RoutineChecks" className="block">
                                  <motion.div 
                                    whileHover={{ x: 5 }}
                                    className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                  >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Routine checks</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">Scheduled inspections and oil changes.</p>
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
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Diagnostics</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">Advanced fault finding for 4x4 systems.</p>
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
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Repairs</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">Mechanical and electrical fixes for all models.</p>
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
                          <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-6">UPGRADES</h3>
                          <div className="space-y-4">
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/Retrofitting" className="block">
                                  <motion.div 
                                    whileHover={{ x: 5 }}
                                    className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                  >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Retrofitting</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">DPF and custom part installs.</p>
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
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Custom builds</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">Tailored solutions for unique needs.</p>
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
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Parts</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">Quality components for 4x4 vehicles.</p>
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
                          <h3 className="text-[#8b8b8b] text-sm font-medium tracking-widest mb-6">SUPPORT</h3>
                          <div className="space-y-4">
                            <HeadlessMenu.Item>
                              {({ active }) => (
                                <Link href="/Consultation" className="block">
                                  <motion.div 
                                    whileHover={{ x: 5 }}
                                    className={`flex items-start p-2 rounded transition-colors duration-200 ${active ? 'bg-[#2a2a2a]' : ''}`}
                                  >
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Consultation</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">Expert advice for your 4x4.</p>
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
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Technical help</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">Solutions for complex issues.</p>
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
                                    <div className="w-2 h-2 border border-[#8b8b8b] rounded-full mt-2 mr-4"></div>
                                    <div>
                                      <h4 className="text-white font-medium mb-1">Contact</h4>
                                      <p className="text-[#b0b0b0] text-sm font-light">Reach out for dedicated support.</p>
                                    </div>
                                  </motion.div>
                                </Link>
                              )}
                            </HeadlessMenu.Item>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Right Section - Call to Action (1/3 width) */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      className="col-span-1 bg-[#f5f5f5] p-12"
                    >
                      <h3 className="text-[#1a1a1a] text-xl font-medium mb-3">Expertise for every adventure</h3>
                      <p className="text-[#666666] text-sm mb-6 font-light">Service, repairs, and upgrades for Land Rover and 4x4 vehicles.</p>
                      <Link href="/Contact">
                        <motion.button 
                          whileHover={{ x: 5 }}
                          className="text-[#1a1a1a] font-medium hover:text-[#8b8b8b] transition-colors duration-300 flex items-center"
                        >
                          Contact <ArrowRight size={16} className="ml-2" />
                        </motion.button>
                      </Link>
                    </motion.div>
                  </motion.div>
                </HeadlessMenu.Items>
              </Transition>
            </HeadlessMenu>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light tracking-wide"
            >
              About
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light tracking-wide"
            >
              Blog
            </motion.button>
            <HeadlessMenu as="div" className="relative">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <HeadlessMenu.Button className="text-[#b0b0b0] hover:text-white transition-colors duration-300 font-light tracking-wide flex items-center">
                  Support
                  <ChevronDownIcon className="ml-1 h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                </HeadlessMenu.Button>
              </motion.div>
            </HeadlessMenu>
            <motion.button 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart size={16} />
              <span>Cart</span>
              <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">0</span>
            </motion.button>
            <motion.button 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700 transition-colors"
            >
              Book
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-[#0a0a0a]/95 border-t border-[#333333]"
        >
          <div className="px-4 py-6 space-y-4">
            <button className="block w-full text-left text-[#b0b0b0] hover:text-white py-3 font-light tracking-wide">
              Services
            </button>
            <button className="block w-full text-left text-[#b0b0b0] hover:text-white py-3 font-light tracking-wide">
              About
            </button>
            <button className="block w-full text-left text-[#b0b0b0] hover:text-white py-3 font-light tracking-wide">
              Blog
            </button>
            <button className="block w-full text-left text-[#b0b0b0] hover:text-white py-3 font-light tracking-wide">
              Support
            </button>
            <button className="bg-blue-600 text-white w-full px-4 py-3 rounded flex items-center justify-center space-x-2">
              <ShoppingCart size={16} />
              <span>Cart (0)</span>
            </button>
            <button className="bg-amber-600 text-white w-full px-6 py-3 rounded">
              Book
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
} 