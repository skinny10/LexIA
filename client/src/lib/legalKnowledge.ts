export interface LegalAnswer {
  question: string;
  answer: string;
  lawReference: string;
  steps: string[];
  locations?: {
    name: string;
    address: string;
    phone?: string;
    hours?: string;
    mapLink?: string;
  }[];
}

export const LEGAL_KNOWLEDGE: LegalAnswer[] = [
  {
    question: "¿Qué pasa si me detienen por manejar en estado de ebriedad?",
    answer: "Si te detienen por conducir bajo los efectos del alcohol, puedes ser arrestado administrativamente por 20 a 36 horas, pagar una multa considerable (que varía según el estado, generalmente entre 80 y 100 días de salario mínimo), y tu vehículo puede ser enviado al corralón. Además, tu licencia puede ser suspendida temporalmente.",
    lawReference: "Reglamentos de Tránsito Estatales y Ley General de Salud (Artículo 421).",
    steps: [
      "Si eres detenido, no te resistas y coopera con la autoridad.",
      "Tienes derecho a solicitar el alcoholímetro para verificar tu estado.",
      "Paga la multa correspondiente para recuperar tu vehículo.",
      "Si consideras que la detención fue injusta, presenta una queja ante la Comisión de Derechos Humanos o solicita asesoría legal."
    ],
    locations: [
      {
        name: "Secretaría de Movilidad y Transporte - Tuxtla Gutiérrez",
        address: "Blvd. Belisario Domínguez 1641, Col. Xamaipak, Tuxtla Gutiérrez, Chiapas",
        phone: "961 617 9800",
        hours: "Lunes a Viernes 9:00 AM - 5:00 PM",
        mapLink: "https://maps.google.com/?q=Secretaría+de+Movilidad+Tuxtla+Gutiérrez"
      },
      {
        name: "Comisión Estatal de Derechos Humanos Chiapas",
        address: "1a. Poniente Sur 154, Col. Centro, Tuxtla Gutiérrez, Chiapas",
        phone: "961 602 8990",
        hours: "Lunes a Viernes 8:00 AM - 4:00 PM",
        mapLink: "https://maps.google.com/?q=CEDH+Chiapas+Tuxtla"
      }
    ]
  },
  {
    question: "¿Cuáles son mis derechos si me multan por exceso de velocidad?",
    answer: "Si te multan por exceso de velocidad, tienes derecho a recibir una boleta con los detalles de la infracción, incluyendo el lugar, hora, velocidad registrada y el fundamento legal. Puedes solicitar evidencias (fotos o video del radar) y, si consideras que la multa es injusta, impugnarla ante la autoridad correspondiente.",
    lawReference: "Reglamentos de Tránsito Estatales y el Código de Procedimientos Administrativos de cada entidad.",
    steps: [
      "Solicita la boleta de infracción completa con todos los datos.",
      "Verifica si el radar estaba calibrado y si el oficial estaba autorizado.",
      "Si deseas impugnar, presenta un recurso de inconformidad ante la autoridad de tránsito dentro del plazo establecido (generalmente 15 días hábiles).",
      "Reúne evidencias (fotos, testigos, documentos) para tu defensa."
    ],
    locations: [
      {
        name: "Dirección de Tránsito Municipal - Tuxtla Gutiérrez",
        address: "11a. Sur Poniente 1050, Col. Centro, Tuxtla Gutiérrez, Chiapas",
        phone: "961 602 0900 ext. 6400",
        hours: "Lunes a Viernes 8:00 AM - 3:00 PM",
        mapLink: "https://maps.google.com/?q=Dirección+Tránsito+Tuxtla+Gutiérrez"
      },
      {
        name: "Módulo de Atención Ciudadana - Plaza Bonampak",
        address: "Blvd. Belisario Domínguez 302, Plaza Bonampak, Tuxtla Gutiérrez",
        phone: "961 125 4100",
        hours: "Lunes a Sábado 9:00 AM - 7:00 PM",
        mapLink: "https://maps.google.com/?q=Plaza+Bonampak+Tuxtla"
      }
    ]
  },
  {
    question: "¿Qué hago si choco y el otro conductor no tiene seguro?",
    answer: "Si el otro conductor no tiene seguro, debes levantar un reporte de accidente con las autoridades de tránsito. Toma fotos del lugar, intercambia información con el conductor (nombre, placas, identificación) y busca testigos. Puedes iniciar un proceso legal para reclamar daños y perjuicios, aunque puede ser más complejo sin seguro de por medio.",
    lawReference: "Reglamentos de Tránsito Estatales y Código Civil en materia de responsabilidad civil.",
    steps: [
      "Llama a las autoridades de tránsito para que levanten un reporte oficial del accidente.",
      "Toma fotos de los vehículos, daños y el lugar del accidente.",
      "Intercambia información con el otro conductor (datos personales, placas, contacto).",
      "Si hay lesionados, llama a una ambulancia de inmediato.",
      "Consulta con un abogado para iniciar una demanda civil si es necesario."
    ],
    locations: [
      {
        name: "Centro de Justicia Cívica - Tuxtla Gutiérrez",
        address: "1a. Norte Poniente 1450, Col. Centro, Tuxtla Gutiérrez, Chiapas",
        phone: "961 688 5800",
        hours: "Lunes a Viernes 9:00 AM - 5:00 PM",
        mapLink: "https://maps.google.com/?q=Centro+Justicia+Cívica+Tuxtla"
      },
      {
        name: "Ministerio Público - Agencia del MP en Tránsito",
        address: "Libramiento Norte Poniente s/n, Col. Plan de Ayala, Tuxtla Gutiérrez",
        phone: "961 617 9600",
        hours: "24 horas (Emergencias)",
        mapLink: "https://maps.google.com/?q=Ministerio+Publico+Transito+Tuxtla"
      },
      {
        name: "Cruz Roja Mexicana - Delegación Tuxtla Gutiérrez",
        address: "5a. Poniente Norte 1480, Col. Centro, Tuxtla Gutiérrez",
        phone: "961 612 1313",
        hours: "Emergencias 24 horas",
        mapLink: "https://maps.google.com/?q=Cruz+Roja+Tuxtla+Gutiérrez"
      }
    ]
  },
  {
    question: "¿Puedo recuperar mi auto del corralón sin pagar la multa?",
    answer: "No, generalmente debes pagar la multa correspondiente y los gastos de arrastre y almacenaje (estadía) para recuperar tu vehículo del corralón. Sin embargo, algunas entidades ofrecen descuentos si pagas dentro de cierto plazo (pago inmediato) o facilidades de pago en casos de multas altas.",
    lawReference: "Reglamentos de Tránsito Estatales y Leyes de Ingresos de cada entidad federativa.",
    steps: [
      "Acude a la oficina de tránsito correspondiente con tu identificación y documentos del vehículo.",
      "Paga la multa y los costos de grúa y estadía.",
      "Presenta el comprobante de pago en el corralón para liberar tu vehículo.",
      "Si no puedes pagar de inmediato, pregunta por opciones de descuento o facilidades de pago."
    ],
    locations: [
      {
        name: "Corralón Municipal - Tuxtla Gutiérrez",
        address: "Libramiento Norte Poniente Km 3.5, Col. Terán, Tuxtla Gutiérrez",
        phone: "961 602 0900 ext. 6450",
        hours: "Lunes a Viernes 8:00 AM - 4:00 PM",
        mapLink: "https://maps.google.com/?q=Corralón+Municipal+Tuxtla"
      },
      {
        name: "Caja de Atención - Dirección de Tránsito",
        address: "11a. Sur Poniente 1050, Col. Centro, Tuxtla Gutiérrez",
        phone: "961 602 0900 ext. 6400",
        hours: "Lunes a Viernes 8:00 AM - 3:00 PM",
        mapLink: "https://maps.google.com/?q=Caja+Transito+Tuxtla"
      }
    ]
  },
  {
    question: "¿Qué hago si me chocan y se dan a la fuga?",
    answer: "Si te chocan y el conductor se da a la fuga, debes reportar el incidente de inmediato a las autoridades de tránsito y obtener un reporte oficial. Si tienes seguro, contacta a tu aseguradora para iniciar el proceso de indemnización. También puedes presentar una denuncia penal ante el Ministerio Público por el delito de abandono del lugar del accidente.",
    lawReference: "Código Penal Federal o Estatal (delito de abandono del lugar del accidente) y Reglamentos de Tránsito.",
    steps: [
      "Llama de inmediato a las autoridades de tránsito y, si es necesario, al 911.",
      "Toma fotos del lugar, daños del vehículo y, si es posible, de las placas del vehículo que huyó.",
      "Busca testigos que puedan proporcionar información del otro conductor.",
      "Contacta a tu aseguradora para reportar el siniestro (si cuentas con cobertura amplia).",
      "Presenta una denuncia penal ante el Ministerio Público."
    ],
    locations: [
      {
        name: "Número de Emergencias 911",
        address: "Servicio de emergencias disponible en todo Chiapas",
        phone: "911",
        hours: "24 horas",
        mapLink: "null"
      },
      {
        name: "Fiscalía General del Estado - Unidad de Tránsito",
        address: "Libramiento Norte Poniente s/n, Col. Plan de Ayala, Tuxtla Gutiérrez",
        phone: "961 617 9600",
        hours: "24 horas",
        mapLink: "https://maps.google.com/?q=Fiscalía+Transito+Tuxtla"
      },
      {
        name: "Dirección de Tránsito Municipal (Denuncias)",
        address: "11a. Sur Poniente 1050, Col. Centro, Tuxtla Gutiérrez",
        phone: "961 602 0900 ext. 6400",
        hours: "24 horas para emergencias",
        mapLink: "https://maps.google.com/?q=Dirección+Tránsito+Tuxtla"
      }
    ]
  },
  {
    question: "¿Cuál es el plazo para impugnar una multa de tránsito?",
    answer: "El plazo para impugnar una multa de tránsito varía según la entidad federativa, pero generalmente es de 15 días hábiles contados a partir de que recibes la notificación de la infracción. Debes presentar un recurso de inconformidad ante la autoridad de tránsito correspondiente.",
    lawReference: "Reglamentos de Tránsito Estatales y Códigos de Procedimientos Administrativos.",
    steps: [
      "Revisa la boleta de infracción para conocer el plazo exacto de impugnación.",
      "Redacta un escrito de inconformidad explicando las razones por las que consideras injusta la multa.",
      "Adjunta evidencias (fotos, videos, documentos) que respalden tu defensa.",
      "Presenta el recurso ante la oficina de tránsito correspondiente dentro del plazo establecido.",
      "Espera la resolución de la autoridad, que generalmente se emite en un plazo de 30 a 60 días."
    ],
    locations: [
      {
        name: "Oficina de Recursos e Inconformidades - Tránsito Municipal",
        address: "11a. Sur Poniente 1050, Col. Centro, Tuxtla Gutiérrez",
        phone: "961 602 0900 ext. 6410",
        hours: "Lunes a Viernes 8:00 AM - 3:00 PM",
        mapLink: "https://maps.google.com/?q=Recursos+Transito+Tuxtla"
      },
      {
        name: "Oficialía de Partes - Secretaría de Movilidad",
        address: "Blvd. Belisario Domínguez 1641, Col. Xamaipak, Tuxtla Gutiérrez",
        phone: "961 617 9800",
        hours: "Lunes a Viernes 9:00 AM - 3:00 PM",
        mapLink: "https://maps.google.com/?q=Secretaría+Movilidad+Tuxtla"
      }
    ]
  }
];

