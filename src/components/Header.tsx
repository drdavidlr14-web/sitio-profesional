import { Link, useRouterState } from '@tanstack/react-router'
import { nav } from '~/data/site'
import { useI18n } from '~/utils/i18n'
import * as React from 'react'

export function Header() {
  const { lang, setLang, t } = useI18n()
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-[#c4a46a]/25 bg-[#0b1f38]/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="DLR" className="h-9 w-9 object-contain" />
          <span className="font-ui text-sm tracking-wide">David López Romero</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-xs uppercase tracking-[0.16em] transition ${
                pathname === item.to ? 'text-[#c4a46a]' : 'text-white/80 hover:text-white'
              }`}
            >
              {t({ es: item.es, en: item.en })}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="rounded-full border border-white/25 px-3 py-1 text-[11px] tracking-[0.18em] uppercase text-white/90"
            aria-label="Language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
        </nav>
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className="rounded-full border border-white/25 px-3 py-1 text-[11px] tracking-[0.18em] uppercase"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button type="button" className="text-xs uppercase tracking-[0.16em]" onClick={() => setOpen((v) => !v)}>
            {open ? 'Cerrar' : 'Menú'}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/10 px-5 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.14em] text-white/90"
              >
                {t({ es: item.es, en: item.en })}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  )
}
