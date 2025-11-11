import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text, Button } from '@/components/atoms';
import { searchLegalKnowledge, LegalAnswer } from '@/lib/legalKnowledge';

const StyledDemo = styled.section`
  background-color: ${theme.colors.background.main};
  padding: ${theme.spacing['4xl']} 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const DemoHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};

  h1 {
    margin-bottom: ${theme.spacing.md};
  }

  p {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing['2xl']};
  }
`;

const DemoContent = styled.div`
  background: ${theme.colors.background.light};
  border-radius: ${theme.borderRadius['2xl']};
  padding: ${theme.spacing['3xl']};
  text-align: center;
  box-shadow: ${theme.shadows.lg};
  border: 2px solid ${theme.colors.accent.main};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.xl};
  }
`;

const AIIconWrapper = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto ${theme.spacing['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AIIcon = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  position: relative;
  z-index: 2;
`;

const EnergyWave = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid ${theme.colors.secondary.main};
  top: 0;
  left: 0;
  animation: expandWave 2s ease-out infinite;

  &:nth-child(1) {
    animation-delay: 0s;
  }

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:nth-child(3) {
    animation-delay: 1.2s;
  }

  @keyframes expandWave {
    0% {
      transform: scale(0.5);
      opacity: 1;
      border-color: ${theme.colors.secondary.main};
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
      border-color: transparent;
    }
  }
`;

const PromptText = styled(Heading)`
  margin-bottom: ${theme.spacing.lg};
`;

const ExamplePrompts = styled.div`
  margin: ${theme.spacing['2xl']} 0;
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const ExampleBadge = styled.button`
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.text.inverse};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  text-align: center;
  cursor: pointer;
  transition: all ${theme.transitions.base};
  border: none;

  &:hover {
    background-color: ${theme.colors.secondary.dark};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${theme.colors.secondary.main}60;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100%;
  }
`;

const InputArea = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing['2xl']};
  align-items: center;

  input {
    flex: 1;
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    border: 2px solid ${theme.colors.accent.main};
    border-radius: ${theme.borderRadius.lg};
    font-size: ${theme.typography.fontSize.base};
    background-color: ${theme.colors.background.main};
    color: ${theme.colors.text.primary};
    transition: all ${theme.transitions.base};

    &::placeholder {
      color: ${theme.colors.text.light};
    }

    &:focus {
      outline: none;
      border-color: ${theme.colors.secondary.main};
      box-shadow: 0 0 0 3px ${theme.colors.secondary.main}20;
    }
  }

  button {
    width: 48px;
    height: 48px;
    border-radius: ${theme.borderRadius.full};
    border: none;
    background-color: ${theme.colors.secondary.main};
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    transition: all ${theme.transitions.fast};
    flex-shrink: 0;

    &:hover {
      background-color: ${theme.colors.secondary.dark};
      transform: scale(1.05);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

const ResponseContainer = styled(motion.div)`
  margin-top: ${theme.spacing['3xl']};
  background: white;
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  text-align: left;
  box-shadow: 0 4px 20px ${theme.colors.secondary.main}20;
  border: 2px solid ${theme.colors.accent.main};
`;

const ResponseSection = styled.div`
  margin-bottom: ${theme.spacing.lg};

  &:last-child {
    margin-bottom: 0;
  }
`;

const ResponseLabel = styled.h3`
  color: ${theme.colors.tertiary.main};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.md};
`;

const ResponseText = styled.p`
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.md};
`;

const LawReferenceBox = styled.div`
  background: ${theme.colors.accent.light};
  border-left: 4px solid ${theme.colors.secondary.main};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.lg};
`;

const StepsList = styled.ol`
  list-style: decimal;
  padding-left: ${theme.spacing['2xl']};

  li {
    margin-bottom: ${theme.spacing.md};
    color: ${theme.colors.text.primary};
    line-height: ${theme.typography.lineHeight.relaxed};
  }
`;

const LocationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.md};
`;

const LocationCard = styled.div`
  background: ${theme.colors.background.light};
  border: 2px solid ${theme.colors.accent.main};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  transition: all ${theme.transitions.base};

  &:hover {
    border-color: ${theme.colors.secondary.main};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${theme.colors.secondary.main}30;
  }
`;

const LocationName = styled.h4`
  color: ${theme.colors.tertiary.main};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.bold};
  margin-bottom: ${theme.spacing.sm};
`;

