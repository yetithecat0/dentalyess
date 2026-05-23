"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Heart } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BADGES = [
  { icon: Heart, label: "Atención empática" },
  { icon: Leaf, label: "Ambiente natural" },
  { icon: ShieldCheck, label: "Profesional certificada" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual lado izquierdo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-lavanda to-morado/10 rounded-3xl p-8 shadow-md">
              {/* Avatar doctora */}
              <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-morado to-morado-light flex items-center justify-center shadow-lg mb-6">
                <svg viewBox="0 0 24 24" fill="white" className="w-24 h-24 opacity-80">
                  <path d="M12 2C9.5 2 7.5 3.5 6.5 5.5C5.5 4.5 4 4 3 5C1.5 6.5 2 9 3 10.5C2 12 2 14 3.5 15.5C4.5 18 6 21 8 22C9 22.5 10 21.5 10.5 20.5L11 19C11.3 18.2 11.7 18 12 18C12.3 18 12.7 18.2 13 19L13.5 20.5C14 21.5 15 22.5 16 22C18 21 19.5 18 20.5 15.5C22 14 22 12 21 10.5C22 9 22.5 6.5 21 5C20 4 18.5 4.5 17.5 5.5C16.5 3.5 14.5 2 12 2Z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-poppins font-bold text-xl text-morado">Dra. Yessenia Calsin Silva</h3>
                <p className="text-gris-medio text-sm mt-1">Cirujano Dentista · COP Reg.</p>
              </div>

              {/* Card flotante */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg border border-lavanda">
                <p className="text-morado font-poppins font-bold text-2xl">8+</p>
                <p className="text-gris-medio text-xs">Años de<br />experiencia</p>
              </div>
              <div className="absolute -top-6 -left-6 bg-amarillo rounded-2xl p-3 shadow-lg">
                <p className="text-white font-poppins font-bold text-lg">500+</p>
                <p className="text-white/90 text-xs">Pacientes<br />felices</p>
              </div>
            </div>
          </motion.div>

          {/* Texto lado derecho */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-semibold text-morado tracking-widest uppercase bg-lavanda px-3 py-1.5 rounded-full mb-4">
              Sobre nosotros
            </span>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gris-oscuro leading-tight mb-6">
              Cuidamos tu sonrisa con{" "}
              <span className="text-morado">pasión y dedicación</span>
            </h2>
            <p className="text-gris-medio leading-relaxed mb-4">
              En Dental Yess creemos que una sonrisa saludable transforma vidas. La Dra. Yessenia Calsin Silva
              lidera un espacio odontológico moderno, cálido y diseñado pensando en tu bienestar y comodidad.
            </p>
            <p className="text-gris-medio leading-relaxed mb-8">
              Nuestro consultorio en el corazón de Ica ofrece atención personalizada para toda la familia, 
              integrando las últimas técnicas y materiales de primer nivel con un trato cercano y empático.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 bg-crema border border-lavanda text-gris-oscuro text-sm font-medium px-4 py-2 rounded-full"
                >
                  <Icon className="w-4 h-4 text-morado" />
                  {label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
