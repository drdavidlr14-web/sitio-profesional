export const person = {
  name: 'David López Romero',
  short: 'DLR',
}

export const nav = [
  { to: '/', es: 'Inicio', en: 'Home' },
  { to: '/trayectoria', es: 'Trayectoria', en: 'Experience' },
  { to: '/docencia', es: 'Docencia', en: 'Teaching' },
  { to: '/credenciales', es: 'Credenciales', en: 'Credentials' },
  { to: '/contacto', es: 'Contacto', en: 'Contact' },
] as const

export const hero = {
  kicker: {
    es: 'Migración internacional · Políticas públicas · Docencia',
    en: 'International migration · Public policy · Teaching',
  },
  lead: {
    es: 'Diseña e implementa proyectos de inclusión para personas en movilidad y forma profesionales en relaciones internacionales, ciudadanía global y desarrollo.',
    en: 'He designs and implements inclusion projects for people on the move and teaches international relations, global citizenship and development.',
  },
}

export const profile = {
  es: 'Profesional con más de ocho años de experiencia en migración internacional, implementación de la Agenda 2030, inclusión de poblaciones en movilidad y liderazgo juvenil, y con más de cinco años de docencia a nivel profesional. Ha colaborado con agencias de las Naciones Unidas, cooperación internacional e instituciones de educación superior, con énfasis en proyectos de impacto territorial, replicables y multisectoriales.',
  en: 'A professional with more than eight years of experience in international migration, the 2030 Agenda, inclusion of people on the move and youth leadership, and with more than five years of professional-level teaching. He has worked with United Nations agencies, international cooperation and higher-education institutions, with an emphasis on territorial, replicable and multisectoral projects.',
}

export const roles = [
  {
    kind: 'practice' as const,
    org: {
      es: 'Albergue Migrantes Toribio Romo A.C.',
      en: 'Albergue Migrantes Toribio Romo A.C.',
    },
    title: {
      es: 'Coordinador de Programas y Desarrollo Institucional',
      en: 'Programmes and Institutional Development Coordinator',
    },
    period: '2026 —',
    place: 'Querétaro, México',
    text: {
      es: 'Diseño del modelo de profesionalización del albergue —diagnóstico, ruta de atención y protocolos operativos— alineado a estándares internacionales de asistencia humanitaria, junto con la articulación de alianzas y el plan estratégico institucional.',
      en: 'Design of the shelter’s professionalisation model —assessment, care pathway and operating protocols— aligned with international humanitarian standards, together with partnerships and the institutional strategy.',
    },
  },
  {
    kind: 'teaching' as const,
    org: { es: 'Tecnológico de Monterrey, Campus Querétaro', en: 'Tecnológico de Monterrey, Querétaro Campus' },
    title: { es: 'Profesor de programas internacionales', en: 'Faculty, international programmes' },
    period: '2023 —',
    place: 'Querétaro, México',
    text: {
      es: 'Imparte asignaturas de ciudadanía global y desafíos contemporáneos de México en programas internacionales. Ha acompañado inmersiones académicas en el Reino Unido y en Francia.',
      en: 'He teaches global citizenship and contemporary Mexican challenges in international programmes. He has accompanied academic immersions in the United Kingdom and France.',
    },
  },
  {
    kind: 'teaching' as const,
    org: {
      es: 'Universidad del Valle de México, Campus Querétaro',
      en: 'Universidad del Valle de México, Querétaro Campus',
    },
    title: {
      es: 'Profesor de asignatura y coordinador fundador del Centro Universitario para la Movilidad Humana',
      en: 'Lecturer and founding coordinator of the University Centre for Human Mobility',
    },
    period: '2022 —',
    place: 'Querétaro, México',
    text: {
      es: 'Imparte asignaturas de la licenciatura en Relaciones Internacionales y coordina un espacio universitario dedicado al estudio de la movilidad humana.',
      en: 'He teaches undergraduate courses in International Relations and coordinates a university space devoted to the study of human mobility.',
    },
  },
  {
    kind: 'practice' as const,
    org: {
      es: 'Red Intersectorial para la Integración de Personas en Movilidad · Fundación Causa',
      en: 'Intersectoral Network for the Integration of People on the Move · Fundación Causa',
    },
    title: { es: 'Nodo de la red', en: 'Network node' },
    period: '2023 —',
    place: 'Querétaro, México',
    text: {
      es: 'Participa desde la conformación de la red —promovida por Fundación Merced Querétaro en el marco del proyecto PROFIL de la Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) y el Alto Comisionado de las Naciones Unidas para los Refugiados (ACNUR)— en el diseño colectivo de estrategias de inclusión e incidencia.',
      en: 'He has taken part since the network was formed —promoted by Fundación Merced Querétaro under the PROFIL project of the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) and the United Nations High Commissioner for Refugees (UNHCR)— in the collective design of inclusion and advocacy strategies.',
    },
  },
]

