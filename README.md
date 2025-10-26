# LexIA Landing Page

Una landing page moderna y 100% responsiva para **LexIA**, un asistente legal inteligente basado en IA. Construida con React, TypeScript, Styled Components y Tailwind CSS.

## Características

✨ **Diseño 100% Responsivo**
- Optimizado para dispositivos móviles, tablets y desktop
- Breakpoints personalizados para diferentes tamaños de pantalla
- Menú hamburguesa animado en dispositivos móviles

🎨 **Arquitectura Atomic Design**
- Componentes organizados en átomos, moléculas, organismos y templates
- Reutilización máxima de componentes
- Mantenimiento y escalabilidad mejorados

⚡ **Tecnología Moderna**
- React 19 con TypeScript
- Styled Components para estilos dinámicos
- Tailwind CSS para utilidades
- Vite como bundler

🎯 **Componentes Incluidos**
- Header con navegación responsive
- Sección Hero con call-to-action
- Sección de Características (6 características)
- Sección Demo
- Sección de Tecnología (8 tecnologías)
- Footer con enlaces y redes sociales

## Estructura del Proyecto

```
client/
├── src/
│   ├── components/
│   │   ├── atoms/           # Elementos básicos (Button, Heading, Text)
│   │   ├── molecules/       # Combinaciones de átomos (Container, NavLink, FeatureCard)
│   │   ├── organisms/       # Secciones complejas (Header, Hero, Features, Demo, TechStack, Footer)
│   │   └── templates/       # Layouts de página (vacío para esta versión)
│   ├── styles/
│   │   ├── theme.ts         # Configuración de tema y colores
│   │   └── GlobalStyles.ts  # Estilos globales
│   ├── hooks/
│   │   └── useMediaQuery.ts # Hooks para media queries
│   ├── assets/              # Imágenes y recursos
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Punto de entrada
│   └── index.css            # Estilos base
├── public/                  # Archivos estáticos
└── package.json
```

## Instalación

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev

# Construir para producción
pnpm build

# Vista previa de producción
pnpm preview
```

## Paleta de Colores

| Nombre | Color | Uso |
|--------|-------|-----|
| Primary | #7C3AED | Botones principales, acentos |
| Secondary | #3B82F6 | Enlaces, textos secundarios |
| Background | #FFFFFF | Fondo principal |
| Text Primary | #1F2937 | Texto principal |
| Text Secondary | #6B7280 | Texto secundario |

## Tipografía

- **Fuente Principal**: Inter
- **Fuente Secundaria**: Poppins (para headings)
- **Tamaños**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl

## Responsividad

Breakpoints utilizados:

- **xs**: 320px (móviles pequeños)
- **sm**: 640px (móviles)
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)
- **2xl**: 1536px (desktops grandes)

## Componentes Principales

### Header
Navegación sticky con logo y menú responsive. Incluye animación de hamburguesa en móviles.

### Hero
Sección principal con título, descripción y dos botones de call-to-action. Incluye ilustración de IA.

### Features
Grid de 6 características con iconos, títulos y descripciones. Responsive a 3 columnas (desktop), 2 (tablet), 1 (móvil).

### Demo
Sección con descripción y imagen de demostración. Layout alternado en móviles.

### TechStack
Grid de 8 tecnologías con iconos. Responsive a 4 columnas (desktop), 3 (tablet), 2 (móvil).

### Footer
Footer con enlaces organizados en 3 columnas, redes sociales y copyright.

## Customización

### Cambiar Colores

Edita `client/src/styles/theme.ts`:

```typescript
colors: {
  primary: {
    light: '#E8D5F2',
    main: '#A78BFA',
    dark: '#7C3AED',
    darker: '#5B21B6',
  },
  // ... más colores
}
```

### Cambiar Contenido

Edita `client/src/App.tsx` para cambiar:
- Textos de secciones
- Características
- Tecnologías
- Imágenes

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `client/src/components/organisms/`
2. Importa y usa en `client/src/App.tsx`
3. Asegúrate de mantener la responsividad con media queries

## Mejores Prácticas Implementadas

✅ Mobile-first design
✅ Semantic HTML
✅ Accesibilidad (focus states, contrast)
✅ Performance optimization
✅ Clean code architecture
✅ Reusable components
✅ Consistent styling
✅ SEO-friendly structure

## Navegación

La navegación incluye smooth scrolling a las siguientes secciones:

- Inicio (#inicio)
- Demo (#demo)
- Características (#caracteristicas)
- Tecnología (#tecnologia)

## Licencia

MIT

## Autor

Desarrollado con ❤️ para LexIA

---

**Última actualización**: Octubre 2025

