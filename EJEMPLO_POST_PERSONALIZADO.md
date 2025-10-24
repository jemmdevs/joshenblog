# Ejemplo de Post Personalizado

Este es un ejemplo completo de cómo se vería un post con personalización.
Puedes copiar este formato y adaptarlo a tus necesidades.

## Archivo: `src/content/blog/mi-post-custom.md`

```markdown
---
title: "Mi Post con Estilo Personalizado"
description: "Este post demuestra cómo usar colores y imágenes personalizadas"
date: 2025-10-24
author: "SENRI"
image: "/banners/custom-banner.png"
bannerColor: "#6366F1"
authorAvatar: "/avatars/custom-avatar.png"
tags: ["diseño", "personalización", "tutorial"]
---

# Contenido del Post

Aquí va todo el contenido markdown de tu post...

## Sección 1

Tu texto aquí.

## Sección 2

Más contenido...
```

---

## Vista Previa de Cómo se Verá:

### En la Página Principal (lista de posts):
- La tarjeta del post mostrará `/avatars/custom-avatar.png` como imagen de perfil
- Si no especificas `authorAvatar`, usará `/profileIMG.png` (el predeterminado)

### En la Página de Detalle del Post:
- El banner tendrá un fondo color **#6366F1** (azul/índigo)
- La imagen del banner será `/banners/custom-banner.png`
- Si no especificas `bannerColor`, usará el color rojo/rosa predeterminado
- Si no especificas `image`, usará `/bannerIMG.png`

---

## Diferentes Combinaciones:

### Solo Color Personalizado
```yaml
---
title: "Post con Banner Morado"
date: 2025-10-24
author: "SENRI"
bannerColor: "#8B5CF6"
---
```

### Solo Avatar Personalizado
```yaml
---
title: "Post con Avatar Custom"
date: 2025-10-24
author: "SENRI"
authorAvatar: "/mi-avatar-especial.png"
---
```

### Todo por Defecto (sin personalización)
```yaml
---
title: "Post Normal"
date: 2025-10-24
author: "SENRI"
---
```
O también puedes dejar los campos vacíos:
```yaml
---
title: "Post Normal"
date: 2025-10-24
author: "SENRI"
image: ""
bannerColor: ""
authorAvatar: ""
---
```

---

## 🎨 Colores Sugeridos para Banners

Aquí algunos colores que se ven bien:

- **Azul**: `#3B82F6`
- **Verde**: `#10B981`
- **Morado**: `#8B5CF6`
- **Naranja**: `#F59E0B`
- **Rosa**: `#EC4899`
- **Índigo**: `#6366F1`
- **Amarillo oscuro**: `#D97706`
- **Teal**: `#14B8A6`

¡Experimenta con diferentes colores para cada post!

