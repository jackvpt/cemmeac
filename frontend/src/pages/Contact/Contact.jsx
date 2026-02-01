// CSS
import "./Contact.scss"

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
  return (
    <section className="container__pages contact">
      <img
        className="img__logo"
        src="/images/sticker_rounded.webp"
        alt="CEMMEA Logo"
      />
      <div className="contact__body">
        <h1>Contact</h1>
        <div className="contact__body-paragraph">
          <p>
            Cabinet d’Expertise Médicale en Médecine Aéronautique de Cornouaille
          </p>
          <p>1 Venelle du Dourdu</p>
          <p>29300 Quimperlé</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:cabinet@cemmeac.com">
              <span> cabinet@cemmeac.com</span>
            </a>
          </p>

          <p>
            <FontAwesomeIcon icon={faPhone} />
            <span> 02 98 09 07 30 / 06 30 22 72 93</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
