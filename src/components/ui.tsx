import { Link } from '@tanstack/react-router'
import { axes, stats } from '~/data/site'
import { useI18n } from '~/utils/i18n'

type Copy = { es: string; en: string }

export function PageIntro({
  kicker,
  title,
  lead,
}: {
  kicker: Copy
  title: Copy
  lead: Copy
}) {
  const { t } = useI18n()
  return (
    <header className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">{t(kicker)}</p>
      <h1 className="mt-2 text-4xl leading-tight text-[#0b1f38] md:text-5xl">{t(title)}</h1>
      <div className="gold-rule mt-5" />
      <p className="mt-5 text-[#5c6b7a] leading-relaxed">{t(lead)}</p>
    </header>
  )
}

export function SectionHead({
  kicker,
  title,
  to,
  action,
}: {
  kicker: Copy
  title: Copy
  to?: string
  action?: Copy
}) {
  const { t } = useI18n()
  return (
    <header className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">{t(kicker)}</p>
        <h2 className="mt-2 text-3xl text-[#0b1f38]">{t(title)}</h2>
      </div>
      {to && action ? (
        <Link to={to} className="shrink-0 text-sm text-[#1a3a63] underline underline-offset-4">
          {t(action)}
        </Link>
      ) : null}
    </header>
  )
}

export function StatBar() {
  const { t } = useI18n()
  return (
    <div className="grid grid-cols-2 divide-y divide-[#0b1f38]/10 overflow-hidden rounded-2xl border border-[#0b1f38]/10 bg-white md:grid-cols-4 md:divide-x md:divide-y-0">
      {stats.map((s) => (
        <div key={s.es} className="px-5 py-6">
          <p className="font-serif text-3xl text-[#0b1f38]">{s.value}</p>
          <p className="mt-2 text-xs leading-snug tracking-wide text-[#5c6b7a]">{t(s)}</p>
        </div>
      ))}
    </div>
  )
}

export function FocusGrid() {
  const { t } = useI18n()
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {axes.map((axis) => (
        <Link
          key={axis.n}
          to={axis.to}
          className="card-lift group rounded-2xl border border-[#0b1f38]/10 bg-white p-6"
        >
          <p className="text-xs tracking-[0.2em] text-[#c4a46a]">{axis.n}</p>
          <h3 className="mt-3 text-xl text-[#0b1f38]">{t(axis.title)}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#5c6b7a]">{t(axis.text)}</p>
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[#1a3a63]">
            {t({ es: 'Entrar', en: 'Open' })} →
          </p>
        </Link>
      ))}
    </div>
  )
}

export function ContactBand() {
  const { t } = useI18n()
  return (
    <section className="bg-[#0b1f38] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-14 md:flex-row md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">
            {t({ es: 'Correspondencia', en: 'Correspondence' })}
          </p>
          <h2 className="mt-2 max-w-xl text-3xl">
            {t({
              es: 'Consultas profesionales e invitaciones a colaborar.',
              en: 'Professional enquiries and invitations to collaborate.',
            })}
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/contacto"
            className="rounded-full bg-[#c4a46a] px-5 py-2 text-xs uppercase tracking-[0.16em] text-[#0b1f38]"
          >
            {t({ es: 'Escribir', en: 'Write' })}
          </Link>
          <a
            href="/cv-david-lopez-romero.pdf"
            className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.16em]"
          >
            {t({ es: 'Descargar CV', en: 'Download CV' })}
          </a>
        </div>
      </div>
    </section>
  )
}
