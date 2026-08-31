import { letter, press } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export function PressList() {
  const { t } = useI18n()
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <figure className="overflow-hidden rounded-2xl border border-[#0b1f38]/10 bg-white">
        <img src={letter.src} alt={t(letter.title)} className="w-full object-cover object-top" />
        <figcaption className="space-y-2 p-5">
          <h3 className="text-lg text-[#0b1f38]">{t(letter.title)}</h3>
          <p className="text-sm leading-relaxed text-[#5c6b7a]">{t(letter.caption)}</p>
        </figcaption>
      </figure>
      {press.map((p) => (
        <figure key={p.title.es} className="overflow-hidden rounded-2xl border border-[#0b1f38]/10 bg-white">
          <img src={p.img} alt={t(p.title)} className="h-56 w-full object-cover" />
          <figcaption className="p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-[#c4a46a]">{p.outlet}</p>
            <h3 className="mt-2 text-lg text-[#0b1f38]">{t(p.title)}</h3>
          </figcaption>
        </figure>
      ))}
    </div>
  )
}
