import { Link } from '@tanstack/react-router'
import { nav } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="border-t border-white/10 bg-[#0b1f38] text-white/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-serif text-2xl text-white">David López Romero</p>
          <p className="mt-2 max-w-md text-sm text-white/55">
            {t({
              es: 'Sitio profesional · Querétaro, México',
              en: 'Professional site · Querétaro, Mexico',
            })}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-white/70">
          {nav.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-[#c4a46a]">
              {t({ es: item.es, en: item.en })}
            </Link>
          ))}
          <a href="/cv-david-lopez-romero.pdf" className="hover:text-[#c4a46a]">
            CV
          </a>
        </div>
      </div>
    </footer>
  )
}
