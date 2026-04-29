"use client";

import { useEffect, useMemo, useState } from "react";
import type { GallerySection } from "@/app/data/gites";
import ChevronIcon from "./ChevronIcon";

type GalleryModalProps = {
  open: boolean;
  title: string;
  sections: GallerySection[];
  onClose: () => void;
};

type LightboxItem = {
  src: string;
  alt: string;
};

export default function GalleryModal({ open, title, sections, onClose }: GalleryModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  let runningIndex = 0;

  const lightboxItems = useMemo<LightboxItem[]>(() => {
    return sections.flatMap((section) =>
      section.images.map((image, index) => ({
        src: image,
        alt: `${title} - ${section.title || "Galerie"} - photo ${index + 1}`
      }))
    );
  }, [sections, title]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!open) {
        return;
      }

      if (event.key === "Escape") {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
          return;
        }

        onClose();
      }

      if (lightboxIndex === null) {
        return;
      }

      if (event.key === "ArrowLeft") {
        setLightboxIndex((value) => {
          const current = value ?? 0;
          return current === 0 ? lightboxItems.length - 1 : current - 1;
        });
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex((value) => {
          const current = value ?? 0;
          return current === lightboxItems.length - 1 ? 0 : current + 1;
        });
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightboxIndex, lightboxItems.length, onClose, open]);

  useEffect(() => {
    if (!open) {
      setLightboxIndex(null);
    }
  }, [open]);

  useEffect(() => {
    const root = document.documentElement;

    if (open) {
      root.classList.add("gallery-scroll-lock");
    } else {
      root.classList.remove("gallery-scroll-lock");
    }

    return () => {
      root.classList.remove("gallery-scroll-lock");
    };
  }, [open]);

  return (
    <div className={`gallery-modal${open ? " is-open" : ""}`} aria-hidden={!open}>
      <div className="gallery-modal__dialog" role="dialog" aria-modal="true" aria-label={`Galerie photo ${title}`}>
        <button className="gallery-modal__close" type="button" aria-label="Fermer la galerie" onClick={onClose}>
          &times;
        </button>
        <div className="gallery-modal__header">
          <p className="gallery-modal__eyebrow">Galerie photo</p>
          <h2 className="gallery-modal__title">{title}</h2>
        </div>
        <div className="gallery-modal__sections">
          {sections.map((section) => {
            const imageCount = section.images.length;
            let gridClass = "gallery-modal__section-grid gallery-modal__section-grid--even";

            if (imageCount === 1) {
              gridClass = "gallery-modal__section-grid gallery-modal__section-grid--single";
            } else if (imageCount >= 3 && imageCount % 2 !== 0) {
              gridClass = "gallery-modal__section-grid gallery-modal__section-grid--odd";
            }

            return (
              <section className="gallery-modal__section" key={section.title}>
                <div className="gallery-modal__section-title-wrap">
                  <h3 className="gallery-modal__section-title">{section.title}</h3>
                </div>
                <div className={gridClass}>
                  {section.images.map((image, imageIndex) => {
                    const flatIndex = runningIndex;
                    runningIndex += 1;
                    return (
                      <figure className={`gallery-modal__item${imageIndex === 0 ? " gallery-modal__item--first" : ""}`} key={`${section.title}-${image}`}>
                        <button
                          className="gallery-modal__item-button"
                          type="button"
                          onClick={() => setLightboxIndex(flatIndex)}
                        >
                          <img src={image} alt={`${title} - ${section.title} - photo ${imageIndex + 1}`} />
                        </button>
                      </figure>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <div className={`gallery-lightbox${lightboxIndex !== null ? " is-open" : ""}`} aria-hidden={lightboxIndex === null}>
          <div className="gallery-lightbox__backdrop" onClick={() => setLightboxIndex(null)}></div>
          <div className="gallery-lightbox__dialog" role="dialog" aria-modal="true" aria-label={`Diaporama photo ${title}`}>
            <button
              className="gallery-lightbox__close"
              type="button"
              aria-label="Fermer le diaporama"
              onClick={() => setLightboxIndex(null)}
            >
              &times;
            </button>
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              type="button"
              aria-label="Photo precedente"
              onClick={() =>
                setLightboxIndex((value) => {
                  const current = value ?? 0;
                  return current === 0 ? lightboxItems.length - 1 : current - 1;
                })
              }
            >
              <ChevronIcon direction="left" color="#fff" size={30} />
            </button>
            <figure className="gallery-lightbox__figure">
              {lightboxIndex !== null ? (
                <img
                  className="gallery-lightbox__image"
                  src={lightboxItems[lightboxIndex]?.src}
                  alt={lightboxItems[lightboxIndex]?.alt}
                />
              ) : null}
            </figure>
            <button
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              type="button"
              aria-label="Photo suivante"
              onClick={() =>
                setLightboxIndex((value) => {
                  const current = value ?? 0;
                  return current === lightboxItems.length - 1 ? 0 : current + 1;
                })
              }
            >
              <ChevronIcon direction="right" color="#fff" size={30} />
            </button>
            <div className="gallery-lightbox__counter">
              {lightboxIndex !== null ? `${lightboxIndex + 1} / ${lightboxItems.length}` : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
