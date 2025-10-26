import styled from 'styled-components';
import { FaRobot, FaDatabase, FaLink, FaCloud, FaLock, FaBrain } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

interface Tech {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StyledTechStack = styled.section`
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
    max-width: 700px;
    margin: 0 auto;
    color: ${theme.colors.text.secondary};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing['2xl']};
  }
`;

const TechGrid = styled.div`
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

const TechCard = styled(motion.div)`
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['3xl']};
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at top right,
      ${theme.colors.primary.main}10,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    width: 150%;
    height: 150%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      ${theme.colors.primary.light}10,
      ${theme.colors.primary.main}10,
      ${theme.colors.primary.dark}10,
      ${theme.colors.primary.light}10
    );
    transform: translate(-50%, -50%) rotate(0deg);
    top: 50%;
    left: 50%;
    opacity: 0;
    transition: all 0.6s ease;
    z-index: -2;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.2),
      0 0 20px ${theme.colors.primary.main}20;
    border-color: ${theme.colors.primary.main}40;

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const IconWrapper = styled(motion.div)`
  font-size: 48px;
  margin-bottom: ${theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  margin: 0 auto ${theme.spacing.xl};
  position: relative;
  color: ${theme.colors.primary.main};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg,
      ${theme.colors.primary.light},
      ${theme.colors.primary.main}
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      ${theme.colors.primary.light}00,
      ${theme.colors.primary.main}40,
      ${theme.colors.primary.light}00
    );
    animation: spin 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${TechCard}:hover & {
    color: ${theme.colors.primary.dark};

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 1;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const TechTitle = styled(Heading)`
  margin-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.text.primary};
`;

const TechDescription = styled(Text)`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const technologies: Tech[] = [
  {
    icon: <FaRobot size={48} />,
    title: 'GPT-4 & Claude',
    description: 'Modelos de lenguaje de última generación fine-tuned con legislación mexicana',
  },
  {
    icon: <FaDatabase size={48} />,
    title: 'Vector Database',
    description: 'Pinecone para búsqueda semántica ultrarrápida en millones de documentos legales',
  },
  {
    icon: <FaLink size={48} />,
    title: 'LangChain',
    description: 'Framework para orquestar prompts complejos y cadenas de razonamiento',
  },
  {
    icon: <FaCloud size={48} />,
    title: 'AWS & Vercel',
    description: 'Infraestructura escalable y de alta disponibilidad en la nube',
  },
  {
    icon: <FaLock size={48} />,
    title: 'Seguridad Enterprise',
    description: 'Encriptación end-to-end y cumplimiento con estándares de privacidad',
  },
  {
    icon: <FaBrain size={48} />,
    title: 'RAG Architecture',
    description: 'Retrieval-Augmented Generation para respuestas precisas y actualizadas',
  },
];

export const TechnologyStack: React.FC = () => {
  return (
    <StyledTechStack id="tecnologia">
      <Container>
        <SectionHeader>
          <Heading level={1}>Tecnología de Vanguardia</Heading>
          <Text size="lg">
            Nuestro stack tecnológico combina lo mejor de la IA moderna con arquitecturas probadas para ofrecer respuestas legales precisas y confiables
          </Text>
        </SectionHeader>

        <TechGrid>
          {technologies.map((tech, index) => (
            <TechCard
              key={index}
              initial={{ 
                opacity: 0, 
                y: 50,
                scale: 0.9,
                filter: 'blur(10px)'
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                scale: 1,
                filter: 'blur(0px)'
              }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.4,
                  ease: "easeOut"
                }
              }}
            >
              <IconWrapper
                whileHover={{ 
                  rotate: 10, 
                  scale: 1.1 
                }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300,
                  damping: 10
                }}
              >
                {tech.icon}
              </IconWrapper>
              <TechTitle level={4}>{tech.title}</TechTitle>
              <TechDescription size="sm">{tech.description}</TechDescription>
            </TechCard>
          ))}
        </TechGrid>
      </Container>
    </StyledTechStack>
  );
};
export default TechnologyStack;