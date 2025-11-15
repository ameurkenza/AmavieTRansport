import NavigationBar from "./components/navbar";
import Footer from './components/footer';

import Home from './pages/home';
import Apropos from './pages/apropos'; // ← AJOUT
import Contact from './pages/contact';
import Services from "./pages/services";



function App() {
  const path = window.location.pathname; // ← AJOUT

  return (
    <>
      <NavigationBar />

      {/* Routing simple */}
      {path === "/" && <Home />}
      {path === "/apropos" && <Apropos />}
      {path === "/contact" && <Contact />}
      {path === "/services" && <Services />}

      <Footer />
    </>
  );
}

export default App;
