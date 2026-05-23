"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-morado tracking-widest uppercase bg-lavanda px-3 py-1.5 rounded-full mb-4">
            Nuestros servicios
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gris-oscuro leading-tight">
            Tratamientos para cada{" "}
            <span className="text-morado">necesidad dental</span>
          </h2>
          <p className="text-gris-medio mt-4 max-w-xl mx-auto">
            Ofrecemos soluciones integrales para restaurar, embellecer y mantener tu salud bucal.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-lavanda/40"
              >
                <div className="w-12 h-12 bg-lavanda rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-morado" />
                </div>
                <h3 className="font-poppins font-semibold text-lg text-gris-oscuro mb-2">
                  {service.category}
                </h3>
                <p className="text-gris-medio text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.items.map(({ name, icon: ItemIcon }) => (
                    <li key={name} className="flex items-center gap-2 text-sm text-gris-oscuro">
                      <span className="w-5 h-5 bg-morado/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <ItemIcon className="w-3 h-3 text-morado" />
                      </span>
                      {name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
