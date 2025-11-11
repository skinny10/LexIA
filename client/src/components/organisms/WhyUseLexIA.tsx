import styled from 'styled-components';
import { FaDollarSign, FaClock, FaShield, FaMapPin, FaCheck, FaX } from 'react-icons/fa6';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StyledWhyUseLexIA = styled.section`
  background-color: ${theme.colors.background.main};
  padding: ${theme.spacing['4xl']} 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};

  h1 {
    margin-bottom: ${theme.spacing.md};
  }

  p {
    max-width: 600px;
    margin: 0 auto;
    color: ${theme.colors.text.secondary};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing['2xl']};
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['3xl']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const BenefitCard = styled.div`
  background: ${theme.colors.background.light};
  border: 2px solid ${theme.colors.accent.main};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: flex-start;
  transition: all ${theme.transitions.base};

  &:hover {
    border-color: ${theme.colors.secondary.main};
    transform: translateY(-4px);
    box-shadow: 0 8px 20px ${theme.colors.secondary.main}20;
  }
`;

const BenefitIcon = styled.div`
  font-size: 40px;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.secondary.main};
`;

const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const BenefitTitle = styled(Heading)`
  font-size: ${theme.typography.fontSize.lg};
  margin: 0;
  color: ${theme.colors.tertiary.main};
`;

const BenefitDescription = styled(Text)`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const ComparisonTable = styled.div`
  overflow-x: auto;
  margin-top: ${theme.spacing['2xl']};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${theme.colors.background.light};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  border: 2px solid ${theme.colors.accent.main};

  th {
    background-color: ${theme.colors.tertiary.main};
    color: ${theme.colors.text.inverse};
    padding: ${theme.spacing.lg};
    text-align: left;
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.base};
  }

  td {
    padding: ${theme.spacing.lg};
    border-bottom: 1px solid ${theme.colors.accent.main};
    font-size: ${theme.typography.fontSize.sm};
    color: ${theme.colors.text.primary};
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:nth-child(even) {
    background-color: ${theme.colors.background.main};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.xs};

    th,
    td {
      padding: ${theme.spacing.md};
    }
  }
`;

const CheckIcon = styled.span`
  color: ${theme.colors.success};
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CrossIcon = styled.span`
  color: ${theme.colors.error};
  font-weight: bold;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HighlightText = styled.span`
  color: ${theme.colors.secondary.main};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const benefits: Benefit[] = [
  {
    icon: <FaDollarSign size={40} />,
    title: 'Ahorra Tiempo y Dinero',
    description: 'Evita multas de hasta $3,000 MXN por infracciones. Conoce tus derechos al instante sin pagar consultas legales de $800-$1,500 MXN.',
  },
  {
    icon: <FaClock size={40} />,
    title: 'Respuestas Inmediatas',
    description: 'Obtén orientación legal en menos de 5 segundos. No esperes días o semanas para saber qué hacer después de un accidente o multa.',
  },
  {
    icon: <FaShield size={40} />,
    title: 'Conoce tus Derechos',
    description: 'Aprende cómo impugnar multas injustas, qué hacer en accidentes y cómo protegerte ante abusos de autoridad.',
  },
  {
    icon: <FaMapPin size={40} />,
    title: 'Ubicaciones Precisas',
    description: 'Te indicamos exactamente dónde acudir: corralones, oficinas de tránsito, ministerios públicos y más, con direcciones y horarios.',
  },
];

export const WhyUseLexIA: React.FC = () => {
  return (
    <StyledWhyUseLexIA id="por-que-usar">
      <Container>
        <SectionHeader>
          <Heading level={1}>¿Por Qué Usar LexIA?</Heading>
          <Text size="lg">Tu asistente legal de tránsito disponible 24/7 para proteger tus derechos</Text>
        </SectionHeader>

        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard key={index}>
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <BenefitContent>
                <BenefitTitle level={4}>{benefit.title}</BenefitTitle>
                <BenefitDescription size="sm">{benefit.description}</BenefitDescription>
              </BenefitContent>
            </BenefitCard>
          ))}
        </BenefitsGrid>

        <ComparisonTable>
          <Table>
            <thead>
              <tr>
                <th>Característica</th>
                <th>Sin LexIA</th>
                <th>Con LexIA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Costo de asesoría legal</td>
                <td>$800 - $1,500 por consulta</td>
                <td><HighlightText>Gratis / Desde $299/mes</HighlightText></td>
              </tr>
              <tr>
                <td>Tiempo de respuesta</td>
                <td>1-5 días hábiles</td>
                <td><HighlightText>&lt; 5 segundos</HighlightText></td>
              </tr>
              <tr>
                <td>Disponibilidad</td>
                <td>Lunes a Viernes 9am-5pm</td>
                <td><HighlightText>24/7 todos los días</HighlightText></td>
              </tr>
              <tr>
                <td>Ubicaciones y contactos</td>
                <td>
                  <CrossIcon><FaX size={20} /></CrossIcon>
                </td>
                <td>
                  <CheckIcon><FaCheck size={20} /></CheckIcon>
                </td>
              </tr>
              <tr>
                <td>Referencias legales actualizadas</td>
                <td>
                  <CrossIcon><FaX size={20} /></CrossIcon>
                </td>
                <td>
                  <CheckIcon><FaCheck size={20} /></CheckIcon>
                </td>
              </tr>
              <tr>
                <td>Pasos específicos a seguir</td>
                <td>
                  <CrossIcon><FaX size={20} /></CrossIcon>
                </td>
                <td>
                  <CheckIcon><FaCheck size={20} /></CheckIcon>
                </td>
              </tr>
              <tr>
                <td>Impugnación de multas</td>
                <td>Requiere abogado (costo adicional)</td>
                <td><HighlightText>Te guiamos paso a paso</HighlightText></td>
              </tr>
            </tbody>
          </Table>
        </ComparisonTable>
      </Container>
    </StyledWhyUseLexIA>
  );
};