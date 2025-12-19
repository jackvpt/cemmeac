import "./OpeningHours.scss"
import Header from "../../components/Header/Header"
import { openingHours } from "../../data/openingHours"

const OpeningHours = () => {
  return (
    <section className="container__pages openinghours">
      <img
        className="img__logo"
        src="/images/sticker_rounded.webp"
        alt="CEMMEA Logo"
      />
      <Header />
      <div className="openinghours__body">
        <h1>Horaires d'ouverture</h1>
        <div className="openinghours__body-paragraph">
        {openingHours.map((openingHour, index) => (
          <div key={index} className="openinghours__body-day">
            <h2 className="dayName">{openingHour.day}:</h2>
            <p>{openingHour.hours}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  )
}

export default OpeningHours
