import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#916a49] to-[#724721] text-white mt-auto py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif italic">Tierra Ancestral</h3>
            <p className="mb-4">
              Esculturas de fósiles y piezas prehistóricas elaboradas a mano con materiales naturales.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/productos" className="hover:underline">
                  Productos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:underline">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contactos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://w.app/tierra-ancestral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://forms.gle/T64nV633amcq5jQX7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Formulario
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Tierra Ancestral. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
