export const stats = [
  { value: '8+', es: 'Años en migración y política pública', en: 'Years in migration and public policy' },
  { value: '5+', es: 'Años de docencia profesional', en: 'Years of professional teaching' },
  { value: '3', es: 'Instituciones de educación superior', en: 'Higher-education institutions' },
  { value: '2018—', es: 'Recorrido documentado', en: 'Documented path' },
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
