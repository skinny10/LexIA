// Paleta de colores basada en el diseño de LexIA
export const theme = {
  colors: {
    primary: {
      light: '#F8F4EF',     // Versión más clara del primary
      main: '#F8F4EF',      // Primary - Fondo de Pantalla
      dark: '#E8D5C8',      // Versión más oscura
      darker: '#D4BBA8',    // Versión aún más oscura
    },
    secondary: {
      light: '#E8ADA0',     // Versión más clara
      main: '#D19A86',      // Secondary - Botones de Acción
      dark: '#B8876F',      // Versión más oscura
    },
    tertiary: {
      light: '#4A3F3A',     // Versión más clara
      main: '#3D2E28',      // Tertiary - Texto Principal / Iconos
      dark: '#2D1F1A',      // Versión más oscura
    },
    accent: {
      light: '#F4E8E0',     // Versión más clara
      main: '#E8D9CE',      // Accent - Acentos Sutiles / Bordes
      dark: '#D9C4B5',      // Versión más oscura
    },
    background: {
      light: '#FFFFFF',
      main: '#F8F4EF',      // Fondo principal
      dark: '#F0EBE6',
    },
    text: {
      primary: '#3D2E28',   // Texto principal (tertiary)
      secondary: '#6B5B54', // Texto secundario (más claro que tertiary)
      light: '#9A8A82',     // Texto claro
      inverse: '#FFFFFF',   // Texto inverso (sobre fondos oscuros)
    },
    border: '#E8D9CE',      // Accent para bordes
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    
    // Color específico para el Hero
    hero: {
      background: '#F8F4EF',  // Primary color
    },
  },
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      secondary: '"Poppins", sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem',
    '5xl': '5rem',
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(61, 46, 40, 0.05)',
    md: '0 4px 6px -1px rgba(61, 46, 40, 0.1)',
    lg: '0 10px 15px -3px rgba(61, 46, 40, 0.1)',
    xl: '0 20px 25px -5px rgba(61, 46, 40, 0.1)',
    '2xl': '0 25px 50px -12px rgba(61, 46, 40, 0.25)',
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  transitions: {
    fast: '150ms ease-in-out',
    base: '250ms ease-in-out',
    slow: '350ms ease-in-out',
  },
};

export type Theme = typeof theme;