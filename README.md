# Evolución Espresso — Del Mármol al Método
> **Actividad 3: Desarrollo e implementación del sitio web**  
> **Materia:** Diseño y Desarrollo Web (Código: 16240)  
> **Universidad:** UADE — Facultad de Comunicación y Diseño · Dpto. de Tecnología Web  
> **Ciclo Lectivo:** 2025 / 2026  
> **Equipo:** Grupo 8  

---

## 📌 Enlaces Oficiales de Entrega

* 🌐 **Sitio Web Desplegado (GitHub Pages):** [https://facuz45.github.io/desarrollo-web-actividad3/](https://facuz45.github.io/desarrollo-web-actividad3/)
* 📦 **Repositorio Público en GitHub:** [https://github.com/facuz45/desarrollo-web-actividad3](https://github.com/facuz45/desarrollo-web-actividad3)
* 🎨 **Prototipo Interactivo en Figma:** [https://www.figma.com/design/bSuPvEj3CiUSqETOQwXHwV/Actividad-2---Desarrollo-Web?node-id=0-1](https://www.figma.com/design/bSuPvEj3CiUSqETOQwXHwV/Actividad-2---Desarrollo-Web?node-id=0-1)

---

## 👥 Integrantes y División de Responsabilidades

| Integrante | Rol / Responsabilidad en la Implementación |
| :--- | :--- |
| **Facundo Zega** | • Maquetación y desarrollo de la **Página Principal (`index.html`)**.<br>• Desarrollo del Punto de Interés 1: **Café Tortoni (`tortoni.html`)**.<br>• Integración inicial de Tailwind CSS CDN, paleta de colores del Design System y modal lightbox para imágenes.<br>• Configuración del repositorio y despliegue en GitHub Pages. |
| **Facundo Tisch** | • Desarrollo completo del Punto de Interés 2: **All Saints Cafe (`allsaints.html`)**.<br>• Desarrollo de la página y motor interactivo de **Reservas (`reserva.html`)** con cálculo dinámico en tiempo real y selector de divisas (USD / ARS).<br>• Implementación del **Formulario de Contacto** con validación nativa JavaScript.<br>• Desarrollo del **Asistente Virtual / Barista Bot (`js/assistant.js`)** para asistencia y preguntas frecuentes.<br>• Documentación técnica integral (`README.md`). |

---

## ☕ Presentación del Proyecto y Temática

**Evolución Espresso** es una experiencia autoguiada y pedagógica que contrasta dos paradigmas antagónicos y complementarios de la cultura urbana y gastronómica de Buenos Aires:

1. **La Liturgia del Café Notable (Siglo XIX):** Encarnada por el **Café Tortoni** (Av. de Mayo 825, Casco Histórico/Monserrat), caracterizado por sus mostradores de roble, mesas de mármol de Carrara, bohemia literaria (Borges, Lorca, Quinquela Martín) y extracción tradicional de espresso.
2. **El Laboratorio de la Tercera Ola (Siglo XXI):** Representado por **All Saints Cafe** (Ciudad de la Paz 2300, Belgrano), templo de la precisión científica, microtueste a la vista, Brew Bar con métodos de filtrado manual (V60 japonés y Aeropress) y granos arábicos de especialidad con trazabilidad de origen.

El proyecto conecta ambos hitos mediante el eje cívico e histórico de la Ciudad y el **Subte Línea D** (Catedral / 9 de Julio ↔ Juramento), planteando una transición fluida entre la nostalgia patrimonial y la experimentación contemporánea.

---

## 🛠️ Tecnologías Utilizadas

En estricto cumplimiento de las consignas de la cátedra:
* **HTML5 Semántico:** Uso de etiquetas estructurales (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer`) que optimizan el SEO y la accesibilidad para lectores de pantalla.
* **Tailwind CSS (CDN):** Framework de utilidades configurado con los tokens de diseño (Design Tokens) definidos en la Actividad 2:
  * Paleta cromática: `espresso` (`#2A1D16`), `crowshead` (`#241009`), `copper` (`#B06B34`), `cream` (`#F4EDE2`), `parchment` (`#F3E7D6`), `steel` (`#3E4B52`).
  * Tipografías: `Fraunces` (serif displays para títulos), `Inter` (sans-serif para lectura en pantalla) y `JetBrains Mono` (fichas técnicas y kickers).
* **JavaScript Nativo (ES6+):** Sin frameworks de frontend (React, Vue, Angular) ni librerías CSS externas ajenas a Tailwind. Empleado para:
  * Manipulación reactiva del DOM y cálculo dinámico de presupuestos.
  * Validación exhaustiva de formularios y manejo accesible de estados de error.
  * Modales accesibles (lightbox fotográfico y voucher de confirmación).
  * Asistente virtual interactivo con base de conocimiento y respuestas contextuales.

---

## 🚀 Estructura de Archivos del Proyecto

```text
desarrollo-web-actividad3/
│
├── index.html            # Página de Inicio: Presentación, propuesta de valor, mapa y tarjetas de paradas
├── tortoni.html          # Punto de Interés 1: Café Tortoni (Av. de Mayo 825) - Siglo XIX
├── allsaints.html        # Punto de Interés 2: All Saints Cafe (Cdad. de la Paz 2300) - Siglo XXI
├── reserva.html          # Formulario de Reservas en tiempo real + Formulario de Contacto
├── README.md             # Documentación técnica y académica del proyecto
│
├── js/
│   └── assistant.js      # Widget flotante interactivo: Asistente Virtual / Barista Bot (FAQ)
│
└── img/                  # Activos multimedia optimizados
    ├── logo.png                  # Isologo oficial de Evolución Espresso
    ├── chevron-down.svg          # Iconografía SVG para dropdowns
    ├── mapa-recorrido.png        # Mapa cartográfico del circuito con marcadores
    ├── tortoni-hero.png          # Imagen de portada y fondo de Café Tortoni
    ├── tortoni-salon-mesas.png   # Interior histórico de mesas y vitrales
    ├── tortoni-churros-cafe.png  # Merienda tradicional de café y chocolate con churros
    ├── tortoni-fachada-tango.png # Fachada sobre Av. de Mayo
    ├── allsaints-card.png        # Tarjeta de All Saints para la home
    ├── allsaints-hero.jpg        # Portada de barra y tostadora de All Saints
    ├── allsaints-fachada.jpg     # Fachada moderna en la esquina de Ciudad de la Paz y Olazábal
    ├── allsaints-v60.jpg         # Demostración del método de extracción por goteo V60
    ├── allsaints-latte.jpg       # Latte art y calibración espresso
    └── allsaints-pasteleria.jpg  # Pastelería de autor y maridaje
```

---

## 💡 Funcionalidades Principales Implementadas

### 1. Página Principal (`index.html`)
* Hero banner con propuesta de valor "Del mármol al método".
* Bloque comparativo de ambos mundos (Patrimonio vs Especialidad).
* Tarjetas interactivas de las dos paradas con acceso directo a sus páginas de detalle.
* Mapa del recorrido con modal lightbox de zoom para inspección cartográfica en alta resolución.
* Navegación responsive con menú hamburguesa animado y dropdown accesible.

### 2. Páginas de Puntos de Interés (`tortoni.html` y `allsaints.html`)
* Narrativa histórica y sensorial adaptada a cada época.
* Tablas de datos prácticos: dirección exacta, cómo llegar (línea A y línea D de subte), medios de pago, accesibilidad y horarios.
* Fichas técnicas de métodos de preparación: espresso tradicional en loza frente a filtrados V60 y Aeropress.
* Galería fotográfica interactiva con visualizador lightbox a pantalla completa y trampa de foco (`focus trap`) para accesibilidad.
* Bloque de recomendación del barista y navegación cruzada entre paradas.

### 3. Motor de Reservas y Cotización en Vivo (`reserva.html`)
* **Conversión de Moneda en Tiempo Real:** Selector de divisa (`USD` / `ARS`) con tipo de cambio de referencia transparentado (1 USD = $1.250 ARS).
* **Selección de Paquetes:** 3 experiencias estructuradas (Recorrido Completo, Liturgia Tortoni, Laboratorio All Saints).
* **Selector Dinámico de Participantes:** Ajuste interactivo de cupos con cálculo automático y **descuento grupal del 15%** para grupos de 4 o más personas.
* **Servicios Adicionales (Add-ons):** Selección opcional de pastelería artesanal, bolsas de café en grano 250g y libretas de cata barista.
* **Resumen Sticky en Pantalla:** Desglose permanente de subtotales, adicionales, descuentos aplicados e IVA informativo.
* **Validación de Datos en JS:** Chequeo estricto de nombre, email válido mediante expresiones regulares, teléfono y fecha futura restringida.
* **Modal de Confirmación (Voucher):** Generación de identificador único de reserva (`#EE-2026-XXXX`), resumen detallado y función nativa para imprimir comprobante (`window.print()`).

### 4. Formulario de Contacto (`reserva.html#contacto`)
* Accesible desde el menú y enlaces de pie de página en todo el sitio.
* Campos obligatorios validados dinámicamente con alertas contextuales (nombre, email, motivo y mensaje mínimo de 10 caracteres).
* Mensaje de éxito visible con reinicio automático de los campos tras el envío.

### 5. Asistente Virtual / Barista Bot (`js/assistant.js`)
* Widget flotante en esquina inferior derecha disponible en todas las pantallas.
* Microinteracción con botón launcher pulsante y modal de diálogo conversacional.
* Chips de consultas rápidas para preguntas frecuentes (traslado en Subte Línea D, horarios, contraste de sabores, precios y reservas).
* Motor de búsqueda por palabras clave en lenguaje natural con indicador visual de respuesta ("escribiendo...").

---

## ♿ Accesibilidad y Usabilidad (WCAG & Heurísticas de Nielsen)

* **Visibilidad del estado del sistema:** Indicadores de selección activos en navegación, resumen de precios reactivo y feedback inmediato al interactuar con formularios.
* **Correspondencia con el mundo real:** Metáforas claras de cafetería, barista, tueste, moneda local y extranjera.
* **Control y libertad para el usuario:** Cierre de modales con tecla `Escape`, click fuera del backdrop y botones visibles de cierre.
* **Consistencia y estándares:** Idéntica jerarquía tipográfica, márgenes y patrones de navegación en las 4 páginas.
* **Prevención de errores y validación:** Limitación de fechas anteriores a hoy en el calendario y validación en vivo antes de permitir el envío de formularios.
* **Accesibilidad Web (WCAG 2.1 AA):**
  * Enlace oculto para saltar directamente al contenido principal (`skip-to-content`).
  * Contrastes tipográficos validados entre textos y fondos (`cream` sobre `espresso`, `crowshead` y `copper`).
  * Atributos ARIA (`aria-expanded`, `aria-haspopup`, `aria-controls`, `aria-label`, `role="dialog"`, `aria-live="polite"`).
  * Navegación completa mediante teclado con foco visible (`focus:ring-2 focus:ring-copper`).

---

## 💻 Instrucciones para Ejecución Local

Para visualizar el proyecto localmente sin necesidad de conexión a internet para los archivos estáticos:

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/facuz45/desarrollo-web-actividad3.git
   cd desarrollo-web-actividad3
   ```
2. Iniciar un servidor local con Python (o extensión Live Server de VS Code):
   ```bash
   python -m http.server 8000
   ```
3. Abrir en el navegador:
   ```text
   http://localhost:8000/index.html
   ```
