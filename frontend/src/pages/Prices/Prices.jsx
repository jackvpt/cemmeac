import "./Prices.scss"
import Navbar from "../../components/Navbar/Navbar"
import { prices } from "../../data/prices"

const Prices = () => {
  return (
    <section className="container__pages prices">
      <Navbar />
      <div className="prices__body">
        <h1>Tarifs</h1>
        <div className="prices__table">
          {prices.map((category) => {
            const { name, price, description } = category
            const duration = category.duration
              ? `(durée: ${category.duration} min)`
              : ""
            return (
              <div className="price__card" key={name}>
                <div className="price__header">
                  <h2 className="price__name">{`${name} ${duration}`}</h2>
                  {price && (
                    <div className="price__price">{category.price} €</div>
                  )}
                </div>
                <div className="price__description">{description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Prices
