import "./apropos.css";

export default function Apropos() {
  return (
    <>
      {/* SECTION A PROPOS */}
      <section className="apropos-section">
        <h1>À propos d’Amavie Transport & Livraison</h1>

        <p className="intro">
          <strong>Amavie Transport & Livraison</strong> est une filiale du{" "}
          <strong>Groupe Amavie Inc.</strong>, une entreprise québécoise née d’un désir simple :
          <em> servir avec humanité, efficacité et cœur.</em>
        </p>

        <p>
          Spécialisés dans le <strong>transport, la livraison et le déménagement léger</strong>, nous
          offrons des services à la fois proches des gens et adaptés aux besoins modernes. Qu’il
          s’agisse d’un déplacement médical, d’une livraison d’équipements ou d’un soutien
          logistique pour une entreprise, Amavie est là pour vous accompagner, avec sérieux et
          bienveillance.
        </p>

        <h2>Notre mission</h2>
        <p>
          Notre mission est d’allier <strong>efficacité professionnelle</strong> et{" "}
          <strong>sens humain du service</strong>. Chaque transport, chaque livraison, chaque
          interaction représente pour nous une occasion d’apporter du soutien, de la fiabilité et du
          respect à ceux et celles que nous servons. Nous croyons qu’une entreprise peut être à la
          fois <strong>performante et profondément humaine</strong>. Chez Amavie, nous avons{" "}
          <strong>du cœur et des bras pour vous servir</strong>, peu importe qui vous êtes ou où
          vous êtes.
        </p>

        <h2>Nos valeurs</h2>
        <div className="valeurs">
          <div className="valeur">
            <h3>Respect et bienveillance</h3>
            <p>
              Chaque client est traité avec dignité, sans distinction. Nous faisons passer l’humain
              avant tout.
            </p>
          </div>

          <div className="valeur">
            <h3>Engagement et rigueur</h3>
            <p>Nous honorons chaque engagement, avec ponctualité et sérieux.</p>
          </div>

          <div className="valeur">
            <h3>Innovation responsable</h3>
            <p>
              Nous cherchons constamment à améliorer nos services, tout en gardant des pratiques
              durables et éthiques.
            </p>
          </div>

          <div className="valeur">
            <h3>Ouverture et diversité</h3>
            <p>
              Amavie s’adresse à tous : aînés, familles, entreprises et institutions — sans
              barrières ni préjugés.
            </p>
          </div>
        </div>

        <h2>Notre équipe et notre vision</h2>
        <p>
          Derrière Amavie se trouve une équipe de <strong>professionnels passionnés</strong>, issus
          du domaine de la santé, du transport et du service à la clientèle. Ensemble, nous
          partageons une vision commune : <strong>moderniser le transport de proximité</strong> tout
          en gardant ce qui compte le plus — la chaleur humaine. Nous voulons bâtir une entreprise
          qui grandit avec ses valeurs, qui s’étend sans se dénaturer, et qui devient une{" "}
          <strong>référence du service humain et fiable au Québec.</strong>
        </p>

        <h2>Une entreprise d’ici, au service d’ici</h2>
        <p>
          Ancrés en <strong>Outaouais</strong>, nous travaillons main dans la main avec les
          communautés locales, en mettant notre énergie au service des aînés, des particuliers, des
          établissements et des entreprises régionales. Pour nous, Amavie n’est pas qu’un nom :{" "}
          <strong>
            c’est une promesse — celle de transporter, livrer et accompagner avec amour et vie.
          </strong>
        </p>
      </section>

    </>
  );
}
