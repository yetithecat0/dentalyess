"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-morado via-morado-light to-verde-menta min-h-[92vh] flex items-center"
    >
      {/* Blobs decorativos */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-32 -right-16 w-80 h-80 rounded-full bg-verde-menta/20 blur-3xl"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-lavanda/10 blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Texto */}
          <div>
            <motion.span
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-white/30"
            >
              ✦ Centro Odontológico · Ica, Perú
            </motion.span>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
            >
              Diseñamos y{" "}
              <span className="text-amarillo">devolvemos</span>{" "}
              sonrisas
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-white/85 text-lg leading-relaxed mb-10 max-w-lg font-poppins font-light italic"
            >
              Atención odontológica personalizada con la calidez y profesionalismo que mereces.
              Tu salud bucal es nuestra vocación.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-morado font-semibold text-sm px-7 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Calendar className="w-4 h-4" />
                Agendar mi cita
              </motion.a>
              <motion.a
                href={`tel:${CONTACT.phone}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm border border-white/40 text-white font-semibold text-sm px-7 py-4 rounded-full hover:bg-white/25 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Llamar ahora
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex gap-8 mt-12"
            >
              {[
                { num: "500+", label: "Pacientes atendidos" },
                { num: "8+", label: "Años de experiencia" },
                { num: "98%", label: "Satisfacción" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-poppins font-bold text-2xl text-white">{s.num}</p>
                  <p className="text-white/70 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Visual card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border border-white/30 flex items-center justify-center shadow-2xl relative">
                <img 
                  src="/perfil_dentalyess.jpg" 
                  alt="Dental Yess" 
                  className="w-full h-full object-cover absolute inset-0"
                />
                <div className="absolute inset-0 bg-morado/40 backdrop-blur-[1px] flex flex-col justify-center items-center text-center p-8">
                  <p className="font-poppins font-bold text-white text-xl">Dental Yess</p>
                  <p className="text-white/90 text-xs tracking-widest uppercase mt-1">Centro Odontológico</p>
                  <p className="text-white/85 text-sm mt-4 font-light italic">
                    &quot;Tu sonrisa es nuestra mejor carta de presentación&quot;
                  </p>
                  <div className="mt-4 flex justify-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-amarillo text-sm">★</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-lg">
                <p className="text-morado font-poppins font-bold text-sm">Lun – Sáb</p>
                <p className="text-gris-medio text-xs">9am – 7pm</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-amarillo rounded-2xl px-4 py-2 shadow-lg">
                <p className="text-white font-poppins font-bold text-xs">Previa cita</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
