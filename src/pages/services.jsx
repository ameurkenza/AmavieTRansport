import React from "react";
import "./services.css";

export default function Services() {
  return (
    <div className="services-wrapper">

      {/* HEADER / BANNIÈRE */}
      <div className="services-banner">
        <h1>Nos Services</h1>
        <p>
          Des solutions de transport fiables, rapides et adaptées à tous vos besoins.
          Amavie Transport & Livraison vous accompagne avec professionnalisme.
        </p>
      </div>

      {/* SECTION CTA SÉPARÉE — GRAND ET VISIBLE */}
      <section className="cta-section">
        <p className="cta-phrase">
          Contactez-nous dès aujourd’hui et obtenez une solution adaptée à votre situation.
        </p>

        <a href="/contact" className="cta-big-btn">
          Contactez-nous
        </a>
      </section>

      {/* SECTION 1 — LIVRAISON */}
      <section className="services-section">
        <h2 className="section-title">Livraison</h2>

        <div className="card-row">
          <div className="service-card">
            <h3>Livraison B2B</h3>
            <p>Transport entre commerces : restaurants, pharmacies, boutiques, distributeurs.</p>
          </div>

          <div className="service-card">
            <h3>Livraison B2C</h3>
            <p>Livraison directe entre entreprises et particuliers, avec suivi professionnel.</p>
          </div>

          <div className="service-card">
            <h3>Livraison express</h3>
            <p>Service prioritaire pour vos colis urgents, traitement accéléré garanti.</p>
          </div>

          <div className="service-card">
            <h3>Livraison planifiée</h3>
            <p>Livraisons programmées à l’heure désirée pour vos clients récurrents.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRANSPORT */}
      <section className="services-section">
        <h2 className="section-title">Transport</h2>

        <div className="card-row">
          <div className="service-card">
            <h3>Colis volumineux</h3>
            <p>Transport professionnel pour les objets lourds et encombrants.</p>
          </div>

          <div className="service-card">
            <h3>Équipements</h3>
            <p>Transport spécialisé pour matériel médical, machines et équipements professionnels.</p>
          </div>

          <div className="service-card">
            <h3>Services réguliers</h3>
            <p>Possibilité de contrats hebdomadaires ou mensuels avec votre entreprise.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DÉMÉNAGEMENT */}
      <section className="services-section">
        <h2 className="section-title">Déménagement</h2>

        <div className="card-row">
          <div className="service-card">
            <h3>Déménagement résidentiel</h3>
            <p>Service complet pour appartements, maisons ou logements. Transport sécurisé et soigné.</p>
          </div>

          <div className="service-card">
            <h3>Déménagement commercial</h3>
            <p>Transport efficace pour bureaux, commerces et entreprises, avec organisation professionnelle.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
