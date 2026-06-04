/* ══════════════════════════════════════════════════════
   EXAMEN v2 — RAZONAMIENTO Y PLANIFICACIÓN AUTOMÁTICA
   Tipos de pregunta:
     type: 'mc'   → opción múltiple (4 opciones)
     type: 'tf'   → verdadero / falso
     type: 'fill' → completar la frase (4 opciones)
══════════════════════════════════════════════════════ */

const DB = [

  /* ══════════════════════════════════════════
     TEMA 1 — TOMA DE DECISIONES
  ══════════════════════════════════════════ */
  {
    id: 1, tema: "Tema 1: Toma de decisiones", type: "mc",
    pregunta: "Al analizar una situación para tomar una decisión, ¿qué tres capacidades están directamente relacionadas con dicha capacidad?",
    opciones: [
      "Velocidad de reacción, memoria histórica y trabajo en equipo",
      "Asunción de riesgo, creatividad y búsqueda de alternativas",
      "Liderazgo, obediencia y resolución matemática",
      "Planificación financiera, negociación y comunicación"
    ],
    correcta: 1
  },
  {
    id: 2, tema: "Tema 1: Toma de decisiones", type: "tf",
    pregunta: "Las decisiones no programadas son rutinarias, repetitivas y no requieren un proceso de decisión complejo.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso
  },
  {
    id: 3, tema: "Tema 1: Toma de decisiones", type: "fill",
    pregunta: "El objetivo principal de la primera etapa en la resolución de problemas es comprender _____ del problema.",
    opciones: [
      "la solución definitiva",
      "la complejidad",
      "los recursos disponibles",
      "el tiempo necesario"
    ],
    correcta: 1,
    blank: "comprender _____ del problema"
  },
  {
    id: 4, tema: "Tema 1: Toma de decisiones", type: "mc",
    pregunta: "Según Wooldridge (1994), ¿en cuántas categorías principales se clasifica la arquitectura de agentes inteligentes?",
    opciones: ["Dos", "Cuatro", "Tres", "Cinco"],
    correcta: 2
  },
  {
    id: 5, tema: "Tema 1: Toma de decisiones", type: "mc",
    pregunta: "¿Cuál es el orden correcto de las tres fases principales del proceso de toma de decisiones de un agente inteligente?",
    opciones: [
      "Actuar → Pensar → Sentir",
      "Pensar → Sentir → Actuar",
      "Sentir → Pensar → Actuar",
      "Decidir → Extraer → Convertir"
    ],
    correcta: 2
  },
  {
    id: 6, tema: "Tema 1: Toma de decisiones", type: "tf",
    pregunta: "Los agentes basados en búsquedas y planificación resuelven problemas explorando el espacio de estados para alcanzar una meta u objetivo deseado.",
    opciones: ["Verdadero", "Falso"],
    correcta: 0  // Verdadero
  },

  /* ══════════════════════════════════════════
     TEMA 2 — REPRESENTACIÓN DEL CONOCIMIENTO
  ══════════════════════════════════════════ */
  {
    id: 7, tema: "Tema 2: Representación del conocimiento y razonamiento", type: "mc",
    pregunta: "En todo razonamiento, ¿cuáles son los dos elementos fundamentales que siempre están presentes?",
    opciones: [
      "Premisas y deducciones",
      "Contenido y forma",
      "Hipótesis y demostración",
      "Argumento y conclusión"
    ],
    correcta: 1
  },
  {
    id: 8, tema: "Tema 2: Representación del conocimiento y razonamiento", type: "tf",
    pregunta: "Un razonamiento es inválido cuando, partiendo de premisas verdaderas, se llega a una conclusión que también resulta verdadera.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — la conclusión debe ser FALSA
  },
  {
    id: 9, tema: "Tema 2: Representación del conocimiento y razonamiento", type: "fill",
    pregunta: "El método inductivo fue propuesto por _____ con el objetivo de generalizar conclusiones universales a partir de la observación de casos particulares.",
    opciones: [
      "Aristóteles",
      "Descartes",
      "Francis Bacon",
      "Platón"
    ],
    correcta: 2,
    blank: "propuesto por _____"
  },
  {
    id: 10, tema: "Tema 2: Representación del conocimiento y razonamiento", type: "mc",
    pregunta: "¿En qué se diferencia el razonamiento inductivo del deductivo respecto a cómo se obtiene la conclusión?",
    opciones: [
      "En el inductivo la conclusión se deriva obligatoriamente de las premisas",
      "En el deductivo se parte de observar casos particulares",
      "En el inductivo la conclusión se obtiene de la observación directa de casos particulares, no de forma obligatoria desde las premisas",
      "No existe diferencia entre ambos métodos"
    ],
    correcta: 2
  },

  /* ══════════════════════════════════════════
     TEMA 3 — TIPOS DE LÓGICA
  ══════════════════════════════════════════ */
  {
    id: 11, tema: "Tema 3: Tipos de lógica", type: "mc",
    pregunta: "¿Cuál es el filósofo considerado padre de la lógica por haber desarrollado el silogismo como argumento válido?",
    opciones: ["Platón", "Sócrates", "Aristóteles", "Pitágoras"],
    correcta: 2
  },
  {
    id: 12, tema: "Tema 3: Tipos de lógica", type: "tf",
    pregunta: "En lógica proposicional, una proposición puede tomar únicamente dos valores: verdadero (V/1) o falso (F/0).",
    opciones: ["Verdadero", "Falso"],
    correcta: 0  // Verdadero
  },
  {
    id: 13, tema: "Tema 3: Tipos de lógica", type: "fill",
    pregunta: "La lógica _____ emplea más de dos valores de verdad para describir información difusa, vaga o incierta.",
    opciones: [
      "proposicional",
      "descriptiva",
      "multivaluada",
      "modal"
    ],
    correcta: 2,
    blank: "La lógica _____"
  },
  {
    id: 14, tema: "Tema 3: Tipos de lógica", type: "mc",
    pregunta: "¿Por qué son adecuadas las lógicas descriptivas para la web semántica?",
    opciones: [
      "Porque ejecutan código más rápido que otros lenguajes formales",
      "Porque son útiles para agregar razonamiento a la red de redes",
      "Porque únicamente manejan los valores verdadero y falso",
      "Porque fueron diseñadas exclusivamente para entornos de internet"
    ],
    correcta: 1
  },
  {
    id: 15, tema: "Tema 3: Tipos de lógica", type: "tf",
    pregunta: "El silogismo es un razonamiento formado por tres premisas y dos conclusiones derivadas de ellas.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — dos premisas y UNA conclusión
  },

  /* ══════════════════════════════════════════
     TEMA 4 — PROBLEMAS DE BÚSQUEDA
  ══════════════════════════════════════════ */
  {
    id: 16, tema: "Tema 4: Problemas de búsqueda", type: "fill",
    pregunta: "En Inteligencia Artificial, una función heurística se define como una _____ de lo que falta para conseguir el objetivo.",
    opciones: [
      "garantía",
      "estimación",
      "demostración",
      "restricción"
    ],
    correcta: 1,
    blank: "se define como una _____"
  },
  {
    id: 17, tema: "Tema 4: Problemas de búsqueda", type: "mc",
    pregunta: "¿Qué distingue a la búsqueda no informada de la informada en Inteligencia Artificial?",
    opciones: [
      "La búsqueda no informada usa heurísticas avanzadas; la informada no usa ninguna",
      "La búsqueda no informada siempre encuentra la solución óptima",
      "La búsqueda no informada no emplea heurística alguna y evalúa cada estado sin saber si es mejor que el anterior",
      "La búsqueda informada solo funciona en grafos sin ciclos"
    ],
    correcta: 2
  },
  {
    id: 18, tema: "Tema 4: Problemas de búsqueda", type: "tf",
    pregunta: "La búsqueda en amplitud (BFS) expande primero el nodo de mayor profundidad antes de continuar con los niveles superiores.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — expande nivel a nivel, no por mayor profundidad
  },
  {
    id: 19, tema: "Tema 4: Problemas de búsqueda", type: "mc",
    pregunta: "La búsqueda en profundidad (DFS) se caracteriza por intentar desarrollar:",
    opciones: [
      "Todos los nodos del nivel actual antes de avanzar al siguiente",
      "Un camino de longitud indeterminada hacia metas profundas con el mínimo de ramificaciones posibles",
      "El nodo con mayor valor heurístico en cada paso",
      "El árbol de búsqueda de derecha a izquierda exclusivamente"
    ],
    correcta: 1
  },

  /* ══════════════════════════════════════════
     TEMA 5 — BÚSQUEDA INFORMADA
  ══════════════════════════════════════════ */
  {
    id: 20, tema: "Tema 5: Búsqueda informada", type: "tf",
    pregunta: "La función heurística en la búsqueda informada es independiente del estado y permanece constante durante toda la búsqueda.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — es dependiente del estado
  },
  {
    id: 21, tema: "Tema 5: Búsqueda informada", type: "fill",
    pregunta: "El algoritmo _____ es uno de los algoritmos de búsqueda informada más conocidos y utiliza tanto el costo acumulado como la función heurística.",
    opciones: [
      "DFS",
      "BFS",
      "A*",
      "Minimax"
    ],
    correcta: 2,
    blank: "El algoritmo _____"
  },
  {
    id: 22, tema: "Tema 5: Búsqueda informada", type: "mc",
    pregunta: "¿Cuál de los siguientes NO corresponde a un algoritmo de búsqueda informada?",
    opciones: [
      "Algoritmo A*",
      "Hill climbing (subida de colina)",
      "Búsqueda en amplitud (BFS)",
      "Búsqueda por sub-objetivos"
    ],
    correcta: 2
  },

  /* ══════════════════════════════════════════
     TEMA 6 — BÚSQUEDA ENTRE ADVERSARIOS
  ══════════════════════════════════════════ */
  {
    id: 23, tema: "Tema 6: Búsqueda entre adversarios", type: "mc",
    pregunta: "¿Cómo se definen los problemas entre adversarios en Inteligencia Artificial?",
    opciones: [
      "Problemas donde un único agente busca la solución óptima en solitario",
      "Aquellos en los que más de un agente especializado actúa de forma concurrente en un mismo entorno",
      "Problemas que solo se resuelven con lógica difusa",
      "Problemas sin solución determinista conocida"
    ],
    correcta: 1
  },
  {
    id: 24, tema: "Tema 6: Búsqueda entre adversarios", type: "tf",
    pregunta: "El algoritmo Minimax busca maximizar la ganancia esperada en juegos con adversario, sin considerar las posibles pérdidas del oponente.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — minimiza la pérdida máxima esperada
  },
  {
    id: 25, tema: "Tema 6: Búsqueda entre adversarios", type: "fill",
    pregunta: "La poda _____ permite tomar una decisión Minimax correcta sin necesidad de examinar todos los nodos del árbol de búsqueda.",
    opciones: [
      "gamma-delta",
      "alfa-beta",
      "expecti-max",
      "sigma-omega"
    ],
    correcta: 1,
    blank: "La poda _____"
  },
  {
    id: 26, tema: "Tema 6: Búsqueda entre adversarios", type: "mc",
    pregunta: "¿Cuál de los siguientes algoritmos NO se utiliza en problemas de búsqueda entre adversarios?",
    opciones: [
      "Minimax",
      "Poda alfa-beta",
      "Expectiminimax",
      "Búsqueda en amplitud (BFS)"
    ],
    correcta: 3
  },

  /* ══════════════════════════════════════════
     TEMA 7 — PLANIFICACIÓN
  ══════════════════════════════════════════ */
  {
    id: 27, tema: "Tema 7: Problemas de planificación", type: "mc",
    pregunta: "¿Cuáles son las tres características del modelo de entorno sobre el que opera la planificación clásica?",
    opciones: [
      "Estocástico, dinámico y parcialmente observable",
      "Determinista, estático y totalmente observable",
      "No determinista, dinámico y totalmente observable",
      "Estocástico, estático y parcialmente observable"
    ],
    correcta: 1
  },
  {
    id: 28, tema: "Tema 7: Problemas de planificación", type: "tf",
    pregunta: "Un plan parcialmente ordenado (POP) especifica todas y cada una de las precedencias entre las acciones que lo componen.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — solo ALGUNAS precedencias
  },
  {
    id: 29, tema: "Tema 7: Problemas de planificación", type: "fill",
    pregunta: "En planificación automática, una _____ es un paso simple y atómico dentro de un plan que hace que un agente ejecute algo concreto.",
    opciones: [
      "heurística",
      "proposición",
      "acción",
      "meta"
    ],
    correcta: 2,
    blank: "una _____ es un paso simple"
  },
  {
    id: 30, tema: "Tema 7: Problemas de planificación", type: "mc",
    pregunta: "En el proceso de planificación, ¿qué tres elementos le proporciona el agente al planificador?",
    opciones: [
      "Un grafo de estados, un conjunto de restricciones y una función de evaluación",
      "Un estado actual del entorno, un conjunto de acciones y una meta a satisfacer",
      "Una base de conocimiento, un motor de inferencia y un conjunto de reglas",
      "Un árbol de búsqueda, una heurística admisible y una función de utilidad"
    ],
    correcta: 1
  },

  /* ══════════════════════════════════════════
     TEMA 8 — STRIPS
  ══════════════════════════════════════════ */
  {
    id: 31, tema: "Tema 8: Sistemas basados en STRIPS", type: "mc",
    pregunta: "¿En qué consiste la heurística STRIPS al resolver un problema de planificación?",
    opciones: [
      "En calcular el costo exacto de alcanzar cada sub-objetivo",
      "En encontrar los planes parciales para alcanzar cada proposición del estado objetivo",
      "En eliminar acciones irrelevantes del plan completo",
      "En usar búsqueda en amplitud sobre el espacio de estados"
    ],
    correcta: 1
  },
  {
    id: 32, tema: "Tema 8: Sistemas basados en STRIPS", type: "tf",
    pregunta: "PDDL organiza los componentes de un planificador en un único archivo de configuración global que incluye dominio y problema a la vez.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — DOS conjuntos separados: dominio y problema
  },
  {
    id: 33, tema: "Tema 8: Sistemas basados en STRIPS", type: "fill",
    pregunta: "PDDL divide la descripción de un planificador en dos conjuntos: uno de definición del _____ y otro de definición del problema.",
    opciones: [
      "agente",
      "dominio",
      "objetivo",
      "entorno"
    ],
    correcta: 1,
    blank: "definición del _____"
  },

  /* ══════════════════════════════════════════
     TEMA 9 — HTN
  ══════════════════════════════════════════ */
  {
    id: 34, tema: "Tema 9: Redes de tareas Jerárquicas (HTN)", type: "mc",
    pregunta: "¿Para qué tipo de dominios resulta especialmente adecuado el enfoque HTN?",
    opciones: [
      "Dominios con información completamente desconocida para el agente",
      "Dominios donde las tareas se organizan naturalmente en una jerarquía",
      "Dominios altamente estocásticos con múltiples fuentes de incertidumbre",
      "Dominios donde solo existe una única acción primitiva posible"
    ],
    correcta: 1
  },
  {
    id: 35, tema: "Tema 9: Redes de tareas Jerárquicas (HTN)", type: "tf",
    pregunta: "En una red HTN, el proceso de planificación termina cuando todas las tareas primitivas han sido decompostas en tareas compuestas de mayor nivel.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — termina cuando todas las COMPUESTAS se descomponen en PRIMITIVAS
  },
  {
    id: 36, tema: "Tema 9: Redes de tareas Jerárquicas (HTN)", type: "fill",
    pregunta: "Al definir tareas en una HTN, los dos elementos principales que se deben establecer son las _____ necesarias y los efectos que se crean en el entorno.",
    opciones: [
      "consecuencias",
      "precondiciones",
      "restricciones temporales",
      "funciones heurísticas"
    ],
    correcta: 1,
    blank: "son las _____ necesarias"
  },

  /* ══════════════════════════════════════════
     TEMA 11 — PLANIFICACIÓN MULTI AGENTE
  ══════════════════════════════════════════ */
  {
    id: 37, tema: "Tema 11: Planificación por múltiples agentes", type: "mc",
    pregunta: "¿Cuál es el principal reto identificado al implementar planificación multi agente?",
    opciones: [
      "La falta de objetivos compartidos entre los distintos agentes",
      "El desarrollo de los protocolos de comunicación entre agentes",
      "El exceso de recursos computacionales disponibles",
      "La imposibilidad de los agentes de percibir el entorno"
    ],
    correcta: 1
  },
  {
    id: 38, tema: "Tema 11: Planificación por múltiples agentes", type: "tf",
    pregunta: "FMAP utiliza un proceso de control mediante mensajes broadcast para coordinar a los agentes participantes en cada iteración.",
    opciones: ["Verdadero", "Falso"],
    correcta: 1  // Falso — NO usa broadcast; usa liderazgo democrático
  },
  {
    id: 39, tema: "Tema 11: Planificación por múltiples agentes", type: "fill",
    pregunta: "En FMAP, el algoritmo general se divide en tres fases: intercambio de información, refinamiento individual y proceso de _____.",
    opciones: [
      "evaluación",
      "coordinación",
      "exploración",
      "validación"
    ],
    correcta: 1,
    blank: "proceso de _____"
  },
  {
    id: 40, tema: "Tema 11: Planificación por múltiples agentes", type: "mc",
    pregunta: "En FMAP, ¿cómo se elige al agente coordinador en cada iteración del proceso de refinamiento?",
    opciones: [
      "Se elige siempre al agente con mayor capacidad computacional",
      "Se elige siempre al primer agente de la lista predefinida",
      "Se elige de manera aleatoria en la primera iteración; luego se rota democráticamente",
      "Es designado permanentemente por un agente supervisor externo"
    ],
    correcta: 2
  }

]; // fin DB

