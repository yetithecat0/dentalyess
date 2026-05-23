import {
  Sparkles,
  Sun,
  Gem,
  Palette,
  Smile,
  Activity,
  Scissors,
  Droplet,
  LayoutGrid,
  RefreshCw,
  Heart,
  Leaf,
  ShieldCheck,
  Clock,
  MapPin,
  Users
} from 'lucide-react';

export const SERVICES = [
  {
    category: 'Estética dental',
    icon: Sparkles,
    description: 'Tratamientos orientados a mejorar la apariencia de tus dientes y armonía de tu sonrisa.',
    items: [
      { name: 'Blanqueamiento dental', icon: Sun },
      { name: 'Carillas de cerámica', icon: Gem },
      { name: 'Carillas de resina', icon: Palette },
      { name: 'Diseño de sonrisa', icon: Smile },
    ]
  },
  {
    category: 'Restauración y salud',
    icon: Activity,
    description: 'Procedimientos para recuperar la funcionalidad y salud de tus piezas dentales.',
    items: [
      { name: 'Restauraciones', icon: ShieldCheck },
      { name: 'Endodoncia', icon: Activity },
      { name: 'Extracciones', icon: Scissors },
      { name: 'Claramiento dental', icon: Droplet },
    ]
  },
  {
    category: 'Ortodoncia y prótesis',
    icon: LayoutGrid,
    description: 'Corrección de posición y reemplazo de piezas para una sonrisa completa y alineada.',
    items: [
      { name: 'Ortodoncia', icon: LayoutGrid },
      { name: 'Prótesis fijas', icon: RefreshCw },
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: 'María P.',
    treatment: 'Blanqueamiento dental',
    stars: 5,
    text: 'Excelente atención, la doctora es muy profesional y amable. El consultorio es muy cómodo, limpio y tiene una bonita vibra natural. Totalmente recomendado.',
    avatarInitials: 'MP'
  },
  {
    name: 'Carlos L.',
    treatment: 'Diseño de sonrisa',
    stars: 5,
    text: 'Me realizaron el diseño de sonrisa y quedé encantada con el resultado. La Dra. Yessenia explica todo al detalle con mucha paciencia, dándome total tranquilidad.',
    avatarInitials: 'CL'
  },
  {
    name: 'Rosa S.',
    treatment: 'Paciente familiar',
    stars: 5,
    text: 'Llevo a toda mi familia aquí. Los niños no le tienen miedo al dentista gracias al trato tan amable y lúdico de la doctora. Un consultorio de absoluta confianza.',
    avatarInitials: 'RS'
  }
];

export const WHY_US = [
  {
    title: 'Atención cercana',
    description: 'Trato personalizado, empático y humano en cada una de tus visitas.',
    icon: Heart
  },
  {
    title: 'Ambiente natural',
    description: 'Consultorio moderno diseñado con toques naturales para tu relajación.',
    icon: Leaf
  },
  {
    title: 'Profesional certificada',
    description: 'Cirujano dentista con amplia experiencia y constante capacitación.',
    icon: ShieldCheck
  },
  {
    title: 'Horario flexible',
    description: 'Atención de Lunes a Sábado de 9:00 a.m. a 7:00 p.m. previa cita.',
    icon: Clock
  },
  {
    title: 'Zona céntrica',
    description: 'Ubicados en el corazón de Ica, con vías de acceso rápido y estacionamiento.',
    icon: MapPin
  },
  {
    title: 'Para toda la familia',
    description: 'Tratamientos específicos y adaptados para niños, adultos y mayores.',
    icon: Users
  }
];

export const GALLERY = [
  {
    title: 'Estética Dental',
    subtitle: 'Antes / Después',
    image: '/images/antes-despues/antes_despues_1.jpg'
  },
  {
    title: 'Diseño de Sonrisa',
    subtitle: 'Antes / Después',
    image: '/images/antes-despues/antes_despues_2.jpg'
  },
  {
    title: 'Blanqueamiento',
    subtitle: 'Antes / Después',
    image: '/images/antes-despues/antes_despues_3.jpg'
  },
  {
    title: 'Nuestro Espacio',
    subtitle: 'Consultorio moderno',
    image: '/images/consultorio/consultorio_1.jpg'
  }
];
