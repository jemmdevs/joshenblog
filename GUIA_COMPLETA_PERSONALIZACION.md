# 🎨 Guía Completa de Personalización de Posts

## ✅ Todas las Opciones de Personalización Disponibles

Tu blog ahora permite personalizar **cada post individualmente** con las siguientes opciones:

### 📋 Lista Completa de Campos Personalizables

| Campo | Descripción | Afecta a | Valor por defecto |
|-------|-------------|----------|-------------------|
| `bannerColor` | Color de fondo del banner | Página de detalle | `#C03540` (rojo) |
| `image` | Imagen del banner | Página de detalle | `/bannerIMG.png` |
| `authorAvatar` | Avatar del autor | Lista de posts | `/profileIMG.png` |
| `footerImage` | Imagen del footer | Página de detalle | `/footerIMG.png` |
| `navColor` | Color principal de navbar y botones | Página de detalle | `#C03540` (rojo) |
| `navHoverColor` | Color de hover | Página de detalle | `#C62F41` (rojo claro) |

---

## 🎯 Dónde se Aplican los Colores

### `navColor` (Color principal de navegación)
Este color se aplica a:
- ✅ Logo "SENRI" en la navbar
- ✅ Texto "WORKS" en la navbar
- ✅ Botones de email en navbar y footer
- ✅ Botón "View my Work" en el footer
- ✅ Enlaces sociales (GitHub, LinkedIn) en hover
- ✅ Línea inferior decorativa del footer

### `navHoverColor` (Color de hover)
Este color se aplica al pasar el ratón sobre:
- ✅ Botón "CONTACT" en la navbar
- ✅ Botones de email (efecto hover)
- ✅ Botones "View my Work" (efecto hover)
- ✅ Bordes de secciones en el menú móvil

---

## 📝 Ejemplo Completo: `post3.md`

Mira el archivo `post3.md` que tiene configurado **todos los campos personalizados**:

```yaml
---
title: "My Azuki-Style Inspired Blog"
description: "Why I based my site's design on Azuki's interface..."
date: 2025-08-24
author: "SENRI"

# 🎨 Personalización visual del post (todos los campos son opcionales)

# Color del fondo del banner
bannerColor: "#403E52"

# Imagen del banner (lado derecho)
image: "/bannerIMG2.png"

# Avatar en la lista de posts
authorAvatar: "/profileIMG2.png"

# Imagen del footer (solo en página de detalle)
footerImage: "/footerIMG2.png"

# Color principal de navbar y botones (solo en página de detalle)
navColor: "#5B21B6"

# Color de hover (solo en página de detalle)
navHoverColor: "#7C3AED"

tags: ["HCI", "UX", "design inspiration"]
---

Contenido del post aquí...
```

---

## 🎨 Ejemplos de Combinaciones de Colores

### Tema Azul Profesional
```yaml
bannerColor: "#1E40AF"
navColor: "#3B82F6"
navHoverColor: "#60A5FA"
```

### Tema Verde Natural
```yaml
bannerColor: "#065F46"
navColor: "#10B981"
navHoverColor: "#34D399"
```

### Tema Morado Moderno
```yaml
bannerColor: "#6B21A8"
navColor: "#8B5CF6"
navHoverColor: "#A78BFA"
```

### Tema Naranja Vibrante
```yaml
bannerColor: "#C2410C"
navColor: "#F59E0B"
navHoverColor: "#FBC02D"
```

### Tema Rosa Suave
```yaml
bannerColor: "#BE185D"
navColor: "#EC4899"
navHoverColor: "#F472B6"
```

---

## 📂 Estructura de Carpetas para Imágenes

### Opción Recomendada: Una carpeta por post

```
public/
  └── blog/
      ├── post1/
      │   ├── banner.png
      │   ├── avatar.png
      │   └── footer.png
      ├── post2/
      │   ├── banner.png
      │   ├── avatar.png
      │   └── footer.png
      └── post3/
          ├── banner.png
          ├── avatar.png
          └── footer.png
```

Luego en el frontmatter:
```yaml
image: "/blog/post1/banner.png"
authorAvatar: "/blog/post1/avatar.png"
footerImage: "/blog/post1/footer.png"
```

---

## 🚀 Casos de Uso Prácticos

### Caso 1: Solo cambiar el color del banner
```yaml
---
title: "Mi Post"
bannerColor: "#3B82F6"
---
```
**Resultado**: Banner azul, todo lo demás predeterminado.

