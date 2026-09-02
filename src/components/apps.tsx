import * as React from 'react'
import { places, teaching, timeline } from '~/data/site'
import { useI18n } from '~/utils/i18n'

function useInView<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null)
  const [on, setOn] = React.useState(false)
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setOn(true)
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return { ref, on }
}

function useCount(target: number, active: boolean) {
  const [n, setN] = React.useState(0)
  React.useEffect(() => {
    if (!active) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(target)
      return
    }
    let frame = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / 900)
      setN(Math.round(target * (1 - (1 - p) ** 3)))
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active])
  return n
}

export function LiveDesk() {
  const { t } = useI18n()
  const [clock, setClock] = React.useState('--:--')
  React.useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat('es-MX', {
        timeZone: 'America/Mexico_City',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(new Date())
    setClock(fmt())
    const id = window.setInterval(() => setClock(fmt()), 1000)
    return () => window.clearInterval(id)
  }, [])
  return (
    <div className="overflow-hidden rounded-2xl border border-[#0b1f38]/10 bg-[#0b1f38] p-6 text-white">
      <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">{t({ es: 'Escritorio', en: 'Desk' })}</p>
      <p className="mt-3 font-serif text-5xl tabular-nums tracking-tight">{clock}</p>
      <p className="mt-2 text-sm text-white/65">{t({ es: 'Hora en Querétaro', en: 'Time in Querétaro' })}</p>
      <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/55">
        <span className="pulse-dot h-2 w-2 rounded-full bg-[#c4a46a]" />
        {t({ es: 'En actividad', en: 'Active' })}
      </div>
    </div>
  )
}

export function CountStats() {
  const { t } = useI18n()
  const { ref, on } = useInView<HTMLDivElement>()
  const y8 = useCount(8, on)
  const y5 = useCount(5, on)
  const n3 = useCount(3, on)
  const items = [
    { n: y8, suf: '+', es: 'Años en migración y política pública', en: 'Years in migration and public policy' },
    { n: y5, suf: '+', es: 'Años de docencia profesional', en: 'Years of professional teaching' },
    { n: n3, suf: '', es: 'Instituciones de educación superior', en: 'Higher-education institutions' },
    { n: 2018, suf: '—', static: true, es: 'Inicio del recorrido documentado', en: 'Start of the documented path' },
  ]
  return (
    <div ref={ref} className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#0b1f38]/10 bg-[#0b1f38]/10 md:grid-cols-4">
      {items.map((s) => (
        <div key={s.es} className="bg-white px-5 py-7">
          <p className="font-serif text-4xl tabular-nums text-[#0b1f38]">
            {s.static ? '2018' : s.n}
            <span className="text-2xl text-[#c4a46a]">{s.suf}</span>
          </p>
          <p className="mt-2 text-xs leading-snug text-[#5c6b7a]">{t(s)}</p>
        </div>
      ))}
    </div>
  )
}

