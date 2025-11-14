// CSS
import { Link } from "react-router-dom"
import "./Error.scss"

const Error = () => {
  return (
    <section className="error-page">
      <h1>Oups !</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/" className="error-page__link">
        Retour à l'accueil
      </Link>
    </section>
  )
}
export default Error
