# 🎨 Guía Final Completa de Personalización de Posts

## ✅ TODOS los Campos de Personalización Disponibles

Tu blog ahora permite personalizar **cada post individualmente** con **10 campos personalizables**:

### 📋 Lista Completa de Campos

| # | Campo | Descripción | Dónde se aplica | Valor por defecto |
|---|-------|-------------|-----------------|-------------------|
| 1 | `bannerColor` | Color de fondo del banner | Página de detalle | `#C03540` (rojo) |
| 2 | `image` | Imagen del banner | Página de detalle | `/bannerIMG.png` |
| 3 | `authorAvatar` | Avatar del autor | Lista de posts | `/profileIMG.png` |
| 4 | `footerImage` | Imagen del footer | Página de detalle | `/footerIMG.png` |
| 5 | `navColor` | Color principal de navbar y botones | Página de detalle | `#C03540` (rojo) |
| 6 | `navHoverColor` | Color de hover en navbar | Página de detalle | `#C62F41` (rojo claro) |
| 7 | `contentLinkColor` | Color de enlaces en el contenido | Página de detalle | `#C62F41` (rojo claro) |
| 8 | `navigationColor` | Color de botones "Back" y "Top" | Página de detalle | `#C03540` (rojo) |
| 9 | `pageBackground` | Color de fondo de la página | Página de detalle | `#F5F5F5` (gris claro) |
| 10 | `cardHoverColor` | Color de hover del título en la lista | Página principal | `#C03540` (rojo) |

---

## 🎯 Dónde Se Aplica Cada Campo (Detallado)

### 1. `bannerColor` - Color de fondo del banner
**Ubicación**: Banner superior en la página de detalle del post
```yaml
bannerColor: "#403E52"  # Gris-morado oscuro
```

### 2. `image` - Imagen del banner
**Ubicación**: Lado derecho del banner en la página de detalle
```yaml
image: "/bannerIMG2.png"
```

### 3. `authorAvatar` - Avatar del autor
**Ubicación**: Imagen cuadrada pequeña en la tarjeta de la lista de posts (página principal)
```yaml
authorAvatar: "/profileIMG2.png"
```

### 4. `footerImage` - Imagen del footer
**Ubicación**: Esquina inferior del footer en la página de detalle
```yaml
footerImage: "/footerIMG2.png"
```

### 5. `navColor` - Color principal de navbar y botones
**Afecta a**:
- ✅ Logo "SENRI" en la navbar
- ✅ Texto "WORKS" en la navbar
- ✅ Botones de email en navbar y footer
- ✅ Botón "View my Work" en el footer
- ✅ Enlaces sociales (GitHub, LinkedIn) al hacer hover
- ✅ Línea inferior decorativa del footer

```yaml
navColor: "#5B21B6"  # Morado
```

### 6. `navHoverColor` - Color de hover en navbar
**Afecta a** (al pasar el ratón):
- ✅ Botón "CONTACT" en la navbar
- ✅ Botones de email
- ✅ Botón "View my Work"
- ✅ Bordes de secciones en el menú móvil

```yaml
navHoverColor: "#7C3AED"  # Morado claro
```

### 7. `contentLinkColor` ⭐ NUEVO - Color de enlaces en el contenido
**Afecta a**: Todos los enlaces que escribas en el markdown del post
- Ejemplo: `[Azuki](https://www.azuki.com)` usará este color

```yaml
contentLinkColor: "#A78BFA"  # Morado muy claro
```

### 8. `navigationColor` ⭐ NUEVO - Color de botones de navegación
**Afecta a**:
- ✅ Botón "← Back" (abajo del post)
- ✅ Botón "Top ↑" (abajo del post)

```yaml
navigationColor: "#8B5CF6"  # Morado medio
```

### 9. `pageBackground` ⭐ NUEVO - Color de fondo de la página
**Afecta a**: Todo el fondo de la página de detalle del post

```yaml
pageBackground: "#FAF5FF"  # Morado muy claro (casi blanco)
```

### 10. `cardHoverColor` ⭐ NUEVO - Color de hover en la lista
**Afecta a** (al pasar el ratón sobre la tarjeta del post en la lista principal):
- ✅ El título del post cambia a este color
- ✅ El cuadradito del número del post cambia a este color
- ✅ El fondo del avatar tiene un tinte sutil de este color (20% opacidad)

```yaml
cardHoverColor: "#7C3AED"  # Morado claro
```

---

## 📝 Ejemplo Completo: `post3.md`

El archivo `post3.md` tiene configurados **TODOS los campos** con comentarios explicativos:

