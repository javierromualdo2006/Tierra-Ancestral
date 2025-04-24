import Link from "next/link"

export default function SobreNosotrosPage() {
  return (
    <main className="bg-white">
      {/* Versión móvil */}
      <div className="md:hidden bg-white">
        <header className="curved-header text-center p-4">
          <h1 className="brand-name text-3xl mb-4">Tierra Ancestral</h1>
          <nav className="flex justify-center gap-2 mb-4">
            <Link href="/nosotros" className="nav-button">
              Nosotros
            </Link>
            <Link href="/" className="nav-button">
              Inicio
            </Link>
            <Link href="/productos" className="nav-button">
              Productos
            </Link>
          </nav>
        </header>

        <div className="content-section">
          <p className="text-sm">
            En Tierra Ancestral creamos esculturas únicas de fósiles y elementos prehistóricos, elaboradas a mano con
            materiales naturales y una profunda conexión con la historia de la Tierra. Cada pieza nace del trabajo
            paciente y meticuloso de nuestras manos, respetando los tiempos del oficio y honrando el legado ancestral
            que nos ha dejado la naturaleza.
          </p>
          <p className="text-sm">
            Nos inspira la majestuosidad de lo antiguo, lo auténtico y lo que perdura a lo largo de los milenios.
            Creemos en la belleza que trasciende el tiempo y en las historias que se cuentan a través de cada fósil. No
            buscamos lo efímero ni lo superficial, sino lo que tiene profundidad y significado. Cada escultura que
            creamos es una ventana a un mundo antiguo, que refleja nuestra visión de un presente más consciente,
            conectado con la Tierra y con lo esencial.
          </p>
        </div>

        <div className="contact-section">
          <h2 className="text-xl mb-2">Contactos</h2>
          <a href="https://whatsapp.com" className="contact-link">
            https://whatsapp.com
          </a>
          <a href="https://forms.com" className="contact-link">
            https://forms.com
          </a>
          <a href="https://instagram.com" className="contact-link">
            https://instagram.com
          </a>
        </div>
      </div>

      {/* Versión desktop */}
      <div className="hidden md:block bg-white">
        <header className="curved-header text-center p-4">
          <h1 className="brand-name text-5xl mb-6">Tierra Ancestral</h1>
          <nav className="flex justify-center gap-4 mb-4">
            <Link href="/sobre-nosotros" className="nav-button">
              Sobre Nosotros
            </Link>
            <Link href="/" className="nav-button">
              Inicio
            </Link>
            <Link href="/productos" className="nav-button">
              Productos
            </Link>
          </nav>
        </header>

        <div className="bg-white p-6">
          <div className="desktop-container">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg mb-4">
                En Tierra Ancestral creamos esculturas únicas de fósiles y elementos prehistóricos, elaboradas a mano
                con materiales naturales y una profunda conexión con la historia de la Tierra. Cada pieza nace del
                trabajo paciente y meticuloso de nuestras manos, respetando los tiempos del oficio y honrando el legado
                ancestral que nos ha dejado la naturaleza.
              </p>
              <p className="text-lg mb-4">
                Nos inspira la majestuosidad de lo antiguo, lo auténtico y lo que perdura a lo largo de los milenios.
                Creemos en la belleza que trasciende el tiempo y en las historias que se cuentan a través de cada fósil.
                No buscamos lo efímero ni lo superficial, sino lo que tiene profundidad y significado. Cada escultura
                que creamos es una ventana a un mundo antiguo, que refleja nuestra visión de un presente más consciente,
                conectado con la Tierra y con lo esencial.
              </p>
            </div>

            <div className="mt-8 text-center">
              <h2 className="brand-name text-3xl mb-4">Contactos</h2>
              <a href="https://whatsapp.com" className="block mb-2">
                https://whatsapp.com
              </a>
              <a href="https://forms.com" className="block mb-2">
                https://forms.com
              </a>
              <a href="https://instagram.com" className="block mb-2">
                https://instagram.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
