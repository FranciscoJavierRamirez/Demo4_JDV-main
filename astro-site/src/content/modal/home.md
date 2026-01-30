---
title: "Agendar Consulta Inicial"
proBonoNotice:
  title: "Evaluación Pro Bono:"
  message: "Por favor describe brevemente tu situación legal. Evaluaremos tu caso y te contactaremos a la brevedad."
fields:
  name:
    label: "Nombre Completo *"
    type: "text"
    required: true
  email:
    label: "Email *"
    type: "email"
    required: true
  phone:
    label: "Teléfono *"
    type: "tel"
    required: true
  area:
    label: "Área de Interés *"
    placeholder: "Selecciona un área"
    options:
      - "Defensa Estatutaria"
      - "Defensa Administrativa"
      - "Cliente Senior"
      - "Legado"
      - "Civil"
      - "Inmobiliaria"
      - "Animalista"
      - "Capacitación"
    required: true
  message:
    label: "Mensaje"
    rows: 4
submitButton: "Enviar Consulta"
---
