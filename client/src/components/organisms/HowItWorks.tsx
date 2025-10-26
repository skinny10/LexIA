import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

const HowItWorksSection = styled.section`
  max-width: 1600px;
  margin: 2rem auto 0;
  padding: 1rem 2rem;
  overflow: hidden;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};

  h1 {
    margin-bottom: ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing['2xl']};
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

const StepCard = styled(motion.div)`
  background: ${theme.colors.background.main};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  text-align: center;
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transitions.base};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const StepNumber = styled(motion.div)`
  width: 60px;
  height: 60px;
  margin: 0 auto ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.primary.light}, ${theme.colors.primary.main});
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.dark};
`;

const StepTitle = styled(Heading)`
  margin-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.lg};
`;

const StepDescription = styled(Text)`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const steps = [
  {
    number: '1',
    title: 'Tu Pregunta',
    description: 'Ingresa tu consulta en lenguaje natural',
  },
  {
    number: '2',
    title: 'Análisis Semántico',
    description: 'La IA entiende el contexto y busca en nuestra base de datos legal',
  },
  {
    number: '3',
    title: 'Generación',
    description: 'El LLM genera una respuesta completa con referencias legales',
  },
  {
    number: '4',
    title: 'Respuesta',
    description: 'Recibe la ley aplicable y los pasos a seguir',
  },
];

export const HowItWorks: React.FC = () => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        duration: 0.5,
        ease: "easeOut"
      },
    },
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      transition: { 
        duration: 0.5,
        ease: "easeIn"
      } 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      },
    },
  } as const;

  return (
    <HowItWorksSection id="como-funciona">
      <Container>
        <SectionHeader>
          <Heading level={2}>Cómo Funciona Nuestra IA</Heading>
        </SectionHeader>

        <StepsGrid
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step) => (
            <StepCard
              key={step.number}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <StepNumber
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {step.number}
              </StepNumber>
              <StepTitle level={4}>{step.title}</StepTitle>
              <StepDescription size="sm">{step.description}</StepDescription>
            </StepCard>
          ))}
        </StepsGrid>
      </Container>
    </HowItWorksSection>
  );
};
export default HowItWorks;