export const timeline = [
  {
    year: '2026',
    title: { es: 'Coordinación en Albergue Migrantes Toribio Romo A.C.', en: 'Coordination at Albergue Migrantes Toribio Romo A.C.' },
    detail: {
      es: 'Profesionalización institucional y protocolos de atención a personas en movilidad en Querétaro.',
      en: 'Institutional professionalisation and care protocols for people on the move in Querétaro.',
    },
  },
  {
    year: '2023',
    title: { es: 'Incorporación al Tecnológico de Monterrey', en: 'Joins Tecnológico de Monterrey' },
    detail: {
      es: 'Docencia en programas internacionales en el Campus Querétaro.',
      en: 'Teaching in international programmes at the Querétaro Campus.',
    },
  },
  {
    year: '2023',
    title: { es: 'Red Intersectorial para la Integración de Personas en Movilidad', en: 'Intersectoral Network for the Integration of People on the Move' },
    detail: {
      es: 'Integración como nodo de la red impulsada por Fundación Causa (antes Fundación Merced Querétaro).',
      en: 'Joins as a network node under Fundación Causa (formerly Fundación Merced Querétaro).',
    },
  },
  {
    year: '2022',
    title: { es: 'Universidad del Valle de México y Centro Universitario para la Movilidad Humana', en: 'Universidad del Valle de México and University Centre for Human Mobility' },
    detail: {
      es: 'Inicio de la docencia de asignatura y fundación del centro en Campus Querétaro.',
      en: 'Begins undergraduate teaching and founds the centre at the Querétaro Campus.',
    },
  },
  {
    year: '2022',
    title: { es: 'Fondo de Población de las Naciones Unidas (UNFPA) México', en: 'United Nations Population Fund (UNFPA) Mexico' },
    detail: {
      es: 'Colaboración en iniciativas de juventud y Agenda 2030, incluido el programa Generación 2030 en Querétaro.',
      en: 'Work on youth and 2030 Agenda initiatives, including the Generation 2030 programme in Querétaro.',
    },
  },
  {
    year: '2021',
    title: { es: 'Docencia en la Universidad Tecnológica de México (UNITEC)', en: 'Teaching at Universidad Tecnológica de México (UNITEC)' },
    detail: {
      es: 'Asignaturas de política exterior, relaciones internacionales, seguridad, geoeconomía y geopolítica en la Facultad de Administración y Ciencias Sociales.',
      en: 'Courses in foreign policy, international relations, security, geoeconomics and geopolitics at the School of Administration and Social Sciences.',
    },
  },
  {
    year: '2021',
    title: { es: 'Caravana FinTech y Laboratorio de Integración (InLab)', en: 'FinTech Caravan and Integration Lab (InLab)' },
    detail: {
      es: 'Liderazgo local de la Caravana FinTech de la Embajada Británica en México, MakeSense, DAI y GIZ; participación en InLab del proyecto PROFIL (GIZ / ACNUR).',
      en: 'Local lead of the FinTech Caravan of the British Embassy in Mexico, MakeSense, DAI and GIZ; participation in InLab under the PROFIL project (GIZ / UNHCR).',
    },
  },
  {
    year: '2021',
    title: { es: 'International Youth Development Exchange Program (INDEX)', en: 'International Youth Development Exchange Program (INDEX)' },
    detail: {
      es: 'Representación de México en el intercambio del Instituto Mexicano de la Juventud con la Oficina del Gabinete del Gobierno de Japón.',
      en: 'Represented Mexico in the exchange of the Mexican Youth Institute with the Cabinet Office of the Government of Japan.',
    },
  },
  {
    year: '2018',
    title: { es: 'Centro de Rehabilitación y Educación Especial · DIF Estado de México', en: 'Rehabilitation and Special Education Centre · DIF State of Mexico' },
    detail: {
      es: 'Servicio social en inclusión laboral, con vinculación público-privada con Nestlé Planta Toluca.',
      en: 'Professional service in labour inclusion, including a public-private partnership with Nestlé Toluca Plant.',
    },
  },
]
