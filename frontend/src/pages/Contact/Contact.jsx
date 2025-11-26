import "./Contact.scss"
import Header from "../../components/Header/Header"

const Contact = () => {
  return (
    <section className="container__pages contact">
        <img
          className="img__logo"
          src="/images/sticker_rounded.webp"
          alt="CEMMEA Logo"
        />
      <Header />
      <div className="contact__body">
        <h1>Contact</h1>
      </div>
    </section>
  )
}

export default Contact
