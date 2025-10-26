import styled from 'styled-components';
import { theme } from '@/styles/theme';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const HeadingBase = styled.div<{ $level: number }>`
  font-family: ${theme.typography.fontFamily.secondary};
  font-weight: ${theme.typography.fontWeight.bold};
  line-height: ${theme.typography.lineHeight.tight};
  color: ${theme.colors.text.primary};

  ${(props) => {
    const sizes = {
      1: `font-size: ${theme.typography.fontSize['5xl']};`,
      2: `font-size: ${theme.typography.fontSize['4xl']};`,
      3: `font-size: ${theme.typography.fontSize['3xl']};`,
      4: `font-size: ${theme.typography.fontSize['2xl']};`,
      5: `font-size: ${theme.typography.fontSize.xl};`,
      6: `font-size: ${theme.typography.fontSize.lg};`,
    };
    return sizes[props.$level as keyof typeof sizes] || sizes[1];
  }}

  @media (max-width: ${theme.breakpoints.md}) {
    ${(props) => {
      const mobileSizes = {
        1: `font-size: ${theme.typography.fontSize['3xl']};`,
        2: `font-size: ${theme.typography.fontSize['2xl']};`,
        3: `font-size: ${theme.typography.fontSize.xl};`,
        4: `font-size: ${theme.typography.fontSize.lg};`,
        5: `font-size: ${theme.typography.fontSize.base};`,
        6: `font-size: ${theme.typography.fontSize.sm};`,
      };
      return mobileSizes[props.$level as keyof typeof mobileSizes] || mobileSizes[1];
    }}
  }
`;

export const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const;
  const Tag = tags[level - 1];

  return (
    <HeadingBase as={Tag} $level={level} className={className}>
      {children}
    </HeadingBase>
  );
};