export function YearDeck() {
  const { t } = useI18n()
  const years = Array.from(new Set(timeline.map((i) => i.year)))
  const [year, setYear] = React.useState(years[0])
  const items = timeline.filter((i) => i.year === year)
  return (
    <div className="rounded-2xl border border-[#0b1f38]/10 bg-white p-5 md:p-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">{t({ es: 'Línea viva', en: 'Live timeline' })}</p>
          <h3 className="mt-1 text-2xl text-[#0b1f38]">{t({ es: 'Elegir un año', en: 'Pick a year' })}</h3>
        </div>
        <p className="text-xs text-[#5c6b7a]">{items.length} {t({ es: 'hitos', en: 'markers' })}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {years.map((y) => (
          <button key={y} type="button" onClick={() => setYear(y)} className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.14em] transition ${year === y ? 'bg-[#0b1f38] text-white' : 'border border-[#0b1f38]/15 text-[#1a3a63] hover:border-[#c4a46a]'}`}>
            {y}
          </button>
        ))}
      </div>
      <ul className="mt-6 space-y-3">
        {items.map((item) => (
          <li key={item.title.es} className="fade-up rounded-xl border border-[#0b1f38]/10 bg-[#f4f1ea] px-4 py-4">
            <p className="text-xs tracking-[0.16em] text-[#c4a46a]">{item.year}</p>
            <h4 className="mt-1 text-[#0b1f38]">{t(item.title)}</h4>
            <p className="mt-1 text-sm leading-relaxed text-[#5c6b7a]">{t(item.detail)}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ClassroomLab() {
  const { t } = useI18n()
  const [i, setI] = React.useState(0)
  const [topic, setTopic] = React.useState(0)
  const post = teaching.posts[i]
  const subjects =
    post.subjects ??
    (i === 0
      ? [
          { es: 'Ciudadanía global', en: 'Global citizenship' },
          { es: 'Desafíos contemporáneos de México', en: 'Contemporary challenges of Mexico' },
          { es: 'Inmersión · Reino Unido', en: 'Immersion · United Kingdom' },
          { es: 'Inmersión · Francia', en: 'Immersion · France' },
        ]
      : i === 1
        ? [
            { es: 'Migración internacional', en: 'International migration' },
            { es: 'Seguridad internacional', en: 'International security' },
            { es: 'Estudios de Europa', en: 'European studies' },
            { es: 'Geoeconomía', en: 'Geoeconomics' },
            { es: 'Integración regional', en: 'Regional integration' },
          ]
        : [
            { es: 'Política exterior de México', en: 'Mexico’s foreign policy' },
            { es: 'Introducción a las relaciones internacionales', en: 'Introduction to international relations' },
            { es: 'Seguridad internacional', en: 'International security' },
            { es: 'Teorías contemporáneas', en: 'Contemporary theory' },
            { es: 'Geoeconomía y geopolítica', en: 'Geoeconomics and geopolitics' },
          ])
  React.useEffect(() => setTopic(0), [i])
  return (
    <div className="rounded-2xl border border-[#0b1f38]/10 bg-white p-5 md:p-7">
      <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">{t({ es: 'Laboratorio de aula', en: 'Classroom lab' })}</p>
      <h3 className="mt-1 text-2xl text-[#0b1f38]">{t({ es: 'Explorar asignaturas', en: 'Explore courses' })}</h3>
      <div className="mt-5 flex flex-wrap gap-2">
        {teaching.posts.map((p, idx) => (
          <button key={p.school} type="button" onClick={() => setI(idx)} className={`rounded-full px-3 py-1.5 text-left text-xs transition ${i === idx ? 'bg-[#0b1f38] text-white' : 'border border-[#0b1f38]/15 text-[#1a3a63]'}`}>
            {p.school.split(',')[0]}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-[#c4a46a]">{post.years}</p>
          <p className="mt-1 font-medium text-[#1a3a63]">{t(post.role)}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#5c6b7a]">{t(post.notes)}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {subjects.map((s, idx) => (
              <button key={s.es} type="button" onClick={() => setTopic(idx)} className={`rounded-full px-3 py-1 text-xs ${topic === idx ? 'bg-[#c4a46a] text-[#0b1f38]' : 'bg-[#0b1f38]/5 text-[#1a3a63]'}`}>
                {t(s)}
              </button>
            ))}
          </div>
          {subjects[topic] ? (
            <p className="fade-up mt-4 text-sm text-[#0b1f38]">
              {t({ es: 'Asignatura activa:', en: 'Active course:' })} <strong>{t(subjects[topic])}</strong>
            </p>
          ) : null}
        </div>
        {post.img ? <img src={post.img} alt={post.school} className="h-48 w-full rounded-xl object-cover md:h-full" /> : <div className="rounded-xl bg-[#0b1f38]/5" />}
      </div>
    </div>
  )
}

export function Atlas() {
  const { t } = useI18n()
  const [id, setId] = React.useState(places[0].id)
  const current = places.find((p) => p.id === id) ?? places[0]
  return (
    <div className="overflow-hidden rounded-2xl border border-[#0b1f38]/10 bg-[#0b1f38] text-white">
      <div className="grid md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[280px] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">{t({ es: 'Atlas de trabajo', en: 'Working atlas' })}</p>
          <p className="mt-2 text-sm text-white/60">{t({ es: 'Tocar un punto', en: 'Tap a point' })}</p>
          <div className="relative mx-auto mt-4 h-52 max-w-lg">
            <div className="absolute inset-6 rounded-full border border-white/10" />
            <div className="absolute inset-12 rounded-full border border-white/5" />
            {places.map((p) => (
              <button key={p.id} type="button" onClick={() => setId(p.id)} style={{ left: `${p.x}%`, top: `${p.y}%` }} className="absolute -translate-x-1/2 -translate-y-1/2" aria-label={t(p.title)}>
                <span className={`block h-3.5 w-3.5 rounded-full border-2 ${id === p.id ? 'scale-125 border-white bg-[#c4a46a] pulse-dot' : 'border-[#c4a46a] bg-transparent'}`} />
              </button>
            ))}
          </div>
        </div>
        <div className="bg-[#122a4a] p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-[#c4a46a]">{t(current.title)}</p>
          <p className="fade-up mt-3 text-lg leading-relaxed text-white/90">{t(current.text)}</p>
        </div>
      </div>
    </div>
  )
}
