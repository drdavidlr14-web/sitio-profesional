import { createFileRoute } from '@tanstack/react-router'
import { YearDeck } from '~/components/apps'
import { PhotoArchive } from '~/components/PhotoArchive'
import { PressList } from '~/components/PressList'
import { RoleMedia } from '~/components/RoleMedia'
import { Timeline } from '~/components/Timeline'
import { ContactBand, PageIntro } from '~/components/ui'
import { advisory } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export const Route = createFileRoute('/trayectoria')({
  component: Page,
})

function Page() {
  const { t } = useI18n()
  return (
    <>
      <main className="mx-auto max-w-6xl px-5 py-16">
        <PageIntro
          kicker={{ es: 'Experiencia', en: 'Experience' }}
          title={{ es: 'Trayectoria profesional', en: 'Professional path' }}
          lead={{
            es: 'La práctica profesional se concentra en la inclusión de personas en movilidad, la articulación intersectorial y la colaboración con cooperación internacional. La docencia se detalla en su propia sección.',
            en: 'Professional practice centres on inclusion of people on the move, intersectoral coordination and work with international cooperation. Teaching is set out in its own section.',
          }}
        />
        <section className="mt-14">
          <h2 className="mb-6 text-2xl text-[#0b1f38]">{t({ es: 'Encargos de campo', en: 'Field roles' })}</h2>
          <RoleMedia kinds={['practice']} />
        </section>
        <section className="mt-16">
          <h2 className="mb-6 text-2xl text-[#0b1f38]">{t({ es: 'Línea de tiempo', en: 'Timeline' })}</h2>
          <YearDeck />
          <div className="mt-8">
            <Timeline />
          </div>
        </section>
        <section className="mt-16">
          <h2 className="mb-6 text-2xl text-[#0b1f38]">{t({ es: 'Consejos y redes', en: 'Advisory and networks' })}</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {advisory.map((a) => (
              <li key={a.es} className="rounded-xl border border-[#0b1f38]/10 bg-white px-4 py-4 text-sm leading-relaxed text-[#1a3a63]">
                <span className="mb-2 block h-1 w-8 bg-[#c4a46a]" />
                {t(a)}
              </li>
            ))}
          </ul>
        </section>
        <section className="mt-16">
          <h2 className="mb-6 text-2xl text-[#0b1f38]">{t({ es: 'Registro público', en: 'Public record' })}</h2>
          <PressList />
        </section>
        <section className="mt-16">
          <h2 className="mb-6 text-2xl text-[#0b1f38]">{t({ es: 'Imágenes de trabajo', en: 'Working images' })}</h2>
          <PhotoArchive />
        </section>
      </main>
      <ContactBand />
    </>
  )
}