const LocationDetail = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};

  svg {
    color: ${theme.colors.secondary.main};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const MapLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.secondary.main};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  text-decoration: none;
  margin-top: ${theme.spacing.sm};
  transition: all ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.secondary.dark};
    gap: ${theme.spacing.md};
  }

  svg {
    font-size: 12px;
  }
`;

export const DemoSection: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [response, setResponse] = useState<LegalAnswer | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;

    try {
      setIsLoading(true);
      setInputValue(query);

      // Simular un pequeño delay para que parezca que está procesando
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const result = searchLegalKnowledge(query);
      setResponse(result);
    } catch (error) {
      console.error('Error al procesar la consulta:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendClick = () => {
    handleSearch(inputValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(inputValue);
    }
  };

  const exampleQuestions = [
    "¿Qué pasa si me detienen por manejar en estado de ebriedad?",
    "¿Cuáles son mis derechos si me multan por exceso de velocidad?",
    "¿Qué hago si choco y el otro conductor no tiene seguro?"
  ];

  return (
    <StyledDemo id="demo">
      <Container>
        <DemoHeader>
          <Heading level={1}>Prueba LexIA en Acción</Heading>
          <Text size="lg" color="secondary">
            Haz una pregunta legal en lenguaje natural y recibe una respuesta completa con leyes aplicables y pasos a seguir
          </Text>
        </DemoHeader>

        <DemoContent>
          <AIIconWrapper>
            <EnergyWave />
            <EnergyWave />
            <EnergyWave />
            <AIIcon src="/ai-bubble.png" alt="AI Bubble" />
          </AIIconWrapper>
          <PromptText level={3}>Haz una pregunta legal para comenzar</PromptText>
          <Text size="sm" color="secondary">
            Prueba con uno de los ejemplos abajo
          </Text>

          <ExamplePrompts>
            {exampleQuestions.map((question, index) => (
              <ExampleBadge
                key={index}
                onClick={() => handleSearch(question)}
              >
                {question}
              </ExampleBadge>
            ))}
          </ExamplePrompts>

          <Text size="sm" weight="semibold" color="primary">
            Preguntas de ejemplo:
          </Text>

          <InputArea>
            <input
              type="text"
              placeholder="Escribe tu pregunta legal aquí."
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              aria-label="Pregunta legal"
              aria-describedby="input-help"
              disabled={isLoading}
            />
            <button 
              onClick={handleSendClick} 
              disabled={isLoading}
              aria-label={isLoading ? "Procesando pregunta" : "Enviar pregunta"}
            >
              {isLoading ? '⏳' : '↑'}
            </button>
          </InputArea>
          <div id="input-help" style={{ marginTop: '8px' }}>
            <Text size="xs" color="secondary">
              Presiona Enter o el botón de enviar para obtener una respuesta
            </Text>
          </div>

          <AnimatePresence>
            {response && (
              <ResponseContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <ResponseSection>
                  <ResponseLabel>Respuesta</ResponseLabel>
                  <ResponseText>{response.answer}</ResponseText>
                </ResponseSection>

                <ResponseSection>
                  <ResponseLabel>Referencia Legal</ResponseLabel>
                  <LawReferenceBox>
                    <ResponseText>{response.lawReference}</ResponseText>
                  </LawReferenceBox>
                </ResponseSection>

                <ResponseSection>
                  <ResponseLabel>Pasos a Seguir</ResponseLabel>
                  <StepsList>
                    {response.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </StepsList>
                </ResponseSection>

                {response.locations && response.locations.length > 0 && (
                  <ResponseSection>
                    <ResponseLabel>📍 Lugares donde puedes acudir</ResponseLabel>
                    <LocationsGrid>
                      {response.locations.map((location, index) => (
                        <LocationCard key={index}>
                          <LocationName>{location.name}</LocationName>
                          
                          <LocationDetail>
                            <FaMapMarkerAlt />
                            <span>{location.address}</span>
                          </LocationDetail>

                          {location.phone && (
                            <LocationDetail>
                              <FaPhone />
                              <span>{location.phone}</span>
                            </LocationDetail>
                          )}

                          {location.hours && (
                            <LocationDetail>
                              <FaClock />
                              <span>{location.hours}</span>
                            </LocationDetail>
                          )}

                          {location.mapLink && (
                            <MapLink 
                              href={location.mapLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Ver en Google Maps <FaExternalLinkAlt />
                            </MapLink>
                          )}
                        </LocationCard>
                      ))}
                    </LocationsGrid>
                  </ResponseSection>
                )}
              </ResponseContainer>
            )}
          </AnimatePresence>
        </DemoContent>
      </Container>
    </StyledDemo>
  );
};

export default DemoSection;