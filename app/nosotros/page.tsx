import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function NosotrosPage() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Navbar />

      {/* Contenido principal (versión móvil) */}
      <div className="md:hidden bg-white flex-grow">
        <div className="content-section px-4">
          <p className="text-sm mb-3">
            En Tierra Ancestral creamos esculturas únicas a partir de fósiles y elementos prehistóricos, elaboradas a
            mano con materiales naturales y una profunda conexión con la historia de la Tierra. Cada pieza nace del
            trabajo paciente y detallado de nuestras manos, respetando los tiempos del oficio y honrando el legado
            ancestral que nos ofrece la naturaleza.
          </p>
          <p className="text-sm">
            Nos inspira la majestuosidad de lo antiguo, lo auténtico y lo que ha perdurado a lo largo de los milenios.
            Creemos en una belleza que trasciende el tiempo y en las historias que los fósiles nos revelan. No buscamos
            lo efímero ni lo superficial, sino aquello que tiene profundidad, raíz y significado. Cada escultura es una
            ventana hacia un mundo remoto, una conexión con lo esencial y una invitación a contemplar el presente desde
            una mirada más consciente.
          </p>
        </div>
      </div>

      {/* Contenido principal (versión desktop) */}
      <div className="hidden md:block bg-white flex-grow">
        <div className="bg-white p-6">
          <div className="desktop-container max-w-4xl mx-auto">
            <p className="text-lg mb-4">
              En Tierra Ancestral creamos esculturas únicas a partir de fósiles y elementos prehistóricos, elaboradas a
              mano con materiales naturales y una profunda conexión con la historia de la Tierra. Cada pieza nace del
              trabajo paciente y detallado de nuestras manos, respetando los tiempos del oficio y honrando el legado
              ancestral que nos ofrece la naturaleza.
            </p>
            <p className="text-lg mb-4">
              Nos inspira la majestuosidad de lo antiguo, lo auténtico y lo que ha perdurado a lo largo de los milenios.
              Creemos en una belleza que trasciende el tiempo y en las historias que los fósiles nos revelan. No
              buscamos lo efímero ni lo superficial, sino aquello que tiene profundidad, raíz y significado. Cada
              escultura es una ventana hacia un mundo remoto, una conexión con lo esencial y una invitación a contemplar
              el presente desde una mirada más consciente.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