```yaml
---
title: "My Azuki-Style Inspired Blog"
description: "Why I based my site's design on Azuki's interface..."
date: 2025-08-24
author: "SENRI"

# ✨ PERSONALIZACIÓN COMPLETA DEL POST ✨

# 🎨 Banner
bannerColor: "#403E52"           # Fondo del banner
image: "/bannerIMG.png"          # Imagen del banner

# 👤 Avatar (en la lista)
authorAvatar: "/profileIMG2.png"

# 🖼️ Footer
footerImage: "/bannerIMG.png"    # Imagen del footer

# 🎨 Navbar y botones
navColor: "#5B21B6"              # Color principal (morado)
navHoverColor: "#7C3AED"         # Color hover (morado claro)

# 🔗 Enlaces y navegación
contentLinkColor: "#A78BFA"      # Enlaces dentro del contenido
navigationColor: "#8B5CF6"       # Botones "Back" y "Top"

# 🎨 Fondo de página
pageBackground: "#FAF5FF"        # Fondo morado muy claro

# ✨ Hover en la lista
cardHoverColor: "#7C3AED"        # Hover del título en la lista

tags: ["HCI", "UX", "design inspiration"]
---

Tu contenido aquí...
```

---

## 🎨 Combinaciones de Colores Predefinidas

### Tema Morado Completo (como post3)
```yaml
bannerColor: "#403E52"
navColor: "#5B21B6"
navHoverColor: "#7C3AED"
contentLinkColor: "#A78BFA"
navigationColor: "#8B5CF6"
pageBackground: "#FAF5FF"
cardHoverColor: "#7C3AED"
```

### Tema Azul Profesional
```yaml
bannerColor: "#1E3A8A"
navColor: "#3B82F6"
navHoverColor: "#60A5FA"
contentLinkColor: "#93C5FD"
navigationColor: "#2563EB"
pageBackground: "#EFF6FF"
cardHoverColor: "#60A5FA"
```

### Tema Verde Natural
```yaml
bannerColor: "#064E3B"
navColor: "#10B981"
navHoverColor: "#34D399"
contentLinkColor: "#6EE7B7"
navigationColor: "#059669"
pageBackground: "#ECFDF5"
cardHoverColor: "#34D399"
```

### Tema Naranja Vibrante
```yaml
bannerColor: "#9A3412"
navColor: "#F59E0B"
navHoverColor: "#FBBF24"
contentLinkColor: "#FCD34D"
navigationColor: "#D97706"
pageBackground: "#FFFBEB"
cardHoverColor: "#FBBF24"
```

### Tema Rosa Elegante
```yaml
bannerColor: "#9F1239"
navColor: "#EC4899"
navHoverColor: "#F472B6"
contentLinkColor: "#F9A8D4"
navigationColor: "#DB2777"
pageBackground: "#FDF2F8"
cardHoverColor: "#F472B6"
```

---

## 📍 Diferencias: Página Principal vs Página de Detalle

| Campo | Página Principal (lista) | Página de Detalle |
|-------|-------------------------|-------------------|
| `authorAvatar` | ✅ Se aplica | ❌ No se muestra |
| `cardHoverColor` | ✅ Se aplica | ❌ No se aplica |
| `bannerColor` | ❌ No se muestra | ✅ Se aplica |
| `image` | ❌ No se muestra | ✅ Se aplica |
| `footerImage` | ❌ No se aplica | ✅ Se aplica |
| `navColor` | ❌ No se aplica | ✅ Se aplica |
| `navHoverColor` | ❌ No se aplica | ✅ Se aplica |
| `contentLinkColor` | ❌ No se aplica | ✅ Se aplica |
| `navigationColor` | ❌ No se aplica | ✅ Se aplica |
| `pageBackground` | ❌ No se aplica | ✅ Se aplica |

**En resumen:**
- **Página Principal**: Solo se ven `authorAvatar` y `cardHoverColor`
- **Página de Detalle**: Se ven todos los demás campos

---

## 🚀 Casos de Uso Prácticos

### Caso 1: Solo cambiar colores de enlaces
```yaml
---
title: "Mi Post"
contentLinkColor: "#3B82F6"      # Enlaces azules
navigationColor: "#2563EB"       # Botones azules
---
```

### Caso 2: Cambiar solo el fondo y los enlaces
```yaml
---
title: "Mi Post"
pageBackground: "#ECFDF5"        # Fondo verde claro
contentLinkColor: "#10B981"      # Enlaces verdes
cardHoverColor: "#34D399"        # Hover verde en la lista
---
```

### Caso 3: Personalización completa con tema consistente
```yaml
---
title: "Mi Post Completo"
# Banner
bannerColor: "#1E3A8A"
image: "/blog/mi-post/banner.png"

# Avatar y footer
authorAvatar: "/blog/mi-post/avatar.png"
footerImage: "/blog/mi-post/footer.png"

# Colores (tema azul consistente)
navColor: "#3B82F6"
navHoverColor: "#60A5FA"
contentLinkColor: "#93C5FD"
navigationColor: "#2563EB"
pageBackground: "#EFF6FF"
cardHoverColor: "#60A5FA"
---
```

### Caso 4: Solo personalizar la lista (sin tocar la página de detalle)
```yaml
---
title: "Mi Post"
authorAvatar: "/mi-avatar.png"
cardHoverColor: "#EC4899"        # Solo cambia el hover en la lista
---
```

---

## 💡 Tips y Mejores Prácticas

