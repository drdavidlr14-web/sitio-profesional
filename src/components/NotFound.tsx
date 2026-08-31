import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center">
      <p className="text-sm tracking-[0.2em] uppercase text-[#c4a46a]">404</p>
      <h1 className="mt-4 text-3xl text-[#0b1f38]">Página no encontrada</h1>
      <Link to="/" className="mt-8 inline-block text-sm underline underline-offset-4">
        Volver al inicio
      </Link>
    </main>
  )
}
