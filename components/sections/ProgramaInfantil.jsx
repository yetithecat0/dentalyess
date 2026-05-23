"use client";

import { motion } from "framer-motion";
import { Star, Smile, Shield } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function ProgramaInfantil() {
  return (
    <section id="programas" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-amarillo/10 to-amarillo/5 border border-amarillo/30 rounded-3xl p-8 md:p-14 overflow-hidden relative"
        >
          {/* Blob deco */}
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-amarillo/15 blur-3xl" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Texto */}
            <div>
              <span className="inline-block bg-amarillo text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                ★ Programa Infantil
              </span>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gris-oscuro leading-tight mb-5">
                Odontología especial{" "}
                <span className="text-amarillo">para los más pequeños</span>
              </h2>
              <p className="text-gris-medio leading-relaxed mb-6">
                Creamos un ambiente lúdico y amigable para que los niños vivan la visita al dentista 
                como una experiencia positiva desde el principio. Revisiones, sellantes, flúor y más.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Revisiones periódicas y preventivas",
                  "Sellantes de fosas y fisuras",
                  "Aplicación de flúor profesional",
                  "Educación en higiene bucal",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gris-oscuro">
                    <span className="w-5 h-5 rounded-full bg-amarillo flex items-center justify-center flex-shrink-0">
                      <Star className="w-3 h-3 text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <motion.a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-amarillo text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow hover:shadow-md transition-all"
              >
                <Smile className="w-4 h-4" />
                Reservar cita para mi hijo/a
              </motion.a>
            </div>

            {/* Visual */}
            <div className="flex justify-center">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-amarillo to-amarillo/70 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <Smile className="w-16 h-16 text-white mx-auto mb-3" />
                  <p className="font-poppins font-bold text-white text-lg">Niños felices</p>
                  <p className="text-white/80 text-xs mt-1">sin miedo al dentista</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
