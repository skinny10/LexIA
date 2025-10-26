import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const getVariantStyles = (variant: string) => {
  switch (variant) {
    case 'secondary':
      return `
        background-color: ${theme.colors.secondary.main};
        color: ${theme.colors.text.inverse};
        border: 2px solid ${theme.colors.secondary.main};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.secondary.dark};
          border-color: ${theme.colors.secondary.dark};
        }
      `;
    case 'outline':
      return `
        background-color: transparent;
        color: ${theme.colors.primary.dark};
        border: 2px solid ${theme.colors.primary.dark};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary.light};
        }
      `;
    case 'primary':
    default:
      return `
        background-color: ${theme.colors.primary.dark};
        color: ${theme.colors.text.inverse};
        border: 2px solid ${theme.colors.primary.dark};

        &:hover:not(:disabled) {
          background-color: ${theme.colors.primary.darker};
          border-color: ${theme.colors.primary.darker};
        }
      `;
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case 'sm':
      return `
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        font-size: ${theme.typography.fontSize.sm};
      `;
    case 'lg':
      return `
        padding: ${theme.spacing.lg} ${theme.spacing['2xl']};
        font-size: ${theme.typography.fontSize.lg};
      `;
    case 'md':
    default:
      return `
        padding: ${theme.spacing.md} ${theme.spacing.xl};
        font-size: ${theme.typography.fontSize.base};
      `;
  }
};

const StyledButton = styled.button<{
  $variant: string;
  $size: string;
  $fullWidth?: boolean;
}>`
  ${(props) => getVariantStyles(props.$variant)}
  ${(props) => getSizeStyles(props.$size)}
  
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  border-radius: ${theme.borderRadius.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      90deg,
      rgba(255,255,255,0.1),
      rgba(255,255,255,0.3),
      rgba(255,255,255,0.1)
    );
    transform: translate(-50%, -50%) rotate(45deg);
    transition: 0.6s;
    opacity: 0;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);

    &::before {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(45deg) scale(1.5);
    }
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.2),
                0 8px 16px rgba(0,0,0,0.1);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    font-size: ${theme.typography.fontSize.sm};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  children,
  onClick,
  type = 'button',
}) => {
  return (
    <StyledButton
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};

