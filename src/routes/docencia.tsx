import { createFileRoute } from '@tanstack/react-router'
import { ClassroomLab } from '~/components/apps'
import { ContactBand, PageIntro } from '~/components/ui'
import { teaching } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export const Route = createFileRoute('/docencia')({
  component: Page,
})

function Page() {
  const { t } = useI18n()
  return (
    <>
      <main className="mx-auto max-w-6xl px-5 py-16">
        <PageIntro kicker={{ es: 'Aula', en: 'Classroom' }} title={{ es: 'Docencia', en: 'Teaching' }} lead={teaching.intro} />
        <div className="mt-10">
          <ClassroomLab />
        </div>
        <div className="mt-14 space-y-8">
          {teaching.posts.map((p) => (
            <article key={p.school} className="grid overflow-hidden rounded-2xl border border-[#0b1f38]/10 bg-white md:grid-cols-[1.2fr_0.8fr]">
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.16em] text-[#c4a46a]">{p.years}</p>
                <h2 className="mt-2 text-2xl text-[#0b1f38]">{p.school}</h2>
                <p className="mt-1 text-sm font-medium text-[#1a3a63]">{t(p.role)}</p>
                <div className="gold-rule my-5" />
                <p className="text-sm leading-relaxed text-[#5c6b7a]">{t(p.notes)}</p>
              </div>
              {p.img ? <img src={p.img} alt={p.school} className="h-56 w-full object-cover md:h-full" /> : <div className="hidden bg-[#0b1f38]/5 md:block" />}
            </article>
          ))}
        </div>
        <section className="mt-16">
          <h2 className="text-2xl text-[#0b1f38]">{t({ es: 'Invitaciones y ponencias', en: 'Invitations and talks' })}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {teaching.talks.map((talk) => (
              <article key={talk.title.es} className="card-lift overflow-hidden rounded-2xl border border-[#0b1f38]/10 bg-white">
                {talk.img ? <img src={talk.img} alt={talk.host} className="h-48 w-full object-cover" /> : null}
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-[#c4a46a]">{talk.year}</p>
                  <h3 className="mt-2 text-lg text-[#0b1f38]">{t(talk.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5c6b7a]">{talk.host}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <ContactBand />
    </>
  )
}
