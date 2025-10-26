import styled from 'styled-components';
import { theme } from '@/styles/theme';
import { Container } from '@/components/molecules';
import { Heading, Text } from '@/components/atoms';

interface Technology {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface TechStackProps {
  title: string;
  subtitle?: string;
  technologies: Technology[];
}

const StyledTechStack = styled.section`
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing['2xl']};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.xl};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.xl};
  background: ${theme.colors.background.dark};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.border};
  transition: all ${theme.transitions.base};
  text-align: center;

  &:hover {
    border-color: ${theme.colors.primary.main};
    box-shadow: ${theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const IconWrapper = styled.div`
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechName = styled(Text)`
  font-weight: ${theme.typography.fontWeight.semibold};
`;

export const TechStack: React.FC<TechStackProps> = ({ title, subtitle, technologies }) => {
  return (
    <StyledTechStack id="tecnologia">
      <Container>
        <SectionHeader>
          <Heading level={2}>{title}</Heading>
          {subtitle && (
            <Text size="lg" color="secondary">
              {subtitle}
            </Text>
          )}
        </SectionHeader>

        <TechGrid>
          {technologies.map((tech) => (
            <TechItem key={tech.id}>
              <IconWrapper>{tech.icon}</IconWrapper>
              <TechName size="base">{tech.name}</TechName>
            </TechItem>
          ))}
        </TechGrid>
      </Container>
    </StyledTechStack>
  );
};

