import { createFileRoute } from '@tanstack/react-router'
import * as React from 'react'
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
      <p className="text-xs uppercase tracking-[0.2em] text-[#c4a46a]">
        {t({ es: 'Correspondencia', en: 'Correspondence' })}
      </p>
      <h1 className="mt-2 text-4xl text-[#0b1f38]">{t({ es: 'Contacto', en: 'Contact' })}</h1>
      <p className="mt-4 text-[#5c6b7a]">
        {t({
          es: 'Este formulario registra la solicitud en el navegador. Para una bandeja persistente hace falta configurar una base de datos en el entorno de despliegue.',
          en: 'This form records the request in the browser. A persistent inbox requires a database in the deployment environment.',
        })}
      </p>
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
