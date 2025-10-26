import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

interface DemoProps {
  title: string;
  subtitle?: string;
  demoImage?: string;
  description?: string;
}

const StyledDemo = styled.section`
  background: linear-gradient(135deg, ${theme.colors.primary.light} 0%, ${theme.colors.background.light} 100%);
  padding: ${theme.spacing['4xl']} 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const DemoContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing['3xl']};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    gap: ${theme.spacing['2xl']};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.xl};
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};

  h2 {
    margin-bottom: ${theme.spacing.md};
  }
`;

const DemoImageWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: ${theme.borderRadius['2xl']};
  overflow: hidden;
  box-shadow: ${theme.shadows.xl};

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    order: -1;
  }
`;

export const Demo: React.FC<DemoProps> = ({ title, subtitle, demoImage, description }) => {
  return (
    <StyledDemo id="demo">
      <Container>
        <DemoContent>
          <TextSection>
            <Heading level={2}>{title}</Heading>
            {subtitle && (
              <Text size="lg" weight="semibold" color="secondary">
                {subtitle}
              </Text>
            )}
            {description && (
              <Text size="base" color="secondary">
                {description}
              </Text>
            )}
          </TextSection>

          {demoImage && (
            <DemoImageWrapper>
              <img src={demoImage} alt={title} />
            </DemoImageWrapper>
          )}
        </DemoContent>
      </Container>
    </StyledDemo>
  );
};

