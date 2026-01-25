// CSS
import { Rating } from "@mui/material"
import "./TestimonialCard.scss"

const TestimonialCard = ({ testimonial }) => {
  const formattedDate = new Date(testimonial.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="testimonial-card">
      <div className="testimonial-card__name">{testimonial.name}</div>
      <div className="testimonial-card__details">
        <div className="testimonial-card__details__rating">
          <Rating value={testimonial.rating} readOnly />
        </div>
        <div className="testimonial-card__details__date">{formattedDate}</div>
      </div>
      <div className="testimonial-card__content">{testimonial.content}</div>
    </div>
  )
}

export default TestimonialCard
