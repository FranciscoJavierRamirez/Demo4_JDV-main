/**
 * Configuración global de CTAs para JDV Abogados
 * Centraliza todos los enlaces de contacto
 */

export const ctaLinks = {
  whatsapp: {
    url: "https://wa.me/56941692900?text=Consulta%20desde%20el%20blog%20de%20JDV%20Abogados",
    label: "WhatsApp"
  },
  calendly: {
    url: "https://wa.me/56941692900?text=Quisiera%20agendar%20una%20consulta%20con%20JDV%20Abogados",
    label: "Agendar Consulta"
  },
  newsletter: {
    url: "#newsletter",
    label: "Suscribirse"
  },
  email: "contacto@jdvabogados.cl"
};

export const ctaContent = {
  inicio: {
    titulo: "¿Necesita orientación sobre este tema?",
    texto: "Nuestro equipo puede evaluar su situación particular.",
    showNewsletter: false
  },
  medio: {
    titulo: "35 años de experiencia en Contraloría",
    texto: "Conocemos el sistema desde adentro. Consulta confidencial.",
    showNewsletter: false
  },
  final: {
    titulo: "¿Enfrenta una situación similar?",
    texto: "Podemos orientarle sobre sus opciones legales.",
    showNewsletter: true
  }
};
