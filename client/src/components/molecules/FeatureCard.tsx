import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Heading, Text } from '@/components/atoms';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StyledCard = styled.div`
  background: ${theme.colors.background.main};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing['2xl']};
  box-shadow: ${theme.shadows.md};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  height: 100%;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.05) 100%
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &::after {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      ${theme.colors.primary.light}20,
      ${theme.colors.primary.main}20,
      ${theme.colors.primary.dark}20
    );
    transform: translate(-50%, -50%) rotate(0deg);
    animation: rotate 10s linear infinite;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: ${theme.colors.primary.main}40;
    box-shadow: 
      0 20px 40px -15px rgba(0,0,0,0.2),
      0 0 20px rgba(${theme.colors.primary.main}, 0.1);

    &::before {
      opacity: 1;
    }

    &::after {
      opacity: 0.5;
    }
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, 
    ${theme.colors.primary.light}40,
    ${theme.colors.primary.main}40
  );
  border-radius: ${theme.borderRadius.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg,
      ${theme.colors.primary.light},
      ${theme.colors.primary.main}
    );
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  svg {
    font-size: 28px;
    color: ${theme.colors.primary.main};
    transition: all 0.3s ease;
  }

  ${StyledCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg,
      ${theme.colors.primary.light}60,
      ${theme.colors.primary.main}60
    );

    svg {
      color: ${theme.colors.primary.dark};
      transform: scale(1.1);
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <StyledCard>
      <IconWrapper>{icon}</IconWrapper>
      <ContentWrapper>
        <Heading level={3}>{title}</Heading>
        <Text size="base" color="secondary">
          {description}
        </Text>
      </ContentWrapper>
    </StyledCard>
  );
};

