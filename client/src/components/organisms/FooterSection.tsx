import styled from 'styled-components';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaX, FaTwitter } from 'react-icons/fa6';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Text, Heading } from '@/components/atoms';

const StyledFooter = styled.footer`
  background-color: ${theme.colors.tertiary.main};
  color: ${theme.colors.text.inverse};
  padding: ${theme.spacing['3xl']} 0;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  margin-bottom: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing['2xl']};
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};

  img {
    height: 40px;
    width: auto;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    font-size: ${theme.typography.fontSize.sm};
    line-height: ${theme.typography.lineHeight.relaxed};
  }
`;

const BrandRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};

  img {
    height: 40px;
    width: auto;
    display: block;
  }

  span {
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.inverse};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    span {
      font-size: ${theme.typography.fontSize.base};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  a {
    width: 40px;
    height: 40px;
    background-color: ${theme.colors.secondary.main};
    border-radius: ${theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.text.inverse};
    text-decoration: none;
    transition: all ${theme.transitions.fast};
    font-size: 18px;

    &:hover {
      background-color: ${theme.colors.secondary.dark};
      transform: scale(1.1);
    }
  }
`;

const FooterCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  h4 {
    font-size: ${theme.typography.fontSize.base};
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.inverse};
    margin-bottom: ${theme.spacing.sm};
  }

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: ${theme.typography.fontSize.sm};
    transition: all ${theme.transitions.fast};
    position: relative;
    width: fit-content;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${theme.colors.secondary.main};
      transition: width ${theme.transitions.base};
    }

    &:hover {
      color: ${theme.colors.text.inverse};
      
      &::after {
        width: 100%;
      }
    }
  }
`;

const FooterDivider = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: ${theme.spacing.xl};
  margin-top: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    padding-top: ${theme.spacing.md};
    margin-top: ${theme.spacing.md};
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

const FooterText = styled(Text)`
  color: rgba(255, 255, 255, 0.7);
  font-size: ${theme.typography.fontSize.xs};
`;

const Disclaimer = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: ${theme.typography.fontSize.xs};
  text-align: center;
  margin-top: ${theme.spacing.lg};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${theme.borderRadius.md};
  border-left: 3px solid ${theme.colors.secondary.main};
`;

export const FooterSection: React.FC = () => {
  const [openModal, setOpenModal] = useState<'about' | 'privacy' | 'terms' | null>(null);

  const closeModal = () => setOpenModal(null);

  const ModalOverlay = styled.div<{ isOpen: boolean }>`
    position: fixed;
    inset: 0;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
    z-index: 1000;
  `;

  const ModalContent = styled.div`
    background: ${theme.colors.background.main};
    color: ${theme.colors.text.primary};
    border-radius: ${theme.borderRadius.xl};
    padding: ${theme.spacing['3xl']};
    max-width: 720px;
    width: 92%;
    max-height: 80vh;
    overflow-y: auto;
    position: relative;
  `;

  const CloseButton = styled.button`
    position: absolute;
    top: ${theme.spacing.md};
    right: ${theme.spacing.md};
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: ${theme.colors.text.primary};
  `;

  const ModalTitle = styled(Heading)`
    margin-bottom: ${theme.spacing.lg};
  `;

  const ModalText = styled(Text)`
    color: ${theme.colors.text.secondary};
    margin-bottom: ${theme.spacing.md};
  `;

  const ModalSection = styled.div`
    margin-bottom: ${theme.spacing['2xl']};
  `;

  return (
    <>
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterBrand>
            <BrandRow>
              <img src="/logo.png" alt="LexIA" />
              <span>LexIA</span>
            </BrandRow>
            <Text size="sm" color="inverse">
              Democratizando el acceso a la orientación legal con inteligencia artificial de vanguardia. Respuestas legales precisas, instantáneas y accesibles para todos.
            </Text>
            <SocialLinks>
              <a href="#facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="#instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
            </SocialLinks>
          </FooterBrand>

          <FooterCol>
            <h4>Producto</h4>
            <a href="#caracteristicas">Características</a>
            <a href="#tecnologia">Tecnología</a>
          </FooterCol>

          <FooterCol>
            <h4>Empresa</h4>
            <a onClick={() => setOpenModal('about')}>Sobre Nosotros</a>
            <a onClick={() => setOpenModal('terms')}>Términos y Condiciones</a>
            <a onClick={() => setOpenModal('privacy')}>Privacidad</a>
          </FooterCol>
        </FooterContent>

        <FooterDivider>
          <FooterBottom>
            <FooterText size="xs">© 2025 LexIA. Todos los derechos reservados.</FooterText>
            <FooterText size="xs">🌎 Hecho en México con tecnología global</FooterText>
          </FooterBottom>
          <Disclaimer>
            LexIA proporciona orientación legal general. No sustituye el consejo de un abogado licenciado para casos específicos.
          </Disclaimer>
        </FooterDivider>
      </Container>
    </StyledFooter>

    {/* Modales */}
    {openModal === 'about' && (
      <ModalOverlay isOpen={true} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal} aria-label="Cerrar">
            <FaX />
          </CloseButton>
          <ModalTitle level={2}>Sobre LexIA</ModalTitle>
          <ModalText size="sm">LexIA fue fundada en 2025 con la misión de facilitar el acceso a información legal a través de tecnología y modelos de lenguaje. Somos una empresa en crecimiento, enfocada en entregar información clara, accesible y práctica a los usuarios desde sus dispositivos.</ModalText>
          <ModalText size="sm">Nuestra visión es convertirnos en el asistente legal de referencia en México, combinando precisión, privacidad y disponibilidad 24/7.</ModalText>
        </ModalContent>
      </ModalOverlay>
    )}

    {openModal === 'privacy' && (
      <ModalOverlay isOpen={true} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal} aria-label="Cerrar">
            <FaX />
          </CloseButton>
          <ModalTitle level={2}>Política de Privacidad</ModalTitle>
          <ModalText size="sm">Recopilamos únicamente los datos necesarios para prestar el servicio (p. ej. correo, nombre y detalles de consulta). Usamos medidas de seguridad para proteger la información y no compartimos datos personales sin consentimiento, salvo obligaciones legales.</ModalText>
  
        </ModalContent>
      </ModalOverlay>
    )}

    {openModal === 'terms' && (
      <ModalOverlay isOpen={true} onClick={closeModal}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={closeModal} aria-label="Cerrar">
            <FaX />
          </CloseButton>
          <ModalTitle level={2}>Términos y Condiciones</ModalTitle>
          <ModalText size="sm">LexIA ofrece información de carácter orientativo y no constituye asesoramiento legal profesional ni una relación abogado-cliente. El uso del servicio implica aceptación de estos términos.</ModalText>
          <ModalText size="sm">Queda prohibido el uso indebido, el acceso no autorizado y el scraping masivo.</ModalText>
        </ModalContent>
      </ModalOverlay>
    )}
    </>
  );
};