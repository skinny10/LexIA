import styled from 'styled-components';
import { FaPython, FaRocket, FaLayerGroup, FaDatabase, FaShield, FaLock, FaFeather, FaBox, FaGaugeHigh, FaCompass, FaGlobe, FaPalette } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

interface Tech {
  icon: React.ReactNode;
  title: string;
  description: string;
  category?: 'backend' | 'frontend';
}

const StyledTechStack = styled.section`
  background-color: ${theme.colors.background.main};
  padding: ${theme.spacing['4xl']} 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    /* reduce outer padding on small devices to avoid large whitespace */
    padding: ${theme.spacing.lg} 0;
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
  background: ${theme.colors.background.main};
  border: 2px solid ${theme.colors.accent.main};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['3xl']};
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(61, 46, 40, 0.08);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${theme.colors.secondary.main}15,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 20px 40px rgba(61, 46, 40, 0.15),
      0 0 20px ${theme.colors.secondary.main}30;
    border-color: ${theme.colors.secondary.main};

    &::before {
      opacity: 1;
    }
  }

  /* make cards more compact on small screens */
  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
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
  color: ${theme.colors.secondary.main};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg,
      ${theme.colors.secondary.light},
      ${theme.colors.secondary.main}
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      ${theme.colors.secondary.light}00,
      ${theme.colors.secondary.main}60,
      ${theme.colors.secondary.light}00
    );
    animation: spin 4s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${TechCard}:hover & {
    color: ${theme.colors.secondary.dark};

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

  /* scale down icon wrapper on smaller screens */
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 36px;
    height: 72px;
    width: 72px;
    margin-bottom: ${theme.spacing.md};
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

const CategorySection = styled.div`
  margin-bottom: ${theme.spacing['4xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    margin-bottom: ${theme.spacing['2xl']};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing.xl};
  }
`;

const CategoryTitle = styled(Heading)`
  text-align: center;
  margin-bottom: ${theme.spacing['2xl']};
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
    margin-bottom: ${theme.spacing.xl};
  }
`;

const technologies: Tech[] = [
  {
    icon: <FaPython size={48} />,
    title: 'Lenguaje: Python',
    description: 'Lenguaje potente, legible y ampliamente utilizado en inteligencia artificial y desarrollo backend. Permite integrar modelos de lenguaje y servicios web con gran eficiencia.',
    category: 'backend',
  },
  {
    icon: <FaRocket size={48} />,
    title: 'FastAPI',
    description: 'Framework moderno, asíncrono y de alto rendimiento para construir APIs RESTful. Ofrece validación automática de datos y documentación interactiva.',
    category: 'backend',
  },
  {
    icon: <FaLayerGroup size={48} />,
    title: 'Arquitectura Hexagonal',
    description: 'Separa la lógica de negocio del acceso a datos y las interfaces externas, logrando un código modular, limpio y mantenible.',
    category: 'backend',
  },
  {
    icon: <FaDatabase size={48} />,
    title: 'SQLAlchemy + Alembic',
    description: 'SQLAlchemy como ORM para facilitar la comunicación con la base de datos. Alembic para migraciones controladas del esquema.',
    category: 'backend',
  },
  {
    icon: <FaShield size={48} />,
    title: 'PyJWT + bcrypt',
    description: 'PyJWT maneja tokens JWT para sesiones seguras. bcrypt cifra contraseñas con hashing resistente a ataques de fuerza bruta.',
    category: 'backend',
  },
  {
    icon: <FaLock size={48} />,
    title: 'slowapi',
    description: 'Middleware de rate limiting que protege la API de abusos o ataques de denegación de servicio (DoS), limitando las solicitudes por IP.',
    category: 'backend',
  },
  {
    icon: <FaFeather size={48} />,
    title: 'Flutter (3.9.2) + Dart (3.9.2)',
    description: 'Framework multiplataforma de Google. Una sola base de código para Web, Android e iOS, garantizando alto rendimiento e interfaz fluida y moderna.',
    category: 'frontend',
  },
  {
    icon: <FaBox size={48} />,
    title: 'Clean Architecture + MVVM',
    description: 'Organiza el proyecto en capas bien definidas: Domain, Data y Presentation, facilitando mantenibilidad, escalabilidad y pruebas unitarias.',
    category: 'frontend',
  },
  {
    icon: <FaGaugeHigh size={48} />,
    title: 'State Management con Provider + get_it',
    description: 'Provider para gestión reactiva del estado y get_it como Service Locator para inyección de dependencias, logrando flujo de datos limpio y desacoplado.',
    category: 'frontend',
  },
  {
    icon: <FaCompass size={48} />,
    title: 'go_router',
    description: 'Sistema de navegación declarativa que permite rutas seguras, dinámicas y anidadas, simplificando la gestión de pantallas y módulos.',
    category: 'frontend',
  },
  {
    icon: <FaGlobe size={48} />,
    title: 'HTTP + Shared Preferences',
    description: 'Cliente HTTP conecta con API REST del backend. Shared Preferences almacena tokens y datos persistentes de sesión de forma local y segura.',
    category: 'frontend',
  },
  {
    icon: <FaPalette size={48} />,
    title: 'Material Design 3 + Responsive UI',
    description: 'Interfaz bajo Material Design 3, esquema de colores personalizado desde .env y diseño responsive adaptativo para web y dispositivos móviles.',
    category: 'frontend',
  },
];

export const TechnologyStack: React.FC = () => {
  const backendTechs = technologies.filter(tech => tech.category === 'backend');
  const frontendTechs = technologies.filter(tech => tech.category === 'frontend');

  const renderTechCards = (techs: Tech[]) => (
    <TechGrid>
      {techs.map((tech, index) => (
        <TechCard
          key={index}
          initial={{ 
            opacity: 0, 
            y: 30,
            scale: 0.95
          }}
          whileInView={{ 
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          transition={{ 
            duration: 0.5, 
            delay: index * 0.1,
            ease: "easeOut"
          }}
          viewport={{ once: true, amount: 0.2 }}
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
  );

  return (
    <StyledTechStack id="tecnologia">
      <Container>
        <SectionHeader>
          <Heading level={1}>Tecnología de Vanguardia</Heading>
          <Text size="lg">
            LexIA está construido con un stack tecnológico robusto que combina un backend potente en Python con un frontend multiplataforma en Flutter, garantizando escalabilidad, seguridad y experiencia de usuario excepcional
          </Text>
        </SectionHeader>

        <CategorySection>
          <CategoryTitle level={2}>Backend</CategoryTitle>
          {renderTechCards(backendTechs)}
        </CategorySection>

        <CategorySection>
          <CategoryTitle level={2}>Frontend</CategoryTitle>
          {renderTechCards(frontendTechs)}
        </CategorySection>
      </Container>
    </StyledTechStack>
  );
};
export default TechnologyStack;