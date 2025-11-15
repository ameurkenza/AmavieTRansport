import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

function NavigationBar() {
  const path = window.location.pathname;

  return (
    <Navbar expand="lg" fixed="top" className="amavie-navbar">
      <Container fluid className="d-flex justify-content-between align-items-center">

        <Navbar.Brand href="/">
          <img
            src="/logoamavie.png"
            alt="Logo Amavie"
            className="amavie-logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-links">
            <Nav.Link href="/" className={path === "/" ? "active" : ""}>
              Accueil
            </Nav.Link>

            <Nav.Link href="/services" className={path === "/services" ? "active" : ""}>
              Services
            </Nav.Link>

            <Nav.Link href="/apropos" className={path === "/apropos" ? "active" : ""}>
              À propos
            </Nav.Link>

            <Nav.Link href="/contact" className={path === "/contact" ? "active" : ""}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
