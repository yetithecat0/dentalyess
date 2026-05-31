"use client";

import { CONTACT } from "@/lib/constants";
import { Phone, MapPin, Clock, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gris-oscuro text-white/90 pt-16 pb-8 border-t border-gris-oscuro/50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-lavanda overflow-hidden bg-white shadow-sm">
                <img 
                  src="/diente.jpg" 
                  alt="Dental Yess" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <span className="block font-poppins font-bold text-sm text-white tracking-wide">
                  DENTAL YESS
                </span>
                <span className="block text-[8px] font-medium tracking-[0.16em] text-lavanda/85">
                  CENTRO ODONTOLÓGICO
                </span>
              </div>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-xs mt-2">
              Diseñamos y devolvemos sonrisas. Brindamos servicios especializados con un toque humano y consciente.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors p-1.5 bg-white/5 rounded-full hover:bg-white/10"
                aria-label="Instagram"
              >
                {/* Instagram icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors p-1.5 bg-white/5 rounded-full hover:bg-white/10"
                aria-label="Facebook"
              >
                {/* Facebook icon */}
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h5 className="font-poppins font-bold text-xs uppercase tracking-wider mb-4 text-white">
              Servicios
            </h5>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Blanqueamiento Dental
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Diseño de Sonrisa
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Ortodoncia
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Carillas Dentales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Endodoncia
                </a>
              </li>
            </ul>
          </div>

          {/* Programs Column */}
          <div>
            <h5 className="font-poppins font-bold text-xs uppercase tracking-wider mb-4 text-white">
              Programas
            </h5>
            <ul className="space-y-2.5 text-xs text-white/60">
              <li>
                <a href="#programas" className="hover:text-white transition-colors">
                  Odontología Infantil
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-white transition-colors">
                  Adultos Mayores
                </a>
              </li>
              <li>
                <a href="#programas" className="hover:text-white transition-colors">
                  Campañas Educativas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-3 text-xs text-white/60">
            <h5 className="font-poppins font-bold text-xs uppercase tracking-wider mb-2 text-white">
              Contacto
            </h5>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-lavanda flex-shrink-0 mt-0.5" />
              <a href={`tel:${CONTACT.phone}`} className="hover:text-white transition-colors">
                {CONTACT.phone}
              </a>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-lavanda flex-shrink-0 mt-0.5" />
              <span>{CONTACT.address}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-lavanda flex-shrink-0 mt-0.5" />
              <span>{CONTACT.hours}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <Calendar className="w-4 h-4 text-lavanda flex-shrink-0 mt-0.5" />
              <span>{CONTACT.modality}</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-[11px] text-white/40">
            © {new Date().getFullYear()} Dental Yess — Centro Odontológico. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-white/40">
            <span className="w-2 h-2 bg-verde-menta rounded-full animate-pulse inline-block" />
            <span>Ica, Perú</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
