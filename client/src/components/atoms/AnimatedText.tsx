import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '@/styles/theme';

interface AnimatedTextProps {
  text: string;
  delay?: number;
}

const LetterSpan = styled(motion.span)`
  display: inline-block;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  font-family: inherit;
  letter-spacing: 0.02em;
  margin-right: 0.02em;
  
  // Añadimos un espacio extra después de ciertas letras
  &:after {
    content: '';
    display: inline;
    white-space: pre;
    margin-right: ${props => 
      /[AaEeIiOoUu]/.test(props.children as string) ? '0.05em' : 
      /[.,!?]/.test(props.children as string) ? '0.4em' : 
      /[ ]/.test(props.children as string) ? '0.2em' : '0'
    };
  }
`;

const TextWrapper = styled.span`
  display: inline;
`;

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, delay = 0 }) => {
  return (
    <TextWrapper>
      {text.split('').map((char, index) => (
        <LetterSpan
          key={index}
          initial={{ color: theme.colors.text.primary }}
          animate={{
            color: [
              theme.colors.text.primary,
              theme.colors.primary.light,
              theme.colors.primary.main,
              theme.colors.primary.dark,
            ],
          }}
          transition={{
            duration: 1.5,
            delay: delay + index * 0.1,
            repeat: 0,
            ease: "easeOut"
          }}
        >
          {char}
        </LetterSpan>
      ))}
    </TextWrapper>
  );
};

export default AnimatedText;