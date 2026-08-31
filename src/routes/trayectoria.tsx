import { createFileRoute } from '@tanstack/react-router'
import { PhotoArchive } from '~/components/PhotoArchive'
import { RoleMedia } from '~/components/RoleMedia'
import { Timeline } from '~/components/Timeline'
import { useI18n } from '~/utils/i18n'

export const Route = createFileRoute('/trayectoria')({
  component: Page,
})

function Page() {
  const { t } = useI18n()
  return (
    <main className="mx-auto max-w-6xl px-5 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">{t({ es: 'Experiencia', en: 'Experience' })}</p>
      <h1 className="mt-2 text-4xl text-[#0b1f38]">{t({ es: 'Trayectoria profesional', en: 'Professional path' })}</h1>
      <p className="mt-4 max-w-3xl text-[#5c6b7a]">
        {t({
          es: 'La trayectoria combina gestión de proyectos de inclusión, colaboración con cooperación internacional y trabajo en redes locales de Querétaro.',
          en: 'The path combines inclusion-project management, work with international cooperation, and participation in local networks in Querétaro.',
        })}
      </p>
      <div className="mt-12"><RoleMedia /></div>
      <div className="mt-16">
        <h2 className="mb-8 text-2xl text-[#0b1f38]">{t({ es: 'Línea de tiempo', en: 'Timeline' })}</h2>
        <Timeline />
      </div>
      <div className="mt-16">
        <h2 className="mb-8 text-2xl text-[#0b1f38]">{t({ es: 'Imágenes', en: 'Images' })}</h2>
        <PhotoArchive />
      </div>
    </main>
  )
}
