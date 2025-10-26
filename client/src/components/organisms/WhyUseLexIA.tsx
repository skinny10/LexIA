import styled from 'styled-components';
import { FaDollarSign, FaUsers, FaChartLine, FaMedal, FaCheck, FaX } from 'react-icons/fa6';
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
  background: ${theme.colors.background.dark};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: flex-start;
`;

const BenefitIcon = styled.div`
  font-size: 40px;
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary.main};
`;

const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

const BenefitTitle = styled(Heading)`
  font-size: ${theme.typography.fontSize.lg};
  margin: 0;
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
  background: ${theme.colors.background.main};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};

  th {
    background-color: ${theme.colors.primary.dark};
    color: ${theme.colors.text.inverse};
    padding: ${theme.spacing.lg};
    text-align: left;
    font-weight: ${theme.typography.fontWeight.bold};
    font-size: ${theme.typography.fontSize.base};
  }

  td {
    padding: ${theme.spacing.lg};
    border-bottom: 1px solid ${theme.colors.border};
    font-size: ${theme.typography.fontSize.sm};
  }

  tr:last-child td {
    border-bottom: none;
  }

  tr:nth-child(even) {
    background-color: ${theme.colors.background.dark};
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

const benefits: Benefit[] = [
  {
    icon: <FaDollarSign size={40} />,
    title: 'Ahorra hasta 95%',
    description: 'Una consulta legal tradicional cuesta $1,500-$3,000 MXN. Con LexIA, consultas ilimitadas desde $299/mes',
  },
  {
    icon: <FaUsers size={40} />,
    title: '+10,000 Usuarios',
    description: 'Miles de personas y empresas ya confían en LexIA para sus consultas legales diarias',
  },
  {
    icon: <FaChartLine size={40} />,
    title: 'ROI Inmediato',
    description: 'Reduce costos legales operativos y obtén respuestas al instante sin esperar citas',
  },
  {
    icon: <FaMedal size={40} />,
    title: 'Precisión Garantizada',
    description: 'Todas nuestras respuestas están verificadas y actualizadas constantemente con cambios legislativos',
  },
];

export const WhyUseLexIA: React.FC = () => {
  return (
    <StyledWhyUseLexIA id="por-que-usar">
      <Container>
        <SectionHeader>
          <Heading level={1}>¿Por Qué Usar LexIA?</Heading>
          <Text size="lg">La forma más rápida, económica y eficiente de obtener orientación legal</Text>
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
                <th>Consulta Tradicional</th>
                <th>LexIA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Costo por consulta</td>
                <td>$1,500 - $3,000</td>
                <td>Desde $299/mes ilimitado</td>
              </tr>
              <tr>
                <td>Tiempo de respuesta</td>
                <td>1-7 días</td>
                <td>&lt; 2 segundos</td>
              </tr>
              <tr>
                <td>Disponibilidad</td>
                <td>Horario de oficina</td>
                <td>24/7/365</td>
              </tr>
              <tr>
                <td>Consultas ilimitadas</td>
                <td>
                  <CrossIcon><FaX size={20} /></CrossIcon>
                </td>
                <td>
                  <CheckIcon><FaCheck size={20} /></CheckIcon>
                </td>
              </tr>
            </tbody>
          </Table>
        </ComparisonTable>
      </Container>
    </StyledWhyUseLexIA>
  );
};

