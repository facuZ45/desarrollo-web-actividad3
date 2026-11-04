# Evolución Espresso — Del Mármol al Método
> **Actividad 3: Desarrollo e implementación del sitio web**  
> **Materia:** Diseño y Desarrollo Web (Código: 16240)  
> **Universidad:** UADE  
> **Ciclo Lectivo:** 2026  
> **Equipo:** Grupo 8
> **Integrantes:** Facundo Zega y Facundo Tisch

---

## 📌 Enlaces Oficiales de Entrega

* 🌐 **Sitio Web Desplegado (GitHub Pages):** [https://facuz45.github.io/desarrollo-web-actividad3/](https://facuz45.github.io/desarrollo-web-actividad3/)
* 📦 **Repositorio Público en GitHub:** [https://github.com/facuz45/desarrollo-web-actividad3](https://github.com/facuz45/desarrollo-web-actividad3)
* 🎨 **Prototipo Interactivo en Figma:** [Ver Prototipo en Figma](https://www.figma.com/design/bSuPvEj3CiUSqETOQwXHwV/Actividad-2---Desarrollo-Web?node-id=0-1)
* 📐 **Design System y Tokens en Figma:** [Ver Design System en Figma](https://www.figma.com/design/bSuPvEj3CiUSqETOQwXHwV/Actividad-2---Desarrollo-Web?node-id=0-1)

---

## 👥 Integrantes y Descripción de Contribuciones

| Integrante | Rol y Contribuciones en la Implementación |
| :--- | :--- |
| **Facundo Zega** | • Maquetación, arquitectura y desarrollo de la **Página Principal (`index.html`)**.<br>• Integración y desarrollo del **Mapa Interactivo con Google Maps API / Embed Service**, incorporando orden sugerido de paradas (1 ➔ 2), georreferenciación de puntos de interés y barra de controles dinámicos de visualización.<br>• Desarrollo completo del Punto de Interés 1: **Café Tortoni (`tortoni.html`)**.<br>• Integración inicial de Tailwind CSS CDN, configuración de tokens de diseño y modal accesible de ampliación fotográfica (lightbox).<br>• Configuración del repositorio y pipeline de despliegue continuo en **GitHub Pages**. |
| **Facundo Tisch** | • Desarrollo completo del Punto de Interés 2: **All Saints Cafe (`allsaints.html`)**.<br>• Desarrollo de la página y motor interactivo de **Reservas (`reserva.html`)** con cálculo dinámico en tiempo real, selector de divisas (USD / ARS) y voucher de confirmación imprimible.<br>• Implementación del **Formulario de Contacto** con validación nativa JavaScript accesible.<br>• Desarrollo y parametrización del **Asistente Virtual / Barista Bot (`js/assistant.js`)** con respuestas inteligentes y chips de preguntas frecuentes.<br>• Redacción y estructuración de la documentación técnica y académica integral (**`README.md`**) bajo las pautas de la cátedra. |

---

## ☕ Nombre y Objetivo del Sitio

* **Nombre del sitio:** *Evolución Espresso — Del Mármol al Método*
* **Objetivo del sitio:** Difundir, poner en valor y permitir experimentar de manera inmersiva la profunda transformación cultural, estética, sensorial y técnica que experimentó el café en la Ciudad Autónoma de Buenos Aires a lo largo de más de un siglo y medio. El sitio web guía a los visitantes en un recorrido autoguiado que contrasta el tradicional rito social del "Café Notable" decimonónico con el rigor experimental del "Laboratorio de Café de Especialidad" contemporáneo.

---

## 🗺️ Tema y Categoría del Recorrido

* **Tema del recorrido:** La transición entre dos paradigmas antagónicos y complementarios de la cultura urbana y gastronómica de Buenos Aires:
  1. **La Liturgia del Café Notable (Siglo XIX):** Representada por el **Café Tortoni** (Av. de Mayo 825, Casco Histórico/Monserrat), caracterizado por sus mesas de mármol de Carrara, bohemia literaria e intelectual (Borges, García Lorca, Quinquela Martín), vitrales franceses y la clásica extracción espresso en vajilla de loza gruesa.
  2. **El Laboratorio de la Tercera Ola (Siglo XXI):** Representado por **All Saints Cafe** (Ciudad de la Paz 2300, Belgrano), un espacio donde convergen la química, el microtueste a la vista, granos arábicos de especialidad con trazabilidad de origen y el Brew Bar con métodos manuales (V60 japonés y Aeropress).
* **Categoría del recorrido:** Recorrido temático urbano, gastronómico, histórico y arquitectónico / Itinerario autoguiado peatonal y en transporte público (*Walking & Transit Tour*). El circuito se enlaza mediante el eje cívico-histórico porteño y el **Subte Línea D** (Catedral / 9 de Julio ↔ Juramento).

---

## 🎯 Público Destinatario

El sitio web está diseñado contemplando distintos perfiles de usuarios:
1. **Aficionados al café y cultura barista:** Consumidores interesados en métodos de extracción de especialidad (filtrados, tueste, calibración espresso) así como en la apreciación de perfiles sensoriales clásicos frente a modernos.
2. **Turistas nacionales e internacionales:** Visitantes que buscan experiencias culturales y gastronómicas auténticas en Buenos Aires, con información práctica, geolocalizada y bimonetaria (USD y ARS).
3. **Estudiantes y entusiastas del patrimonio urbano:** Personas interesadas en la arquitectura porteña, la bohemia del siglo XIX y la resignificación de espacios urbanos en barrios tradicionales.
4. **Comunidad local y paseantes urbanos:** Residentes que desean realizar salidas de fin de semana autoguiadas con itinerarios claros, tiempos estimados y opciones de reserva accesibles.

---

## 💡 Funcionalidades Principales

### 1. Página Principal (`index.html`)
* **Hero Section Conceptual:** Presentación con claim "Del mármol al método" y accesos directos de llamada a la acción (CTA).
* **Bloque Comparativo Histórico:** Contraste técnico, sensorial y arquitectónico entre la época del mármol y la era de la especialidad.
* **Mapa Interactivo con Google Maps API:**
  * Componente cartográfico dinámico que localiza con precisión georreferenciada ambas paradas del recorrido y el trazado de enlace.
  * **Indicador de Orden Sugerido (Paso a Paso):**
    * *Parada 1 (Inicio):* Café Tortoni (1858) · Av. de Mayo 825.
    * *Tramo de Enlace:* Conexión en Subte Línea D (~25 min) o caminata urbana.
    * *Parada 2 (Destino):* All Saints Cafe (s. XXI) · Ciudad de la Paz 2300.
  * **Barra de Controles de Vista:** Botones para alternar instantáneamente entre la vista de *Trazado Completo (1 ➔ 2)*, foco en *Café Tortoni* y foco en *All Saints Cafe*.
  * **Integración con Navegación Externa:** Botón de enlace directo para abrir el itinerario en la aplicación de Google Maps con cálculo de ruta en tiempo real.
  * Botones integrados para saltar directamente a las páginas de cada parada (`tortoni.html` y `allsaints.html`).
* **Tarjetas de Paradas (POI Cards):** Resumen visual interactivo con ambientación fotográfica, datos clave y enlace al contenido extendido.
* **Navegación Responsive y Accesible:** Menú hamburguesa animado con trampa de foco, submenú desplegable y dropdown de navegación rápida.

### 2. Páginas de Puntos de Interés (`tortoni.html` y `allsaints.html`)
* **Narrativa Inmersiva:** Historia, contexto arquitectónico y sensorial propio de cada cafetería.
* **Ficha Técnica y Práctica:** Dirección exacta, medios de pago, transporte (Líneas de subte A y D), horarios y accesibilidad motriz.
* **Laboratorio Sensorial / Método de Preparación:** Explicación técnica del espresso tradicional frente a métodos de filtrado manual (V60 y Aeropress).
* **Galería Fotográfica con Modal Lightbox:** Visualizador a pantalla completa con navegación por teclado (`Escape`), foco atrapado y atributos `aria-modal`.
* **Navegación Cruzada:** Botones al pie para continuar fluidamente al siguiente hito del recorrido.

### 3. Motor de Reservas y Presupuesto Dinámico (`reserva.html`)
* **Selector Bimonetario (USD / ARS):** Conversión automática en tiempo real de todos los precios del formulario con tipo de cambio transparente (1 USD = $1.250 ARS).
* **Experiencias Seleccionables:** 3 paquetes (Recorrido Completo, Liturgia Tortoni, Laboratorio All Saints).
* **Ajuste Dinámico de Cupos:** Descuento grupal automático del 15% para grupos de 4 o más participantes.
* **Adicionales Opcionales (Add-ons):** Selección reactiva de pastelería de autor, bolsas de café de especialidad y libretas de cata.
* **Panel de Resumen Sticky:** Cálculo en vivo de subtotales, descuentos, adicionales e IVA desglosado.
* **Voucher de Confirmación:** Generador de código único de reserva (`#EE-2026-XXXX`) con resumen formal y botón para imprimir o guardar comprobante (`window.print()`).

### 4. Formulario de Contacto Accesible (`reserva.html#contacto`)
* Validación nativa en JavaScript con expresiones regulares para correo electrónico, longitud mínima de mensaje y campos obligatorios.
* Alertas contextuales y mensaje de confirmación visible al completar el envío.

### 5. Asistente Virtual / Barista Bot (`js/assistant.js`)
* Widget flotante conversacional accesible en todas las páginas del sitio.
* Chips de acceso rápido a consultas frecuentes (cómo viajar en subte Línea D, horarios, contraste de tostados, reservas).
* Motor de búsqueda por palabras clave en lenguaje natural con indicador visual de tipeo.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semántico:** Uso exhaustivo de etiquetas con valor estructural (`header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption`, `footer`), optimizando la accesibilidad y el SEO.
* **Tailwind CSS (CDN):** Framework de utilidades configurado con los tokens de diseño del proyecto:
  * *Paleta Cromática:* `espresso` (`#2A1D16`), `crowshead` (`#241009`), `copper` (`#B06B34`), `cream` (`#F4EDE2`), `parchment` (`#F3E7D6`), `steel` (`#3E4B52`).
  * *Tipografía:* `Fraunces` (serif editorial para títulos), `Inter` (sans-serif para lectura clara en pantalla) y `JetBrains Mono` (fichas técnicas, metadatos y kickers).
* **JavaScript Nativo (ES6+):** Programación pura sin librerías externas pesadas ni frameworks de frontend, garantizando máxima velocidad de carga:
  * Manipulación reactiva del DOM para el cotizador y el selector de vistas del mapa.
  * Validaciones lógicas y manejo de eventos de teclado/foco para accesibilidad.
* **Google Maps API & Embed Service:** Servicio cartográfico externo para geolocalización, trazado de rutas e interactividad.
* **Google Fonts CDN:** Carga optimizada de tipografías web.

---

## 🌐 API y Servicios Externos Integrados

### 1. Google Maps (API & Embed Service)
* **Objetivo de la integración:** Dar cumplimiento estricto a la consigna **3.3 Mapa del recorrido**, incorporando una solución cartográfica interactiva y dinámica que comunique con claridad la propuesta del circuito y el orden de visita.
* **Dónde y cómo se invoca en el proyecto:**
  1. **En el Maquetado HTML (`index.html#mapa`):** Se consume el endpoint de servicios de Google Maps a través del componente `<iframe>`, renderizando el mapa en vivo dentro de un contenedor accesible y responsive adaptado al Design System.
  2. **En el Controlador JavaScript (`index.html` · función `initInteractiveMap`):** Gestiona dinámicamente las llamadas al endpoint cartográfico ante los clics del usuario en las tarjetas de paradas o en la barra de controles, actualizando las vistas sin recargar la página.
* **Parámetros de la API utilizados:**
  * `saddr` *(Start Address / Origen):* Dirección de partida (`Cafe Tortoni, Av. de Mayo 825, Buenos Aires`).
  * `daddr` *(Destination Address / Destino):* Dirección de llegada (`All Saints Cafe, Ciudad de la Paz 2300, Buenos Aires`).
  * `dirflg=r` *(Direction Flag / Modo de Transporte):* **Configurado obligatoriamente en modo Transporte Público (`r` = transit)**, priorizando el enlace en **Subte Línea D** (Catedral ➔ Juramento) y descartando el modo vehicular/auto que viene por defecto.
  * `output=embed`: Parametriza la respuesta del servicio cartográfico para su integración embebida fluida.
  * `q` y `z=17`: Utilizados en las vistas individuales de Parada 1 y Parada 2 para enfocar la cámara con zoom barrial exacto en el punto de interés.
* **Enlace Universal a Google Maps Directions:**
  * Se implementó el protocolo oficial `https://www.google.com/maps/dir/?api=1&origin=...&destination=...&travelmode=transit`, garantizando que al presionar el botón *"Cómo llegar en Subte D"*, el usuario abra de inmediato la app o web de Google Maps con el recorrido en transporte público ya seleccionado y listo para iniciar la navegación GPS.
* **Resiliencia y compatibilidad académica:** Esta arquitectura garantiza funcionamiento continuo en cualquier entorno (GitHub Pages, `localhost`, `file://`) sin riesgo de que la visualización sea bloqueada por límites de cuota o claves privadas de facturación de Google Cloud.

### 2. Google Fonts API
* Integración CDN de las fuentes `Fraunces`, `Inter` y `JetBrains Mono` con preconexión (`preconnect`) a `fonts.googleapis.com` y `fonts.gstatic.com` para acelerar los tiempos de renderizado visual (FCP).

---

## 🚀 Estructura General del Proyecto

```text
desarrollo-web-actividad3/
│
├── index.html            # Página de Inicio: Presentación, propuesta de valor, mapa interactivo con Google Maps y paradas
├── tortoni.html          # Punto de Interés 1: Café Tortoni (Av. de Mayo 825) - Siglo XIX
├── allsaints.html        # Punto de Interés 2: All Saints Cafe (Cdad. de la Paz 2300) - Siglo XXI
├── reserva.html          # Formulario de Reservas en tiempo real + Formulario de Contacto
├── README.md             # Documentación técnica y académica integral del proyecto
│
├── js/
│   └── assistant.js      # Widget interactivo: Asistente Virtual / Barista Bot (FAQ)
│
└── img/                  # Activos multimedia optimizados
    ├── logo.png                  # Isologo oficial de Evolución Espresso
    ├── chevron-down.svg          # Iconografía SVG para dropdowns
    ├── mapa-recorrido.png        # Cartografía de respaldo
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

## ♿ Criterios de Accesibilidad y Usabilidad (WCAG 2.1 AA)

* **Visibilidad del estado del sistema:** Vistas del mapa activas señalizadas con `aria-selected` y contraste visual reforzado, resumen de reservas actualizado en vivo y retroalimentación inmediata en formularios.
* **Control y libertad del usuario:** Cierre de modales con tecla `Escape` o clic en backdrop, y restauración accesible del foco (`lastActiveTrigger.focus()`).
* **Navegación mediante teclado:** Indicadores de foco visibles (`focus:ring-2 focus:ring-copper`) en todos los enlaces, botones y campos interactivos.
* **Skip to content:** Enlace invisible al inicio de cada documento para saltar directamente al contenido principal (`#contenido-principal`).
* **Semántica y etiquetado ARIA:** Atributos `role="tab"`, `role="dialog"`, `aria-label`, `aria-expanded` y textos alternativos detallados en todas las imágenes.

---

## 💻 Instrucciones para Ejecutar o Consultar el Sitio

### Opción 1: Consulta Online (Recomendada)
El sitio se encuentra desplegado y listo para su navegación en:  
👉 **[https://facuz45.github.io/desarrollo-web-actividad3/](https://facuz45.github.io/desarrollo-web-actividad3/)**

### Opción 2: Ejecución Local
Para clonar y levantar el proyecto en un entorno de desarrollo local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/facuz45/desarrollo-web-actividad3.git
   cd desarrollo-web-actividad3
   ```
2. **Iniciar un servidor HTTP local:**
   * Con **Python 3:**
     ```bash
     python -m http.server 8000
     ```
   * O con la extensión **Live Server** de VS Code abriendo el archivo `index.html`.
3. **Acceder desde el navegador:**
   ```text
   http://localhost:8000/index.html
   ```
