# Cómo Personalizar Posts Individualmente

Tu blog ahora está configurado para permitir personalización completa de cada post. Aquí te explico cómo hacerlo:

## 📝 Campos Disponibles

Cada post puede tener estos campos personalizables en su frontmatter (la sección entre `---` al inicio del archivo `.md`):

### 1. **image** - Imagen del Banner
La imagen que aparece en el lado derecho del banner de la página de detalle del post.

- **Por defecto**: Si no especificas nada, usa `/bannerIMG.png`
- **Personalizado**: Especifica la ruta a tu imagen personalizada

### 2. **bannerColor** - Color de Fondo del Banner
El color de fondo del banner en la página de detalle.

- **Por defecto**: Si no especificas nada, usa el color primario del tema (rojo/rosa)
- **Personalizado**: Especifica cualquier color CSS válido

### 3. **authorAvatar** - Imagen de Perfil
La imagen que aparece en la tarjeta del post en la lista principal.

- **Por defecto**: Si no especificas nada, usa `/profileIMG.png`
- **Personalizado**: Especifica la ruta a tu avatar personalizado

---

## 🎨 Ejemplos de Uso

### Ejemplo 1: Post con todo personalizado

```yaml
---
title: "Mi Post Increíble"
description: "Un post con estilo personalizado"
date: 2025-10-24
author: "SENRI"
image: "/banners/mi-banner-custom.png"
bannerColor: "#3B82F6"
authorAvatar: "/avatars/mi-avatar.png"
tags: ["diseño", "web"]
---
```

### Ejemplo 2: Solo cambiar el color del banner

```yaml
---
title: "Post con Banner Verde"
description: "Este post tiene un banner verde"
date: 2025-10-24
author: "SENRI"
bannerColor: "#10B981"
tags: ["tutorial"]
---
```
**Resultado**: Usará el color verde para el banner, pero mantendrá las imágenes predeterminadas.

### Ejemplo 3: Solo cambiar la imagen del banner

```yaml
---
title: "Post con Banner Custom"
description: "Banner personalizado pero color por defecto"
date: 2025-10-24
author: "SENRI"
image: "/mi-imagen-especial.png"
tags: ["diseño"]
---
```
**Resultado**: Banner con tu imagen personalizada pero color de fondo predeterminado.

### Ejemplo 4: Cambiar solo el avatar en la lista

```yaml
---
title: "Post con Avatar Custom"
description: "Solo cambio el avatar de la lista"
date: 2025-10-24
author: "SENRI"
authorAvatar: "/avatars/special-avatar.png"
tags: ["personal"]
---
```
**Resultado**: En la página principal, este post mostrará tu avatar personalizado.

---

## 📂 Dónde Colocar las Imágenes

1. Coloca tus imágenes en la carpeta `public/` 
2. Por ejemplo:
   - `public/banners/mi-banner.png`
   - `public/avatars/mi-avatar.png`
   - `public/custom-image.jpg`

3. En el frontmatter, referéncialas con `/` al inicio:
   - `image: "/banners/mi-banner.png"`
   - `authorAvatar: "/avatars/mi-avatar.png"`

---

## 🎨 Formatos de Color Válidos

Puedes usar cualquier formato CSS válido para `bannerColor`:

- **Hexadecimal**: `#FF5733`, `#3B82F6`
- **RGB**: `rgb(255, 87, 51)`
- **RGBA**: `rgba(255, 87, 51, 0.8)`
- **Nombres CSS**: `blue`, `darkgreen`, `coral`
- **HSL**: `hsl(200, 70%, 50%)`

---

## ✨ Tips

1. **Mantén la consistencia**: Si no especificas ningún campo, todos los posts usarán el estilo predeterminado.

2. **Prueba colores**: Usa herramientas como [Coolors](https://coolors.co/) o [Adobe Color](https://color.adobe.com/) para elegir paletas.

3. **Optimiza imágenes**: Asegúrate de que las imágenes sean ligeras para carga rápida (preferiblemente < 500KB).

4. **Dimensiones recomendadas**:
   - Banner (`image`): 800x1000px aprox (vertical/cuadrado)
   - Avatar (`authorAvatar`): 200x200px (cuadrado)

5. **Déjalo vacío si no necesitas personalizar**: Simplemente no incluyas el campo o déjalo como `""`:
   ```yaml
   image: ""
   bannerColor: ""
   authorAvatar: ""
   ```

---

## 🚀 ¡Listo!

Ahora puedes personalizar cada post individualmente. Edita cualquier archivo `.md` en `src/content/blog/` y agrega los campos que necesites.

