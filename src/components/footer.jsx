import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-amavie">

      <p className="footer-main">
        © 2025 <strong>Amavie Transport & Livraison</strong> — 
        Filiale du <strong>Groupe Amavie Inc.</strong> | Tous droits réservés.
      </p>

      <p className="footer-contact">
        <a href="mailto:info@groupeamavie.ca">info@groupeamavie.ca</a> · 
        {/* <a href="tel:8196642051">819-664-2051</a> */}
      </p>

    </footer>
  );
}
