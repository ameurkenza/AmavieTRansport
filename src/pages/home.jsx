import { useEffect } from "react";
import "./home.css";

export default function Home() {

  // --- Animation d'apparition des sections ---
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2, // 20% visible
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  return (
    <>

      {/* HERO */}
      <section className="hero fade-section">
        <img
          src="/logoamavie.png"
          alt="Logo Amavie Transport"
          className="hero-logo"
        />
        <div className="hero-content">
          <h1>Amavie Transport & Livraison</h1>
          <p>
            Des solutions de transport et de livraison sécurisées, humaines et fiables,
            au service de la santé, des entreprises et des particuliers.
          </p>
          <a href="/services" className="btn-primary">
            Découvrir nos services
          </a>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="intro-section fade-section">
        <h2>Qui sommes-nous ?</h2>
        <p>
          <strong>Amavie Transport & Livraison</strong> est une filiale du{" "}
          <strong>Groupe Amavie Inc.</strong>, une entreprise québécoise spécialisée dans
          le <strong>transport, la livraison et le déménagement léger</strong>.
          Nous accompagnons les particuliers, les aînés et les entreprises avec une approche
          fondée sur <em>l’efficacité, la bienveillance et le respect.</em>
        </p>
        <a href="/apropos" className="btn-primary">
          En savoir plus
        </a>
      </section>

      {/* ENGAGEMENTS */}
      <section className="engagements fade-section">
        <h2>Nos engagements</h2>
        <div className="engagements-grid">
          <div className="engagement">
            <h3>Service humain</h3>
            <p>
              Chaque client est accueilli avec respect, empathie et professionnalisme.
              Nous plaçons l’humain avant tout.
            </p>
          </div>
          <div className="engagement">
            <h3>Fiabilité</h3>
            <p>Nos transports et livraisons sont effectués avec ponctualité, rigueur et soin.</p>
          </div>
          <div className="engagement">
            <h3>Responsabilité</h3>
            <p>
              Nous favorisons une approche durable et responsable, en soutenant les communautés locales.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT RAPIDE */}
      <section className="contact-home fade-section">
        <h2>Besoin d’un service de transport ou de livraison ?</h2>
        <p>Contactez-nous dès aujourd’hui pour obtenir une réponse rapide et personnalisée.</p>
        <a href="/contact" className="btn-primary">
          Nous contacter
        </a>
      </section>

    </>
  );
}
