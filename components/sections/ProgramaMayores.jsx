"use client";

import { motion } from "framer-motion";
import { HeartHandshake, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/constants";

export default function ProgramaMayores() {
  return (
    <section className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-morado/10 to-lavanda border border-morado/20 rounded-3xl p-8 md:p-14 overflow-hidden relative"
        >
          <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-morado/10 blur-3xl" />

          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Visual — lado izquierdo */}
            <div className="flex justify-center order-2 md:order-1">
              <div className="w-56 h-56 rounded-full bg-gradient-to-br from-morado to-morado-light flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <HeartHandshake className="w-16 h-16 text-white mx-auto mb-3" />
                  <p className="font-poppins font-bold text-white text-lg">Mayores</p>
                  <p className="text-white/80 text-xs mt-1">con cuidado especial</p>
                </div>
              </div>
            </div>

            {/* Texto — lado derecho */}
            <div className="order-1 md:order-2">
              <span className="inline-block bg-morado text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                ♦ Programa Mayores
              </span>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gris-oscuro leading-tight mb-5">
                Atención especializada{" "}
                <span className="text-morado">para adultos mayores</span>
              </h2>
              <p className="text-gris-medio leading-relaxed mb-6">
                Entendemos las necesidades únicas de nuestros pacientes mayores. Ofrecemos un entorno 
                accesible, cómodo y con el tiempo necesario para brindar la mejor atención posible.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Prótesis removibles y fijas",
                  "Tratamiento de encías y periodontitis",
                  "Atención con paciencia y dedicación",
                  "Presupuestos adaptados",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gris-oscuro">
                    <CheckCircle2 className="w-5 h-5 text-morado flex-shrink-0" />
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
                className="inline-flex items-center gap-2 bg-morado text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow hover:shadow-md transition-all"
              >
                <HeartHandshake className="w-4 h-4" />
                Consultar disponibilidad
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
