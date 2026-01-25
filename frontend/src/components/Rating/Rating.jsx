// CSS
import "./Rating.scss"

const Rating = ({ value }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= value) {
      stars.push(
        <span key={i} className="star filled">
          ★
        </span>,
      )
    } else {
      stars.push(
        <span key={i} className="star">
          ☆
        </span>,
      )
    }
  }
  return <div className="rating">{stars}</div>
}

export default Rating
