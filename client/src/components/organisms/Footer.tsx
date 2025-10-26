import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Text } from '@/components/atoms';

interface FooterProps {
  companyName?: string;
  year?: number;
}

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

export const Footer: React.FC<FooterProps> = ({ companyName = 'LexIA', year = new Date().getFullYear() }) => {
  return (
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
            <a href="#about">Acerca de</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contacto</a>
          </FooterSection>

          <FooterSection>
            <h4>Legal</h4>
            <a href="#privacy">Privacidad</a>
            <a href="#terms">Términos</a>
            <a href="#cookies">Cookies</a>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Text size="sm" color="inverse">
            © {year} {companyName}. Todos los derechos reservados.
          </Text>
          <SocialLinks>
            <a href="#twitter" title="Twitter">
              𝕏
            </a>
            <a href="#linkedin" title="LinkedIn">
              in
            </a>
            <a href="#github" title="GitHub">
              ⚙
            </a>
          </SocialLinks>
        </FooterBottom>
      </Container>
    </StyledFooter>
  );
};

