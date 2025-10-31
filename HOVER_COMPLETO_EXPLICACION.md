# 🎨 Explicación Completa del Hover en la Lista de Posts

## ✅ Campo: `cardHoverColor`

Este campo controla el color de hover de **toda la tarjeta** del post en la lista principal.

---

## 🎯 Elementos Afectados (3 en total)

Cuando pasas el ratón sobre la tarjeta de un post en la lista:

### 1. **Título del Post** 📝
- **Cambio**: El texto del título cambia al color especificado
- **Transición**: Suave
- **Ejemplo**: "My Azuki-Style Inspired Blog" → Morado (`#7C3AED`)

### 2. **Cuadradito del Número** 🔢
- **Cambio**: El fondo del cuadradito cambia al color especificado
- **Estado normal**: Negro (`#000000`)
- **Estado hover**: Color personalizado (ej: `#7C3AED`)
- **Texto**: Permanece blanco para buen contraste

### 3. **Fondo del Avatar** 🖼️
- **Cambio**: Se aplica un tinte del color especificado con 20% de opacidad
- **Efecto**: Sutil, no interfiere con la imagen
- **Implementación**: Pseudo-elemento `::before` con el color personalizado

---

## 📊 Comparación Visual

### Estado Normal (sin hover):
```
┌──────────────────────────────────────────┐
│                                          │
│  ┌──────┐  ┌─┐                          │
│  │      │  │1│  Post Title              │
│  │Avatar│  └─┘  (negro)                 │
│  │      │       Descripción...          │
│  └──────┘                               │
│                                          │
└──────────────────────────────────────────┘
  Cuadrado negro    Título negro
```

### Estado Hover (ratón sobre la tarjeta):
```
┌──────────────────────────────────────────┐
│                                          │
│  ┌──────┐  ┌─┐                          │
│  │tinte │  │1│  Post Title              │
│  │morado│  └─┘  (MORADO #7C3AED)        │
│  │      │ morado Descripción...         │
│  └──────┘                               │
│   20% op.  Color personalizado          │
│                                          │
└──────────────────────────────────────────┘
```

---

## 💻 Código Implementado

### HTML (PostCard.astro):
```html
<article class="group relative">
  <a href={`/blog/${slug}`} class="block">
    <div class="flex gap-4 items-start">
      <!-- Avatar con clase para hover -->
      <div class="... post-card-avatar">
        <img src={avatar} />
        
        <!-- Número con clase para hover -->
        <div class="... post-card-number">
          {number}
        </div>
      </div>

      <!-- Título con clase para hover -->
      <h2 class="... post-card-title">
        {title}
      </h2>
    </div>
  </a>
</article>
```

### CSS (scoped):
```css
<style define:vars={{ customHoverColor: hoverColor }}>
  /* 1. Hover del título */
  .group:hover .post-card-title {
    color: var(--customHoverColor);
  }
  
  /* 2. Hover del cuadradito del número */
  .group:hover .post-card-number {
    background-color: var(--customHoverColor);
  }
  
  /* 3. Hover del fondo del avatar (tinte sutil) */
  .group:hover .post-card-avatar::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--customHoverColor);
    opacity: 0.2;
    border-radius: 0.5rem;
    pointer-events: none;
  }
  
  .post-card-avatar {
    position: relative;
  }
</style>
```

---

## 🎨 Ejemplos de Uso

### Post con tema Morado:
```yaml
---
title: "My Azuki-Style Inspired Blog"
cardHoverColor: "#7C3AED"  # Morado claro
---
```

**Resultado al hacer hover**:
- Título → Morado claro
- Cuadradito [3] → Fondo morado claro
- Avatar → Tinte morado claro (20%)

### Post con tema Azul:
```yaml
---
title: "Desarrollo Web Moderno"
cardHoverColor: "#3B82F6"  # Azul
---
```