export const searchLegalKnowledge = (query: string): LegalAnswer | null => {
  const normalizedQuery = query.toLowerCase().trim();

  // Buscar coincidencia exacta o parcial
  for (const item of LEGAL_KNOWLEDGE) {
    const normalizedItemQuestion = item.question.toLowerCase().trim();
    if (normalizedItemQuestion.includes(normalizedQuery) || normalizedQuery.includes(normalizedItemQuestion)) {
      return item;
    }
  }

  // Respuesta por defecto si no hay coincidencia
  return {
    question: query,
    answer: "Lo siento, no encontré una respuesta específica en mi base de conocimiento para esa consulta sobre tránsito. Sin embargo, LexIA está especializada en leyes de tránsito en México y puede ayudarte con infracciones, accidentes, multas, licencias y más.",
    lawReference: "Reglamentos de Tránsito de México",
    steps: [
      "Reformular la pregunta con más detalles específicos sobre tu situación de tránsito.",
      "Consultar el Reglamento de Tránsito de tu estado.",
      "Buscar asesoría legal especializada en derecho de tránsito.",
      "Contactar a la autoridad de tránsito de tu localidad para más información."
    ],
    locations: [
      {
        name: "Dirección de Tránsito Municipal - Tuxtla Gutiérrez",
        address: "11a. Sur Poniente 1050, Col. Centro, Tuxtla Gutiérrez",
        phone: "961 602 0900 ext. 6400",
        hours: "Lunes a Viernes 8:00 AM - 3:00 PM",
        mapLink: "https://maps.google.com/?q=Dirección+Tránsito+Tuxtla"
      }
    ]
  };
};