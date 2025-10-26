import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const getMaxWidth = (maxWidth: string) => {
  const widths = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    full: '100%',
  };
  return widths[maxWidth as keyof typeof widths] || widths.xl;
};

const getPadding = (padding: string) => {
  const paddings = {
    sm: theme.spacing.md,
    md: theme.spacing.lg,
    lg: theme.spacing.xl,
    xl: theme.spacing['2xl'],
  };
  return paddings[padding as keyof typeof paddings] || paddings.lg;
};

const StyledContainer = styled.div<{
  $maxWidth: string;
  $padding: string;
}>`
  width: 100%;
  max-width: ${(props) => getMaxWidth(props.$maxWidth)};
  margin: 0 auto;
  padding: 0 ${(props) => getPadding(props.$padding)};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing.sm};
  }
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 'xl',
  padding = 'lg',
  className,
}) => {
  return (
    <StyledContainer $maxWidth={maxWidth} $padding={padding} className={className}>
      {children}
    </StyledContainer>
  );
};

