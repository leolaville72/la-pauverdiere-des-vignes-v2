"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import GalleryModal from "@/app/components/GalleryModal";
import {
  hebergementEquipements,
  hebergementGallery,
  hebergementPrestations
} from "@/app/data/gites";

export default function HebergementPage() {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [equipementsOpen, setEquipementsOpen] = useState(false);

  const previewImages = useMemo(
    () => hebergementGallery.flatMap((section) => section.images).slice(0, 3),
    []
  );

  return (
    <main className="page-hebergement">
      <div className="hebergement-hero-background"></div>

      <section className="hebergement-hero">
        <div className="hebergement-hero-inner">
          <div className="hebergement-breadcrumb">
            <Link className="breadcrumb-link" href="/">
              Accueil
            </Link>
            <span className="breadcrumb-separator"></span>
            <span className="breadcrumb-current">Hebergement</span>
          </div>

          <div className="hebergement-title-row">
            <h1>La Loge, gite de charme a la campagne</h1>
            <div>4 / 6 personnes</div>
          </div>

          <div className="hebergement-photos">
            <button
              className="hebergement-photo hebergement-photo--large"
              type="button"
              aria-label="Ouvrir la galerie photo"
              onClick={() => setGalleryOpen(true)}
              style={{ backgroundImage: `url('${previewImages[0]}')` }}
            ></button>

            <div className="hebergement-photo-group">
              <button
                className="hebergement-photo hebergement-photo--small"
                type="button"
                aria-label="Ouvrir la galerie photo"
                onClick={() => setGalleryOpen(true)}
                style={{ backgroundImage: `url('${previewImages[1]}')` }}
              ></button>
              <button
                className="hebergement-photo hebergement-photo--small hebergement-photo--cta"
                type="button"
                aria-label="Voir toutes les photos"
                onClick={() => setGalleryOpen(true)}
                style={{ backgroundImage: `url('${previewImages[2]}')` }}
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
                <h2>Un sejour confortable, entre nature et patrimoine</h2>
                <p>
                  A 5 minutes de La Fleche et 10 minutes de son zoo, le gite vous offre tous les atouts
                  pour vous reposer dans un ecrin de verdure.
                </p>
              </div>
            </div>

            <div className="hebergement-prestations-wrapper flex-column gap-20">
              <div className="hebergement-prestations">
                {hebergementPrestations.map((prestation) => (
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
                    <div className="hebergement-prestation__text">{prestation.text}</div>
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
          </div>
        </div>

        <div>
          <div style={{ position: "sticky", top: 20 }} className="hebergement-booking-box">
            <div
              id="lodgify-book-now-box"
              data-rental-id="790386"
              data-website-id="647928"
              data-slug="leo-laville"
              data-language-code="fr"
              data-new-tab="true"
              data-version="stable"
              data-has-guests-breakdown="true"
              data-check-in-label="Arrivee"
              data-check-out-label="Depart"
              data-guests-label="Invites"
              data-guests-singular-label="{{NumberOfGuests}} invite"
              data-guests-plural-label="{{NumberOfGuests}} invites"
              data-book-button-label="Reservez maintenant"
            ></div>
          </div>
        </div>
      </section>

      <GalleryModal
        open={galleryOpen}
        title="La Loge"
        sections={hebergementGallery}
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
              {hebergementEquipements.map((equipement) => (
                <article className="hebergement-equipement-item" key={equipement.title}>
                  <h3 className="hebergement-prestation__title">{equipement.title}</h3>
                  <div className="hebergement-equipement-item__text">{equipement.text}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