**Resultado al hacer hover**:
- Título → Azul
- Cuadradito [1] → Fondo azul
- Avatar → Tinte azul (20%)

### Post con tema Verde:
```yaml
---
title: "Sostenibilidad Digital"
cardHoverColor: "#10B981"  # Verde
---
```

**Resultado al hacer hover**:
- Título → Verde
- Cuadradito [2] → Fondo verde
- Avatar → Tinte verde (20%)

---

## 🎯 Por Qué Es Importante

### 1. **Consistencia Visual**
Todos los elementos interactivos usan el mismo color, creando una experiencia coherente.

### 2. **Feedback Múltiple**
El usuario recibe 3 indicadores visuales simultáneos de que está sobre un elemento clickable.

### 3. **Identificación de Tema**
Los colores permiten categorizar visualmente los posts:
- Morado → Posts de diseño/UX
- Azul → Posts técnicos/desarrollo
- Verde → Posts de sostenibilidad
- Naranja → Posts de tutoriales

### 4. **Jerarquía Visual Clara**
El cambio de color del número ayuda a identificar rápidamente la posición del post en la lista.

---

## 🚀 Cómo Probarlo

1. **Inicia el servidor**:
```bash
npm run dev
```

2. **Ve a la página principal** (`http://localhost:4321`)

3. **Observa los posts**:
   - Post 3 tiene `cardHoverColor: "#7C3AED"` (morado)
   - Otros posts usan el color predeterminado (`#C03540`, rojo)

4. **Pasa el ratón lentamente sobre el post 3**:
   - Observa cómo el título cambia a morado
   - Observa cómo el número [3] cambia a fondo morado
   - Observa cómo el avatar tiene un tinte morado sutil

5. **Compara con otros posts**:
   - Pasa el ratón sobre post 1 o post 2
   - Deberían cambiar a rojo (color predeterminado)

---

## 💡 Tips de Diseño

### Contraste Suficiente
Asegúrate de que el color tenga buen contraste con el fondo blanco:
```yaml
cardHoverColor: "#3B82F6"  # ✅ Azul oscuro (buen contraste)
cardHoverColor: "#DBEAFE"  # ❌ Azul muy claro (mal contraste)
```

### Colores Relacionados con el Post
Usa colores que reflejen el tema del contenido:
```yaml
# Post sobre naturaleza
cardHoverColor: "#10B981"  # Verde

# Post sobre tecnología
cardHoverColor: "#3B82F6"  # Azul

# Post sobre creatividad
cardHoverColor: "#8B5CF6"  # Morado
```

### Consistencia por Categoría
Mantén el mismo color para posts de la misma categoría:
```yaml
# Todos los posts de UX
cardHoverColor: "#8B5CF6"  # Morado
```

---

## 📋 Checklist de Implementación

Para cada post, pregúntate:

- [ ] ¿Quiero un color de hover personalizado?
- [ ] ¿El color tiene buen contraste con blanco?
- [ ] ¿El color refleja el tema del post?
- [ ] ¿Es consistente con otros posts de la misma categoría?

Si respondes **SÍ** a todas, agrega:
```yaml
cardHoverColor: "#TU_COLOR_AQUI"
```

Si respondes **NO**, deja que use el color predeterminado (no especifiques el campo).

---

## ✅ Resumen Técnico

**Campo**: `cardHoverColor`
**Tipo**: `string` (color CSS en formato hex)
**Opcional**: Sí
**Predeterminado**: `#C03540` (rojo)
**Afecta a**: 3 elementos (título, número, avatar)
**Dónde se aplica**: Solo en la lista de posts (página principal)
**Transición**: Suave (CSS transitions)

---

## 🎉 Resultado Final

Con este campo, cada post puede tener su propia identidad visual desde la lista principal, creando una experiencia más rica y personalizada para los usuarios.

**Ejemplo en producción**: El post 3 usa morado, creando una identidad visual única que anticipa el tema del contenido antes de hacer clic.

