import styled from 'styled-components';
import { FaBrain, FaLightbulb, FaCircleCheck, FaGlobe, FaClock, FaClipboardList } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StyledFeatures = styled.section`
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${theme.colors.background.main};
  border: 2px solid ${theme.colors.border};
  border-top: 4px solid ${theme.colors.primary.dark};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  transition: all ${theme.transitions.base};

  &:hover {
    box-shadow: ${theme.shadows.lg};
    border-top-color: ${theme.colors.primary.darker};
  }
`;

const IconWrapper = styled.div`
  font-size: 32px;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.primary.dark};
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const FeatureTitle = styled(Heading)`
  margin-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize['2xl']};
`;

const FeatureDescription = styled(Text)`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const features: Feature[] = [
  {
    icon: <FaBrain size={32} />,
    title: 'IA de Última Generación',
    description: 'Modelos de lenguaje avanzados entrenados específicamente en legislación mexicana y latinoamericana.',
  },
  {
    icon: <FaLightbulb size={32} />,
    title: 'Respuestas Instantáneas',
    description: 'Obtén orientación legal en menos de 2 segundos, sin esperas ni citas.',
  },
  {
    icon: <FaCircleCheck size={32} />,
    title: 'Información Verificada',
    description: 'Todas las respuestas incluyen referencias a leyes y artículos específicos del marco legal vigente.',
  },
  {
    icon: <FaGlobe size={32} />,
    title: 'Múltiples Áreas del Derecho',
    description: 'Cobertura en derecho laboral, civil, penal, mercantil, familiar y más.',
  },
  {
    icon: <FaClock size={32} />,
    title: 'Disponible 24/7',
    description: 'Accede a orientación legal en cualquier momento, desde cualquier dispositivo.',
  },
  {
    icon: <FaClipboardList size={32} />,
    title: 'Pasos Claros',
    description: 'No solo te decimos qué dice la ley, sino también qué pasos seguir y dónde acudir.',
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <StyledFeatures id="caracteristicas">
      <Container>
        <SectionHeader>
          <Heading level={1}>¿Por Qué Elegir LexIA?</Heading>
          <Text size="lg">Tecnología de punta al servicio del conocimiento legal</Text>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2, ease: "easeInOut" }
              }}
            >
              <IconWrapper>{feature.icon}</IconWrapper>
              <FeatureTitle level={3}>{feature.title}</FeatureTitle>
              <FeatureDescription size="base">{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </StyledFeatures>
  );
};
export default FeaturesSection;