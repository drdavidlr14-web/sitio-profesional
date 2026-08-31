import { useI18n } from '~/utils/i18n'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className="mt-20 border-t border-[#0b1f38]/10 bg-[#0b1f38] text-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-10 text-sm md:flex-row md:items-center md:justify-between">
        <p className="tracking-wide">David López Romero</p>
        <p className="text-white/55">
          {t({
            es: 'Sitio profesional · Querétaro, México',
            en: 'Professional site · Querétaro, Mexico',
          })}
        </p>
      </div>
    </footer>
  )
}
