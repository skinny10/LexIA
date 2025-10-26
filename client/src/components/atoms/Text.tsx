import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface TextProps {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'light' | 'inverse';
  children: React.ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

const getSizeStyles = (size: string) => {
  const sizes = {
    xs: theme.typography.fontSize.xs,
    sm: theme.typography.fontSize.sm,
    base: theme.typography.fontSize.base,
    lg: theme.typography.fontSize.lg,
    xl: theme.typography.fontSize.xl,
  };
  return sizes[size as keyof typeof sizes] || sizes.base;
};

const getWeightStyles = (weight: string) => {
  const weights = {
    light: theme.typography.fontWeight.light,
    normal: theme.typography.fontWeight.normal,
    medium: theme.typography.fontWeight.medium,
    semibold: theme.typography.fontWeight.semibold,
    bold: theme.typography.fontWeight.bold,
  };
  return weights[weight as keyof typeof weights] || weights.normal;
};

const getColorStyles = (color: string) => {
  const colors = {
    primary: theme.colors.text.primary,
    secondary: theme.colors.text.secondary,
    light: theme.colors.text.light,
    inverse: theme.colors.text.inverse,
  };
  return colors[color as keyof typeof colors] || colors.primary;
};

const StyledText = styled.p<{
  $size: string;
  $weight: string;
  $color: string;
}>`
  font-size: ${(props) => getSizeStyles(props.$size)};
  font-weight: ${(props) => getWeightStyles(props.$weight)};
  color: ${(props) => getColorStyles(props.$color)};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin: 0;
`;

export const Text: React.FC<TextProps> = ({
  size = 'base',
  weight = 'normal',
  color = 'primary',
  children,
  className,
  as = 'p'
}) => {
  return (
    <StyledText 
      as={as}
      $size={size} 
      $weight={weight} 
      $color={color} 
      className={className}
    >
      {children}
    </StyledText>
  );
};

