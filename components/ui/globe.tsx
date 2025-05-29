"use client"

import createGlobe, { type COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 2.1, // Longitude rotation to center on Indonesia
  theta: 0.4, // Increased vertical rotation to move Indonesia higher up
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [0 / 255, 71 / 255, 171 / 255], // Moskal blue color
  glowColor: [0.8, 0.9, 1],
  markers: [
    // Major Indonesian cities - larger markers
    { location: [-6.2088, 106.8456], size: 0.12 }, // Jakarta (capital)
    { location: [-7.2575, 112.7521], size: 0.08 }, // Surabaya
    { location: [3.5952, 98.6722], size: 0.07 }, // Medan
    { location: [-5.1477, 119.4327], size: 0.06 }, // Makassar
    { location: [-6.9175, 107.6191], size: 0.06 }, // Bandung
    { location: [-8.65, 115.2167], size: 0.06 }, // Denpasar, Bali

    // Provincial capitals and major cities
    { location: [0.5333, 101.45], size: 0.05 }, // Pekanbaru, Riau
    { location: [-0.9492, 100.3543], size: 0.05 }, // Padang, West Sumatra
    { location: [1.4518, 124.8455], size: 0.05 }, // Manado, North Sulawesi
    { location: [-7.7956, 110.3695], size: 0.05 }, // Yogyakarta
    { location: [-6.9147, 109.0921], size: 0.04 }, // Purwokerto, Central Java
    { location: [-7.0051, 110.4381], size: 0.04 }, // Semarang, Central Java
    { location: [-8.5833, 116.1167], size: 0.04 }, // Mataram, Lombok
    { location: [-3.3194, 114.5906], size: 0.04 }, // Banjarmasin, South Kalimantan
    { location: [0.0333, 109.3333], size: 0.04 }, // Pontianak, West Kalimantan
    { location: [1.6953, 101.4428], size: 0.04 }, // Batam, Riau Islands
    { location: [-2.5489, 118.0149], size: 0.04 }, // Palu, Central Sulawesi
    { location: [-5.4472, 105.2667], size: 0.04 }, // Bandar Lampung, Lampung
    { location: [5.5483, 95.3238], size: 0.04 }, // Banda Aceh, Aceh
    { location: [2.7297, 98.6958], size: 0.04 }, // Binjai, North Sumatra

    // Additional cities and regions
    { location: [-1.2379, 116.8529], size: 0.03 }, // Samarinda, East Kalimantan
    { location: [3.7436, 98.6753], size: 0.03 }, // Tebing Tinggi, North Sumatra
    { location: [-6.1745, 106.8227], size: 0.03 }, // Tangerang, Banten
    { location: [-6.3667, 106.8333], size: 0.03 }, // Depok, West Java
    { location: [-6.2297, 106.9756], size: 0.03 }, // Bekasi, West Java
    { location: [-6.595, 106.7969], size: 0.03 }, // Bogor, West Java
    { location: [-6.8915, 107.6107], size: 0.03 }, // Cimahi, West Java
    { location: [-7.3297, 108.2167], size: 0.03 }, // Tasikmalaya, West Java
    { location: [-6.7014, 108.5581], size: 0.03 }, // Cirebon, West Java
    { location: [-7.5619, 110.8316], size: 0.03 }, // Surakarta (Solo), Central Java
    { location: [-6.9667, 110.4167], size: 0.03 }, // Salatiga, Central Java
    { location: [-8.1689, 113.7006], size: 0.03 }, // Malang, East Java
    { location: [-7.9797, 112.6304], size: 0.03 }, // Kediri, East Java
    { location: [-7.6298, 111.5239], size: 0.03 }, // Madiun, East Java
    { location: [-8.2181, 114.3678], size: 0.03 }, // Banyuwangi, East Java
    { location: [-8.1132, 111.9088], size: 0.03 }, // Blitar, East Java
    { location: [-9.0648, 124.8745], size: 0.03 }, // Kupang, East Nusa Tenggara
    { location: [-8.65, 115.2167], size: 0.03 }, // Ubud, Bali
    { location: [-8.3405, 115.092], size: 0.03 }, // Singaraja, Bali
    { location: [-2.9761, 104.7754], size: 0.03 }, // Palembang, South Sumatra
    { location: [-1.6101, 103.6131], size: 0.03 }, // Jambi, Jambi
    { location: [0.9167, 104.45], size: 0.03 }, // Tanjung Pinang, Riau Islands
    { location: [-3.8, 102.2667], size: 0.03 }, // Bengkulu, Bengkulu
    { location: [-0.8917, 131.2583], size: 0.03 }, // Sorong, West Papua
    { location: [-2.5333, 140.7167], size: 0.03 }, // Jayapura, Papua
    { location: [-3.6954, 128.1814], size: 0.03 }, // Ambon, Maluku
    { location: [0.7893, 127.3914], size: 0.03 }, // Ternate, North Maluku
    { location: [-4.0333, 122.5167], size: 0.03 }, // Kendari, Southeast Sulawesi
    { location: [-1.43, 120.9567], size: 0.03 }, // Poso, Central Sulawesi
    { location: [-0.8917, 119.8708], size: 0.03 }, // Palu, Central Sulawesi
    { location: [1.4748, 125.1839], size: 0.03 }, // Gorontalo, Gorontalo
    { location: [-5.139, 119.4221], size: 0.03 }, // Makassar region
    { location: [-4.5585, 119.6208], size: 0.03 }, // Parepare, South Sulawesi
    { location: [-2.1186, 120.1836], size: 0.03 }, // Mamuju, West Sulawesi
  ],
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  let phi = 0
  let width = 0
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phi += 0.005
      state.phi = phi + r
      state.width = width * 2
      state.height = width * 2
    },
    [r],
  )

  const onResize = () => {
    if (canvasRef.current) {
      width = canvasRef.current.offsetWidth
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: width * 2,
      height: width * 2,
      onRender,
    })

    setTimeout(() => (canvasRef.current!.style.opacity = "1"))
    return () => globe.destroy()
  }, [])

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas
        className={cn("size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]")}
        ref={canvasRef}
        onPointerDown={(e) => updatePointerInteraction(e.clientX - pointerInteractionMovement.current)}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) => e.touches[0] && updateMovement(e.touches[0].clientX)}
      />
    </div>
  )
}