/* ══════════════════════════════════════════════════════
   ESTADO GLOBAL
══════════════════════════════════════════════════════ */
let preguntasActivas = [];
let respuestas = {};   // { id: indexOpcion }

/* ══════════════════════════════════════════════════════
   SELECCIÓN — 20 preguntas con al menos 1 por tema
══════════════════════════════════════════════════════ */
function seleccionarPreguntas() {
  const porTema = {};
  DB.forEach(p => {
    if (!porTema[p.tema]) porTema[p.tema] = [];
    porTema[p.tema].push(p);
  });

  const temas = Object.keys(porTema);
  const seleccionadas = [];

  // 1 garantizada por tema (aleatoria dentro del tema)
  temas.forEach(tema => {
    const pool = [...porTema[tema]];
    const idx = Math.floor(Math.random() * pool.length);
    seleccionadas.push(pool[idx]);
  });

  // Rellenar hasta 20 con las restantes
  let restantes = DB.filter(p => !seleccionadas.includes(p));
  restantes = restantes.sort(() => Math.random() - .5);
  while (seleccionadas.length < 20 && restantes.length > 0) {
    seleccionadas.push(restantes.pop());
  }

  return seleccionadas.sort(() => Math.random() - .5);
}

/* ══════════════════════════════════════════════════════
   INICIAR EXAMEN
══════════════════════════════════════════════════════ */
function iniciarExamen() {
  preguntasActivas = seleccionarPreguntas();
  respuestas = {};

  const body = document.getElementById('exam-body');
  body.innerHTML = '';

  preguntasActivas.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.style.animationDelay = `${i * 0.04}s`;

    const typeLabelMap = { mc: 'OM', tf: 'V/F', fill: 'CF' };
    const typeLabel    = typeLabelMap[p.type] || 'OM';

    // Texto de la pregunta (para fill, mostramos el blank visual)
    const textoQ = p.type === 'fill'
      ? p.pregunta.replace('_____', '<span class="blank">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>')
      : p.pregunta;

    // Opciones según tipo
    let opcionesHTML = '';
    if (p.type === 'tf') {
      opcionesHTML = `
        <div class="tf-row">
          <div class="opt tf-v" id="opt-${p.id}-0" onclick="elegir(${p.id}, 0)">
            <div class="opt-text">✅ Verdadero</div>
          </div>
          <div class="opt tf-f" id="opt-${p.id}-1" onclick="elegir(${p.id}, 1)">
            <div class="opt-text">❌ Falso</div>
          </div>
        </div>`;
    } else {
      opcionesHTML = `<div class="options">
        ${p.opciones.map((o, oi) => `
          <div class="opt" id="opt-${p.id}-${oi}" onclick="elegir(${p.id}, ${oi})">
            <div class="opt-letter">${'ABCD'[oi]}</div>
            <div class="opt-text">${o}</div>
          </div>`).join('')}
      </div>`;
    }

    card.innerHTML = `
      <div class="q-meta">
        <span class="q-num">#${i + 1}</span>
        <span class="q-tema">${p.tema}</span>
        <span class="q-type-badge ${p.type}">${typeLabel}</span>
      </div>
      <div class="q-text">${textoQ}</div>
      ${opcionesHTML}
    `;
    body.appendChild(card);
  });

  actualizarProgreso();
  document.getElementById('btn-terminar').disabled = true;
  document.getElementById('screen-home').style.display    = 'none';
  document.getElementById('screen-results').style.display = 'none';
  document.getElementById('screen-exam').style.display    = 'block';
  window.scrollTo({ top: 0 });
}

