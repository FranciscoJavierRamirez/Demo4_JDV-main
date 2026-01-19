# Análisis de Oportunidades de Mejora: Áreas de Práctica

**Documento generado:** Enero 2026
**Analista:** Comunicador Estratégico Senior
**Restricción:** Todas las propuestas respetan la estructura del MANUAL_AREAS_PRACTICA.md (cantidades de items fijas, campos requeridos intactos)

---

## Reglas de Este Documento

> **IMPORTANTE:** Las mejoras propuestas son ÚNICAMENTE de contenido textual. NO se modifica:
> - Cantidad de items (3 trust, 4 target, 6 painPoints, 4 results, 6 services, 4 process, 6 FAQ)
> - Estructura YAML del frontmatter
> - Campos requeridos
> - Orden de componentes

---

## Tabla de Contenidos

1. [Mejoras Transversales](#1-mejoras-transversales)
2. [Defensa Estatutaria](#2-defensa-estatutaria)
3. [Defensa Administrativa](#3-defensa-administrativa)
4. [Cliente Senior](#4-cliente-senior)
5. [Legado](#5-legado)
6. [Civil](#6-civil)
7. [Inmobiliaria y Copropiedad](#7-inmobiliaria-y-copropiedad)
8. [Animalista](#8-animalista)
9. [Capacitación](#9-capacitación)

---

## 1. Mejoras Transversales

### 1.1 Credencial Diferenciadora No Explotada

El CV oficial indica que Jacqueline fue **Contralora Regional** en tres regiones. Esta credencial es mucho más impactante que "Especialización CGR" y debería usarse en los badges.

| Área | Badge Actual | Badge Propuesto | Justificación |
|------|--------------|-----------------|---------------|
| defensa-estatutaria | "Especialización CGR · 35 Años" | "Ex Contralora Regional · 35 Años" | "Contralora Regional" es cargo de máxima autoridad regional, genera más confianza |
| defensa-administrativa | "Compras Públicas · Contraloría" | "Ex Contralora Regional · Compras Públicas" | Misma razón |
| capacitacion | "Formación Jurídica · Organizaciones" | "Ex Contralora Regional · Relatora" | Credencial da peso a la capacitación |

### 1.2 Trust Bars - Datos Sin Respaldo en CV

El manual indica usar métricas de confianza. Sin embargo, algunos datos actuales no están respaldados en el CV oficial, lo que puede generar problemas de credibilidad.

| Área | Dato Problemático | Propuesta de Reemplazo | Justificación |
|------|-------------------|------------------------|---------------|
| defensa-estatutaria | value: "500+", label: "Casos Resueltos" | value: "Cientos", label: "Sumarios Resueltos" | El CV dice "Cientos de sumarios instruidos y resueltos" - usar ese texto |
| defensa-estatutaria | value: "98%", label: "Satisfacción" | value: "Nacional", label: "Cobertura" | El 98% no es verificable; la cobertura nacional sí está en el CV |
| civil | value: "200+", label: "Casos Civiles" | value: "35+", label: "Años Experiencia" | Dato no respaldado |
| civil | value: "95%", label: "Éxito en Cobranzas" | value: "Nacional", label: "Cobertura" | Porcentaje no verificable |
| capacitacion | value: "100+", label: "Capacitaciones Realizadas" | value: "Presencial", label: "y Remoto" | Dato no respaldado |
| capacitacion | value: "98%", label: "Satisfacción" | value: "Certificado", label: "Incluido" | Porcentaje no verificable |

---

## 2. Defensa Estatutaria

### 2.1 SEO - Meta Description (máx 155 caracteres)

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| seo.description | "Defensa especializada en sumarios administrativos, término de contrata y procedimientos disciplinarios. 35 años de experiencia en Contraloría General." (148 chars) | "Ex Contralora Regional defiende funcionarios en sumarios, Ley Karin, término de contrata. 35 años en CGR. Consulta gratuita." (124 chars) | Incluye credencial diferenciadora + keyword "Ley Karin" + CTA |

### 2.2 Hero Section

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| hero.badge | "Especialización CGR · 35 Años" | "Ex Contralora Regional · 35 Años" | Credencial más impactante |
| hero.tagline | "Protegemos tu estabilidad laboral ante procedimientos disciplinarios" | "Defensa ante sumarios y Ley Karin con quien conoce el sistema desde adentro" | Más específico, incluye keyword "Ley Karin", diferenciador |

### 2.3 Trust Bar (3 items - mantener cantidad)

| Item | Actual | Propuesto | Justificación |
|------|--------|-----------|---------------|
| 1 | value: "35+", label: "Años en CGR" | value: "35+", label: "Años en CGR" | Mantener (correcto) |
| 2 | value: "500+", label: "Casos Resueltos" | value: "Cientos", label: "Sumarios Resueltos" | Alinear con CV: "Cientos de sumarios instruidos y resueltos" |
| 3 | value: "98%", label: "Satisfacción" | value: "Nacional", label: "Cobertura" | Reemplazar dato no verificable por capacidad real |

### 2.4 Target (4 items - mantener cantidad)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 1 | description | "Estás en un sumario administrativo o investigación sumaria y necesitas defensa técnica especializada." | "Funcionario de planta, contrata u honorarios en sumario administrativo o investigación sumaria que necesita defensa técnica." | Incluir "honorarios" (mencionado en CV como cliente) |
| 4 | description | "Traslados arbitrarios, remuneraciones impugnadas, evaluaciones injustas o licencias rechazadas." | "Traslados arbitrarios, remuneraciones, evaluación docente, licencias médicas o liberaciones de guardia rechazadas." | Incluir keywords del CV: "evaluación docente", "liberaciones de guardia" |

### 2.5 Pain Points (6 items - mantener cantidad)

| Item | Texto Actual | Texto Propuesto | Justificación |
|------|--------------|-----------------|---------------|
| 3 | "Riesgo real de destitución, multa, suspensión o no renovación de contrata" | "Riesgo real de destitución, multa, suspensión, no renovación de contrata o pérdida de la confianza legítima" | Incluir keyword legal "confianza legítima" del CV |
| 6 | "Falta de asesoría experta que entienda los procesos internos de la Administración" | "No encontrar un abogado que haya estado del otro lado de la mesa, que conozca cómo piensa la Administración" | Más emocional, conecta con diferenciador único |

### 2.6 Services Included (6 items - mantener cantidad)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 4 | title | "Remuneraciones y Asignaciones" | "Remuneraciones, Asignaciones y Honorarios" | Incluir "honorarios" (keyword CV) |
| 4 | description | "Impugnación de decisiones sobre remuneraciones, asignaciones, traslados y destinaciones." | "Impugnación de decisiones sobre remuneraciones, asignaciones, bono sala cuna, traslados y destinaciones." | Incluir "bono sala cuna" (keyword CV) |
| 5 | description | "Defensa ante rechazo de licencias, evaluación docente, liberaciones de guardia y más." | "Defensa ante rechazo de licencias médicas, evaluación docente negativa, liberaciones de guardia denegadas." | Más específico, keywords del CV |

### 2.7 FAQ (6 items - mantener cantidad)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 4 | question | "¿Atiendes casos en regiones o solo en Santiago?" | "¿Atiendes casos en regiones o solo en Santiago?" | Mantener |
| 4 | answer | "Atiendo casos a nivel nacional. Puedo trabajar de forma remota (videollamadas, email) o presencial según las necesidades del caso. La experiencia en Contraloría Regional me permite conocer dinámicas de todo Chile." | "Atiendo casos a nivel nacional. Mi experiencia como Contralora Regional en Magallanes (1994-2009), Aysén (2012-2017) y Arica (2018-2020) me permite conocer las dinámicas de cada zona del país. Trabajo presencial o remoto según tu necesidad." | Agregar fechas específicas de cargos regionales (credencial verificable) |

### 2.8 Contenido Markdown

| Sección | Texto Actual | Texto Propuesto | Justificación |
|---------|--------------|-----------------|---------------|
| "Mi experiencia" blockquote | "Cientos de sumarios instruidos y resueltos. Fiscalización de procedimientos en servicios públicos, municipios y universidades. Defensa judicial ante recursos de protección y tutelas laborales." | "Cientos de sumarios instruidos y resueltos como fiscalizadora en CGR. Cientos más defendidos como abogada particular. He visto ambos lados de la mesa: fiscalización y defensa." | Refuerza el diferenciador único de conocer ambos lados |
| "Cobertura nacional" | "Mi experiencia como Contralora Regional en Magallanes, Aysén y Arica me permite trabajar de forma presencial o remota, conociendo las dinámicas regionales de cada zona." | "Como **Contralora Regional en Magallanes (1994-2009), Aysén (2012-2017) y Arica y Parinacota (2018-2020)**, conozco las dinámicas de cada región. Trabajo presencial o remoto en todo Chile." | Agregar años específicos da credibilidad verificable |

---

## 3. Defensa Administrativa

### 3.1 SEO - Meta Description

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| seo.description | "Representación experta ante la Administración del Estado. Licitaciones, ChileCompra, contratos públicos y recursos administrativos. 35 años de experiencia." (153 chars) | "Ex Contralora defiende empresas en licitaciones ChileCompra, contratos públicos y recursos ante la Administración. 35 años en CGR." (131 chars) | Incluye credencial, más conciso |

### 3.2 Hero Section

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| hero.badge | "Compras Públicas · Contraloría" | "Ex Contralora Regional · Compras Públicas" | Credencial más impactante |
| hero.tagline | "Protegemos tus intereses en licitaciones, contratos públicos y gestiones ante la Administración" | "Defensa en licitaciones y contratos públicos con quien fiscalizó estos procesos durante 35 años" | Conecta con diferenciador (fiscalizó desde adentro) |

### 3.3 Trust Bar (3 items)

| Item | Actual | Propuesto | Justificación |
|------|--------|-----------|---------------|
| 2 | value: "100%", label: "Dedicación" | value: "Ley 19.886", label: "Compras Públicas" | "100% Dedicación" es vacío; Ley 19.886 demuestra conocimiento técnico (keyword CV) |
| 3 | value: "100%", label: "Cobertura Nacional" | value: "Nacional", label: "Cobertura" | Simplificar, quitar "100%" innecesario |

### 3.4 Pain Points (6 items)

| Item | Texto Actual | Texto Propuesto | Justificación |
|------|--------------|-----------------|---------------|
| 4 | "Desconocimiento de los recursos legales disponibles ante la Administración" | "Desconocimiento de recursos ante silencio administrativo o incumplimiento de la Ley 19.880" | Incluir Ley 19.880 (keyword CV: Procedimiento Administrativo) |
| 6 | "Arbitrariedades y discriminación en el trato a oferentes y ciudadanos" | "Vulneración del principio de igualdad de los oferentes y respeto irrestricto de las bases" | Usar terminología legal exacta del CV |

### 3.5 Services Included (6 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 1 | description | "Asesoría completa en preparación de ofertas, análisis de bases y defensa ante descalificaciones o adjudicaciones irregulares." | "Asesoría en preparación de ofertas, análisis de bases administrativas y defensa ante descalificaciones, exigiendo respeto irrestricto de las bases." | Incluir "respeto irrestricto de bases" (keyword CV) |
| 6 | description | "Gestión y defensa en trámites ante servicios públicos, municipios y autorizaciones sectoriales." | "Gestión ante servicios públicos y municipios, incluyendo nueva Ley Marco de Autorizaciones Sectoriales y transformación digital del Estado." | Incluir keywords del CV: "Ley Marco de Autorizaciones", "transformación digital" |

### 3.6 Contenido Markdown

| Sección | Texto Actual | Texto Propuesto | Justificación |
|---------|--------------|-----------------|---------------|
| "Principios que defiendo" | "Legalidad, transparencia y probidad no son solo conceptos abstractos. Son derechos que puedes exigir." | "**Legalidad, transparencia y probidad** no son solo conceptos abstractos. Mi formación en la CGR, con marcado énfasis en ética y probidad, me permite exigirlos efectivamente en tu representación." | Conecta con diferenciador de valores del CV |

---

## 4. Cliente Senior

### 4.1 Hero Section

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| hero.tagline | "Atención jurídica personalizada para adultos mayores y personas con movilidad reducida" | "Testamentos, poderes y asesoría legal en tu hogar para adultos mayores que merecen atención digna" | Más específico sobre servicios, incluye "dignidad" |

### 4.2 Trust Bar (3 items)

| Item | Actual | Propuesto | Justificación |
|------|--------|-----------|---------------|
| 3 | value: "RM", label: "Cobertura Santiago" | value: "A Domicilio", label: "Atención" | "RM" es técnico; "A Domicilio" comunica mejor el diferenciador |

### 4.3 Target (4 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 2 | description | "Dificultades físicas para desplazarse a oficinas, notarías o instituciones financieras." | "Dificultades físicas o de comunicación para desplazarse a oficinas, notarías o instituciones financieras." | Incluir "dificultades de comunicación" (keyword CV) |

### 4.4 Services Included (6 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 6 | title | "Asesoría Integral" | "Asesoría Integral y Fideicomisos" | Incluir "fideicomisos" (keyword CV para esta área) |
| 6 | description | "Orientación jurídica en cualquier asunto personal: herencias, propiedades, conflictos familiares y más." | "Orientación jurídica en herencias, fideicomisos, usufructos, propiedades y conflictos familiares." | Incluir "fideicomisos" y "usufructos" (keywords CV) |

### 4.5 Contenido Markdown

| Sección | Texto Actual | Texto Propuesto | Justificación |
|---------|--------------|-----------------|---------------|
| Último párrafo | "35 años de experiencia en el sector público me enseñaron que los trámites pueden ser simples cuando alguien te guía con claridad y paciencia." | "35 años en la Contraloría General de la República, incluyendo cargos como Contralora Regional, me enseñaron que los trámites pueden ser simples cuando alguien te guía con claridad, paciencia y conocimiento del sistema." | Incluir credencial específica |

---

## 5. Legado

### 5.1 Trust Bar (3 items)

| Item | Actual | Propuesto | Justificación |
|------|--------|-----------|---------------|
| 2 | value: "100%", label: "Confidencialidad" | value: "Total", label: "Confidencialidad" | "100%" suena a marketing vacío; "Total" es más natural |
| 3 | value: "100%", label: "Respaldo Legal" | value: "Notarial", label: "Formalización" | Más específico sobre qué tipo de respaldo |

### 5.2 Pain Points (6 items)

| Item | Texto Actual | Texto Propuesto | Justificación |
|------|--------------|-----------------|---------------|
| 1 | "Miedo constante a qué pasará con tu hijo con necesidades especiales cuando ya no estés para cuidarlo" | "La pregunta que no te deja dormir: '¿Quién cuidará a mi hijo cuando yo ya no esté?'" | Más directo, emocional, en primera persona |
| 3 | "Desconocimiento de herramientas legales como fideicomisos, usufructos y mandatos especiales" | "Desconocimiento de herramientas como fideicomisos, usufructos, asignaciones modales y la cuarta de libre disposición" | Incluir keywords CV: "asignaciones modales", "cuarta de libre disposición" |

### 5.3 Services Included (6 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 4 | description | "Redacción de mandatos con instrucciones detalladas sobre cuidados, tratamientos médicos y necesidades específicas." | "Redacción de mandatos con cometidos o comisiones de confianza: instrucciones detalladas sobre cuidados, tratamientos y necesidades específicas." | Incluir "cometidos o comisiones de confianza" (keyword CV) |
| 5 | description | "Derechos de uso de bienes (vivienda, rentas) condicionados al cumplimiento de cuidados." | "Usufructos y asignaciones modales: derechos de uso de bienes condicionados legalmente al cumplimiento de cuidados." | Incluir "asignaciones modales" (keyword CV) |

### 5.4 FAQ (6 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 3 | answer | "Tu patrimonio se reparte según la ley (herencia intestada), sin considerar necesidades especiales. Tus hijos heredan en partes iguales, sin protección especial para el que tiene discapacidad. Y tu mascota queda a la suerte de quien la recoja. No dejes esto al azar." | "Tu patrimonio se reparte según la ley (sucesión intestada), sin considerar necesidades especiales. No podrás usar la cuarta de libre disposición para proteger a tu dependiente. Tus mascotas quedan a la suerte de quien las recoja. No dejes esto al azar." | Incluir "sucesión" y "cuarta de libre disposición" (keywords CV) |

### 5.5 Contenido Markdown

| Sección | Texto Actual | Texto Propuesto | Justificación |
|---------|--------------|-----------------|---------------|
| "¿Por qué no basta con un testamento normal?" punto 1 | "No asegura recursos permanentes para cuidados especiales" | "No asegura recursos permanentes usando la cuarta de libre disposición para cuidados especiales" | Incluir keyword técnica |

---

## 6. Civil

### 6.1 Trust Bar (3 items)

| Item | Actual | Propuesto | Justificación |
|------|--------|-----------|---------------|
| 2 | value: "200+", label: "Casos Civiles" | value: "35+", label: "Años Litigio" | Dato no verificable, reemplazar por experiencia |
| 3 | value: "95%", label: "Éxito en Cobranzas" | value: "Nacional", label: "Cobertura" | Porcentaje no verificable |

### 6.2 Objective

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| objective.text | "Mi compromiso es defender tus derechos patrimoniales con estrategia jurídica sólida, buscando siempre la solución más eficiente para tu caso. Evalúo cada situación para determinar si conviene negociar, mediar o litigar, priorizando tus intereses y la recuperación efectiva de lo que te corresponde." | "Defiendo tus derechos patrimoniales con la rigurosidad técnica de 35 años en la Contraloría. Evalúo cada situación para determinar si conviene negociar, mediar o litigar, priorizando siempre la recuperación efectiva de lo que te corresponde." | Conectar con credencial CGR como diferenciador |

### 6.3 FAQ (6 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 1 | answer | "Depende del tipo de documento. Los pagarés y cheques prescriben en 1 año desde el vencimiento, las facturas en 1 año, y las deudas por contrato simple en 5 años. Es fundamental actuar rápido para no perder tus derechos." | "Depende del tipo de documento. Los pagarés y cheques prescriben en 1 año, las facturas en 1 año, y las deudas por contrato simple en 5 años. Pasado el plazo, se convierten en obligaciones naturales (no exigibles judicialmente). Es fundamental actuar rápido." | Incluir "obligaciones naturales" (keyword CV) |

---

## 7. Inmobiliaria y Copropiedad

### 7.1 Trust Bar (3 items)

| Item | Actual | Propuesto | Justificación |
|------|--------|-----------|---------------|
| 2 | value: "100%", label: "Títulos Saneados" | value: "Saneamos", label: "Títulos" | "100%" implica que nunca falla (afirmación riesgosa) |

### 7.2 Services Included (6 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 5 | description | "Asesoría legal durante asambleas de copropietarios, asegurando validez de los acuerdos." | "Asesoría legal durante asambleas de copropietarios, asegurando validez de acuerdos y cumplimiento de Ley Karin en temas laborales del edificio." | Incluir "Ley Karin" (el CV la menciona para este contexto) |
| 6 | description | "Gestión prejudicial y judicial para recuperar deudas de propietarios morosos." | "Gestión prejudicial y judicial para cobro de gastos comunes a propietarios morosos, incluyendo redacción de contratos de personal del edificio." | Incluir "contratos de personal" (keyword CV para copropiedad) |

### 7.3 Contenido Markdown

| Sección | Texto Actual | Texto Propuesto | Justificación |
|---------|--------------|-----------------|---------------|
| "Especialización en copropiedad" blockquote | "Más de tres décadas de experiencia en el sector público me han dado una perspectiva única sobre la importancia de los procedimientos correctos y la documentación en orden." | "Más de tres décadas en la Contraloría General de la República, fiscalizando servicios públicos y municipios, me dieron una perspectiva única sobre la importancia de los procedimientos correctos, la documentación en orden y el cumplimiento de la Ley Karin." | Conectar experiencia CGR con copropiedad, incluir Ley Karin |

---

## 8. Animalista

### 8.1 SEO - Meta Title

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| seo.title | "Derecho Animalista: Defensa Legal de Mascotas y Tutores \| JDV & Abogados" | "Negligencia Veterinaria y Maltrato Animal \| JDV & Abogados" | Keywords más buscadas primero |

### 8.2 Trust Bar (3 items)

| Item | Actual | Propuesto | Justificación |
|------|--------|-----------|---------------|
| 2 | value: "100%", label: "Compromiso Ético" | value: "Ley 21.020", label: "Ley Cholito" | Más técnico y verificable |
| 3 | value: "100%", label: "Especialización" | value: "Tutora", label: "de Mascotas" | Humaniza, conecta emocionalmente (verificable según contenido) |

### 8.3 Pain Points (6 items)

| Item | Texto Actual | Texto Propuesto | Justificación |
|------|--------------|-----------------|---------------|
| 6 | "No encuentras abogados que tomen en serio casos de protección animal y defensa de mascotas" | "Has consultado abogados que te dicen 'es solo un perro' o 'no vale la pena demandar por una mascota'" | Más específico, refleja experiencia real, genera empatía |

### 8.4 Services Included (6 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 1 | description | "Demandas por errores médicos, diagnósticos errados, procedimientos deficientes o muerte de mascotas por mala praxis." | "Demandas por errores médicos, diagnósticos errados o muerte de mascotas por mala praxis. Representación ante Juzgados de Policía Local y tribunales superiores." | Incluir "Juzgados de Policía Local" (keyword CV) |
| 2 | description | "Acciones penales contra responsables de maltrato, abandono, malos tratos o crueldad animal según Ley 21.020." | "Querellas criminales por maltrato, abandono o crueldad animal según Ley Cholito (21.020). Efectividad de responsabilidad profesional." | Incluir "responsabilidad profesional" (keyword CV) |

### 8.5 Contenido Markdown - Agregar al final

| Sección | Texto Actual | Texto Propuesto (agregar) | Justificación |
|---------|--------------|---------------------------|---------------|
| "Un compromiso personal" (último párrafo) | "Por eso cada caso que tomo es personal. No se trata solo de ganar: se trata de hacer justicia para quienes no pueden hablar por sí mismos." | "Por eso cada caso que tomo es **personal**. No se trata solo de ganar: se trata de hacer justicia para quienes no pueden hablar por sí mismos. Como tutora de mascotas rescatadas, conozco el dolor de ver sufrir a un ser querido por negligencia de otros." | Agregar credencial personal emocional |

---

## 9. Capacitación

### 9.1 SEO - Meta Description

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| seo.description | "Talleres, cursos y charlas especializadas en derecho administrativo, Ley Karin, copropiedad y más. Formación jurídica práctica para empresas y organizaciones." (151 chars) | "Capacitación en Ley Karin, Estatuto Administrativo y Copropiedad. Relatora ex Contralora Regional con 35 años CGR. Presencial y remoto." (135 chars) | Incluye credencial, keywords específicas |

### 9.2 Hero Section

| Campo | Texto Actual | Texto Propuesto | Justificación |
|-------|--------------|-----------------|---------------|
| hero.badge | "Formación Jurídica · Organizaciones" | "Ex Contralora Regional · Relatora" | Credencial más impactante para capacitación |

### 9.3 Trust Bar (3 items)

| Item | Actual | Propuesto | Justificación |
|------|--------|-----------|---------------|
| 2 | value: "100+", label: "Capacitaciones Realizadas" | value: "Presencial", label: "y Remoto" | Dato no verificable; modalidades sí son verificables |
| 3 | value: "98%", label: "Satisfacción" | value: "Certificado", label: "Incluido" | Porcentaje no verificable; beneficio concreto |

### 9.4 Target (4 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 2 | title | "Asociaciones de Funcionarios" | "Asociaciones de Funcionarios Públicos" | Más específico, alinear con CV |
| 2 | description | "Agrupaciones gremiales que necesitan capacitar a sus miembros en derechos estatutarios y procedimientos." | "Agrupaciones gremiales del sector público que necesitan formar a sus miembros en derechos estatutarios, Ley Karin y procedimientos disciplinarios." | Incluir keywords específicas |

### 9.5 Services Included (6 items)

| Item | Campo | Texto Actual | Texto Propuesto | Justificación |
|------|-------|--------------|-----------------|---------------|
| 4 | description | "Folletos, guías y documentación de apoyo para consulta posterior a la capacitación." | "Elaboración de folletos informativos, guías y documentación de apoyo para consulta y distribución interna." | Incluir "elaboración de folletos informativos" (keyword exacta del CV) |

### 9.6 Contenido Markdown

| Sección | Texto Actual | Texto Propuesto | Justificación |
|---------|--------------|-----------------|---------------|
| "Experiencia que marca la diferencia" blockquote | "35 años en la Contraloría General de la República me permiten transferir conocimiento práctico, basado en casos reales y con pleno dominio de la jurisprudencia administrativa." | "35 años en la Contraloría General de la República, incluyendo cargos como **Contralora Regional y Jefa de Responsabilidad Administrativa**, me permiten transferir conocimiento práctico basado en casos reales y jurisprudencia administrativa vigente." | Incluir cargos específicos |

---

## Resumen de Cambios por Prioridad

### Alta Prioridad (Credenciales y Datos)

| # | Cambio | Archivos Afectados |
|---|--------|-------------------|
| 1 | Reemplazar "Especialización CGR" por "Ex Contralora Regional" en badges | defensa-estatutaria.md, defensa-administrativa.md, capacitacion.md |
| 2 | Eliminar trust bars con "100%" o "98%" sin respaldo | defensa-estatutaria.md, civil.md, capacitacion.md, inmobiliaria-copropiedad.md, legado.md, animalista.md |
| 3 | Reemplazar "500+ Casos" por "Cientos de Sumarios" | defensa-estatutaria.md |
| 4 | Agregar fechas de cargos regionales (1994-2009, 2012-2017, 2018-2020) | defensa-estatutaria.md |

### Media Prioridad (Keywords SEO)

| # | Cambio | Archivos Afectados |
|---|--------|-------------------|
| 5 | Incluir "Ley Karin" en tagline y servicios | defensa-estatutaria.md |
| 6 | Incluir "confianza legítima" en pain points | defensa-estatutaria.md |
| 7 | Incluir "Ley 19.886" y "Ley 19.880" | defensa-administrativa.md |
| 8 | Incluir "cuarta de libre disposición" y "asignaciones modales" | legado.md |
| 9 | Incluir "Juzgados de Policía Local" | animalista.md |
| 10 | Incluir "Ley Karin" en contexto copropiedad | inmobiliaria-copropiedad.md |

### Baja Prioridad (Tono y Lenguaje)

| # | Cambio | Archivos Afectados |
|---|--------|-------------------|
| 11 | Pain points más emocionales y en primera persona | legado.md, animalista.md |
| 12 | Conectar experiencia CGR con diferenciador único | Todos |
| 13 | Incluir credencial personal como tutora de mascotas | animalista.md |

---

## Anexo: Keywords del CV Pendientes de Inclusión

| Keyword | Área Recomendada | Estado Actual |
|---------|------------------|---------------|
| Confianza legítima | defensa-estatutaria | No aparece |
| Juicios de cuentas | defensa-estatutaria | No aparece |
| Liberaciones de guardia | defensa-estatutaria | Mencionado parcialmente |
| Bono sala cuna | defensa-estatutaria | No aparece |
| Ley N° 18.834 | defensa-estatutaria | No aparece |
| Transformación digital del Estado | defensa-administrativa | No aparece |
| Ley Marco de Autorizaciones | defensa-administrativa | No aparece |
| Respeto irrestricto de bases | defensa-administrativa | No aparece |
| Igualdad de los oferentes | defensa-administrativa | No aparece |
| Fideicomisos | cliente-senior, legado | Parcial |
| Usufructos | cliente-senior, legado | Parcial |
| Cuarta de libre disposición | legado | No aparece |
| Asignaciones modales | legado | Mencionado una vez |
| Cometidos o comisiones de confianza | legado | No aparece |
| Obligaciones naturales | civil | No aparece |
| Ley Karin (copropiedad) | inmobiliaria-copropiedad | No aparece |
| Contratos de personal (edificios) | inmobiliaria-copropiedad | No aparece |
| Juzgados de Policía Local | animalista | No aparece |
| Responsabilidad profesional | animalista | No aparece |
| Elaboración de folletos informativos | capacitacion | No aparece |

---

*Documento actualizado: Enero 2026*
*Todas las propuestas respetan la estructura del MANUAL_AREAS_PRACTICA.md*
