import { notFound } from "next/navigation";
import GiteDetailsPage from "@/app/components/GiteDetailsPage";
import { gites } from "@/app/data/gites";

type GitePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return gites.map((gite) => ({ slug: gite.slug }));
}

export default async function GitePage({ params }: GitePageProps) {
  const { slug } = await params;
  const gite = gites.find((item) => item.slug === slug);

  if (!gite) {
    notFound();
  }

  return (
    <GiteDetailsPage
      gite={gite}
      gallery={gite.gallery}
      prestations={gite.prestations}
      equipements={gite.equipements}
    />
  );
}
