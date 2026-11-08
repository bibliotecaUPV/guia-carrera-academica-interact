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

    // 2. Lógica basada en el marco oficial ANECA (RD 678/2023) e incentivos UPV
    if (doctor === "no") {
        figura = "Doctorado & Etapa Predoctoral";
        requisito = "Matrícula en Programa de Doctorado y plan de investigación anual";
        via = "Vía Universitaria / Tutorización de Tesis";

        // Marco ANECA (Enfoque de contribuciones y narrativa temprana)
        recAneca.push("<strong>Estrategia de Tesis por Compendio:</strong> Conviene orientar los resultados hacia un bloque cohesionado de artículos indexados para facilitar el cumplimiento del Bloque 1 (Investigación).");
        
        if (estancia === "si") {
            recAneca.push("<strong>Defensa Narrativa de la Movilidad (CoARA):</strong> ANECA valora la estancia no por el mero trámite de 3 meses, sino por su calidad e impacto formativo/metodológico. Prepara un relato sobre el valor diferencial adquirido en el centro receptor.");
        } else {
            recAneca.push("<strong>Planificación de Estancias de Investigación:</strong> Aunque el umbral básico exige movilidad, prioriza centros donde puedas generar coautorías internacionales o técnicas transferibles a tu grupo.");
        }

        if (articulos === "0") {
            recAneca.push("<strong>Hitos Iniciales:</strong> Focaliza los esfuerzos en la publicación del primer artículo indizado antes de las evaluaciones de seguimiento del segundo año.");
        } else {
            recAneca.push("<strong>Selección de Contribuciones:</strong> ANECA prioriza la calidad sobre la cantidad (máximo de aportaciones evaluables). Cuida que tus artículos posean indicios de impacto claros y accesibles mediante enlaces permanentes (DOI).");
        }

        // Criterios e Incentivos UPV
        recUpv.push("<strong>Venia Docendi:</strong> Tramitar la autorización oficial en el departamento para la impartición de docencia de grado/máster.");
        recUpv.push("<strong>Certificación Docente ICE:</strong> Inscribirte en los itinerarios formativos del ICE (Institut de Ciències de l'Educació) de la UPV para garantizar el bloque docente interno.");
        
        if (estancia === "si") {
            recUpv.push("<strong>Baremos de Internacionalización UPV:</strong> Justifica la estancia en las memorias de los planes operativos departamentales y solicitudes de ayudas internas de movilidad.");
        }

        if (docencia !== "0") {
            recUpv.push("<strong>Acreditación de Horas:</strong> Solicitar la certificación oficial de docencia impartida firmada por secretaría de departamento.");
        }

    } else {
        // Ya es Doctor/a
        if (estancia === "si" && (articulos === "3_5" || articulos === "mas_5")) {
            figura = "Contrato Postdoctoral / Ayudante Doctor (PAD)";
            requisito = "Título de Doctor/a + Movilidad postdoctoral + Suficiencia investigadora";
            via = "Acreditación ANECA (Programa PEP) / Concursos PPL o PAD";

            recAneca = [
                "<strong>Acreditación PPL / PAD (Bloques de Suficiencia):</strong> Para obtener una evaluación favorable debes alcanzar un mínimo de 50 puntos sobre 100 en el Bloque de Investigación y Transferencia, y otros 50 en el Bloque Docente.",
                "<strong>Aportaciones Seleccionadas:</strong> Recuerda que para figuras de profesorado lector/ayudante doctor se evalúa un listado acotado de aportaciones clave, exigiendo justificar su relevancia mediante narrativa de impacto (evitando el uso exclusivo de métricas automáticas simplistas)."
            ];

            recUpv = [
                "<strong>Plazas de Relevo y Promoción:</strong> Un perfil con doctorado, movilidad consolidada e indexación en tramos medios-altos encaja de lleno en los perfiles de concurso de plazas de profesorado contratado doctor o ayudante doctor en la UPV.",
                "<strong>Participación en Proyectos I+D+i:</strong> Integrarse activamente en equipos de investigación con financiación pública competitiva vinculados a la UPV."
            ];

        } else if (docencia === "mas_60" && articulos !== "0") {
            figura = "Profesor Permanente Laboral (PPL) / Contratado Doctor";
            requisito = "Acreditación ANECA (PPL) + Experiencia docente e investigadora consolidada";
            via = "Evaluación por Bloques ANECA / Concurso público en la UPV";

            recAneca = [
                "<strong>Criterios de Sexenios (CNEAI):</strong> Si posees tramos de investigación reconocidos (sexenios), ANECA convalida automáticamente gran parte o la totalidad de los méritos del bloque de investigación e intercambio de conocimiento.",
                "<strong>Equilibrio Docente-Investigador:</strong> Asegúrate de que las encuestas del programa Docentia o equivalente reflejen una alta suficiencia docente para blindar el Bloque 2."
            ];

            recUpv = [
                "<strong>Incentivos Docentes Plurilingües:</strong> Potenciar la docencia en inglés y valenciano para sumar méritos específicos en los baremos de los concursos de plazas estables de la UPV.",
                "<strong>Transferencia y Contratos art. 60 LOSU:</strong> Aportar contratos de colaboración con empresas o administraciones públicas gestionados a través de la UPV."
            ];

        } else {
            figura = "Profesor Titular de Universidad (TU) / Cuerpo Docente Funcionario";
            requisito = "Acreditación ACADEMIA (ANECA) + Liderazgo y estabilidad investigadora/docente";
            via = "Programa ACADEMIA + Oposición o Concurso de Acceso (OEP UPV)";

            recAneca = [
                "<strong>Programa ACADEMIA (Cuerpo de Titulares):</strong> Se exige demostrar actividad suficiente en los últimos 6 años (salvo prórrogas justificadas por bajas o permisos). La aportación de sexenios de investigación recientes simplifica enormemente la tramitación.",
                "<strong>Defensa de Contribuciones Clave:</strong> Aporta el máximo permitido de publicaciones (hasta 8 en investigación) estructuradas bajo un riguroso argumentario de calidad y relevancia internacional."
            ];

            recUpv = [
                "<strong>Acceso a Plazas OEP de Titular:</strong> Alineación con las convocatorias de estabilización y promoción interna de la Universitat Politècnica de València.",
                "<strong>Gestión y Liderazgo Académico:</strong> Participación en comisiones de departamento, coordinación de titulaciones o dirección de tesis doctorales para sumar en los méritos de estructura académica."
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
