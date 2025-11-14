import "./OpeningHours.scss"
import Navbar from "../../components/Navbar/Navbar"

const OpeningHours = () => {
  return (
    <section className="container__pages openinghours">
      <Navbar />
      <div className="openinghours__body">
        <h1>Horaires d'ouverture</h1>
      </div>
    </section>
  )
}

export default OpeningHours
