import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"

import { Box } from "@mui/material"

const slides = [
  {
    image: "/images/carousel/carousel_1.webp",
  },
  {
    image: "/images/carousel/carousel_2.webp",
  },
  {
    image: "/images/carousel/carousel_3.webp",
  },
  {
    image: "/images/carousel/carousel_4.webp",
  },
  {
    image: "/images/carousel/carousel_5.webp",
  },
  {
    image: "/images/carousel/carousel_6.webp",
  },
]

const Carousel = () => {
  return (
    <div className="carousel">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                height: { xs: 220, md: 340 },
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                //   position:"absolute",
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
