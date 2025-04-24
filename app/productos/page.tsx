import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

// Productos con imágenes únicas y descripciones específicas
const products = [
  {
    id: 1,
    name: "Modelo Spinosaurio",
    price: "199,99€",
    image: "/dino8.jpg",
    description:
      "Esqueleto articulado de Spinosaurio con aleta dorsal prominente. Elaborado con técnicas tradicionales y materiales de alta calidad que garantizan durabilidad y un aspecto realista. Cada pieza es revisada minuciosamente para asegurar la precisión anatómica.",
  },
  {
    id: 2,
    name: "Fósil Terópodo",
    price: "279,99€",
    image: "/dino12.jpg",
    description:
      "Réplica de dinosaurio carnívoro en posición de carrera. Montado sobre base de exhibición transparente. Incluye certificado de autenticidad y guía informativa sobre la especie representada. Ideal para coleccionistas y entusiastas de la paleontología.",
  },
  {
    id: 3,
    name: "Cráneo de Dire Wolf",
    price: "159,99€",
    image: "/dino6.jpg",
    description:
      "Réplica detallada de cráneo de lobo prehistórico. Esta pieza muestra con precisión la poderosa mandíbula y dentición de este depredador del Pleistoceno. Elaborada con resinas especiales que imitan la textura y color del hueso fosilizado. Perfecta como pieza central en cualquier colección.",
  },
  {
    id: 4,
    name: "Fósil Marino",
    price: "159,99€",
    image: "/dino17.jpg",
    description:
      "Réplica de reptil marino prehistórico preservado en matriz rocosa. Detalle excepcional en cada vértebra y estructura ósea. Estas criaturas habitaron los océanos antiguos y son parte fundamental del registro fósil. Pieza educativa y decorativa.",
  },
  {
    id: 5,
    name: "Huevos Fosilizados",
    price: "89,99€",
    image: "/dino4.jpg",
    description:
      "Conjunto de huevos de dinosaurio fosilizados en su nido original. Pieza educativa y decorativa que muestra uno de los descubrimientos más fascinantes de la paleontología: la evidencia de comportamiento reproductivo de los dinosaurios. Cada huevo está reproducido con gran detalle.",
  },
  {
    id: 6,
    name: "Reptiles Primitivos",
    price: "145,99€",
    image: "/dino5.jpg",
    description:
      "Réplica de fósil de reptiles primitivos en placa de piedra. Esta pieza muestra dos especímenes perfectamente preservados, capturando un momento del Período Pérmico. Cada detalle anatómico ha sido cuidadosamente reproducido, desde las pequeñas vértebras hasta las delicadas extremidades. Incluye soporte para exhibición.",
  },
  {
    id: 7,
    name: "Miniatura Braquiosaurio",
    price: "79,99€",
    image: "/dino9.jpg",
    description:
      "Escultura en metal dorado de Braquiosaurio sobre base de madera. Esta elegante pieza decorativa combina el interés paleontológico con un diseño sofisticado. Ideal para escritorios, estanterías o como regalo para amantes de los dinosaurios. Acabado metálico de alta calidad resistente al desgaste.",
  },
  {
    id: 8,
    name: "Colección Amonites",
    price: "129,99€",
    image: "/dino14.jpg",
    description:
      "Conjunto de fósiles de amonites de diferentes tamaños. Estos moluscos marinos extintos son reconocidos por sus características conchas en espiral. Nuestra colección incluye especímenes seleccionados que muestran la diversidad de formas y patrones. Cada pieza ha sido cuidadosamente preparada y pulida.",
  },
  {
    id: 9,
    name: "Dimetrodon Completo",
    price: "349,99€",
    image: "/dino10.jpg",
    description:
      "Réplica a escala de Dimetrodon con vela dorsal completa. Este reptil del Pérmico, a menudo confundido con un dinosaurio, es conocido por su característica vela dorsal formada por espinas neurales alargadas. Nuestra reproducción captura con precisión su anatomía única y postura. Montado sobre base estable.",
  },
  {
    id: 10,
    name: "Cráneo T-Rex Premium",
    price: "499,99€",
    image: "/dino11.jpg",
    description:
      "Réplica museística de cráneo de Tyrannosaurus Rex a escala 1:1. Esta impresionante pieza reproduce con exactitud cada detalle del temible depredador del Cretácico. Fabricada mediante escaneo 3D de especímenes originales y elaborada con materiales de primera calidad. Ideal para museos, exposiciones o coleccionistas exigentes.",
  },
]

export default function ProductosPage() {
  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Navbar />

      {/* Versión móvil */}
      <div className="md:hidden bg-white flex-grow">
        <div className="content-section">
          <div className="grid grid-cols-2 gap-2">
            {products.slice(0, 6).map((product) => (
              <div key={product.id} className="product-card">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="product-image"
                />
                <div className="product-info">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-price">{product.price}</p>
                  <div className="product-description-container">
                    <p className="product-description">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Versión desktop */}
      <div className="hidden md:block bg-white flex-grow">
        <div className="bg-white p-6">
          <div className="desktop-container">
            <div className="product-grid">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="product-image"
                  />
                  <div className="product-info">
                    <h3 className="product-title">{product.name}</h3>
                    <p className="product-price">{product.price}</p>
                    <div className="product-description-container">
                      <p className="product-description">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
