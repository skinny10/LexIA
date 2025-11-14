import { ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';
import aiIllustration from '../src/assets/ai-illustration-manos.jpg';
import { theme } from '@/styles/theme';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { Header, Hero, DemoSection, FeaturesSection, HowItWorks, WhyUseLexIA, TechnologyStack, FooterSection } from '@/components';
import AvisoDePrivacidad from '@/components/organisms/AvisoDePrivacidad';
import { useEffect, useState } from 'react';
import AnimatedSection from '@/components/AnimatedSection';

function App() {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');

  useEffect(() => {
    const onPop = () => setCurrentPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // simple navigation handler used by FooterSection 'Ver más' button
  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
    }
  };
  const handlePrimaryClick = () => {
    console.log('Primary button clicked');
  };

  const handleSecondaryClick = () => {
    console.log('Secondary button clicked');
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header logoText="LexIA" />
      {currentPath === '/aviso-de-privacidad' ? (
        <AnimatedSection>
          <AvisoDePrivacidad />
        </AnimatedSection>
      ) : (
        <>
          <AnimatedSection>
            <Hero
              title="Tu Asistente Legal Inteligente"
              subtitle="Obtén respuestas legales instantáneas con IA"
              description="Obtén respuestas legales instantáneas con IA. Pregunta en lenguaje natural y recibe orientación legal precisa, referencias a leyes aplicables y pasos a seguir."
              primaryButtonText="Ver Aplicación en Revisión"
              secondaryButtonText="Ver Planes"
              illustrationImage={aiIllustration}
              onPrimaryClick={handlePrimaryClick}
              onSecondaryClick={handleSecondaryClick}
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <DemoSection />
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <FeaturesSection />
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <TechnologyStack />
          </AnimatedSection>
          <AnimatedSection delay={0.8}>
            <HowItWorks />
          </AnimatedSection>
          <AnimatedSection delay={1.0}>
            <WhyUseLexIA />
          </AnimatedSection>
          <AnimatedSection delay={1.2}>
            <FooterSection navigateTo={navigateTo} />
          </AnimatedSection>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
