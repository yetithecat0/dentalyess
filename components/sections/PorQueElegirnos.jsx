"use client";

import { motion } from "framer-motion";
import { WHY_US } from "@/lib/data";

export default function PorQueElegirnos() {
  return (
    <section className="py-24 bg-gradient-to-br from-morado via-morado-light to-morado">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4 border border-white/30">
            ¿Por qué elegirnos?
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white leading-tight">
            Razones para confiar en{" "}
            <span className="text-amarillo">Dental Yess</span>
          </h2>
          <p className="text-white/80 mt-4 max-w-xl mx-auto">
            Nos diferenciamos por nuestra dedicación al bienestar de cada paciente y la calidad de nuestros tratamientos.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {WHY_US.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-white/75 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
