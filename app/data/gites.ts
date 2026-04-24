export type RecapItem = {
  icon: string;
  label: string;
};

export type GiteCard = {
  slug: string;
  title: string;
  capacity: string;
  image: string;
  recap: RecapItem[];
  bookingUrl: string;
};

export type GallerySection = {
  title: string;
  images: string[];
};

export type Prestation = {
  icon: string;
  title: string;
  text: string;
};

export type Equipement = {
  title: string;
  text: string;
};

export const gites: GiteCard[] = [
  {
    slug: "la-loge",
    title: "La Loge",
    capacity: "4 / 6 personnes",
    image: "/assets/gite-loge.avif",
    recap: [
      { icon: "/assets/palmier-1.svg", label: "Jardin privatif" },
      { icon: "/assets/cocktail.svg", label: "Terrasse" },
      { icon: "/assets/Phone.svg", label: "Wi-Fi" }
    ],
    bookingUrl: "https://app.lodgify.com"
  },
  {
    slug: "le-cepage",
    title: "Le Cepage",
    capacity: "2 / 4 personnes",
    image: "/assets/gite-cepage.avif",
    recap: [
      { icon: "/assets/palmier-1.svg", label: "Vue campagne" },
      { icon: "/assets/cocktail.svg", label: "Cuisine equipee" },
      { icon: "/assets/Phone.svg", label: "Stationnement" }
    ],
    bookingUrl: "https://app.lodgify.com"
  },
  {
    slug: "l-ensemble",
    title: "L'Ensemble",
    capacity: "8 / 10 personnes",
    image: "/assets/gite-ensemble.avif",
    recap: [
      { icon: "/assets/palmier-1.svg", label: "Grand exterieur" },
      { icon: "/assets/cocktail.svg", label: "Repas de groupe" },
      { icon: "/assets/Phone.svg", label: "Ideal famille" }
    ],
    bookingUrl: "https://app.lodgify.com"
  }
];

export const hebergementGallery: GallerySection[] = [
  {
    title: "Exterieur",
    images: [
      "/assets/gite-loge.avif",
      "/assets/gite-ensemble.avif",
      "/assets/gite-cepage.avif"
    ]
  },
  {
    title: "A proximite",
    images: [
      "/assets/la-fleche-1.jpg",
      "/assets/zoo-la-fleche.jpg",
      "/assets/abbaye-solesmes.webp"
    ]
  }
];

export const hebergementPrestations: Prestation[] = [
  {
    icon: "/assets/palmier-1.svg",
    title: "Nature et calme",
    text: "Un cadre verdoyant de 6000 m2 pour un sejour reposant a la campagne."
  },
  {
    icon: "/assets/cocktail.svg",
    title: "Confort",
    text: "Un gite de charme avec une piece de vie conviviale et des espaces bien equipes."
  },
  {
    icon: "/assets/Phone.svg",
    title: "Proximite",
    text: "A 5 minutes de La Fleche et 10 minutes du zoo, ideal pour les sorties en famille."
  }
];

export const hebergementEquipements: Equipement[] = [
  {
    title: "Cuisine",
    text: "Plaque de cuisson, four, refrigerateur, cafetiere et vaisselle complete."
  },
  {
    title: "Confort",
    text: "Linge de lit, serviettes, chauffage, salle d'eau moderne et espace salon."
  },
  {
    title: "Exterieur",
    text: "Terrasse, mobilier de jardin et stationnement prive a proximite immediate."
  }
];
