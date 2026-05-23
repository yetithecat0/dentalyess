"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { CONTACT } from "@/lib/constants";

const SERVICES_OPTIONS = [
  "Blanqueamiento dental",
  "Carillas de cerámica",
  "Carillas de resina",
  "Diseño de sonrisa",
  "Ortodoncia",
  "Restauraciones",
  "Endodoncia",
  "Prótesis",
  "Consulta general",
];

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    mensaje: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ nombre: "", telefono: "", email: "", servicio: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contacto" className="py-24 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-morado tracking-widest uppercase bg-lavanda px-3 py-1.5 rounded-full mb-4">
            Contacto
          </span>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gris-oscuro leading-tight">
            Agenda tu cita{" "}
            <span className="text-morado">hoy mismo</span>
          </h2>
          <p className="text-gris-medio mt-4 max-w-xl mx-auto">
            Escríbenos o llámanos. Estamos aquí para responder todas tus consultas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-lavanda/40"
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle className="w-16 h-16 text-verde-menta mb-4" />
                <h3 className="font-poppins font-bold text-xl text-gris-oscuro mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gris-medio text-sm">
                  La Dra. Yessenia se pondrá en contacto contigo a la brevedad.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-morado text-sm font-semibold underline"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-poppins font-semibold text-lg text-gris-oscuro mb-2">
                  Formulario de contacto
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-xs font-semibold text-gris-oscuro mb-1.5 uppercase tracking-wide">
                      Nombre completo *
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full border border-lavanda/60 bg-crema rounded-xl px-4 py-3 text-sm text-gris-oscuro placeholder:text-gris-medio/60 focus:outline-none focus:ring-2 focus:ring-morado/30 focus:border-morado transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-semibold text-gris-oscuro mb-1.5 uppercase tracking-wide">
                      Teléfono *
                    </label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      required
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+51 9XX XXX XXX"
                      className="w-full border border-lavanda/60 bg-crema rounded-xl px-4 py-3 text-sm text-gris-oscuro placeholder:text-gris-medio/60 focus:outline-none focus:ring-2 focus:ring-morado/30 focus:border-morado transition"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gris-oscuro mb-1.5 uppercase tracking-wide">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="correo@ejemplo.com"
                    className="w-full border border-lavanda/60 bg-crema rounded-xl px-4 py-3 text-sm text-gris-oscuro placeholder:text-gris-medio/60 focus:outline-none focus:ring-2 focus:ring-morado/30 focus:border-morado transition"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block text-xs font-semibold text-gris-oscuro mb-1.5 uppercase tracking-wide">
                    Servicio de interés
                  </label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={form.servicio}
                    onChange={handleChange}
                    className="w-full border border-lavanda/60 bg-crema rounded-xl px-4 py-3 text-sm text-gris-oscuro focus:outline-none focus:ring-2 focus:ring-morado/30 focus:border-morado transition"
                  >
                    <option value="">Selecciona un servicio...</option>
                    {SERVICES_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-xs font-semibold text-gris-oscuro mb-1.5 uppercase tracking-wide">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    className="w-full border border-lavanda/60 bg-crema rounded-xl px-4 py-3 text-sm text-gris-oscuro placeholder:text-gris-medio/60 focus:outline-none focus:ring-2 focus:ring-morado/30 focus:border-morado transition resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    Hubo un error al enviar. Por favor intenta de nuevo o contáctanos por WhatsApp.
                  </p>
                )}

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 bg-morado hover:bg-morado-light text-white font-semibold text-sm py-4 rounded-xl shadow hover:shadow-md transition-all disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info + Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: MapPin,
                  title: "Dirección",
                  value: CONTACT.address,
                  color: "text-morado",
                  bg: "bg-lavanda",
                },
                {
                  icon: Clock,
                  title: "Horario",
                  value: CONTACT.hours,
                  sub: CONTACT.modality,
                  color: "text-verde-menta",
                  bg: "bg-verde-menta/10",
                },
                {
                  icon: Phone,
                  title: "Teléfono",
                  value: CONTACT.phone,
                  color: "text-amarillo",
                  bg: "bg-amarillo/10",
                },
                {
                  icon: Mail,
                  title: "WhatsApp",
                  value: "Escríbenos directo",
                  color: "text-morado-light",
                  bg: "bg-morado/10",
                },
              ].map(({ icon: Icon, title, value, sub, color, bg }) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-lavanda/40 flex gap-3 items-start"
                >
                  <div className={`w-9 h-9 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${color}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gris-oscuro uppercase tracking-wide mb-0.5">{title}</p>
                    <p className="text-gris-medio text-sm leading-snug">{value}</p>
                    {sub && <p className="text-gris-medio text-xs mt-0.5">{sub}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-lavanda/40 flex-1 min-h-[220px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.4!2d-75.7281!3d-14.0755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCalle+Lima+567%2C+Ica%2C+Peru!5e0!3m2!1ses!2spe!4v1!5m2!1ses!2spe"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "220px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Dental Yess - Calle Lima 567, Ica, Perú"
              />
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-center gap-3 bg-verde-menta text-white font-semibold text-sm py-4 rounded-2xl shadow hover:shadow-md transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escribir por WhatsApp ahora
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
