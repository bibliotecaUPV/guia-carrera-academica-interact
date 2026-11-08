function calcularDiagnostico() {
    // 1. Recoger respuestas
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

    // 2. Lógica de decisiones cruzadas
    if (doctor === "no") {
        figura = "Doctorado & Etapa Predoctoral";
        requisito = "Matrícula en Programa de Doctorado y plan de investigación";
        via = "Vía Universitaria / Tutorización de Tesis";

        // Marco ANECA (Aquí va la narrativa de la estancia)
        recAneca.push("<strong>Formato de Tesis:</strong> Si alcanzas los tramos de 1-2 o 3-5 artículos JCR, valora optar por la modalidad de Compendio de Publicaciones.");
        
        if (estancia === "si") {
            recAneca.push("<strong>Valorización de la Estancia (ANECA):</strong> No la plantees solo como un mérito formal de 3 meses. Prepara una <em>defensa narrativa</em> justificando su impacto: publicaciones conjuntas resultantes, aprendizaje de metodologías que no existían en tu grupo matriz, o incorporación a redes/proyectos internacionales.");
        } else {
            recAneca.push("<strong>Planificación Estratégica de la Estancia:</strong> Más allá de cumplir el requisito de 3 meses para la Mención Internacional, elige un grupo receptor donde puedas generar al menos una coautoría o aprender una técnica diferencial que puedas defender narrativamente en ANECA.");
        }

        if (articulos === "0") {
            recAneca.push("<strong>Publicaciones:</strong> Priorizar la redacción del primer artículo científico indexado antes del informe de seguimiento del año 2.");
        } else {
            recAneca.push("<strong>Relato de Investigación:</strong> Articula tus publicaciones bajo un hilo conductor claro y justificable dentro de las líneas prioritarias de tu área.");
        }

        // Criterios e Incentivos UPV (Libre de la parte de ANECA)
        recUpv.push("<strong>Venia Docendi:</strong> Tramitar la autorización oficial para impartir docencia hasta el límite máximo permitido por tu contrato.");
        recUpv.push("<strong>Formación Docente ICE:</strong> Inscribirte en los cursos de formación del profesorado de la UPV para certificar competencia pedagógica.");
        
        if (estancia === "si") {
            recUpv.push("<strong>Incentivo a la Internacionalización UPV:</strong> Destacar la movilidad en los baremos de proyectos internos y captación de fondos, justificando el retorno o la colaboración activa con el centro de destino.");
        }

        if (docencia !== "0") {
            recUpv.push("<strong>Docencia Acreditada:</strong> Solicitar en el departamento la certificación oficial firmada de las horas impartidas.");
        }
        } else {
            figura = "Profesor Titular de Universidad (TU) / PPL Consolidado";
            requisito = "Doctorado consolidado + Liderazgo de investigación y docencia de posgrado";
            via = "Programa ACADEMIA (ANECA) / Oposición o Concurso OEP";

            recAneca = [
                "<strong>Programa ACADEMIA:</strong> Contrastar tus artículos (especialmente si estás en el tramo >5) con los baremos específicos de la comisión de tu área.",
                "<strong>Estancias y Redes:</strong> Verificar el cumplimiento de los meses de movilidad exigidos para el cuerpo docente funcionario."
            ];

            recUpv = [
                "<strong>Promoción Interna:</strong> Tu volumen de publicaciones y experiencia docente te permite alinearte con las convocatorias de la Oferta de Empleo Público de la UPV.",
                "<strong>Gestión Académica:</strong> Asumir cargos de gestión unipersonales o de comisión dentro de tu departamento/escuela en la UPV.",
                "<strong>Dirección de Tesis:</strong> Incorporarte como director/a principal de nuevos doctorandos matriculados en la UPV."
            ];
        }
    }

    // 3. Renderizar resultados
    document.getElementById("figura-objetivo").innerText = figura;
    document.getElementById("requisito-previo").innerText = requisito;
    document.getElementById("via-procedimiento").innerText = via;

    divAneca.innerHTML = `<div class="block-decision"><ul>${recAneca.map(item => `<li>${item}</li>`).join('')}</ul></div>`;
    divUpv.innerHTML = `<div class="block-decision"><ul>${recUpv.map(item => `<li>${item}</li>`).join('')}</ul></div>`;

    cardResultado.classList.remove("hidden");
    cardResultado.scrollIntoView({ behavior: 'smooth' });
}
