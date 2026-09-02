import { Link, createFileRoute } from '@tanstack/react-router'
import { Atlas, ClassroomLab, CountStats, LiveDesk, YearDeck } from '~/components/apps'
import { PhotoArchive } from '~/components/PhotoArchive'
import { RoleMedia } from '~/components/RoleMedia'
import { ContactBand, FocusGrid, SectionHead } from '~/components/ui'
import { hero, profile } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { t } = useI18n()
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0b1f38] text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#c4a46a]/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#c4a46a]">{t(hero.kicker)}</p>
            <h1 className="mt-4 text-4xl leading-tight md:text-6xl">David López Romero</h1>
            <div className="gold-rule mt-6 bg-[#c4a46a]" />
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{t(hero.lead)}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.16em] text-white/45">
              {t({ es: 'Querétaro, México', en: 'Querétaro, Mexico' })}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/trayectoria" className="rounded-full bg-[#c4a46a] px-5 py-2 text-xs uppercase tracking-[0.16em] text-[#0b1f38]">
                {t({ es: 'Ver trayectoria', en: 'See experience' })}
              </Link>
              <Link to="/docencia" className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.16em]">
                {t({ es: 'Ver docencia', en: 'See teaching' })}
              </Link>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#122a4a] shadow-2xl">
              <img src="/images/portrait.jpg" alt="David López Romero" className="h-[420px] w-[230px] object-cover object-top md:h-[480px] md:w-[260px]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="grid gap-4 md:grid-cols-[0.9fr_1.4fr]">
          <LiveDesk />
          <CountStats />
        </div>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[#1a3a63]">{t(profile)}</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <SectionHead kicker={{ es: 'Mapa', en: 'Map' }} title={{ es: 'Tres ejes de trabajo', en: 'Three lines of work' }} />
        <FocusGrid />
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <SectionHead kicker={{ es: 'Tablero', en: 'Board' }} title={{ es: 'Apps de consulta', en: 'Reference apps' }} />
        <div className="space-y-6">
          <Atlas />
          <YearDeck />
          <ClassroomLab />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <SectionHead
          kicker={{ es: 'Campo', en: 'Field' }}
          title={{ es: 'Encargos actuales', en: 'Current roles' }}
          to="/trayectoria"
          action={{ es: 'Trayectoria completa', en: 'Full experience' }}
        />
        <RoleMedia kinds={['practice']} />
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <SectionHead
          kicker={{ es: 'Imágenes', en: 'Images' }}
          title={{ es: 'Campo y aula', en: 'Field and classroom' }}
          to="/trayectoria"
          action={{ es: 'Ver archivo', en: 'See archive' }}
        />
        <PhotoArchive compact />
      </section>

      <ContactBand />
    </main>
  )
}
