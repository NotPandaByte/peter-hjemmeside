"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone, Mail, MapPin } from "lucide-react";
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
            {/* Subtle animated elements */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8b8b8b]/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-[#8b8b8b]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-light mb-8 leading-tight tracking-tight"
          >
            BEYOND
            <br />
            <span className="text-[#8b8b8b]">EXPECTATION</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="text-xl sm:text-2xl text-[#b0b0b0] mb-12 max-w-3xl mx-auto font-light tracking-wide"
          >
            Transform your 4x4 into the ultimate adventure machine. 
            Where others see limits, we see possibilities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="btn-primary px-12 py-4 text-lg font-light tracking-widest">
              EXPLORE BUILDS
            </button>
            <button className="btn-secondary px-12 py-4 text-lg font-light tracking-widest">
              CONTACT US
            </button>
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
            className="text-[#8b8b8b]"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Capability Section - One Focus: Roof Tents */}
      <section id="capability" className="py-32 bg-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right" data-aos-duration="1200">
              <h2 className="text-5xl sm:text-6xl font-light mb-8 tracking-tight">
                SLEEP
                <br />
                <span className="text-[#8b8b8b]">ANYWHERE</span>
              </h2>
              <p className="text-xl text-[#b0b0b0] mb-8 font-light leading-relaxed">
                Transform your 4x4 into a mobile sanctuary. Our premium roof tent systems 
                turn any location into your personal campsite, with luxury amenities that 
                rival boutique hotels.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Premium Materials</h3>
                    <p className="text-[#b0b0b0] font-light">Aerospace-grade aluminum and weather-resistant fabrics</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Instant Setup</h3>
                    <p className="text-[#b0b0b0] font-light">Deploy in under 60 seconds, anywhere, anytime</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Danish Approved</h3>
                    <p className="text-[#b0b0b0] font-light">Compliant with all local regulations and safety standards</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1200" className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg border border-[#333333] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏕️</div>
                    <p className="text-[#666666] font-light">ROOF TENT SYSTEM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adventure Section - One Focus: Lift Kits */}
      <section id="adventure" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right" data-aos-duration="1200" className="lg:order-2">
              <h2 className="text-5xl sm:text-6xl font-light mb-8 tracking-tight">
                CONQUER
                <br />
                <span className="text-[#8b8b8b]">ANY TERRAIN</span>
              </h2>
              <p className="text-xl text-[#b0b0b0] mb-8 font-light leading-relaxed">
                Elevate your vehicle's capabilities with precision-engineered lift kits. 
                From Denmark's coastal dunes to mountain trails, your 4x4 will handle 
                terrain that others can only dream of.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Enhanced Clearance</h3>
                    <p className="text-[#b0b0b0] font-light">Up to 4 inches of additional ground clearance</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Performance Tuned</h3>
                    <p className="text-[#b0b0b0] font-light">Optimized suspension for both on and off-road handling</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Warranty Protected</h3>
                    <p className="text-[#b0b0b0] font-light">Full warranty coverage with professional installation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1200" className="lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg border border-[#333333] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">⬆️</div>
                    <p className="text-[#666666] font-light">LIFT KIT SYSTEM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Section - One Focus: Custom Builds */}
      <section id="precision" className="py-32 bg-[#1a1a1a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right" data-aos-duration="1200">
              <h2 className="text-5xl sm:text-6xl font-light mb-8 tracking-tight">
                BESPOKE
                <br />
                <span className="text-[#8b8b8b]">ENGINEERING</span>
              </h2>
              <p className="text-xl text-[#b0b0b0] mb-8 font-light leading-relaxed">
                Every build is a masterpiece of precision engineering. From concept to 
                completion, we craft your 4x4 to your exact specifications, ensuring 
                every detail meets our uncompromising standards.
              </p>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Custom Design</h3>
                    <p className="text-[#b0b0b0] font-light">Tailored solutions for your specific needs and preferences</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Expert Craftsmanship</h3>
                    <p className="text-[#b0b0b0] font-light">Master technicians with decades of 4x4 experience</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-8 bg-[#8b8b8b] mr-6"></div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Quality Assurance</h3>
                    <p className="text-[#b0b0b0] font-light">Rigorous testing and quality control at every stage</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div data-aos="fade-left" data-aos-duration="1200" className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-lg border border-[#333333] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🔧</div>
                    <p className="text-[#666666] font-light">CUSTOM BUILD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" data-aos-duration="1200" className="text-center mb-20">
            <h2 className="text-5xl sm:text-6xl font-light mb-8 tracking-tight">
              START YOUR
              <br />
              <span className="text-[#8b8b8b]">JOURNEY</span>
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto font-light leading-relaxed">
              Ready to transform your 4x4 into something extraordinary? 
              Let's discuss your vision and bring it to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div data-aos="fade-right" data-aos-duration="1200">
              <h3 className="text-3xl font-light mb-8 text-white">
                GET IN TOUCH
              </h3>
              <div className="space-y-8">
                <div className="flex items-center">
                  <Phone className="text-[#8b8b8b] mr-6" size={24} />
                  <div>
                    <p className="font-medium text-white mb-1">Phone</p>
                    <p className="text-[#b0b0b0] font-light">+45 12 34 56 78</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-[#8b8b8b] mr-6" size={24} />
                  <div>
                    <p className="font-medium text-white mb-1">Email</p>
                    <p className="text-[#b0b0b0] font-light">info@4x4denmark.dk</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-[#8b8b8b] mr-6" size={24} />
                  <div>
                    <p className="font-medium text-white mb-1">Workshop</p>
                    <p className="text-[#b0b0b0] font-light">Copenhagen, Denmark</p>
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-duration="1200" className="bg-[#1a1a1a] p-8 rounded-lg border border-[#333333]">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#444444] rounded-none focus:border-[#8b8b8b] focus:outline-none transition-colors text-white placeholder-[#666666] font-light"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#444444] rounded-none focus:border-[#8b8b8b] focus:outline-none transition-colors text-white placeholder-[#666666] font-light"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your dream build..."
                    rows={4}
                    className="w-full px-4 py-4 bg-[#2a2a2a] border border-[#444444] rounded-none focus:border-[#8b8b8b] focus:outline-none transition-colors resize-none text-white placeholder-[#666666] font-light"
                  ></textarea>
                </div>
                <button className="btn-primary w-full px-8 py-4 text-lg font-light tracking-widest">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}
