import Header from "../../components/Header/Header"
import "./Activities.scss"

const Activities = () => {
  return (
    <section className="container__pages activities">
      <img
        className="img__logo"
        src="/images/sticker_rounded.webp"
        alt="CEMMEA Logo"
      />
      <Header />
      <div className="activities__body">
        <h1>Activités</h1>
        <div className="activities__body-first-paragraph">
          <img
            className="activities__body-images"
            src="/images/entrance.webp"
            width={320}
          />
          <p>
            Bienvenue au Cabinet d’expertise médicale en médecine aeronautique
            de Cornouaille au profit des PNT (renouvellement aptitude classe
            UNE), PNC (admission et renouvellement) et pilote privé (admission
            et renouvellement aptitude classe DEUX).
          </p>
        </div>
        <p className="activities__body-second-paragraph">
          Vous rêvez d’une carrière professionnelle militaire ou civile et vous
          avez des doutes sur votre aptitude ? Nous vous proposons la
          réalisation d’une visite médicale identique à celle du renouvellement
          d’une aptitude classe UNE avant de vous lancer dans votre projet.
        </p>
        <div className="activities__body-third-paragraph">
          <p>
            Idéalement situé à 10 min en voiture au Nord de Lorient ; à 5 min à
            pied de la gare de Quimperlé, ou à 2 min de la voie express N165, le
            cabinet est facile d’accès et propose un grand parking devant le
            cabinet.
          </p>
          <img
            className="activities__body-images"
            src="/images/waiting_room.webp"
            width={320}
          />
        </div>
        <div className="activities__body-fourth-paragraph">
          <p>
            Nous nous ferons un plaisir de vous recevoir afin de vous proposer
            un service de qualité. Nous réalisons tous les examens nécessaires à
            la réalisation de votre visite d’aptitude, avec un bilan
            ophtalmologique exhaustif réalisé avec du matériel ultraperformant,
            une audiométrie en cabine, un tracé ECG et nous disposons de tout le
            matériel médical nécessaire pour valider votre certificat médical.
          </p>
        </div>
        <div className="activities__body-fifth-paragraph">
          <img
            className="activities__body-images"
            src="/images/room2.webp"
            width={320}
          />
          <p>Au plaisir de vous recevoir</p>
        </div>
      </div>
    </section>
  )
}

export default Activities
