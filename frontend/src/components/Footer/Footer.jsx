// CSS
import "./Footer.scss"

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
  return (
    <footer>
      &copy; 2026 CEMMEAC - Tous droits réservés
      <a href="mailto:cabinet@cemmeac.com">
        <FontAwesomeIcon className="mailIcon" icon={faEnvelope} />
      </a>
    </footer>
  )
}

export default Footer
