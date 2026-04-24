import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero-banner page-home">
        <section className="hero-content-wrapper">
          <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/assets/video-home.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <div className="hero-copy">
              <div style={{ padding: 30 }}>
                <div className="h1-subtitle h1-subtitle-animated">Les gites de</div>
                <h1 className="hero-title">La Pauverdiere des Vignes</h1>
              </div>
              <div className="hero-icon-placeholder"></div>
            </div>
          </div>

          <div className="hero-reservation-panel">
            <div
              id="lodgify-search-bar"
              data-website-id="647928"
              data-language-code="fr"
              data-version="stable"
            ></div>
          </div>
        </section>
      </section>

      <main className="page-home">
        <section className="section-1">
          <div className="section-1-grid">
            <div className="section-1-visual">
              <div className="section-1-photo section-1-photo--large">
                <img src="/assets/gite-cepage.avif" alt="Gite La Pauverdiere" />
              </div>
              <div className="section-1-photo section-1-photo--small" style={{ bottom: "0%", right: "-4%", width: "44%" }}>
                <img src="/assets/gite-loge.avif" alt="Terrasse du gite" />
              </div>
            </div>
            <div className="section-1-copy">
              <img className="section-1-icon" src="/assets/palmier-1.svg" alt="Palmier" />
              <h2>Le decor ideal</h2>
              <p>
                A 5 minutes de La Fleche au coeur de la campagne Sarthoise, notre gite situe a
                Villaine-sous-Malicorne vous accueille dans un cadre paisible et chaleureux.
              </p>
              <p>
                Nous proposons deux hebergements confortables : un premier gite de 4 a 6 personnes,
                et un second gite de 9 personnes. Il est aussi possible de louer l&apos;ensemble.
              </p>
              <p>
                Les deux gites partagent une salle de jeux avec billard, baby-foot et jeu de la
                grenouille pour des moments conviviaux.
              </p>
              <Link href="/les-gites" className="classic-button button--secondary">
                Reserver maintenant
              </Link>
            </div>
          </div>
        </section>

        <section className="section-2">
          <div>
            <h2>Les Gites</h2>
          </div>
          <div className="section-2-gite">
            <article className="gite-card">
              <div className="flex-row gap-10 sb">
                <h3>La Loge</h3>
                <div className="gite-card-capacity">4 / 6 personnes</div>
              </div>
              <Link href="/hebergement">
                <img src="/assets/gite-loge.avif" alt="Gite La Loge" />
              </Link>
            </article>

            <article className="gite-card gite-card--center">
              <div className="flex-row gap-10 sb">
                <h3>L&apos;ensemble</h3>
                <div className="gite-card-capacity">15 personnes</div>
              </div>
              <Link href="/hebergement">
                <img src="/assets/gite-ensemble.avif" alt="Gite L'ensemble" />
              </Link>
            </article>

            <article className="gite-card">
              <div className="flex-row gap-10 sb">
                <h3>Le Cepage</h3>
                <div className="gite-card-capacity">9 personnes</div>
              </div>
              <Link href="/hebergement">
                <img src="/assets/gite-cepage.avif" alt="Gite Le Cepage" />
              </Link>
            </article>
          </div>
        </section>

        <section className="section-1">
          <div className="section-1-grid section-1-grid-reverse">
            <div className="section-1-copy">
              <img className="section-1-icon" src="/assets/cocktail.svg" alt="Cocktail" />
              <h2>Les alentours du gite</h2>
              <p>
                Idealement situe, notre gite beneficie d&apos;un emplacement privilegie a proximite de La
                Fleche, de ses activites et de son zoo.
              </p>
              <p>
                La region offre un patrimoine riche a decouvrir, avec plusieurs chateaux accessibles
                en moins d&apos;une heure.
              </p>
              <p>
                Les amoureux de nature apprecieront aussi les paysages de la Sarthe entre rivieres,
                forets et chemins de randonnee.
              </p>
              <Link href="/hebergement" className="classic-button button--secondary">
                En savoir plus
              </Link>
            </div>

            <div id="section-1-visual" className="section-1-visual">
              <div className="section-1-photo section-1-photo--large section-1-photo--large-right">
                <img src="/assets/la-fleche-1.jpg" alt="La Fleche" />
              </div>
              <div className="section-1-photo section-1-photo--small" style={{ bottom: "-20%", right: "28%", width: "44%" }}>
                <img src="/assets/abbaye-solesmes.webp" alt="Abbaye de Solesmes" />
              </div>
              <div className="section-1-photo section-1-photo--small" style={{ top: "40%", left: "-2%", width: "44%" }}>
                <img src="/assets/zoo-la-fleche.jpg" alt="Zoo de La Fleche" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
