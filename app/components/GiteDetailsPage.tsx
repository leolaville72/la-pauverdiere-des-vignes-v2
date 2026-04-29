"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import GalleryModal from "@/app/components/GalleryModal";
import type { Equipement, GallerySection, GiteCard, Prestation } from "@/app/data/gites";

type GiteDetailsPageProps = {
  gite: GiteCard;
  gallery: GallerySection[];
  prestations: Prestation[];
  equipements: Equipement[];
};

export default function GiteDetailsPage({ gite, gallery, prestations, equipements }: GiteDetailsPageProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [equipementsOpen, setEquipementsOpen] = useState(false);

  const previewImages = useMemo(() => {
    const galleryImages = gallery.flatMap((section) => section.images);
    const images = [gite.image, ...galleryImages.filter((image) => image !== gite.image)];
    return images.slice(0, 3);
  }, [gallery, gite.image]);

  return (
    <main className="page-hebergement" style={{marginBottom: "50px"}}>
      <div className="hebergement-hero-background"></div>

      <section className="hebergement-hero">
        <div className="hebergement-hero-inner">
          <div className="hebergement-breadcrumb">
            <Link className="breadcrumb-link" href="/">
              Accueil
            </Link>
            <span className="breadcrumb-separator"></span>
            <span className="breadcrumb-current">{gite.title}</span>
          </div>

          <div className="hebergement-title-row">
            <h1>{gite.title}</h1>
            <div>{gite.capacity}</div>
          </div>

          <div className="hebergement-photos">
            <button
              className="hebergement-photo hebergement-photo--large"
              type="button"
              aria-label="Ouvrir la galerie photo"
              onClick={() => setGalleryOpen(true)}
              style={{ backgroundImage: `url('${previewImages[0] ?? gite.image}')` }}
            ><span className="classic-button button-voir-photos mobile">Voir toutes les photos</span></button>

            <div className="hebergement-photo-group desktop-mobile">
              <button
                className="hebergement-photo hebergement-photo--small"
                type="button"
                aria-label="Ouvrir la galerie photo"
                onClick={() => setGalleryOpen(true)}
                style={{ backgroundImage: `url('${previewImages[1] ?? gite.image}')` }}
              ></button>
              <button
                className="hebergement-photo hebergement-photo--small hebergement-photo--cta"
                type="button"
                aria-label="Voir toutes les photos"
                onClick={() => setGalleryOpen(true)}
                style={{ backgroundImage: `url('${previewImages[2] ?? gite.image}')` }}
              >
                <span className="classic-button button-voir-photos">Voir toutes les photos</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="hebergement-details">
        <div>
          <div className="hebergement-content">
            <div className="hebergement-entete flex-row gap-10">
              <div
                className="hebergement-rating flex-column align-center fit-content"
                aria-label="Note 4,8 sur 5 basee sur 46 avis"
              >
                <span className="hebergement-rating__value">4,8 / 5</span>
                <span className="hebergement-rating__stars" aria-hidden="true" style={{ ["--rating-fill" as string]: "96%" }}>
                  <span className="hebergement-rating__stars-base">★★★★★</span>
                  <span className="hebergement-rating__stars-fill">★★★★★</span>
                </span>
                <span className="hebergement-rating__count">46 avis</span>
              </div>
              <div>
                <h2>{gite.introTitle}</h2>
                <p>{gite.introText}</p>
              </div>
            </div>

            <div className="hebergement-prestations-wrapper flex-column gap-20">
              <div className="hebergement-prestations">
                {prestations.map((prestation) => (
                  <article className="hebergement-prestation" key={prestation.title}>
                    <div className="hebergement-prestation__header">
                      <img
                        className="hebergement-prestation__icon"
                        src={prestation.icon}
                        alt={prestation.title}
                        loading="lazy"
                      />
                      <h3 className="hebergement-prestation__title">{prestation.title}</h3>
                    </div>
                    <ul className="hebergement-prestation__list">
                      {prestation.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <button
                className="classic-button button-blanc hebergement-equipements-button"
                type="button"
                aria-controls="hebergement-equipements-modal"
                aria-expanded={equipementsOpen}
                onClick={() => setEquipementsOpen(true)}
              >
                Voir tous les equipements
              </button>
            </div>
          <div className="hebergement-a-savoir">
            <div className="hebergement-a-savoir__title">À savoir</div>
            <div className="hebergement-a-savoir-items flex-row">
              <div className="hebergement-a-savoir-item">
                <div className="hebergement-a-savoir-item__title">Arrivée et départ</div>
                <ul className="hebergement-a-savoir-item__description">
                  <li>Parking disponible</li>
                  <li>Arrivée à partir de 16h, départ avant 11h</li>
                  <li>Arrivée autonome avec boîte à clés</li>
                </ul>
              </div>
              <div className="hebergement-a-savoir-item">
                <div className="hebergement-a-savoir-item__title">Politique d'annulation</div>
                <ul className="hebergement-a-savoir-item__description">
                  <li>Annulation gratuite jusqu'à 30 jours avant l'arrivée et partielle 7 jours avant le séjour</li>
                </ul>
                <Link className="hebergement-a-savoir-item__link" href="/">Consulter les conditions d'annulation</Link>
              </div>
              <div className="hebergement-a-savoir-item">
                <div className="hebergement-a-savoir-item__title">Règlement intérieur</div>
                <ul className="hebergement-a-savoir-item__description">
                  <li>Non fumeur, animaux non admis.</li>
                </ul>
                <Link className="hebergement-a-savoir-item__link" href="/">Consulter les règles de séjour</Link>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div>
          <div style={{ position: "sticky", top: 20 }} className="hebergement-booking-box desktop">
            <div>réservation</div>
          </div>
        </div>
      </section>

      <GalleryModal
        open={galleryOpen}
        title={gite.title}
        sections={gallery}
        onClose={() => setGalleryOpen(false)}
      />

      <div
        className={`hebergement-equipements-modal${equipementsOpen ? " is-open" : ""}`}
        id="hebergement-equipements-modal"
        aria-hidden={!equipementsOpen}
      >
        <div className="hebergement-equipements-modal__backdrop" onClick={() => setEquipementsOpen(false)}></div>
        <div className="hebergement-equipements-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="hebergement-equipements-title">
          <button
            className="gallery-modal__close"
            type="button"
            aria-label="Fermer la fenetre des equipements"
            onClick={() => setEquipementsOpen(false)}
          >
            &times;
          </button>

          <div className="hebergement-equipements-modal__content">
            <div className="gallery-modal__header">
              <p className="gallery-modal__eyebrow">Tous les equipements</p>
              <h2 className="hebergement-equipements-modal__title" id="hebergement-equipements-title">
                Les equipements du gite
              </h2>
            </div>

            <div className="hebergement-equipements-list">
              {equipements.map((equipement) => (
                <article className="hebergement-equipement-item" key={equipement.title}>
                  <h3 className="hebergement-prestation__title">{equipement.title}</h3>
                  <ul className="hebergement-equipement-item__list">
                    {equipement.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
