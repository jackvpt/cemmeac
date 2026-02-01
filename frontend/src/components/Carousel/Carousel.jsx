import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "./Carousel.scss"

import { Box } from "@mui/material"

const slides = [
  {
    alt: "Logos",
    size: "contain",
    sources: {
      480: "/images/carousel/carousel_logos_480.webp",
      768: "/images/carousel/carousel_logos_768.webp",
      1280: "/images/carousel/carousel_logos_1280.webp",
      1920: "/images/carousel/carousel_logos_1920.webp",
    },
  },

  {
    alt: "Entrée du centre",
    size: "cover",
    sources: {
      480: "/images/carousel/carousel_entrance_480.webp",
      768: "/images/carousel/carousel_entrance_768.webp",
      1280: "/images/carousel/carousel_entrance_1280.webp",
      1920: "/images/carousel/carousel_entrance_1920.webp",
    },
  },
  {
    alt: "Avion en vol",
    size: "cover",
    sources: {
      480: "/images/carousel/carousel_wing_1_480.webp",
      768: "/images/carousel/carousel_wing_1_768.webp",
      1280: "/images/carousel/carousel_wing_1_1280.webp",
      1920: "/images/carousel/carousel_wing_1_1920.webp",
    },
  },

  {
    alt: "Accueil",
    size: "cover",
    sources: {
      480: "/images/carousel/carousel_welcome_480.webp",
      768: "/images/carousel/carousel_welcome_768.webp",
      1280: "/images/carousel/carousel_welcome_1280.webp",
      1920: "/images/carousel/carousel_welcome_1920.webp",
    },
  },
  {
    alt: "Salle d'attente",
    size: "cover",
    sources: {
      480: "/images/carousel/carousel_waitingroom_480.webp",
      768: "/images/carousel/carousel_waitingroom_768.webp",
      1280: "/images/carousel/carousel_waitingroom_1280.webp",
      1920: "/images/carousel/carousel_waitingroom_1920.webp",
    },
  },
  {
    alt: "Avion en vol",
    size: "cover",
    sources: {
      480: "/images/carousel/carousel_wing_2_480.webp",
      768: "/images/carousel/carousel_wing_2_768.webp",
      1280: "/images/carousel/carousel_wing_2_1280.webp",
      1920: "/images/carousel/carousel_wing_2_1920.webp",
    },
  },
  {
    alt: "Salle de consultation",
    size: "cover",
    sources: {
      480: "/images/carousel/carousel_biometry_1_480.webp",
      768: "/images/carousel/carousel_biometry_1_768.webp",
      1280: "/images/carousel/carousel_biometry_1_1280.webp",
      1920: "/images/carousel/carousel_biometry_1_1920.webp",
    },
  },
  {
    alt: "Salle de consultation",
    size: "cover",
    sources: {
      480: "/images/carousel/carousel_biometry_2_480.webp",
      768: "/images/carousel/carousel_biometry_2_768.webp",
      1280: "/images/carousel/carousel_biometry_2_1280.webp",
      1920: "/images/carousel/carousel_biometry_2_1920.webp",
    },
  },
  {
    alt: "Coucher de soleil",
    size: "cover",
    sources: {
      480: "/images/carousel/carousel_sunset_480.webp",
      768: "/images/carousel/carousel_sunset_768.webp",
      1280: "/images/carousel/carousel_sunset_1280.webp",
      1920: "/images/carousel/carousel_sunset_1920.webp",
    },
  },
]

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
      >
        {slides.map((slide, index) => {
          // Fallback : on prend la plus grande dispo si 1920 manquante
          const sortedSizes = Object.keys(slide.sources)
            .map(Number)
            .sort((a, b) => a - b)
          const fallbackSrc =
            slide.sources[1920] ||
            slide.sources[sortedSizes[sortedSizes.length - 1]]

          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  height: { xs: 280, md: 420 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={fallbackSrc}
                  srcSet={Object.entries(slide.sources)
                    .map(([width, src]) => `${src} ${width}w`)
                    .join(", ")}
                  sizes="(max-width: 1920px) 100vw, 1920px"
                  alt={slide.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: slide.size,
                  }}
                />
              </Box>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
export default Carousel
