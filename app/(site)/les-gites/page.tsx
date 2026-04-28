import Link from "next/link";
import { gites } from "@/app/data/gites";

export default function LesGitesPage() {
  return (
    <main className="page-les-gites">
      <section className="les-gites-hero">
        <div className="les-gites-hero__inner">
          <h1>Nos hebergements</h1>
          <p>Retrouvez nos gites et choisissez celui qui correspond le mieux a votre sejour.</p>
        </div>
      </section>

      <section className="les-gites-list">
        <div className="les-gites-list__inner">
          {gites.map((gite) => (
            <article className="gite-card-horizontal" key={gite.slug}>
              <Link className="gite-card-horizontal__image-link" href={`/${gite.slug}`} aria-label={`Voir le detail de ${gite.title}`}>
                <img src={gite.image} alt={gite.title} loading="lazy" />
              </Link>

              <div className="gite-card-horizontal__content">
                <div className="gite-card-horizontal__header">
                  <h2>
                    <Link href={`/${gite.slug}`}>{gite.title}</Link>
                  </h2>
                  <span className="gite-card-horizontal__capacity">{gite.capacity}</span>
                </div>

                <div className="gite-card-recapitulatif">
                  {gite.recap.map((recap) => (
                    <div className="gite-card-recapitulatif__item" key={`${gite.slug}-${recap.label}`}>
                      <img
                        className="gite-card-recapitulatif__icon"
                        src={recap.icon}
                        alt=""
                        loading="lazy"
                        aria-hidden="true"
                      />
                      <span className="gite-card-recapitulatif__label">{recap.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex-row gap-10">
                  <Link className="classic-button button--secondary" href={`/${gite.slug}`}>
                    Voir l'hebergement
                  </Link>
                  <a className="classic-button header-reserve-button" style={{ border: "2px solid var(--primary-color)" }} href={gite.bookingUrl}>
                    Réserver
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
