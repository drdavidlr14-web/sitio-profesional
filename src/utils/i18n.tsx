import * as React from 'react'

export type Lang = 'es' | 'en'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (pair: { es: string; en: string }) => string
}

const I18nContext = React.createContext<Ctx | null>(null)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Lang>('es')

  React.useEffect(() => {
    const saved = window.localStorage.getItem('dlr-lang') as Lang | null
    if (saved === 'es' || saved === 'en') setLangState(saved)
  }, [])

  const setLang = React.useCallback((l: Lang) => {
    setLangState(l)
    window.localStorage.setItem('dlr-lang', l)
    document.documentElement.lang = l
  }, [])

  const t = React.useCallback(
    (pair: { es: string; en: string }) => pair[lang],
    [lang],
  )

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = React.useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within I18nProvider')
  return ctx
}
