export const stats = [
  { value: '8+', es: 'Años en migración y política pública', en: 'Years in migration and public policy' },
  { value: '5+', es: 'Años de docencia profesional', en: 'Years of professional teaching' },
  { value: '3', es: 'Instituciones de educación superior', en: 'Higher-education institutions' },
  { value: '2018—', es: 'Recorrido documentado', en: 'Documented path' },
]

export const places = [
  {
    id: 'qro',
    x: 28,
    y: 58,
    title: { es: 'Querétaro', en: 'Querétaro' },
    text: {
      es: 'Base de trabajo: albergue, universidades, red intersectorial y consejos locales.',
      en: 'Working base: shelter, universities, intersectoral network and local councils.',
    },
  },
  {
    id: 'mex',
    x: 34,
    y: 64,
    title: { es: 'Estado de México', en: 'State of Mexico' },
    text: {
      es: 'Servicio social en el DIF y vinculación con Nestlé Planta Toluca; congreso en Campus Toluca.',
      en: 'Professional service at DIF and partnership with Nestlé Toluca Plant; congress at the Toluca Campus.',
    },
  },
  {
    id: 'uk',
    x: 48,
    y: 32,
    title: { es: 'Reino Unido', en: 'United Kingdom' },
    text: {
      es: 'Acompañamiento de inmersiones académicas del Tecnológico de Monterrey.',
      en: 'Academic immersions with Tecnológico de Monterrey.',
    },
  },
  {
    id: 'fr',
    x: 51,
    y: 36,
    title: { es: 'Francia', en: 'France' },
    text: {
      es: 'Acompañamiento de inmersiones académicas del Tecnológico de Monterrey.',
      en: 'Academic immersions with Tecnológico de Monterrey.',
    },
  },
  {
    id: 'jp',
    x: 82,
    y: 38,
    title: { es: 'Japón', en: 'Japan' },
    text: {
      es: 'Representación de México en el International Youth Development Exchange Program (INDEX).',
      en: 'Represented Mexico in the International Youth Development Exchange Program (INDEX).',
    },
  },
]

export const axes = [
  {
    n: '01',
    to: '/trayectoria' as const,
    title: { es: 'Inclusión y movilidad', en: 'Inclusion and mobility' },
    text: {
      es: 'Diseño de rutas de atención, protocolos y profesionalización de espacios que reciben a personas en movilidad.',
      en: 'Design of care pathways, protocols and professionalisation of spaces that receive people on the move.',
    },
  },
  {
    n: '02',
    to: '/trayectoria' as const,
    title: { es: 'Articulación intersectorial', en: 'Intersectoral work' },
    text: {
      es: 'Trabajo con redes, cooperación internacional y consejos ciudadanos para llevar la agenda al territorio.',
      en: 'Work with networks, international cooperation and citizens’ councils to take the agenda into the territory.',
    },
  },
  {
    n: '03',
    to: '/docencia' as const,
    title: { es: 'Docencia profesional', en: 'Professional teaching' },
    text: {
      es: 'Formación en relaciones internacionales, ciudadanía global y movilidad humana, con inmersiones en el extranjero.',
      en: 'Teaching in international relations, global citizenship and human mobility, including immersions abroad.',
    },
  },
]
