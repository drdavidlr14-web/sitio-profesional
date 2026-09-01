import { roles } from '~/data/site'
import { useI18n } from '~/utils/i18n'

type Kind = (typeof roles)[number]['kind']

export function RoleMedia({ kinds }: { kinds?: Kind[] }) {
  const { t } = useI18n()
  const items = kinds ? roles.filter((r) => kinds.includes(r.kind)) : roles
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((r) => (
        <article key={r.title.es} className="rounded-2xl border border-[#0b1f38]/10 bg-white p-6 shadow-[0_8px_30px_rgba(11,31,56,0.04)]">
          <p className="text-xs tracking-[0.16em] uppercase text-[#c4a46a]">
            {r.period} · {r.place}
          </p>
          <h3 className="mt-2 text-xl text-[#0b1f38]">{t(r.title)}</h3>
          <p className="mt-1 text-sm font-medium text-[#1a3a63]">{t(r.org)}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#5c6b7a]">{t(r.text)}</p>
        </article>
      ))}
    </div>
  )
}
