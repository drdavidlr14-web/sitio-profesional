import { timeline } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export function Timeline() {
  const { t } = useI18n()
  return (
    <ol className="relative space-y-8 border-l border-[#0b1f38]/15 pl-6">
      {timeline.map((item) => (
        <li key={`${item.year}-${item.title.es}`} className="relative">
          <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full bg-[#c4a46a]" />
          <p className="text-xs tracking-[0.18em] uppercase text-[#c4a46a]">{item.year}</p>
          <h3 className="mt-1 text-lg text-[#0b1f38]">{t(item.title)}</h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#5c6b7a]">{t(item.detail)}</p>
        </li>
      ))}
    </ol>
  )
}
