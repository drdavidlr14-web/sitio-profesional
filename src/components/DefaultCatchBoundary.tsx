import { Link } from '@tanstack/react-router'

export function DefaultCatchBoundary() {
  return (
    <main className="mx-auto max-w-xl px-6 py-24 text-center">
      <h1 className="text-3xl text-[#0b1f38]">Algo salió mal</h1>
      <Link to="/" className="mt-8 inline-block text-sm underline underline-offset-4">
        Volver al inicio
      </Link>
    </main>
  )
}
