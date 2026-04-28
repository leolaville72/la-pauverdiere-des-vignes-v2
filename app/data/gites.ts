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
  introTitle: string;
  introText: string;
  gallery: GallerySection[];
  prestations: Prestation[];
  equipements: Equipement[];
};

export type GallerySection = {
  title: string;
  images: string[];
};

export type Prestation = {
  icon: string;
  title: string;
  items: string[];
};

export type Equipement = {
  title: string;
  items: string[];
};

export const gites: GiteCard[] = [
  {
    slug: "la-loge",
    title: "La Loge",
    capacity: "4 / 6 personnes",
    image: "/assets/gite-loge.avif",
    recap: [
      { icon: "/assets/gite/lit-double.png", label: "2 Chambres" },
      { icon: "/assets/gite/douche.png", label: "Salle d'eau" },
      { icon: "/assets/gite/jardin.png", label: "Jardin 6000m²" },
      { icon: "/assets/gite/boule-de-billard.webp", label: "Salle d'activités'" },
      { icon: "/assets/gite/chef.png", label: "Cuisine équipée" },
      { icon: "/assets/gite/sofa.webp", label: "Canapé Convertible" },
    ],
    bookingUrl: "",
    introTitle: "La Loge, gîte de charme à la campagne",
    introText: "A 5 mn de La Flèche et 10 mn de son zoo, le gîte La Loge, à proximité du gîte Le Cépage mais sans vis à vis, vous offre tous les atouts pour se reposer. Dans un écrin de verdure de 6000m2 cette longère, meublé de tourisme classé 4 étoiles de 80m2.",
    gallery: [
      {
        title: "Salon",
        images: [
          "/assets/gite-loge.avif",
          "/assets/gite-ensemble.avif",
          "/assets/gite-cepage.avif"
        ]
      },
      {
        title: "Chambre 1",
        images: [
          "/assets/la-fleche-1.jpg",
          "/assets/zoo-la-fleche.jpg",
          "/assets/abbaye-solesmes.webp"
        ]
      }
    ],
    prestations: [
      {
        icon: "/assets/gite/sofa.webp",
        title: "Salon",
        items: [
          "Canapé convertible",
          "Télévision",
          "Wi-Fi"
        ]
      },
      {
        icon: "/assets/gite/chef.png",
        title: "Cuisine",
        items: [
          "Plaque de cuisson",
          "Four",
          "Vaisselle"
        ]
      },
            {
        icon: "/assets/gite/douche.png",
        title: "Salle d'eau",
        items: [
          "Douche",
          "Double vasque"
        ]
      },
            {
        icon: "/assets/gite/lit-double.png",
        title: "Chambre 1",
        items: [
          "Lit double 160x200",
        ]
      },
            {
        icon: "/assets/gite/lit-simple.png",
        title: "Chambre 2",
        items: [
          "2 Lits simples",
        ]
      },
            {
        icon: "/assets/gite/jardin.png",
        title: "Jardin",
        items: [
          "Jardin partagé de 6000m²",
          "Jeux pour enfants",
          "Tente Berbères 70m²"
        ]
      },
            {
        icon: "/assets/gite/boule-de-billard.webp",
        title: "Salle d'activités",
        items: [
          "Billard",
          "Flèchettes",
          "Salon"
        ]
      }
    ],
    equipements: [
      {
        title: "Cuisine",
        items: [
          "Plaque de cuisson",
          "Four",
          "Refrigerateur",
          "Cafetiere",
          "Vaisselle complete"
        ]
      },
      {
        title: "Confort",
        items: [
          "Linge de lit",
          "Serviettes",
          "Chauffage",
          "Salle d'eau moderne",
          "Espace salon"
        ]
      },
      {
        title: "Exterieur",
        items: [
          "Terrasse",
          "Mobilier de jardin",
          "Stationnement prive a proximite immediate"
        ]
      }
    ]
  },
  {
    slug: "le-cepage",
    title: "Le Cepage",
    capacity: "9 personnes",
    image: "/assets/gite-cepage.avif",
    recap: [
      { icon: "/assets/palmier-1.svg", label: "Vue campagne" },
      { icon: "/assets/cocktail.svg", label: "Cuisine equipee" },
      { icon: "/assets/Phone.svg", label: "Stationnement" }
    ],
    bookingUrl: "https://app.lodgify.com",
    introTitle: "Un cocon chaleureux au calme",
    introText: "Le Cepage est ideal pour profiter d'un sejour ressourcant a la campagne, tout en restant proche de La Fleche et de ses activites.",
    gallery: [
      {
        title: "Exterieur",
        images: [
          "/assets/gite-cepage.avif",
          "/assets/gite-ensemble.avif",
          "/assets/gite-loge.avif"
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
    ],
    prestations: [
      {
        icon: "/assets/palmier-1.svg",
        title: "Calme",
        items: [
          "Jardin privatif",
          "Terrasse",
          "Vue sur la campagne"
        ]
      },
      {
        icon: "/assets/cocktail.svg",
        title: "Equipements",
        items: [
          "Cuisine entièrement équipée",
          "Espace salon confortable",
          "Linge fourni"
        ]
      },
      {
        icon: "/assets/Phone.svg",
        title: "Localisation",
        items: [
          "A 5 mn de La Flèche",
          "A 10 mn du zoo",
          "Stationnement gratuit"
        ]
      }
    ],
    equipements: [
      {
        title: "Cuisine",
        items: [
          "Plaque de cuisson",
          "Four",
          "Refrigerateur",
          "Cafetiere",
          "Vaisselle complete"
        ]
      },
      {
        title: "Confort",
        items: [
          "Linge de lit",
          "Serviettes",
          "Chauffage",
          "Salle d'eau moderne",
          "Espace salon"
        ]
      },
      {
        title: "Exterieur",
        items: [
          "Terrasse",
          "Mobilier de jardin",
          "Stationnement prive a proximite immediate"
        ]
      }
    ]
  },
  {
    slug: "la-grande-pauverdiere",
    title: "La Grande Pauverdière",
    capacity: "15 personnes",
    image: "/assets/gite-ensemble.avif",
    recap: [
      { icon: "/assets/palmier-1.svg", label: "Grand exterieur" },
      { icon: "/assets/cocktail.svg", label: "Repas de groupe" },
      { icon: "/assets/Phone.svg", label: "Ideal famille" }
    ],
    bookingUrl: "https://app.lodgify.com",
    introTitle: "Le format ideal pour vos groupes",
    introText: "La Grande Pauverdière permet de reunir familles et amis dans un cadre convivial, proche de la nature et des points d'interet de la region.",
    gallery: [
      {
        title: "Exterieur",
        images: [
          "/assets/gite-ensemble.avif",
          "/assets/gite-loge.avif",
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
    ],
    prestations: [
      {
        icon: "/assets/palmier-1.svg",
        title: "Grandes capacites",
        items: [
          "Jusqu'à 15 personnes",
          "Grand espace extérieur",
          "Salle commune"
        ]
      },
      {
        icon: "/assets/cocktail.svg",
        title: "Convivialite",
        items: [
          "Billard",
          "Baby-foot",
          "Jeu de la grenouille"
        ]
      },
      {
        icon: "/assets/Phone.svg",
        title: "Proximite",
        items: [
          "A 5 mn de La Flèche",
          "A 10 mn du zoo",
          "Châteaux accessibles en 1h"
        ]
      }
    ],
    equipements: [
      {
        title: "Cuisine",
        items: [
          "Plaque de cuisson",
          "Four",
          "Refrigerateur",
          "Cafetiere",
          "Vaisselle complete"
        ]
      },
      {
        title: "Confort",
        items: [
          "Linge de lit",
          "Serviettes",
          "Chauffage",
          "Salle d'eau moderne",
          "Espace salon"
        ]
      },
      {
        title: "Exterieur",
        items: [
          "Terrasse",
          "Mobilier de jardin",
          "Stationnement prive a proximite immediate"
        ]
      }
    ]
  }
];
