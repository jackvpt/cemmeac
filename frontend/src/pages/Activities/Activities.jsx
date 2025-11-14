import Navbar from "../../components/Navbar/Navbar"
import "./Activities.scss"

const Activities = () => {
  return (
    <section className="container__activities">
      <Navbar />
      <div className="logo_round">
        <img src="/images/logo_round.png" alt="logo" />
      </div>
      <div className="activities__body">
        <h1>Activités</h1>
      </div>
    </section>
  )
}

export default Activities
