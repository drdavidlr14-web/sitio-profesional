import { createFileRoute } from '@tanstack/react-router'
import { credentials } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export const Route = createFileRoute('/credenciales')({
  component: Page,
})

function Block({
  title,
  items,
}: {
  title: string
  items: { es: string; en: string }[]
}) {
  const { t } = useI18n()
  return (
    <section className="mt-12">
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
    <main className="mx-auto max-w-3xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">
        {t({ es: 'Formación', en: 'Education' })}
      </p>
      <h1 className="mt-2 text-4xl text-[#0b1f38]">
        {t({ es: 'Credenciales', en: 'Credentials' })}
      </h1>
      <p className="mt-4 text-[#5c6b7a]">
        {t({
          es: 'Grados, diplomados, cursos y certificaciones. Los nombres de instituciones y programas aparecen completos. Consejos y redes están en Trayectoria.',
          en: 'Degrees, diplomas, courses and certificates. Institution and programme names appear in full. Advisory roles and networks are listed under Experience.',
        })}
      </p>
      <Block title={t({ es: 'Formación académica', en: 'Academic degrees' })} items={credentials.degrees} />
      <Block title={t({ es: 'Diplomados', en: 'Diplomas' })} items={credentials.diplomas} />
      <Block title={t({ es: 'Cursos y talleres', en: 'Courses and workshops' })} items={credentials.courses} />
      <Block title={t({ es: 'Certificaciones', en: 'Certificates' })} items={credentials.certs} />
    </main>
  )
}
