// CSS
import "./Testimonials.scss"

import TestimonialCard from "../../components/TestimonialCard/TestimonialCard"
import { testimonials } from "../../data/testimonials"

const Testimonials = () => {
  return (
    <section className="container__pages testimonials">
      <img
        className="img__logo"
        src="/images/sticker_rounded.webp"
        alt="CEMMEA Logo"
      />
      <div className="testimonials__body">
        <h1>AVIS</h1>
        {testimonials.map((testimonial, index) => {
          return <TestimonialCard key={index} testimonial={testimonial} />
        })}
      </div>
    </section>
  )
}

export default Testimonials
