import "./Access.scss"
import Navbar from "../../components/Navbar/Navbar"

const Access = () => {
  return (
    <section className="container__pages access">
      <Navbar />
      <div className="access__body">
        <h1>Accès</h1>
        <p>
          Situé à Quimperlé, à 10 min au Nord de Lorient, le cabinet est
          idéalement implanté pour vous recevoir.
        </p>
        <p>
          A 5 min à pied de la gare de Quimperlé, à 5 min de la voie rapide, un
          grand parking pour votre véhicule, tout est mis en place pour vous
          faciliter votre accueil.
        </p>

        <div className="access__infos">
          <div class="access__infos-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.308960307721!2d-3.5550096232883885!3d47.8723451695885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4810fa70ae423da9%3A0xfdcda9ced8b5393a!2s1%20Ven.%20du%20Dourdu%2C%2029300%20Quimperl%C3%A9!5e0!3m2!1sfr!2sfr!4v1763155363642!5m2!1sfr!2sfr"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="access__infos-picture">
            <img src="/images/photo_cabinet.webp" alt="Photo du cabinet" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Access
