import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Text } from '@/components/atoms';

interface FooterProps {
  companyName?: string;
  year?: number;
}
import { useState } from 'react';
import { FaX } from 'react-icons/fa6';
import { Heading } from '@/components/atoms';

type ModalType = 'about' | 'privacy' | 'terms' | null;

const StyledFooter = styled.footer`
  background-color: ${theme.colors.text.primary};
  color: ${theme.colors.text.inverse};
  padding: ${theme.spacing['3xl']} 0;
  margin-top: ${theme.spacing['4xl']};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
    margin-top: ${theme.spacing['2xl']};
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing['2xl']};
  margin-bottom: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  h4 {
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.inverse};
    margin-bottom: ${theme.spacing.sm};
  }

  a {
    color: ${theme.colors.text.inverse};
    text-decoration: none;
    opacity: 0.8;
    transition: opacity ${theme.transitions.fast};

    &:hover {
      opacity: 1;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
    text-align: center;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.borderRadius.full};
    transition: background-color ${theme.transitions.fast};

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;
const ModalOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: ${theme.colors.background.main};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['3xl']};
  max-width: 720px;
  width: 94%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.32);
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${theme.spacing.md};
  right: ${theme.spacing.md};
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${theme.colors.text.primary};
`;

const ModalTitle = styled(Heading)`
  margin-bottom: ${theme.spacing.lg};
`;

const ModalText = styled(Text)`
  margin-bottom: ${theme.spacing.md};
  color: ${theme.colors.text.secondary};
`;

const ModalSection = styled.div`
  margin-bottom: ${theme.spacing['2xl']};
`;

export const Footer: React.FC<FooterProps> = ({ companyName = 'LexIA', year = new Date().getFullYear() }) => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const closeModal = () => setOpenModal(null);

  const renderModal = () => {
    if (!openModal) return null;

    if (openModal === 'about') {
      return (
        <ModalOverlay isOpen={true} onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal} aria-label="Cerrar">
              <FaX />
            </CloseButton>
            <ModalTitle level={2}>Acerca de LexIA</ModalTitle>
            <ModalSection>
              <ModalText size="sm">
                <strong>LexIA</strong> fue fundada en 2025 con la misión de facilitar el acceso a información legal estandarizada y confiable.
                Somos una empresa en crecimiento enfocada en llevar asesoría legal accesible directamente a tu dispositivo.
              </ModalText>
              <ModalText size="sm">
                Nuestra plataforma combina modelos de lenguaje y bases de conocimiento para ofrecer respuestas rápidas, precisas y contextualizadas.
              </ModalText>
            </ModalSection>

            <ModalSection>
              <h3>Nuestra misión</h3>
              <ModalText size="sm">Democratizar el acceso a información legal, reducir barreras económicas y temporales, y empoderar a las personas para que conozcan y defiendan sus derechos.</ModalText>
            </ModalSection>

            <ModalSection>
              <h3>Visión y compromiso</h3>
              <ModalText size="sm">Ser el asistente legal líder en la región, manteniendo altos estándares de privacidad, precisión y actualización legal continua.</ModalText>
            </ModalSection>
          </ModalContent>
        </ModalOverlay>
      );
    }

    if (openModal === 'privacy') {
      return (
        <ModalOverlay isOpen={true} onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal} aria-label="Cerrar">
              <FaX />
            </CloseButton>
            <ModalTitle level={2}>Política de Privacidad</ModalTitle>
            <ModalSection>
              <h3>Recopilación</h3>
              <ModalText size="sm">Recopilamos solo los datos necesarios para prestar el servicio: nombre, correo, y datos asociados a tus consultas. También usamos datos técnicos para mejorar la plataforma.</ModalText>
            </ModalSection>

            <ModalSection>
              <h3>Uso</h3>
              <ModalText size="sm">Usamos la información para proporcionar el servicio, mejorar resultados, enviar notificaciones relevantes y analizar el uso para mantener la calidad del servicio.</ModalText>
            </ModalSection>

            <ModalSection>
              <h3>Seguridad</h3>
              <ModalText size="sm">Implementamos encriptación en tránsito y reposo, controles de acceso y prácticas de seguridad para proteger tus datos. No compartimos información personal sin tu consentimiento, salvo requerimiento legal.</ModalText>
            </ModalSection>

            <ModalSection>
              <h3>Tus derechos</h3>
              <ModalText size="sm">Puedes solicitar acceso, rectificación o eliminación de tus datos contactando privacy@lexia.com.</ModalText>
            </ModalSection>
          </ModalContent>
        </ModalOverlay>
      );
    }

    if (openModal === 'terms') {
      return (
        <ModalOverlay isOpen={true} onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal} aria-label="Cerrar">
              <FaX />
            </CloseButton>
            <ModalTitle level={2}>Términos y Condiciones</ModalTitle>
            <ModalSection>
              <h3>Descripción del servicio</h3>
              <ModalText size="sm">LexIA ofrece información legal con fines orientativos mediante sistemas automatizados. No sustituye el asesoramiento jurídico profesional ni crea una relación abogado-cliente.</ModalText>
            </ModalSection>

            <ModalSection>
              <h3>Responsabilidad</h3>
              <ModalText size="sm">El servicio se proporciona "tal cual". No nos responsabilizamos por decisiones tomadas únicamente con base en la información provista sin consultar a un profesional cuando sea necesario.</ModalText>
            </ModalSection>

            <ModalSection>
              <h3>Conducta</h3>
              <ModalText size="sm">Queda prohibido el uso indebido de la plataforma, incluyendo accesos no autorizados, scraping masivo o transmisión de contenido ilegal.</ModalText>
            </ModalSection>

            <ModalSection>
              <h3>Contacto</h3>
              <ModalText size="sm">Para dudas sobre estos términos escribe a legal@lexia.com.</ModalText>
            </ModalSection>
          </ModalContent>
        </ModalOverlay>
      );
    }

    return null;
  };

  return (
    <>
      <StyledFooter>
        <Container>
          <FooterContent>
            <FooterSection>
              <h4>Producto</h4>
              <a href="#caracteristicas">Características</a>
              <a href="#demo">Demo</a>
              <a href="#tecnologia">Tecnología</a>
            </FooterSection>

            <FooterSection>
              <h4>Empresa</h4>
              <a onClick={() => setOpenModal('about')}>Acerca de</a>
              <a href="#blog">Blog</a>
              <a href="#contact">Contacto</a>
            </FooterSection>

            <FooterSection>
              <h4>Legal</h4>
              <a onClick={() => setOpenModal('privacy')}>Privacidad</a>
              <a onClick={() => setOpenModal('terms')}>Términos</a>
              <a href="#cookies">Cookies</a>
            </FooterSection>
          </FooterContent>

          <FooterBottom>
            <Text size="sm" color="inverse">
              © {year} {companyName}. Todos los derechos reservados.
            </Text>
          </FooterBottom>
        </Container>
      </StyledFooter>
      {renderModal()}
    </>
  );
};

