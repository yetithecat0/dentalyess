"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Calendar } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Servicios", href: "#servicios" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Programas", href: "#programas" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-lavanda/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 height-10 w-10 h-10 rounded-full border-2 border-morado flex items-center justify-center bg-white shadow-sm">
              <svg viewBox="0 0 24 24" fill="#6B3FA0" className="w-[22px] h-[22px]" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 3 5C1.5 6.5 2 9 3 10.5C2 12 2 14 3.5 15.5C4.5 18 6 21 8 22C9 22.5 10 21.5 10.5 20.5L11 19C11.3 18.2 11.7 18 12 18C12.3 18 12.7 18.2 13 19L13.5 20.5C14 21.5 15 22.5 16 22C18 21 19.5 18 20.5 15.5C22 14 22 12 21 10.5C22 9 22.5 6.5 21 5C20 4 18.5 4.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z"/>
              </svg>
            </div>
            <div className="leading-tight">
              <span className="block font-poppins font-bold text-sm text-morado tracking-wide">
                DENTAL YESS
              </span>
              <span className="block text-[8px] font-sans font-medium tracking-[0.16em] text-morado-light text-opacity-80">
                CENTRO ODONTOLÓGICO
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-gris-oscuro hover:text-morado transition-colors duration-200 uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-morado transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <motion.a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-morado hover:bg-morado-light text-white text-xs font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
            >
              <Calendar className="w-3.5 h-3.5" />
              Agendar cita
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gris-oscuro hover:text-morado p-2 rounded-md transition-colors"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-lavanda/60 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-3 pb-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm font-semibold text-gris-oscuro hover:text-morado transition-colors py-2 border-b border-crema"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <motion.a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full bg-morado text-white text-sm font-semibold py-3 rounded-xl shadow"
                >
                  <Calendar className="w-4 h-4" />
                  Agendar cita
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
