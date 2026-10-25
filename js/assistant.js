/**
 * Evolución Espresso — Asistente Virtual & Barista Bot (Actividad 3 · Sección 3.6)
 * Asistente interactivo conversacional para el recorrido temático de café en Buenos Aires.
 * Compatible con vanilla JavaScript, accesible y responsivo.
 */

(function () {
  'use strict';

  // Base de conocimiento del recorrido
  const KNOWLEDGE_BASE = [
    {
      keywords: ['llegar', 'distancia', 'subte', 'metro', 'transporte', 'como voy', 'cómo llegar', 'ubicacion', 'dirección', 'donde queda', 'dónde queda'],
      answer: `<strong>¿Cómo llegar de Tortoni a All Saints?</strong><br>
      • <strong>Punto 1 (Café Tortoni):</strong> Av. de Mayo 825, Casco Histórico (Monserrat).<br>
      • <strong>Punto 2 (All Saints Cafe):</strong> Ciudad de la Paz 2300 (esq. Olazábal), Belgrano.<br><br>
      🚇 <em>Conexión recomendada en Subte:</em> Caminá 2 cuadras hasta <strong>Estación Catedral</strong> (o 9 de Julio) de la <strong>Línea D</strong> y viajá en sentido directo hacia Congreso de Tucumán hasta <strong>Estación Juramento</strong>. El trayecto dura ~22 minutos y salís a solo 200 metros de All Saints.`
    },
    {
      keywords: ['horario', 'horarios', 'abre', 'cierra', 'cuando ir', 'cuándo ir', 'dias', 'días'],
      answer: `<strong>Horarios de atención:</strong><br>
      🏛️ <strong>Café Tortoni:</strong> Lunes a Domingos de 08:00 a 21:00 hs.<br>
      🔬 <strong>All Saints Cafe:</strong> Lunes a Viernes de 08:00 a 20:00 hs | Sábados, Domingos y Feriados de 09:00 a 20:30 hs.<br><br>
      💡 <em>Tip barista:</em> Los fines de semana en Tortoni suele haber fila entre las 16:00 y las 19:00 hs. Recomendamos visitarlo a la mañana (09:00 a 11:30 hs).`
    },
    {
      keywords: ['precio', 'precios', 'costo', 'tarifa', 'valor', 'cuanto cuesta', 'cuánto sale', 'reserva', 'reservas', 'paquete', 'paquetes'],
      answer: `<strong>Paquetes de Experiencias y Tarifas:</strong><br>
      1. <strong>Recorrido Completo (Del Mármol al Método):</strong> $35 USD (~$43.750 ARS) · Incluye ambas paradas, cata doble y guía barista.<br>
      2. <strong>Liturgia Notables (Tortoni):</strong> $20 USD (~$25.000 ARS) · Mesa reservada, café en loza y churros clásicos.<br>
      3. <strong>Laboratorio Specialty (All Saints):</strong> $22 USD (~$27.500 ARS) · Brew bar V60/Aeropress + pastelería.<br><br>
      🎉 <em>¡Descuento grupal de 15% a partir de 4 personas!</em> Podés cotizar y reservar en vivo en la sección <a href="reserva.html" class="underline font-semibold text-copper">Reservas</a>.`
    },
    {
      keywords: ['metodo', 'método', 'filtrado', 'v60', 'aeropress', 'espresso', 'cafe', 'café', 'especialidad', 'grano'],
      answer: `<strong>Contraste de Métodos y Sabores:</strong><br>
      ☕ <strong>Café Tradicional Porteño (Tortoni):</strong> Extracción espresso clásico en máquina italiana de presión, tueste medio-oscuro, cuerpo denso, notas a cacao amargo y crema dorada.<br><br>
      🔬 <strong>Tercera Ola (All Saints):</strong> Métodos de filtrado por goteo e inmersión (V60 japonés y Aeropress). Granos de origen único arábicos (Colombia, Etiopía, Brasil) tostados a la vista. Notas florales, acidez frutal brillante y clarificación limpia.`
    },
    {
      keywords: ['duracion', 'duración', 'tiempo', 'caminata', 'cuanto dura', 'cuánto dura'],
      answer: `<strong>Duración estimada del recorrido:</strong><br>
      El recorrido completo tiene una duración recomendada de <strong>3 horas a 3 horas y media</strong>:<br>
      • ~60 min para disfrutar la historia, arquitectura y café en Café Tortoni.<br>
      • ~25 min de viaje en Subte Línea D entre Casco Histórico y Belgrano.<br>
      • ~75 min en All Saints Cafe para cata técnica de filtrados y pastelería de autor.`
    },
    {
      keywords: ['contacto', 'duda', 'reclamo', 'consulta', 'mensaje', 'telefono', 'teléfono'],
      answer: `Podés dejarnos tu consulta en nuestro <a href="reserva.html#contacto" class="underline font-semibold text-copper">Formulario de Contacto</a> o escribirnos directamente para recorridos corporativos y grupos privados.`
    }
  ];

  // Preguntas sugeridas iniciales
  const SUGGESTIONS = [
    { label: '🚇 ¿Cómo llegar entre cafeterías?', text: '¿Cómo llegar de Tortoni a All Saints?' },
    { label: '🕒 Horarios de visita', text: '¿Cuáles son los horarios de atención?' },
    { label: '☕ Métodos de extracción', text: '¿Qué métodos de café se prueban?' },
    { label: '🎟️ Precios y reservas', text: '¿Cuánto cuesta el recorrido y qué incluye?' },
    { label: '⏱️ Duración de la visita', text: '¿Cuánto tiempo dura el recorrido completo?' }
  ];

  // Renderizar widget flotante en el DOM
  function initChatbotWidget() {
    // Si ya existe en la página, no duplicar
    if (document.getElementById('barista-chatbot-container')) return;

    const container = document.createElement('div');
    container.id = 'barista-chatbot-container';
    container.className = 'fixed bottom-5 right-5 z-[90] font-inter text-espresso';

    container.innerHTML = `
      <!-- Botón Flotante Launcher -->
      <button id="chatbot-launcher" type="button" class="flex items-center gap-2.5 bg-espresso hover:bg-crowshead text-cream px-4 py-3 rounded-full shadow-2xl border border-cream/25 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-copper group cursor-pointer" aria-expanded="false" aria-controls="chatbot-window" aria-label="Abrir asistente virtual barista">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-copper"></span>
        </span>
        <svg class="w-5 h-5 text-copper group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
        <span class="text-sm font-semibold tracking-wide">Asistente Barista</span>
      </button>

      <!-- Ventana de Chat (Modal / Drawer) -->
      <section id="chatbot-window" class="hidden flex-col w-[92vw] sm:w-[390px] h-[520px] max-h-[82vh] bg-cream rounded-2xl shadow-2xl border border-espresso/20 overflow-hidden transition-all duration-300 origin-bottom-right mt-3 fixed bottom-20 right-4 sm:right-6 sm:bottom-20 z-[95]" aria-labelledby="chatbot-title" role="dialog" aria-modal="false">
        
        <!-- Header -->
        <header class="bg-espresso text-cream px-4 py-3.5 flex items-center justify-between border-b border-copper/30">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-copper/30 border border-copper/50 flex items-center justify-center text-lg">
              ☕
            </div>
            <div>
              <h2 id="chatbot-title" class="font-fraunces text-base font-semibold leading-tight text-cream">Barista Bot</h2>
              <p class="text-[11px] text-cream/70 font-mono tracking-wider">Asistente · Evolución Espresso</p>
            </div>
          </div>
          <button id="chatbot-close-btn" type="button" class="text-cream/70 hover:text-cream p-1.5 rounded-lg hover:bg-cream/10 transition-colors focus:outline-none focus:ring-2 focus:ring-copper" aria-label="Cerrar ventana de asistente">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </header>

        <!-- Conversación -->
        <div id="chatbot-messages" class="flex-1 overflow-y-auto p-4 space-y-3.5 bg-parchment/40 text-sm leading-relaxed" aria-live="polite">
          <!-- Mensaje de bienvenida inicial -->
          <div class="flex gap-2.5 items-start">
            <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs flex-shrink-0 mt-0.5">☕</span>
            <div class="bg-white border border-espresso/10 rounded-2xl rounded-tl-sm p-3.5 shadow-sm text-espresso max-w-[85%]">
              <p>¡Hola! Soy tu <strong>Barista Bot</strong>. Te acompaño a recorrer el contraste entre el <strong>Café Tortoni (1858)</strong> y el laboratorio de <strong>All Saints Cafe (s. XXI)</strong>.</p>
              <p class="mt-2 text-xs text-espresso-soft">Elegí una consulta frecuente o escribime directamente abajo 👇</p>
            </div>
          </div>

          <!-- Chips de preguntas frecuentes -->
          <div id="chatbot-chips-container" class="flex flex-wrap gap-1.5 pt-1"></div>
        </div>

        <!-- Indicador de escritura (oculto por defecto) -->
        <div id="chatbot-typing" class="hidden px-4 py-1.5 bg-parchment/60 text-xs text-espresso-soft italic flex items-center gap-1.5">
          <span class="inline-block w-1.5 h-1.5 bg-copper rounded-full animate-bounce"></span>
          <span class="inline-block w-1.5 h-1.5 bg-copper rounded-full animate-bounce [animation-delay:0.2s]"></span>
          <span class="inline-block w-1.5 h-1.5 bg-copper rounded-full animate-bounce [animation-delay:0.4s]"></span>
          <span>El barista está consultando las notas...</span>
        </div>

        <!-- Input / Footer -->
        <form id="chatbot-form" class="p-3 bg-cream border-t border-espresso/15 flex gap-2 items-center">
          <input type="text" id="chatbot-input" class="flex-1 bg-white border border-espresso/25 rounded-xl px-3.5 py-2.5 text-sm text-espresso placeholder:text-espresso-soft/60 focus:outline-none focus:ring-2 focus:ring-copper focus:border-copper" placeholder="Escribí tu pregunta sobre el recorrido..." autocomplete="off">
          <button type="submit" class="bg-copper hover:bg-copper-deep text-cream p-2.5 rounded-xl shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-espresso disabled:opacity-50 cursor-pointer" aria-label="Enviar pregunta">
            <svg class="w-5 h-5 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </form>

      </section>
    `;

    document.body.appendChild(container);
    setupChatbotEvents();
  }

  // Configuración de eventos y lógica del Chatbot
  function setupChatbotEvents() {
    const launcher = document.getElementById('chatbot-launcher');
    const win = document.getElementById('chatbot-window');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const form = document.getElementById('chatbot-form');
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');
    const chipsContainer = document.getElementById('chatbot-chips-container');
    const typingIndicator = document.getElementById('chatbot-typing');

    let isOpen = false;

    // Renderizar chips de sugerencias
    SUGGESTIONS.forEach(s => {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'text-xs bg-white hover:bg-copper hover:text-cream text-espresso-soft border border-espresso/15 rounded-full px-3 py-1.5 transition-colors text-left shadow-2xs focus:outline-none focus:ring-1 focus:ring-copper cursor-pointer';
      chip.textContent = s.label;
      chip.addEventListener('click', () => {
        handleUserMessage(s.text);
      });
      chipsContainer.appendChild(chip);
    });

    // Abrir / Cerrar ventana
    function toggleChat(open) {
      isOpen = open !== undefined ? open : !isOpen;
      launcher.setAttribute('aria-expanded', isOpen);

      if (isOpen) {
        win.classList.remove('hidden');
        win.classList.add('flex');
        launcher.classList.add('scale-95', 'opacity-80');
        setTimeout(() => input.focus(), 150);
      } else {
        win.classList.add('hidden');
        win.classList.remove('flex');
        launcher.classList.remove('scale-95', 'opacity-80');
        launcher.focus();
      }
    }

    launcher.addEventListener('click', () => toggleChat());
    closeBtn.addEventListener('click', () => toggleChat(false));

    // Cerrar con tecla Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleChat(false);
      }
    });

    // Envío del formulario de texto
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = input.value.trim();
      if (!text) return;
      handleUserMessage(text);
      input.value = '';
    });

    // Manejar mensaje y generar respuesta
    function handleUserMessage(userText) {
      appendMessage('user', userText);

      // Mostrar indicador de "escribiendo"
      typingIndicator.classList.remove('hidden');
      messages.scrollTop = messages.scrollHeight;

      setTimeout(() => {
        typingIndicator.classList.add('hidden');
        const botReply = generateReply(userText);
        appendMessage('bot', botReply);
      }, 450);
    }

    // Agregar burbuja de chat
    function appendMessage(sender, htmlContent) {
      const msgDiv = document.createElement('div');
      msgDiv.className = 'flex gap-2.5 items-start ' + (sender === 'user' ? 'justify-end' : '');

      if (sender === 'user') {
        msgDiv.innerHTML = `
          <div class="bg-espresso text-cream rounded-2xl rounded-tr-sm p-3 shadow-sm max-w-[85%] text-sm">
            <p>${escapeHTML(htmlContent)}</p>
          </div>
        `;
      } else {
        msgDiv.innerHTML = `
          <span class="w-7 h-7 rounded-full bg-espresso text-cream flex items-center justify-center text-xs flex-shrink-0 mt-0.5">☕</span>
          <div class="bg-white border border-espresso/10 rounded-2xl rounded-tl-sm p-3.5 shadow-sm text-espresso max-w-[85%] text-sm">
            ${htmlContent}
          </div>
        `;
      }

      messages.appendChild(msgDiv);
      messages.scrollTop = messages.scrollHeight;
    }

    // Motor de búsqueda de respuestas en la base de conocimiento
    function generateReply(text) {
      const clean = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

      // Saludos simples
      if (/^(hola|buenas|que tal|qué tal|buen dia|buen día|buenas tardes|alo)/i.test(clean)) {
        return `¡Hola! Un gusto saludarte. ¿En qué puedo orientarte hoy sobre el recorrido? Podés preguntarme por las cafeterías, cómo moverte en Subte Línea D, horarios, precios o métodos de extracción.`;
      }

      // Agradecimientos
      if (/^(gracias|muchas gracias|genial|perfecto|joya|excelente)/i.test(clean)) {
        return `¡De nada! Es un placer ayudarte a planificar esta experiencia cafetera. ¿Tenés alguna otra duda o querés asegurar tu lugar en <a href="reserva.html" class="underline font-semibold text-copper">Reservas</a>?`;
      }

      // Buscar coincidencia en la base de conocimiento
      for (const item of KNOWLEDGE_BASE) {
        for (const kw of item.keywords) {
          const cleanKw = kw.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
          if (clean.includes(cleanKw)) {
            return item.answer;
          }
        }
      }

      // Respuesta de fallback pedagógica y orientativa
      return `Interesante consulta. Como asistente del recorrido, puedo brindarte información detallada sobre:<br><br>
      • 🚇 <strong>Traslados:</strong> Cómo viajar de Tortoni a All Saints en la Línea D.<br>
      • 🏛️ <strong>Patrimonio:</strong> Historia y arquitectura de Café Tortoni (1858).<br>
      • 🔬 <strong>Especialidad:</strong> Métodos V60 y Aeropress en All Saints Cafe.<br>
      • 🎟️ <strong>Reservas:</strong> Tarifas en pesos y dólares con cotización actualizada.<br><br>
      ¿Te gustaría consultar alguno de estos puntos, o preferís dejarnos un mensaje en nuestro <a href="reserva.html#contacto" class="underline font-semibold text-copper">Formulario de Contacto</a>?`;
    }

    function escapeHTML(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }
  }

  // Inicializar al cargar el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbotWidget);
  } else {
    initChatbotWidget();
  }
})();
