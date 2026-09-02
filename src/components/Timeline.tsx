import { timeline } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export function Timeline() {
  const { t } = useI18n()
  return (
    <ol className="space-y-4">
      {timeline.map((item) => (
        <li
          key={`${item.year}-${item.title.es}`}
          className="grid gap-4 rounded-2xl border border-[#0b1f38]/10 bg-white p-5 md:grid-cols-[7rem_1fr] md:items-start"
        >
          <p className="text-sm font-medium tracking-[0.14em] text-[#c4a46a]">{item.year}</p>
          <div>
            <h3 className="text-lg text-[#0b1f38]">{t(item.title)}</h3>
            <p className="mt-1 max-w-3xl text-sm leading-relaxed text-[#5c6b7a]">{t(item.detail)}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