/* ══════════════════════════════════════════════════════
   ELEGIR OPCIÓN
══════════════════════════════════════════════════════ */
function elegir(pregId, opIdx) {
  const prev = respuestas[pregId];
  if (prev !== undefined) {
    document.getElementById(`opt-${pregId}-${prev}`)?.classList.remove('selected');
  }
  respuestas[pregId] = opIdx;
  document.getElementById(`opt-${pregId}-${opIdx}`)?.classList.add('selected');
  actualizarProgreso();
}

function actualizarProgreso() {
  const total      = preguntasActivas.length;
  const respondidas = Object.keys(respuestas).length;
  const pct        = (respondidas / total) * 100;

  document.getElementById('progress-fill').style.width   = pct + '%';
  document.getElementById('progress-label').textContent  = `${respondidas} / ${total} respondidas`;
  document.getElementById('ans-count').textContent        = respondidas;
  document.getElementById('btn-terminar').disabled        = respondidas < total;
}

/* ══════════════════════════════════════════════════════
   TERMINAR EXAMEN
══════════════════════════════════════════════════════ */
function terminarExamen() {
  const total = preguntasActivas.length;
  let correctas = 0;
  const incorrectas = [];

  preguntasActivas.forEach(p => {
    if (respuestas[p.id] === p.correcta) {
      correctas++;
    } else {
      incorrectas.push({ pregunta: p, tuRespuesta: respuestas[p.id] });
    }
  });

  const cal = Math.round((correctas / total) * 100);

  // Anillo
  const circ = 408;
  const offset = circ - (cal / 100) * circ;
  const ring = document.getElementById('ring-fill');
  ring.style.strokeDashoffset = circ;
  ring.style.stroke = cal >= 70 ? 'var(--green)' : cal >= 50 ? 'var(--yellow)' : 'var(--red)';
  setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);

  document.getElementById('score-num').textContent   = cal;
  document.getElementById('stat-correct').textContent = correctas;
  document.getElementById('stat-wrong').textContent  = total - correctas;
  document.getElementById('stat-score').textContent  = cal + '/100';

  let label, sub;
  if (cal >= 90) { label = '🏆 Excelente';  sub = '¡Dominas el material completamente!'; }
  else if (cal >= 70) { label = '✅ Aprobado';  sub = 'Buen desempeño. Sigue repasando.'; }
  else if (cal >= 50) { label = '⚠️ Regular';   sub = 'Revisa los temas con errores.'; }
  else               { label = '❌ Reprueba'; sub = 'Necesitas repasar el material a fondo.'; }

  document.getElementById('result-label').textContent = label;
  document.getElementById('result-sub').textContent   = sub;

  // Incorrectas
  const sec = document.getElementById('incorrect-section');
  sec.innerHTML = '';

  if (incorrectas.length === 0) {
    sec.innerHTML = `<p style="text-align:center;color:var(--green);font-family:'Syne',sans-serif;font-size:1.1rem;padding:2rem">🎉 ¡Todas las respuestas son correctas!</p>`;
  } else {
    const titulo = document.createElement('div');
    titulo.className = 'section-title';
    titulo.textContent = `Preguntas incorrectas (${incorrectas.length})`;
    sec.appendChild(titulo);

    const typeLabelMap = { mc: 'OM', tf: 'V/F', fill: 'CF' };

    incorrectas.forEach(({ pregunta: p, tuRespuesta }) => {
      const card = document.createElement('div');
      card.className = 'incorrect-card';

      const textoMostrar = p.type === 'fill'
        ? p.pregunta.replace('_____', `<strong>[${p.opciones[p.correcta]}]</strong>`)
        : p.pregunta;

      card.innerHTML = `
        <div class="ic-meta">
          <span class="ic-tag tag-wrong">Incorrecta</span>
          <span class="ic-tag tag-tema">${p.tema}</span>
          <span class="ic-tag tag-type ${p.type}">${typeLabelMap[p.type]}</span>
        </div>
        <div class="ic-question">${textoMostrar}</div>
        <div class="ic-answers">
          <div class="ic-answer yours">
            <span class="ans-icon">❌</span>
            <span><strong>Tu respuesta:</strong> ${p.opciones[tuRespuesta]}</span>
          </div>
          <div class="ic-answer correct">
            <span class="ans-icon">✅</span>
            <span><strong>Respuesta correcta:</strong> ${p.opciones[p.correcta]}</span>
          </div>
        </div>
      `;
      sec.appendChild(card);
    });
  }

  document.getElementById('screen-exam').style.display    = 'none';
  document.getElementById('screen-results').style.display = 'block';
  window.scrollTo({ top: 0 });
}

/* ══════════════════════════════════════════════════════
   REINICIAR
══════════════════════════════════════════════════════ */
function reiniciar() {
  document.getElementById('screen-results').style.display = 'none';
  document.getElementById('screen-home').style.display    = 'flex';
  window.scrollTo({ top: 0 });
}
