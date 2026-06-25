"use client";

import { motion } from "framer-motion";
import { Leaf, Users, BookOpen } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function CampanasSalud() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-verde-menta/10 to-verde-salvia/10 border border-verde-menta/30 rounded-3xl p-8 md:p-14 overflow-hidden relative"
        >
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-verde-menta/15 blur-3xl" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Texto */}
            <div>
              <span className="inline-block bg-verde-menta text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                ✦ Responsabilidad Social
              </span>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gris-oscuro leading-tight mb-5">
                Campañas de salud{" "}
                <span className="text-verde-menta">para la comunidad</span>
              </h2>
              <p className="text-gris-medio leading-relaxed mb-8">
                En Dental Yess creemos en retribuir a la comunidad. Participamos activamente en 
                campañas preventivas, jornadas de salud bucal gratuitas y educación en colegios de Ica.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Users, label: "Comunidad primero" },
                  { icon: Leaf, label: "Prevención activa" },
                  { icon: BookOpen, label: "Educación bucal" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="text-center bg-white/70 rounded-2xl p-4 shadow-sm">
                    <Icon className="w-7 h-7 text-verde-menta mx-auto mb-2" />
                    <p className="text-xs text-gris-oscuro font-medium leading-tight">{label}</p>
                  </div>
                ))}
              </div>

              <motion.a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-verde-menta text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow hover:shadow-md transition-all"
              >
                <Leaf className="w-4 h-4" />
                Más información
              </motion.a>
            </div>

            {/* Visual */}
            <div className="flex justify-center w-full">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-md aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-verde-menta/20 bg-white relative group"
              >
                <img 
                  src="/campañas.jpeg" 
                  alt="Campañas de salud comunitaria Dental Yess" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="font-poppins font-bold text-white text-lg">Dental Yess en la Comunidad</p>
                    <p className="text-white/80 text-xs mt-1">Llevando sonrisas y salud a todos los rincones de Ica</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
