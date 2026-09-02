import * as React from 'react'
import { gallery } from '~/data/site'
import { useI18n } from '~/utils/i18n'

export function PhotoArchive({ compact = false }: { compact?: boolean }) {
  const { t } = useI18n()
  const items = compact ? gallery.slice(0, 6) : gallery
  const [open, setOpen] = React.useState<(typeof gallery)[number] | null>(null)

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setOpen(g)}
            className={`photo-tile group overflow-hidden rounded-xl bg-[#0b1f38]/5 text-left ${
              i === 0 && !compact ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <img
              src={g.src}
              alt={t({ es: g.es, en: g.en })}
              className={`w-full object-cover ${i === 0 && !compact ? 'h-52 md:h-full min-h-64' : 'h-40 md:h-48'}`}
            />
            <span className="block p-3 text-xs leading-snug text-[#5c6b7a]">
              {t({ es: g.es, en: g.en })}
            </span>
          </button>
        ))}
      </div>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b1f38]/80 p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-modal="true"
        >
          <figure className="max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white" onClick={(e) => e.stopPropagation()}>
            <img src={open.src} alt={t({ es: open.es, en: open.en })} className="max-h-[75vh] w-full object-contain bg-[#0b1f38]" />
            <figcaption className="flex items-center justify-between gap-4 p-4 text-sm text-[#1a3a63]">
              <span>{t({ es: open.es, en: open.en })}</span>
              <button type="button" className="text-xs uppercase tracking-[0.16em]" onClick={() => setOpen(null)}>
                {t({ es: 'Cerrar', en: 'Close' })}
              </button>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </>
  )
}
