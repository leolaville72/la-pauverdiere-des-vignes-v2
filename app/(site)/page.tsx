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
                À 5 minutes de la Flèche au coeur de la campagne Sarthoise, notre gîte situé à Villaine-sous-Malicorne vous accueille dans un cadre paisible et chaleureux, idéal pour se ressourcer en famille ou entre amis. Profitez d’un environnement calme, propice à la détente, tout en restant proche des richesses de la région.
              </p>
              <p>
                Nous proposons deux hébergements confortables : un premier gîte pouvant accueillir de 4 à 6 personnes, et un second gîte d’une capacité de 9 personnes. Pour vos événements ou séjours en groupe, il est également possible de louer l’ensemble, offrant ainsi un espace convivial et adapté à tous.
              </p>
              <p>
                Les deux gîtes partagent une agréable salle de jeux, pensée pour petits et grands. Vous y trouverez un billard, un baby-foot ainsi qu’un jeu de la grenouille, parfaits pour des moments de détente et de convivialité après vos journées de découverte.
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
              <Link href="/la-loge">
                <img src="/assets/gite-loge.avif" alt="Gite La Loge" />
              </Link>
            </article>

            <article className="gite-card gite-card--center">
              <div className="flex-row gap-10 sb">
                <h3>L&apos;ensemble</h3>
                <div className="gite-card-capacity">15 personnes</div>
              </div>
              <Link href="/l-ensemble">
                <img src="/assets/gite-ensemble.avif" alt="Gite L'ensemble" />
              </Link>
            </article>

            <article className="gite-card">
              <div className="flex-row gap-10 sb">
                <h3>Le Cepage</h3>
                <div className="gite-card-capacity">9 personnes</div>
              </div>
              <Link href="/le-cepage">
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
                Idéalement situé, notre gîte bénéficie d’un emplacement privilégié à proximité de La Flèche, une ville dynamique réputée pour son célèbre zoo et ses nombreuses activités pour toute la famille. Vous pourrez facilement profiter des commerces, restaurants et animations locales.
              </p>
              <p>
                La région offre également un riche patrimoine à découvrir, avec plusieurs châteaux accessibles en moins d’une heure. Entre visites culturelles, balades dans des villages de caractère et découverte de l’histoire locale, les amateurs de tourisme seront comblés.
              </p>
              <p>
                Enfin, les amoureux de nature apprécieront les paysages typiques de la Sarthe, entre rivières, forêts et chemins de randonnée. Que ce soit à pied, à vélo ou simplement pour se détendre, les environs invitent à la découverte et à l’évasion.
              </p>
              <Link href="/les-gites" className="classic-button button--secondary">
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
