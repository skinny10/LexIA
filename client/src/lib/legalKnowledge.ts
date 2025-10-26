export interface LegalAnswer {
  question: string;
  answer: string;
  lawReference: string;
  steps: string[];
}


export const LEGAL_KNOWLEDGE: LegalAnswer[] = [
  {
    question: "¿Qué pasa si me despiden y no me pagan mi liquidación?",
    answer: "Si te despiden sin causa justificada y no te pagan tu liquidación, tienes derecho a iniciar un proceso legal para reclamar el pago de tres meses de salario (indemnización constitucional), la prima de antigüedad (si aplica), y las partes proporcionales de aguinaldo, vacaciones y prima vacacional.",
    lawReference: "Artículo 48 de la Ley Federal del Trabajo (LFT).",
    steps: [
      "Acudir al Centro de Conciliación y Registro Laboral para iniciar una audiencia de conciliación.",
      "Si no hay acuerdo, se emitirá una constancia de no conciliación.",
      "Presentar una demanda ante el Tribunal Laboral competente.",
      "Reunir pruebas (contrato, recibos de nómina, testigos) para el juicio."
    ]
  },
  {
    question: "¿Cuáles son mis derechos como inquilino?",
    answer: "Como inquilino, tienes derecho a un contrato de arrendamiento por escrito, a que el inmueble te sea entregado en buenas condiciones de habitabilidad, a que se te notifique con antelación si el arrendador desea terminar el contrato, y a que se te devuelva el depósito (si no hay daños) al finalizar el contrato.",
    lawReference: "Código Civil Federal (o el Código Civil de la entidad federativa correspondiente) en materia de Arrendamiento.",
    steps: [
      "Revisar detalladamente el contrato de arrendamiento antes de firmar.",
      "Exigir recibos de pago de renta.",
      "Documentar cualquier daño o reparación necesaria al inicio y final del contrato.",
      "Si hay controversia, buscar mediación o asesoría legal."
    ]
  },
  {
    question: "¿Cómo puedo reclamar una herencia?",
    answer: "Para reclamar una herencia, primero debe determinarse si existe un testamento. Si existe, se inicia un juicio sucesorio testamentario. Si no existe, se inicia un juicio sucesorio intestamentario, donde la ley define a los herederos (generalmente descendientes, ascendientes y cónyuge).",
    lawReference: "Código Civil Federal, Libro Tercero: De las Sucesiones.",
    steps: [
      "Obtener el acta de defunción del difunto.",
      "Solicitar al Archivo General de Notarías el informe sobre la existencia de testamento.",
      "Contratar a un abogado para iniciar el juicio sucesorio (testamentario o intestamentario).",
      "Realizar el inventario, avalúo, y partición de los bienes entre los herederos."
    ]
  },
  {
    question: "¿Qué es el derecho de réplica?",
    answer: "El derecho de réplica es el derecho de toda persona a que se le aclare la información inexacta o falsa que se haya difundido sobre ella, sus familiares o sus bienes en cualquier medio de comunicación.",
    lawReference: "Ley Reglamentaria del Artículo 6o., párrafo primero, de la Constitución Política de los Estados Unidos Mexicanos, en materia del Derecho de Réplica.",
    steps: [
      "Identificar la información inexacta o falsa y el medio que la difundió.",
      "Presentar la solicitud de réplica por escrito al director del medio en un plazo de cinco días hábiles.",
      "Si el medio no publica la réplica, se puede acudir a los tribunales federales."
    ]
  },
  {
    question: "¿Cuál es el plazo para demandar un despido injustificado?",
    answer: "El trabajador tiene un plazo de dos meses para ejercer la acción de demandar un despido injustificado, contados a partir del día siguiente a la fecha del despido.",
    lawReference: "Artículo 518 de la Ley Federal del Trabajo (LFT).",
    steps: [
      "Acudir al Centro de Conciliación y Registro Laboral para iniciar una audiencia de conciliación.",
      "Si no hay acuerdo, se emitirá una constancia de no conciliación.",
      "Presentar una demanda ante el Tribunal Laboral competente.",
      "Reunir pruebas (contrato, recibos de nómina, testigos) para el juicio."
    ]
  }
];


export const searchLegalKnowledge = (query: string): LegalAnswer | null => {
  const normalizedQuery = query.toLowerCase().trim();

  
  for (const item of LEGAL_KNOWLEDGE) {
    const normalizedItemQuestion = item.question.toLowerCase().trim();
    if (normalizedItemQuestion.includes(normalizedQuery) || normalizedQuery.includes(normalizedItemQuestion)) {
      return item;
    }
  }

  
  return {
    question: query,
    answer: "Lo siento, no encontré una respuesta específica en mi base de conocimiento para esa consulta. Sin embargo, LexIA está entrenada para analizar tu pregunta y proporcionarte la referencia legal más relevante y los pasos a seguir.",
    lawReference: "Consulta Legal General",
    steps: [
      "Reformular la pregunta con más detalles.",
      "Consultar a un abogado especializado.",
      "Revisar la legislación federal y local aplicable."
    ]
  };
};
