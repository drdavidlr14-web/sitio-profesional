import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
import { PageIntro } from '~/components/ui'
import { useI18n } from '~/utils/i18n'

export const Route = createFileRoute('/contacto')({
  component: Page,
})

function Page() {
  const { t } = useI18n()
  const [status, setStatus] = React.useState<'idle' | 'ok' | 'error'>('idle')

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const message = String(data.get('message') || '').trim()
    if (!name || !email || !message || !email.includes('@')) {
      setStatus('error')
      return
    }
    setStatus('ok')
    e.currentTarget.reset()
  }

  return (
    <main className="mx-auto max-w-xl px-5 py-16">
      <PageIntro
        kicker={{ es: 'Correspondencia', en: 'Correspondence' }}
        title={{ es: 'Contacto', en: 'Contact' }}
        lead={{
          es: 'Para consultas profesionales, invitaciones a colaborar o correspondencia institucional.',
          en: 'For professional enquiries, invitations to collaborate or institutional correspondence.',
        }}
      />
      <a href="/cv-david-lopez-romero.pdf" className="mt-6 inline-block text-sm text-[#1a3a63] underline underline-offset-4">
        {t({ es: 'Descargar curriculum vitae', en: 'Download curriculum vitae' })}
      </a>
      <form onSubmit={onSubmit} className="mt-10 space-y-4">
        <label className="block text-sm">
          <span className="text-[#0b1f38]">{t({ es: 'Nombre', en: 'Name' })}</span>
          <input name="name" required className="mt-1 w-full rounded-xl border border-[#0b1f38]/15 bg-white px-3 py-2 outline-none focus:border-[#c4a46a]" />
        </label>
        <label className="block text-sm">
          <span className="text-[#0b1f38]">Email</span>
          <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-[#0b1f38]/15 bg-white px-3 py-2 outline-none focus:border-[#c4a46a]" />
        </label>
        <label className="block text-sm">
          <span className="text-[#0b1f38]">{t({ es: 'Mensaje', en: 'Message' })}</span>
          <textarea name="message" required rows={6} className="mt-1 w-full rounded-xl border border-[#0b1f38]/15 bg-white px-3 py-2 outline-none focus:border-[#c4a46a]" />
        </label>
        <button type="submit" className="rounded-full bg-[#0b1f38] px-6 py-2 text-xs uppercase tracking-[0.16em] text-white">
          {t({ es: 'Enviar', en: 'Send' })}
        </button>
        {status === 'ok' ? (
          <p className="text-sm text-emerald-800">{t({ es: 'Mensaje registrado. Gracias.', en: 'Message recorded. Thank you.' })}</p>
        ) : null}
        {status === 'error' ? (
          <p className="text-sm text-red-800">{t({ es: 'Revisa los campos e inténtalo de nuevo.', en: 'Please check the fields and try again.' })}</p>
        ) : null}
      </form>
    </main>
  )
}
