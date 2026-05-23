"use client";

import { motion } from "framer-motion";
import { GALLERY } from "@/lib/data";
import { ImageIcon } from "lucide-react";

export default function Galeria() {
  return (
    <section id="galeria" className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-morado tracking-widest uppercase bg-lavanda px-3 py-1.5 rounded-full mb-4">
            Galería de resultados
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gris-oscuro leading-tight">
            Transformaciones que{" "}
            <span className="text-morado">hablan por sí solas</span>
          </h2>
          <p className="text-gris-medio mt-4 max-w-xl mx-auto">
            Cada sonrisa es un caso único. Conoce algunos de nuestros resultados antes y después.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {GALLERY.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 aspect-square border border-lavanda/40"
            >
              {/* Placeholder visual */}
              <div className="w-full h-full bg-gradient-to-br from-lavanda to-morado/20 flex flex-col items-center justify-center p-4">
                <ImageIcon className="w-10 h-10 text-morado/40 mb-3" />
                <p className="font-poppins font-semibold text-sm text-gris-oscuro text-center">
                  {item.title}
                </p>
                <span className="mt-1.5 text-xs bg-morado/10 text-morado px-3 py-1 rounded-full">
                  {item.subtitle}
                </span>
              </div>

              {/* Overlay hover */}
              <div className="absolute inset-0 bg-morado/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                <div className="text-center text-white p-4">
                  <p className="font-poppins font-bold text-base">{item.title}</p>
                  <p className="text-white/80 text-xs mt-1">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-gris-medio text-sm mt-8 italic"
        >
          📷 Las imágenes reales de resultados se agregarán próximamente
        </motion.p>
      </div>
    </section>
  );
}
