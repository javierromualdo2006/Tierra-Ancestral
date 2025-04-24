"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Imágenes para el carrusel (reducido a las 4 primeras)
const sliderImages = ["/dino2.jpg", "/dino3.jpg", "/dino15.jpg", "/dino18.jpg"]

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(true)

  // Verificar si las imágenes existen al cargar la página
  useEffect(() => {
    const checkImages = async () => {
      try {
        // Simulación de carga de imágenes
        await new Promise((resolve) => setTimeout(resolve, 500))
        setImagesLoaded(true)
      } catch (error) {
        console.error("Error al cargar imágenes:", error)
        setImagesLoaded(false)
      }
    }

    checkImages()
  }, [])

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <main className="bg-white flex flex-col min-h-screen">
      <Navbar />

      {/* Contenido principal (versión móvil) */}
      <div className="md:hidden bg-white flex-grow">
        <div className="content-section">
          {/* Carrusel móvil */}
          <div className="relative mb-4">
            <div className="relative h-[200px] w-full">
              {imagesLoaded ? (
                <Image
                  src={sliderImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`Fósil de dinosaurio ${currentImageIndex + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <div className="h-full w-full bg-gray-200 rounded-lg flex items-center justify-center">
                  <p>Cargando imagen...</p>
                </div>
              )}
            </div>

            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow-md"
              aria-label="Imagen anterior"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-1 shadow-md"
              aria-label="Imagen siguiente"
            >
              <ChevronRight size={20} />
            </button>

            {/* Indicadores */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
              {sliderImages.map((_, index) => (
                <span
                  key={index}
                  className={`block h-2 w-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                />
              ))}
            </div>
          </div>

          <p className="text-sm">
            En Tierra Ancestral creamos esculturas de fósiles y piezas prehistóricas, elaboradas a mano con materiales
            naturales y un profundo respeto por la historia que contienen. Cada obra que surge en nuestro taller es el
            resultado de un proceso meticuloso, donde la paciencia, el tiempo y la dedicación se entrelazan para dar
            vida a piezas auténticas y únicas. Cada escultura es una interpretación de la naturaleza misma,
            transmitiendo la conexión con lo ancestral y lo que perdura a través de los siglos.
          </p>
        </div>
      </div>

      {/* Contenido principal (versión desktop) */}
      <div className="hidden md:block bg-white flex-grow">
        <div className="bg-white p-6">
          <div className="desktop-container">
            {/* Carrusel desktop */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="relative h-[350px] w-full">
                {imagesLoaded ? (
                  <Image
                    src={sliderImages[currentImageIndex] || "/placeholder.svg"}
                    alt={`Fósil de dinosaurio ${currentImageIndex + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                ) : (
                  <div className="h-full w-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <p>Cargando imagen...</p>
                  </div>
                )}
              </div>

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md transition-colors"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white/90 rounded-full p-2 shadow-md transition-colors"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicadores */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {sliderImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`block h-3 w-3 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-lg max-w-4xl mx-auto">
              En Tierra Ancestral creamos esculturas de fósiles y piezas prehistóricas, elaboradas a mano con materiales
              naturales y un profundo respeto por la historia que contienen. Cada obra que surge en nuestro taller es el
              resultado de un proceso meticuloso, donde la paciencia, el tiempo y la dedicación se entrelazan para dar
              vida a piezas auténticas y únicas. Cada escultura es una interpretación de la naturaleza misma,
              transmitiendo la conexión con lo ancestral y lo que perdura a través de los siglos.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
