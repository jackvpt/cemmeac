import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "./Carousel.scss"

import { Box } from "@mui/material"

const slides = [
  {
    image: "/images/carousel/carousel_logos.webp",
    size: "contain",
  },
  {
    image: "/images/carousel/carousel_entrance.webp",
    size: "cover",
  },
  {
    image: "/images/carousel/carousel_wing_1.webp",
    size: "cover",
  },

  {
    image: "/images/carousel/carousel_welcome.webp",
    size: "cover",
  },
  {
    image: "/images/carousel/carousel_waitingroom.webp",
    size: "cover",
  },
  {
    image: "/images/carousel/carousel_wing_2.webp",
    size: "cover",
  },
  {
    image: "/images/carousel/carousel_biometry_1.webp",
    size: "cover",
  },
  {
    image: "/images/carousel/carousel_biometry_2.webp",
    size: "cover",
  },
  {
    image: "/images/carousel/carousel_sunset.webp",
    size: "cover",
  },
]

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: { xs: 280, md: 420 },
                backgroundImage: `url(${slide.image})`,
                backgroundSize: slide.size,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            ></Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
export default Carousel
