"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonios() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-morado tracking-widest uppercase bg-lavanda px-3 py-1.5 rounded-full mb-4">
            Testimonios
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gris-oscuro leading-tight">
            Lo que dicen{" "}
            <span className="text-morado">nuestros pacientes</span>
          </h2>
          <p className="text-gris-medio mt-4 max-w-xl mx-auto">
            La satisfacción de nuestros pacientes es nuestra mayor recompensa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="bg-crema border border-lavanda/50 rounded-2xl p-7 hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, s) => (
                  <span key={s} className="text-amarillo text-lg">★</span>
                ))}
              </div>

              {/* Texto */}
              <p className="text-gris-medio text-sm leading-relaxed italic flex-1 mb-6">
                "{t.text}"
              </p>

              {/* Paciente */}
              <div className="flex items-center gap-3 pt-4 border-t border-lavanda/50">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-morado to-morado-light flex items-center justify-center flex-shrink-0">
                  <span className="font-poppins font-bold text-white text-xs">
                    {t.avatarInitials}
                  </span>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-gris-oscuro text-sm">{t.name}</p>
                  <p className="text-morado text-xs">{t.treatment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
