import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Text } from '@/components/atoms';

const StyledFooter = styled.footer`
  background-color: #1a2332;
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
    color: rgba(255, 255, 255, 0.7);
    font-size: ${theme.typography.fontSize.sm};
    line-height: ${theme.typography.lineHeight.relaxed};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};

  a {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: ${theme.borderRadius.full};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.text.inverse};
    text-decoration: none;
    transition: background-color ${theme.transitions.fast};
    font-size: 18px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
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
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    font-size: ${theme.typography.fontSize.sm};
    transition: color ${theme.transitions.fast};

    &:hover {
      color: ${theme.colors.text.inverse};
    }
  }
`;

const FooterDivider = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: ${theme.spacing['2xl']};
  margin-top: ${theme.spacing['2xl']};
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
  color: rgba(255, 255, 255, 0.6);
  font-size: ${theme.typography.fontSize.xs};
`;

const Disclaimer = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: ${theme.typography.fontSize.xs};
  text-align: center;
  margin-top: ${theme.spacing.lg};
`;

export const FooterSection: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterBrand>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logo.png" alt="LexIA" style={{ height: '40px' }} />
              <span style={{ fontSize: '24px', fontWeight: 'bold' }}>LexIA</span>
            </div>
            <Text size="sm" color="inverse">
              Democratizando el acceso a la orientación legal con inteligencia artificial de vanguardia. Respuestas legales precisas, instantáneas y accesibles para todos.
            </Text>
            <SocialLinks>
              <a href="#facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
              <a href="#twitter" title="X (Twitter)" target="_blank" rel="noopener noreferrer">
                <FaXTwitter size={20} />
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
            <a href="#app">App en Playstore</a>
          </FooterCol>

          <FooterCol>
            <h4>Empresa</h4>
            <a href="#about">Sobre Nosotros</a>
            <a href="#terms">Términos y Condiciones</a>
            <a href="#privacy">Privacidad</a>
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
  );
};

