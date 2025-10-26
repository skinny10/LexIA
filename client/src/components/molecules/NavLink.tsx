import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const StyledNavLink = styled.a<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? theme.colors.primary.dark : theme.colors.text.primary)};
  text-decoration: none;
  font-weight: ${(props) => (props.$active ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal)};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  position: relative;
  transition: all ${theme.transitions.fast};
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.$active 
      ? 'linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF)'
      : 'transparent'
    };
    background-size: 200% 100%;
    transition: all 0.3s ease;
    transform: scaleX(${props => props.$active ? 1 : 0});
    animation: ${props => props.$active ? 'rainbow 2s linear infinite' : 'none'};
  }

  &:hover {
    color: ${theme.colors.primary.dark};
    transform: translateY(-2px);
    
    &::before {
      transform: scaleX(1);
      background: linear-gradient(90deg, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8B00FF);
      background-size: 200% 100%;
      animation: rainbow 2s linear infinite;
    }
  }

  @keyframes rainbow {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md} ${theme.spacing.md};
    border-radius: ${theme.borderRadius.md};
    
    &::before {
      width: 4px;
      height: 100%;
      left: 0;
      bottom: 0;
      transform: scaleY(${props => props.$active ? 1 : 0});
    }

    &:hover {
      transform: translateX(8px);
      background: rgba(255, 255, 255, 0.1);
      
      &::before {
        transform: scaleY(1);
      }
    }
  }
`;

export const NavLink: React.FC<NavLinkProps> = ({ href, children, active = false, onClick }) => {
  return (
    <StyledNavLink href={href} $active={active} onClick={onClick}>
      {children}
    </StyledNavLink>
  );
};

