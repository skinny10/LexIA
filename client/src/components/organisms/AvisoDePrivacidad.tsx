import React from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

const Page = styled.div`
  min-height: calc(100vh - 80px);
  padding: ${theme.spacing['4xl']} 0;
  background: ${theme.colors.background.main};
  color: ${theme.colors.text.primary};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const Section = styled.section`
  margin-top: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: ${theme.spacing.xl};
  }
`;

const BackLink = styled.button`
  background: ${theme.colors.secondary.main};
  color: ${theme.colors.text.inverse};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};

  &:hover {
    opacity: 0.95;
  }
`;

const Meta = styled(Text)`
  display: block;
  margin-top: ${theme.spacing.md};
  color: ${theme.colors.text.secondary};
`;

const DataTableWrap = styled.div`
  margin-top: ${theme.spacing.md};
  overflow-x: auto;
`;

const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;

  th, td {
    text-align: left;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  th {
    background: ${theme.colors.background.light};
    font-weight: ${theme.typography.fontWeight.semibold};
  }

  td {
    vertical-align: top;
  }
`;

const Contact = styled.a`
  color: ${theme.colors.primary.dark};
  text-decoration: underline;
  cursor: pointer;
`;

export const AvisoDePrivacidad: React.FC = () => {
  const handleBack = () => window.history.back();

  const contactEmail = 'lexia1388@gmail.com';

  return (
    <Page>
      <Container>
        <BackLink onClick={handleBack}>← Volver</BackLink>

        <Heading level={1}>Aviso de Privacidad Integral de LexIA – Asistente Jurídico Inteligente y Explicativo</Heading>
        <Meta size="sm">Fecha de última actualización: 13 de noviembre de 2025</Meta>

        <Section>
          <Heading level={3}>1. Identidad y Domicilio del Responsable</Heading>
          <Text size="sm">
            LexIA – Asistente Jurídico Inteligente y Explicativo (en adelante, "LexIA" o "El Responsable") es responsable del tratamiento de sus datos personales.
          </Text>
          <Text size="sm">
            Domicilio: El domicilio para oír y recibir notificaciones es el que se establezca en el momento de la constitución legal de la entidad responsable del proyecto. Para efectos de este Aviso de Privacidad, se señala el domicilio virtual de contacto: <Contact href={`mailto:${contactEmail}`}>{contactEmail}</Contact>.
          </Text>
        </Section>

        <Section>
          <Heading level={3}>2. Datos Personales Recabados</Heading>
          <Text size="sm">LexIA recabará los siguientes datos personales de los usuarios (Ciudadanos y Abogados) para las finalidades descritas en el presente Aviso de Privacidad:</Text>

          <DataTableWrap>
            <DataTable>
              <thead>
                <tr>
                  <th>Categoría de Datos</th>
                  <th>Tipo de Usuario</th>
                  <th>Datos Recabados</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Datos de Identificación y Contacto</td>
                  <td>Ciudadanos y Abogados</td>
                  <td>Nombre completo, correo electrónico, teléfono.</td>
                </tr>
                <tr>
                  <td>Datos Profesionales</td>
                  <td>Abogados</td>
                  <td>Especialidad legal, biografía, años de experiencia, tarifa por hora, ciudad, estado, información de contacto del despacho.</td>
                </tr>
                <tr>
                  <td>Datos de Uso de la Plataforma</td>
                  <td>Ciudadanos y Abogados</td>
                  <td>Consultas realizadas, historial de búsqueda, interacciones con el asistente (prompts y respuestas), datos de navegación (IP, tipo de dispositivo, etc.).</td>
                </tr>
                <tr>
                  <td>Datos Sensibles</td>
                  <td>Ciudadanos y Abogados</td>
                  <td>
                    LexIA NO recaba datos personales sensibles (como origen racial o étnico, estado de salud, información genética, creencias religiosas, filosóficas y morales, afiliación sindical, opiniones políticas o preferencia sexual) de forma directa. Sin embargo, el usuario es responsable de la información que ingrese en las consultas, la cual podría contener datos sensibles de terceros o propios. LexIA tratará esta información únicamente para la finalidad de la consulta legal y no la almacenará ni procesará para fines distintos.
                  </td>
                </tr>
              </tbody>
            </DataTable>
          </DataTableWrap>
        </Section>

        <Section>
          <Heading level={3}>3. Finalidades del Tratamiento de Datos</Heading>
          <Text size="sm"><strong>Finalidades Primarias (Necesarias para la prestación del servicio)</strong></Text>
          <Text size="sm">1. Proveer el servicio de Asistente Jurídico Inteligente y Explicativo (LexIA): Procesar las consultas de los usuarios (Ciudadanos y Abogados) para generar respuestas y análisis legales fundamentados en la legislación y jurisprudencia mexicana. Esto incluye el uso de la información para el sistema de recomendación y matching de abogados especializados.</Text>
          <Text size="sm">2. Gestión de la cuenta de usuario: Administrar el registro, acceso y perfil de los usuarios en la plataforma, incluyendo la gestión de perfiles extendidos para Abogados y la funcionalidad de chat privado asincrónico entre usuarios y abogados.</Text>
          <Text size="sm">3. Mejora continua del servicio: Utilizar el historial de consultas y las interacciones de matching (de forma anonimizada o disociada) para entrenar y mejorar la precisión y relevancia de las respuestas del modelo de inteligencia artificial y el algoritmo de recomendación de abogados.</Text>
          <Text size="sm">4. Seguridad y monitoreo: Garantizar la seguridad de la plataforma y monitorear el uso para prevenir fraudes o usos indebidos.</Text>

          <Text size="sm"><strong>Finalidades Secundarias (No necesarias para la prestación del servicio)</strong></Text>
          <Text size="sm">1. Envío de comunicaciones promocionales: Enviar información sobre nuevos servicios, funcionalidades o promociones de LexIA.</Text>
          <Text size="sm">2. Estudios de mercado y encuestas de calidad: Realizar análisis estadísticos y de calidad para evaluar la satisfacción del usuario.</Text>
          <Text size="sm">Nota: El titular tiene un plazo de cinco días hábiles para manifestar su negativa al tratamiento de sus datos personales para las finalidades secundarias, enviando un correo electrónico a <Contact href={`mailto:${contactEmail}`}>{contactEmail}</Contact>.</Text>
        </Section>

        <Section>
          <Heading level={3}>4. Transferencias de Datos Personales</Heading>
          <Text size="sm">LexIA NO realiza transferencias de sus datos personales a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), tales como:</Text>
          <ul>
            <li>Transferencias a sociedades controladoras, subsidiarias o afiliadas bajo el control común del responsable.</li>
            <li>Transferencias necesarias para el mantenimiento o cumplimiento de la relación jurídica entre el responsable y el titular.</li>
          </ul>
        </Section>

        <Section>
          <Heading level={3}>5. Medios y Procedimiento para Ejercer los Derechos ARCO</Heading>
          <Text size="sm">Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).</Text>
          <Text size="sm">Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través de un correo electrónico a <Contact href={`mailto:${contactEmail}`}>{contactEmail}</Contact>, o mediante escrito libre dirigido a nuestro domicilio.</Text>
          <Text size="sm">La solicitud deberá contener y acompañar lo siguiente: a) El nombre del titular y domicilio u otro medio para comunicarle la respuesta a su solicitud. b) Los documentos que acrediten la identidad o, en su caso, la representación legal del titular. c) La descripción clara y precisa de los datos personales respecto de los que se busca ejercer alguno de los derechos antes mencionados. d) Cualquier otro elemento o documento que facilite la localización de los datos personales.</Text>
        </Section>

        <Section>
          <Heading level={3}>6. Mecanismos y Procedimiento para Revocar el Consentimiento</Heading>
          <Text size="sm">Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal queramos seguir tratando sus datos personales.</Text>
          <Text size="sm">Para revocar su consentimiento, deberá presentar su solicitud a través de un correo electrónico a <Contact href={`mailto:${contactEmail}`}>{contactEmail}</Contact>, siguiendo el mismo procedimiento y requisitos establecidos para el ejercicio de los derechos ARCO.</Text>
        </Section>

        <Section>
          <Heading level={3}>7. Opciones y Medios para Limitar el Uso o Divulgación de sus Datos Personales</Heading>
          <Text size="sm">Usted puede limitar el uso y divulgación de sus datos personales para finalidades secundarias a través de la manifestación de su negativa en el plazo de cinco días hábiles, o en cualquier momento posterior, enviando un correo electrónico a <Contact href={`mailto:${contactEmail}`}>{contactEmail}</Contact>.</Text>
        </Section>

        <Section>
          <Heading level={3}>8. Uso de Tecnologías de Rastreo en Nuestro Portal de Internet (Cookies y Web Beacons)</Heading>
          <Text size="sm">Le informamos que en nuestra página de Internet utilizamos cookies, web beacons u otras tecnologías a través de las cuales es posible monitorear su comportamiento como usuario de Internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página.</Text>
          <Text size="sm">Los datos personales que obtenemos de estas tecnologías de rastreo son:</Text>
          <ul>
            <li>Identificadores, nombre de usuario y contraseñas de una sesión.</li>
            <li>Idioma preferencial del usuario.</li>
            <li>Región en la que se encuentra el usuario.</li>
            <li>Tipo de navegador del usuario.</li>
            <li>Tipo de sistema operativo del usuario.</li>
            <li>Fecha y hora del inicio y final de una sesión de un usuario.</li>
            <li>Páginas web visitadas por un usuario.</li>
            <li>Búsquedas realizadas por un usuario.</li>
          </ul>
        </Section>

        <Section>
          <Heading level={3}>9. Cambios al Aviso de Privacidad</Heading>
          <Text size="sm">El presente Aviso de Privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente Aviso de Privacidad.</Text>
        </Section>

        <Section>
          <Heading level={4}>FIN DEL AVISO DE PRIVACIDAD</Heading>
        </Section>
      </Container>
    </Page>
  );
};

export default AvisoDePrivacidad;
