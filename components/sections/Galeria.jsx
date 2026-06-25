"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { GALLERY } from "@/lib/data";
import { ImageIcon } from "lucide-react";
import Script from "next/script";
import { CONTACT } from "@/lib/constants";

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function GalleryItem({ item, index }) {
  const [hasError, setHasError] = useState(false);
  const showImage = item.image && !hasError;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 aspect-square border border-lavanda/40"
    >
      {showImage ? (
        <img
          src={item.image}
          alt={item.title}
          onError={() => setHasError(true)}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-lavanda to-morado/20 flex flex-col items-center justify-center p-4">
          <ImageIcon className="w-10 h-10 text-morado/40 mb-3" />
          <p className="font-poppins font-semibold text-sm text-gris-oscuro text-center">
            {item.title}
          </p>
          <span className="mt-1.5 text-xs bg-morado/10 text-morado px-3 py-1 rounded-full">
            {item.subtitle}
          </span>
        </div>
      )}

      {/* Overlay: visible por defecto, se oculta al pasar el cursor */}
      {showImage && (
        <div className="absolute inset-0 bg-morado/70 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
          <div className="text-center text-white p-4">
            <p className="font-poppins font-bold text-base">{item.title}</p>
            <p className="text-white/85 text-xs mt-1">{item.subtitle}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export default function Galeria() {
  const { provider, id } = CONTACT.instagramWidget;

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

        {/* 4 imágenes principales */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {GALLERY.map((item, i) => (
            <GalleryItem key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Sección de Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 border-t border-lavanda/60 pt-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <InstagramIcon className="w-6 h-6 text-morado" />
            <h3 className="font-poppins font-bold text-xl sm:text-2xl text-gris-oscuro">
              Síguenos en Instagram
            </h3>
          </div>
          <p className="text-gris-medio text-sm mb-8 max-w-lg mx-auto">
            Mantente al día con nuestros últimos casos clínicos, consejos de salud bucal y el día a día en nuestra clínica.
          </p>

          {/* Render del Widget */}
          <div className="w-full bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-lavanda/40 min-h-[300px] flex items-center justify-center">
            {provider === "elfsight" && (
              <>
                <div className={`elfsight-app-${id}`} data-elfsight-app-lazy></div>
                <Script src="https://static.elfsight.com/platform/platform.js" async />
              </>
            )}
            {provider === "behold" && (
              <>
                <div data-behold-id={id}></div>
                <Script src="https://beholds.me/sdk/v1" async />
              </>
            )}
          </div>

          <div className="mt-8">
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-morado text-white font-poppins font-semibold text-sm rounded-full shadow-sm hover:bg-morado-oscuro hover:shadow-md transition-all duration-300"
            >
              <InstagramIcon className="w-4 h-4" />
              Ver perfil @dental_yess
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


