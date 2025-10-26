import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { FeatureCard } from '@/components/molecules/FeatureCard';
import { Heading, Text } from '@/components/atoms';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesProps {
  title: string;
  subtitle?: string;
  features: Feature[];
}

const StyledFeatures = styled.section`
  background-color: ${theme.colors.background.main};
  padding: ${theme.spacing['4xl']} 0;

  @media (max-width: ${theme.breakpoints.lg}) {
    padding: ${theme.spacing['3xl']} 0;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing['2xl']} 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing['3xl']};

  h2 {
    margin-bottom: ${theme.spacing.md};
  }

  p {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-bottom: ${theme.spacing['2xl']};
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing.lg};
  }
`;

export const Features: React.FC<FeaturesProps> = ({ title, subtitle, features }) => {
  return (
    <StyledFeatures id="caracteristicas">
      <Container>
        <SectionHeader>
          <Heading level={2}>{title}</Heading>
          {subtitle && (
            <Text size="lg" color="secondary">
              {subtitle}
            </Text>
          )}
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </FeaturesGrid>
      </Container>
    </StyledFeatures>
  );
};

