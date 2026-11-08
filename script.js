function calcularDiagnostico() {
    // 1. Recoger los valores del formulario
    const doctor = document.getElementById("p_doctor").value;
    const estancia = document.getElementById("p_estancia").value;
    const articulos = document.getElementById("p_articulos").value;
    const docencia = document.getElementById("p_docencia").value;

    const cardResultado = document.getElementById("resultado-card");
    const contenidoSubetapas = document.getElementById("subetapas-contenido");

    let figura = "";
    let requisito = "";
    let via = "";
    let decisiones = [];
    let checklist = [];

    // 2. Lógica de cruce de variables (Árbol de decisión académico)
    if (doctor === "no") {
        figura = "Doctorado (Paso 0) & Planificación Predoctoral";
        requisito = "Matrícula en programa de doctorado y avance de tesis";
        via = "Vía Académica / Universidad";
        
        decisiones = [
            "<strong>Tesis Tradicional vs. Compendio de Publicaciones:</strong> Con tus métricas actuales, valorar el compendio te permitiría llegar a la defensa con los artículos ya publicados.",
            "<strong>Estrategia de Estancias:</strong> Es el momento clave para planificar una estancia de 3+ meses para lograr la Mención Internacional."
        ];
        
        if (articulos === "0") {
            checklist.push("<strong>Urgente - Investigación:</strong> Priorizar la redacción de al menos 1-2 artículos JCR/SJR antes de enfilar el tercer año de tesis.");
        } else {
            checklist.push("<strong>Investigación en marcha:</strong> Buen ritmo de publicaciones. Mantén perfiles actualizados en ORCID y Google Scholar.");
        }

        if (docencia === "0") {
            checklist.push("<strong>Docencia:</strong> Solicitar la 'venia docendi' en tu departamento para empezar a sumar horas oficiales (hasta el límite de tu contrato).");
        } else {
            checklist.push("<strong>Docencia:</strong> ¡Excelente! Ya acumulas horas docentes. Guarda certificados de cada curso impartido.");
        }

    } else {
        // Ya es Doctor
        if (estancia === "si" && (articulos === "3_plus")) {
            figura = "Contrato Postdoctoral Competitivo (Margarita Salas / Juan de la Cierva)";
            requisito = "Título de Doctor reciente + CV de alto impacto con movilidad";
            via = "Convocatoria competitiva pública (Ministerio / CCAA). Sin ANECA directa.";
            
            decisiones = [
                "<strong>Movilidad postdoctoral:</strong> Postular a centros de prestigio diferentes al de tu doctorado para maximizar puntuación en convocatorias estatales.",
                "<strong>Acreditación PEP a futuro:</strong> Ir recopilando méritos para solicitar la acreditación a Profesor Permanente Laboral (PPL) en paralelo."
            ];
            
            checklist = [
                "Carta de aval o aceptación de un grupo receptor de excelencia.",
                "Certificado oficial de la fecha de lectura de la tesis (para cumplir la ventana temporal de los programas)."
            ];

        } else if (docencia === "mas_60" && articulos !== "0") {
            figura = "Profesor Permanente Laboral (PPL) / Profesor Ayudante Doctor (PAD)";
            requisito = "Título de Doctor/a + Experiencia docente acreditada";
            via = "Acreditación ANECA (Programa PEP/PPL) o Vía Directa LOSU (para PAD)";
            
            decisiones = [
                "Preparar la memoria de acreditación para la agencia evaluadora (ANECA o agencia autonómica como AQU/AVAP).",
                "Revisar los umbrales mínimos de sexenios equivalentes y tramos de investigación de tu rama."
            ];
            
            checklist = [
                "Expediente completo de encuestas de satisfacción docente (si procede).",
                "Certificados firmados por secretaría de departamento de todas las horas impartidas."
            ];

        } else {
            figura = "Acreditación a Profesor Titular de Universidad (TU) / PPL Consolidado";
            requisito = "Doctorado consolidado + Méritos de investigación y docencia avanzados";
            via = "Acreditación ANECA (Programa ACADEMIA) / Cuerpo de Funcionarios";
            
            decisiones = [
                "Auditoría de sexenios: Verificar si tus artículos cubren los criterios exigidos en Q1/Q2 por la comisión de tu área.",
                "Dirección de TFG/TFM o participación en tribunales para sumar méritos de gestión y docencia de posgrado."
            ];
            
            checklist = [
                "Aportaciones de investigación indexadas en los tramos temporales requeridos.",
                "Justificantes de participación en proyectos de I+D competitivos (nacionales o autonómicos)."
            ];
        }
    }

    // 3. Pintar los resultados en la pantalla
    document.getElementById("figura-objetivo").innerText = figura;
    document.getElementById("requisito-previo").innerText = requisito;
    document.getElementById("via-procedimiento").innerText = via;

    let htmlContenido = "";
    if (decisiones.length > 0) {
        htmlContenido += `<div class="block-decision">
            <h4>🎯 Acciones Recomendadas</h4>
            <ul>${decisiones.map(d => `<li>${d}</li>`).join('')}</ul>
        </div>`;
    }
    if (checklist.length > 0) {
        htmlContenido += `<div class="block-decision">
            <h4>📋 Tareas Prioritarias</h4>
            <ul>${checklist.map(c => `<li>${c}</li>`).join('')}</ul>
        </div>`;
    }

    contenidoSubetapas.innerHTML = htmlContenido;
    cardResultado.classList.remove("hidden");
    
    // Desplazar suavemente la vista hacia los resultados
    cardResultado.scrollIntoView({ behavior: 'smooth' });
}
