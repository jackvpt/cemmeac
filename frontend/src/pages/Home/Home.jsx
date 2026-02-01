// CSS
import Slide from "@mui/material/Slide"
import SlideIn from "../../components/SlideIn/SlideIn"
import "./Home.scss"

export default function Home() {
  return (
    <section className="container__pages home">
      <img
        className="img__logo"
        src="/images/sticker_rounded.webp"
        alt="CEMMEA Logo"
      />
      <div className="home__body">
        <h1>BIENVENUE</h1>
        
        <SlideIn direction="left">
          <div className="home__body-image-content image-below">
            <img
              className="home__body-image"
              src="/images/insign_crew.webp"
              width={160}
              alt="Insigne Personnel Navigant"
              loading="lazy"
            />
            <p className="home__body-content">
              Après 25 années d’exercice opérationnel en tant que médecin du
              personnel navigant au sein de l’Aéronautique navale, le Docteur
              Laurent Lely met aujourd’hui son expertise au service de ses
              patients civils.
            </p>
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <p className="home__body-content">
            Tout au long de sa carrière militaire, il a exercé au plus près des
            contraintes opérationnelles de l’aéronautique, assurant le suivi
            médical de personnels engagés dans des missions à fort niveau de
            responsabilité, exigeant une rigueur médicale absolue.
          </p>
        </SlideIn>

        <SlideIn direction="left">
          <div className="home__body-image-content">
            <p className="home__body-content">
              Praticien certifié en médecine aéronautique, le Docteur Lely est
              également diplômé du <i>Naval Aerospace Medical Institute</i> de
              Pensacola (Floride), référence internationale en médecine
              aéronautique et spatiale, comprenant une formation d’élève pilote
              sur <i>T-34 Mentor</i> et <i>Jet Ranger</i>. Il est aussi breveté
              navigateur aérien au sein de l’Aéronautique navale.
            </p>
            <img
              className="home__body-image"
              src="/images/insign_pensacola.webp"
              width={160}
              alt="Insigne Pensacola"
              loading="lazy"
            />
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <p className="home__body-content">
            Avec plus de 1 500 heures de vol réalisées sur la quasi-totalité des
            aéronefs militaires français, il possède une connaissance
            approfondie des exigences physiologiques, psychologiques et
            opérationnelles liées au vol, ainsi qu’à la gestion du stress et de
            la performance en environnement contraint.
          </p>
        </SlideIn>

        <SlideIn direction="left">
          <div className="home__body-image-content">
            <img
              className="home__body-image"
              src="/images/caducee.webp"
              width={160}
              alt="Caducée"
              loading="lazy"
            />
            <p className="home__body-content">
              Au cours de ses quinze dernières années dans l’institution
              militaire, il a été membre titulaire de la Commission Médicale de
              l’Aéronautique de Défense, participant activement à l’évaluation
              médicale et à l’étude de dérogations au profit du personnel
              aéronautique militaire.
            </p>
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <p className="home__body-content">
            Aujourd’hui, le Docteur Laurent Lely exerce en cabinet médical avec
            la même rigueur, la même exigence et la même passion, en proposant à
            ses patients une prise en charge personnalisée, fondée sur l’écoute,
            la confiance et la qualité des soins.
          </p>
        </SlideIn>

        <div className="home__body-portrait">
          <img
            src="/images/hoistingaction.webp"
            width={160}
            alt="Portrait du Docteur Laurent Lely en treuillage"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
