import { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { NavLink } from '@/components/molecules';
import { Button } from '@/components/atoms';

interface HeaderProps {
  logo?: string;
  logoText?: string;
}

const StyledHeader = styled.header`
  background-color: ${theme.colors.background.light};
  padding: ${theme.spacing.md} 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${theme.shadows.sm};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.sm} 0;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing.xl};
  position: relative;

  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.md};
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;

  img {
    height: 40px;
    width: auto;
  }

  .logo-bubble {
    height: 40px;
    width: 40px;
    flex-shrink: 0;
  }

  span {
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.text.primary};
    font-family: ${theme.typography.fontFamily.secondary};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    img {
      height: 32px;
    }

    .logo-bubble {
      height: 32px;
      width: 32px;
    }

    span {
      font-size: ${theme.typography.fontSize.lg};
    }
  }
`;

const NavMenu = styled.nav<{ $isOpen: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    background-color: ${theme.colors.background.main};
    padding: ${theme.spacing.lg};
    gap: ${theme.spacing.md};
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    box-shadow: ${theme.shadows.md};
    z-index: 99;
    overflow-y: auto;
  }
`;

const MobileMenuButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xs};
    z-index: 101;

    span {
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.text.primary};
      transition: all ${theme.transitions.fast};

      &:nth-child(1) {
        transform: ${(props) => (props.$isOpen ? 'rotate(45deg) translateY(10px)' : 'rotate(0)')};
      }

      &:nth-child(2) {
        opacity: ${(props) => (props.$isOpen ? '0' : '1')};
      }

      &:nth-child(3) {
        transform: ${(props) => (props.$isOpen ? 'rotate(-45deg) translateY(-10px)' : 'rotate(0)')};
      }
    }
  }
`;

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Demo', href: '#demo' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Tecnología', href: '#tecnologia' },
];

export const Header: React.FC<HeaderProps> = ({ logo, logoText = 'LexIA' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent) => {
    setIsMenuOpen(false);
  };

  return (
    <StyledHeader>
      <Container>
        <HeaderContent>
          <LogoSection>
            <img src="/ai-bubble.png" alt="AI Bubble" className="logo-bubble" />
            <span>{logoText}</span>
          </LogoSection>

          <NavMenu $isOpen={isMenuOpen}>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={handleNavClick}>
                {item.label}
              </NavLink>
            ))}
          </NavMenu>

          <MobileMenuButton $isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span />
            <span />
            <span />
          </MobileMenuButton>
        </HeaderContent>
      </Container>
    </StyledHeader>
  );
};

