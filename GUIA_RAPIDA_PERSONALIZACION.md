# 📝 Guía Rápida de Personalización de Posts

## ✅ Ejemplo Real Implementado en `post3.md`

He configurado `post3.md` como ejemplo práctico con estas personalizaciones:

### 🎨 Color del Banner
```yaml
bannerColor: "#403E52"
```
Este color gris-morado oscuro (#403E52) reemplazará el rojo/rosa predeterminado en la página de detalle del post.

### 🖼️ Imagen del Banner  
```yaml
image: "/bannerIMG2.png"
```
Esta imagen aparecerá en el lado derecho del banner (en lugar de `/bannerIMG.png`).

### 👤 Avatar del Autor
```yaml
authorAvatar: "/profileIMG2.png"
```
Esta imagen aparecerá en la tarjeta del post en la lista principal (en lugar de `/profileIMG.png`).

---

## 🔄 Cómo Replicarlo en Otros Posts

### Paso 1: Abre cualquier archivo `.md` en `src/content/blog/`

Por ejemplo: `post1.md`, `post2.md`, etc.

### Paso 2: Edita el frontmatter (sección entre `---`)

**Antes:**
```yaml
---
title: "Mi Post"
description: "Descripción"
date: 2025-10-24
author: "SENRI"
tags: ["tag1", "tag2"]
---
```

**Después (con personalización):**
```yaml
---
title: "Mi Post"
description: "Descripción"
date: 2025-10-24
author: "SENRI"
bannerColor: "#403E52"
image: "/bannerIMG2.png"
authorAvatar: "/profileIMG2.png"
tags: ["tag1", "tag2"]
---
```

### Paso 3: ¡Listo! Guarda el archivo

---

## 📋 Plantilla Lista para Copiar

Copia esta plantilla y pégala en el frontmatter de cualquier post:

```yaml
---
title: "Título de tu post"
description: "Descripción breve"
date: 2025-10-24
author: "SENRI"

# Personalización visual
bannerColor: "#403E52"              # Color del fondo del banner
image: "/bannerIMG2.png"            # Imagen del banner
authorAvatar: "/profileIMG2.png"   # Avatar en la lista

tags: ["tag1", "tag2"]
---
```

---

## 🎨 Ejemplos de Diferentes Estilos

### Estilo 1: Banner Azul con Imágenes Predeterminadas
```yaml
bannerColor: "#3B82F6"
# image y authorAvatar no especificados = usa los predeterminados
```

### Estilo 2: Solo Cambiar Avatar
```yaml
authorAvatar: "/mi-avatar-custom.png"
# bannerColor e image usan valores predeterminados
```

### Estilo 3: Todo Personalizado
```yaml
bannerColor: "#10B981"
image: "/blog/post1/banner.png"
authorAvatar: "/blog/post1/avatar.png"
```

### Estilo 4: Sin Personalización (todo predeterminado)
```yaml
# No incluir ninguno de estos campos
# O dejarlos vacíos:
bannerColor: ""
image: ""
authorAvatar: ""
```

---

## 📂 Dónde Guardar las Imágenes

### Opción Simple (como en el ejemplo)
```
public/
  ├── bannerIMG.png      (predeterminado)
  ├── bannerIMG2.png     ✅ (usado en post3)
  ├── profileIMG.png     (predeterminado)
  └── profileIMG2.png    ✅ (usado en post3)
```

### Opción Organizada (recomendada para muchos posts)
```
public/
  └── blog/
      ├── post1/
      │   ├── banner.png
      │   └── avatar.png
      ├── post2/
      │   ├── banner.png
      │   └── avatar.png
      └── post3/
          ├── banner.png
          └── avatar.png
```

Luego en el frontmatter:
```yaml
image: "/blog/post1/banner.png"
authorAvatar: "/blog/post1/avatar.png"
```

---

## 🎯 Regla de Oro

**La ruta SIEMPRE empieza con `/` y es relativa a la carpeta `public/`**

- Si está en: `public/bannerIMG2.png` → escribes: `"/bannerIMG2.png"`
- Si está en: `public/blog/post1/banner.png` → escribes: `"/blog/post1/banner.png"`

---

## 🚀 Prueba el Ejemplo

1. Guarda los cambios en `post3.md`
2. Ejecuta: `npm run dev`
3. Ve a la lista de posts → verás `/profileIMG2.png` como avatar del post3
4. Haz clic en el post3 → verás el banner con:
   - Color de fondo: `#403E52` (gris-morado)
   - Imagen: `/bannerIMG2.png`

---

## 💡 Tips Finales

- ✅ Los campos son **opcionales**: si no los pones, usa valores predeterminados
- ✅ Los comentarios con `#` en el frontmatter son ignorados (útil para documentar)
- ✅ Puedes mezclar: personalizar solo el color, solo la imagen, o todo
- ✅ Formatos de color válidos: `#403E52`, `rgb(64, 62, 82)`, `blue`, `hsl(240, 13%, 28%)`
- ✅ Dimensiones recomendadas:
  - Banner: ~800x1000px (vertical/cuadrado)
  - Avatar: ~200x200px (cuadrado)

¡Disfruta personalizando tus posts! 🎉

