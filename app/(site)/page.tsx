import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "3rem 1.5rem", maxWidth: 1100, margin: "0 auto" }}>
      <h1>La Pauverdiere des Vignes</h1>
      <p style={{ marginTop: "1rem", maxWidth: 700 }}>
        Version Next.js du site, avec header/footer migres, page Hebergement avec galerie photo,
        et page Les Gites disponible en page standalone.
      </p>
      <div className="flex-row gap-10" style={{ marginTop: "1.5rem", width: "fit-content" }}>
        <Link className="classic-button header-reserve-button" href="/hebergement">
          Voir l'hebergement
        </Link>
        <Link className="classic-button button--secondary" href="/les-gites">
          Voir les gites
        </Link>
      </div>
    </main>
  );
}
