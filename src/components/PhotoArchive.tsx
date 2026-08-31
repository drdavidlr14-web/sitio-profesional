import { gallery } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export function PhotoArchive({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n()
  const items = compact ? gallery.slice(0, 6) : gallery
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
      {items.map((g) => (
        <figure key={g.src} className="overflow-hidden rounded-xl bg-[#0b1f38]/5">
          <img src={g.src} alt={t({ es: g.es, en: g.en })} className="h-40 w-full object-cover md:h-48" />
          <figcaption className="p-3 text-xs leading-snug text-[#5c6b7a]">{t({ es: g.es, en: g.en })}</figcaption>
        </figure>
      ))}
    </div>
  )
}
