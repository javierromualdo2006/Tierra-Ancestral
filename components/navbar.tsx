import Link from "next/link"

export default function Navbar() {
  return (
    <header className="curved-header text-center p-4">
      <h1 className="brand-name text-3xl md:text-5xl mb-4 md:mb-6">Tierra Ancestral</h1>
      <nav className="flex justify-center gap-2 md:gap-4 mb-4">
        {/* Versión móvil y desktop unificada */}
        <Link href="/" className="nav-button">
          Inicio
        </Link>
        <Link href="/productos" className="nav-button">
          Productos
        </Link>
        <Link href="/nosotros" className="nav-button">
          Nosotros
        </Link>
      </nav>
    </header>
  )
}
