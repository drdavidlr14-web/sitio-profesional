import { Link, createFileRoute } from '@tanstack/react-router'
import { PhotoArchive } from '~/components/PhotoArchive'
import { RoleMedia } from '~/components/RoleMedia'
import { hero, profile, teaching } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const { t } = useI18n()
  return (
    <main>
      <section className="bg-[#0b1f38] text-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[1.15fr_0.85fr] md:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[#c4a46a]">{t(hero.kicker)}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">David López Romero</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">{t(hero.lead)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/trayectoria"
                className="rounded-full bg-[#c4a46a] px-5 py-2 text-xs uppercase tracking-[0.16em] text-[#0b1f38]"
              >
                {t({ es: 'Ver trayectoria', en: 'See experience' })}
              </Link>
              <Link
                to="/docencia"
                className="rounded-full border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.16em]"
              >
                {t({ es: 'Ver docencia', en: 'See teaching' })}
              </Link>
            </div>
          </div>
          <div className="justify-self-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#122a4a] shadow-2xl">
              <img
                src="/images/portrait.jpg"
                alt="David López Romero"
                className="h-[420px] w-[230px] object-cover object-top md:h-[480px] md:w-[260px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="max-w-3xl text-lg leading-relaxed text-[#1a3a63]">{t(profile)}</p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">
              {t({ es: 'Campo', en: 'Field' })}
            </p>
            <h2 className="mt-2 text-3xl text-[#0b1f38]">
              {t({ es: 'Encargos actuales', en: 'Current roles' })}
            </h2>
          </div>
          <Link to="/trayectoria" className="text-sm underline underline-offset-4">
            {t({ es: 'Trayectoria completa', en: 'Full experience' })}
          </Link>
        </header>
        <RoleMedia kinds={['practice']} />
      </section>

      <section className="bg-white/70 py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">
                {t({ es: 'Aula', en: 'Classroom' })}
              </p>
              <h2 className="mt-2 text-3xl text-[#0b1f38]">
                {t({ es: 'Docencia', en: 'Teaching' })}
              </h2>
            </div>
            <Link to="/docencia" className="text-sm underline underline-offset-4">
              {t({ es: 'Ver más', en: 'Read more' })}
            </Link>
          </div>
          <p className="mb-8 max-w-3xl text-[#5c6b7a]">{t(teaching.intro)}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {teaching.posts.map((p) => (
              <article key={p.school} className="rounded-2xl border border-[#0b1f38]/10 bg-white p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-[#c4a46a]">{p.years}</p>
                <h3 className="mt-2 text-lg text-[#0b1f38]">{p.school}</h3>
                <p className="mt-1 text-sm text-[#1a3a63]">{t(p.role)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">
              {t({ es: 'Imágenes de trabajo', en: 'Working images' })}
            </p>
            <h2 className="mt-2 text-3xl text-[#0b1f38]">
              {t({ es: 'Campo y aula', en: 'Field and classroom' })}
            </h2>
          </div>
          <Link to="/trayectoria" className="text-sm underline underline-offset-4">
            {t({ es: 'Ver archivo', en: 'See archive' })}
          </Link>
        </div>
        <PhotoArchive compact />
      </section>
    </main>
  )
}
