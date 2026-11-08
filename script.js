function calcularDiagnostico() {
    // 1. Recoger respuestas del formulario
    const doctor = document.getElementById("p_doctor").value;
    const estancia = document.getElementById("p_estancia").value;
    const articulos = document.getElementById("p_articulos").value;
    const docencia = document.getElementById("p_docencia").value;

    const cardResultado = document.getElementById("resultado-card");
    const divAneca = document.getElementById("aneca-contenido");
    const divUpv = document.getElementById("upv-contenido");

    let figura = "";
    let requisito = "";
    let via = "";

    let recAneca = [];
    let recUpv = [];

    // 2. Lógica de decisión robusta y escalonada
    if (doctor === "no") {
        // --- ETAPA PREDOCTORAL ---
        if (articulos === "3_5" || articulos === "mas_5") {
            figura = "Etapa Predoctoral Avanzada (Tesis por Compendio)";
            requisito = "Doctorando con producción científica previa alta + Plan de investigación";
            via = "Vía Universitaria / Doctorado Industrial o Internacional";

            recAneca.push("<strong>Perfil Predoctoral de Alto Rendimiento:</strong> Ya acumulas un volumen de artículos excelente para una etapa predoctoral. Orientar la tesis como compendio de publicaciones te dejará en una posición inmejorable para la acreditación postdoctoral inmediata.");
        } else {
            figura = "Doctorado & Etapa Predoctoral";
            requisito = "Matrícula en Programa de Doctorado y plan de investigación anual";
            via = "Vía Universitaria / Tutorización de Tesis";

            recAneca.push("<strong>Estrategia de Tesis:</strong> Focaliza los esfuerzos en la publicación de tus primeros resultados indizados antes de los informes de seguimiento.");
        }

        if (estancia === "si") {
            recAneca.push("<strong>Defensa Narrativa de la Movilidad (CoARA):</strong> Prepara un relato sobre el valor diferencial y formativo adquirido en el centro receptor.");
        } else {
            recAneca.push("<strong>Planificación de Estancias:</strong> Planifica una estancia de al menos 3 meses antes de leer la tesis para optar a la Mención Internacional.");
        }

        // Incentivos UPV Predoctoral
        recUpv.push("<strong>Venia Docendi:</strong> Tramitar la autorización oficial en el departamento para la impartición limitada de docencia práctica.");
        recUpv.push("<strong>Certificación Docente ICE:</strong> Inscribirte en los cursos formativos iniciales del ICE de la UPV.");
        if (docencia !== "0") {
            recUpv.push("<strong>Certificación de Horas:</strong> Solicitar el certificado oficial de docencia en secretaría de departamento.");
        }

    } else {
        // --- ETAPA POSTDOCTORAL / DOCTORES ---
        
        // CASO A: Doctor inicial o sin publicaciones/docencia suficientes para figuras estables
        if (articulos === "0" || articulos === "1_2" || docencia === "0" || docencia === "menos_60") {
            figura = "Contrato Postdoctoral / Profesor Ayudante Doctor (PAD)";
            requisito = "Título de Doctor/a + Consolidación de publicaciones y 60h docentes";
            via = "Concursos Postdoctorales / Acreditación PEP (PAD)";

            recAneca = [
                "<strong>Acreditación PAD / Lector:</strong> El foco es alcanzar el mínimo de 60 horas docentes oficiales y consolidar entre 3 y 5 artículos en revistas indexadas de impacto.",
                "<strong>Narrativa de Proyección:</strong> Diseña un plan de investigación a 3 años enfocado en colaboraciones estables que aumenten el índice de citas."
            ];

            recUpv = [
                "<strong>Asignación Docente:</strong> Solicitar encargo docente departamental para sumar las horas necesarias exigidas en futuros concursos.",
                "<strong>Grupos de Investigación UPV:</strong> Integrarse plenamente en equipos competitivos del departamento."
            ];

        // CASO B: Doctor con méritos sólidos pero sin movilidad o con volumen medio
        } else if (articulos === "3_5" || (articulos === "mas_5" && estancia === "no")) {
            figura = "Profesor Permanente Laboral (PPL) / Profesor Contratado Doctor";
            requisito = "Acreditación PPL ANECA + Docencia acreditada (>60h) + Artículos Q1/Q2";
            via = "Programa PEP (ANECA) / Concursos de plantilla UPV";

            recAneca = [
                "<strong>Acreditación PPL:</strong> Posees los tramos de artículos adecuados. Asegura las encuestas docentes favorables (Docentia) para blindar el Bloque 2.",
                "<strong>Compensación de Movilidad:</strong> Al no indicar estancia de 3 meses, argumenta sólidamente la participación en congresos internacionales y redes de colaboración científica en tu narrativa."
            ];

            recUpv = [
                "<strong>Plazas de Estabilización PPL:</strong> Tu perfil encaja plenamente en las plazas de profesorado permanente laboral convocadas por la UPV.",
                "<strong>Innovación Educativa (PIME):</strong> Participar en proyectos docentes internos de la universidad para sumar puntos en méritos de docencia."
            ];

        // CASO C: Perfil Cima / Plenamente Consolidado (Artículos altos + Movilidad + Docencia)
        } else {
            figura = "Profesor Titular de Universidad (TU) / Cuerpo Funcionario";
            requisito = "Acreditación ACADEMIA (ANECA) + Movilidad acreditada + Producción consolidada";
            via = "Programa ACADEMIA (ANECA) + Oposición OEP UPV";

            recAneca = [
                "<strong>Acreditación ACADEMIA (Titular):</strong> Tienes la combinación ideal de artículos, docencia y movilidad. Estructura tus aportaciones clave con el enfoque CoARA (evidencia de impacto, no solo métrica ciega).",
                "<strong>Sexenios de Investigación:</strong> La aportación de tramos CNEAI vigentes simplificará de forma drástica la validación del bloque investigador."
            ];

            recUpv = [
                "<strong>Acceso a Plazas OEP (Titular):</strong> Alineación directa con las plazas de promoción y acceso a cuerpos docentes de la UPV.",
                "<strong>Liderazgo Académico:</strong> Participación en tribunales, dirección de tesis doctorales y asunción de responsabilidades de gestión departamental."
            ];
        }
    }

    // 3. Renderizar resultados en pantalla
    document.getElementById("figura-objetivo").innerText = figura;
    document.getElementById("requisito-previo").innerText = requisito;
    document.getElementById("via-procedimiento").innerText = via;

    divAneca.innerHTML = `<div class="block-decision"><ul>${recAneca.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
    divUpv.innerHTML = `<div class="block-decision"><ul>${recUpv.map(item => `<li>${item}</li>`).join('')}</ul></div>`;

    cardResultado.classList.remove("hidden");
    cardResultado.scrollIntoView({ behavior: 'smooth' });
}
