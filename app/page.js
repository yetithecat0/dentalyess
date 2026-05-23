import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import ProgramaInfantil from "@/components/sections/ProgramaInfantil";
import ProgramaMayores from "@/components/sections/ProgramaMayores";
import CampanasSalud from "@/components/sections/CampanasSalud";
import PorQueElegirnos from "@/components/sections/PorQueElegirnos";
import Galeria from "@/components/sections/Galeria";
import Testimonios from "@/components/sections/Testimonios";
import Contacto from "@/components/sections/Contacto";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <ProgramaInfantil />
        <ProgramaMayores />
        <CampanasSalud />
        <PorQueElegirnos />
        <Galeria />
        <Testimonios />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
