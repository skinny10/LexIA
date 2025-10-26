import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { AnimatedText, Button, Heading, Text } from '@/components/atoms';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  backgroundImage?: string;
  illustrationImage?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const StyledHero = styled.section`
  background: #B0B5E3;
  padding: ${theme.spacing['5xl']} 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(255,255,255,0.1) 0%, transparent 60%);
    pointer-events: none;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
    min-height: auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
    min-height: auto;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    gap: ${theme.spacing['2xl']};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.lg};
  }
`;

const LeftSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.lg};
  }
`;

const RightSection = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
  }
`;

const IllustrationWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: ${theme.borderRadius['2xl']};
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 400px;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: 100%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    align-items: stretch;

    button {
      width: 100%;
    }
  }
`;

const TitleWrapper = styled(motion.div)`
  margin-bottom: ${theme.spacing.xl};

  h1 {
    margin-bottom: ${theme.spacing.xl};
    font-size: 3.5rem;
    line-height: 1.2;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, ${theme.colors.text.primary} 0%, ${theme.colors.primary.dark} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    word-break: break-word;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    h1 {
      font-size: 2.5rem;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: 2rem;
    }
  }
`;

const DescriptionText = styled(motion.div)`
  max-width: 600px;
  margin-top: ${theme.spacing.xl};
  
  p {
    font-size: 1.25rem;
    line-height: 1.6;
    letter-spacing: 0.01em;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    p {
      font-size: 1.1rem;
    }
  }
`;

export const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  illustrationImage,
  onPrimaryClick,
  onSecondaryClick,
}) => {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      } 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
        duration: 0.3,
        ease: "easeOut"
      },
    },
  } as const;

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      transition: { 
        duration: 0.6,
        ease: "easeIn"
      } 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      },
    },
  } as const;

  return (
    <StyledHero id="inicio">
      <Container maxWidth="2xl">
        <HeroContent>
          <LeftSection
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <TitleWrapper variants={itemVariants}>
              <Heading level={1}>
                <AnimatedText text={title} delay={0.3} />
              </Heading>
              {subtitle && (
                <Text size="lg" weight="semibold" color="secondary" as="div">
                  <AnimatedText text={subtitle} delay={1.8} />
                </Text>
              )}
            </TitleWrapper>

            <DescriptionText variants={itemVariants}>
              <Text size="lg" color="secondary">
                {description}
              </Text>
            </DescriptionText>

            <ButtonGroup variants={itemVariants}>
              <Button variant="primary" size="lg" onClick={onPrimaryClick}>
                {primaryButtonText}
              </Button>
              <Button variant="outline" size="lg" onClick={onSecondaryClick}>
                {secondaryButtonText}
              </Button>
            </ButtonGroup>
          </LeftSection>

          {illustrationImage && (
            <RightSection
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3, 
                ease: "easeOut"
              }}
            >
              <IllustrationWrapper>
                <img src={illustrationImage} alt={title} />
              </IllustrationWrapper>
            </RightSection>
          )}
        </HeroContent>
      </Container>
    </StyledHero>
  );
};
export default Hero;