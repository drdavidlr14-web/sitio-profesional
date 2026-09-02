import { createFileRoute } from '@tanstack/react-router'
import { ContactBand, PageIntro } from '~/components/ui'
import { credentials } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export const Route = createFileRoute('/credenciales')({
  component: Page,
})

const toc = [
  { id: 'grados', es: 'Formación', en: 'Degrees' },
  { id: 'diplomados', es: 'Diplomados', en: 'Diplomas' },
  { id: 'cursos', es: 'Cursos', en: 'Courses' },
  { id: 'certificaciones', es: 'Certificaciones', en: 'Certificates' },
]

function Block({
  id,
  title,
  items,
}: {
  id: string
  title: string
  items: { es: string; en: string }[]
}) {
  const { t } = useI18n()
  return (
    <section id={id} className="scroll-mt-24 mt-12">
      <h2 className="text-2xl text-[#0b1f38]">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.es} className="rounded-xl border border-[#0b1f38]/10 bg-white px-4 py-3 text-sm leading-relaxed text-[#1a3a63]">
            {t(item)}
          </li>
        ))}
      </ul>
    </section>
  )
}

function Page() {
  const { t } = useI18n()
  return (
    <>
      <main className="mx-auto max-w-6xl px-5 py-16">
        <PageIntro
          kicker={{ es: 'Formación', en: 'Education' }}
          title={{ es: 'Credenciales', en: 'Credentials' }}
          lead={{
            es: 'Grados, diplomados, cursos y certificaciones. Los nombres de instituciones y programas aparecen completos. Consejos y redes están en Trayectoria.',
            en: 'Degrees, diplomas, courses and certificates. Institution and programme names appear in full. Advisory roles and networks are listed under Experience.',
          }}
        />
        <nav className="mt-10 flex flex-wrap gap-2">
          {toc.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full border border-[#0b1f38]/15 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-[#1a3a63] hover:border-[#c4a46a]"
            >
              {t({ es: item.es, en: item.en })}
            </a>
          ))}
        </nav>
        <div className="max-w-3xl">
          <Block id="grados" title={t({ es: 'Formación académica', en: 'Academic degrees' })} items={credentials.degrees} />
          <Block id="diplomados" title={t({ es: 'Diplomados', en: 'Diplomas' })} items={credentials.diplomas} />
          <Block id="cursos" title={t({ es: 'Cursos y talleres', en: 'Courses and workshops' })} items={credentials.courses} />
          <Block id="certificaciones" title={t({ es: 'Certificaciones', en: 'Certificates' })} items={credentials.certs} />
        </div>
      </main>
      <ContactBand />
    </>
  )
}
