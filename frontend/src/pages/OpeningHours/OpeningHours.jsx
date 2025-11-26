import "./OpeningHours.scss"
import Header from "../../components/Header/Header"

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
      </div>
    </section>
  )
}

export default OpeningHours