### 1. Mantén Consistencia de Colores
Para una experiencia visual coherente, usa colores relacionados:
```yaml
navColor: "#5B21B6"          # Color base
navHoverColor: "#7C3AED"     # 1-2 tonos más claro
contentLinkColor: "#A78BFA"  # 2-3 tonos más claro
```

### 2. Contraste Suficiente
- **Enlaces sobre fondo claro**: Usa colores oscuros o saturados
- **Botones con texto blanco**: Usa colores con saturación > 60%
- **Fondos**: Usa tonos muy claros (< 10% de saturación)

### 3. Usa Variables de Color
Si usas el mismo color en varios campos, puedes simplificar:
```yaml
navColor: "#3B82F6"
navigationColor: "#3B82F6"    # Mismo color para consistencia
```

### 4. Colores por Categoría de Post
Crea un sistema de colores según el tema:

**Posts de Diseño**:
```yaml
navColor: "#8B5CF6"          # Morado
cardHoverColor: "#7C3AED"
```

**Posts de Desarrollo**:
```yaml
navColor: "#3B82F6"          # Azul
cardHoverColor: "#60A5FA"
```

**Posts de Tutorial**:
```yaml
navColor: "#10B981"          # Verde
cardHoverColor: "#34D399"
```

### 5. Fondos Sutiles
Para `pageBackground`, usa colores muy claros:
```yaml
pageBackground: "#FAF5FF"    # Morado muy claro ✅
pageBackground: "#5B21B6"    # Morado oscuro ❌ (demasiado saturado)
```

---

## 🔍 Solución de Problemas

### Los enlaces no cambian de color
**Problema**: Los enlaces dentro del contenido siguen siendo rojos
**Solución**: Asegúrate de especificar `contentLinkColor` en el frontmatter

### El hover en la lista no funciona
**Problema**: El título no cambia de color al pasar el ratón
**Solución**: Verifica que `cardHoverColor` esté en el frontmatter del post

### El fondo de la página no cambia
**Problema**: El fondo sigue siendo gris claro
**Solución**: 
- Verifica que `pageBackground` esté correctamente escrito
- Asegúrate de que el color sea válido (formato `#RRGGBB`)

### Los botones "Back" y "Top" no cambian
**Problema**: Los botones siguen siendo rojos
**Solución**: Usa `navigationColor` para cambiar su color

---

## 📋 Plantilla Completa Lista para Copiar

```yaml
---
title: "Título del Post"
description: "Descripción breve"
date: 2025-10-31
author: "SENRI"

# 🎨 Banner
bannerColor: "#403E52"
image: "/bannerIMG2.png"

# 👤 Avatar
authorAvatar: "/profileIMG2.png"

# 🖼️ Footer
footerImage: "/footerIMG2.png"

# 🎨 Navbar y botones
navColor: "#5B21B6"
navHoverColor: "#7C3AED"

# 🔗 Enlaces y navegación
contentLinkColor: "#A78BFA"
navigationColor: "#8B5CF6"

# 🎨 Fondo
pageBackground: "#FAF5FF"

# ✨ Lista
cardHoverColor: "#7C3AED"

tags: ["tag1", "tag2"]
---

Tu contenido aquí...
```

---

## 🎯 Cómo Probar las Nuevas Funcionalidades

1. **Ejecuta el servidor**:
```bash
npm run dev
```

2. **Ve a la página principal** (`http://localhost:4321`):
   - Pasa el ratón sobre el título del **post3** → debería cambiar a **morado** (`#7C3AED`)
   - Verás el avatar personalizado (`profileIMG2.png`)

3. **Haz clic en el post3**:
   - **Banner**: Fondo gris-morado (`#403E52`)
   - **Fondo de página**: Morado muy claro (`#FAF5FF`)
   - **Navbar**: Logo y "WORKS" en morado (`#5B21B6`)
   - **Enlaces**: Los enlaces como "Azuki" en morado claro (`#A78BFA`)
   - **Botones**: "← Back" y "Top ↑" en morado (`#8B5CF6`)
   - **Footer**: Imagen personalizada y botones morados

4. **Prueba el hover**:
   - Botón "CONTACT" → cambia a morado claro
   - Enlaces → mantienen su color
   - Botones "Back" y "Top" → cambian a morado más claro

---

## ✨ Resumen de Cambios Nuevos

Se agregaron **4 nuevos campos personalizables**:

1. **`contentLinkColor`** ⭐ - Color de enlaces dentro del contenido markdown
2. **`navigationColor`** ⭐ - Color de botones "← Back" y "Top ↑"
3. **`pageBackground`** ⭐ - Color de fondo de toda la página de detalle
4. **`cardHoverColor`** ⭐ - Color de hover del título en la lista de posts

Ahora tienes control total sobre **10 aspectos visuales** de cada post.

---

## 🎉 ¡Todo Listo!

Con estos 10 campos personalizables, puedes crear una identidad visual única para cada post sin tocar ni una línea de código. Solo edita el frontmatter del archivo `.md` y ¡listo!

**Recuerda**: Todos los campos son opcionales. Si no los especificas, se usarán los valores predeterminados.