### Caso 2: Cambiar solo colores de navegación
```yaml
---
title: "Mi Post"
navColor: "#10B981"
navHoverColor: "#34D399"
---
```
**Resultado**: Navbar y footer con tema verde, banner predeterminado.

### Caso 3: Personalización completa
```yaml
---
title: "Mi Post Completo"
bannerColor: "#6B21A8"
image: "/blog/mi-post/banner.png"
authorAvatar: "/blog/mi-post/avatar.png"
footerImage: "/blog/mi-post/footer.png"
navColor: "#8B5CF6"
navHoverColor: "#A78BFA"
---
```
**Resultado**: Todo personalizado para este post específico.

### Caso 4: Sin personalización (predeterminado)
```yaml
---
title: "Mi Post Normal"
---
```
**Resultado**: Usa todos los valores predeterminados del tema.

---

## 💡 Tips y Buenas Prácticas

### 1. Consistencia de Marca
Si quieres mantener una identidad visual consistente, usa los mismos colores en todos los posts:
```yaml
navColor: "#5B21B6"
navHoverColor: "#7C3AED"
```

### 2. Colores por Categoría
Asigna colores según la categoría del post:
- **Diseño/UX**: Colores morados `#8B5CF6`
- **Desarrollo**: Colores azules `#3B82F6`
- **Tutorial**: Colores verdes `#10B981`

### 3. Contraste Suficiente
Asegúrate de que los colores tengan buen contraste:
- Para botones con texto blanco, usa colores oscuros o saturados
- Para hover, usa una variante más clara o más oscura del color principal

### 4. Dimensiones de Imágenes Recomendadas
- **Banner** (`image`): 800x1000px (vertical/cuadrado)
- **Avatar** (`authorAvatar`): 200x200px (cuadrado)
- **Footer** (`footerImage`): 400x600px (vertical)

### 5. Optimización de Imágenes
- Formato: PNG con transparencia o JPG optimizado
- Tamaño de archivo: < 500KB por imagen
- Compresión: Usa herramientas como TinyPNG

---

## 🔍 Solución de Problemas

### El color no se aplica
**Problema**: El color personalizado no aparece.
**Solución**: 
- Verifica que el formato sea correcto: `"#RRGGBB"` (con comillas y #)
- Asegúrate de que esté dentro de la sección `---` del frontmatter

### La imagen no carga
**Problema**: La imagen no se muestra.
**Solución**:
- Verifica que la ruta empiece con `/` (ej: `/blog/imagen.png`)
- Confirma que el archivo existe en `public/`
- Revisa que el nombre del archivo coincida exactamente (mayúsculas/minúsculas)

### Los colores solo se ven en algunos elementos
**Problema**: Algunos elementos no toman el color personalizado.
**Solución**: 
- Esto es normal, las personalizaciones solo afectan la **página de detalle** del post
- La página principal (lista de posts) mantiene los colores predeterminados

---

## 📋 Plantilla Lista para Copiar

Copia esto en cualquier post `.md`:

```yaml
---
title: "Título del Post"
description: "Descripción breve"
date: 2025-10-24
author: "SENRI"

# Personalización visual (todos opcionales)
bannerColor: "#403E52"
image: "/bannerIMG2.png"
authorAvatar: "/profileIMG2.png"
footerImage: "/footerIMG2.png"
navColor: "#5B21B6"
navHoverColor: "#7C3AED"

tags: ["tag1", "tag2"]
---

Tu contenido aquí...
```

---

## ✨ Ejemplo en Acción

El archivo `post3.md` ya está configurado como ejemplo completo con:
- ✅ Banner gris-morado oscuro (`#403E52`)
- ✅ Imagen de banner personalizada (`/bannerIMG2.png`)
- ✅ Avatar personalizado (`/profileIMG2.png`)
- ✅ Footer con imagen personalizada (`/footerIMG2.png`)
- ✅ Navbar y botones en color morado (`#5B21B6`)
- ✅ Hover en morado claro (`#7C3AED`)

**Pruébalo**: 
1. Ejecuta `npm run dev`
2. Navega al post3
3. Observa todos los cambios de color y las imágenes personalizadas

---

## 🎉 ¡Disfruta Personalizando!

Ahora tienes control total sobre la apariencia de cada post. Experimenta con diferentes combinaciones de colores e imágenes para crear una experiencia única para cada artículo.

