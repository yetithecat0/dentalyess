import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});

export const metadata = {
  title: 'Dental Yess — Centro Odontológico | Ica, Perú',
  description: 'Diseñamos y devolvemos sonrisas. Cirujano dentista en Ica, Perú. Blanqueamiento, diseño de sonrisa, ortodoncia, carillas y más. Atención previa cita.',
  keywords: 'dentista ica, consultorio dental ica, blanqueamiento dental ica, diseño de sonrisa ica, ortodoncia ica',
  openGraph: {
    title: 'Dental Yess — Centro Odontológico',
    description: 'Diseñamos y devolvemos sonrisas. Ica, Perú.',
    url: 'https://dentalyess.com',
    siteName: 'Dental Yess',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-sans antialiased text-gris-oscuro bg-crema selection:bg-lavanda selection:text-morado">
        {children}
      </body>
    </html>
  );
}
