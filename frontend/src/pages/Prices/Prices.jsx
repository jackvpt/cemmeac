import "./Prices.scss"
import { prices } from "../../data/prices"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHourglassEnd } from "@fortawesome/free-solid-svg-icons"
import Header from "../../components/Header/Header"

const Prices = () => {
  return (
    <section className="container__pages prices">
      <Header />
      <div className="prices__body">
        <h1>Tarifs</h1>
        <div className="prices__table">
          {prices.map((category) => {
            const { name, duration, price, description } = category
            const durationText = duration ? `(durée: ${duration} min)` : ""
            return (
              <div className="price__card" key={name}>
                <div className="price__text">
                  <div className="price__header">
                    <h2 className="price__name">{`${name}`}</h2>
                    <div className="price__duration">
                      {durationText && (
                        <FontAwesomeIcon icon={faHourglassEnd} title="Durée" />
                      )}
                      {category.duration ? `${category.duration} min` : ""}
                    </div>
                  </div>
                  {description && (
                    <div className="price__description">{description}</div>
                  )}
                </div>

                <div className="price__price">{price ? `${price} €` : ``}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Prices
